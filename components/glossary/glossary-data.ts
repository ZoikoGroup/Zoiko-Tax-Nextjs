export const HERO_DATA = {
  eyebrow: "RESOURCES · GLOSSARY",
  title: "Canonical telecom-tax terminology, defined consistently.",
  description:
    "Look up approved ZoikoTax and telecom-tax terms, acronyms and aliases with clear definitions, scope notes and links to the authoritative detail behind each concept.",
  actions: [
    { label: "Search the glossary", variant: "primary" as const },
    { label: "Browse A–Z", variant: "secondary" as const },
  ],
  exploreLink: "Explore FAQ →",
  footnote: "For tax, regulatory, product and technical teams. Start with the definition; follow the source for the detail.",
};

export const CANONICAL_NOTICE = {
  body: "Glossary entries explain approved public terminology. They do not replace statutory definitions, legal advice, contract language or jurisdiction-specific professional guidance.",
  title: "Approval candidate · approved term sources required",
  description:
    "The approved registry has not been supplied. No real terms or definitions are published here; labeled specimens show the intended structure. Public release requires approved sources, not generated definitions.",
};

export const LOOKUP_DATA = {
  eyebrow: "FIND A DEFINITION",
  title: "One place to look. One canonical meaning.",
  description: "Search by canonical term, acronym or approved alias, or browse the alphabetical index.",
  searchLabel: "Search the glossary",
  searchPlaceholder: "Canonical term, acronym or approved alias",
  focusPreview: "Focus preview",
  searchHelper: "Do not enter sensitive customer, tax or legal implementation information. Search and filter controls are a static design preview.",
  categories: ["All categories", "Industry", "Product", "Coverage", "Developer", "Trust", "Regulatory"],
  sortBy: { selected: "Alphabetical · selected", other: "Relevance · for search" },
  clearLabel: "Clear filters",
  taxonomyNote: "Product-area filtering is not shown: a governed product taxonomy has not been supplied.",
};

export const INDEX_DATA = {
  title: "Browse A–Z",
  subtitle: "Letters unavailable · approved registry required",
  letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  footnote: "All letters are disabled because no approved terms are available. The core index, definitions, scope and source notes are intended to remain readable in document order, without JavaScript or in print.",
};

export const REGISTRY_EMPTY_STATE = {
  eyebrow: "CANONICAL TERM REGISTRY",
  title: "Approved terms have not been supplied.",
  description:
    "This index will contain current, approved public records only. Definitions, aliases, scope notes and source metadata require an approved registry before they can appear here.",
  routes: ["Explore FAQ →", "Read Guides & Reports →"],
};

export const FEATURED_EMPTY_STATE = {
  eyebrow: "EDITORIAL SELECTION",
  title: "Featured terminology",
  heading: "Approved featured terms not supplied",
  description:
    "Once a registry is approved, editors may select useful current terms here. Selection is editorial—not a popularity ranking. In the meantime, follow FAQ or the authoritative destinations below.",
  cta: "Explore reference destinations →",
};

export const DEFINITION_STRUCTURE_DATA = {
  eyebrow: "READING AN ENTRY",
  title: "Definition first. Scope and source alongside.",
  description: "The following specimens explain the reading pattern. They are not glossary records and do not contain published terminology.",
  specimenLabel: "Entry anatomy · illustrative, not published terminology",
  compactEntry: {
    label: "COMPACT ENTRY · SPECIMEN",
    term: "Canonical label",
    definition: "Approved one-sentence definition",
    scopeLabel: "Scope note",
    scope: "Approved limits of this meaning",
    aliases: "Also known as: approved aliases only",
    cta: "Read definition and source →",
    metadata: ["Term type · source required", "Owner / source ID · not supplied", "Review date / state · not supplied"],
  },
  recordContract: {
    title: "What travels with each term",
    description: "A stable term_id keeps the canonical_label, short_definition and scope_note attached to one source record. Approved aliases resolve to that same definition.",
    termTypeLabel: "Term type · not a search category",
    termTypes: "Industry / Regulatory / Product / Technical / Trust / Coverage",
    note1: "The Developer filter is a browsing category; Technical is a term type. Their relationship requires governed classification, not an assumed one-to-one mapping.",
    note2: "Optional extended_definition adds depth. Source owner, source ID, reviewed_at and state establish currentness—none are supplied for a live record.",
  },
  expandedEntry: {
    label: "EXPANDED ENTRY · SPECIMEN",
    copyLink: "Copy link · preview",
    term: "Canonical label",
    definition: "Approved one-sentence definition",
    moreDetailLabel: "More detail · optional",
    moreDetail: "Approved extended definition. Longer content is organized into readable paragraphs or subheadings, with the full meaning visible rather than clipped or truncated.",
    fields: [
      { label: "Scope", value: "Approved scope note · where this meaning applies, and where it does not." },
      { label: "Also known as", value: "Approved aliases and acronym expansions · not supplied." },
      { label: "Not the same as · optional", value: "Source-supported distinction · include only with approved evidence." },
      { label: "Related canonical terms", value: "Approved related-record labels and stable anchors · not supplied." },
      { label: "Authoritative detail", value: "Approved source title, source ID and destination · required before linking." },
    ],
    currentness: {
      title: "Currentness · approved metadata required",
      rows: ["Source owner / source ID · not supplied", "reviewed_at / state · not supplied", "term_id / canonical anchor · stable identifier required, not supplied"],
    },
    footnote: "One canonical record and stable anchor. Aliases point here; they do not create separate definitions or thin duplicate term pages. Pronunciation is omitted because no approved source was supplied.",
  },
};

