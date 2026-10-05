export const ROUTES = {
  apiReference: "/api-reference",
  sdks: "/sdks",
  webhooks: "/webhooks-events",
  bulkBatch: "/bulk-batch",
  integrationGuides: "/integration-guides",
  sandbox: "/sandbox",
  changelog: "/api-changelog",
  coverage: "/coverage-overview",
  trust: "/trust/",
  trustSecurity: "/trust/security/",
  trustPrivacy: "/trust/privacy/",
  demo: "/demo/",
};

export const BG = {
  hero: "/developer-overview/hero-bg.webp",
  startHere: "/developer-overview/start-here-bg.webp",
  guidance: "/developer-overview/guidance-bg.webp",
  contract: "/developer-overview/contract-bg.webp",
  publicControlled: "/developer-overview/public-controlled-bg.webp",
  security: "/developer-overview/security-bg.webp",
  journeys: "/developer-overview/journeys-bg.webp",
  cta: "/developer-overview/cta-bg.webp",
};

export const HERO_DATA = {
  eyebrow: "DEVELOPERS",
  headline: "Build with ZoikoTax through governed integration paths.",
  description:
    "Use public APIs, asynchronous patterns, events, SDKs and integration guidance to connect ZoikoTax to telecom financial architecture while preserving fiscal authority, evidence, security and capability-availability boundaries.",
  actions: [
    { label: "Read API Documentation", href: ROUTES.apiReference, variant: "primary" as const },
    { label: "Explore Integration Guides", href: ROUTES.integrationGuides, variant: "secondary" as const },
  ],
  link: { label: "Book a Demo", href: ROUTES.demo },
  notice:
    "Public documentation explains approved concepts and routes. Production credentials, entitlement and live market availability remain separately governed.",
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct answer",
  titleLines: ["What is the", "Developers area?"],
  description:
    "The Developers area is the public entry point for integration concepts, contract documentation and approved implementation patterns. It helps engineering teams choose the right API, SDK, event, bulk, sandbox or integration path. It is not a substitute for contractual entitlement, production credentials, current Coverage state or private implementation documentation.",
};

export const START_HERE_DATA = {
  eyebrow: "Start here",
  title: "A route through the decisions that matter.",
  description:
    "Pick the task you need to complete—not a product owner you have to guess. Follow the path from architectural context to qualified implementation scope.",
  steps: [
    { title: "Choose integration context", description: "Locate the family closest to your architecture." },
    { title: "Review core contract model", description: "Separate evaluation, authority and evidence." },
    { title: "Choose implementation surface", description: "API, SDK, events or asynchronous bulk." },
    { title: "Use Guide / non-production Sandbox", description: "Confirm testing access and environment scope." },
    { title: "Check Changelog", description: "Review version and compatibility guidance." },
    { title: "Verify Trust / Coverage independently", description: "Security evidence and market state are separate." },
    { title: "Engage qualified scope", description: "Discuss contractual implementation boundaries." },
  ],
  notice: {
    title: "Authentication and environment selection belong in getting started.",
    description:
      "Exact mechanisms, environment URLs and access requirements remain source-controlled. Use canonical documentation and controlled onboarding; this overview does not issue credentials or establish production access.",
  },
};

export type ResourceCard = {
  icon: string;
  title: string;
  description: string;
  link: { label: string; href: string };
  path: string;
};

