export const HERO_DATA = {
  eyebrow: "RESOURCES · GUIDES & REPORTS",
  title: "Substantive guides for evaluating and operating telecom tax.",
  description:
    "Explore source-backed guides, reports and implementation resources designed to stand on their own — not thin lead-generation placeholders.",
  actions: [
    { label: "Browse guides & reports", variant: "primary" as const },
    { label: "Telecom Tax Insights", variant: "secondary" as const },
  ],
  contextualRoute: "Regulatory Change",
  footnote: "Meaningful standalone value. Clear sources and limits. No form before useful content.",
};

export const APPROVAL_NOTICE = {
  title: "UI approval candidate · source required",
  description:
    "The specification defines this resource center, but no approved published registry, standalone resources, citations, reviewers or downloadable artifacts were supplied. The library below is intentionally empty; labeled specimens show the intended patterns, not live records. Runtime release approvals are not represented as passed.",
};

export const PUBLICATION_STANDARD_DATA = {
  eyebrow: "OUR PUBLICATION STANDARD",
  title: "Useful before you give us anything.",
  description: "A resource must answer a real question on its own. A title, a form or an empty PDF is not enough to publish.",
  principles: [
    { title: "Standalone substance", description: "Structured explanation, practical decision or implementation guidance, and clear applicability — not a thin teaser." },
    { title: "Sources with context", description: "Traceable source basis, limitations and methods where relevant. Reviewer attribution only when approved and permitted." },
    { title: "Currentness you can inspect", description: "Owned versions, approved dates and material corrections. Uncertain time-sensitive claims return to review." },
  ],
  featured: {
    eyebrow: "FEATURED · CURRENT ONLY",
    title: "Flagship resources",
    heading: "No approved flagship resource supplied",
    description: "Only a current, approved standalone resource belongs here. There is no featured cover or download to display.",
    routes: ["Telecom Tax Insights", "Resource FAQ"],
  },
  library: {
    title: "Guides & reports library",
    subtitle: "Approved, current resources only",
    heading: "No approved published resources supplied",
    description:
      "No titles or artifacts can be listed responsibly yet. Continue with the Insights or FAQ routes for the next part of your resource journey; there is no form or download gate here.",
    actions: [
      { label: "Explore Telecom Tax Insights", variant: "primary" as const },
      { label: "Visit the FAQ", variant: "secondary" as const },
    ],
    footnote: "Search and filters appear with a meaningful approved inventory — not in this empty library.",
  },
};

export const DISCOVERY_DATA = {
  eyebrow: "DISCOVERY PATTERN — ILLUSTRATIVE",
  title: "Find by question, team and format.",
  description: "These inactive controls show the discovery contract for a future approved library. They are not an empty live filter toolbar.",
  searchPlaceholder: "Search title, summary, topics and approved metadata",
  focusLabel: "Focus specimen · inactive",
  filterGroups: [
    { label: "Topics · multi-select", options: ["Telecom tax", "Compliance", "Finance", "Billing / BSS", "Revenue assurance", "E-invoicing", "Implementation", "Trust"] },
    { label: "Audience", options: ["Tax", "Finance", "Engineering", "Compliance", "Executive", "Procurement"] },
    { label: "Resource type", options: ["Guide", "Report", "Brief", "Checklist", "Framework", "Implementation resource"] },
  ],
  dateSortGroups: [
    { label: "Currentness & date · approved metadata only", options: ["Current", "Published date", "Updated date"] },
    { label: "Sort · where useful", options: ["Featured", "Newest", "Recently updated", "Alphabetical"] },
  ],
  selectedFilters: ["Selected: Compliance", "Selected: Guide"],
  clearLabel: "Clear filters · preserve the search query",
  toolbarFootnote:
    "Jurisdiction is a resource-scope filter only when approved scope exists; it never implies country coverage. No jurisdiction metadata was supplied. Research queries, sensitive content and business context are excluded from suggested telemetry; no profiling is implied.",
  noMatchesNotice: {
    title: "No matches — illustrative state",
    description: "When a populated library has no matches, explain the query and selected filters, offer to clear filters while preserving the query, and route to Insights or FAQ. Do not invent a recommended resource.",
  },
  cardAnatomy: {
    label: "CARD ANATOMY · NOT A LISTING",
    typeLabel: "Type · source required",
    title: "A specific, source-approved title belongs here.",
    description: "The standalone summary must explain the problem, scope and useful outcome without promising unavailable evidence. This anatomy is not a publishable resource.",
    metadata: ["Audience & topics · not supplied", "Approved dates & review · not supplied", "Access & actual format · not supplied"],
    destination: "No approved destination or artifact",
  },
  registryFields: {
    title: "One governed record, not a placeholder.",
    description: "Cards, discovery and detail share approved registry metadata. A missing field is not an invitation to manufacture it.",
    rows: [
      { label: "Identity & route", value: "Stable resource ID + canonical resource route · structural fields only; no existing record supplied." },
      { label: "Editorial metadata", value: "Specific title, standalone summary, type, audience, topics and actual scope need approval." },
      { label: "Dates & reviewer", value: "Published / updated dates and reviewer role only with approved metadata, attribution rights and actual review." },
      { label: "Calculated measures", value: "Reading time and page count only when calculated from the actual approved body or file." },
      { label: "Destination & access", value: "Read links lead to real canonical content. Download links require real artifacts. Access and format must match the approved record." },
    ],
  },
};

