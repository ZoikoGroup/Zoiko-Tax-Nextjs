export interface FitCard {
  eyebrow: string;
  iconSrc: string;
  title: string;
  description: string;
}

export const FIT_CARDS: FitCard[] = [
  {
    eyebrow: "Synchronous API",
    iconSrc: "/bulk-batch/arrow-right.png",
    title: "Request → response",
    description:
      "For contract-defined synchronous interactions and approved current-state checks. An API response has the meaning defined by its versioned contract.",
  },
  {
    eyebrow: "Asynchronous bulk job",
    iconSrc: "/bulk-batch/arrow-left-right.png",
    title: "Submit → process → retrieve",
    description:
      "For high-volume ingestion or export patterns with a governed lifecycle, validation and item-level outcomes. Acceptance does not mean completion.",
  },
  {
    eyebrow: "Event notification",
    iconSrc: "/bulk-batch/bell.png",
    title: "Notify → interpret",
    description:
      "For governed notifications and delivery semantics. An event may describe a change; it does not execute a bulk job or replace authoritative verification.",
  },
];

export interface FinderSelect {
  label: string;
  value: string;
}

export const FINDER_SELECTS: FinderSelect[] = [
  { label: "Integration family", value: "All governed families" },
  { label: "Direction", value: "All controlled directions" },
  { label: "Published version", value: "No versions supplied" },
  { label: "Sort", value: "Label / currentness" },
];

export const FINDER_NOTE =
  "Recommended families: Billing/BSS · ERP/GL · Existing tax engines · E-invoicing · Enterprise data · OEM/Embedded. Ingestion / Export and lifecycle filters apply only where registry-defined. No performance ranking.";

export interface RecoveryCard {
  title: string;
  description: string;
}

export const RECOVERY_CARDS: RecoveryCard[] = [
  {
    title: "No matches",
    description:
      "Clear the search and reset filters. Zero results are not a capability decision; check the controlled registry and related guidance.",
  },
  {
    title: "Registry unavailable",
    description:
      "Do not present cached or unverified entries as current. Continue to canonical documentation and approved recovery routes.",
  },
];

export const PATTERN_ANATOMY: { boundary: string; detail: string }[] = [
  {
    boundary: "Purpose",
    detail:
      "Prepare governed input for asynchronous processing, or retrieve a contract-defined export. Direction and availability must be verified.",
  },
  {
    boundary: "Authority",
    detail:
      "Read/export reads defined state. Non-committing preparation does not write authoritative state. Authoritative write applies only where the controlled contract defines it.",
  },
  {
    boundary: "Lifecycle & currentness",
    detail:
      "The contract defines states and currentness evidence. No current version or production status is asserted here.",
  },
  {
    boundary: "Input / result",
    detail:
      "Input structure, manifests, validation evidence and result semantics come from the controlled source. No fixed file format or result schema is implied.",
  },
  {
    boundary: "Limits",
    detail:
      "Contract-defined. Capacity, file/batch size, concurrency and processing windows are not published by this guide.",
  },
  {
    boundary: "Idempotency",
    detail:
      "Where authoritative writes apply, preserve successful items and use the governed identity, deduplication and reprocessing mechanism.",
  },
];

export interface JobConcept {
  concept: string;
  explains: string;
  notImplied: string;
}

export const JOB_CONCEPTS: JobConcept[] = [
  {
    concept: "Submission",
    explains: "A handoff of work under an approved contract.",
    notImplied: "No public endpoint, method, host, upload mechanism or transport is specified.",
  },
  {
    concept: "Job / correlation identity",
    explains: "A way to relate submission, status and evidence.",
    notImplied: "No ID format, exact field, header or private identifier is published.",
  },
  {
    concept: "Validation",
    explains: "Check structure, version and required metadata before authoritative processing.",
    notImplied: "No invented schema, file type or uniform validation result.",
  },
  {
    concept: "Asynchronous processing",
    explains: "Work progresses independently of a synchronous response.",
    notImplied: "No completion time, queue behavior, processing window or ETA.",
  },
  {
    concept: "Result retrieval",
    explains: "Access approved result evidence using the governed mechanism.",
    notImplied: "No download URL, storage location, retrieval contract or retention claim.",
  },
  {
    concept: "Partial outcome",
    explains: "Keep item-level successes, failures and unresolved outcomes distinct.",
    notImplied: "No uniform result schema or assumption that every item succeeded.",
  },
];

