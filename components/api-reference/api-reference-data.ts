export const ROUTES = {
  apiReference: "/api-reference",
  integrationGuides: "/integration-guides",
  changelog: "/api-changelog",
  sandbox: "/sandbox",
  sdks: "/sdks",
  webhooks: "/webhooks-events",
  bulkBatch: "/bulk-batch",
  developers: "/developer-overview",
  coverage: "/coverage-overview",
  trust: "/trust/",
  demo: "/demo/",
};

export const BG = {
  hero: "/api-reference/hero-bg.webp",
  workspace: "/api-reference/workspace-bg.webp",
  authority: "/api-reference/authority-bg.webp",
  codeSamples: "/api-reference/code-samples-bg.webp",
  states: "/api-reference/states-bg.webp",
  journeys: "/api-reference/journeys-bg.webp",
  cta: "/api-reference/cta-bg.webp",
};

export const WORKSPACE_ID = "api-reference-workspace";

export const HERO_DATA = {
  eyebrow: "DEVELOPERS · API REFERENCE",
  headline: "Explore verified ZoikoTax API contracts.",
  description:
    "Find published API versions, resources, operation contracts, schemas and error documentation from governed technical sources. Public reference content does not grant production access, credentials, entitlement or live market availability.",
  actions: [
    { label: "Browse API Reference", href: `#${WORKSPACE_ID}`, variant: "primary" as const },
    { label: "View API Changelog", href: ROUTES.changelog, variant: "secondary" as const },
  ],
  link: { label: "Explore Integration Guides →", href: ROUTES.integrationGuides },
  notice: "Only verified published contract facts appear as production syntax. Illustrative examples are labeled.",
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct answer",
  titleLines: ["What is the", "API Reference?"],
  lead: "The API Reference organizes verified, versioned resources and operations with their schemas, errors and explicit operation authority, as published from governed technical sources.",
  description:
    "It is not a source for private implementation details, credentials, access approval or live Coverage. Contract facts come from the controlled technical publication pipeline—not editorial or CMS invention. Security, entitlement and release decisions remain governed by their respective sources.",
};

export type ReferenceRecord = {
  identity: string;
  purpose: string;
  authority: string;
  version: string;
};

// Approved public contract records. None are supplied in this view; the
// workspace renders its unavailable/no-match states rather than inventing inventory.
export const REFERENCE_RECORDS: ReferenceRecord[] = [];

export const VERSION_DATA = {
  eyebrow: "API Reference",
  title: "Start with the source. Then the contract.",
  description:
    "Choose only a verified published version. Resource names, operation taxonomy and authority filters must come from approved contract records.",
  selectLabel: "Published version",
  emptyVersion: "No verified published version supplied",
  currentness: "Source version and currentness are unresolved. No default, “latest” release or publication date is asserted.",
  changelogLink: { label: "API Changelog →", href: ROUTES.changelog },
  labelsIntro: "Conceptual documentation labels:",
  labels: ["Current", "Maintained", "Deprecated", "Retired"],
  labelsNote: "Only when defined by the source.",
  footnote:
    "A verified version can have its own Changelog and privacy-safe deep link. A requested version that is unavailable stays unavailable—never redirected to a substitute contract.",
};

export const ANCHORS = [
  { id: "identity", label: "Identity" },
  { id: "authority", label: "Authority" },
  { id: "request", label: "Request" },
  { id: "response", label: "Response" },
  { id: "schema", label: "Schema" },
  { id: "errors", label: "Errors" },
  { id: "examples", label: "Examples" },
  { id: "related", label: "Related" },
];

export const CONTRACT_TABS = ["request", "response", "schema", "errors", "examples"];

