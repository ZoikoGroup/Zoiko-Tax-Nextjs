export const HERO_DATA = {
  eyebrow: "DEVELOPERS · INTEGRATIONS · BILLING & BSS",
  headline: "Connect billing decisions without rebuilding your BSS.",
  description:
    "Integrate ZoikoTax into quote, commit, transaction and invoice flows while preserving clear system ownership and governed fiscal evidence.",
  actions: [
    { label: "Open API Reference", href: "/developers/api/", variant: "primary" as const },
    { label: "Explore Integration Guides", href: "/developers/integration-guides/", variant: "secondary" as const },
  ],
  sandboxLink: "Open Sandbox ↗",
  notice: {
    title: "Read architecture here. Resolve exact contracts in the docs.",
    description:
      "This page explains the integration model. Exact request/response contracts, authentication, versioning, error semantics and availability remain governed by approved developer documentation and release sources.",
  },
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct answer",
  title: "What is a Billing & BSS integration?",
  description:
    "Public architecture and implementation guidance for connecting billing/BSS transaction, quote, commit and invoice context with supported ZoikoTax fiscal decisions and evidence. Keep the systems you operate; integrate the fiscal responsibilities you need.",
  boundary: {
    title: "Not a BSS replacement.",
    description: "Not a production contract, ERP ledger or universal e-invoicing workflow. Availability is capability-specific.",
  },
};

export interface ResponsibilityLane {
  lane: string;
  subtitle: string;
  dark: boolean;
  tag: string;
  description: string;
}

export const SYSTEM_BOUNDARY_DATA = {
  eyebrow: "01 / System boundaries",
  title: "Keep ownership explicit at every handoff.",
  description: "One integration model. Distinct responsibilities. No transfer of your billing, accounting or customer workflow ownership.",
  legendLeft: "CONCEPTUAL RESPONSIBILITY SWIMLANES",
  legendRight: "OWNER & BOUNDARY · TEXT EQUIVALENT",
  lanes: [
    { lane: "Billing / BSS", subtitle: "Offer · Rating · Orchestration · Invoice", dark: false, tag: "BUSINESS & PRESENTATION OWNER", description: "Owns enterprise offers, rating, orchestration, invoice composition and customer-facing workflows. Billing presentation does not become fiscal authority." },
    { lane: "ZoikoTax", subtitle: "Determination · Obligations · Evidence", dark: true, tag: "SUPPORTED FISCAL FUNCTIONS", description: "Provides supported fiscal determination, obligations and governed evidence. The authoritative fiscal decision is distinct from its presentation in billing; approved contracts define its meaning." },
    { lane: "ERP / GL", subtitle: "Accounting · Posting", dark: false, tag: "ACCOUNTING SYSTEM OF RECORD", description: "Retains accounting and posting ownership as the system of record. Fiscal outcomes can inform approved downstream mappings, not replace ledger controls." },
    { lane: "E-invoicing / network", subtitle: "Approved transport · Authority workflow", dark: false, tag: "EXTERNAL AUTHORITY WORKFLOW", description: "External approved authority or network transport and workflow vary by Coverage. E-invoicing and CTC have a separate integration route and responsibility boundary." },
    { lane: "Evidence / audit", subtitle: "Outcomes · Versions · Linkage", dark: false, tag: "INVESTIGATIVE TRACE", description: "Traces approved outcomes, rule/content versions and supported transaction/document linkages. Evidence supports investigation; it is not compliance proof." },
  ] as ResponsibilityLane[],
  notice: {
    title: "Information flow is not synchronization or deployment topology.",
    description: "Billing supplies approved facts → ZoikoTax evaluates supported fiscal responsibilities → approved outcomes inform billing, downstream systems and evidence. External authority/network workflow remains separate. No vendor or deployment support is implied.",
  },
};

export interface StageItem {
  step: string;
  title: string;
  description: string;
}

