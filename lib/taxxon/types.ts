// Wire types for the Taxxon public chatbot (ZTAX-CHAT-UX-001, -KB-002, -INT-003).
// Shared by the same-origin BFF (app/api/public/taxxon/v1) and the widget, so
// the browser renders exactly what the server validated and nothing else.

/** The seven launch intent families (Doc 01 §3, Doc 03 §1). */
export const INTENTS = [
  "capabilities",
  "coverage",
  "telecom_issues",
  "integration",
  "product_modes",
  "demo",
  "support",
] as const;
export type Intent = (typeof INTENTS)[number];

/** intent_hint values a client may send (Doc 03 §3: "intent_hint? from allowlist"). */
export function isIntent(value: unknown): value is Intent {
  return typeof value === "string" && (INTENTS as readonly string[]).includes(value);
}

/** Doc 03 §4: no default success. */
export type Disposition =
  | "answered"
  | "needs_clarification"
  | "not_verified"
  | "refused"
  | "handoff"
  | "error";

/** Doc 01 §8 response_type, derived from the disposition. */
export type ResponseType = "answer" | "clarification" | "refusal" | "handoff" | "error";

/** Doc 02 §5: null never maps to verified_live. */
export type CoverageStatus = "verified_live" | "limited" | "planned" | "not_offered" | "unknown";

export type Capability =
  | "calculation"
  | "obligation_tracking"
  | "return_preparation"
  | "submission_adapter"
  | "payment_coordination"
  | "evidence_replay";

export type OperatingMode = "native" | "federated" | "shadow_assurance" | "oem_embedded" | "managed_compliance";

export type ScopeDimension = "country" | "subdivision" | "service" | "capability";

/** Normalised scope: only explicit visitor selections (Doc 03 §4 "scope"). */
export interface CoverageScope {
  country?: string;
  subdivision?: string;
  service?: string;
  capability?: Capability;
  mode?: OperatingMode;
  /** Dimensions the visitor explicitly declined to give. */
  declined?: ScopeDimension[];
}

export interface AnswerBlock {
  type: "heading" | "summary" | "status" | "exclusions" | "next_step" | "notice" | "boundary";
  text: string;
}

/** Doc 02 §6 evidence[]. "Coverage reviewed" and "Law effective" are never conflated. */
export interface Evidence {
  source_id: string;
  human_title: string;
  canonical_public_url: string | null;
  approved_revision: string;
  relevant_as_of: string;
  date_kind: "content_reviewed" | "coverage_reviewed" | "law_effective" | "site_published";
}

export type CtaDestinationId =
  | "product_overview"
  | "demo_request"
  | "developer_docs"
  | "support"
  | "privacy_notice";

/** Doc 03 §4: the renderer never accepts a model-produced URL. */
export interface ApprovedCta {
  destination_id: CtaDestinationId;
  label: string;
  url: string;
  /** Doc 01 §4 lead submission: show the consent/review notice before opening. */
  requires_review_notice: boolean;
  external: boolean;
}

export interface ClarificationOption {
  value: string;
  label: string;
}

export interface Clarification {
  dimension: ScopeDimension | "intent";
  options: ClarificationOption[];
}

export interface Versions {
  assistant: string;
  policy: string;
  coverage_snapshot: string;
  manifest: string;
}

/** Canonical response envelope (Doc 01 §8, Doc 02 §6, Doc 03 §4). */
export interface TaxxonResponse {
  response_id: string;
  message_id: string;
  session_id: string;
  trace_id: string;
  intent: Intent | "unsupported";
  disposition: Disposition;
  response_type: ResponseType;
  scope?: CoverageScope;
  coverage_status?: CoverageStatus;
  answer_blocks: AnswerBlock[];
  evidence: Evidence[];
  /** Doc 03 §9: "Source unavailable" is a state, not a blank citation. */
  source_unavailable: boolean;
  approved_cta?: ApprovedCta;
  clarification?: Clarification;
  content_timestamp?: string;
  /** Suggested next questions: published FAQ headings or the starter topics. */
  follow_ups?: string[];
  /** True only in a non-production preview of unapproved draft content. */
  preview_content: boolean;
  versions: Versions;
}

export interface SessionStarted {
  session_id: string;
  assistant_version: string;
  policy_version: string;
  trace_id: string;
  expires_at: string;
  preview_content: boolean;
  /** CTAs the lower utility bar may show (approved destinations only). */
  utility_ctas: ApprovedCta[];
}

/** Stable error envelope (Doc 03 §3 reference status codes). */
export interface TaxxonError {
  error: {
    code:
      | "invalid_input"
      | "session_or_access_denied"
      | "session_expired_or_version_conflict"
      | "rate_limited"
      | "temporarily_unavailable";
    message: string;
    retryable: boolean;
    trace_id: string;
  };
}

export type FeedbackChoice = "helpful" | "not_helpful" | "report";
export const FEEDBACK_REASONS = ["incorrect", "outdated", "unclear", "unsafe", "other"] as const;
export type FeedbackReason = (typeof FEEDBACK_REASONS)[number];
