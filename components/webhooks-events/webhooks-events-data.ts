export const ROUTES = {
  apiReference: "/developers/api/",
  integrationGuides: "/integration-guides",
  changelog: "/api-changelog",
  sandbox: "/sandbox",
  sdks: "/sdks",
  bulkBatch: "/bulk-batch",
  billingBss: "/billing-bss",
  erpGl: "/erp-general-ledger",
  eInvoicing: "/e-invoicing-networks",
  developers: "/developers/",
  trust: "/trust/",
  coverage: "/coverage-overview",
};

export const BG = {
  hero: "/webhooks-events/hero-bg.webp",
  surface: "/webhooks-events/surface-bg.webp",
  anatomy: "/webhooks-events/anatomy-bg.webp",
  verification: "/webhooks-events/verification-bg.webp",
  delivery: "/webhooks-events/delivery-bg.webp",
  observability: "/webhooks-events/observability-bg.webp",
  readingAid: "/webhooks-events/reading-aid-bg.webp",
  journeys: "/webhooks-events/journeys-bg.webp",
  cta: "/webhooks-events/cta-bg.webp",
};

export const HERO_DATA = {
  eyebrow: "DEVELOPERS · WEBHOOKS & EVENTS",
  headline: "Integrate with ZoikoTax through governed events and webhook contracts.",
  description:
    "Use public event-driven integration guidance to understand notification contracts, webhook verification, delivery semantics and version/change boundaries without treating illustrative content as a production event catalog.",
  actions: [
    { label: "Explore Event Contracts", href: "#event-contracts", variant: "primary" as const },
    { label: "Read API Reference", href: ROUTES.apiReference, variant: "secondary" as const },
  ],
  link: { label: "View API Changelog", href: ROUTES.changelog },
  notice:
    "Exact event names, payloads, signing mechanics, retries, ordering and delivery guarantees are governed contract data.",
  flow: {
    title: "Contract → delivery → verification → consumer",
    tag: "CONCEPTUAL · NOT A DELIVERY GUARANTEE",
    steps: [
      { icon: "contract", title: "Governed contract", description: "Discover controlled identity, version and purpose." },
      { icon: "send", title: "Delivery", description: "Interpret attempts and receipt under the contract." },
      { icon: "verify", title: "Verification", description: "Apply the protected, governed procedure." },
      { icon: "consumer", title: "Consumer", description: "Handle replay safely; check API authority." },
    ],
    footnote:
      "Discover the contract, interpret delivery, verify the notification, then resolve identity and replay before consumer action. Receipt, attempt and acknowledgement do not establish final business or fiscal success.",
  },
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "DIRECT ANSWER",
  title: "A notification contract. Not final fiscal truth.",
  description:
    "This page helps teams discover governed event guidance, understand verification and delivery boundaries, and plan replay-safe consumers. Resolve current authoritative state through the API when the contract requires it; use the Changelog for change boundaries. No production event inventory or exact delivery mechanics are supplied here.",
  links: [
    { label: "Event contracts", href: "#event-contracts" },
    { label: "Verification", href: "#verification" },
    { label: "Delivery & replay", href: "#delivery" },
    { label: "Versioning", href: "#envelope" },
    { label: "Troubleshooting", href: "#observability" },
    { label: "Related docs", href: "#related-docs" },
  ],
};

export const SURFACE_DATA = {
  eyebrow: "Choose the right surface",
  title: "Events notify. APIs resolve. Bulk executes.",
  description:
    "Select the integration surface by its role—not by assuming equivalent authority or delivery behavior.",
  cards: [
    {
      icon: "bell",
      tag: "Event notification",
      title: "Understand a signal",
      description:
        "A contract-defined notification may inform a consumer or a workflow. Its business meaning and authority are source-dependent.",
    },
    {
      icon: "send",
      tag: "Webhook delivery",
      title: "Receive a contract",
      description:
        "A transport mechanism for notifications. Delivery, verification and acknowledgement semantics come from the governed contract.",
    },
    {
      icon: "readwrite",
      tag: "API read/write",
      title: "Resolve or act",
      description:
        "Use documented read/write operations for authoritative current state or a permitted action. Notification receipt is not that action.",
    },
    {
      icon: "layers",
      tag: "Bulk execution",
      title: "Handle grouped work",
      description:
        "Consult Bulk & Batch for execution contracts. A notification does not establish completion of a bulk operation.",
    },
  ],
  notice: {
    title: "Coverage is not entitlement",
    description:
      "Coverage describes capability readiness. Entitlement and environment enablement are separate checks; neither is implied by this guidance.",
  },
};

