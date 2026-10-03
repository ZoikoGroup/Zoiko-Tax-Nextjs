export const ROUTES = {
  apiReference: "/developers/api/",
  integrationGuides: "/integration-guides",
  changelog: "/api-changelog",
  sandbox: "/sandbox",
  webhooks: "/webhooks-events",
  bulkBatch: "/bulk-batch",
  developers: "/developers/",
  coverage: "/coverage-overview",
  trust: "/trust/",
  demo: "/demo/",
};

export const BG = {
  hero: "/SDKs/hero-bg.webp",
  finder: "/SDKs/finder-bg.webp",
  compatibility: "/SDKs/compatibility-bg.webp",
  errors: "/SDKs/errors-bg.webp",
  trust: "/SDKs/trust-bg.webp",
  related: "/SDKs/related-bg.webp",
  faq: "/SDKs/faq-bg.webp",
  cta: "/SDKs/cta-bg.webp",
};

export const ILLUSTRATIVE_LABEL = "Illustrative metadata anatomy — not a published SDK";

export const HERO_DATA = {
  eyebrow: "DEVELOPERS · SDKs",
  headline: "Use ZoikoTax SDKs from governed contract sources.",
  description:
    "Find verified ZoikoTax client-library options and their approved contract relationships. Library, language, version, package and lifecycle details appear only when published by governed sources.",
  actions: [
    { label: "Find SDKs", href: "#sdk-finder", variant: "primary" as const },
    { label: "Read API Reference", href: ROUTES.apiReference, variant: "secondary" as const },
  ],
  link: { label: "View API Changelog →", href: ROUTES.changelog },
  notice: "SDK availability does not create production entitlement or market Coverage.",
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct answer",
  title: "What are ZoikoTax SDKs?",
  description:
    "ZoikoTax SDKs are public client-library integration aids generated from or aligned to canonical API contracts where supported. This page shows only verified SDK metadata and documentation paths. It does not invent package coordinates, supported languages, versions, authentication code, retry behavior, production access or service guarantees.",
};

export type SdkRecord = {
  title: string;
  language: string;
  aliases: string[];
};

// Approved public registry records. None are supplied in this view; the
// finder renders its empty/no-match states rather than inventing inventory.
export const SDK_RECORDS: SdkRecord[] = [];

