// Safe telemetry (Doc 03 §10). Only allowlisted dimensions leave the process:
// no visitor text, no free-form feedback, no identifiers beyond opaque IDs.

type EventName =
  | "taxxon.session.started"
  | "taxxon.intent.classified"
  | "taxxon.evidence.resolved"
  | "taxxon.response.completed"
  | "taxxon.cta.offered"
  | "taxxon.policy.denied"
  | "taxxon.feedback.recorded";

const ALLOWED_FIELDS = new Set([
  "channel",
  "locale",
  "trace_id",
  "response_id",
  "policy_version",
  "assistant_version",
  "intent",
  "disposition",
  "coverage_status",
  "defect",
  "manifest",
  "coverage_snapshot",
  "source_count",
  "freshness",
  "preview",
  "latency_bucket",
  "error_type",
  "destination_id",
  "category",
  "choice",
  "reason_code",
  "event_id",
]);

export function emit(event: EventName, fields: Record<string, string | number | boolean | undefined>): void {
  const safe: Record<string, string | number | boolean> = { event, at: new Date().toISOString() };
  for (const [k, v] of Object.entries(fields)) {
    if (ALLOWED_FIELDS.has(k) && v !== undefined) safe[k] = v;
  }
  console.info(JSON.stringify(safe));
}

export function latencyBucket(ms: number): string {
  if (ms < 100) return "lt100ms";
  if (ms < 500) return "lt500ms";
  if (ms < 2000) return "lt2s";
  return "gte2s";
}
