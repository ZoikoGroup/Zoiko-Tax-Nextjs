// Release configuration for the Taxxon BFF. Every value that Doc 03 §10 says
// SRE/Product must set from measurement (TTL, quotas, timeouts) is a named,
// provisional default here so it is easy to find and replace, never a promise.

export const ASSISTANT_ID = "ztax-public-taxxon"; // stable internal ID (Doc 01 §1)
export const ASSISTANT_VERSION = "1.0";
export const POLICY_VERSION = "pol_taxxon_1.0";

export const LIMITS = {
  /** Visitor message length (Doc 01 WF-01 H: character limit). */
  maxMessageChars: 1000,
  maxBodyBytes: 8 * 1024,
  /** Short TTL opaque session (Doc 01 §8). Provisional; SRE to confirm. */
  sessionTtlMs: 30 * 60 * 1000,
  maxSessions: 5000,
  /** Provisional abuse limits (Doc 03 §7); SRE to confirm from measurement. */
  messagesPerSessionPerMinute: 12,
  sessionsPerClientPerMinute: 10,
  feedbackPerSessionPerMinute: 10,
};

function flag(name: string): boolean {
  const v = process.env[name];
  return v === "1" || v === "true";
}

/**
 * Incident kill switch (Doc 03 §7): disables generation while the widget keeps
 * a static official contact path.
 */
export function generationDisabled(): boolean {
  return flag("TAXXON_DISABLED");
}

/**
 * Draft-content preview. Doc 04 marks every KB article, CTA and coverage record
 * as unapproved, and the backend must reject unapproved material. Preview lets
 * engineering and content reviewers see drafts outside production, labelled as
 * such on every answer; it can never be switched on in a production build.
 */
export function previewContentEnabled(): boolean {
  return process.env.NODE_ENV !== "production" && flag("TAXXON_CONTENT_PREVIEW");
}

/** Extra allowed Origins for the same-origin BFF (comma-separated, exact match). */
export function allowedOrigins(): string[] {
  return (process.env.TAXXON_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}