export const QUOTE_COMMIT_DATA = {
  eyebrow: "02 / Quote → Commit",
  title: "Preview is prospective. Commit is authoritative.",
  description: "Sequence the fiscal decision before composing the downstream billing outcome.",
  sequenceNote: "Conceptual sequence — exact semantics remain contract-defined.",
  stages: [
    { step: "01", title: "Quote / preview", description: "Prospective evaluation. Not an authoritative commit." },
    { step: "02", title: "Decision context", description: "Relevant approved facts for a supported fiscal decision." },
    { step: "03", title: "Commit", description: "Authoritative binding only under approved semantics." },
    { step: "04", title: "Invoice / downstream", description: "Billing composes the invoice; each system owns its workflow." },
    { step: "05", title: "Evidence", description: "Preserve the decision trace and applicable versions." },
  ] as StageItem[],
  orderedList: [
    "Quote/preview evaluates prospective context. Exact persistence and expiry are API-defined; preview must not be treated as a committed outcome.",
    "Prepare relevant approved facts and decision context. Mutations and timing must follow the documented contract rather than local assumptions.",
    "Commit binds an authoritative decision only under approved semantics and contract-defined idempotency. Reversal and financial finality are not inferred here.",
    "Billing owns invoice composition and customer presentation. Downstream accounting and authority/network workflows retain their own responsibilities.",
    "Retain approved version and trace references across supported linkages. Do not silently substitute a current decision for historical context.",
  ],
  notice: {
    title: "Separate state context, not just visual color.",
    description: "Quote = prospective preview. Commit = authoritative decision under the approved contract. Neither label defines an expiry window, persistence guarantee, reversal rule or financial-finality policy.",
  },
};

export interface IntegrationPattern {
  title: string;
  badge: string;
  whenToUse: string;
  enterpriseSupplies: string;
  zoikoReturns: string;
  refLabel: string;
  refPath: string;
}

export const TRANSACTION_PATTERNS_DATA = {
  eyebrow: "03 / Transaction integration patterns",
  title: "Choose the pattern. Verify the contract.",
  description: "Availability is gated by the approved capability, operating mode and developer sources—not by this illustrative matrix.",
  patterns: [
    { title: "Synchronous request / response", badge: "Documented mode only · no latency guarantee", whenToUse: "A billing flow needs a documented fiscal evaluation within its request/response path.", enterpriseSupplies: "Approved transaction or quote/commit context and supported references.", zoikoReturns: "Supported fiscal decision/outcome and evidence references under the exact contract.", refLabel: "API Reference", refPath: "/developers/api/" },
    { title: "Asynchronous workflow", badge: "Only when explicitly approved", whenToUse: "The approved capability supports work and subsequent continuation outside the immediate request.", enterpriseSupplies: "Approved context, workflow identity and supported correlation.", zoikoReturns: "Documented state/outcome references and supported continuation context.", refLabel: "Integration Guides", refPath: "/developers/integration-guides/" },
    { title: "Bulk / batch", badge: "Exact limits and semantics belong to batch docs", whenToUse: "A documented bulk capability fits grouped evaluation or reconciliation needs.", enterpriseSupplies: "Approved grouped context and item identities using the exact batch contract.", zoikoReturns: "Supported item/group outcomes and documented partial-result references.", refLabel: "Bulk & Batch", refPath: "/developers/bulk-batch/" },
    { title: "Event-driven continuation", badge: "Availability and delivery are contract-defined", whenToUse: "An approved event contract supports a downstream billing continuation.", enterpriseSupplies: "Supported correlation and approved consumer configuration; no schema is defined here.", zoikoReturns: "Approved notification context, with exact schema and delivery defined in event docs.", refLabel: "Webhooks / Events", refPath: "/developers/webhooks-events/" },
    { title: "Shadow / parallel evaluation", badge: "Non-impacting · no production changes", whenToUse: "Compare supported outcomes alongside an incumbent before governed cutover.", enterpriseSupplies: "Approved comparison context, mappings and stable comparison references.", zoikoReturns: "Supported comparison evidence and differences for investigation.", refLabel: "Integration Guides · Shadow Assurance context", refPath: "/developers/integration-guides/" },
  ] as IntegrationPattern[],
  specimen: {
    tag: "ILLUSTRATIVE EXCHANGE · NOT A REQUEST/RESPONSE SCHEMA",
    stages: [
      { step: "01", title: "Enterprise context", description: "Approved facts and supported identity" },
      { step: "02", title: "Supported evaluation", description: "ZoikoTax fiscal decision under the contract" },
      { step: "03", title: "Owned continuation", description: "Billing/downstream workflow plus evidence linkage" },
    ] as StageItem[],
    textEquivalent: "Text equivalent: the enterprise provides approved context; ZoikoTax evaluates supported fiscal functions; the receiving system follows its own approved continuation. Shadow comparison must not change production outcomes and does not establish legal correctness.",
  },
  notice: {
    title: "A pattern is not an availability or performance promise.",
    description: "Follow exact API, event or bulk documentation for approved modes and their boundaries. No endpoint, payload, latency, throughput, timeout threshold or service-level commitment is specified here.",
  },
};

