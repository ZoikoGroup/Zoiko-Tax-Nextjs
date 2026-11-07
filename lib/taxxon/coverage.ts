// Public coverage projection and WF-03 scope handling (ZTAX-CHAT-KB-002 §3–5,
// ZTAX-CHAT-INT-003 §5). A coverage check is a typed product-capability query,
// never a tax-law interpretation, and the status comes only from an approved
// record: no record means "unknown", never "no".

import type {
  Capability,
  ClarificationOption,
  CoverageScope,
  CoverageStatus,
  OperatingMode,
  ScopeDimension,
} from "./types";

export const COVERAGE_SNAPSHOT_ID = "cov_unpublished";

/** Doc 03 §5 hard-required proof fields. */
export interface CoverageRecord {
  coverage_record_id: string;
  jurisdiction_iso: string;
  subdivision_code?: string;
  service_tag: string;
  capability_tag: Capability;
  operating_mode?: OperatingMode;
  programme_code?: string;
  product_version: string;
  status: Exclude<CoverageStatus, "unknown">;
  limitations: string;
  effective_from: string;
  effective_to?: string;
  public_visibility: boolean;
  approval_id: string;
  approved_by_role: string;
  approved_at: string;
  reviewed_at: string;
  review_due_at: string;
  public_source_ids: string[];
  content_revision: string;
  snapshot_id: string;
}

/**
 * The signed public projection. Doc 04 §8: "No production seed entries for
 * verified_live, limited, planned or not_offered are provided because actual
 * product release evidence has not been supplied." It stays empty until Tax
 * Content publishes a snapshot; every lookup therefore resolves to unknown.
 */
const RECORDS: CoverageRecord[] = [];

export interface CoverageResult {
  status: CoverageStatus;
  record?: CoverageRecord;
  /** Evidence defect behind an unknown result, for telemetry only. */
  defect: "none" | "no_record" | "stale" | "conflict" | "incomplete_scope";
}

/** Doc 02 §3 decision tree steps 03–05, in code. */
export function resolvePublicCoverage(scope: CoverageScope, now: Date): CoverageResult {
  if (!scope.country || !scope.service || !scope.capability) {
    return { status: "unknown", defect: "incomplete_scope" };
  }
  const matches = RECORDS.filter(
    (r) =>
      r.snapshot_id === COVERAGE_SNAPSHOT_ID &&
      r.jurisdiction_iso === scope.country &&
      (r.subdivision_code ?? null) === (scope.subdivision ?? null) &&
      r.service_tag === scope.service &&
      r.capability_tag === scope.capability &&
      (r.operating_mode === undefined || r.operating_mode === scope.mode),
  );
  if (matches.length === 0) return { status: "unknown", defect: "no_record" };

  const current = matches.filter(
    (r) =>
      r.public_visibility &&
      r.approval_id !== "" &&
      r.public_source_ids.length > 0 &&
      new Date(r.effective_from) <= now &&
      (r.effective_to === undefined || now < new Date(r.effective_to)) &&
      now < new Date(r.review_due_at),
  );
  if (current.length === 0) return { status: "unknown", defect: "stale" };
  if (new Set(current.map((r) => r.status)).size > 1 || current.length > 1) {
    return { status: "unknown", defect: "conflict" };
  }
  return { status: current[0].status, record: current[0], defect: "none" };
}

// ---------------------------------------------------------------------------
// Scope extraction: explicit visitor text only. Never from IP, locale,
// browser language or phone number (Doc 02 §1).
// ---------------------------------------------------------------------------

