// POST /api/public/taxxon/v1/feedback (ZTAX-CHAT-INT-003 §3, §8). A choice
// and an optional controlled reason code tied to an opaque response ID.
// Confidential free text is rejected by default.

import { LIMITS } from "@/lib/taxxon/config";
import { fail, json, onlyFields, readBody } from "@/lib/taxxon/http";
import { allow, getSession, opaqueId } from "@/lib/taxxon/session";
import { emit } from "@/lib/taxxon/telemetry";
import { FEEDBACK_REASONS, type FeedbackChoice, type FeedbackReason } from "@/lib/taxxon/types";

const CHOICES: FeedbackChoice[] = ["helpful", "not_helpful", "report"];

export async function POST(request: Request): Promise<Response> {
  const traceId = opaqueId("trc");
  const body = await readBody(request);
  if (body instanceof Response) return body;
  const unexpected = onlyFields(body, ["session_id", "response_id", "choice", "reason_code"]);
  if (unexpected) return unexpected;

  const { session_id, response_id, choice, reason_code } = body;
  if (typeof session_id !== "string" || typeof response_id !== "string") return fail("invalid_input", "session_id and response_id are required.", traceId);
  if (!CHOICES.includes(choice as FeedbackChoice)) return fail("invalid_input", "choice must be helpful, not_helpful or report.", traceId);
  if (reason_code !== undefined && !FEEDBACK_REASONS.includes(reason_code as FeedbackReason)) {
    return fail("invalid_input", "reason_code is not a recognised reason.", traceId);
  }

  const now = Date.now();
  const session = getSession(session_id, now);
  if (session === undefined || session === "expired" || !session.responseIds.has(response_id)) {
    return fail("session_or_access_denied", "That answer can no longer receive feedback.", traceId);
  }
  // One feedback event per response: no duplicate writes on retry.
  const eventId = opaqueId("fbk");
  if (session.feedbackGiven.has(response_id)) return json({ event_id: eventId, accepted: true }, 202);
  if (!allow(session.feedbackTimes, LIMITS.feedbackPerSessionPerMinute, now)) return fail("rate_limited", "Please wait a moment and try again.", traceId);
  session.feedbackGiven.add(response_id);
  emit("taxxon.feedback.recorded", { response_id, choice: choice as string, reason_code: reason_code as string | undefined, event_id: eventId });
  return json({ event_id: eventId, accepted: true }, 202);
}