export interface LinkageStep {
  title: string;
}

export const INVOICE_INTEGRATION_DATA = {
  eyebrow: "04 / Invoice integration",
  title: "Link the decision. Let billing present it.",
  description: "Fiscal authority and invoice presentation are separate responsibilities.",
  linkage: {
    tag: "CONCEPTUAL LINKAGE · NO INVOICE DATA",
    steps: ["Billing transaction identity", "Supported fiscal decision", "Billing-owned invoice reference", "Reconciliation / evidence linkage"],
    textEquivalent: "Text equivalent: supported transaction and fiscal references can link to billing-owned invoice and reconciliation/evidence records where supported.",
  },
  responsibilities: [
    { title: "Identity linkage", description: "Link supported transaction and fiscal decision identity to invoice/document and evidence references. Exact formats remain API-defined." },
    { title: "Line presentation", description: "Tax/fee line presentation is conceptual here. Billing applies governed mappings; no invoice amounts or production line schema are implied." },
    { title: "Corrections & adjustments", description: "Use governed correction/adjustment references. Do not infer reversal, mutation or financial-finality rules from the illustration." },
    { title: "Reconciliation", description: "Connect approved transaction, invoice, filing, remittance and accounting concepts without transferring system-of-record ownership." },
  ],
  notice: {
    title: "ZoikoTax does not own invoice rendering, billing-account state or every posting.",
    description: "E-invoicing / CTC is a separate integration path. External authority/network transport and workflow vary by Coverage; ERP remains the accounting system of record.",
  },
  references: [
    { label: "Integration Guides · ERP and e-invoicing context", path: "/developers/integration-guides/" },
    { label: "Verify capability-specific Coverage", path: "/coverage/" },
  ],
};

export interface MappingCategory {
  category: string;
  mapping: string;
  boundary: string;
}

export const DATA_MAPPING_DATA = {
  eyebrow: "05 / Data mapping, identity & configuration",
  title: "Map the meaning before mapping the fields.",
  description: "Conceptual categories—not a production schema, real values or customer-specific settings.",
  columns: ["CONCEPTUAL CATEGORY", "GOVERNED MAPPING", "IMPLEMENTATION BOUNDARY"],
  rows: [
    { category: "Product / service", mapping: "Controlled fiscal classification", boundary: "Map approved product/service concepts to controlled fiscal classification. No customer-specific configuration is shown." },
    { category: "Transaction", mapping: "Stable identity & relevant facts", boundary: "Supply supported stable transaction identity and relevant approved facts. Exact identity and fact schemas belong to the API." },
    { category: "Customer / party", mapping: "Required approved categories only", boundary: "Use only approved party categories needed for the supported capability; avoid unrelated personal information." },
    { category: "Location / jurisdiction", mapping: "Capability-specific context", boundary: "Map location and jurisdiction facts only as required by the approved capability and Coverage." },
    { category: "Invoice / document", mapping: "Supported linkage", boundary: "Connect invoice/document references to supported transaction, fiscal outcome and evidence identities." },
    { category: "Correlation / external IDs", mapping: "Exact format is API-defined", boundary: "Use stable approved correlation references. This page specifies neither identifier values nor formats." },
  ] as MappingCategory[],
  notice: {
    title: "Data minimization is part of the integration boundary.",
    description: "Send only required facts. Never place secrets or unnecessary PII in free-text fields. Approved API contracts and governed Privacy handling—not this conceptual category list—determine what may be transmitted, stored or referenced.",
  },
};

export interface RecoveryPrinciple {
  title: string;
  description: string;
}