const COUNTRIES: [RegExp, string, string][] = [
  [/\b(united states|u\.s\.a?\.?|usa|america)\b|\bUS\b/, "US", "United States"],
  [/\b(united kingdom|u\.k\.|uk|britain|great britain|england|scotland|wales)\b|\bGB\b/, "GB", "United Kingdom"],
  [/\bcanada\b/, "CA", "Canada"],
  [/\bmexico\b/, "MX", "Mexico"],
  [/\bbrazil\b/, "BR", "Brazil"],
  [/\bbarbados\b/, "BB", "Barbados"],
  [/\bireland\b/, "IE", "Ireland"],
  [/\bgermany\b/, "DE", "Germany"],
  [/\bfrance\b/, "FR", "France"],
  [/\bspain\b/, "ES", "Spain"],
  [/\bitaly\b/, "IT", "Italy"],
  [/\bnetherlands\b/, "NL", "Netherlands"],
  [/\bbelgium\b/, "BE", "Belgium"],
  [/\bportugal\b/, "PT", "Portugal"],
  [/\bsweden\b/, "SE", "Sweden"],
  [/\bpoland\b/, "PL", "Poland"],
  [/\bindia\b/, "IN", "India"],
  [/\baustralia\b/, "AU", "Australia"],
  [/\bnew zealand\b/, "NZ", "New Zealand"],
  [/\bsingapore\b/, "SG", "Singapore"],
  [/\bjapan\b/, "JP", "Japan"],
  [/\bsouth africa\b/, "ZA", "South Africa"],
  [/\bnigeria\b/, "NG", "Nigeria"],
  [/\bkenya\b/, "KE", "Kenya"],
  [/\b(uae|united arab emirates)\b/, "AE", "United Arab Emirates"],
  [/\bsaudi arabia\b/, "SA", "Saudi Arabia"],
  [/\bphilippines\b/, "PH", "Philippines"],
  [/\b(european union|eu)\b/i, "EU", "European Union"],
];

const US_STATES: Record<string, string> = {
  alabama: "AL", alaska: "AK", arizona: "AZ", arkansas: "AR", california: "CA", colorado: "CO",
  connecticut: "CT", delaware: "DE", florida: "FL", hawaii: "HI", idaho: "ID", illinois: "IL",
  indiana: "IN", iowa: "IA", kansas: "KS", kentucky: "KY", louisiana: "LA", maine: "ME", maryland: "MD",
  massachusetts: "MA", michigan: "MI", minnesota: "MN", mississippi: "MS", missouri: "MO", montana: "MT",
  nebraska: "NE", nevada: "NV", "new hampshire": "NH", "new jersey": "NJ", "new mexico": "NM",
  "new york": "NY", "north carolina": "NC", "north dakota": "ND", ohio: "OH", oklahoma: "OK", oregon: "OR",
  pennsylvania: "PA", "rhode island": "RI", "south carolina": "SC", "south dakota": "SD", tennessee: "TN",
  texas: "TX", utah: "UT", vermont: "VT", virginia: "VA", washington: "WA", "west virginia": "WV",
  wisconsin: "WI", wyoming: "WY", "district of columbia": "DC",
};

const CA_PROVINCES: Record<string, string> = {
  ontario: "ON", quebec: "QC", "british columbia": "BC", alberta: "AB", manitoba: "MB",
  saskatchewan: "SK", "nova scotia": "NS", "new brunswick": "NB", "newfoundland": "NL",
  "prince edward island": "PE",
};

const SERVICES: [RegExp, string, string][] = [
  [/\b(voip|voice over ip|sip|interconnected voice)\b/i, "voip", "VoIP"],
  [/\b(mobile|wireless|cellular|mvno|prepaid)\b/i, "mobile", "Mobile"],
  [/\b(broadband|internet|isp|fixed wireless|fibre|fiber)\b/i, "broadband", "Broadband"],
  [/\b(landline|fixed line|fixed voice|pots)\b/i, "fixed_voice", "Fixed voice"],
  [/\b(ucaas|ccaas|cpaas|unified communications)\b/i, "ucaas_ccaas_cpaas", "UCaaS / CCaaS / CPaaS"],
  [/\b(iot|m2m|machine to machine)\b/i, "iot_m2m", "IoT / M2M"],
  [/\b(wholesale|carrier services)\b/i, "wholesale", "Wholesale"],
  [/\bsatellite\b/i, "satellite", "Satellite"],
];

