export const ROUTES = {
  integrationGuides: "/integration-guides",
  apiReference: "/api-reference",
  sandbox: "/sandbox",
  bulkBatch: "/bulk-batch",
  webhooks: "/webhooks-events",
  evidence: "/evidence-auditability",
  trust: "/trust/",
  privacy: "/trust/privacy/",
  coverage: "/coverage-overview",
  demo: "/demo/",
};

export const BG = {
  hero: "/data-enterprise-systems/hero-bg.webp",
  boundary: "/data-enterprise-systems/boundary-bg.webp",
  ownership: "/data-enterprise-systems/boundary-bg.webp",
  commercial: "/data-enterprise-systems/commercial-bg.webp",
  identity: "/data-enterprise-systems/identity-bg.webp",
  quality: "/data-enterprise-systems/quality-bg.webp",
  readiness: "/data-enterprise-systems/readiness-bg.webp",
  security: "/data-enterprise-systems/security-bg.webp",
  faq: "/data-enterprise-systems/faq-bg.webp",
  cta: "/data-enterprise-systems/cta-bg.webp",
};

export type Link = { label: string; href: string };

export const HERO_DATA = {
  eyebrow: "DEVELOPERS · INTEGRATIONS · DATA & ENTERPRISE SYSTEMS",
  headline: "Connect enterprise data without surrendering source-of-truth control.",
  description:
    "Use governed integration patterns to connect CPQ, CRM, product catalogue and approved data-platform context to ZoikoTax while preserving clear ownership, mappings and traceability.",
  actions: [
    { label: "Explore Integration Guides", href: ROUTES.integrationGuides, variant: "primary" as const },
    { label: "Open API Reference", href: ROUTES.apiReference, variant: "secondary" as const },
  ],
  link: { label: "Open Sandbox", href: ROUTES.sandbox },
  notice:
    "This page explains enterprise integration patterns. Exact supported vendors, connectors, objects, fields, synchronization behavior, environments and availability remain governed by approved technical documentation.",
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct answer",
  title: "What does ZoikoTax own in the data flow?",
  lead: "ZoikoTax consumes approved, necessary enterprise context and produces supported fiscal classification, determination, obligation and evidence outcomes. The originating systems retain authority over their customer, product and commercial domains.",
  description:
    "It is not your enterprise customer or product master, a CRM or CPQ replacement, or a data warehouse. Neither this architecture nor a conceptual example establishes vendor support, legal correctness or availability.",
  diagram:
    "Diagram in words: source domains provide approved context; governed mapping relates that context to the supported fiscal process; ZoikoTax produces supported outcomes; lineage relates the source, mapping, request and outcome for investigation.",
};

export const BOUNDARY_DATA = {
  eyebrow: "Enterprise system boundary & responsibility",
  title: "Exchange context. Keep domain authority.",
  description: "Each system has a defined job. Integration connects those jobs; it does not dissolve their boundaries.",
  panelLabel: "Source authority · Enterprise domains",
  sources: [
    { icon: "sliders", title: "CPQ", description: "Owns commercial configuration, quote and offer context." },
    { icon: "users", title: "CRM", description: "Owns customer, account and relationship context." },
    { icon: "package", title: "Product catalogue", description: "Owns product definitions and source-defined lifecycle." },
    { icon: "workflow", title: "Data platform", description: "Approved movement, analytics and orchestration—not unrestricted lake access." },
  ],
  gate: {
    title: "Governed mapping & validation",
    description: "Source contracts · Explicit domain ownership · Approved integration pattern",
    tag: "No ownership transfer",
  },
  outcomes: [
    {
      tag: "Supported outcome authority",
      title: "ZoikoTax fiscal controls",
      description: "Produces classification, determination, obligation and evidence within supported fiscal scope.",
    },
    {
      tag: "Provenance, not source replacement",
      title: "Evidence & reconciliation",
      description: "Traces source context, mappings and outcomes for investigation and reconciliation.",
    },
  ],
  diagram:
    "Diagram in words: 1. CPQ owns configuration, quotes and offers; CRM owns customers, accounts and relationships; the product catalogue owns definitions and lifecycle; the approved data platform handles movement, analytics and orchestration. 2. Only approved, necessary context crosses a governed mapping and validation boundary. 3. ZoikoTax applies supported fiscal controls. 4. Evidence and reconciliation relate the original context, mappings and resulting outcomes.",
  notice: {
    title: "Arrows are exchanges, not synchronization promises.",
    description:
      "The diagram does not claim automatic bidirectional synchronization, unrestricted data access or a supported vendor connector. Exact exchange behavior is defined by the approved contract.",
  },
};

