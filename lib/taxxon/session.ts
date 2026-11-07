// Ephemeral anonymous sessions (Doc 03 §2 zone 2, §8). An opaque random ID,
// channel and locale; no person or tenant linkage, no visitor text retained
// beyond the stored safe response used for idempotent replay.
//
// In-process store: one Node instance holds its own sessions. A multi-instance
// deployment needs a shared ephemeral store with the same interface.

import { createHash, randomBytes } from "node:crypto";

import { LIMITS } from "./config";
import type { CoverageScope, TaxxonResponse } from "./types";

export type Channel = "website" | "suite_public";

export interface Session {
  id: string;
  channel: Channel;
  locale: string;
  createdAt: number;
  expiresAt: number;
  /** WF-03 scope collected so far, from explicit visitor answers only. */
  pendingCoverage?: CoverageScope;
  /** The last checked scope, so a follow-up asks only for what changed (Doc 02 S1). */
  lastCoverage?: CoverageScope;
  /** The website page the last answer quoted, and the sections already shown, for "tell me more". */
  lastSite?: { url: string; shown: string[] };
  /** Doc 01 FUNC-01: an ambiguous request is clarified once, then routed. */
  intentClarifyAsked: boolean;
  /** client_message_id -> canonical payload hash + stored safe response. */
  turns: Map<string, { hash: string; response: TaxxonResponse }>;
  responseIds: Set<string>;
  feedbackGiven: Set<string>;
  messageTimes: number[];
  feedbackTimes: number[];
}

const store: { sessions: Map<string, Session>; clients: Map<string, number[]> } =
  ((globalThis as Record<string, unknown>).__taxxonStore as typeof store | undefined) ??
  ((globalThis as Record<string, unknown>).__taxxonStore = { sessions: new Map(), clients: new Map() });

export function opaqueId(prefix: string): string {
  return `${prefix}_${randomBytes(16).toString("base64url")}`;
}

export function payloadHash(...parts: string[]): string {
  return createHash("sha256").update(parts.join("\u0000")).digest("hex");
}

function sweep(now: number) {
  for (const [id, s] of store.sessions) if (s.expiresAt <= now) store.sessions.delete(id);
  for (const [k, times] of store.clients) if (times.every((t) => now - t > 60_000)) store.clients.delete(k);
}

/** Sliding one-minute window; records the hit when allowed. */
export function allow(times: number[], perMinute: number, now: number): boolean {
  while (times.length > 0 && now - times[0] > 60_000) times.shift();
  if (times.length >= perMinute) return false;
  times.push(now);
  return true;
}

export function allowNewSession(clientKey: string, now: number): boolean {
  const times = store.clients.get(clientKey) ?? [];
  store.clients.set(clientKey, times);
  return allow(times, LIMITS.sessionsPerClientPerMinute, now);
}

export function createSession(channel: Channel, locale: string, now: number): Session {
  sweep(now);
  if (store.sessions.size >= LIMITS.maxSessions) {
    const oldest = [...store.sessions.values()].sort((a, b) => a.createdAt - b.createdAt)[0];
    if (oldest) store.sessions.delete(oldest.id);
  }
  const s: Session = {
    id: opaqueId("ses"),
    channel,
    locale,
    createdAt: now,
    expiresAt: now + LIMITS.sessionTtlMs,
    intentClarifyAsked: false,
    turns: new Map(),
    responseIds: new Set(),
    feedbackGiven: new Set(),
    messageTimes: [],
    feedbackTimes: [],
  };
  store.sessions.set(s.id, s);
  return s;
}

export function getSession(id: string, now: number): Session | "expired" | undefined {
  const s = store.sessions.get(id);
  if (!s) return undefined;
  if (s.expiresAt <= now) {
    store.sessions.delete(id);
    return "expired";
  }
  return s;
}