export const SIDEBAR_DATA = {
  title: "API Reference",
  searchPlaceholder: "Search verified reference",
  searchNote: "Search is not connected in this static view. No matches do not establish unsupported capability.",
  noMatches: "No matches found in the supplied reference. This does not mean the capability is unsupported.",
  versionEyebrow: "Version & resources",
  versionLines: ["Version unavailable", "Resource index unavailable"],
  authorityTitle: "Authority filter",
  authorityNote: "Shown only for approved records. No records are supplied here.",
  anchorsEyebrow: "Anatomy anchors",
  anchorsNote: "Documentation sections—not operations or resource categories.",
  links: [
    { label: "Developer Overview →", href: ROUTES.developers },
    { label: "Integration Guides →", href: ROUTES.integrationGuides },
  ],
};

export const WORKSPACE_DATA = {
  registry: {
    badge: "Registry unavailable in this view",
    title: "No verified public contract inventory supplied in this view",
    description:
      "No endpoints, methods, resource categories or schemas can be listed. Use developer context and governed documentation routes until a verified public source is available.",
    link: { label: "View API Changelog →", href: ROUTES.changelog },
  },
  indexRow: {
    eyebrow: "Index row anatomy · Specimen only",
    columns: ["Controlled identity", "Purpose from source", "Explicit authority", "Published version"],
    note: "These are presentation labels, not an operation record. No HTTP syntax is displayed.",
  },
  anatomy: {
    title: "Illustrative contract anatomy — not a published operation.",
    badge: "Authority: Source-controlled",
    fields: [
      { label: "Controlled name", value: "Not supplied" },
      { label: "Published version", value: "Not supplied" },
      { label: "Source / provenance", value: "Unresolved" },
    ],
    purpose:
      "Purpose: supplied only by the controlled source. Endpoint and method are omitted. Source scope, publication status and currentness must be verified before any production syntax is shown.",
  },
  io: [
    {
      id: "request",
      title: "Request",
      description: "Parameters, headers and input rules appear only from verified source. No contract is supplied.",
    },
    {
      id: "response",
      title: "Response",
      description: "Output structures and meanings appear only from verified source. No contract is supplied.",
    },
  ],
  schema: {
    eyebrow: "Schema presentation · Structural specimen",
    title: "Preserve the data contract exactly.",
    description:
      "The structure below demonstrates reading order, not JSON or a published schema. There are no actual field names, types, enum values or rules in this specimen.",
    headers: ["Hierarchy / exact name", "Source definition", "Meaning / constraints"],
    rows: [
      ["Verified field name", "Type from source", "Description from source"],
      ["↳ Nested relationship from source", "Required state from source", "Nullable / conditional rule from source"],
      ["Enum values from source", "Format from source", "Lifecycle from source"],
    ],
    note: "Keep nested relationships and exact source names. Do not editorially rename fields, infer precision or add standards claims. Required, optional and nullable states need explicit text—not color alone.",
  },
  extra: [
    {
      id: "errors",
      title: "Errors",
      description: "Error meanings, validation paths and recovery guidance appear only from the verified error catalog for this identity and version.",
    },
    {
      id: "examples",
      title: "Examples",
      description: "Examples appear only when the verified source supplies them. Illustrative anatomy is labeled and never presented as production syntax.",
    },
  ],
  notice: {
    title: "Contract details remain source-gated",
    description:
      "Errors, examples and related documentation must resolve against the same governed identity and version. Unresolved source or conflicting facts are not silently substituted.",
  },
};

export const AUTHORITY_DATA = {
  eyebrow: "Operation authority & write safety",
  title: "Authority must come from the contract—not the name of an operation.",
  description:
    "Read the verified authority label beside operation identity. HTTP methods, verbs and familiar names do not establish fiscal authority or permission.",
  cards: [
    {
      icon: "eye",
      title: "Read-only",
      description:
        "A source-defined read-only operation reads within its documented scope. The designation must be explicit in the approved contract—not inferred from syntax.",
      badge: "Concept only · source-defined",
    },
    {
      icon: "preview",
      title: "Non-committing / preview",
      description:
        "A source-defined preview does not establish a final outcome. Preview is not booked, filed or final; its meaning and limits come from the contract.",
      badge: "Concept only · not final",
    },
    {
      icon: "shield",
      title: "Authoritative write",
      description:
        "An authoritative write exists only where an approved contract explicitly defines it. Scope, conditions and approval boundaries are source-controlled—not universal.",
      badge: "Concept only · approved scope",
    },
  ],
  replay: {
    title: "Safe replay, where supported.",
    description:
      "Idempotency can support safe replay only where the verified source documents it. Consult that operation’s contract for exact behavior. This page supplies no key, header, time limit, deduplication rule, storage promise or guarantee.",
  },
};