export const CORE_RESOURCES_DATA = {
  eyebrow: "Core developer resources",
  title: "Choose the surface. Read its contract.",
  description:
    "Four canonical resources, each with a distinct implementation purpose. This overview routes you to the detail; it does not define the production API.",
  cards: [
    {
      icon: "fileCode",
      title: "API Reference",
      description:
        "Versioned endpoints, schemas, errors and contract details. Use the canonical REST reference for exact implementation syntax.",
      link: { label: "Read API Reference", href: ROUTES.apiReference },
      path: "/developers/api/",
    },
    {
      icon: "library",
      title: "SDKs",
      description:
        "Supported client libraries and versions. SDK behavior aligns with canonical contracts where supported; no language or package is implied here.",
      link: { label: "Explore SDKs", href: ROUTES.sdks },
      path: "/developers/sdks/",
    },
    {
      icon: "webhook",
      title: "Webhooks & Events",
      description:
        "Event-driven integration contracts and delivery semantics. Signing is conceptual here; exact mechanisms belong to the source contract.",
      link: { label: "Read event documentation", href: ROUTES.webhooks },
      path: "/developers/webhooks-events/",
    },
    {
      icon: "layers",
      title: "Bulk & Batch",
      description:
        "High-volume asynchronous / batch integration patterns. Review canonical processing contracts rather than infer limits or queue behavior.",
      link: { label: "Explore Bulk & Batch", href: ROUTES.bulkBatch },
      path: "/developers/bulk-batch/",
    },
  ] as ResourceCard[],
  footnote:
    "Documentation is not an availability badge. Supported surfaces, access and capability state must be verified from their governed sources.",
};

export const GUIDANCE_DATA = {
  eyebrow: "Guidance, testing & change",
  title: "Move from understanding to implementation.",
  cards: [
    {
      icon: "route",
      title: "Integration Guides",
      description:
        "Architecture patterns and approved implementation guidance. Follow canonical documentation for exact syntax and source-bound implementation detail.",
      link: { label: "Explore Integration Guides", href: ROUTES.integrationGuides },
      path: "/developers/integration-guides/",
    },
    {
      icon: "flask",
      title: "Sandbox",
      description:
        "Non-production testing for an approved implementation context. Access remains separately governed; a sandbox is not production parity, entitlement or certification.",
      link: { label: "Read Sandbox guidance", href: ROUTES.sandbox },
      path: "/developers/sandbox/",
    },
    {
      icon: "compare",
      title: "API Changelog",
      description:
        "Version and compatibility changes—not marketing news. Review the canonical change record; this overview makes no current-release or support-date claim.",
      link: { label: "Review API Changelog", href: ROUTES.changelog },
      path: "/developers/changelog/",
    },
  ] as ResourceCard[],
};

export const FAMILIES_DATA = {
  eyebrow: "Integration families",
  title: "Fit the architecture you already operate.",
  description:
    "Choose your integration context, then review what ZoikoTax connects—and what remains owned by the surrounding systems.",
  boundaryLabel: "Boundary",
  cards: [
    {
      icon: "receipt",
      title: "Billing & BSS",
      description: "Quote, commit, invoice and transaction integration within telecom financial workflows.",
      boundary: "Not a full BSS, OSS or rating replacement.",
    },
    {
      icon: "landmark",
      title: "ERP & General Ledger",
      description: "Controlled journals, an accounting bridge and reconciliation across retained enterprise systems.",
      boundary: "The general ledger remains the accounting system of record—not replaced.",
    },
    {
      icon: "branch",
      title: "Existing Tax Engines",
      description: "Federated, Shadow and migration adapter patterns for coexistence with an incumbent.",
      boundary: "Comparison does not automatically establish legal or authoritative truth.",
    },
    {
      icon: "network",
      title: "E-Invoicing Networks",
      description: "Approved network and authority adapter patterns for e-invoicing workflows.",
      boundary: "No universal or direct regulator, clearance or certification support is implied.",
    },
    {
      icon: "database",
      title: "Data & Enterprise Systems",
      description: "CPQ, CRM, product-catalog and approved data-platform architecture patterns.",
      boundary: "Not universal vendor certification or support. Route subject to governed publication.",
    },
    {
      icon: "blocks",
      title: "OEM / Embedded",
      description: "Partner provisioning and embedded capability with retained tenant and legal-entity attribution.",
      boundary: "Isolation and commercial permissions are separately governed—not unrestricted resale.",
    },
  ],
  architecture: {
    title: "Connect systems. Retain their owners.",
    tag: "Illustrative conceptual architecture",
    nodes: [
      { title: "Source systems", items: "Billing • enterprise • incumbent", owner: "Operational owners retained", highlight: false },
      { title: "ZoikoTax fiscal controls", items: "Approved state • evidence • authority", owner: "Governed fiscal boundary", highlight: true },
      { title: "Downstream systems", items: "Accounting • networks • partners", owner: "Acceptance owners retained", highlight: false },
    ],
    note: "Source systems exchange information through the governed ZoikoTax fiscal boundary with downstream systems. Integration does not transfer operational ownership, general-ledger authority or external acceptance. This is conceptual architecture, not production syntax.",
  },
};

