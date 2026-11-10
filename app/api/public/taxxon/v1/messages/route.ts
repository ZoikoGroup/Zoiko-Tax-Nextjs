// POST /api/public/taxxon/v1/messages (ZTAX-CHAT-INT-003 §3). Non-streaming:
// Doc 03 permits shipping non-streaming first, and nothing unvalidated is
// ever flushed to the visitor.

import { LIMITS, POLICY_VERSION, generationDisabled } from "@/lib/taxxon/config";
import { fail, json, onlyFields, readBody } from "@/lib/taxxon/http";
import { respond } from "@/lib/taxxon/orchestrator";
import { normaliseText } from "@/lib/taxxon/policy";
import { allow, getSession, opaqueId, payloadHash } from "@/lib/taxxon/session";
import { emit, latencyBucket } from "@/lib/taxxon/telemetry";
import { isIntent } from "@/lib/taxxon/types";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function POST(request: Request): Promise<Response> {
  const started = Date.now();
  const traceId = opaqueId("trc");
  if (generationDisabled()) return fail("temporarily_unavailable", "I cannot retrieve verified information just now. Please retry or use our official contact route.", traceId);

  const body = await readBody(request);
  if (body instanceof Response) return body;
  const unexpected = onlyFields(body, ["session_id", "client_message_id", "text", "intent_hint"]);
  if (unexpected) return unexpected;

  const { session_id, client_message_id, text, intent_hint } = body;
  if (typeof session_id !== "string" || session_id.length > 64) return fail("invalid_input", "session_id is required.", traceId);
  if (typeof client_message_id !== "string" || !UUID.test(client_message_id)) return fail("invalid_input", "client_message_id must be a UUID.", traceId);
  if (typeof text !== "string" || text.length > LIMITS.maxMessageChars * 2) return fail("invalid_input", `text must be at most ${LIMITS.maxMessageChars} characters.`, traceId);
  if (intent_hint !== undefined && !isIntent(intent_hint)) return fail("invalid_input", "intent_hint is not a recognised intent.", traceId);

  const clean = normaliseText(text);
  if (clean === "") return fail("invalid_input", "Please enter a question.", traceId);

  const now = Date.now();
  const session = getSession(session_id, now);
  if (session === undefined) return fail("session_or_access_denied", "This chat session is not recognised. Start a new chat.", traceId);
  if (session === "expired") return fail("session_expired_or_version_conflict", "This chat session has expired. Start a new chat.", traceId);

  // client_message_id is the idempotency key: a retry returns the stored safe
  // response; the same key with a different payload is a conflict.
  const hash = payloadHash(clean, intent_hint ?? "");
  const prior = session.turns.get(client_message_id);
  if (prior) {
    if (prior.hash !== hash) return fail("session_expired_or_version_conflict", "That message ID was already used for a different message.", traceId);
    return json(prior.response, 200);
  }
  if (!allow(session.messageTimes, LIMITS.messagesPerSessionPerMinute, now)) {
    return fail("rate_limited", "You're sending messages quickly. Please wait a moment and try again.", traceId);
  }

  try {
    const response = respond(session, clean, intent_hint, traceId, new Date(now));
    session.turns.set(client_message_id, { hash, response });
    emit("taxxon.response.completed", {
      response_id: response.response_id,
      trace_id: traceId,
      intent: response.intent,
      disposition: response.disposition,
      coverage_status: response.coverage_status,
      preview: response.preview_content,
      policy_version: POLICY_VERSION,
      latency_bucket: latencyBucket(Date.now() - started),
    });
    return json(response, 200);
  } catch {
    emit("taxxon.response.completed", { trace_id: traceId, disposition: "error", error_type: "internal" });
    return fail("temporarily_unavailable", "I cannot retrieve verified information just now. Please retry or use our official contact route.", traceId);
  }
}