export const DOMAINS_DATA = {
  eyebrow: "Data-domain architecture",
  title: "Start with domains, not guessed schemas.",
  description:
    "These are conceptual categories of context. The source contract owns exact field requirements, supported objects and accepted attributes.",
  cards: [
    { icon: "package", tag: "Catalogue domain", title: "Product / service", description: "Source-owned definitions and the governed mapping context needed by a supported fiscal capability." },
    { icon: "users", tag: "Party domain", title: "Party / customer", description: "Only the required party context. Connecting a CRM does not authorize consumption of its entire customer record." },
    { icon: "file", tag: "Commercial domain", title: "Transaction / quote", description: "Necessary commercial or transaction context from the source process, within the applicable integration contract." },
    { icon: "pin", tag: "Capability-specific", title: "Location / jurisdiction", description: "Capability-specific location context. Requirements and supported jurisdiction handling belong to technical documentation." },
    { icon: "book", tag: "Source-controlled", title: "Reference data", description: "Approved reference context with explicit source authority. No legal code set or classification is inferred here." },
    { icon: "fingerprint", tag: "Downstream domain", title: "Outcome / evidence", description: "Supported fiscal outputs and trace context for approved downstream use—not unrestricted extraction." },
  ],
  anatomy: {
    title: "Example anatomy · categories, not an object schema",
    steps: [
      { title: "Source domain", description: "Who is authoritative?" },
      { title: "Required context", description: "What does the contract require?" },
      { title: "Governed relation", description: "Which approved mapping applies?" },
      { title: "Supported outcome", description: "What can the capability produce?" },
    ],
    note: "Text equivalent: identify the authoritative source domain, select only contract-required context, apply its approved governed relation, and relate that context to the supported fiscal outcome. This conceptual anatomy is not a list of fields, attributes or identifier formats.",
  },
  notice:
    "All examples on this page are illustrative and synthetic. They contain no real customer, account, product, transaction, catalogue, tax or credential data.",
};

export const OWNERSHIP_DATA = {
  eyebrow: "Source-of-truth ownership",
  title: "Integration does not automatically transfer ownership.",
  description: "Keep the master, the context consumer and the fiscal outcome authority distinguishable at every handoff.",
  headers: ["Domain", "Authoritative owner", "ZoikoTax / downstream relation"],
  rows: [
    ["Customer / account", "Enterprise CRM or designated source", "Consumes only necessary, approved customer context; does not become the customer master."],
    ["Product", "Enterprise product master / catalogue", "Consumes product context and governed mappings; catalogue definitions remain source-owned."],
    ["Quote", "CPQ / Billing", "Consumes selected commercial context; source retains quote and offer authority."],
    ["Transaction", "BSS / source system", "Consumes required transaction context; source retains transaction authority."],
    ["Fiscal classification / outcome", "ZoikoTax within supported scope", "Produces the supported fiscal outcome; does not acquire authority over upstream domains."],
    ["Analytics copy", "Approved data platform", "Non-authoritative unless an explicit source rule defines otherwise."],
  ],
  flow: [
    { title: "Enterprise master", description: "Defines source facts and lifecycle." },
    { title: "Context consumer", description: "Uses only approved, necessary context." },
    { title: "Fiscal outcome", description: "ZoikoTax produces within supported scope." },
  ],
  diagram:
    "Diagram in words: the enterprise master retains domain authority; the integration consumer receives only approved context; ZoikoTax owns its supported fiscal outcome. A downstream analytics copy does not become the master merely because it receives that outcome.",
  notice: {
    title: "Resolve authority before resolving conflicts.",
    description:
      "When sources disagree or ownership is ambiguous, use governed review. Do not silently select a winner, merge values or promote an analytics copy to source authority.",
  },
};