export const TOPIC_ARCHITECTURE_DATA = {
  eyebrow: "TOPIC ARCHITECTURE",
  title: "Start with the problem you need to solve.",
  description: "These clusters describe how resources should be organized, not articles currently available. Use your role and question to assess whether a future resource is relevant.",
  clusters: [
    { title: "Telecom tax", tag: "Tax teams", description: "Frame the decision, applicable scope and assumptions before comparing approaches." },
    { title: "Compliance", tag: "Compliance teams", description: "Look for ownership, obligations, evidence boundaries and clear limitations." },
    { title: "Finance", tag: "Finance & executives", description: "Connect the question to fiscal operations and the decisions the resource can support." },
    { title: "Billing / BSS", tag: "Engineering & billing", description: "Separate process and architecture guidance from product or market availability." },
    { title: "Revenue assurance", tag: "Assurance teams", description: "Ask how inputs, reconciliation and evidence are explained, not just what is promised." },
    { title: "E-invoicing", tag: "Tax & engineering", description: "Require explicit context and scope; do not infer universal jurisdiction support." },
    { title: "Implementation", tag: "Engineering & procurement", description: "Distinguish prerequisites, process steps, interfaces and product boundaries." },
    { title: "Trust", tag: "Compliance & procurement", description: "Evaluate sources, review rights, access, limitations and evidence governance." },
  ],
  formatStandards: {
    eyebrow: "SIX TYPES · ONE SUBSTANTIVE STANDARD",
    title: "The format should serve the content.",
    description: "Type names and symbols distinguish the patterns; color alone never carries meaning.",
    types: [
      { title: "Guide", description: "Structured explanation with decision or implementation guidance, sources and limits." },
      { title: "Report", description: "Synthesis or research with method, source basis, period and limitations." },
      { title: "Brief", description: "Concise, standalone treatment of a focused decision — not a teaser for a form." },
      { title: "Checklist", description: "Actionable tasks with context, scope and an owner for each applicable step." },
      { title: "Framework", description: "Defined terms and steps, applicability and limits that make the model usable." },
      { title: "Implementation resource", description: "Precise architecture or process guidance, product boundaries and relevant developer links." },
    ],
  },
};