export type EventRecord = { name: string; description: string };

// Governed public event registry. None are supplied in this view, so the
// finder renders its empty / no-match states instead of inventing entries.
export const EVENT_RECORDS: EventRecord[] = [];

export const EVENT_CONTRACTS_DATA = {
  eyebrow: "Event contracts",
  title: "Discover only what is governed and published.",
  description:
    "A registry entry must come from a controlled source. This view has no supplied production event records; examples elsewhere on the page are not catalogue entries.",
  searchLabel: "Search event contracts",
  placeholder: "Search governed names or descriptions",
  status: "No records supplied",
  helper:
    "Version, lifecycle and family facets appear only when governed records provide them. No default version or invented facet values are shown.",
  empty: {
    title: "No governed public event registry entries supplied in this view",
    description:
      "There is no event inventory to browse here. Do not infer that an event exists, is enabled or is supported. Continue with the API Reference, integration guidance and published change information.",
  },
  noMatch: {
    title: "No matching governed entries",
    description:
      "Clear the search with Reset and review the available source. No match must not become a guessed event name or version.",
  },
  links: [
    { label: "API Reference", href: ROUTES.apiReference },
    { label: "Integration Guides", href: ROUTES.integrationGuides },
    { label: "API Changelog", href: ROUTES.changelog },
  ],
  illustrative: [
    {
      tag: "Illustrative · no match",
      title: "No matching governed entries",
      description:
        "Clear the search with Reset and review the available source. No match must not become a guessed event name or version.",
    },
    {
      tag: "Illustrative · unavailable",
      title: "Registry source unavailable",
      description:
        "Keep the core guidance readable and open related docs. Do not display cached or missing records as a current, verified catalogue.",
    },
  ],
};

export const ANATOMY_DATA = {
  eyebrow: "Read an event contract",
  title: "Identity, purpose and authority stay separate.",
  description:
    "Illustrative anatomy only—not a selected published event. Every value and semantic boundary must be resolved from a governed source before implementation.",
  notice: {
    title: "Illustrative example — not a production schema",
    description:
      "Controlled identity: <event-id> · Controlled version: <version>. These are placeholders, not event names or version selections.",
  },
  headers: ["Contract element", "What the governed source must establish"] as [string, string],
  rows: [
    {
      label: "Purpose",
      value:
        "Why the notification exists, which context it describes and which consumers may rely on it. No purpose or production scope is supplied here.",
    },
    {
      label: "Informational semantics",
      value:
        "Whether the event is informational only. Do not infer business or fiscal authority from its identity or arrival.",
    },
    {
      label: "Workflow semantics",
      value:
        "Whether it permits a workflow step, and which preconditions, approvals or current-state checks apply. This is source-dependent.",
    },
    {
      label: "Follow-up API authority",
      value:
        "Whether a documented API read or write is required. The API/current-state contract remains authoritative where specified.",
    },
    {
      label: "Payload schema",
      value:
        "Read the controlled schema, compatibility rules and data-minimization boundary. A placeholder is not an implementation schema.",
    },
  ],
};

export const SUBSCRIPTION_DATA = {
  eyebrow: "Subscription concepts",
  title: "Define the boundary before the receiver.",
  description:
    "These are planning concepts—not a self-service subscription flow, activation mechanism or promise of availability.",
  cards: [
    {
      title: "Entitled context",
      description:
        "Confirm the permitted integration context independently of Coverage. Access is not established by reading public documentation.",
    },
    {
      title: "Receiver destination",
      description:
        "Establish the permitted receiving destination under the controlled provisioning process. No callback URL or endpoint is supplied.",
    },
    {
      title: "Scoped events",
      description:
        "Select only source-defined event scope if it is published and permitted. Do not infer a catalogue or universal subscription.",
    },
  ],
  lifecycle: {
    steps: ["Create", "change", "pause", "retire"],
    description:
      "Conceptual lifecycle: establish an authorized configuration, govern scope changes, pause where the controlled process permits it, then retire under that process. These labels do not imply available endpoints, immediate effect, retained history or a working subscription here.",
  },
  notice: {
    title: "Provisioning mechanics remain source-controlled",
    description:
      "Use the published integration guidance and authorized process for exact setup. Environment, entitlement, Coverage and security approval must not be collapsed into a single availability claim.",
  },
};