export const ERRORS_RECOVERY_DATA = {
  eyebrow: "06 / Errors, idempotency, retry & recovery",
  title: "An uncertain transport result is not a fiscal answer.",
  description: "Recover from governed state. Never blindly infer commit success—or failure—from a disrupted exchange.",
  diagramTag: "SAFE DECISION PATH · CONCEPTUAL",
  stages: [
    { step: "01", title: "Uncertain transport", description: "Result is unknown. Do not assume the commit state." },
    { step: "02", title: "Consult governed state", description: "Use documented current-state lookup / reconciliation." },
    { step: "03", title: "Contract-defined recovery", description: "Proceed only from the approved result and recovery rules." },
  ] as StageItem[],
  reviewBranch: "If state, source or currentness is unknown → hold the assumption → review the approved source and integration owner guidance. Never improvise a retry or compensation.",
  textEquivalent: "Text equivalent: when transport is uncertain, consult governed current state/reconciliation; then apply documented recovery. If the required source is unknown, stop inference and seek review.",
  principles: [
    { title: "Duplicate requests", description: "Use duplicate-safe, contract-defined idempotency. Exact key format, scope and retention are API-defined; none are specified here." },
    { title: "Retry / backoff", description: "Use the approved retry/backoff documentation. Do not invent timing, counts, retryable codes or compensation rules." },
    { title: "Timeout / uncertainty", description: "Transport uncertainty is not an authoritative fiscal state. Check governed current state or reconciliation before deciding what happened." },
    { title: "Validation", description: "Interpret validation through the exact error contract. Missing or unknown source semantics require review, not a guessed fix." },
    { title: "Partial failure", description: "Reconcile supported item/status references and documented status lookup. Do not guess compensating actions or assume all-or-nothing behavior." },
    { title: "Correlation", description: "Carry stable approved correlation references through requests, status review, evidence and safe support escalation. Avoid sensitive payloads." },
  ] as RecoveryPrinciple[],
  references: [
    { label: "API Reference · errors, idempotency & status", path: "/developers/api/" },
    { label: "Integration Guides · reconciliation & recovery", path: "/developers/integration-guides/" },
  ],
  notice: {
    title: "Unknown contract → review required",
    description: "Where an exact technical source is missing or not confirmed current, retain the conceptual guidance and route to the approved documentation. No error code, timeout, retry schedule or authoritative outcome is inferred.",
  },
};

export const WEBHOOKS_DATA = {
  eyebrow: "07 / Webhooks & events",
  title: "Continue the workflow. Preserve the reference.",
  description: "Use asynchronous continuation only where the approved capability and event contract support it.",
  stages: [
    { step: "01", title: "Fiscal / request context", description: "A conceptual supported workflow context—not an event name." },
    { step: "02", title: "Approved notification", description: "Schema and delivery semantics belong to the event contract." },
    { step: "03", title: "Downstream billing consumer", description: "Follow owned workflow and preserve supported evidence linkage." },
  ] as StageItem[],
  textEquivalentTitle: "Text equivalent",
  textEquivalent: "Conceptual fiscal/request context leads to an approved notification, then to a downstream billing consumer and supported evidence linkage. Use public-safe category placeholders such as “transaction reference”, “decision reference” and “correlation reference”—not actual IDs.",
  reference: { label: "Webhooks / Events", path: "/developers/webhooks-events/", description: "Exact schema, delivery, verification algorithm and retry behavior are owned by this documentation." },
  notice: {
    title: "No delivery or verification mechanism is asserted here.",
    description: "This illustration does not promise exactly-once or at-least-once delivery, prescribe a signature mechanism, identify event names or expose credentials. Resolve these details from the approved, current event contract.",
  },
};

export interface EvidenceCategory {
  title: string;
  description: string;
}