export const ERRORS_DATA = {
  eyebrow: "Errors · Problem details · Traceability",
  title: "Diagnose with verified meaning.",
  description:
    "Error documentation is part of the versioned contract. No error codes, status codes, problem-detail fields or standards conformance are asserted in this view.",
  items: [
    {
      title: "Catalog & retry",
      description:
        "Read only the verified error catalog. Retry guidance must be explicitly documented; never infer it from a status family.",
    },
    {
      title: "Validation & traceability",
      description:
        "Exact validation paths and their meaning are source-defined. Correlation and trace fields are documented only where supplied by the controlled source.",
    },
    {
      title: "Unknown or restricted detail",
      description:
        "Use the related documentation or controlled source route. Restricted internals, stack traces, secrets and private metadata are not public reference content.",
    },
  ],
  link: { label: "Integration Guides →", href: ROUTES.integrationGuides },
  anatomy: {
    eyebrow: "Error anatomy · Conceptual only",
    title: "Source-controlled structure only",
    rows: [
      "Documented problem meaning",
      "Validation path & explanation",
      "Correlation / trace context",
      "Documented recovery guidance",
    ],
    status: "Exact source unavailable",
    note: "These labels are not a response payload. Actual field names and structure remain unknown.",
  },
  notice: {
    title: "API diagnostics are not public analytics",
    description:
      "Keep technical diagnostics within their governed security context. Documentation navigation should use privacy-safe identifiers, not request bodies, credentials, tokens, tenant or customer data, copied content or raw sensitive search. Security telemetry is separate.",
  },
};

export const CODE_SAMPLES_DATA = {
  eyebrow: "Code samples & illustrative examples",
  title: "Understand the anatomy. Don’t mistake it for syntax.",
  description:
    "No verified source example was supplied. The example below is deliberately non-executable, secret-free and non-production. It does not define a ZoikoTax API contract.",
  specimen: {
    label: "Illustrative example — not production syntax",
    badge: "Conceptual only",
    columns: [
      [
        { label: "Contract source", value: "Verified publication required" },
        { label: "Synthetic input", value: "No actual input fields supplied" },
        { label: "Source-defined operation", value: "No published operation supplied" },
      ],
      [
        { label: "Verified output", value: "No output contract supplied" },
        { label: "Authority", value: "Must resolve from the contract" },
        { label: "Trace context", value: "Exact source-defined structure required" },
      ],
    ],
    note: "This is conceptual anatomy, not an executable payload. No endpoint, environment URL, authentication header or language / SDK compatibility is implied.",
  },
  cards: [
    {
      icon: "fileCheck",
      title: "Exact source examples only",
      description:
        "Production syntax can appear only when a verified source supplies the contract and example. Preserve version, authority and provenance; keep credentials and private payloads out of public samples.",
    },
    {
      icon: "copy",
      title: "Copy only what is visible",
      description:
        "Any copy action must copy only visible, sanitized illustrative text—never hidden secrets. If copy is unavailable or fails, select the displayed text and copy it manually. This static specimen has no active copy control.",
    },
  ],
};