export const FINDER_DATA = {
  eyebrow: "SDK Finder",
  title: "Find a library. Verify its source.",
  description: "Published records, not inferred support. Search and refine only against approved public metadata.",
  searchLabel: "Search public library, language or approved aliases",
  placeholder: "Enter a public library name or approved alias",
  helper:
    "Language options and lifecycle / compatibility facets appear only when complete governed values exist. No controlled facets are available in this view. Search public terms only; do not enter code, secrets or private identifiers.",
  registryStatus: "Registry metadata not supplied",
  order: "Order: Title, A–Z · no quality ranking",
  empty: {
    title: "No verified SDK registry records supplied in this view",
    description:
      "There is no published inventory to list here. Absence of a matching public SDK record does not mean a language is unsupported. Continue with canonical API documentation and integration guidance.",
  },
  noMatch: {
    title: "No matching published SDK record",
    description:
      "Absence of a match does not establish unsupported language status. Clear the query or reset, or continue with canonical API documentation and integration guidance.",
  },
  specimenTitle: "How to read a governed SDK record",
  specimenTag: "NON-PRODUCTION SPECIMEN",
  card: {
    title: "[Library title placeholder]",
    fields: [
      { label: "Language", value: "[Approved language placeholder]" },
      { label: "SDK version", value: "Omitted · not published" },
      { label: "Lifecycle", value: "Unresolved" },
      { label: "Verified contract relationship", value: "Not supplied" },
      { label: "Currentness", value: "Requires governed source verification" },
    ],
    slotsTitle: "Controlled source slots",
    slotsLines: ["Docs · Changelog · Package source", "Not supplied. No source URL displayed."],
    action: "Open detail · illustration only",
    footnote: "Not a released SDK. A public record would not imply access, Coverage or a support SLA.",
  },
  detail: {
    title: "Selected SDK detail",
    description:
      "A metadata specimen, not an actual release. Unknown fields remain unresolved; there is no “current” or supported-version claim.",
    fields: [
      {
        label: "Identity & purpose",
        value:
          "[Library identity placeholder] · Represents a canonical contract only where documented. No operations or methods implied.",
      },
      {
        label: "Compatibility",
        value:
          "API relationship not supplied. Verify any explicit relation in API Reference; never infer it from a release identifier.",
      },
      {
        label: "Provenance & currentness",
        value:
          "Not publicly resolved. Registry, canonical API, release and security sources take precedence over page prose.",
      },
      {
        label: "Installation",
        value: "Unavailable without verified package source and reviewed syntax. No installation command or copy action.",
      },
      {
        label: "Usage anatomy",
        value:
          "Source → canonical contract → synthetic input → documented operation → authority context → documented result. Non-production placeholders only.",
      },
      {
        label: "Errors, retries & changes",
        value:
          "API Reference owns operation behavior. API Changelog is the route for contract changes; no release deadline is inferred.",
      },
    ],
    notice: {
      title: "Use verified sources only",
      description:
        "Do not substitute lookalike packages or repositories. Review dependencies and source integrity. Credentials are never bundled into these examples.",
    },
    links: [
      { label: "API Reference →", href: ROUTES.apiReference },
      { label: "API Changelog →", href: ROUTES.changelog },
      { label: "Sandbox · non-production →", href: ROUTES.sandbox },
    ],
  },
  facets: {
    description:
      "Optional facets would use approved values only. These placeholders are not live language or compatibility options.",
    items: ["[Lifecycle facet]", "[Explicit relation facet]"],
  },
};

export const COMPATIBILITY_DATA = {
  eyebrow: "Compatibility & versioning",
  title: "Three dimensions. One explicit relationship.",
  description:
    "A library release number is not an API contract promise. Read each dimension from its own approved source.",
  cards: [
    {
      icon: "package",
      tag: "SEPARATE METADATA",
      title: "SDK release identifier",
      description: "Identifies a library release only. It does not establish API compatibility.",
    },
    {
      icon: "branch",
      tag: "EXPLICIT RELATION",
      title: "Canonical API relationship",
      description: "An explicit, governed relation to the contract. Never a guessed version pair.",
    },
    {
      icon: "history",
      tag: "SEPARATE METADATA",
      title: "Governed lifecycle",
      description: "Source-defined status and migration guidance, separate from both identifiers.",
    },
  ],
  generated: {
    title: "Generated does not mean identical.",
    description:
      "A generated or aligned SDK may represent a canonical contract where supported. Do not assume every endpoint is represented identically, a drop-in upgrade, backward compatibility, a release cadence or a support window.",
    link: { label: "Read API Reference →", href: ROUTES.apiReference },
  },
  notice: {
    title: "Compatibility unresolved — suppress the claim",
    description:
      "No verified relationship is supplied here. A matching name or major number is not evidence. Check source-defined upgrade guidance before changing a library.",
    link: { label: "View API Changelog →", href: ROUTES.changelog },
  },
};