export const LIFECYCLE_STEPS: { num: string; label: string; sub?: string }[] = [
  { num: "01 →", label: "Prepare" },
  { num: "02 →", label: "Submit" },
  { num: "03 →", label: "Validate" },
  { num: "04 →", label: "Process" },
  { num: "05 →", label: "Outcome", sub: "Complete / Partial / Failed" },
  { num: "06", label: "Retrieve results" },
];

export interface HandoffCard {
  iconSrc: string;
  title: string;
  description: string;
}

export const HANDOFF_CARDS: HandoffCard[] = [
  {
    iconSrc: "/bulk-batch/file-search.png",
    title: "Before processing",
    description:
      "Validate structure, version and required metadata before authoritative processing. Submission or acceptance does not bypass validation.",
  },
  {
    iconSrc: "/bulk-batch/list-checks.png",
    title: "Through the outcome",
    description:
      "Accepted work is not synchronous completion. Preserve item-level outcomes; completion alone is not proof of business success.",
  },
  {
    iconSrc: "/bulk-batch/shield-check.png",
    title: "At retrieval",
    description:
      "Use only the approved retrieval mechanism. Carry correlation, authority and currentness evidence into downstream verification.",
  },
];

export interface StateRow {
  state: string;
  meaning: string;
  nextStep: string;
}

export const JOB_STATES: StateRow[] = [
  {
    state: "Prepared",
    meaning: "Work is prepared, not submitted or accepted.",
    nextStep: "Confirm the controlled contract and input boundaries.",
  },
  {
    state: "Submitted / accepted",
    meaning: "Submission has been acknowledged where defined. Validation and processing may remain.",
    nextStep: "Follow the contract-defined status mechanism.",
  },
  {
    state: "Validating",
    meaning: "Structure, version and required metadata are being assessed.",
    nextStep: "Review controlled validation evidence when available.",
  },
  {
    state: "Processing",
    meaning: "Asynchronous work is in progress under governed semantics.",
    nextStep: "Do not infer a duration, ETA or queue position.",
  },
  {
    state: "Complete",
    meaning: "The job lifecycle has reached its defined completion state.",
    nextStep:
      "Inspect item outcomes; not every item necessarily succeeded unless the contract states so.",
  },
  {
    state: "Partial",
    meaning: "Some work has a distinct or unresolved outcome.",
    nextStep: "Preserve success, diagnose the subset and verify authority.",
  },
  {
    state: "Failed",
    meaning: "A failure has been reported under the controlled contract.",
    nextStep: "Investigate scope and integrity before governed reprocessing.",
  },
  {
    state: "Status unavailable",
    meaning: "Current status cannot be established.",
    nextStep: "Treat as unknown—not success. Check source/currentness and use approved recovery.",
  },
];

export interface ArchitectureRow {
  element: string;
  purpose: string;
}

export const ARCHITECTURE_ROWS: ArchitectureRow[] = [
  {
    element: "Pattern identity",
    purpose: "Tie the purpose and supported direction to the verified pattern and controlled version.",
  },
  {
    element: "Envelope",
    purpose:
      "Carry contract-defined context, authority and correlation—not an assumed transport wrapper.",
  },
  {
    element: "Input / manifest",
    purpose: "Describe the governed input and its supporting manifest where defined.",
  },
  {
    element: "Validation result",
    purpose: "Retain structure, version and metadata findings using controlled categories.",
  },
  {
    element: "Item result",
    purpose: "Preserve item-level outcome and diagnosis, including unresolved authority.",
  },
  {
    element: "Summary",
    purpose: "Describe the job outcome without hiding partial results or fabricating counts.",
  },
  {
    element: "Result artifact",
    purpose: "Identify retrievable result evidence through the approved contract only.",
  },
  {
    element: "Correlation",
    purpose:
      "Relate preparation, submission, processing and retrieval with safe contract-defined references.",
  },
];

export const ITEM_OUTCOMES: { title: string; description: string }[] = [
  { title: "Completed", description: "Preserve successful authoritative items." },
  { title: "Failed", description: "Diagnose the failed subset; reprocess only as governed." },
  { title: "Unresolved", description: "Investigate identity, integrity and currentness." },
  { title: "Job-level failure", description: "Establish scope before any reprocessing." },
];