export const CONTRACT_DATA = {
  eyebrow: "Contract & authority",
  title: "Evaluation is not an authoritative write.",
  description:
    "Keep provisional work, governed commits and external acceptance distinct. Preserve evidence context and deterministic authority across every integration surface.",
  modes: [
    {
      tag: "Provisional • Non-committing",
      title: "Quote / preview",
      description:
        "A non-committing evaluation is distinct from a fiscal commit. Preview results do not create an authoritative write or establish external acceptance.",
      flow: "Evaluate → review → retain context",
      highlight: false,
    },
    {
      tag: "Authoritative • Approved state only",
      title: "Commit / write",
      description:
        "An authoritative write is permitted only through approved state and canonical contract semantics. Idempotency and evidence belong to that governed contract.",
      flow: "Approved state → authoritative action → evidence",
      highlight: true,
    },
  ],
  principles: [
    {
      icon: "compare",
      title: "Versioned contracts",
      description:
        "Versioned REST contracts define implementation behavior. Follow the Changelog for source-controlled compatibility guidance.",
      link: { label: "Review Changelog", href: ROUTES.changelog },
      path: "/developers/changelog/",
    },
    {
      icon: "layers",
      title: "Asynchronous bulk",
      description:
        "Bulk work is asynchronous. Limits, queue behavior, polling and processing SLAs are not established by this overview.",
    },
    {
      icon: "webhook",
      title: "Events & webhooks",
      description:
        "Notifications are not legal or external acceptance. Signing, delivery, retry and ordering semantics are source-bound.",
    },
    {
      icon: "scan",
      title: "Correlation & problems",
      description:
        "Preserve correlation and problem-detail context for diagnosis and evidence. No specific field names or RFC contract is defined here.",
    },
  ] as { icon: string; title: string; description: string; link?: { label: string; href: string }; path?: string }[],
  shadow: {
    tag: "Shadow • Non-impacting / non-authoritative",
    description:
      "Shadow observes and compares without affecting authoritative outcomes until governed review and cutover. Comparison is evidence for a decision—not automatic legal truth, fiscal authority or an AI-authorized outcome.",
  },
};

export const PUBLIC_CONTROLLED_DATA = {
  eyebrow: "Public vs controlled implementation detail",
  title: "Orientation here. Exact truth at the source.",
  cards: [
    {
      icon: "globe",
      title: "Public",
      description:
        "Integration concepts, canonical documentation routes and conceptual architecture. Enough context to choose the right path without a lead gate.",
      items: "Orientation • resource purposes • system boundaries",
      variant: "public" as const,
    },
    {
      icon: "lock",
      title: "Source-controlled",
      description:
        "Exact API, SDK, event, environment, authentication and access contracts. Use canonical sources and controlled implementation documentation as applicable.",
      items: "Contract syntax • access scope • private implementation",
      variant: "controlled" as const,
    },
  ],
  footnote:
    "Public documentation does not replace private implementation material. Currentness and contract metadata should appear only when verified—not as an inferred “latest” label.",
};

export const SECURITY_DATA = {
  eyebrow: "Security, privacy & source discipline",
  titleLines: ["Explain the architecture.", "Protect the detail."],
  link: { label: "Explore Trust", href: ROUTES.trust },
  path: "/trust/",
  items: [
    {
      title: "Keep sensitive data out",
      description:
        "Do not put secrets, credentials, private authority, tenant, customer, subscriber, tax or ledger payloads in public examples, forms or analytics. Analytics should use categorical route and placement—not raw code, free text, payloads or uncontrolled URLs.",
    },
    {
      title: "Keep mechanisms source-bound",
      description:
        "Do not infer authentication or signing. Retain downstream OEM, tenant and legal-entity separation. Use Trust for privacy and residency; do not assert performance or certification without evidence.",
    },
    {
      title: "Keep assistance bounded",
      description:
        "AI may explain approved concepts. It must not invent technical contracts, law or fiscal authority. Canonical engineering, security, entitlement, release and Coverage sources take precedence over editorial content.",
    },
  ],
};