export const VERIFICATION_DATA = {
  eyebrow: "Verification boundary",
  title: "Verify before trusting. Resolve before acting.",
  description:
    "The sequence is conceptual. Exact signing and verification mechanics belong to the governed contract, not this illustration.",
  steps: [
    { title: "Receive", description: "Treat incoming material as untrusted until the governed checks complete." },
    {
      title: "Preserve required raw context",
      description:
        "Keep only the context required by the protected procedure. Do not reshape it before the required verification step.",
    },
    {
      title: "Apply the governed protected procedure",
      description:
        "Use the exact controlled verification instructions. No algorithm, header, credential or validation window is specified here.",
    },
    {
      title: "Reject or quarantine unverifiable material",
      description:
        "An unverifiable notification must not enter trusted processing. Never silently accept on a best-effort basis.",
    },
    {
      title: "Resolve identity, version and correlation",
      description:
        "Use source-controlled meanings. An unknown identity or version requires investigation rather than invented interpretation.",
    },
    {
      title: "Check replay safety and authority",
      description:
        "Prevent blind repeated effects. Resolve current authoritative API state where needed before consumer action.",
    },
    {
      title: "Keep minimal evidence",
      description:
        "Record permitted verification and handling evidence with safe correlation. Redact secrets and sensitive payload content.",
    },
  ],
  notice: {
    title: "Secrets are not diagnostic evidence",
    description:
      "Do not publish credentials, verification material, raw payloads or private identifiers. Use redacted, minimal evidence through an authorized support process. Restricted verification instructions remain protected; public guidance is not a substitute.",
  },
};

export const DELIVERY_DATA = {
  eyebrow: "Delivery semantics",
  title: "An attempt is not a business outcome.",
  description:
    "Illustrative text state guide—not live telemetry or an asserted ZoikoTax state machine. Interpret a state only when its meaning is defined by the governed source.",
  distinctions: ["Transport attempt ≠ receipt", "Receipt ≠ trusted verification", "Acknowledgement ≠ final success"],
  headers: ["Illustrative state", "Meaning and safe interpretation"] as [string, string],
  rows: [
    {
      label: "Prepared / queued",
      value:
        "May describe work prepared for transport. It is not evidence that the receiver was reached or that a consumer acted.",
    },
    {
      label: "Sent / attempted",
      value: "Describes a transport attempt only. It does not establish receipt, verification or consumer success.",
    },
    {
      label: "Acknowledged / accepted",
      value:
        "A source-defined acknowledgement may describe receipt or acceptance. It must not be read as final business or fiscal success.",
    },
    {
      label: "Delayed",
      value:
        "Timing or progress is unresolved under the controlled semantics. Do not show an invented ETA or assumed retry schedule.",
    },
    {
      label: "Failed",
      value:
        "Use the source-defined failure meaning to distinguish transport from recipient processing. Do not infer a final fiscal outcome.",
    },
    {
      label: "Duplicate / replayed",
      value:
        "Previously seen or replayed material requires identity and correlation checks. Arrival does not justify repeating side effects.",
    },
    {
      label: "Unknown / status unavailable",
      value: "No trustworthy current status is available. Keep uncertainty explicit; never substitute stale success.",
    },
    {
      label: "Deprecated / withdrawn",
      value:
        "Show only if a governed source supplies this lifecycle status. Consult the published change boundary before relying on it.",
    },
  ],
  notice: {
    title: "No delivery guarantee is inferred",
    description:
      "This page supplies no ETA, order, retry count or timing, retention, durability, SLA, latency or exactly-once guarantee. Read only the mechanics that the controlled contract actually publishes.",
  },
};