export const READING_ANATOMY_DATA = {
  eyebrow: "RESOURCE DETAIL ANATOMY — ILLUSTRATIVE",
  title: "A clear reading path. Value first.",
  description: "An inline structural specimen, not a second destination. The body below explains the specification's editorial standards; it is not fabricated telecom research.",
  contents: {
    label: "IN THIS READING PATTERN",
    items: ["Executive summary", "Key takeaways", "Structured explanation", "Implementation implications", "Sources & methodology", "Limits & next steps", "Files & formats"],
    footnote: "Keep the body, direct routes and source notes useful in print and without JavaScript. Contents links supplement a logical heading order.",
  },
  metadataBand: {
    label: "STRUCTURAL FIELDS · SOURCE REQUIRED",
    rows: ["Title / summary / type / audience · no approved resource record supplied", "Published / updated / version / reviewer · not supplied"],
  },
  articleHeading: {
    label: "SPECIFICATION-BASED EXPLANATION · NOT A PUBLISHED GUIDE",
    title: "Editorial standards, shown in a reading pattern",
    description: "How standalone value, traceability and clear limitations should work together before a resource can be published.",
  },
  sections: [
    { title: "Executive summary", body: "Publication starts with a meaningful standalone body. The reader should be able to understand the problem, follow the explanation and see the resource's limits before encountering any form or download. A title, summary or document shell does not meet that standard." },
  ],
  keyTakeaways: {
    title: "Key takeaways",
    items: [
      "Make the core explanation useful without a download or sales conversation.",
      "Separate sourced facts, interpretation and unresolved questions.",
      "Only publish approved metadata and formats that actually exist.",
    ],
  },
  moreSections: [
    { title: "Structured explanation", body: "A guide needs a coherent sequence, not disconnected teaser paragraphs. Define the question and audience, explain the relevant terms, and organize the body around decisions or implementation steps. A checklist must state its context, scope and responsible owner; a framework must define its terms, applicability and limits. The type should reflect what the content delivers." },
    { title: "Implementation implications", body: "Practical guidance should distinguish an explanatory model from a product capability or market commitment. State prerequisites and process boundaries, identify what the reader must verify, and route architecture questions to Developers. Integration Guides and API Reference belong in that developer journey; their child routes are not specified here." },
    { title: "Sources, notes and methodology", body: "Sources should support the actual claims they accompany. Distinguish primary material from secondary interpretation. A research report must explain its method, source period and limitations; survey-based work also needs the sample and collection period. No citation collection, approved research or named reviewer was supplied for this page, so none is presented as evidence." },
    { title: "Limitations", body: "A useful explanation states what it cannot establish even when sources are available. Scope, assumptions and unresolved points must remain visible rather than hidden in a download. Editorial guidance here does not establish legal advice, country support, product entitlement or accessibility conformance. Those questions require the applicable approved source and review." },
  ],
  nextRoutes: ["Developers", "Coverage", "Trust"],
  fileModule: {
    title: "Read on the web first.",
    description: "The primary reading destination is the approved canonical web body. An alternate PDF, DOCX, checklist or other format appears only when its actual file and approval exist. No downloadable file was supplied.",
    status: "Files unavailable · no active Download",
    contractLabel: "FILE CONTRACT · NOT FILE METADATA",
    rows: [
      { label: "Actual artifact", value: "Confirm file existence, rendering, title and approved access before showing a file action." },
      { label: "Reliable metadata", value: "Type, purpose, file size and version come from the real approved file. No page count or file size is guessed." },
      { label: "Version alignment", value: "Keep web and alternate formats in sync. Use one canonical content route, not duplicate format pages for search." },
      { label: "Separate approval", value: "Document security and accessibility checks are required. Web approval does not confer document approval." },
    ],
  },
  brokenDownloadNotice: {
    title: "Broken-download state — illustrative",
    description: "If a file is missing, broken, mismatched or fails approval, remove its download action and explain the unavailable format. Keep the approved web body as a fallback when it remains valid. This specimen does not represent an actual file failure or a completed scanner check.",
  },
};

export const SOURCE_INTEGRITY_DATA = {
  eyebrow: "SOURCE INTEGRITY",
  title: "The source belongs beside the claim.",
  description: "Traceability is a publication requirement, not an implied badge of authority. No external source collection or research evidence was supplied.",
  standards: [
    { title: "Primary & secondary", description: "Identify original source material separately from commentary or synthesis. Explain how interpretation relates to the primary source and where uncertainty remains." },
    { title: "Method & context", description: "Research needs source period, units and limitations. Survey work also needs sample, collection period and method. Approved internal aggregation needs its basis and limits." },
    { title: "Review & attribution", description: "Show a reviewer's role only when review, metadata and attribution rights exist. An unavailable reviewer is never replaced with an invented name or endorsement." },
  ],
  status: {
    eyebrow: "CURRENT SOURCE STATUS",
    title: "Source collection not supplied",
    description: "No regulator citation, survey, benchmark or chart is shown. The explanatory content on this page concerns the supplied editorial specification only.",
  },
  rules: [
    { title: "Evidence stays adjacent", description: "For any future real chart, place source, period, units and limitations beside it, with meaningful text alternatives." },
    { title: "Corrections remain visible", description: "Material corrections require approved update history and version/date changes, not a silent replacement." },
    { title: "Limits stand on their own", description: "Explain applicability and uncertainty independently of citations. A source does not remove the need to state what cannot be concluded." },
  ],
};