export const SOURCES_DATA = {
  eyebrow: "Independent sources of truth",
  title: "Ask the right question. Check the right source.",
  description:
    "Contract detail, security evidence, market capability and commercial permission are independent domains. None can be inferred from the others.",
  cards: [
    {
      icon: "map",
      title: "Is the capability live?",
      description:
        "Check current capability-specific Coverage. A documented integration concept is not evidence of live market availability.",
      link: { label: "View Coverage", href: ROUTES.coverage },
      path: "/coverage/",
    },
    {
      icon: "shield",
      title: "Where is security truth?",
      description:
        "Use Trust Security for the security evidence domain. This overview does not establish certifications or control guarantees.",
      link: { label: "Read Trust Security", href: ROUTES.trustSecurity },
      path: "/trust/security/",
    },
    {
      icon: "fingerprint",
      title: "Privacy or residency?",
      description:
        "Use Trust and Privacy guidance, with controlled disclosure where needed. Global scope does not mean universal residency.",
      link: { label: "Explore Trust & Privacy", href: ROUTES.trustPrivacy },
      path: "/trust/ • /trust/privacy/",
    },
    {
      icon: "key",
      title: "How do I get access?",
      description:
        "Start with API documentation. Production access is controlled onboarding; discuss contractual scope in a qualified demo.",
      link: { label: "Read API / Book a Demo", href: ROUTES.apiReference },
      path: "/developers/api/ • /demo/",
    },
    {
      icon: "compare",
      title: "What has changed?",
      description:
        "Use the API Changelog for version and compatibility guidance. Do not infer currentness from this overview.",
      link: { label: "Review Changelog", href: ROUTES.changelog },
      path: "/developers/changelog/",
    },
    {
      icon: "flask",
      title: "Where can I test?",
      description:
        "Read Sandbox guidance for non-production testing. Testing access is separately governed and does not establish production rights.",
      link: { label: "Explore Sandbox", href: ROUTES.sandbox },
      path: "/developers/sandbox/",
    },
  ] as ResourceCard[],
};

export const JOURNEYS_DATA = {
  eyebrow: "User journeys",
  title: "A useful path for every entry point.",
  items: [
    {
      icon: "receipt",
      title: "Billing engineer",
      path: "Billing & BSS → API Reference → Guide / Sandbox → Changelog → Coverage → scope Demo",
      description:
        "Begin with the financial workflow, review the contract, test within approved non-production access and qualify capability before implementation.",
    },
    {
      icon: "waypoints",
      title: "Enterprise architect",
      path: "Incumbent / ERP path → ownership boundary → Integration Guide → Trust / Coverage",
      description:
        "Plan coexistence and reconciliation around retained systems of record. Verify security, privacy and market state independently.",
    },
    {
      icon: "fileCheck",
      title: "Resource registry unavailable",
      path: "Hero → static canonical route cards → source documentation",
      description:
        "Core orientation remains useful without dynamic inventory. Unknown snippets are safely suppressed; no contract or capability claim is invented.",
    },
  ],
};