export const INSTALL_DATA = {
  eyebrow: "Install & usage",
  title: "Exact syntax comes from a verified source.",
  description:
    "Documentation should make the publication boundary visible—not fill missing package facts with plausible code.",
  notice: {
    title: "Exact installation details are not publicly resolved",
    description:
      "No package metadata or approved syntax is supplied in this view. Installation and copy controls are omitted. Do not use lookalike packages, inferred coordinates or production-like examples.",
  },
  steps: [
    {
      title: "Verified production syntax",
      description:
        "Publish only from a controlled SDK source after security review. Keep source and compatibility notices adjacent to the action.",
    },
    {
      title: "Clearly labeled illustration",
      description:
        "Use neutral, non-executable placeholders. Illustrations explain documentation structure, not how to install or authenticate.",
    },
    {
      title: "Unknown or unavailable",
      description: "Show the limitation. Do not publish a command, enable copy or imply that syntax has been verified.",
    },
  ],
  link: { label: "Explore Integration Guides →", href: ROUTES.integrationGuides },
  example: {
    title: "Illustrative example — conceptual documentation anatomy only",
    description:
      "Not executable. No imports, package managers, constructors, methods, authentication hostnames or credentials.",
    rows: [
      { label: "Verified SDK source", value: "[Controlled source placeholder]" },
      { label: "Canonical contract", value: "[Approved contract relationship placeholder]" },
      { label: "Synthetic input", value: "[Non-production input placeholder]" },
      { label: "Contract-defined operation", value: "[Documented operation placeholder]" },
      { label: "Authority context", value: "[Verified authority context placeholder]" },
      { label: "Documented result", value: "[Contract-defined result placeholder]" },
    ],
    footnote: "No secrets, tokens, real tenant or customer IDs, certificates or customer payloads.",
  },
  footnote:
    "If verified syntax is later published, any copy action should provide accessible text feedback. That concept is not an active installation action in this static view. Sandbox remains a non-production documentation route.",
};

export const ERRORS_DATA = {
  eyebrow: "Errors · retries · idempotency · authority",
  title: "The SDK wrapper does not override API truth.",
  description:
    "Follow the canonical operation contract. A convenience layer is not a second policy authority.",
  cards: [
    {
      icon: "error",
      title: "Errors are contract-defined",
      description:
        "Exact error types and codes belong to the canonical API source. Do not derive an error catalogue from wrapper names or invent library-specific types.",
    },
    {
      icon: "retry",
      title: "Retry behavior is documented",
      description:
        "Use the API source for retry eligibility and behavior. No retry count, backoff schedule or jitter policy is inferred or specified by this page.",
    },
    {
      icon: "write",
      title: "Writes retain API semantics",
      description:
        "Authoritative writes follow canonical idempotent semantics. No key, header, deduplication mechanism or write guarantee is invented here.",
    },
  ],
  authority: {
    title: "Read-only, preview or write?",
    description:
      "Authority must be explicit in verified documentation. A method name does not establish whether an operation previews an outcome or performs an authoritative write.",
  },
  correlation: {
    title: "Correlation follows the contract.",
    description:
      "Use correlation concepts only as defined by the API. This page adds no tracing header, identifier format or duplicate retry policy.",
    link: { label: "Read API Reference →", href: ROUTES.apiReference },
  },
};

export const LIFECYCLE_DATA = {
  eyebrow: "Lifecycle · deprecation · changelog",
  title: "Currentness is governed, not assumed.",
  description:
    "Check status, explicit contract relationships and source-defined migration guidance together before an upgrade.",
  caption: "Text-labeled conceptual state guide. These are not statuses of an actual SDK release.",
  headers: ["SOURCE-DEFINED STATE", "DOCUMENTATION & ACTION BOUNDARY"],
  rows: [
    {
      state: "Current verified metadata",
      boundary:
        "Use only the status explicitly published by a governed source. A new release requires a registry update from technical authority, not a marketing claim.",
    },
    {
      state: "Deprecated",
      boundary: "Follow the source-defined migration route. No deprecation deadline or support window is inferred.",
    },
    {
      state: "Withdrawn / retired",
      boundary:
        "No new installation when the source says so. Historical documentation remains only according to the governed policy.",
    },
    {
      state: "Unknown compatibility",
      boundary:
        "Suppress compatibility claims. Never infer a supported API relationship from a major number or library name.",
    },
    {
      state: "Stale / conflicted",
      boundary:
        "Treat currentness as degraded. Suppress current, compatibility and installation claims until the governing sources resolve the conflict.",
    },
  ],
};

