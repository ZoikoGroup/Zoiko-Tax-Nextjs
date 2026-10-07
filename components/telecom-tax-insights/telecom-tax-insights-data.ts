export const HERO_DATA = {
  eyebrow: "RESOURCES · TELECOM TAX INSIGHTS",
  title: "Telecom tax insight, grounded in sources you can inspect.",
  description:
    "Explore expert-reviewed, source-backed analysis of telecom tax, regulatory and fiscal-control topics, with clear dates, sources and operational context.",
  standard: "Publication standard: Expert-reviewed, source-backed content. Source validation and completed expert review are gates to publication, not badges of authority.",
  actions: [
    { label: "Explore latest insights", variant: "primary" as const },
    { label: "Browse by topic", variant: "secondary" as const },
  ],
  route: { label: "View Regulatory Change →", path: "/resources/regulatory-change/" },
};

export const AUTHORITY_DATA = {
  eyebrow: "Editorial authority",
  title: "Sources control. Summaries explain.",
  body: "Official sources and approved legal/regulatory materials control over editorial summaries. Editorial analysis must not be presented as legal advice, a guarantee of regulatory outcome, or proof of ZoikoTax product availability in the discussed jurisdiction.",
  note: "Approval candidate · No approved article registry, primary sources, reviewer identities or review dates were supplied. The patterns below are illustrative; no article is represented as published or approved.",
};

export const CURRENT_INSIGHTS_DATA = {
  eyebrow: "THE INSIGHT LIBRARY",
  title: "Current insight starts with a verified source.",
  description: "A featured position is an editorial choice, not paid placement. Current and latest items must come from the approved registry.",
  featured: {
    eyebrow: "FEATURED / CURRENT",
    title: "No approved current insights supplied.",
    description: "This space is reserved for source-backed content with approved dates, scope, reviewer identity and currentness. Illustrative patterns are not surfaced as current reading.",
    route: { label: "Explore Regulatory Change →", path: "/resources/regulatory-change/" },
  },
  latest: {
    eyebrow: "LATEST INSIGHTS",
    title: "Publication dates establish the order.",
    description: "No approved dated items are available in the supplied registry. “Latest” will use actual approved publication dates; a material update has its own Updated date.",
    note: "No inferred dates. No synthetic article list.",
    route: { label: "Read the source and review pattern →", path: "#reading-pattern" },
  },
  alternatives: [
    { title: "Regulatory Change", description: "A separate destination for approved, dated regulatory updates. Check the scope and sources of each update.", route: { label: "Explore Regulatory Change →", path: "/resources/regulatory-change/" } },
    { title: "Guides & Reports", description: "Continue with the guides and reports destination. No downloadable artifact is represented on this page.", route: { label: "Explore Guides & Reports →", path: "/resources/guides-reports/" } },
    { title: "FAQ", description: "Start with direct answers and their qualifications. General explanations do not replace official authority.", route: { label: "Explore FAQ →", path: "/resources/faq/" } },
  ],
};