export const EVIDENCE_REPLAY_DATA = {
  eyebrow: "08 / Evidence, traceability & replay",
  title: "Make the decision trace a first-class artifact.",
  description: "Evidence is for reconstruction and investigation—not a decorative compliance badge.",
  anatomy: {
    title: "Decision evidence anatomy",
    tag: "ILLUSTRATIVE CATEGORIES · NO LIVE RECORD",
    categories: [
      { title: "Decision identity", description: "Approved reference category; no actual identifier shown." },
      { title: "Rule / content versions", description: "Pinned versions that explain the decision’s historical context." },
      { title: "Input context", description: "Required approved fact context, without sensitive payloads." },
      { title: "Outcome linkage", description: "Supported transaction, fiscal and invoice/evidence connections." },
      { title: "Replay context", description: "Supported historical replay and its governed references." },
    ] as EvidenceCategory[],
  },
  safeguards: {
    title: "Keep history explicit. Never silently substitute currentness.",
    paragraph1: "Preserve pinned rule/content versions and the approved input context associated with a decision. Historical replay is supported only under its documented capability and semantics.",
    paragraph2: "Use approved investigative references across systems. Do not expose sensitive facts, private topology, actual IDs or invented version numbers in public examples.",
    reference: "Evidence & Replay · source-backed context",
  },
  stages: [
    { step: "01", title: "Billing transaction", description: "Owned transaction context" },
    { step: "02", title: "Fiscal decision", description: "Supported decision & pinned versions" },
    { step: "03", title: "Invoice / reconciliation", description: "Approved document and outcome linkage" },
    { step: "04", title: "Evidence", description: "Governed investigative audit path" },
  ] as StageItem[],
  notice: {
    title: "Traceability supports an audit path; it is not legal or compliance proof.",
    description: "Text equivalent: billing transaction → fiscal decision → invoice/reconciliation → evidence. Preserve approved historical references and distinguish historical replay from a current evaluation. No actual records or sensitive payloads are shown.",
  },
};

export const COEXISTENCE_DATA = {
  eyebrow: "09 / Coexistence & migration",
  title: "Compare before cutover. Preserve control throughout.",
  description: "Connect around the incumbent architecture, including federated coexistence where approved.",
  stages: [
    { step: "01", title: "Discover", description: "Inventory dependencies and current ownership." },
    { step: "02", title: "Map", description: "Review products, facts, identities and destinations." },
    { step: "03", title: "Connect", description: "Controlled non-production integration." },
    { step: "04", title: "Compare", description: "Shadow evaluation without production changes." },
    { step: "05", title: "Reconcile", description: "Investigate differences and close reference gaps." },
    { step: "06", title: "Approve", description: "Governed evidence and readiness gates." },
    { step: "07", title: "Cut over", description: "Explicitly approved authority and workflow change." },
    { step: "08", title: "Operate", description: "Maintain owned controls, traceability and review." },
  ] as StageItem[],
  orderedTextEquivalent: "Discover → Map → Connect controlled non-production → Compare → Reconcile → Approve → Cut over → Operate. Inventory dependencies and map products, facts, identities and destinations. Preserve existing authority until an approved transition; investigate gaps before readiness gates.",
  shadowBoundary: {
    title: "Shadow does not change production.",
    description: "Compare supported outcomes alongside existing engines without affecting production decisions. Agreement does not establish legal correctness. Incumbent and federated coexistence remain possibilities only where approved.",
    reference: "Shadow Assurance · source-backed context",
  },
  notice: {
    title: "A governed transition—not an automatic migration.",
    description: "No zero-risk, rip-and-replace, automatic migration or guaranteed rollback claim is made. Approval, cutover and ongoing operation depend on the applicable sources, capability readiness and owned enterprise controls.",
  },
};

export const SANDBOX_DATA = {
  eyebrow: "10 / Sandbox & developer readiness",
  title: "Test the contract. Verify the capability.",
  description: "Non-production learning is not production authorization. Start with the authoritative technical sources.",
  checklist: {
    title: "Before a production decision",
    subtitle: "Review checklist · not a completed readiness assessment",
    items: [
      "Named integration owner and responsibility boundaries",
      "Governed environment and credentials confirmed through approved docs",
      "Reviewed product/service mapping and required fact categories",
      "Transaction identity and correlation strategy reviewed",
      "Errors, retry and reconciliation mapped to approved contracts",
      "Evidence and downstream references connected where supported",
      "Capability-specific Coverage verified before production",
    ],
  },
  testRefs: [
    { label: "API Reference", path: "/developers/api/", description: "Authentication, environment and exact contracts are authoritative here." },
    { label: "Sandbox", path: "/developers/sandbox/", description: "Non-production testing where available; no active environment is implied." },
    { label: "Webhooks / Events", path: "/developers/webhooks-events/", description: "Use documented event testing and exact continuation contracts." },
    { label: "Bulk & Batch", path: "/developers/bulk-batch/", description: "Use approved batch test and partial-outcome guidance." },
    { label: "Integration Guides", path: "/developers/integration-guides/", description: "Review approved Shadow comparison and integration sequencing." },
    { label: "Coverage", path: "/coverage/", description: "Confirm capability-specific readiness before production." },
  ],
  notice: {
    title: "Test results do not guarantee go-live readiness.",
    description: "Use governed environment and credential guidance from the approved sources. No real credentials, active sandbox availability or testing-to-production guarantee is shown. Coverage and owned approval gates remain separate.",
  },
};

