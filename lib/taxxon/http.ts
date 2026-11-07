// Same-origin BFF edge for /api/public/taxxon/v1 (Doc 03 §3). Strict
// Content-Type, size bound, Origin allowlist and stable error envelopes;
// never a stack trace, prompt or internal identifier.

import { LIMITS, allowedOrigins } from "./config";
import { opaqueId } from "./session";
import type { TaxxonError } from "./types";

const HEADERS = {
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "same-origin",
};

export function json(body: unknown, status: number): Response {
  return Response.json(body, { status, headers: HEADERS });
}

const STATUS: Record<TaxxonError["error"]["code"], number> = {
  invalid_input: 400,
  session_or_access_denied: 403,
  session_expired_or_version_conflict: 409,
  rate_limited: 429,
  temporarily_unavailable: 503,
};

export function fail(code: TaxxonError["error"]["code"], message: string, traceId = opaqueId("trc")): Response {
  const retryable = code === "rate_limited" || code === "temporarily_unavailable" || code === "session_expired_or_version_conflict";
  const body: TaxxonError = { error: { code, message, retryable, trace_id: traceId } };
  return json(body, STATUS[code]);
}

/** Reject cross-site callers. A missing Origin (same-origin GET-less fetch) is allowed. */
function originAllowed(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (origin === null) return true;
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? new URL(request.url).protocol.replace(":", "");
  if (host && origin === `${proto}://${host}`) return true;
  return allowedOrigins().includes(origin);
}

/** Parse a bounded JSON object body, or return the error Response to send. */
export async function readBody(request: Request): Promise<Record<string, unknown> | Response> {
  if (!originAllowed(request)) return fail("session_or_access_denied", "This endpoint only accepts requests from the Zoiko Tax website.");
  const type = request.headers.get("content-type") ?? "";
  if (!type.toLowerCase().startsWith("application/json")) return fail("invalid_input", "Content-Type must be application/json.");
  const raw = await request.text();
  if (Buffer.byteLength(raw, "utf8") > LIMITS.maxBodyBytes) return fail("invalid_input", "The request is too large.");
  try {
    const parsed: unknown = JSON.parse(raw);
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
      return fail("invalid_input", "The request body must be a JSON object.");
    }
    return parsed as Record<string, unknown>;
  } catch {
    return fail("invalid_input", "The request body is not valid JSON.");
  }
}

/** Reject any field the schema does not declare (Doc 03: no tenant_id, JWT or credentials accepted). */
export function onlyFields(body: Record<string, unknown>, allowed: string[]): Response | null {
  const extra = Object.keys(body).filter((k) => !allowed.includes(k));
  return extra.length > 0 ? fail("invalid_input", `Unexpected field: ${extra[0]}.`) : null;
}

/** Coarse client key for session-creation throttling; never logged. */
export function clientKey(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return fwd || request.headers.get("x-real-ip") || "local";
}