export const MEANING_COMPARISON_DATA = {
  eyebrow: "CONTEXT MATTERS",
  title: "The same label does not always mean the same thing.",
  description: "Read the term type and scope before applying a definition to your work.",
  cards: [
    {
      eyebrow: "INDUSTRY MEANING",
      title: "Follow the conventional source.",
      description: "Use the approved industry source to define the conventional meaning. A label in this page's architecture is not evidence of a universal standard.",
      requirement: "Required: approved industry source and scope.",
    },
    {
      eyebrow: "ZOIKOTAX-SPECIFIC MEANING",
      title: "Label product usage explicitly.",
      description: "A meaning specific to ZoikoTax must be identified as product terminology, supported by its approved product source and bounded by the relevant scope.",
      requirement: "Required: approved product definition and owner.",
    },
    {
      eyebrow: "INDUSTRY + PRODUCT USAGE",
      title: "Keep the two meanings distinct.",
      description: "Where both are relevant, retain the industry definition and add a separate, clearly labeled product-usage note. Do not silently substitute one for the other.",
      requirement: "Required: approved sources for both meanings.",
    },
  ],
  ambiguity: {
    title: "If a label is ambiguous, disambiguation requires a source.",
    description: "An approved scope qualifier or reviewed subentry should resolve the ambiguity. Marketing language and internal shorthand are not public glossary terms unless intentionally approved for publication.",
  },
};

export const JURISDICTION_DATA = {
  eyebrow: "REGULATORY & JURISDICTION-SENSITIVE TERMS",
  title: "A definition is not an interpretation of the law.",
  description: "Regulatory meaning must stay attached to an approved statutory source and the jurisdiction in which it applies.",
  boundary: {
    title: "Exact naming. Explicit limits. No inferred authority.",
    paragraphs: [
      "Use exact official naming and source-reviewed jurisdiction notes or subentries. Show a material effective date only when approved source content supports it.",
      "This reference is informational. It does not interpret an underlying law, rule, filing requirement or contract. No statute, regulator citation or external regulatory link has been supplied.",
    ],
  },
  specimen: {
    label: "JURISDICTION NOTE · SOURCE-REQUIRED SPECIMEN",
    fields: [
      { label: "Exact official name", value: "Approved official label · not supplied" },
      { label: "Statutory source", value: "Approved source / citation · not supplied" },
      { label: "Jurisdiction and scoped meaning", value: "Approved jurisdiction note or subentry · not supplied" },
      { label: "Material effective date · when relevant", value: "Source-supported date · not supplied" },
    ],
    footnote: "Source required before publication or external linking. No country, tax statute or legal effect is illustrated here.",
  },
};