export const MAPPING_DATA = {
  eyebrow: "Product catalogue mapping",
  title: "Map meaning. Preserve provenance.",
  description:
    "A catalogue mapping is a governed relation—not a replacement product master and not a marketing-generated tax classification.",
  anatomyLabel: "Illustrative · Conceptual mapping anatomy",
  steps: [
    { title: "Source external ID concept", description: "A source-owned reference concept—not an identifier format or a sample value." },
    { title: "Governed semantic classification", description: "Use approved semantic mapping. No tax treatment or reference code is inferred." },
    { title: "Effective / version context", description: "Preserve mapping provenance and applicable historical context under source-defined rules." },
    { title: "Source-defined lifecycle", description: "Keep catalogue lifecycle authority with the product domain; do not invent refresh or retirement rules." },
    { title: "Approved exception / override", description: "Only where the approved model permits it, with its defined ownership and scope." },
    { title: "Validation", description: "Apply the exact supported validation contract; unknown or unmapped context remains explicit." },
    { title: "Review / approval", description: "Use the review or approval path if defined. Do not automatically promote uncertain mappings." },
  ],
  ownerCard: {
    title: "Your catalogue stays yours.",
    lead: "The product domain owns definitions and lifecycle. ZoikoTax uses the approved mapping context for its supported fiscal scope.",
    description:
      "Preserve versioned provenance and the owner boundary. Exact mapping rules and currentness remain source-controlled.",
  },
  unmapped: {
    tag: "Unmapped · Illustrative state",
    description:
      "Mapping not established. Keep the unknown state visible and route to governed review; do not invent a product classification or a successful fiscal default.",
  },
  link: { label: "Review Integration Guides", href: ROUTES.integrationGuides },
  notice: {
    title: "Illustrative mapping—not tax or legal advice.",
    description:
      "The ordered anatomy above is a full text equivalent of the conceptual mapping path. It contains no actual IDs, mapping numbers, classifications or tax treatment. Exact semantics, version rules and approvals come from approved documentation.",
  },
};

export const COMMERCIAL_DATA = {
  eyebrow: "CPQ / CRM / Commercial context",
  title: "Bring the relevant facts. Not the whole record.",
  description: "Commercial context should be purposeful, capability-specific and safely related to the originating source.",
  cards: [
    { icon: "file", tag: "CPQ ownership", title: "Quote & offer facts", description: "Select the commercial facts required by the approved integration contract. CPQ retains quote, offer and configuration ownership." },
    { icon: "user", tag: "CRM ownership", title: "Required party context", description: "Use only necessary party attributes from the approved source. CRM customer, account and relationship records remain source-owned." },
    {
      icon: "badge",
      tag: "Support must be confirmed",
      title: "Exemption / certificate context",
      description: "Include it only if the capability and exact documentation support it. This page does not establish exemption or certificate support.",
      link: { label: "Open API Reference", href: ROUTES.apiReference },
    },
    { icon: "pin", tag: "Capability-specific", title: "Relevant address / location", description: "Requirements vary by supported fiscal capability. Use the documented location contract—not guessed attributes or jurisdiction rules." },
    { icon: "refresh", tag: "Source-defined change", title: "Commercial changes", description: "A changed quote, offer or source fact may require revalidation or remapping under the approved model. No automatic refresh rule is implied." },
    { icon: "link", tag: "Contract-defined relation", title: "Safe correlation", description: "Relate source context and fiscal requests using approved references where supported. Do not expose private source attributes in public examples." },
  ] as { icon: string; tag: string; title: string; description: string; link?: Link }[],
  notice: {
    title: "No private CRM fields. No assumed tax-relevant facts.",
    description:
      "Missing, ambiguous or conflicting context must remain visible and reach governed review. Marketing copy and general knowledge are not substitutes for source facts or a capability contract.",
  },
};

export const IDENTITY_DATA = {
  eyebrow: "Identity, correlation & change synchronization",
  title: "Keep the relation. Govern the change.",
  description:
    "Stable external references can support traceability where the capability contract permits them. They do not imply an identifier format or a synchronization policy.",
  flow: [
    { title: "Source context", description: "Approved external reference, where supported." },
    { title: "Fiscal request", description: "Contract-defined source-to-request relation." },
    { title: "Supported outcome", description: "Contract-defined request-to-outcome relation." },
  ],
  diagram:
    "Diagram in words: use an approved source reference where supported; relate it to the fiscal request under the documented contract; relate the request to the supported outcome. A correlation relation does not guarantee change propagation, delivery order or record merging.",
  cards: [
    { tag: "Contract-defined", title: "Updates", description: "Use the exact update contract. Do not presume merge, overwrite or refresh behavior." },
    { tag: "No assumed guarantee", title: "Ordering", description: "Apply documented handling. Do not infer delivery guarantees from a directional arrow." },
    { tag: "Approved model", title: "Duplicates", description: "Use approved idempotency behavior only where supported; do not invent duplicate-resolution rules." },
    { tag: "Source currentness", title: "Stale context / mapping", description: "Freshness belongs to the source and mapping model. No arbitrary time-to-live is imposed here." },
    { tag: "Explicit review", title: "Conflicts", description: "Route unresolved source or mapping disagreements to governed review. No silent winner." },
    { tag: "Minimized correlation", title: "Safe references", description: "Use only the approved relation needed for traceability. No public source values or identifier examples." },
  ],
  notice: {
    title: "The contract owns change semantics.",
    description:
      "Synchronization frequency, ordering, merge, overwrite and recovery behavior must be established by approved technical documentation. Unknown behavior remains unknown until the source-backed reference resolves it.",
  },
  link: { label: "Open API Reference", href: ROUTES.apiReference },
};