export const DISCOVERY_DATA = {
  eyebrow: "BROWSE BY TOPIC",
  title: "Useful context. Governed labels.",
  description: "Topics describe editorial subject matter, not product availability. Hubs and filters need a maintained, approved registry before use.",
  taxonomy: {
    label: "ILLUSTRATIVE PROPOSED GROUPING · NOT LIVE TOPIC HUBS",
    topics: ["Telecom tax", "Regulatory", "Billing", "E-invoicing", "Assurance"],
    fields: [
      { label: "Audience · proposed pattern", value: "Tax / Finance / Billing & BSS / Product & Commercial / Technology" },
      { label: "Service & jurisdiction", value: "Governed source required. No unapproved service choices or country list is displayed." },
      { label: "Content type · approval required", value: "Insight / Explainer / Update / Analysis — use only when approved." },
    ],
  },
  pattern: {
    title: "Find an insight without losing its context.",
    badge: "Static UI specimen",
    description: "Search is intended to match approved title, summary, tags and body. Filters use governed values only. These are editable visual patterns, not an operational search or filter service.",
    searchLabel: "Search insights · focused pattern",
    searchValue: "billing",
    searchHelper: "Use editorial keywords only. Never enter sensitive tax, customer or account data.",
    dateBasis: { label: "Date basis", value: "Published · distinct from Updated" },
    sort: { label: "Sort · when supported", value: "Newest" },
    filters: [
      { label: "Category", value: "Approved registry required" },
      { label: "Audience", value: "Approved registry required" },
      { label: "Service", value: "Approved registry required" },
      { label: "Jurisdiction", value: "Approved registry required" },
    ],
    filteredSpecimen: "Filtered specimen · category: source-approved value",
    clearLabel: "Clear category",
    structuralNote: "Structural value only · not an active filter",
    sortNote: "Sort patterns: Newest / Recently updated / Relevance, only when supported. “Published” orders publication; “Updated” identifies material revision.",
    noMatches: {
      title: "No matching insights · illustrative state",
      description: "Query: “billing” · Date basis: Published · Sort: Newest. No approved filters selected. Retain this context; do not generate an answer or unrelated article.",
      actions: ["Clear search and filters", "Broaden your query"],
    },
  },
  listingAnatomy: {
    label: "ILLUSTRATIVE LISTING ANATOMY",
    title: "A card should earn the next click.",
    description: "Show an approved, specific title and a concise source-grounded summary. Every visible metadata cue must reflect a real approved record.",
    footnote: "Published is required for time-sensitive content; Updated appears for a material change. Topic and context tags must be approved. Review completion and source cues require actual validated records.",
  },
  cardSpecimen: {
    badge: "Illustrative · not a published resource",
    matchPattern: "Match pattern · illustrative query “title” · not an actual result",
    title: "Source-approved title",
    description: "Approved dated summary — a concise, source-grounded account of scope and operational context. No article summary has been supplied.",
    fields: [
      { label: "Published / Updated", value: "Approved dates not supplied" },
      { label: "Reviewer", value: "Required SME approval · not supplied" },
      { label: "Currentness", value: "Governed state not supplied" },
    ],
    footnote1: "Approved topic/context tags: not supplied. Source cue: show only for an actual valid source block. No “Expert-reviewed” or “Sources available” badge is asserted.",
    footnote2: "Record structure: stable article ID / article canonical / governed lifecycle state. Actual article ID and canonical not supplied; this specimen has no article route.",
  },
};