export const ACCESS_PRIVACY_DATA = {
  eyebrow: "ACCESS & PRIVACY",
  title: "Access should not replace substance.",
  description: "Open reading is the default design standard once content is approved. No resource-specific access or gating policy was supplied; all alternatives below are conditional.",
  models: [
    { title: "Open", description: "Approved web content is readable without a blanket form gate." },
    { title: "Optional email", description: "Only with approval; an optional copy request must not block web reading." },
    { title: "Gated research", description: "Only justified for substantive high-value research and an actual artifact." },
    { title: "Controlled access", description: "Authenticated, customer-only or request access only with approved policy." },
  ],
  formGuidance: {
    label: "FORM PATTERN — INACTIVE",
    title: ["Ask for the minimum.", "Keep the reading open."],
    description: "The specimen uses contact and business context fields only to show a possible pattern. Field necessity, approved copy and access terms must be decided for the actual resource; no field is represented as required policy.",
    rules: [
      { title: "Value before a form", description: "Do not use a popup or sales gate for absent or thin content." },
      { title: "Separate choices", description: "Marketing consent is distinct from access terms wherever terms are required. Never preselect marketing consent." },
      { title: "Data restraint", description: "No progressive profiling or unnecessary sensitive fields. Do not treat resource queries or business context as profiling signals." },
      { title: "No access promise", description: "No submission endpoint, entitlement or delivery guarantee is shown. Provider failure must not remove valid open web content." },
    ],
  },
  formSpecimen: {
    title: "Optional copy request · specimen",
    description: "Not collecting information. Fields and consent copy are illustrative, not an approved access policy.",
    emailLabel: "Business email · example field",
    emailError: "Error specimen: use a valid email format. The message belongs with its labeled field, not in color alone.",
    orgLabel: "Organization · only if justified and approved",
    consents: [
      { title: "Access terms · separate, if required", description: "Approved resource-specific terms would be shown here. No terms or entitlement have been supplied." },
      { title: "Optional marketing consent · unchecked", description: "A separate opt-in would use approved privacy copy. It is not implied by an access request." },
    ],
    actionLabel: "Request unavailable · no approved artifact",
  },
  providerFailureNotice: {
    title: "Provider failure — illustrative state",
    description: "Explain a failed request in plain language without echoing sensitive input. Preserve useful open web reading and direct routes; do not claim a copy was sent, create a new gate or promise access.",
  },
};

export const LIFECYCLE_DATA = {
  eyebrow: "CURRENTNESS & LIFECYCLE — ILLUSTRATIVE STATES",
  title: "A publication is a maintained commitment.",
  description: "The states below describe governance, not actual resource records. No owner, source version, reviewer, approved date or replacement has been supplied.",
  states: [
    { title: "Draft", description: "Not public. Build the standalone body and resolve missing source fields." },
    { title: "Review", description: "Not public. Obtain editorial, domain and relevant high-risk review." },
    { title: "Published", description: "Current only after actual resource, registry and release approvals." },
    { title: "Updated", description: "Material changes need approved dates, version alignment and history." },
    { title: "Superseded", description: "Point to an approved replacement; none has been supplied here." },
    { title: "Archived", description: "Clearly noncurrent. Remove from the default current library." },
    { title: "Withdrawn", description: "Use an approved reason; remove invalid content or artifact actions." },
    { title: "Under review", description: "Fail closed on uncertain material claims until review resolves them." },
  ],
  ownedReviewNotice: {
    title: "Owned review, not an invented schedule",
    description: "Time-sensitive material needs an explicit source-owned review cadence. Dead sources trigger review rather than silent assurances; unavailable reviewers are not fabricated. Duplicate content is merged or canonicalized. No calendar, update history or source-owner commitment is asserted here.",
  },
  readingStandards: {
    eyebrow: "WEB, PRINT & DOCUMENTS",
    title: "Useful reading, with or without the interface.",
    cards: [
      { title: "Readable and navigable", description: "Logical headings, readable body text, source notes and disclaimers. Descriptive routes and actual file purpose/type labels. Future charts need text alternatives." },
      { title: "Not interaction-dependent", description: "Important information stays visible without hover or motion. Focus, selected-filter text and field-linked errors are shown as illustrative patterns on this page." },
      { title: "Print, no-JS and zoom", description: "Preserve the body and direct routes. Content and metadata should wrap at narrow widths and zoom without horizontal dependence. Documents need separate accessibility QA." },
    ],
  },
  releaseNotice: {
    title: "Required before publication — not claimed complete",
    description: "Editorial and domain approval, legal review where risk requires it, route and access approval, artifact health/security and separate web/document accessibility review remain release gates. This static candidate makes no conformance, privacy, SEO or runtime implementation claim.",
  },
};