export const PATTERNS_DATA = {
  eyebrow: "Data-platform / batch / event patterns",
  title: "Choose the pattern. Confirm the contract.",
  description:
    "A useful architecture pattern is not a claim about supported connectors, transport, production scale, latency or availability.",
  labels: { when: "When useful", owner: "Owner boundary", next: "Next reference" },
  cards: [
    {
      icon: "braces",
      title: "API request / response",
      when: "A documented request / response interaction for a supported capability.",
      owner: "Exact objects, required context and response semantics belong to the API contract.",
      link: { label: "API Reference", href: ROUTES.apiReference },
    },
    {
      icon: "files",
      title: "Asynchronous import / export",
      when: "High-volume asynchronous work where supported by the Bulk & Batch contract.",
      owner: "Source authority remains intact. Accepted records, formats and recovery are documented—not inferred.",
      link: { label: "Bulk & Batch", href: ROUTES.bulkBatch },
    },
    {
      icon: "radio",
      title: "Webhooks / Events",
      when: "Approved event patterns for a documented change or supported outcome.",
      owner: "Event shape, delivery and ordering follow the exact contract; no guarantee is added here.",
      link: { label: "Webhooks / Events", href: ROUTES.webhooks },
    },
    {
      icon: "workflow",
      title: "Enterprise exchange",
      when: "Approved enterprise movement or orchestration of necessary context.",
      owner: "The approved source and integration contract govern the exchange. No vendor connector is claimed.",
      link: { label: "Integration Guides", href: ROUTES.integrationGuides },
    },
    {
      icon: "repeat",
      title: "Reference-data synchronization",
      when: "An approved pattern for keeping required reference context current.",
      owner: "Frequency, ordering and change rules remain source-controlled. No refresh interval is presumed.",
      link: { label: "Integration Guides", href: ROUTES.integrationGuides },
    },
    {
      icon: "fingerprint",
      title: "Downstream outcome / evidence",
      when: "Approved use of supported fiscal outputs for reconciliation and investigation.",
      owner: "Trace relations and access follow approved scope; this is not unrestricted evidence extraction.",
      link: { label: "Evidence & Replay", href: ROUTES.evidence },
    },
  ],
  notice: {
    title: "Approved patterns, not a universal data-platform connector.",
    description:
      "Technical documentation controls formats, environments, exact support and movement rules. An architecture diagram does not authorize unrestricted data-lake access or establish a production performance commitment.",
  },
};

export const QUALITY_DATA = {
  eyebrow: "Data quality, validation & recovery",
  title: "No silent inference.",
  description:
    "Missing, ambiguous or conflicting tax-relevant context is not an invitation to fill the gap. Make the condition explicit and use the governed recovery path.",
  statesLabel: "Text-state examples · Not live records",
  states: [
    { title: "Unmapped", description: "Mapping not established." },
    { title: "Invalid", description: "Context fails the documented contract." },
    { title: "Stale", description: "Currentness requires source review." },
    { title: "Conflict", description: "Values or authority disagree." },
    { title: "Missing source", description: "Required provenance is unavailable." },
  ],
  statesNote:
    "These labels communicate meaning in text, not color alone. They are illustrative conditions, not actual errors, records or current service status.",
  headers: ["Condition", "What remains explicit", "Governed response"],
  rows: [
    ["Missing context", "A required source fact is absent.", "Obtain approved source context or route review; do not fill it from general knowledge."],
    ["Unknown product mapping", "No approved semantic relation is established.", "Use the source-owned mapping and review path; do not invent classification or tax treatment."],
    ["Invalid identifier", "The supplied reference fails the exact contract.", "Use documented validation and recovery. This page defines no identifier format."],
    ["Conflicting values", "Source facts, mapping values or authority disagree.", "Review the domain authority and approved conflict model; do not silently pick a winner."],
    ["Stale mapping / version", "Currentness or applicable version is unresolved.", "Resolve against source-defined freshness and historical context; do not impose a guessed TTL."],
    ["Partial batch failure", "Some work may not meet the batch contract.", "Use documented records and recovery behavior; do not assert all-success or invent compensation."],
    ["Broken reference", "The required source-to-request relation is unavailable.", "Use approved reference recovery or governed review; do not synthesize a missing relation."],
  ],
  notice: {
    title: "Failure does not become a successful default.",
    description:
      "Exact errors, affected records and recovery actions are governed by the supported contract. No compensating action or false successful outcome is defined here.",
  },
};