export const SECURITY_DATA = {
  eyebrow: "11 / Security, privacy & trust",
  title: "Keep sensitive context out of public surfaces.",
  description: "Follow approved transport, Privacy handling and Trust evidence. Do not infer controls or assurances from a diagram.",
  cards: [
    { icon: "key" as const, title: "No exposed secrets", description: "Never place secrets in URLs, screenshots, analytics or examples. Use approved transport only. This page contains no operational credential screen." },
    { icon: "shield" as const, title: "Required context only", description: "Supply only required approved facts. Apply governed PII handling and Privacy guidance; do not add unnecessary PII to free-text fields or sensitive logs." },
    { icon: "message" as const, title: "Safe support references", description: "Use approved correlation references for investigation and support. Share no sensitive payloads. Trust claims must follow approved evidence—not invented certification, uptime or control guarantees." },
  ],
  references: [
    { label: "Review approved Trust evidence", path: "/trust/" },
    { label: "Privacy · governed handling guidance" },
  ],
  notice: {
    title: "Public-safe examples and references only",
    description: "Keep billing, customer, tax, invoice, secret and free-form technical data out of public examples and analytics. Evidence references are investigative context, not an assertion of compliance.",
  },
};

export interface RolePathway {
  role: string;
  title: string;
  description: string;
}

export interface SafeState {
  title: string;
  description: string;
  action: string;
}

