export const HERO_DATA = {
  eyebrow: "RESOURCES · FAQ",
  title: "Straight answers to common ZoikoTax questions.",
  description:
    "Find plain-language answers about the platform, telecom-tax coverage, integrations, trust and evaluation — with links to the authoritative detail behind each answer.",
  searchPlaceholder: "Search questions and answers",
  searchCta: "Search FAQs",
  routes: [
    { label: "Guides & Reports", href: "/resources/guides-reports/", variant: "secondary" as const },
    { label: "Trust Center", href: "/trust/", variant: "link" as const },
  ],
};

export const AUTHORITY_NOTICE = {
  title: "The source controls the detail.",
  body: "FAQ answers summarize approved public information. Where exact availability, contractual terms, legal obligations or assurance posture matters, the linked authoritative destination controls.",
  disclaimer:
    "This page is a source-governed answer draft for approval, not a live approved FAQ registry. Review dates and release approval are not supplied. Ownership roles shown below are illustrative.",
};

export const BUYER_QUESTIONS = [
  { tag: "PLATFORM", question: "What is ZoikoTax?" },
  { tag: "PLATFORM", question: "Does it replace BSS/OSS or ERP?" },
  { tag: "COVERAGE", question: "Which countries are supported?" },
  { tag: "IMPLEMENTATION", question: "How do integrations work?" },
  { tag: "TRUST", question: "What about evidence and auditability?" },
  { tag: "TRUST", question: "What is the security and privacy posture?" },
];

export const CATEGORY_CHIPS = [
  { label: "All topics", count: 34, active: true },
  { label: "Platform", count: 6 },
  { label: "Coverage", count: 6 },
  { label: "Implementation", count: 7 },
  { label: "Trust", count: 8 },
  { label: "Resources", count: 7 },
];

export const FILTER_TOOLBAR = {
  keywordPlaceholder: "Search questions and answers",
  categoryPlaceholder: "All categories",
  audiencePlaceholder: "All audiences",
  sortPlaceholder: "Relevance",
  helperText:
    "Audience options: Tax · Finance · Engineering · Compliance · Procurement · Executive. Sort: Relevance (default) or Alphabetical.",
  statusText: "34 questions · All categories · No keyword entered",
  clearLabel: "Clear filters",
  footerNote:
    "Use general topic keywords. Avoid sensitive customer details, legal matters or tax records. These are static search and filter affordances; no generated answers are shown.",
};

export const DISCOVERY_INTRO = {
  title: "Answer. Check the qualification. Follow the source.",
  description:
    "Every answer keeps its essential scope visible. Start with the plain-language lead, then use the source route for exact, approved detail. All 34 answers below are expanded for reading.",
};

export type FaqItem = {
  question: string;
  lead: string;
  qualification: string;
  sourceLabel: string;
  sourcePath?: string;
  sourceNote?: string;
  slug: string;
  owner: string;
};