export const READING_ANATOMY_DATA = {
  eyebrow: "THE READING EXPERIENCE",
  title: "Read the analysis. Inspect the foundation.",
  description: "An inline article-detail specimen shows the intended reading structure. The body below explains editorial discipline; it is not telecom tax research or advice.",
  contentsLabel: "IN THIS SPECIMEN",
  contents: ["Reading · Executive summary", "Key takeaways", "Structured analysis", "Operational questions", "Authoritative sources", "Method & review", "Related resources"],
  noJsNote: "Reading, source notes and navigation should remain available without JavaScript. This is a static design intent, not an implemented accessibility or no-JS claim.",
  backRoute: { label: "Back to latest insights →", path: "#latest-insights" },
  articleIntro: {
    badge: "Illustrative article anatomy",
    breadcrumb: "Resources / Telecom Tax Insights / Source-approved title",
    contextFields: "Topic / audience / jurisdiction context · approved fields not supplied",
    title: "Source-approved title",
    summary: "Approved dated summary — the article's direct answer must retain jurisdiction, status, source and scope beside the answer. No approved dated summary or tax conclusion is supplied.",
  },
  dates: [
    { label: "Published", value: "Date not supplied" },
    { label: "Updated", value: "Material revision date not supplied" },
    { label: "Review date", value: "Review date not supplied" },
  ],
  reviewFields: [
    { label: "Reviewer", value: "Required SME approval · not supplied" },
    { label: "Currentness", value: "Not established · not presented as current" },
  ],
  executiveSummary: {
    title: "Executive summary · source-dependent field",
    description: "A publishable direct answer ties every substantive conclusion to its approved source and stated scope. A title or topic label is not enough to establish an obligation. When that foundation is absent, preserve the missing-source state rather than present a general answer as current knowledge.",
  },
  keyTakeaways: {
    title: "Key takeaways · editorial discipline",
    items: [
      "Keep dates, jurisdiction and limitations next to the answer.",
      "Separate official facts from interpretation and ZoikoTax analysis.",
      "Treat expert review and source validation as publication gates.",
    ],
  },
  structuredAnalysis: {
    title: "Structured analysis · scope before conclusions",
    description: "Use clear sections to explain what a source establishes and what it does not. Attribute secondary interpretation to its real author or issuer. Label ZoikoTax editorial analysis explicitly instead of presenting it as regulator language. A statement about a jurisdiction cannot be generalized to another jurisdiction or turned into a product capability claim.",
  },
  currentness: {
    title: "Currentness belongs in the answer",
    description: "Published and materially Updated dates serve different purposes. A stable article URL does not make an answer evergreen. Source changes, corrections or supersession can invalidate a previously useful summary; the visible status and revision note must travel with the answer and its source context.",
  },
  operationalQuestions: {
    title: "Operational questions, not instructions",
    description: "Use these generic investigation questions to structure review. They do not establish a tax obligation or an instruction to comply.",
    items: [
      "What does the source establish?",
      "Which jurisdiction, service and transaction scope does it address?",
      "Which publication, effective or review date is relevant?",
      "Which systems and teams should review the source-specific context?",
    ],
  },
  sourcesPanel: {
    label: "SOURCES · INSPECTABLE PROVENANCE",
    title: "No authoritative source supplied.",
    description: "This is a source-panel anatomy, not a citation. No issuer, official document, legal reference, date or descriptive source link has been invented.",
    fields: [
      { label: "Issuer / document / official link", value: "Approved source required" },
      { label: "Publication / effective / accessed dates", value: "Actual source dates required" },
    ],
    scope: { label: "Scope / locator / limitations", value: "Jurisdiction, relevant provision or page, and applicability must be retained in the approved source block." },
    footnote: "Source note placeholder [S] · not a citation. A real note needs a descriptive source link and a valid locator. If a primary source is unavailable, use a real approved secondary source with an explicit limitation — never a fabricated reference.",
  },
  methodReview: {
    title: "Method & review note",
    description: "Publication needs a genuine approved author identity, a verified SME review and an approved review date. High-risk legal interpretation and any product or coverage statements require the relevant approvals. A conflict or material AI-assistance disclosure uses policy-required wording only. No completed review or disclosure is claimed here.",
  },
  relatedResources: {
    title: "Related resources",
    description: "No approved article relationship metadata is supplied. Do not synthesize a related-insights list; continue through intent-based resource destinations.",
    routes: [
      { label: "Regulatory Change →", path: "/resources/regulatory-change/" },
      { label: "Glossary →", path: "/resources/glossary/" },
    ],
    verifyRoute: { label: "Verify production availability separately →", path: "/coverage/" },
  },
};

export const SOURCE_MODEL_DATA = {
  eyebrow: "SOURCE MODEL",
  title: "Not every statement has the same authority.",
  description: "A reader should be able to tell what is established, who is interpreting it and where the limits are. Source gaps stay visible.",
  legend: ["STATEMENT TYPE", "WHAT THE READER NEEDS", "HONEST SOURCE STATE"],
  rows: [
    { type: "Primary fact", need: "Cite the official authority where available. Keep the provision, issuer, date and scope inspectable.", state: "Official source not supplied" },
    { type: "Secondary interpretation", need: "Attribute a real approved interpretation. Do not recast it as regulator fact. State the limitation if no primary source is available.", state: "Approved secondary source not supplied" },
    { type: "ZoikoTax editorial analysis", need: "Label the analysis explicitly. Separate the source's statement from editorial reasoning and its limitations.", state: "Source-dependent analysis required" },
    { type: "Prediction / outlook", need: "Policy approval required. Label uncertainty and distinguish an outlook from an established fact.", state: "No prediction supplied" },
    { type: "Statistic", need: "Require the source, date and population. No unsourced numbers, outcomes or implied benchmarks.", state: "No statistic supplied" },
    { type: "Quote", need: "Use approved rights and attribution. Preserve context rather than imply endorsement.", state: "No approved quote supplied" },
    { type: "Product statement", need: "Use an approved product source and verified coverage context. An article topic cannot establish capability.", state: "No product statement inferred" },
  ],
  footnote: "Inspectability means real provenance, not a decorative source icon. Descriptive links, dates, locators and limitations belong with the claim; imagery is never evidence.",
};

