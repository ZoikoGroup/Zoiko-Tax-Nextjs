"use client";

// Taxxon conversation state for the public assistant: the anonymous session,
// the transcript, one turn in flight at a time, cancel, retry, "New chat" and
// answer reports. Everything shown comes from the server's validated envelope.

import { useCallback, useEffect, useRef, useState } from "react";

import type { FeedbackReason, Intent, SessionStarted, TaxxonResponse } from "@/lib/taxxon/types";
import { TaxxonRequestError, taxxon } from "./client";

export const MAX_CHARS = 1000;
export const UNAVAILABLE = "Chat is temporarily unavailable.";

export type Item =
  | { kind: "visitor"; id: string; text: string }
  | { kind: "assistant"; id: string; response: TaxxonResponse }
  | { kind: "error"; id: string; text: string; retry?: Pending }
  | { kind: "note"; id: string; text: string };

export interface Pending {
  clientId: string;
  text: string;
  hint?: Intent;
  coverage: boolean;
  fromComposer: boolean;
}

export interface SendOptions {
  hint?: Intent;
  display?: string;
  fromComposer?: boolean;
}

/** `active`: start the session (first panel open, or page mount). */
export function useTaxxonChat(active: boolean) {
  const inflight = useRef<AbortController | null>(null);
  const [session, setSession] = useState<SessionStarted | null>(null);
  const [state, setState] = useState<"starting" | "ready" | "unavailable">("starting");
  const [items, setItems] = useState<Item[]>([]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState<Pending | null>(null);
  const [reviewCta, setReviewCta] = useState<string | null>(null);
  const [report, setReport] = useState<"closed" | "open" | "sent">("closed");
  const [announce, setAnnounce] = useState("");

  const startSession = useCallback(async (): Promise<SessionStarted | null> => {
    setState("starting");
    try {
      const s = await taxxon.start();
      setSession(s);
      setState("ready");
      return s;
    } catch {
      setState("unavailable");
      return null;
    }
  }, []);

  // Start an anonymous session once active. State is only set from the
  // promise callbacks, after the request settles.
  useEffect(() => {
    if (!active || session !== null || state !== "starting") return;
    let live = true;
    taxxon.start().then(
      (s) => {
        if (!live) return;
        setSession(s);
        setState("ready");
      },
      () => {
        if (live) setState("unavailable");
      },
    );
    return () => {
      live = false;
    };
  }, [active, session, state]);

  const lastResponse = [...items].reverse().find((i): i is Extract<Item, { kind: "assistant" }> => i.kind === "assistant")?.response;

  const run = useCallback(
    async (first: Pending, firstSession: SessionStarted) => {
      let p = first;
      let current = firstSession;
      const controller = new AbortController();
      inflight.current = controller;
      setPending(p);
      setAnnounce(p.coverage ? "Checking approved coverage information." : "Taxxon is responding.");
      try {
        // At most two attempts: an expired or unknown session is rotated once
        // and the turn replayed under the new one (Doc 03 §3 "rotate on expiry").
        for (let attempt = 0; ; attempt++) {
          try {
            const r = await taxxon.send(current.session_id, p.clientId, p.text, p.hint, controller.signal);
            setItems((xs) => [...xs, { kind: "assistant", id: r.response_id, response: r }]);
            setAnnounce(`Taxxon replied: ${r.answer_blocks[0]?.text ?? ""}`);
            setReport("closed");
            return;
          } catch (e) {
            const err = e instanceof TaxxonRequestError ? e : new TaxxonRequestError("network", UNAVAILABLE, true);
            if (attempt === 0 && (err.code === "session_expired_or_version_conflict" || err.code === "session_or_access_denied")) {
              const fresh = await startSession();
              if (fresh) {
                current = fresh;
                p = { ...p, clientId: crypto.randomUUID() };
                continue;
              }
            }
            if (err.code === "cancelled") {
              setItems((xs) => [...xs, { kind: "note", id: crypto.randomUUID(), text: "Cancelled. Your message has been kept so you can edit or resend it." }]);
            } else {
              const text = err.code === "rate_limited" ? err.message : "I can't verify that information at the moment. Please try again or use our official contact route.";
              const retry = err.retryable ? p : undefined;
              setItems((xs) => [...xs, { kind: "error", id: crypto.randomUUID(), text, retry }]);
              setAnnounce(text);
            }
            const kept = p.text;
            if (p.fromComposer) setDraft((d) => (d === "" ? kept : d));
            return;
          }
        }
      } finally {
        inflight.current = null;
        setPending(null);
      }
    },
    [startSession],
  );

  const send = useCallback(
    (text: string, opts: SendOptions = {}) => {
      const clean = text.trim();
      if (!clean || pending || !session) return; // no double sends
      const p: Pending = {
        clientId: crypto.randomUUID(),
        text: clean.slice(0, MAX_CHARS),
        hint: opts.hint,
        coverage: opts.hint === "coverage" || lastResponse?.intent === "coverage",
        fromComposer: opts.fromComposer ?? false,
      };
      setItems((xs) => [...xs, { kind: "visitor", id: p.clientId, text: opts.display ?? clean }]);
      if (opts.fromComposer) setDraft("");
      void run(p, session);
    },
    [pending, session, run, lastResponse],
  );

  /** Answer a clarification option on the newest answer. */
  const choose = useCallback(
    (value: string, label: string, dimension: string) =>
      dimension === "intent" ? send(label, { hint: value as Intent, display: label }) : send(value, { hint: "coverage", display: label }),
    [send],
  );

  const retry = useCallback((p: Pending) => session && void run(p, session), [run, session]);
  const cancel = useCallback(() => inflight.current?.abort(), []);

  const newChat = useCallback(async () => {
    inflight.current?.abort();
    setItems([]);
    setDraft("");
    setReport("closed");
    setReviewCta(null);
    setSession(null);
    await startSession();
  }, [startSession]);

  const sendReport = useCallback(
    async (reason: FeedbackReason) => {
      if (!session || !lastResponse) return;
      try {
        await taxxon.feedback(session.session_id, lastResponse.response_id, "report", reason);
        setReport("sent");
      } catch {
        setReport("closed");
        setItems((xs) => [...xs, { kind: "error", id: crypto.randomUUID(), text: "The report could not be sent. Please try again." }]);
      }
    },
    [session, lastResponse],
  );

  return {
    session,
    state,
    items,
    draft,
    setDraft,
    pending,
    announce,
    lastResponse,
    reviewCta,
    setReviewCta,
    report,
    setReport,
    startSession,
    send,
    choose,
    retry,
    cancel,
    newChat,
    sendReport,
  };
}

export type TaxxonChat = ReturnType<typeof useTaxxonChat>;