const CAPABILITIES: [RegExp, Capability, string][] = [
  [/\b(calculat\w*|determination|compute)\b/i, "calculation", "Tax calculation"],
  [/\b(obligation\w*|track\w*)\b/i, "obligation_tracking", "Obligation tracking"],
  [/\b(return preparation|prepare\w* returns?|filing|returns?)\b/i, "return_preparation", "Return preparation"],
  [/\b(submission|submit\w*|e-?filing)\b/i, "submission_adapter", "Submission adapter"],
  [/\b(payment|remit\w*)\b/i, "payment_coordination", "Payment coordination"],
  [/\b(evidence|audit|replay)\b/i, "evidence_replay", "Evidence and replay"],
];

const MODES: [RegExp, OperatingMode][] = [
  [/\bnative\b/i, "native"],
  [/\bfederated\b/i, "federated"],
  [/\bshadow\b/i, "shadow_assurance"],
  [/\b(oem|embedded)\b/i, "oem_embedded"],
  [/\bmanaged\b/i, "managed_compliance"],
];

/** Longest name first, so "west virginia" is never read as "virginia". */
function byLongestName(table: Record<string, string>): [string, string][] {
  return Object.entries(table).sort(([a], [b]) => b.length - a.length);
}

export interface ScopeParse {
  scope: CoverageScope;
  /** A place name that is both a country and a subdivision (QA-20 "Georgia"). */
  ambiguous?: string;
}

export function parseScope(text: string): ScopeParse {
  const lower = text.toLowerCase();
  const scope: CoverageScope = {};

  if (/\bgeorgia\b/.test(lower) && !/\b(country of georgia|tbilisi|u\.?s\.? state|state of georgia)\b/.test(lower)) {
    return { scope, ambiguous: "Georgia" };
  }
  if (/\bstate of georgia\b/.test(lower)) {
    scope.country = "US";
    scope.subdivision = "GA";
  } else if (/\b(country of georgia|tbilisi)\b/.test(lower)) {
    scope.country = "GE";
  }

  if (!scope.country) {
    for (const [name, code] of byLongestName(US_STATES)) {
      // "washington" alone is the state; "washington dc" is the district.
      if (new RegExp(`\\b${name}\\b`).test(lower)) {
        scope.country = "US";
        scope.subdivision = name === "washington" && /\bwashington,? d\.?c\.?\b/.test(lower) ? "DC" : code;
        break;
      }
    }
  }
  if (!scope.country) {
    for (const [name, code] of byLongestName(CA_PROVINCES)) {
      if (new RegExp(`\\b${name}\\b`).test(lower)) {
        scope.country = "CA";
        scope.subdivision = code;
        break;
      }
    }
  }
  if (!scope.country) {
    for (const [re, code] of COUNTRIES) {
      // Uppercase-only alternatives (US, UK, GB) are tested on the raw text so
      // the pronoun "us" is never read as a country.
      if (re.test(lower) || re.test(text)) {
        scope.country = code;
        break;
      }
    }
  }
  for (const [re, tag] of SERVICES) {
    if (re.test(text)) {
      scope.service = tag;
      break;
    }
  }
  for (const [re, tag] of CAPABILITIES) {
    if (re.test(text)) {
      scope.capability = tag;
      break;
    }
  }
  for (const [re, mode] of MODES) {
    if (re.test(text)) {
      scope.mode = mode;
      break;
    }
  }
  return { scope };
}

/** Merge a follow-up answer into the pending scope; earlier explicit values win. */
export function mergeScope(pending: CoverageScope, next: CoverageScope): CoverageScope {
  return {
    country: pending.country ?? next.country,
    subdivision: pending.subdivision ?? (pending.country ? undefined : next.subdivision),
    service: pending.service ?? next.service,
    capability: pending.capability ?? next.capability,
    mode: pending.mode ?? next.mode,
    declined: [...new Set([...(pending.declined ?? []), ...(next.declined ?? [])])],
  };
}