export const ENVELOPE_DATA = {
  eyebrow: "Envelope & change boundaries",
  title: "Keep identity stable in meaning—not guessed in shape.",
  description:
    "Separate the notification wrapper from the business payload. Names, schema versions and compatibility rules must come from the controlled contract.",
  example: {
    label: "Illustrative example — not a production schema",
    tiles: [
      { label: "Identity", value: "<event-id>" },
      { label: "Schema version", value: "<version>" },
      { label: "Correlation", value: "<correlation-reference>" },
      { label: "Payload", value: "<payload>" },
    ],
    footnote:
      "Text equivalent: a governed identity and schema version identify the contract; correlation connects permitted evidence; the payload follows its controlled schema. These concept labels are not JSON field names, wrapper keys or a wire format.",
  },
  headers: ["Boundary", "Implementation discipline"] as [string, string],
  rows: [
    {
      label: "Wrapper and payload",
      value:
        "Do not infer fields or schema from the illustration. Resolve both the envelope and payload definition from the published contract.",
    },
    {
      label: "Schema version and compatibility",
      value:
        "Do not select a default version or assume compatibility. Check the API documentation and Changelog for the published transition boundary.",
    },
    {
      label: "Correlation and minimization",
      value:
        "Use only permitted correlation references and minimal data. A correlation reference does not authorize access or prove current business state.",
    },
    {
      label: "Business / fiscal authority",
      value:
        "A valid envelope is not final truth. Follow the source-defined semantics and use authoritative API state where required.",
    },
  ],
};

export const OBSERVABILITY_DATA = {
  eyebrow: "Observability & recovery",
  title: "Make uncertainty visible. Keep evidence minimal.",
  description:
    "Use safe correlation and explicit currentness. Error meanings must come from controlled documentation; no error codes, live status or recovery deadline are supplied here.",
  headers: ["Observed condition", "Safe next step"] as [string, string],
  rows: [
    {
      label: "Verification failure",
      value:
        "Reject or quarantine under the governed procedure. Check required raw context and protected instructions; never downgrade to silent acceptance.",
    },
    {
      label: "Schema or version mismatch",
      value:
        "Stop assuming compatibility. Resolve the published schema and review the API Changelog before interpreting or processing the notification.",
    },
    {
      label: "Delayed / unknown status",
      value:
        "Keep status unresolved and avoid stale success. Consult source-defined delivery guidance and authoritative current API state where permitted.",
    },
    {
      label: "Recipient vs transport failure",
      value:
        "Distinguish the transport observation from receiver verification and consumer handling. A failed attempt does not establish a failed business outcome.",
    },
    {
      label: "Unresolved identity / correlation",
      value:
        "Investigate against the controlled identity contract. Do not invent identifiers or join unrelated private records to make the state appear resolved.",
    },
  ],
  cards: [
    {
      title: "Minimal, redacted evidence",
      description:
        "Keep permitted correlation, verification disposition and handling context. Mark whether an observation is current or unknown. Avoid raw payload logs and private identifiers.",
    },
    {
      title: "Qualified support escalation",
      description:
        "Use the authorized, source-controlled support process available to the integration context. Public guidance supplies no support endpoint, response SLA or entitlement.",
    },
  ],
};

export const READING_AID_DATA = {
  eyebrow: "Contract reading aid",
  title: "Anatomy without invented production data.",
  description:
    "Use this panel to recognize the kinds of contract information you must obtain—not as a payload, endpoint, subscription or implementation example.",
  label: "Illustrative example — not a production event, endpoint or payload schema.",
  rows: [
    { label: "Event", value: "<verified-event-label>" },
    { label: "Version", value: "<published-version>" },
    { label: "Correlation", value: "<correlation-reference>" },
    { label: "Delivery", value: "<contract-defined-state>" },
    { label: "Payload", value: "<source-controlled-schema-or-placeholder>" },
    { label: "Verification", value: "<controlled-procedure>" },
  ],
  footnote:
    "Text equivalent: the event label, version, correlation, delivery state, payload schema and verification procedure all require governed source data. This panel contains no secrets, hostnames, actual identifiers, versions or time values.",
};