export const LINEAGE_DATA = {
  eyebrow: "Lineage, evidence & historical trace",
  title: "A result should keep its route home.",
  description:
    "Lineage is first-class: source context, mapping and fiscal outcome remain related for reconciliation and investigation.",
  chainLabel: "Conceptual provenance chain",
  chain: [
    { title: "Source", description: "Authoritative domain context." },
    { title: "Mapping", description: "Applicable governed relation." },
    { title: "Request", description: "Approved correlation context." },
    { title: "Fiscal result", description: "Supported outcome and evidence." },
    { title: "Investigation", description: "Historical trace and reconciliation." },
  ],
  chainNote:
    "Diagram in words: 1. Begin with the source system and authoritative domain context. 2. Relate the applicable mapping and its provenance. 3. Relate the request or transaction under the approved contract. 4. Preserve the supported fiscal result and evidence relation. 5. Use the linked historical context for investigation and reconciliation.",
  links: [
    { title: "Source system / domain", description: "Retain the authoritative origin and its domain boundary." },
    { title: "Safe record correlation", description: "Preserve only approved source relations, without public record values." },
    { title: "Mapping version", description: "Relate the applicable mapping and its provenance to the outcome." },
    { title: "Request / transaction relation", description: "Keep the approved source-to-request-to-result relation traceable." },
    { title: "Rule / content version", description: "Retain applicable rule and content context under the supported model." },
    { title: "Outcome / evidence reference", description: "Relate the supported result to its approved evidence context." },
    { title: "Historical replay", description: "Use pinned historical context where supported, not an assumed current-state recomputation." },
  ],
  card: {
    title: "Preserve the context that applied.",
    paragraphs: [
      "Pinned historical context matters when investigating a past result. Do not replace applicable source, mapping or rule context with an unqualified current version.",
      "Exact replay scope and evidence behavior remain governed by the supported technical reference. No real IDs or version strings are shown.",
    ],
    link: { label: "Evidence & Replay", href: ROUTES.evidence },
  },
  notice: {
    title: "Provenance supports investigation. It does not independently establish legal correctness.",
    description:
      "Traceability supports audit and reconciliation; it is not legal proof, a certification claim or a substitute for the applicable supported fiscal rules and approved review.",
  },
};

export const MIGRATION_DATA = {
  eyebrow: "Migration / coexistence / readiness",
  title: "Coexist deliberately. Cut over by approval.",
  description:
    "A governed sequence makes dependencies and decisions visible without promising automatic conversion or zero-effort integration.",
  steps: [
    { tag: "Discover", title: "Understand dependencies", description: "Identify source domains, consuming processes and integration dependencies before choosing a pattern." },
    { tag: "Map", title: "Define ownership", description: "Map domain authority, product relations and reference context under the approved source model." },
    { tag: "Connect", title: "Use non-production", description: "Connect only within a supported non-production environment and its approved contract." },
    { tag: "Validate", title: "Check quality & identity", description: "Validate source context, mappings and correlation using the documented validation model." },
    { tag: "Compare", title: "Shadow / parallel", description: "Compare under the approved Shadow or parallel model. Shadow remains non-impacting." },
    { tag: "Approve", title: "Resolve readiness", description: "Approve technical, privacy, Coverage and data-governance readiness with the accountable teams." },
    { tag: "Cut over", title: "Govern the transition", description: "Cut over only through the approved decision and procedure—not an automatic conversion." },
    { tag: "Operate", title: "Keep context current", description: "Operate source freshness, error handling and evidence under the documented model." },
  ],
  journey:
    "Ordered journey in words: discover dependencies → map ownership, products and reference context → connect non-production → validate quality and identity → compare approved Shadow or parallel results → approve technical, privacy, Coverage and data governance → perform governed cutover → operate freshness, errors and evidence. Domain scope and source ownership remain explicit throughout.",
  notice: {
    title: "Comparison does not authorize cutover.",
    description:
      "No instant master conversion, magic vendor connector, zero-downtime promise or automatic cutover is implied. Shadow is non-impacting; production transition requires approval.",
  },
};