export const ACCESS_DATA = {
  eyebrow: "Authentication · Environments · Access",
  title: "Public reference. Separately governed access.",
  description:
    "Production authentication is governed separately. No protocol, token flow, secret, signing mechanism or environment URL is specified by this page.",
  cards: [
    {
      icon: "book",
      title: "Public documentation",
      description:
        "Documentation visibility helps you understand a contract. It does not grant credentials, entitlement, production access or live market availability.",
      link: { label: "Trust →", href: ROUTES.trust },
    },
    {
      icon: "flask",
      title: "Separately enabled Sandbox",
      description:
        "Sandbox is a non-production context with separately governed access. Completion is not certification, production readiness or access approval.",
      link: { label: "Sandbox context →", href: ROUTES.sandbox },
    },
    {
      icon: "lock",
      title: "Production access",
      description:
        "Entitlement, scope and credentials require controlled engagement. Credentials are never public. Endpoint presence does not establish live Coverage.",
      link: { label: "Coverage →", href: ROUTES.coverage },
    },
  ],
  notice: {
    title: "Keep availability and contract authority independent",
    description:
      "Consult Coverage for market and capability context, Trust for governed security context, and controlled engagement for access and scope questions. No self-service tester or credential activation is provided here.",
  },
};

export const STATES_DATA = {
  eyebrow: "Safe UI states & recovery",
  title: "Uncertainty stays visible.",
  description:
    "Illustrative documentation patterns—not a claim of a live outage or published service state. Recovery should preserve context without inventing currentness, syntax or capability.",
  tag: "Pattern · Illustrative",
  items: [
    { title: "Loading", description: "Do not show stale syntax as current. Keep source and version unresolved until verified." },
    { title: "Registry unavailable / empty", description: "Keep the documentation shell and context routes. Do not manufacture an inventory." },
    { title: "Requested version unavailable", description: "Offer the version chooser and Changelog. Never substitute another version silently." },
    { title: "Missing operation deep link", description: "Return to the governed index or search. Do not guess a replacement operation." },
    { title: "Source conflict", description: "Suppress affected claims until the controlled source resolves the conflict." },
    { title: "Restricted / private detail", description: "Use neutral wording. Do not expose private names, metadata or implementation details." },
    { title: "Search with no matches", description: "State that no matches were found. Do not label the capability unsupported." },
    { title: "No JavaScript / print", description: "Keep version context, index, core content and documentation routes in a useful linear order." },
    { title: "Copy unavailable / failed", description: "Keep visible text selectable. Offer manual copy without hidden or sensitive content." },
  ],
  band: {
    title: "Meaning does not depend on color or hover.",
    description:
      "Use explicit version, identity and authority labels; preserve errors and diagram text. Core content should remain readable in linear, enlarged and narrow layouts, without hidden critical information. This is a static editable design—not an execution or accessibility test.",
  },
};

export const RELATED_DATA = {
  eyebrow: "Related developer routes",
  title: "The right source for the next question.",
  description:
    "These routes address different authority domains. Documentation links do not imply service availability, access, entitlement or compatibility.",
  routes: [
    {
      icon: "package",
      title: "SDKs",
      description: "Consult the verified SDK registry and source-defined compatibility. A route is not an availability claim.",
      path: "/developers/sdks/",
      href: ROUTES.sdks,
    },
    {
      icon: "webhook",
      title: "Webhooks & Events",
      description: "Event contracts and delivery behavior belong to their own verified documentation.",
      path: "/developers/webhooks-events/",
      href: ROUTES.webhooks,
    },
    {
      icon: "layers",
      title: "Bulk & Batch",
      description: "Look for governed bulk and batch contract details without inferring processing behavior.",
      path: "/developers/bulk-batch/",
      href: ROUTES.bulkBatch,
    },
    {
      icon: "route",
      title: "Integration Guides",
      description: "Implementation context complements the contract; guides do not create API authority.",
      path: "/developers/integration-guides/",
      href: ROUTES.integrationGuides,
    },
    {
      icon: "flask",
      title: "Sandbox",
      description: "Non-production context. Access is separately enabled; testing does not establish readiness.",
      path: "/developers/sandbox/",
      href: ROUTES.sandbox,
    },
    {
      icon: "history",
      title: "API Changelog",
      description: "Source-backed release and compatibility context, tied to a verified version where supplied.",
      path: "/developers/changelog/",
      href: ROUTES.changelog,
    },
    {
      icon: "compass",
      title: "Developer Overview",
      description: "Orient your integration journey across documentation and controlled developer routes.",
      path: "/developers/",
      href: ROUTES.developers,
    },
    {
      icon: "globe",
      title: "Coverage",
      description: "Market and capability availability is independent of endpoint presence and documentation.",
      path: "/coverage/",
      href: ROUTES.coverage,
    },
    {
      icon: "shield",
      title: "Trust",
      description: "Governed security and trust context. Public reference never exposes credentials or secrets.",
      path: "/trust/",
      href: ROUTES.trust,
    },
  ],
};

