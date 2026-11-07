// POST /api/public/taxxon/v1/sessions (ZTAX-CHAT-INT-003 §3).

import { ASSISTANT_VERSION, POLICY_VERSION, generationDisabled, previewContentEnabled } from "@/lib/taxxon/config";
import { utilityCtas } from "@/lib/taxxon/cta";
import { clientKey, fail, json, onlyFields, readBody } from "@/lib/taxxon/http";
import { allowNewSession, createSession, opaqueId, type Channel } from "@/lib/taxxon/session";
import { emit } from "@/lib/taxxon/telemetry";
import type { SessionStarted } from "@/lib/taxxon/types";

const CHANNELS: Channel[] = ["website", "suite_public"];
const LOCALES = ["en-US"];

export async function POST(request: Request): Promise<Response> {
  const traceId = opaqueId("trc");
  if (generationDisabled()) return fail("temporarily_unavailable", "Chat is temporarily unavailable.", traceId);

  const body = await readBody(request);
  if (body instanceof Response) return body;
  const unexpected = onlyFields(body, ["channel", "locale", "consent_context"]);
  if (unexpected) return unexpected;

  const channel = body.channel as Channel;
  if (!CHANNELS.includes(channel)) return fail("invalid_input", "channel must be website or suite_public.", traceId);
  // Plain US English by default; no other locale pack is approved (Doc 01 §5).
  const locale = typeof body.locale === "string" && LOCALES.includes(body.locale) ? body.locale : "en-US";
  if (body.consent_context !== undefined && (typeof body.consent_context !== "string" || body.consent_context.length > 64)) {
    return fail("invalid_input", "consent_context must be a short opaque string.", traceId);
  }

  const now = Date.now();
  if (!allowNewSession(clientKey(request), now)) return fail("rate_limited", "Too many new chats. Please try again shortly.", traceId);

  const session = createSession(channel, locale, now);
  emit("taxxon.session.started", { channel, locale, trace_id: traceId, policy_version: POLICY_VERSION });
  const out: SessionStarted = {
    session_id: session.id,
    assistant_version: ASSISTANT_VERSION,
    policy_version: POLICY_VERSION,
    trace_id: traceId,
    expires_at: new Date(session.expiresAt).toISOString(),
    preview_content: previewContentEnabled(),
    utility_ctas: utilityCtas(),
  };
  return json(out, 201);
}