export const EXPERT_REVIEW_DATA = {
  eyebrow: "EXPERT REVIEW",
  title: "Review is a gate, not a decoration.",
  description: "Genuine identity, verified expertise and source-specific approval must precede publication. No placeholder person can substitute for a reviewer.",
  identity: {
    title: "Who stands behind an insight?",
    fields: [
      { label: "Author / role", value: "Genuine approved name and role required · not supplied" },
      { label: "SME reviewer / credentials", value: "Real subject-matter review and verified credentials required · not supplied" },
      { label: "Approved reviewed date", value: "Review date not supplied. No completed-review badge is shown." },
    ],
    footnote: "Identity must be truthful. No portraits, invented biographies, seals or implied credentials fill a missing review record.",
  },
  dependencies: {
    label: "PUBLICATION DEPENDENCIES",
    title: "Approval follows the claim.",
    paragraphs: [
      "Editorial and SME approval are required. Legal review is needed for high-risk content; Product / Coverage approval is needed wherever availability or capability is claimed.",
      "Conflict disclosures and material AI-assistance disclosures must use the wording required by the approved policy. No disclosure is invented in place of that policy.",
    ],
    footnote: "Corrections need a governed mechanism and approved owner. No live correction endpoint, review cadence or completed release gate is supplied. Source routes and accessibility also require approval before publication.",
  },
};

export const CURRENTNESS_DATA = {
  eyebrow: "CURRENTNESS & CORRECTIONS",
  title: "A stable URL is not an evergreen answer.",
  description: "Review is source- and event-driven. No schedule is supplied. Corrections and source changes must change the visible state, not silently refresh a stale answer.",
  lifecycleLabel: "ILLUSTRATIVE LIFECYCLE · NO STATE ASSERTED FOR A REAL ARTICLE",
  states: [
    { badge: "CURRENT", description: "Approved and not known to be superseded. A current label requires a governed record, not an assumption.", tone: "white" as const },
    { badge: "UPDATED", description: "A material revision needs an approved Updated date and a clear revision note. Keep Published distinct.", tone: "white" as const },
    { badge: "SUPERSEDED", description: "Historical content carries a prominent successor link. An approved successor is required; none is supplied.", tone: "lavender" as const },
    { badge: "ARCHIVED", description: "Retain history with explicit status. Exclude archived content from the current default view.", tone: "white" as const },
    { badge: "UNDER REVIEW", description: "Do not represent it as current unless an approved interim state permits it. Preserve provenance.", tone: "white" as const },
    { badge: "WITHDRAWN", description: "Remove from ordinary discovery. Preserve the governed record and withdrawal context as required.", tone: "white" as const },
  ],
  failSafeNote: "When correction or currentness sources are unavailable, flag review and retain provenance. Do not resurface a stale answer as current, infer a replacement, or invent the date of the next review.",
  editorialBoundary: {
    eyebrow: "EDITORIAL BOUNDARY",
    title: "Context, not personalized advice.",
    paragraphs: [
      "Editorial analysis does not establish a guaranteed obligation or outcome. Exact dates, deadlines and obligations require approved authority and scope. Retain regulatory attribution, expert review and uncertainty beside the conclusion.",
    ],
    footnote: "Do not generalize across countries. Qualified professional advice and official authority control; no professional-advice booking route has been supplied here.",
    route: { label: "Check production availability separately →", path: "/coverage/" },
  },
  readerFirst: {
    eyebrow: "READER-FIRST BY DESIGN",
    title: "Learn without submitting sensitive facts.",
    paragraphs: [
      "No confidential customer tax facts, account data or raw jurisdiction facts belong in search or comments. This design includes no document upload, comments or profiling flow.",
    ],
    footnote: "Editorial success starts with source inspection, engaged reading and related learning. Contextual conversion is secondary. Public reading is never gated by a demo request.",
    route: { label: "Explore evidence, security and privacy →", path: "/trust/" },
  },
  edgeStates: {
    title: "When the evidence is incomplete",
    badge: "Illustrative states",
    items: [
      { title: "No published insights", description: "Keep the registry honest; offer resource routes, not synthetic articles.", tag: "Registry empty" },
      { title: "No matches", description: "Preserve query and filters; offer clear/reset and broaden actions.", tag: "Query retained" },
      { title: "Missing / unavailable source", description: "Flag for review, retain provenance and withhold current conclusions.", tag: "Source review required" },
      { title: "Under review / superseded", description: "Not current. A replacement needs an approved successor source.", tag: "Successor not supplied" },
      { title: "Author / reviewer absent", description: "State the absence. Do not replace identities or imply completed approval.", tag: "Identity not supplied" },
      { title: "No-JS reading", description: "Keep article, source notes and navigation in a readable flow.", tag: "Static design intent" },
    ],
    footnote: "Focus, filtered, no-match and reading patterns are identified in text, not color alone. Source notes and essential qualifications remain visible; no information depends on hover, motion or a chart.",
  },
};