export type FaqCategory = {
  id: string;
  bg: "white-pattern" | "lavender";
  sidebarEyebrow: string;
  title: string;
  summary: string;
  countLabel: string;
  conventionNote?: string;
  items: FaqItem[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "platform",
    bg: "white-pattern",
    sidebarEyebrow: "UNDERSTAND THE ROLE",
    title: "Platform",
    summary: "What ZoikoTax is, who it serves and how it fits alongside existing systems.",
    countLabel: "6 questions · All answers visible",
    conventionNote:
      "“Source required” marks draft detail that needs approval. A destination is a route to authority, not proof that the answer is complete.",
    items: [
      {
        question: "What is ZoikoTax?",
        lead: "ZoikoTax is telecom-specific fiscal infrastructure: a fiscal-control layer for telecom operators and the teams responsible for tax, finance, compliance and engineering.",
        qualification:
          "That describes its role, not a guarantee of every capability in every market. Use the approved Platform source for the exact operating scope, and Coverage for current availability.",
        sourceLabel: "Platform",
        sourcePath: "/platform/",
        slug: "faq-platform-what",
        owner: "Platform editorial",
      },
      {
        question: "Who is it for?",
        lead: "ZoikoTax is framed for telecom operators and their tax, finance, compliance and engineering teams.",
        qualification:
          "A team or operator label does not establish suitability for a particular business. Compare your operating model and requirements with the approved Platform scope before evaluating fit.",
        sourceLabel: "Platform",
        sourcePath: "/platform/",
        slug: "faq-platform-who",
        owner: "Platform editorial",
      },
      {
        question: "Does it replace BSS/OSS or ERP?",
        lead: "It is framed to integrate and coexist with BSS/OSS, ERP and the architecture an operator already runs—not as a blanket replacement.",
        qualification:
          "System responsibilities and integration boundaries must be confirmed for the intended deployment. The public framing does not establish a replacement plan or migration commitment.",
        sourceLabel: "Platform",
        sourcePath: "/platform/",
        slug: "faq-platform-bss",
        owner: "Platform architecture",
      },
      {
        question: "Does it replace an existing tax engine?",
        lead: "Do not assume replacement. ZoikoTax can be considered as a fiscal-control layer alongside an existing tax engine.",
        qualification:
          "The approved Existing Tax Engines material must establish the supported coexistence approach and boundaries. This draft does not confirm compatibility with any named engine.",
        sourceLabel: "Developers → Existing Tax Engines",
        sourcePath: "/developers/",
        sourceNote: "Exact child route not supplied; consult the named destination through Developers.",
        slug: "faq-platform-engine",
        owner: "Developer documentation",
      },
      {
        question: "What is Shadow Assurance?",
        lead: "Shadow Assurance is a Platform operating-model topic. The name alone does not establish how it operates or affects production.",
        qualification:
          "Exact operating, non-impacting and cutover details require the approved Platform source. Do not infer a risk-free comparison, an automatic cutover or a production assurance guarantee from this FAQ.",
        sourceLabel: "Platform → Shadow Assurance",
        sourcePath: "/platform/",
        slug: "faq-platform-shadow",
        owner: "Platform architecture",
      },
      {
        question: "How is AI used?",
        lead: "AI assistance is advisory, not independent monetary, legal, filing or remittance authority.",
        qualification:
          "Detailed model facts, capability boundaries and controls are source-controlled. The public framing does not establish a specific model, autonomous action or a guaranteed result; use the approved AI Governance source.",
        sourceLabel: "AI Governance",
        sourcePath: "/trust/ai-governance/",
        slug: "faq-platform-ai",
        owner: "AI governance",
      },
    ],
  },
  {
    id: "coverage",
    bg: "lavender",
    sidebarEyebrow: "CONFIRM THE SCOPE",
    title: "Coverage",
    summary: "Separate global architecture from current market, scenario and capability availability.",
    countLabel: "6 questions",
    items: [
      {
        question: "Which countries are supported?",
        lead: "Current country support must be checked against the approved Coverage source. This document does not supply a verified country list.",
        qualification:
          "Confirm the country, capability and intended operating scope together. Do not treat an unlisted or unpublished market as supported, or assume that a country label means every capability is available.",
        sourceLabel: "Coverage",
        sourcePath: "/coverage/",
        slug: "faq-coverage-countries",
        owner: "Coverage editorial",
      },
      {
        question: "Is ZoikoTax global?",
        lead: "ZoikoTax is framed with a global architecture. Global architecture is not universal current production coverage.",
        qualification:
          "Availability remains source-controlled for the market and capability you need. Use Coverage for verified scope rather than inferring support from global positioning.",
        sourceLabel: "Coverage",
        sourcePath: "/coverage/",
        slug: "faq-coverage-global",
        owner: "Coverage editorial",
      },
      {
        question: "Which telecom scenarios are covered?",
        lead: "The supplied document does not establish an approved scenario inventory. Check the current Coverage source for your telecom use case.",
        qualification:
          "A general telecom focus does not confirm a specific transaction, operator scenario or obligation. Validate the intended scenario and capability explicitly before relying on coverage.",
        sourceLabel: "Coverage",
        sourcePath: "/coverage/",
        slug: "faq-coverage-scenarios",
        owner: "Coverage subject-matter review",
      },
      {
        question: "Can coverage vary by capability?",
        lead: "Do not assume uniform availability across capabilities. Confirm each required capability against approved Coverage detail.",
        qualification:
          "A market being in scope for one capability is not evidence that another is available there. The document does not establish the current capability-by-market scope.",
        sourceLabel: "Coverage",
        sourcePath: "/coverage/",
        slug: "faq-coverage-capability",
        owner: "Coverage subject-matter review",
      },
      {
        question: "How are regulatory changes handled?",
        lead: "Use the named Regulatory Change resource for source-governed regulatory information, and Coverage for any effect on verified scope.",
        qualification:
          "The document does not establish an update workflow, implementation timing or a monitoring obligation. Regulatory information is not bespoke legal or tax advice; do not infer a promise of automatic legal correctness.",
        sourceLabel: "Resources → Regulatory Change",
        sourceNote: "Destination URL not supplied. Consult the approved Regulatory Change destination when available; no child path is inferred.",
        slug: "faq-coverage-change",
        owner: "Regulatory editorial",
      },
      {
        question: "Can you guarantee compliance in a country?",
        lead: "This FAQ does not establish a country-specific compliance guarantee. Coverage information is not a substitute for legal or tax advice.",
        qualification:
          "Actual obligations depend on the business facts and applicable authority. Use verified Coverage scope, the relevant authoritative material and qualified advice; evidence or software use is not compliance certification.",
        sourceLabel: "Coverage",
        sourcePath: "/coverage/",
        slug: "faq-coverage-compliance",
        owner: "Coverage and legal review",
      },
    ],
  },
  {
    id: "implementation",
    bg: "white-pattern",
    sidebarEyebrow: "PLAN FROM THE SOURCE",
    title: "Implementation",
    summary:
      "Find the right technical documentation before choosing interfaces or environments. Exact child URLs are not supplied; all routes start at Developers.",
    countLabel: "7 questions",
    items: [
      {
        question: "How do integrations work?",
        lead: "The integration framing is coexistence with BSS/OSS, ERP and existing tax infrastructure. Start with the named Integration Guides in Developers.",
        qualification:
          "The document does not establish exact integration contracts, deployment steps or implementation obligations. Confirm system boundaries, available interfaces and the approved approach for your environment before planning delivery.",
        sourceLabel: "Developers → Integration Guides",
        sourcePath: "/developers/",
        slug: "faq-implementation-integrations",
        owner: "Integration documentation",
      },
      {
        question: "Are APIs available?",
        lead: "API availability and exact interface details need the approved API Reference. The document alone does not establish a currently available API.",
        qualification:
          "Use Developers to confirm the relevant interface, authentication and supported version. No endpoints, rate limits or compatibility commitments are asserted by this FAQ.",
        sourceLabel: "Developers → API Reference",
        sourcePath: "/developers/",
        slug: "faq-implementation-apis",
        owner: "API documentation",
      },
      {
        question: "Are SDKs available?",
        lead: "Consult the named SDKs material in Developers for approved SDK availability.",
        qualification:
          "The supplied document does not establish supported languages, versions, package names or maintenance terms. Do not infer an SDK for your language from the presence of a documentation destination.",
        sourceLabel: "Developers → SDKs",
        sourcePath: "/developers/",
        slug: "faq-implementation-sdks",
        owner: "SDK documentation",
      },
      {
        question: "Do you support webhooks/events?",
        lead: "The named Webhooks & Events documentation is the route for approved event-interface detail.",
        qualification:
          "Current availability, event types, delivery behaviour and retry policies are not established here. Check the relevant source before designing a webhook or event-driven integration.",
        sourceLabel: "Developers → Webhooks & Events",
        sourcePath: "/developers/",
        slug: "faq-implementation-events",
        owner: "Event-interface documentation",
      },
      {
        question: "Is there a sandbox?",
        lead: "Use the named Sandbox source in Developers to confirm whether an evaluation environment is available and under what policy.",
        qualification:
          "This document does not establish access, data policy, production parity, environment limits or a trial entitlement. Do not assume an environment can be used with sensitive or production data.",
        sourceLabel: "Developers → Sandbox",
        sourcePath: "/developers/",
        slug: "faq-implementation-sandbox",
        owner: "Developer environment documentation",
      },
      {
        question: "Can I use batch/bulk processing?",
        lead: "Consult the named Bulk & Batch documentation for the approved processing modes relevant to your integration.",
        qualification:
          "The document does not establish current batch availability, file formats, limits, throughput or processing timelines. Verify these details against the source before selecting a processing approach.",
        sourceLabel: "Developers → Bulk & Batch",
        sourcePath: "/developers/",
        slug: "faq-implementation-batch",
        owner: "Processing documentation",
      },
      {
        question: "How are releases communicated?",
        lead: "The named API Changelog is the source route for approved API release information.",
        qualification:
          "The document does not establish release cadence, notice periods, deprecation commitments or a subscription channel. Read the relevant change record and version documentation; do not infer a support obligation.",
        sourceLabel: "Developers → API Changelog",
        sourcePath: "/api-changelog",
        slug: "faq-implementation-releases",
        owner: "Release documentation",
      },
    ],
  },
  {
    id: "trust",
    bg: "lavender",
    sidebarEyebrow: "CHECK THE POSTURE",
    title: "Trust",
    summary: "Security, privacy, continuity, AI and evidence—each with its own authoritative route. No badges stand in for exact scope.",
    countLabel: "8 questions",
    items: [
      {
        question: "How does ZoikoTax handle security?",
        lead: "The Security destination is the authority for ZoikoTax's approved public security posture.",
        qualification:
          "This document does not establish particular controls, certifications, test results or assurance commitments. Review the source for the exact posture and distinguish public information from any separately agreed terms.",
        sourceLabel: "Security",
        sourcePath: "/trust/security/",
        slug: "faq-trust-security",
        owner: "Security governance",
      },
      {
        question: "What is the privacy posture?",
        lead: "Use the Privacy destination for the approved privacy position and applicable public information.",
        qualification:
          "The document does not establish specific processing purposes, retention periods or privacy assurances. A short FAQ summary cannot replace the relevant notices or agreements for your use case.",
        sourceLabel: "Privacy",
        sourcePath: "/trust/privacy/",
        slug: "faq-trust-privacy",
        owner: "Privacy governance",
      },
      {
        question: "Where is data processed or stored?",
        lead: "Confirm processing and storage scope through Data Processing & Residency. Locations are not established in the supplied document.",
        qualification:
          "Do not infer a residency option, regional restriction or transfer arrangement from global architecture. Check the approved source and applicable agreement for the intended service and data.",
        sourceLabel: "Data Processing & Residency",
        sourcePath: "/trust/data-processing-residency/",
        slug: "faq-trust-residency",
        owner: "Data governance",
      },
      {
        question: "What is the business continuity posture?",
        lead: "Business Continuity is the route to the approved public continuity posture.",
        qualification:
          "The document does not establish uptime, recovery targets, service levels or incident-response timelines. Any contractual commitment must be confirmed in its authoritative terms, not inferred from this FAQ.",
        sourceLabel: "Business Continuity",
        sourcePath: "/trust/business-continuity/",
        slug: "faq-trust-continuity",
        owner: "Continuity governance",
      },
      {
        question: "How is AI governed?",
        lead: "AI assistance is not independent monetary, legal, filing or remittance authority. Use AI Governance for the approved boundaries.",
        qualification:
          "Model details and operational controls are source-controlled. Do not treat AI output as a legal conclusion, an approval or evidence of a guaranteed capability; this document does not establish detailed model facts.",
        sourceLabel: "AI Governance",
        sourcePath: "/trust/ai-governance/",
        slug: "faq-trust-ai",
        owner: "AI governance",
      },
      {
        question: "What about evidence and auditability?",
        lead: "Evidence, trace and replay are distinct from automatic legal correctness or compliance certification.",
        qualification:
          "Use Evidence & Auditability to understand approved evidence scope and limitations. The supplied document does not establish the completeness, retention or legal acceptance of evidence for a particular audit.",
        sourceLabel: "Evidence & Auditability",
        sourcePath: "/trust/evidence-auditability/",
        slug: "faq-trust-evidence",
        owner: "Evidence governance",
      },
      {
        question: "What is the accessibility posture?",
        lead: "The Accessibility destination controls the approved public accessibility position.",
        qualification:
          "This document does not establish a conformance level, audit result or certification. The readable structure of this design is not a claim of implemented accessibility compliance.",
        sourceLabel: "Accessibility",
        sourcePath: "/trust/accessibility/",
        slug: "faq-trust-accessibility",
        owner: "Accessibility governance",
      },
      {
        question: "How do I report a vulnerability?",
        lead: "Use Responsible Disclosure for the approved vulnerability-reporting instructions. Do not send vulnerability reports through procurement or sales.",
        qualification:
          "The document does not establish a reporting endpoint, response timeline or bounty programme. Follow only the current approved disclosure route and its instructions; no alternative contact address is invented here.",
        sourceLabel: "Responsible Disclosure",
        sourcePath: "/trust/responsible-disclosure/",
        slug: "faq-trust-disclosure",
        owner: "Security disclosure governance",
      },
    ],
  },
  {
    id: "resources",
    bg: "white-pattern",
    sidebarEyebrow: "READ, EVALUATE, ROUTE",
    title: "Resources",
    summary: "Analysis, documentation and useful next steps. Commercial engagement follows the answer; it never gates it.",
    countLabel: "7 questions",
    items: [
      {
        question: "Where can I read expert analysis?",
        lead: "Telecom Tax Insights is the named Resources destination for analysis.",
        qualification:
          "Use only approved, published analysis and its source context. Editorial information is not advice for a specific customer or a guarantee of a tax outcome; a current article inventory is not supplied here.",
        sourceLabel: "Resources → Telecom Tax Insights",
        sourceNote: "Destination URL not supplied; no new Resources route is inferred.",
        slug: "faq-resources-analysis",
        owner: "Resources editorial",
      },
      {
        question: "Where can I track regulatory change?",
        lead: "Use the named Regulatory Change resource for approved regulatory information.",
        qualification:
          "Publication does not establish an alert service, update cadence or comprehensive monitoring. Confirm the source and applicability of any change; it is not bespoke legal or tax advice.",
        sourceLabel: "Resources → Regulatory Change",
        sourceNote: "Destination URL not supplied; use the approved named destination when available.",
        slug: "faq-resources-regulatory",
        owner: "Regulatory editorial",
      },
      {
        question: "Where are long-form guides and reports?",
        lead: "Guides & Reports is the destination for long-form Resources material.",
        qualification:
          "Check the scope and source context of each approved publication. The existence of the destination does not establish a particular report, a complete library or current advice for your circumstances.",
        sourceLabel: "Guides & Reports",
        sourcePath: "/resources/guides-reports/",
        slug: "faq-resources-guides",
        owner: "Resources editorial",
      },
      {
        question: "Where can I find definitions?",
        lead: "A Glossary should be used only once it is approved and published. This document does not establish a live Glossary.",
        qualification:
          "Until then, use the terminology in the relevant authoritative Platform, Coverage or Developers source. Do not treat an unpublished definition as approved or a general definition as a legal interpretation.",
        sourceLabel: "Glossary — approval and publication required",
        sourceNote: "No live Glossary route supplied. Approved terminology fallback: Platform /platform/.",
        slug: "faq-resources-definitions",
        owner: "Terminology editorial",
      },
      {
        question: "Where can I get implementation help?",
        lead: "Start with the approved Developers documentation and use only a support or help path established by that source.",
        qualification:
          "The document does not supply a support portal, email address, entitlement or response commitment. Do not assume a help channel or SLA; check the approved instructions for your integration context.",
        sourceLabel: "Developers → approved implementation help",
        sourcePath: "/developers/",
        slug: "faq-resources-help",
        owner: "Developer documentation",
      },
      {
        question: "How can I evaluate ZoikoTax?",
        lead: "Begin with Platform, Coverage, Developers and Trust information. A contextual demo conversation can help discuss fit after you have checked the relevant scope.",
        qualification:
          "The supplied demo route is not a trial entitlement, evaluation process guarantee or pricing commitment. No price range is established here; customer-specific commercial terms must not be generalized from a conversation.",
        sourceLabel: "Contextual demo conversation",
        sourcePath: "/demo/",
        slug: "faq-resources-evaluate",
        owner: "Commercial editorial",
      },
      {
        question: "Where can I check system status?",
        lead: "A system-status destination is not established in this document. No current service-health claim can be made from this FAQ.",
        qualification:
          "Do not infer a status page, an incident feed or availability from the presence of other public pages. Use only a status route established by an approved source; none is supplied for this draft.",
        sourceLabel: "System status — source destination required",
        sourceNote: "Route absent. No health indicator or status link is shown.",
        slug: "faq-resources-status",
        owner: "Service communications",
      },
    ],
  },
];