export const SECURITY_DATA = {
  eyebrow: "Security / privacy / data governance",
  title: "Minimize context. Make handling accountable.",
  description:
    "An integration architecture is not permission to collect more data or a statement about deployment geography.",
  cards: [
    {
      icon: "filter",
      title: "Required-data minimization",
      description: "Use only approved context required for the supported capability. Consult Privacy and Trust for personal-data handling.",
      link: { label: "Privacy", href: ROUTES.privacy },
    },
    { icon: "lock", title: "Keep secrets out of public surfaces", description: "No secrets in URLs, screenshots, analytics or public examples. These diagrams are not authenticated data viewers." },
    { icon: "shield", title: "Approved transport & encryption", description: "Use approved technical controls. This page does not define transport, authentication, encryption configuration or secret handling." },
    { icon: "archive", title: "Source-bound retention", description: "Follow applicable source and governance requirements. No retention duration or deletion schedule is invented here." },
    { icon: "pin", title: "Governed residency", description: "Confirm the approved residency model. A system diagram cannot establish data location or infer geography." },
    { icon: "fileLock", title: "Minimal logging & approved controls", description: "Minimize logged context and use the approved access and control model. No role matrix or RBAC behavior is asserted." },
  ] as { icon: string; title: string; description: string; link?: Link }[],
  notice: {
    title: "A public explanation, not a data console.",
    description:
      "Nothing shown here exposes customer records, private mappings or credentials. Exact privacy and security requirements remain governed by the approved technical and assurance references.",
  },
  links: [
    { label: "Trust", href: ROUTES.trust },
    { label: "Privacy", href: ROUTES.privacy },
  ],
};

export const SAFE_STATES_DATA = {
  eyebrow: "Safe states & developer readiness",
  title: "When a reference is unknown, keep the path useful.",
  description:
    "The default is conceptual documentation—not a live status display. These safe-state examples do not claim a current outage, actual data condition or production availability.",
  headers: ["Illustrative condition", "Safe public response", "Next reference"],
  rows: [
    ["Default conceptual view", "Explain domains, boundaries and approved patterns. Keep core documentation visible.", "Integration Guides / API Reference"],
    ["Source metadata missing", "Preserve useful guidance. Do not backfill an unknown source schema or supported fields.", "Approved technical documentation"],
    ["Unmapped / invalid / stale / conflicted", "Keep the condition in text. Use the governed validation and review path.", "API Reference / Bulk & Batch"],
    ["Reference unavailable", "State that the exact reference is not established. Do not replace it with a guessed contract.", "Integration Guides"],
    ["Coverage unknown", "Keep capability availability unconfirmed until the approved Coverage reference resolves it.", "Coverage"],
    ["Restricted detail", "Explain the boundary without disclosing private data, mappings or credentials.", "Trust / Privacy"],
  ],
  affordances: {
    title: "Visible route affordances",
    focusLabel: "Focus specimen",
    focusLink: { label: "Open API Reference", href: ROUTES.apiReference },
    hoverLabel: "Hover specimen · Route remains visible",
    hoverLink: { label: "Integration Guides", href: ROUTES.integrationGuides },
    note: "Generous targets and visible focus treatment. Essential guidance never depends on hover or motion.",
  },
  expanded: {
    title: "Source metadata is not established",
    tag: "Expanded specimen · Illustrative",
    description:
      "Keep the ownership and integration-pattern explanation available. Source-unknown context must not be replaced by guessed object names, fields or synchronization rules. Consult the approved reference or governed review path.",
    link: { label: "Integration Guides", href: ROUTES.integrationGuides },
    note: "No-JS reading path: use the diagram’s complete text explanation and the core documentation references. The integration boundary and next reference are stated directly—not hidden behind hover, motion or an expanded state.",
  },
  notice: {
    title: "Unknown stays unknown until source-backed documentation resolves it.",
    description:
      "Useful docs remain available. No assumed currentness, guessed schema, production Coverage or availability is substituted for missing source metadata.",
  },
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Clear answers. No inferred support.",
  description: "The short path from architecture questions to source-backed documentation.",
  items: [
    {
      question: "How do I integrate CPQ, CRM and catalogues?",
      answer:
        "Begin with Integration Guides and the exact API contract. Identify domain ownership and necessary context, then select a supported integration pattern. Approved documentation establishes vendor, object, field, environment and synchronization support—not this conceptual page.",
    },
    {
      question: "Does ZoikoTax become the customer or product source of truth?",
      answer:
        "No. Customer and account authority stays with the enterprise CRM or designated source; product definitions and lifecycle stay with the enterprise master or catalogue. ZoikoTax consumes approved context and produces fiscal outcomes within supported scope.",
    },
    {
      question: "How should product mappings be governed?",
      answer:
        "Keep source ownership, approved semantic relations, effective and version context, lifecycle and provenance explicit. Validate under the documented model; use exceptions or overrides only if approved and review or approval where defined. Do not infer tax classification for unknown mappings.",
    },
    {
      question: "Can I use batch or events?",
      answer:
        "Use Bulk & Batch for supported asynchronous import / export and Webhooks / Events for approved event patterns. Exact formats, delivery, ordering, environments and availability remain defined by those contracts; no connector or numeric performance claim is implied.",
    },
    {
      question: "How do I handle stale or conflicting data?",
      answer:
        "Make currentness and disagreement explicit. Follow source-defined freshness, validation and recovery rules, and route unresolved conditions to governed review. Do not silently merge, overwrite, select a winner or fill missing tax-relevant context from general knowledge.",
    },
    {
      question: "How can I preserve lineage?",
      answer:
        "Relate the source domain and safe record correlation to mapping version, request / transaction relation, rule / content version and the outcome / evidence reference. Preserve applicable historical context for supported replay. Provenance supports reconciliation and investigation; it is not independent legal proof.",
    },
  ],
};