export const ANTI_PATTERNS: { title: string; description: string }[] = [
  {
    title: "Retry entire batch blindly",
    description: "Can replay successful authoritative writes. Diagnose the failed subset first.",
  },
  {
    title: "Assume accepted = complete",
    description: "Skips validation, processing and item-level outcome checks.",
  },
  { title: "Publish fake limits", description: "Turns guidance into an unsupported capacity or SLA promise." },
  {
    title: "Assume fixed format",
    description: "Ignores the controlled schema, version and input contract.",
  },
  {
    title: "Log full datasets",
    description: "Exposes sensitive data. Use safe contract-defined correlation instead.",
  },
  {
    title: "Ignore partial state",
    description: "Loses item-level evidence and may hide unresolved business outcomes.",
  },
];

export interface TroubleshootingRow {
  condition: string;
  boundary: string;
  route: string;
}

export const TROUBLESHOOTING_ROWS: TroubleshootingRow[] = [
  {
    condition: "Validation concern",
    boundary:
      "Use controlled validation categories and exact versioned requirements—not fabricated error codes.",
    route: "API Reference → Integration Guides",
  },
  {
    condition: "Partial outcome",
    boundary:
      "Separate successful, failed and unresolved item evidence; establish authoritative state.",
    route: "Item diagnosis → idempotency guidance → approved downstream verification",
  },
  {
    condition: "Result unavailable",
    boundary:
      "Check approved retrieval and currentness. Do not guess a URL, regenerate behavior or retention period.",
    route: "Controlled contract → retrieval guidance → approved support",
  },
  {
    condition: "Delay / timeout",
    boundary: "Unknown duration is not an ETA or evidence of success. Do not invent a retry schedule.",
    route: "Job state guidance → controlled status mechanism",
  },
  {
    condition: "Stale / conflicting records",
    boundary:
      "Keep last-known evidence separate from current status; investigate source and version integrity.",
    route: "Changelog → contract source → approved recovery",
  },
  {
    condition: "Access / scope question",
    boundary: "Entitlement, environment and Coverage are independent of guide existence.",
    route: "Trust / Coverage → approved support or qualified engagement",
  },
];

export const SPECIMEN_ROWS: { label: string; value: string }[] = [
  { label: "Pattern", value: "<verified-bulk-pattern>" },
  { label: "Contract version", value: "<published-version>" },
  { label: "Correlation", value: "<correlation-reference>" },
  { label: "Lifecycle", value: "<contract-defined-state>" },
  { label: "Input", value: "<source-controlled-schema-or-placeholder>" },
  { label: "Result", value: "<source-controlled-result-or-placeholder>" },
];

export interface RouteCard {
  title: string;
  description: string;
  href: string;
}

export const ROUTE_CARDS: RouteCard[] = [
  {
    title: "API Reference",
    description: "Versioned contracts; synchronous and current-state context.",
    href: "/developers/api/",
  },
  {
    title: "SDKs",
    description: "Verified libraries; availability is source-controlled.",
    href: "/developers/sdks/",
  },
  {
    title: "Webhooks & Events",
    description: "Notification and delivery—not bulk execution.",
    href: "/developers/webhooks-events/",
  },
  {
    title: "Integration Guides",
    description: "Architecture and governed implementation guidance.",
    href: "/developers/integration-guides/",
  },
  {
    title: "Sandbox",
    description: "Non-production context; no implied live entitlement.",
    href: "/developers/sandbox/",
  },
  {
    title: "Changelog",
    description: "Compatibility, breaking changes and deprecation.",
    href: "/developers/changelog/",
  },
  {
    title: "Billing/BSS",
    description: "Integration-family guidance for billing systems.",
    href: "/developers/integrations/billing-bss/",
  },
  {
    title: "ERP/GL",
    description: "Integration-family guidance for enterprise finance.",
    href: "/developers/integrations/erp-gl/",
  },
  {
    title: "Coverage",
    description: "Independent capability and market readiness.",
    href: "/coverage/",
  },
  {
    title: "Trust",
    description: "Security, governance and authority boundaries.",
    href: "/trust/",
  },
  {
    title: "Qualified engagement",
    description: "Discuss exact customer scope after reviewing the docs.",
    href: "/demo/",
  },
];

export interface JourneyCard {
  eyebrow: string;
  title: string;
  description: string;
}