export const TRUST_DATA = {
  eyebrow: "Trust & supply chain",
  title: "A library record is not a production access grant.",
  description:
    "Source integrity, contract authority and access rights are separate checks. Keep each boundary explicit.",
  cards: [
    {
      icon: "provenance",
      title: "Verify package provenance",
      description:
        "Use only a verified package or repository source. Review dependencies and source integrity; this recommendation is not a certification or cryptographic assurance.",
    },
    {
      icon: "key",
      title: "Keep credentials separate",
      description:
        "No bundled credentials, access keys or real customer payloads. Approved Trust disclosures are the authority; no certificate or security guarantee is added here.",
    },
    {
      icon: "globe",
      title: "Check Coverage independently",
      description:
        "Capability and market availability come from the governed Coverage source. A library or its documentation does not confer production rights, entitlement or an SLA.",
    },
  ],
  footnote: "Library presence ≠ production API access, credentials, entitlement, Coverage or support SLA.",
  links: [
    { label: "Trust →", href: ROUTES.trust },
    { label: "Coverage →", href: ROUTES.coverage },
  ],
};

export const JOURNEYS_DATA = {
  eyebrow: "User journeys & safe states",
  title: "A useful next step—even when facts are missing.",
  description: "The safe path is documentation-led. Unknown, stale and absent metadata must remain distinct.",
  journeys: [
    {
      title: "A verified record is found",
      description:
        "Record → version, lifecycle & explicit contract relation → verified docs and source → API Reference / Changelog.",
    },
    {
      title: "The desired library is absent",
      description:
        "No matching published record is not “unsupported”. Continue to API Reference or Integration Guides; use controlled engagement for scope questions.",
    },
    {
      title: "The relationship is unresolved",
      description:
        "Suppress compatibility claims → read canonical source documentation → check Changelog. Do not infer the missing relation.",
    },
  ],
  statesTitle: "Safe state patterns",
  statesDescription:
    "Illustrative interface specimens—not a current outage, loading state or runtime status. Each pattern preserves a source-safe explanation and a documentation path.",
  states: [
    { title: "Loading", description: "“Checking published metadata.” No cached or stale record is labeled current." },
    {
      title: "Registry empty",
      description:
        "“No verified SDK registry records supplied in this view.” Keep API Reference and Integration Guides visible.",
    },
    {
      title: "No matches",
      description:
        "“No matching published SDK record.” Clear query / Reset. Absence does not establish unsupported language status.",
    },
    {
      title: "Registry unavailable",
      description: "“Published registry cannot be resolved.” Use documentation fallback; do not imply a current inventory.",
    },
    {
      title: "Partial metadata",
      description:
        "Omit unknown values. Label unresolved fields explicitly; do not complete versions, support or compatibility from context.",
    },
    {
      title: "Stale / conflict",
      description:
        "Degrade currentness and suppress affected claims until governing sources agree. No cached “current” badge.",
    },
    {
      title: "Missing source link",
      description: "No substitute URL, enabled install or copy. Continue to canonical documentation.",
    },
    {
      title: "Missing syntax",
      description: "“Exact installation details are not publicly resolved.” No production-like command or copy control.",
    },
    {
      title: "Long verified identifier",
      description:
        "Wrap a verified identifier in full within its named field. Do not truncate away source identity or create an identifier here.",
    },
    {
      title: "No JavaScript",
      description:
        "Keep summaries, limitations, public documentation paths and full details readable without dynamic controls.",
    },
  ],
  links: [
    { label: "Read API Reference →", href: ROUTES.apiReference },
    { label: "Explore Integration Guides →", href: ROUTES.integrationGuides },
  ],
};