export const NEXT_STEPS_DATA = {
  eyebrow: "Next steps",
  title: "Documentation first. Assurance next.",
  description:
    "Start with the contract that matches your integration pattern. Then confirm evidence, privacy and capability readiness.",
  docsLabel: "Start here · Technical documentation",
  docs: [
    { title: "Integration Guides", description: "Patterns, ownership and source-backed contracts.", path: "/developers/integration-guides/", href: ROUTES.integrationGuides },
    { title: "API Reference", description: "Exact supported requests, context and outcomes.", path: "/developers/api/", href: ROUTES.apiReference },
    { title: "Bulk & Batch", description: "Supported asynchronous work and recovery.", path: "/developers/bulk-batch/", href: ROUTES.bulkBatch },
    { title: "Webhooks / Events", description: "Approved event contracts and delivery behavior.", path: "/developers/webhooks-events/", href: ROUTES.webhooks },
    { title: "Sandbox", description: "Confirm documented non-production readiness.", path: "/developers/sandbox/", href: ROUTES.sandbox },
  ],
  assuranceLabel: "Then confirm · Assurance",
  assurance: [
    { label: "Evidence & Replay", description: "Supported provenance and historical trace.", path: "/platform/evidence-replay/", href: ROUTES.evidence },
    { label: "Trust", description: "Approved privacy and security context.", path: "/trust/", href: ROUTES.trust },
    { label: "Coverage", description: "Capability-specific readiness, not assumed availability.", path: "/coverage/", href: ROUTES.coverage },
  ],
  demo: {
    tag: "Optional · Discuss enterprise fit",
    title: "Review your integration boundary.",
    description:
      "After reviewing the docs, discuss domain ownership, supported scope and readiness with the team. A demo does not establish connector support or Coverage.",
    link: { label: "Book a Demo", href: ROUTES.demo },
    path: "/demo/",
  },
};

export const CTA_DATA = {
  eyebrow: "Build with a governed contract",
  title: "Connect the context. Preserve the control.",
  description:
    "Use the approved guides and API reference to define your integration boundary—before making assumptions about objects, mappings or availability.",
  primary: { label: "Explore Integration Guides", href: ROUTES.integrationGuides },
  secondary: { label: "Open API Reference", href: ROUTES.apiReference },
  link: { label: "Open Sandbox", href: ROUTES.sandbox },
};