export const JOURNEYS_DATA = {
  eyebrow: "User journeys",
  title: "Navigate by the decision you need to make.",
  items: [
    {
      icon: "route",
      title: "Understand an integration",
      description:
        "Choose a verified version → governed index → contract detail and authority → verified request, response and errors → relevant SDK, Guide or separately enabled Sandbox.",
      tag: "Engineering context",
    },
    {
      icon: "compare",
      title: "Assess compatibility",
      description:
        "Find the source-defined lifecycle → read the version-specific Changelog → review verified compatibility context. Do not infer support, readiness or lifecycle from version numbers.",
      tag: "Release context",
    },
    {
      icon: "globe",
      title: "Confirm availability",
      description:
        "Consult Coverage for market and capability context → resolve entitlement and production scope separately through controlled engagement. Documentation is not access approval.",
      tag: "Production context",
    },
  ],
};

export const FAQ_DATA = {
  eyebrow: "Frequently asked questions",
  title: "Direct answers. No inferred contracts.",
  description: "Version, authority and access questions—answered within the verified-source boundary.",
  items: [
    {
      question: "What is the API Reference?",
      answer:
        "A source-governed reference for verified, versioned operations and resources, including schemas, errors, contract details and explicit authority. It does not create the contract.",
    },
    {
      question: "Where do published versions and operations come from?",
      answer:
        "From verified governed technical sources and their controlled publication pipeline. No technical inventory was supplied for this view, so no release or operation is invented.",
    },
    {
      question: "What does operation authority mean?",
      answer:
        "It is the source-defined scope of the operation, expressed explicitly near identity. Read-only, non-committing / preview and authoritative write are independent labels—not conclusions drawn from a method or name.",
    },
    {
      question: "Is preview the same as authoritative write?",
      answer:
        "No. Preview is not booked, filed or final. An authoritative write requires an approved contract defining its scope and conditions; a preview name does not imply that authority.",
    },
    {
      question: "Where are idempotency and errors documented?",
      answer:
        "In the applicable verified operation contract and its source-backed error documentation. Exact replay behavior, validation meanings, trace structure and retry guidance must be supplied by that source.",
    },
    {
      question: "Does viewing the reference grant production access?",
      answer:
        "No. Public documentation does not grant credentials, entitlement or production access. Authentication and access are separately governed; credentials are never public reference content.",
    },
    {
      question: "Does an endpoint prove live market Coverage?",
      answer:
        "No. Endpoint presence is not evidence of entitlement or live capability in a market. Consult Coverage and the separately governed access and scope context.",
    },
    {
      question: "What happens when a source or requested version is unavailable?",
      answer:
        "The affected information stays unavailable. Use the version chooser, Changelog or governed documentation route. The page does not silently substitute another version, guess an operation or treat conflicting claims as current.",
    },
  ],
};

export const CTA_DATA = {
  eyebrow: "Continue with governed documentation",
  titleLines: ["Keep the contract in view.", "Choose the right next step."],
  description:
    "Only verified published sources establish API contract facts. Documentation does not grant access, credentials, entitlement or live Coverage.",
  actions: [
    { label: "API Changelog", href: ROUTES.changelog, variant: "primary" as const },
    { label: "Integration Guides", href: ROUTES.integrationGuides, variant: "secondary" as const },
    { label: "Developer Overview", href: ROUTES.developers, variant: "secondary" as const },
  ],
  sandboxNote: "For non-production testing context, consult Sandbox. Access remains separately enabled.",
  demoNote: "Questions about access or scope?",
  demoLink: { label: "Book a Demo →", href: ROUTES.demo },
  demoPath: "/demo/",
};