export const FAQ_DATA = {
  eyebrow: "DIRECT ANSWERS",
  title: "Clear expectations. No implied evidence.",
  description: "Answers about the resource standard — with availability and approval qualifications kept alongside each answer.",
  items: [
    {
      question: "What kinds of telecom tax guides does ZoikoTax publish?",
      answer: "The resource architecture supports Guides, Reports, Briefs, Checklists, Frameworks and Implementation resources. No approved published inventory was supplied, so these types describe the intended architecture rather than resources currently available.",
    },
    {
      question: "Are reports source-backed and expert-reviewed?",
      answer: "Traceable sources, appropriate review and clear limitations are publication requirements. No approved reports, citation collection or reviewer metadata were supplied here; this is not a claim that unnamed reports have already been sourced or reviewed.",
    },
    {
      question: "Can I read before downloading?",
      answer: "The standard is web-first: a meaningful approved standalone body should be readable before any form or download. Actual resource and alternate-format availability must be confirmed from the approved registry; neither a resource body nor a downloadable artifact was supplied.",
    },
    {
      question: "How are guides and reports kept current?",
      answer: "Currentness depends on governed ownership, review, versions and visible material corrections. Time-sensitive content needs a source-owned cadence, and uncertain claims return to review. No review schedule, owner or approved update date was supplied.",
    },
    {
      question: "Do I need to complete a form for every resource?",
      answer: "No blanket form gate is proposed. Open reading is the default standard after approval; optional copies, gated research or controlled access require a justified, approved policy for a substantive resource. No actual access policy or collection endpoint was supplied.",
    },
    {
      question: "Are downloadable guides accessible?",
      answer: "Each actual downloadable file requires separate accessibility and artifact QA. Approval of a web page does not establish document accessibility. No files or completed QA were supplied, so no blanket accessibility conformance is claimed.",
    },
  ],
};

export const NEXT_JOURNEYS_DATA = {
  eyebrow: "YOUR NEXT STEP",
  title: "Continue with the question that matters.",
  description: "Learning → evaluation → implementation → trust and scope. Related resource recommendations require governed metadata; none were supplied, so these are routes, not a popular-resource list.",
  journeys: [
    {
      title: "Learn",
      description: "Start with terminology and editorial context.",
      routes: [
        { label: "Telecom Tax Insights", path: "/resources/insights/" },
        { label: "FAQ", path: "/resources-faq" },
        { label: "Glossary", path: "/glossary" },
      ],
    },
    {
      title: "Evaluate",
      description: "Follow regulatory context and actual capability scope.",
      routes: [
        { label: "Regulatory Change", path: "/resources/regulatory-change/" },
        { label: "Coverage", path: "/coverage/" },
      ],
    },
    {
      title: "Implement",
      description: "Find Integration Guides and API Reference via Developers. No child URLs are assumed.",
      routes: [{ label: "Developers", path: "/developers/" }],
    },
    {
      title: "Understand trust",
      description: "Continue with governance and evidence context.",
      routes: [{ label: "Trust", path: "/trust/" }],
    },
  ],
  demoNote: "After you have explored the useful context, discuss your architecture.",
  demoCta: "Get a demo",
};