export const IMPLEMENTATION_JOURNEY_DATA = {
  eyebrow: "12 / Implementation journey & safe states",
  title: "A docs-first path, even when the answer is unknown.",
  description: "Choose the review path for your role. Missing metadata should produce a safe next step—not invented technical truth.",
  pathways: [
    { role: "Engineer", title: "Resolve the implementation", description: "API Reference → Integration Guides → Sandbox where available. Map identities, errors, recovery and evidence to approved contracts." },
    { role: "Architect", title: "Preserve system ownership", description: "Responsibility model → pattern selection → coexistence and downstream mapping. Keep billing, ERP and authority workflows distinct." },
    { role: "Readiness owner", title: "Approve from sources", description: "Coverage → evidence and Trust review → governed approval gates. Non-production tests do not authorize production." },
  ] as RolePathway[],
  safeStatesTitle: "Safe-state guidance",
  safeStatesTag: "STATIC, EXPANDED SPECIMENS · NO CUSTOMER DATA",
  safeStates: [
    { title: "Normal conceptual docs", description: "Read architecture; open approved API contracts for exact implementation.", action: "API Reference / Integration Guides ↗" },
    { title: "Missing technical source", description: "Exact source not confirmed. Keep conceptual guidance; request the approved source before implementation.", action: "Integration owner review ↗" },
    { title: "Unavailable route", description: "Do not infer capability from a missing route. Use the related approved docs or seek source review.", action: "Related documentation ↗" },
    { title: "Unknown contract / currentness", description: "Treat exact semantics as unconfirmed. Verify approved documentation and release sources.", action: "API owner / current source ↗" },
    { title: "Unsupported Coverage", description: "Do not imply production support. Check capability-specific Coverage and approved alternatives.", action: "Coverage review ↗" },
    { title: "Uncertain result", description: "Transport is uncertain. Consult governed current state / reconciliation; never infer commit success.", action: "Documented recovery ↗" },
    { title: "Partial outcome", description: "Review item/status references. Reconcile the documented partial outcome; do not guess compensation.", action: "API / Bulk & Batch docs ↗" },
    { title: "Restricted data", description: "Do not display or transmit unnecessary sensitive context. Use safe approved correlation references.", action: "Privacy / safe support guidance ↗" },
    { title: "No-JS text fallback", description: "Architecture, ordered sequences and route labels remain the intended reading path without interactive meaning.", action: "Plain-text docs navigation ↗" },
  ] as SafeState[],
  affordances: {
    hover: { tag: "HOVER · STATIC AFFORDANCE", label: "Open API Reference" },
    focus: { tag: "FOCUS · VISIBLE OUTLINE", label: "Explore Integration Guides" },
    expanded: {
      tag: "EXPANDED · CONTENT VISIBLE",
      description: "The minus indicators above show expanded text specimens. Meaning is in the labels and guidance—not color, hover or motion. These are design affordances, not a live runtime.",
    },
  },
  notice: {
    title: "When the exact source is unavailable, keep the boundary visible.",
    description: "No guessed metadata, unsupported Coverage claim or customer-data exposure. Plain-text equivalents and documentation routes are the intended fallback. Static specimens do not implement runtime behavior, accessibility or analytics.",
  },
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA = {
  eyebrow: "13 / FAQ",
  title: "Direct answers. Clear boundaries.",
  items: [
    { question: "How does ZoikoTax integrate with billing/BSS?", answer: "By connecting approved transaction, quote, commit and invoice context with supported fiscal determination, obligations and evidence. Billing retains offer, rating, orchestration and customer-facing workflows; exact integration behavior is governed by approved API and integration documentation." },
    { question: "What is quote vs commit?", answer: "Quote/preview is prospective evaluation. Commit binds an authoritative decision only under approved semantics and idempotency. Persistence, expiry, mutation, reversal, timing and financial finality remain contract-defined—not inferred from this sequence." },
    { question: "Does it replace my BSS?", answer: "No. ZoikoTax supports fiscal functions; it does not replace your full BSS/OSS or ERP. Billing owns invoice presentation and account workflows, ERP/GL remains the accounting system of record, and external e-invoicing workflows vary by Coverage." },
    { question: "How handle retries/duplicate requests?", answer: "Use duplicate-safe contract-defined idempotency and approved retry/backoff guidance. A timeout is transport uncertainty, not commit state. Consult documented current state or reconciliation and follow exact error and recovery contracts; never guess compensation." },
    { question: "Can it run alongside an existing tax engine?", answer: "Coexistence and non-impacting Shadow/parallel evaluation are possible where approved. Compare supported outcomes without production changes before governed cutover, investigate gaps and preserve incumbent authority. Agreement is not proof of legal correctness; availability remains capability-specific." },
    { question: "Where test before production?", answer: "Start with API Reference for authentication, environment and exact contracts, then use Sandbox where available and documented event/batch testing. Verify approved Shadow comparison and Coverage separately. Non-production results do not guarantee go-live readiness." },
  ] as FAQItem[],
};

export const NEXT_STEPS_DATA = {
  eyebrow: "14 / Next steps",
  title: "Start with the technical source of truth.",
  description: "Open the approved contracts, choose the integration path, then verify capability readiness and assurance.",
  primarySteps: [
    { tag: "TECHNICAL DOCUMENTATION", title: "API Reference", description: "Exact contracts, authentication, errors and versioning.", action: "Open API Reference", path: "/developers/api/" },
    { tag: "TECHNICAL DOCUMENTATION", title: "Integration Guides", description: "Owned workflows, mappings and implementation sequence.", action: "Open Integration Guides", path: "/developers/integration-guides/" },
    { tag: "TECHNICAL DOCUMENTATION", title: "Sandbox", description: "Non-production testing where available.", action: "Open Sandbox", path: "/developers/sandbox/" },
  ],
  contextualRoutes: {
    pattern: {
      title: "AS YOUR PATTERN REQUIRES",
      links: [
        { label: "Bulk & Batch", path: "/developers/bulk-batch/" },
        { label: "Webhooks / Events", path: "/developers/webhooks-events/" },
      ],
    },
    assurance: {
      title: "CAPABILITY & ASSURANCE",
      links: [
        { label: "Coverage", path: "/coverage/" },
        { label: "Trust", path: "/trust/" },
        { label: "Evidence & Replay · source-backed context" },
      ],
    },
    demo: {
      title: "ARCHITECTURE DISCUSSION",
      description: "Need to discuss your billing scope, system ownership or coexistence plan? Book a contextual demo after reviewing the technical sources.",
      action: "Book a Demo",
      path: "/demo/",
    },
  },
  footerCta: {
    label: "Open API Reference",
    href: "/developers/api/",
    note: "Documentation first. No instant activation, free trial or credential issuance is implied.",
  },
};