export const ALIASES_DATA = {
  eyebrow: "NAMES, ALIASES & HISTORY",
  title: "Different ways to find one approved definition.",
  description: "Aliases are relationships to a canonical source—not a second definition or a license to invent terminology.",
  rules: [
    { title: "Acronyms and expanded forms", description: "Only approved forms resolve to the same canonical record. An expansion must come from the approved source; it is never inferred." },
    { title: "Competing synonyms and regional spelling", description: "Choose one approved preferred label. Alternative names and regional spellings need explicit approval before they become public aliases." },
    { title: "Misspellings and shorthand", description: "Misspellings may assist search only; they are not accepted labels. Internal shorthand stays private unless deliberately approved." },
    { title: "Legacy labels and deep links", description: "A reviewed legacy redirect preserves the canonical destination. Deprecation is visible, and the current preferred label remains primary." },
  ],
  matchSpecimen: {
    label: "ALIAS MATCH · ILLUSTRATIVE STATE",
    aliasLabel: "Matched approved alias",
    alias: "Approved alias label · not supplied",
    term: "Canonical label",
    definition: "Approved one-sentence definition",
    note: "Matched via approved alias · same source record and canonical anchor. No actual alias mapping has been supplied.",
    cta: "Open canonical entry · preview →",
  },
  historyTitle: "When a term is no longer current",
  deprecatedSpecimen: {
    label: "DEPRECATED · ILLUSTRATIVE STATE",
    term: "Historical canonical label",
    definition: "Historical definition · source required. This is history, not current terminology.",
    replacementLabel: "Preferred canonical replacement",
    replacement: "Required but not supplied · replacement link unavailable",
    footnote: "Replacement mapping, revision note and review metadata require approved sources. Do not guess a successor.",
  },
  historyRules: [
    { title: "Renamed", description: "Preserve the canonical redirect and govern the previous label as an approved alias." },
    { title: "Merged or split / superseded", description: "Require source-reviewed mappings to the correct current records. Never infer a replacement from similar wording." },
    { title: "Retired", description: "Remove from the default index. Preserve an appropriately labeled history view only when approved." },
    { title: "Review due / high-risk meaning", description: "Fail closed pending review rather than continue to present an unverified meaning as current." },
  ],
};

export const CURRENTNESS_DATA = {
  eyebrow: "CURRENTNESS & ACCOUNTABILITY",
  title: "A useful definition must also be a current one.",
  description: "Look for the source, responsible role, review metadata and text state—not a color alone.",
  lifecycleLabel: "LIFECYCLE STATES · ILLUSTRATIVE, NOT ACTUAL RECORDS",
  lifecycleStates: [
    { title: "Published", description: "An approved current record; visible in the default index." },
    { title: "Review due", description: "Requires review; high-risk content is withheld pending approval." },
    { title: "Under review", description: "Meaning or source is being checked; not presented as approved current content." },
    { title: "Deprecated", description: "Historical label; an approved preferred replacement is required." },
    { title: "Superseded", description: "Replaced meaning; show only source-reviewed successor mappings." },
    { title: "Retired", description: "No longer in the default index; history is clearly distinguished." },
  ],
  governance: [
    { title: "Source changes", description: "A changed source triggers downstream content review. Jurisdiction changes require scoped review; a removed source blocks or flags the entry until resolved." },
    { title: "Labels and corrections", description: "Label changes follow alias governance. Corrections carry a revision note. Merged, split or renamed records retain source-reviewed relationships." },
    { title: "Ownership and review", description: "Owner transfers preserve history. Higher-risk terms need a shorter approved review cadence; no owner, date or actual review schedule has been supplied." },
  ],
  gate: {
    eyebrow: "BEFORE PUBLIC RELEASE",
    title: "Sources and approvals come first.",
    paragraphs: [
      "Required responsibilities include a source owner and editorial approval, with legal/regulatory, privacy and localization review where needed. Source-route checks and accessibility review are release gates—not claims of completed review.",
      "Approved owners, source IDs and review metadata have not been supplied. There is no generative fallback for a missing definition.",
    ],
  },
};

export const SEARCH_STATES_DATA = {
  eyebrow: "WHEN A LOOKUP NEEDS MORE CONTEXT",
  title: "No match is better than an invented answer.",
  description: "These illustrative states show how the glossary should communicate a match, a missing term or content awaiting review.",
  focusMatch: {
    label: "FOCUS & MATCH · ILLUSTRATIVE STATE",
    selectedText: "Approved alias label",
    term: "Canonical label",
    definition: "Approved one-sentence definition",
    note: "Alias match → one canonical record → stable entry anchor. This selected-text and focused-match pattern does not represent an actual search result.",
    reviewDue: {
      title: "Review due · illustrative high-risk state",
      description: "Definition withheld pending source review. Current approved meaning is not available.",
    },
  },
  zeroResults: {
    label: "ZERO RESULTS · ILLUSTRATIVE STATE",
    title: "No approved term matches this search.",
    description: "Check the spelling or clear filters. When available, related approved categories can help you browse—there are none to suggest until the registry is supplied.",
    routes: ["Clear filters →", "Explore FAQ →", "Read Guides & Reports →"],
    requestTitle: "Need a term added?",
    requestDescription: "A new term requires a source and editorial approval. No submission service is provided in this preview; a request is not a generated definition or professional advice.",
  },
};

