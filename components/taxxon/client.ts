// Browser client for the same-origin Taxxon BFF. It sends no cookies of its
// own and no identity: the public chat is anonymous and never upgrades to a
// ZoikoSuite or Zoiko Tax session (Doc 03 §3).

import type { FeedbackChoice, FeedbackReason, Intent, SessionStarted, TaxxonError, TaxxonResponse } from "@/lib/taxxon/types";

const BASE = "/api/public/taxxon/v1";
const TIMEOUT_MS = 20_000;

export class TaxxonRequestError extends Error {
  constructor(
    readonly code: TaxxonError["error"]["code"] | "network" | "timeout" | "cancelled",
    message: string,
    readonly retryable: boolean,
  ) {
    super(message);
  }
}

async function post<T>(path: string, body: unknown, signal?: AbortSignal): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort("timeout"), TIMEOUT_MS);
  signal?.addEventListener("abort", () => controller.abort("cancelled"));
  let res: Response;
  try {
    res = await fetch(`${BASE}${path}`, {
      method: "POST",
      credentials: "omit",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } catch {
    const reason = controller.signal.reason;
    if (reason === "cancelled") throw new TaxxonRequestError("cancelled", "Request cancelled.", true);
    if (reason === "timeout") throw new TaxxonRequestError("timeout", "The request timed out.", true);
    throw new TaxxonRequestError("network", "Chat is temporarily unavailable.", true);
  } finally {
    clearTimeout(timer);
  }
  const data: unknown = await res.json().catch(() => null);
  if (!res.ok) {
    const err = (data as TaxxonError | null)?.error;
    throw new TaxxonRequestError(err?.code ?? "temporarily_unavailable", err?.message ?? "Chat is temporarily unavailable.", err?.retryable ?? true);
  }
  return data as T;
}

export const taxxon = {
  start: () => post<SessionStarted>("/sessions", { channel: "website", locale: "en-US" }),
  send: (sessionId: string, clientMessageId: string, text: string, intentHint: Intent | undefined, signal: AbortSignal) =>
    post<TaxxonResponse>(
      "/messages",
      { session_id: sessionId, client_message_id: clientMessageId, text, ...(intentHint ? { intent_hint: intentHint } : {}) },
      signal,
    ),
  feedback: (sessionId: string, responseId: string, choice: FeedbackChoice, reason?: FeedbackReason) =>
    post<{ event_id: string }>("/feedback", {
      session_id: sessionId,
      response_id: responseId,
      choice,
      ...(reason ? { reason_code: reason } : {}),
    }),
};