export const CURRENTNESS_DATA = {
  eyebrow: "SOURCE LINEAGE & CURRENTNESS",
  title: "An answer is only as current as its source.",
  paragraphs: [
    "Each canonical question ID connects an answer to its authoritative source, governed owner role and review date. A source change triggers review; a useful route alone is not evidence of approval.",
    "High-change topics need tighter review as approved—no fixed cadence is asserted here. This draft shows ‘Review date not supplied’ and ‘Source required’ rather than fabricated currentness.",
  ],
  statesLabel: "ILLUSTRATIVE LIFECYCLE STATES · NOT APPROVALS FOR THESE ANSWERS",
  states: [
    { title: "Published", description: "Current and approved; source, scope and review are established." },
    { title: "Review due", description: "Conditional use only; fail closed when the risk makes currency uncertain." },
    { title: "Under review", description: "Not current. Follow the authoritative source; do not rely on the draft." },
    { title: "Superseded / Retired", description: "Use an approved replacement. Remove the old answer from default discovery." },
  ],
  footer:
    "Publication is gated by the governed owner and editorial review, legal review for high-risk topics, accessibility review and source-route validation. This static page is an approval candidate, not an implemented release.",
};

export const UNCERTAINTY_DATA = {
  eyebrow: "WHEN THE PUBLIC ANSWER IS NOT ENOUGH",
  title: "A clear boundary. A safer next step.",
  panels: [
    {
      label: "ILLUSTRATIVE SEARCH STATE · 0 RESULTS",
      heading: "No matching FAQ answers.",
      body: "The public FAQ does not establish this point. Clear filters or use the authoritative destination. No query or generated answer is supplied in this example.",
      cta: "Clear filters",
      routes: [
        { label: "Coverage", path: "/coverage/" },
        { label: "Trust", path: "/trust/" },
        { label: "Developers", path: "/developers/" },
      ],
    },
    {
      label: "ILLUSTRATIVE SOURCE STATE · UNAVAILABLE / RETIRED",
      heading: "Do not rely on an unconfirmed source.",
      body: "If the source is unavailable, or an answer is retired without an approved replacement, do not infer the missing detail. A replacement route is shown only when established by an approved source.",
      note: "No replacement or working contact endpoint is invented in this state. Use established category sources; vulnerability reports belong only in Responsible Disclosure.",
    },
  ],
  crossDomain: {
    title: "Keep the supported part. Route the rest.",
    body: "Some questions span more than one domain. Keep the part the public FAQ can support, and route the unsupported part to the relevant authoritative source rather than extending this answer beyond its approved scope.",
  },
  readingTools: {
    title: "Plain-language answers, with the scope in view.",
    body: "Reading aids such as collapse state, keyboard focus, highlighted deep links and print layout are shown as static design-state patterns below. They describe intended behaviour; implementation and accessibility conformance require separate engineering review.",
  },
  patternsLabel: "DESIGN-STATE PATTERNS · STATIC EXAMPLES, NOT RUNTIME CONFORMANCE",
  interactionPatterns: [
    { title: "Keyboard focus", description: "Focus-ring example shown at 3px." },
    { title: "Collapsed / expanded", description: "Is ZoikoTax global? +" },
    { title: "Linked answer · Highlighted", description: "#faq-platform-what", highlighted: true },
  ],
  readingPatterns: [
    { title: "Filtered", description: "✓ Platform selected · 6 questions. Clear filters restores all 34." },
    { title: "Review due / Retired", description: "Lifecycle labels surface alongside the answer, not hidden in metadata." },
    { title: "No-JS / Print", description: "Answers remain readable without script execution or interactive state." },
  ],
  footnote:
    "Search wording, filter counts and lifecycle labels above are illustrative content, not a runtime claim. Reflow, zoom, no-JS behaviour and print layout require implementation and accessibility review before release.",
};

export const NEXT_ROUTES_DATA = {
  eyebrow: "CONTINUE WITH THE AUTHORITATIVE DETAIL",
  title: "Choose the source for your next question.",
  cards: [
    { title: "Guides & Reports", description: "Long-form reading and source context.", cta: "Explore source", href: "/resources/guides-reports/" },
    { title: "Developers", description: "Technical interfaces and integration detail.", cta: "Explore source", href: "/developers/" },
    { title: "Coverage", description: "Verified market and capability scope.", cta: "Explore source", href: "/coverage/" },
    { title: "Trust", description: "Security, privacy, governance and evidence.", cta: "Explore source", href: "/trust/" },
  ],
};

export const EVALUATION_DATA = {
  title: "Have the scope. Discuss the fit.",
  description: "After reviewing the sources, a contextual conversation can help you explore your requirements. No trial, price or evaluation outcome is promised.",
  cta: "Book a demo",
  href: "/demo/",
};