export const JOURNEY_CARDS: JourneyCard[] = [
  {
    eyebrow: "Engineer · Evaluate fit",
    title: "From purpose to contract",
    description:
      "Choose the surface → review lifecycle and authority → confirm contract-defined limits → API / Guide / Sandbox → check Changelog.",
  },
  {
    eyebrow: "Operations · Partial outcome",
    title: "From diagnosis to recovery",
    description:
      "Diagnose item-level failure → preserve successful writes → governed idempotent reprocessing → retrieval and currentness → controlled support.",
  },
  {
    eyebrow: "Unresolved metadata",
    title: "From unknown to evidence",
    description:
      "Treat status as unavailable → never show stale success → inspect source/version conflicts → continue to docs and approved recovery.",
  },
];

export const SAFE_STATES: { state: string; behavior: string }[] = [
  {
    state: "Loading",
    behavior:
      "Name the information being requested. Keep core documentation and canonical routes readable.",
  },
  {
    state: "Registry empty / unavailable",
    behavior:
      "Distinguish no supplied entries from unavailable metadata. Continue to controlled sources; infer no capability decision.",
  },
  {
    state: "No results / reset",
    behavior:
      "Offer clear search and reset controls. No results are not proof of unsupported capability.",
  },
  {
    state: "Version unavailable",
    behavior:
      "Display only governed version/currentness evidence; never invent a latest or current version.",
  },
  {
    state: "Limits contract-defined",
    behavior:
      "Label limits as contract-defined; link to the source rather than supplying estimates.",
  },
  {
    state: "Partial result",
    behavior: "Retain item-level outcomes and the governed recovery route. Do not collapse to success.",
  },
  {
    state: "Result unavailable",
    behavior:
      "Explain that retrieval cannot be established; use approved recovery without fake regenerate or retention behavior.",
  },
  {
    state: "Stale metadata",
    behavior: "Label last-known information distinctly. Currentness remains unverified.",
  },
  {
    state: "Conflicting records / status unavailable",
    behavior:
      "Communicate uncertainty. Investigate source, version and authority before any success claim.",
  },
  {
    state: "Unauthorized / private detail",
    behavior:
      "Use neutral, non-leaking copy and approved access guidance. Reveal no tenant, job or sensitive metadata.",
  },
  {
    state: "No JavaScript continuity",
    behavior:
      "Core explanations, ordered lifecycle text and canonical routes remain the documentation fallback; no upload or job runner is implied.",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "What is Bulk & Batch?",
    answer:
      "The public ZoikoTax documentation surface for high-volume asynchronous ingestion/export patterns. It explains lifecycle, validation, partial outcomes, retrieval and authority—not a public production file-transfer contract.",
  },
  {
    question: "When should I choose async instead of synchronous APIs?",
    answer:
      "When the governed integration pattern calls for asynchronous ingestion or export and separate outcome retrieval. Choose by purpose and controlled contract, not an assumed capacity or speed advantage.",
  },
  {
    question: "Does accepted mean completed?",
    answer:
      "No. Submission/acceptance is not validation, completed processing or authoritative business success. Review the contract-defined state and item outcomes.",
  },
  {
    question: "What does partial mean?",
    answer:
      "Work contains distinct successful, failed or unresolved item outcomes. Preserve those distinctions and diagnose the subset; completion does not necessarily mean every item succeeded.",
  },
  {
    question: "How should I reprocess safely?",
    answer:
      "Preserve successful authoritative items, diagnose failures and verify current state through an approved API or downstream workflow. Use governed idempotency and reprocessing rather than a blind whole-job retry. Unknown identity, integrity or version requires investigation.",
  },
  {
    question: "Which formats, limits and versions apply?",
    answer:
      "Only those published by the controlled registry and contract. This guide supplies no format, schema, capacity, concurrency, processing window, current version, retry schedule or retention period.",
  },
  {
    question: "How do I retrieve results?",
    answer:
      "Use the approved contract-defined retrieval mechanism and preserve item-level evidence, correlation and authority. This guide does not publish a result URL or uniform result schema.",
  },
  {
    question: "What if status or a result is unavailable?",
    answer:
      "Treat it as unknown, not success. Check controlled currentness, identity and version evidence, then use approved documentation or support recovery. Do not infer an ETA or regenerate behavior.",
  },
  {
    question: "Does documentation prove production Coverage or entitlement?",
    answer:
      "No. Guide existence is independent of Coverage, entitlement, environment, credentials and provisioning. Production access and exact customer scope are separately governed.",
  },
  {
    question: "Where are exact contracts and changes?",
    answer:
      "Use controlled registry/contract sources and API Reference for exact interfaces and semantics. Changelog owns compatibility and breaking/deprecation information; Trust and Coverage govern their respective boundaries.",
  },
];