export const RELATED_DATA = {
  eyebrow: "Related developer routes",
  title: "Continue with the canonical documentation.",
  description:
    "Choose the source for the question you are trying to answer. Technical docs first; commercial context only when needed.",
  primary: [
    {
      icon: "file",
      title: "API Reference",
      description: "Canonical operations, schemas, errors and authority. The source for API behavior.",
      path: "/developers/api/",
      href: ROUTES.apiReference,
    },
    {
      icon: "route",
      title: "Integration Guides",
      description: "Plan your integration from documented patterns. No SDK support is inferred.",
      path: "/developers/integration-guides/",
      href: ROUTES.integrationGuides,
    },
    {
      icon: "history",
      title: "API Changelog",
      description: "Check contract changes and source-defined upgrade guidance.",
      path: "/developers/changelog/",
      href: ROUTES.changelog,
    },
    {
      icon: "webhook",
      title: "Webhooks & Events",
      description: "Explore event contracts. No SDK delivery guarantee is implied.",
      path: "/developers/webhooks-events/",
      href: ROUTES.webhooks,
    },
    {
      icon: "layers",
      title: "Bulk & Batch",
      description: "Read governed bulk-operation contracts. No SDK batch limit is invented.",
      path: "/developers/bulk-batch/",
      href: ROUTES.bulkBatch,
    },
    {
      icon: "box",
      title: "Sandbox",
      description: "Continue with non-production guidance. Not a production access route.",
      path: "/developers/sandbox/",
      href: ROUTES.sandbox,
    },
  ],
  secondary: [
    {
      title: "Developer Overview →",
      description: "Integration-family context comes only from governed sources; it does not establish SDK support.",
      path: "/developers/",
      href: ROUTES.developers,
    },
    {
      title: "Coverage →",
      description: "Check capability and market availability separately from library presence.",
      path: "/coverage/",
      href: ROUTES.coverage,
    },
    {
      title: "Trust →",
      description: "Read approved trust disclosures without adding certification or security claims.",
      path: "/trust/",
      href: ROUTES.trust,
    },
  ],
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. No inferred support.",
  description: "What you can verify, where to verify it, and what an SDK record does not promise.",
  items: [
    {
      question: "What are SDKs?",
      answer:
        "Public client-library integration aids generated from or aligned to canonical API contracts where supported. They do not replace the canonical API contract.",
    },
    {
      question: "Which languages or libraries are available?",
      answer:
        "Only approved public registry records can answer that. No verified SDK inventory is supplied in this view. Missing records do not establish that a language is unsupported.",
    },
    {
      question: "How do I verify API compatibility?",
      answer:
        "Read the explicit contract relationship in governed metadata, then check API Reference and API Changelog. Do not infer compatibility from names or major version numbers.",
    },
    {
      question: "Where do I get installation commands?",
      answer:
        "Only from the verified SDK source after controlled publication and security review. Exact installation details are not publicly resolved here, so no command or copy action is shown.",
    },
    {
      question: "Does SDK availability grant production access or Coverage?",
      answer:
        "No. SDK presence does not create credentials, entitlement, production rights, market Coverage or a support SLA. Consult the independent governed access and Coverage sources.",
    },
    {
      question: "Who owns retry and error behavior?",
      answer:
        "The canonical API source defines errors, retry behavior, idempotency and authority. A library wrapper cannot override that truth or create a second policy.",
    },
    {
      question: "What if the record or source is unavailable?",
      answer:
        "Use API Reference and Integration Guides. Unknown, partial, stale or conflicted metadata must not appear as current, compatible or installable. Never substitute a lookalike source.",
    },
    {
      question: "How do I manage upgrades and deprecation?",
      answer:
        "Check governed lifecycle metadata, source-defined migration guidance and API Changelog. Do not assume a release cadence, support window, deadline or drop-in compatibility.",
    },
  ],
};

export const CTA_DATA = {
  eyebrow: "Build from the contract",
  title: "Start with the source. Keep the relationship explicit.",
  description:
    "Continue with canonical documentation and non-production guidance. A library record is never a shortcut to production access.",
  actions: [
    { label: "Read API Reference", href: ROUTES.apiReference, variant: "primary" as const },
    { label: "Explore Integration Guides", href: ROUTES.integrationGuides, variant: "secondary" as const },
  ],
  links: [
    { label: "Sandbox · non-production →", href: ROUTES.sandbox },
    { label: "API Changelog →", href: ROUTES.changelog },
  ],
  demoNote:
    "Need to discuss qualified integration scope? Book a Demo for commercial context—not package installation, keys or self-service activation.",
  demoLink: { label: "Book a Demo · /demo/ →", href: ROUTES.demo },
};