export const RESILIENT_DATA = {
  eyebrow: "Resilient orientation",
  title: "Keep the path useful. Never fill gaps with claims.",
  description:
    "Conceptual state patterns—not actual outages or live service status. Critical copy and navigation remain readable while optional detail is absent.",
  card: {
    title: "API Reference",
    description: "Canonical contract documentation remains the route forward.",
    link: { label: "Read API Reference", href: ROUTES.apiReference },
    path: "/developers/api/",
    dynamicLabel: "Optional dynamic detail",
    dynamicNote:
      "Loading enrichment does not block the canonical route. Unverified metadata and examples are omitted.",
  },
  states: [
    { title: "Canonical resources", status: "Normal", description: "Core route cards and their purposes stay visible." },
    { title: "Dynamic content loading", status: "Non-blocking", description: "Load dynamic detail only; no spinner blocks the page." },
    { title: "Version metadata unavailable", status: "Omit", description: "Do not infer “latest” or fabricate currentness." },
    { title: "Example unavailable", status: "Omit", description: "No substituted endpoint, schema or code." },
    { title: "Sandbox restricted", status: "Access governed", description: "A neutral access state—not an outage claim." },
    { title: "Changelog unavailable", status: "Static route retained", description: "Keep the canonical route; do not show stale news." },
    { title: "Child destination unpublished", status: "No dead link", description: "Data & Enterprise Systems remains purpose-only." },
    { title: "Coverage unavailable", status: "No inference", description: "Documentation does not establish market capability." },
    { title: "No JavaScript", status: "Linear core retained", description: "Identity, direct answer and core routes stay readable." },
    { title: "Slow network", status: "Progressive shell", description: "Prioritize critical copy and navigation over enrichment." },
  ],
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. No inferred contracts.",
  description: "The essential decisions, with source-safe answers visible on the page.",
  items: [
    {
      question: "How do I integrate ZoikoTax?",
      answer:
        "Choose the integration family that fits your architecture, review the canonical contract, then use approved guidance and non-production testing. Verify Coverage and implementation scope separately.",
    },
    {
      question: "Where are the API docs?",
      answer:
        "API Reference at /developers/api/ is the canonical route for versioned endpoint, schema, error and contract documentation. This overview is not the production API contract.",
    },
    {
      question: "Which integration family should I choose?",
      answer:
        "Start with Billing & BSS, ERP & General Ledger, Existing Tax Engines, E-Invoicing Networks, Data & Enterprise Systems or OEM / Embedded. Match the retained system owner and review the explicit boundary.",
    },
    {
      question: "When should I use APIs, SDKs, events or bulk?",
      answer:
        "Use the API contract as the foundation. Review SDKs for supported client libraries aligned with it, events for notification contracts and Bulk & Batch for asynchronous patterns. Exact supported behavior belongs to each canonical source.",
    },
    {
      question: "Where are authentication and environment details?",
      answer:
        "They are getting-started concerns defined by source-controlled documentation and controlled onboarding. Do not infer protocols, credentials, environment URLs or production access from this overview.",
    },
    {
      question: "Can I test in a Sandbox?",
      answer:
        "Read /developers/sandbox/ for non-production testing guidance. Access is separately governed; sandbox use does not establish production parity, entitlement or certification.",
    },
    {
      question: "Does documentation mean a capability is live?",
      answer:
        "No. Check /coverage/ for current capability-specific market state. Documentation, implementation access, Trust evidence and commercial entitlement are separate.",
    },
    {
      question: "How do I track version changes?",
      answer:
        "Review /developers/changelog/ for canonical version and compatibility guidance. Do not infer a latest version, support window or deprecation date from this page.",
    },
    {
      question: "Can ZoikoTax coexist with an incumbent tax engine?",
      answer:
        "Review Existing Tax Engines for federated, Shadow and migration adapter concepts. Shadow comparison remains non-impacting and non-authoritative until governed review and cutover; it is not automatic legal truth.",
    },
    {
      question: "Where is security, privacy and residency truth?",
      answer:
        "Use /trust/, /trust/security/ and /trust/privacy/, with controlled disclosure as appropriate. Global platform orientation does not establish universal residency or certify a specific deployment.",
    },
  ],
};

export const CTA_DATA = {
  eyebrow: "Your next step",
  title: "Build from the canonical contract.",
  description:
    "Read the public documentation, choose an integration pattern and verify Coverage. Then discuss contractual implementation scope—not instant activation.",
  actions: [
    { label: "Read API Documentation", href: ROUTES.apiReference, variant: "primary" as const },
    { label: "Explore Integration Guides", href: ROUTES.integrationGuides, variant: "secondary" as const },
    { label: "View Coverage", href: ROUTES.coverage, variant: "secondary" as const },
  ],
  demoLink: { label: "Need to qualify contractual scope? Book a Demo", href: ROUTES.demo },
  note: "Public technical content is not lead-gated. Production credentials and entitlement remain separately governed.",
};