export const LOCALIZATION_DATA = {
  eyebrow: "LANGUAGE & LOCAL CONTEXT",
  title: "Translate the source—not an assumed meaning.",
  description: "Canonical English remains the source unless a locale has formal approval. No reviewed locale terminology or translations have been supplied.",
  guidance: [
    "Locale-specific terms need source review. Acronyms are not automatically translated; regulatory terminology also requires jurisdiction and localization approval.",
    "An approved fallback must be explicit. Do not machine-invent a legal term. A locale-aware index and reading order should follow the approved language, with logical right-to-left layout when needed.",
  ],
  specimen: {
    label: "LOCALIZED ENTRY · SOURCE-REQUIRED SPECIMEN",
    fields: [
      { label: "Approved locale / reviewed local label", value: "Not supplied · no language selector is available" },
      { label: "Canonical source / approved fallback", value: "Source relationship and fallback require approval" },
    ],
  },
};

export const READER_HELP_DATA = {
  eyebrow: "READER HELP",
  title: "Keep the meaning, scope and source together.",
  items: [
    {
      question: "Can I use a glossary definition as legal or tax advice?",
      answer: "No. Read the scope and approved authoritative source. The glossary is an informational reference, not a substitute for statutory wording, contract language or qualified professional guidance.",
    },
    {
      question: "What should remain readable when I print or browse without JavaScript?",
      answer: "The alphabetical index and complete definition, scope, source and currentness notes belong in the document flow. Long definitions remain structured and untruncated. A stable canonical anchor identifies the same entry wherever it is referenced.",
    },
    {
      question: "How should search respect privacy and accessible reading?",
      answer: "Use general terminology, not sensitive customer or implementation details. Any aggregate search analysis requires privacy approval. Visible focus, labeled states, keyboard-minded alphabet links, readable contrast and wrapping layouts are design intent; release still requires accessibility review.",
    },
  ],
};

export const REFERENCE_DESTINATIONS_DATA = {
  eyebrow: "FOLLOW THE AUTHORITATIVE DETAIL",
  title: "Continue from the concept to its context.",
  description: "These destinations provide next steps. A glossary entry should link only where its approved source supports the relationship.",
  cards: [
    { tag: "Concept → product context", title: "Platform", description: "Follow approved product detail without replacing a source-defined meaning.", path: "/platform/", cta: "Explore Platform →" },
    { tag: "Scope → coverage context", title: "Coverage", description: "Check the relevant scope; do not infer availability from a glossary label.", path: "/coverage/", cta: "Explore Coverage →" },
    { tag: "Technical meaning → documentation", title: "Developers", description: "Move from a term to the governed technical detail behind its usage.", path: "/developers/", cta: "Explore Developers →" },
    { tag: "Assurance → trust context", title: "Trust", description: "Follow source-bound assurance information rather than implied certification.", path: "/trust/", cta: "Explore Trust →" },
    { tag: "Editorial context → direct answers", title: "FAQ", description: "Find explanatory context for the questions behind a terminology lookup.", path: "/resources-faq", cta: "Explore FAQ →" },
    { tag: "Editorial context → deeper reading", title: "Guides & Reports", description: "Explore longer-form resources alongside the canonical reference.", path: "/resources/guides-reports/", cta: "Explore Guides & Reports →" },
  ],
  footnote: "External regulatory sources require an approved citation and destination; none is supplied. Deprecated entries link to a canonical replacement only when a reviewed mapping exists.",
};

export const NEXT_STEP_DATA = {
  title: "Looking for an answer, not just a definition?",
  description: "Explore FAQ and Guides & Reports for context. Public terminology remains source-bound; access to this reference is not a commercial gate.",
  actions: [
    { label: "Explore FAQ", href: "/resources-faq", variant: "primary" as const },
    { label: "Guides & Reports", href: "/resources/guides-reports/", variant: "secondary" as const },
  ],
};