export const FAQ_DATA = {
  eyebrow: "QUESTIONS & CONTEXT",
  title: "Direct answers. Essential qualifications.",
  description: "Dates, scope and sources stay with the answer. Missing source material never becomes a general claim of current knowledge.",
  items: [
    {
      question: "What are the latest telecom tax changes?",
      answer: "The latest changes require approved, dated updates with their jurisdiction, status and authoritative sources. None were supplied for this page, so no change is represented as current. Use the Regulatory Change destination and inspect the approved dates and source context of any update.",
      route: { label: "Explore Regulatory Change →", path: "/resources/regulatory-change/" },
    },
    {
      question: "How do telecom taxes affect billing and finance operations?",
      answer: "Effects depend on the source, jurisdiction, service and transaction scope; there is no blanket legal or product-capability conclusion here. Start by asking what the source establishes, which scope and date apply, and which systems and teams should review the context. No source-specific operational obligation has been supplied.",
    },
    {
      question: "How can I verify the source behind a ZoikoTax insight?",
      answer: "Inspect the approved source panel for issuer, document, descriptive official link, publication or effective date, relevant provision and scope. Check limitations and the article's review/currentness context alongside the claim. The source panel shown here is illustrative: no approved legal source or citation was supplied.",
    },
    {
      question: "Are ZoikoTax insights legal advice?",
      answer: "No. Insights are editorial analysis, not personalized legal, tax, accounting or regulatory advice, and they do not guarantee an outcome. Official authority and qualified professional advice for your specific situation control.",
    },
    {
      question: "Does an article about a country mean ZoikoTax supports that country?",
      answer: "No. A jurisdiction tag describes the editorial subject; it is not a claim of support, availability or coverage. Production availability must be verified separately through Coverage and the relevant approved product information.",
      route: { label: "Explore Coverage →", path: "/coverage/" },
    },
    {
      question: "How often are insights reviewed or updated?",
      answer: "Review and updates follow the governed source-change and currentness process. A material revision needs an approved Updated date and revision note; superseded or archived content must not appear as current. No review cadence or schedule was supplied, so none is promised.",
    },
  ],
};

export const CONTINUE_LEARNING_DATA = {
  eyebrow: "RELATED LEARNING",
  title: "Follow the question, not a sales funnel.",
  description: "No approved related-insights metadata was supplied. These intent-based destinations offer a next step without inventing an article relationship.",
  destinations: [
    { title: "Regulatory Change", description: "Look for approved dated updates and their source-specific scope.", route: { label: "Explore Regulatory Change →", path: "/resources/regulatory-change/" } },
    { title: "Guides & Reports", description: "Continue through the guides and reports destination; no download is asserted here.", route: { label: "Explore Guides & Reports →", path: "/resources/guides-reports/" } },
    { title: "FAQ", description: "Review direct answers with the essential source and scope qualifications.", route: { label: "Explore FAQ →", path: "/resources/faq/" } },
    { title: "Glossary", description: "Use the glossary destination for terminology; a definition is not an obligation.", route: { label: "Explore Glossary →", path: "/resources/glossary/" } },
  ],
};

export const NEXT_ROUTES_DATA = {
  eyebrow: "PUT READING IN CONTEXT",
  title: "Keep editorial subjects separate from product evidence.",
  description: "An insight is not proof of product availability. Verify production context independently; reading and sources remain public.",
  evidenceRoutes: [
    { label: "Coverage · verify production availability →", path: "/coverage/" },
    { label: "Trust · evidence, security and privacy →", path: "/trust/" },
  ],
  productRoutes: [
    { label: "Platform · general product context →", path: "/platform/" },
    { label: "Solutions · general use-case context →", path: "/solutions/" },
  ],
  discussion: {
    note: "After useful reading, discuss product context. No article-to-capability mapping is implied.",
    cta: "Book a demo",
    footnote: "/demo/ · optional next step",
  },
};