export const RELATED_DOCS_DATA = {
  eyebrow: "Continue with governed documentation",
  title: "The next step is a contract—not a guess.",
  description:
    "Use these routes to check the technical source, change boundary and integration context. A route is not an availability or entitlement promise.",
  items: [
    {
      title: "API Reference",
      description: "Read/write contracts and authoritative current-state guidance.",
      path: "/developers/api/",
      href: ROUTES.apiReference,
    },
    {
      title: "SDKs & Libraries",
      description: "Source-controlled library guidance; no language or support claim implied.",
      path: "/developers/sdks/",
      href: ROUTES.sdks,
    },
    {
      title: "Bulk & Batch",
      description: "Execution contracts for grouped work, distinct from notification.",
      path: "/developers/bulk-batch/",
      href: ROUTES.bulkBatch,
    },
    {
      title: "Integration Guides",
      description: "Controlled implementation and environment guidance.",
      path: "/developers/integration-guides/",
      href: ROUTES.integrationGuides,
    },
    {
      title: "Sandbox · non-production",
      description: "Safe testing guidance; not production readiness or activation.",
      path: "/developers/sandbox/",
      href: ROUTES.sandbox,
    },
    {
      title: "API Changelog",
      description: "Published changes, version transitions and compatibility boundaries.",
      path: "/developers/changelog/",
      href: ROUTES.changelog,
    },
    {
      title: "Billing & BSS",
      description: "Integration context without inferring event or entitlement support.",
      path: "/developers/integrations/billing-bss/",
      href: ROUTES.billingBss,
    },
    {
      title: "ERP & General Ledger",
      description: "Financial integration guidance and documented authority boundaries.",
      path: "/developers/integrations/erp-gl/",
      href: ROUTES.erpGl,
    },
    {
      title: "E-Invoicing",
      description: "Documented fiscal workflow context; notification is not final authority.",
      path: "/developers/integrations/e-invoicing/",
      href: ROUTES.eInvoicing,
    },
    {
      title: "Developer Portal",
      description: "Return to the complete developer documentation context.",
      path: "/developers/",
      href: ROUTES.developers,
    },
    {
      title: "Trust Center",
      description: "Security, privacy and governance context for integration review.",
      path: "/trust/",
      href: ROUTES.trust,
    },
    {
      title: "Coverage",
      description: "Capability readiness, independent of integration entitlement.",
      path: "/coverage/",
      href: ROUTES.coverage,
    },
  ],
};