/** WF-03 C-01: the next single missing dimension, or none. */
export function nextMissing(scope: CoverageScope): Exclude<ScopeDimension, "subdivision"> | null {
  const declined = new Set(scope.declined ?? []);
  if (!scope.country && !declined.has("country")) return "country";
  if (!scope.service && !declined.has("service")) return "service";
  if (!scope.capability && !declined.has("capability")) return "capability";
  return null;
}

export const NOT_SURE = "__not_sure__";

/** The visible option label, and the words a visitor may type instead of clicking it. */
export function isNotSure(text: string): boolean {
  const t = text.trim().toLowerCase().replace(/[\u2018\u2019]/g, "'").replace(/\s+/g, " ");
  return t === NOT_SURE || /^(?:(?:i'm|i am|we're|we are)\s+)?(?:not sure|unsure|not certain|no idea|don'?t know|do not know|dunno)(?:\s+yet)?[.!?]*$/.test(t);
}

export function clarificationFor(dimension: "country" | "service" | "capability"): {
  question: string;
  options: ClarificationOption[];
} {
  const notSure = { value: NOT_SURE, label: "I'm not sure" };
  switch (dimension) {
    case "country":
      return {
        question: "Which country and, where applicable, state or province are you asking about?",
        options: [
          { value: "United States", label: "United States" },
          { value: "United Kingdom", label: "United Kingdom" },
          { value: "Canada", label: "Canada" },
          notSure,
        ],
      };
    case "service":
      return {
        question: "What type of telecom service do you provide: mobile, broadband, VoIP or another service?",
        options: [...SERVICES.slice(0, 6).map(([, , label]) => ({ value: label, label })), notSure],
      };
    case "capability":
      return {
        question: "Which Zoiko Tax capability would you like me to check?",
        options: [...CAPABILITIES.map(([, , label]) => ({ value: label, label })), notSure],
      };
  }
}

export function describeScope(scope: CoverageScope): string {
  const country = COUNTRIES.find(([, code]) => code === scope.country)?.[2] ?? scope.country ?? "the selected territory";
  const sub = scope.subdivision ? `${scope.subdivision}, ` : "";
  const service = SERVICES.find(([, tag]) => tag === scope.service)?.[2] ?? scope.service ?? "the selected service";
  const capability = CAPABILITIES.find(([, tag]) => tag === scope.capability)?.[2] ?? scope.capability ?? "the selected capability";
  return `${capability.toLowerCase()} for ${service} in ${sub}${country}`;
}

/** Doc 02 §5 strict status-to-copy mapping (Doc 04 §8 wording). */
export function statusCopy(result: CoverageResult, scope: CoverageScope): { heading: string; summary: string } {
  const s = describeScope(scope);
  const r = result.record;
  switch (result.status) {
    case "verified_live":
      return {
        heading: "Verified live",
        summary: `Based on our approved coverage information dated ${r?.reviewed_at ?? ""}, Zoiko Tax supports ${s}, subject to these limits: ${r?.limitations ?? ""}`,
      };
    case "limited":
      return {
        heading: "Limited",
        summary: `Published coverage for ${s} is limited to ${r?.limitations ?? ""}. Anything outside that is not confirmed.`,
      };
    case "planned":
      return {
        heading: "Planned",
        summary: `The published roadmap marks ${s} as planned. It is not available now, and no delivery date is confirmed unless separately published.`,
      };
    case "not_offered":
      return {
        heading: "Not offered",
        summary: `Our approved current catalogue does not offer ${s}.`,
      };
    case "unknown":
      if (result.defect === "conflict") {
        return { heading: "Unable to verify", summary: "I can't confirm that point reliably. I can help you request confirmation from our team." };
      }
      if (result.defect === "stale") {
        return { heading: "Unable to verify", summary: "I can't verify current coverage for that exact scope. I can help you request confirmation." };
      }
      return {
        heading: "Unknown",
        summary: "I can't verify whether that exact jurisdiction and workflow are currently supported. I can help you request confirmation.",
      };
  }
}

export const COVERAGE_EXCLUSIONS =
  "What this does not prove: automatic filing, legal incidence, tax rates or any customer-specific entitlement.";