export const JOURNEYS_DATA = {
  eyebrow: "Safe discovery journeys",
  title: "Unknown must stay unknown.",
  description:
    "Illustrative reading states—not live service status. Core documentation remains readable when registry data, protected material or supplementary sources are absent.",
  roles: [
    {
      role: "Engineer",
      title: "Evaluate integration fit",
      description:
        "Compare events, webhooks, API and bulk roles. Open the technical docs, then resolve published contracts before choosing a consumer design.",
    },
    {
      role: "Security reviewer",
      title: "Check the trust boundary",
      description:
        "Review protected verification, rejection and redaction requirements. No procedure, credential or secret is inferred from the public example.",
    },
    {
      role: "Operator",
      title: "Recover without stale success",
      description:
        "Treat unknown or delayed observations as unresolved. Check controlled guidance and authoritative current state; do not reuse an old success label.",
    },
  ],
  headers: ["Illustrative page state", "Visible guidance and safe continuation"] as [string, string],
  rows: [
    {
      label: "Loading",
      value:
        "Loading governed registry information. Keep the contract guidance and related documentation visible; do not show sample records as loaded data.",
    },
    {
      label: "Empty / no published data",
      value:
        "No governed public event registry entries supplied in this view. Use the API Reference and integration guidance; this is not evidence of production absence.",
    },
    {
      label: "No match / reset",
      value:
        "No matching governed entries. Reset the search to review the supplied source; never expand the result with guessed events or versions.",
    },
    {
      label: "Registry unavailable",
      value:
        "Registry information is unavailable. Keep core docs readable and related routes visible. Do not substitute stale data as current registry truth.",
    },
    {
      label: "Version unknown",
      value:
        "The version cannot be established from the controlled source. Do not use a default; review the API Reference and Changelog before interpretation.",
    },
    {
      label: "Deprecated / withdrawn",
      value:
        "Display this state only when the governed source provides it. Review the published change boundary; do not assume migration or continued delivery.",
    },
    {
      label: "Restricted verification",
      value:
        "Protected verification instructions require the authorized process. Public conceptual guidance does not supply the restricted procedure or credentials.",
    },
    {
      label: "Payload unavailable",
      value:
        "The controlled schema or payload definition is not available in this view. Do not reconstruct fields from examples or assume a compatible format.",
    },
    {
      label: "Delivery contract-defined",
      value:
        "Read a delivery label only under its controlled semantics. No timing, retry or completion guarantee is inferred from the label.",
    },
    {
      label: "Changelog unavailable",
      value:
        "Change information is unavailable. Keep version and compatibility unresolved; do not treat missing change data as confirmation that nothing changed.",
    },
    {
      label: "No-JS / partial-CMS fallback",
      value:
        "Read the static core guidance and direct documentation routes. Registry enhancements are not required to understand the safety and authority boundaries.",
    },
  ],
  focusNote:
    "Illustrative keyboard-focus state. Clear text labels and generous targets keep actions legible without color-only or hover-only meaning.",
  notice: {
    title: "Readable without supplementary data",
    description:
      "Core guidance and direct documentation routes do not depend on registry results, restricted instructions or supplementary change data. When a source is unavailable, keep uncertainty explicit rather than inferring success.",
  },
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. No invented contracts.",
  description: "The documentation is the next step. Read the full boundary before designing a production consumer.",
  items: [
    {
      question: "What is this page for?",
      answer:
        "It provides public event-driven integration guidance: contract discovery, verification boundaries, delivery semantics, replay safety and change control. It is not a production event catalogue or a subscription console.",
    },
    {
      question: "Where do actual event names and versions come from?",
      answer:
        "Only from the governed, published contract source. No production registry entries are supplied in this view. Use the API Reference, integration guidance and API Changelog to resolve the controlled identity and version.",
    },
    {
      question: "Does a notification establish business or fiscal success?",
      answer:
        "No. An event identity, delivery attempt, receipt or acknowledgement is not final authority. Read the source-defined purpose and follow the documented API/current-state checks where required.",
    },
    {
      question: "How should webhook material be verified?",
      answer:
        "Preserve the required raw context and apply the governed protected procedure before trusted processing. Reject or quarantine unverifiable material. The exact algorithm, headers and validation windows are not supplied here.",
    },
    {
      question: "What delivery guarantees can I assume?",
      answer:
        "None beyond what the controlled source actually states. This page does not supply retry timing, counts, ordering, retention, durability, latency, SLA or exactly-once guarantees.",
    },
    {
      question: "How should duplicates and replay be handled?",
      answer:
        "Resolve controlled identity and correlation, check prior handling under the permitted history policy, and guard repeated effects. Consult authoritative API state if needed. Do not invent a TTL or rely on arrival order.",
    },
    {
      question: "What if delivery is delayed or status is unknown?",
      answer:
        "Keep uncertainty explicit and do not display stale success. Review the source-defined delivery meaning, separate recipient from transport failure, and use current API state or the authorized support process where applicable.",
    },
    {
      question: "Where can I test safely?",
      answer:
        "Start with the non-production Sandbox and controlled integration guidance. Confirm environment enablement and entitlement separately. Use no real customer, tax, tenant or secret data; sandbox guidance is not a production-readiness promise.",
    },
    {
      question: "Where are contract changes documented?",
      answer:
        "Use the published API Changelog and versioned contract documentation. If change information is unavailable, keep compatibility unresolved rather than assuming that nothing changed.",
    },
  ],
};

export const CTA_DATA = {
  eyebrow: "Build from the governed source",
  title: "Start with the contract. Then plan the integration.",
  description:
    "Read the API Reference, integration guidance and change boundaries before making implementation or availability assumptions.",
  actions: [
    { label: "Read API Reference", href: ROUTES.apiReference, variant: "primary" as const },
    { label: "Read Integration Guides", href: ROUTES.integrationGuides, variant: "secondary" as const },
  ],
  link: { label: "View API Changelog", href: ROUTES.changelog },
};
