export const HERO_DATA = {
  eyebrow: "RESOURCES · REGULATORY CHANGE",
  title: "Track regulatory change with dates, sources and context attached.",
  description:
    "Follow source-backed telecom tax and regulatory developments with clear jurisdiction, status, publication/effective dates and expert-reviewed context. Not legal advice.",
  actions: [
    { label: "Browse regulatory changes", variant: "primary" as const },
    { label: "Telecom Tax Insights", variant: "secondary" as const },
  ],
  contextualRoute: "Explore Coverage →",
  footnote: "Expert review is a publication requirement, not a claim that reviewed updates are available here.",
  caption: ["Source → status → chronology", "Conceptual motif, not a regulatory document"],
};

export const AUTHORITY_NOTICE = {
  eyebrow: "Current, dated and source-backed; not legal advice.",
  badge: "Approval candidate · source required",
  body: "Regulatory Change content summarizes and contextualizes source material. It is not legal advice and must not be treated as a substitute for the authoritative regulation, order, notice, statute or professional advice applicable to a reader's circumstances.",
  footnote: "No approved regulatory items, sources, jurisdictions or reviewer assignments were supplied. The library below is intentionally empty; the labeled patterns explain how approved content would be read.",
};

export const CURRENT_CHANGES_DATA = {
  eyebrow: "FEATURED & CURRENT CHANGES",
  title: "Evidence before an update.",
  description: "A current item belongs here only when its source, scope, dates, status and context have been approved.",
  emptyState: {
    badge: "Source-required library state",
    title: "No approved regulatory updates available.",
    description: "This page does not report current changes or imply coverage of any jurisdiction. Until approved items are supplied, explore the supporting resources without treating them as regulatory authority.",
    actions: ["Read Telecom Tax Insights", "Explore Coverage"],
  },
};

export const REGISTRY_DATA = {
  eyebrow: "REGULATORY CHANGE REGISTRY",
  title: "Find the scope. Keep the source.",
  description: "Default library: approved data absent. Discovery controls below are an illustrative design pattern, not a working search or a claim of available results.",
  discovery: {
    badge: "Illustrative discovery · no live data",
    clearLabel: "Clear / reset filters",
    searchPlaceholder: "Search titles, authority, jurisdiction, topics and approved summaries",
    filterGroups: [
      [
        { label: "Jurisdiction level", value: "Country / State / Local / Supranational" },
        { label: "Exact jurisdiction", value: "Registry approval required" },
        { label: "Lifecycle status", value: "Source-established status" },
        { label: "Approved topic", value: "Taxonomy not supplied" },
      ],
      [
        { label: "Telecom service", value: "Taxonomy not supplied" },
        { label: "Normalized authority", value: "Exact issuer · source required" },
        { label: "Date basis", value: "Published (default)" },
        { label: "Sort pattern", value: "Newest published" },
      ],
    ],
    footnote: "Effective-date filtering is available only when the approved source establishes it. Other sort patterns: Upcoming effective and Recently updated. No countries, services, authorities or result counts are inferred.",
    emptyResults: {
      label: "ILLUSTRATIVE EMPTY RESULTS",
      title: "No source-approved matches to display.",
      description: "Preserve the selected filters; offer reset rather than fabricated related changes. This specimen has no submitted query or selected record.",
      cta: "Reset filters",
      focusNote: "Visible focus pattern · static specimen, not an active control",
    },
  },
  cardGuide: {
    label: "ILLUSTRATIVE CARD ANATOMY",
    title: "An update is more than a headline.",
    description: "The source, jurisdiction and lifecycle state travel with every summary. Publication is not an effective date; a proposal is never labeled a new law.",
    footnote: "A detail link leads to the source-backed reading page, not a sales form. Record identity uses stable content, source and jurisdiction ID fields; no records or identifiers have been invented here.",
  },
  cardSpecimen: {
    badges: ["Illustrative · not a published item", "Status — source required"],
    title: "Source-approved change title",
    description: "Exact jurisdiction — source required. A concise, scoped summary belongs here only after the material facts and context have been approved.",
    fields: [
      { label: "Issuing authority", value: "Exact issuer — primary source required" },
      { label: "Source", value: "Authoritative document — not supplied" },
      { label: "Published", value: "Date — not assigned" },
      { label: "Effective", value: "Effective date — not established" },
      { label: "Context review", value: "SME role / date — approval required" },
    ],
    detailLink: "Read source, timeline and context ↓ · illustrative detail below",
  },
};

export const READING_ANATOMY_DATA = {
  eyebrow: "HOW TO READ AN UPDATE",
  title: "A source-led reading experience.",
  description: "Illustrative detail anatomy only. No legal article, regulatory conclusion or source document has been supplied.",
  contentsLabel: "IN THIS READING PATTERN",
  contents: ["What changed", "Authoritative source", "Timeline & dates", "Who may be affected", "Editorial context", "Open questions", "Operational questions", "Review & currentness"],
  readingBoundary: {
    label: "READING WITHOUT SCRIPTS",
    description: "The intended reading order keeps the summary, dates, ordered timeline and approved direct sources in the page. Search and filters are not prerequisites for reading.",
  },
  staticPatternNote: "Static design pattern: these reading links and source slots are not live controls. No authority URLs have been invented.",
  detailHeader: {
    badge: "Illustrative anatomy · not published",
    title: "Source-approved change title",
    description: "Exact jurisdiction — source required. Issuing authority — primary source required. Any direct summary must keep its source, scope, date and status qualification attached.",
    statusBadge: "Status — not established",
    dates: [
      { label: "Published", value: "Not assigned" },
      { label: "Updated", value: "No update recorded" },
      { label: "Effective", value: "Not established" },
    ],
  },
  whatChanged: {
    label: "SOURCE FACT · CITATION REQUIRED",
    title: "What changed",
    description: "State only what the approved source establishes. Attach an exact citation to each material date, obligation, rate, scope, filing requirement, exemption or authority action. No change can be summarized here before that evidence exists.",
  },
  primarySource: {
    label: "AUTHORITATIVE SOURCE · NOT SUPPLIED",
    title: "Primary document comes first.",
    fields: [
      { label: "Document / reference ID", value: "Exact approved identifier required" },
      { label: "Issuer & jurisdiction", value: "Exact source scope required" },
    ],
    linkLabel: "Read the authoritative source — approved direct link required",
    footnote: "Source unavailable: publication remains pending. This is a descriptive link pattern, not a reference to an actual document.",
  },
  timeline: {
    label: "ORDERED TIMELINE · ILLUSTRATIVE ONLY",
    title: "Read events with their evidence attached.",
    events: [
      { title: "Authority event — date and citation required", description: "Announced, enacted or adopted: exact event not supplied." },
      { title: "Effective event — not established", description: "Source required; no date or legal effect is inferred." },
      { title: "Editorial event — not assigned", description: "Published and Updated remain separate from authority events." },
    ],
    footnote: "List order is symbolic, not a claim about event sequence. An approved article orders events by the chronology its sources establish.",
  },
  affectedScope: {
    label: "SOURCE SCOPE · NO INFERRED APPLICABILITY",
    title: "Who or what may be affected",
    description: "Identify the exact jurisdiction, entities and telecom services named in the approved source. Preserve exceptions and limits. An editorial relevance tag does not establish that a reader or customer is affected.",
  },
  editorialContext: {
    label: "EDITORIAL INTERPRETATION · SEPARATE FROM FACT",
    title: "Context, not a new legal conclusion",
    description: "Explain how approved source facts connect to telecom tax research. Attribute analysis and distinguish it from the source's words. A legal conclusion is included only when the exact approved source and required review support it; do not infer one.",
  },
  openQuestion: {
    label: "OPEN QUESTION · UNRESOLVED",
    title: "What remains unclear?",
    description: "Record what the approved source does not resolve. A pending clarification stays pending; uncertainty must not become an invented deadline, scope or obligation.",
  },
  implication: {
    label: "POTENTIAL IMPLICATION · CONDITIONAL",
    title: "What may need investigation?",
    description: "A source-backed change may affect a scoped workflow. This is a question for investigation, not an instruction that a company must act or a claim of non-compliance.",
  },
  checklist: {
    label: "RECOMMENDED INVESTIGATION · QUESTIONS, NOT INSTRUCTIONS",
    items: [
      "Is the exact jurisdiction and issuing authority verified?",
      "Is the source proposed, final, effective or historical?",
      "Which date does the authoritative source actually establish?",
      "Which entities and telecom services are explicitly in scope?",
      "What remains unclear in the approved source?",
    ],
  },
  productRelevance: {
    label: "PRODUCT RELEVANCE ≠ PRODUCTION COVERAGE",
    description: "Any product relevance must be conditional and separately substantiated. Check Coverage independently; editorial attention to a jurisdiction does not mean ZoikoTax supports it.",
    cta: "Coverage · /coverage/ →",
    footnote: "Secondary context follows the primary source and is labeled as explanatory, never a replacement for authority.",
  },
  reviewMetadata: [
    { label: "Context reviewer", value: "SME role / name — approval required" },
    { label: "Review date / source checked", value: "Not supplied / not recorded" },
    { label: "Reader boundary", value: "Not legal advice · exact source scope required" },
  ],
};

export const LIFECYCLE_DATA = {
  eyebrow: "DATES & STATUS",
  title: "Recency is not legal effect.",
  description: "Lifecycle vocabulary below is explanatory. No status has been assigned to a regulatory item on this page.",
  tableHeadings: ["SOURCE-ESTABLISHED STATUS", "HOW TO READ IT", "EVIDENCE BOUNDARY"],
  rows: [
    { status: "PROPOSED / CONSULTATION", title: "Provisional, not final.", description: "A proposal is not a new law; any consultation date needs a citation." },
    { status: "ADOPTED / FINAL", title: "Final does not always mean effective.", description: "The approved source must separately establish adoption and effect." },
    { status: "EFFECTIVE", title: "Effect must be established by the source.", description: "Current effect is not inferred from publication or the age of an item." },
    { status: "DELAYED / POSTPONED", title: "Keep the prior and new dates distinct.", description: "Both dates and the delaying action require approved source evidence." },
    { status: "WITHDRAWN", title: "Historical; not a current action prompt.", description: "Retain the source record without an action-oriented CTA." },
    { status: "REPEALED / REPLACED", title: "Historical; successor only if known.", description: "Link a replacement only when the approved source establishes it." },
    { status: "SUPERSEDED", title: "Separate this record from a current update.", description: "Show a banner; a successor link remains source-required until known." },
  ],
};

export const DATE_HIERARCHY_DATA = {
  eyebrow: "ORDERED TIMELINE · ILLUSTRATIVE PATTERN",
  title: "Every date has a different job.",
  definitions: [
    { label: "Published", description: "When an approved item is first published on this site." },
    { label: "Announced / Enacted / Adopted", description: "Distinct authority events; record only the event the source establishes." },
    { label: "Effective", description: "When the source establishes effect. Never copy the publication date." },
    { label: "Updated", description: "When the editorial item changes; keep the correction or change history." },
    { label: "Source checked", description: "An optional, separately recorded check, not an automatic currentness guarantee." },
  ],
  footnote: "Unknown, pending and absent remain explicit. No dates, deadlines or review cadence are supplied; publication is never substituted for effect.",
  specimen: {
    badge: "Symbolic sequence · no established events",
    events: [
      { marker: "A", title: "Source event", description: "Announced / enacted / adopted — event and date pending source." },
      { marker: "B", title: "Effect event", description: "Effective date — not established; position follows verified chronology." },
      { marker: "C", title: "Editorial publication", description: "Published date — not assigned; separate from legal effect." },
      { marker: "D", title: "Later review or correction", description: "Updated / source checked — not recorded; retain the reason for change." },
    ],
    footnote: "Readable ordered-list pattern, not a horizontal-only chart. The letters indicate structure, not actual legal chronology or dates.",
  },
};

export const IMPACT_TAXONOMY_DATA = {
  eyebrow: "POTENTIAL IMPACT",
  title: "Relevance is a research question.",
  description: "These eight editorial categories help organize investigation. They are not findings of customer applicability, obligations or production support.",
  categories: [
    { title: "Tax determination", description: "May affect source-backed treatment or calculation inputs within the exact approved scope." },
    { title: "Sourcing / jurisdiction", description: "May affect how a transaction's location or jurisdiction is assessed; exact source scope matters." },
    { title: "Exemptions / certificates", description: "May affect an exemption or evidence requirement only where the approved source establishes it." },
    { title: "Regulatory obligations", description: "May affect an authority-defined requirement; proposal, final and effective states remain separate." },
    { title: "Compliance & filing", description: "May affect a scoped reporting or filing workflow. No deadlines or duties are inferred." },
    { title: "E-Invoicing & CTC", description: "May affect source-established invoicing or CTC requirements; production support is a separate question." },
    { title: "Remittance", description: "May affect a source-defined payment or remittance process. This does not imply ZoikoTax holds funds." },
    { title: "Billing / product", description: "May affect scoped billing treatment or product interpretation; service taxonomy must be approved." },
  ],
  coverageDistinction: {
    label: "EDITORIAL RELEVANCE ≠ PRODUCTION COVERAGE",
    description: "A topic or jurisdiction appearing in an article never establishes activated ZoikoTax capability. Product relevance needs separate evidence; Coverage is the route for capability questions.",
    cta: "Explore Coverage →",
  },
};

export const CURRENTNESS_DATA = {
  eyebrow: "CURRENTNESS & CHANGE HISTORY",
  title: "A clear record, even when the answer changes.",
  description: "Keep the publication, editorial updates, source checks, effective date, source scope and reviewer distinct. An unchanged source is not an automatic guarantee of currentness.",
  stateSpecimens: [
    { badge: "Illustrative · superseded", title: "This record is historical.", description: "It is not the current update. A successor may be linked only when known and source-approved; otherwise show “Successor — source required.”", fieldLabel: "Successor / effective date", fieldValue: "Not supplied / not established", tone: "lavender" as const },
    { badge: "Illustrative · stale review", title: "Currentness not confirmed.", description: "A stale review fails closed: withhold current presentation until the source and scope are checked and the required review is approved. No review cadence was supplied.", fieldLabel: "Source checked / review date", fieldValue: "Not recorded / not supplied", tone: "orange" as const },
  ],
  disciplines: [
    { label: "HISTORICAL SCOPE", title: "Keep historical records distinct.", description: "Withdrawn, repealed, replaced and superseded records are removed from default current discovery. Retain their historical context without a current-action prompt." },
    { label: "CHANGE HISTORY", title: "Corrections leave a trail.", description: "A governed correction log records what changed, why, the supporting source and approval. Published and Last updated stay separate. No correction events are claimed here." },
    { label: "SOURCE CONTINUITY", title: "A removed source is not replaced by guesswork.", description: "Retain any approved citation, flag access loss and seek an official replacement. A missing source is a review trigger, not permission to invent authority." },
  ],
  accountability: {
    label: "EDITORIAL ACCOUNTABILITY",
    title: "Review is a requirement. Not an invented credential.",
    description: "These are required ownership roles, not assigned people. Public names, roles and profile links appear only after approval; no reviewer identity, biography or review date has been supplied.",
    roles: [
      { title: "Author / analyst", description: "Research and cited source facts." },
      { title: "SME reviewer", description: "Scope, dates, status and context." },
      { title: "Legal, if required", description: "Review of high-risk legal effect." },
      { title: "Editor", description: "Fact / analysis / uncertainty separation." },
      { title: "SEO", description: "Discoverability, not legal authority." },
      { title: "Publisher", description: "Release only after approval gates." },
    ],
  },
  gate: {
    label: "BEFORE AN ITEM CAN BE PUBLISHED",
    description: "Source, dates, exact jurisdiction, lifecycle status, expert review, legal boundary, accessible reading and approved routes must pass the publication gates. This design does not claim that those gates, production accessibility or release checks have passed.",
  },
};

export const FAQ_DATA = {
  eyebrow: "FREQUENTLY ASKED QUESTIONS",
  title: "Direct answers. No inferred obligations.",
  description: "Source-required answers for this approval candidate. No current regulatory update or legal advice is being presented.",
  items: [
    { question: "What changed in telecom tax regulation?", answer: "No approved regulatory item was supplied, so this page does not assert a change. A published answer must identify the exact jurisdiction, authority, status, dates and supporting source." },
    { question: "When does this regulatory change take effect?", answer: "Only an approved authoritative source can establish the effective date. No such source is supplied here: Effective date — not established. A publication or update date is not a substitute." },
    { question: "Which authority issued the change?", answer: "The exact issuer must be verified against the primary source. No issuing authority is identified here because no approved source or jurisdiction record was supplied." },
    { question: "Is this proposal final or effective?", answer: "Status must be separately established from the approved source. Proposed, adopted / final and effective are different states; neither finality nor effect is inferred from recency. No item status is established here." },
    { question: "What source supports this update?", answer: "An approved authoritative source with an exact citation is required. None was supplied. Secondary commentary or news discovery alone cannot stand in for authority; the summary stays source-required." },
    { question: "Does this mean ZoikoTax supports the jurisdiction?", answer: "No. Editorial relevance does not establish production coverage. Check Coverage separately for capability information; no jurisdiction support is inferred from this page." },
  ],
  footnote: "NOT LEGAL ADVICE · EXACT SOURCE, SCOPE, DATE & STATUS REQUIRED",
};

export const RELATED_RESOURCES_DATA = {
  eyebrow: "CONTINUE YOUR RESEARCH",
  title: "Context first. Capability questions separately.",
  cards: [
    { title: "Telecom Tax Insights", description: "Editorial context for understanding telecom fiscal questions.", path: "/resources/insights/" },
    { title: "Guides & Reports", description: "Longer-form resources for structured research and investigation.", path: "/guides-reports" },
    { title: "Glossary", description: "Terminology support without treating a definition as legal advice.", path: "/glossary" },
  ],
  capabilityDestinations: [
    { label: "COVERAGE · /coverage/", description: "Explore capability information independently. An editorial topic does not establish supported jurisdictions or activated functionality." },
    { label: "PLATFORM · /platform/", description: "Learn about the platform separately. Any connection between a regulatory item and a product capability needs its own approved relevance evidence." },
  ],
};

export const NEXT_ROUTES_DATA = {
  title: "Keep research grounded in evidence.",
  description: "Use Resources for editorial context and Coverage for capability questions. Neither replaces the authoritative source or advice for your circumstances.",
  actions: [
    { label: "Telecom Tax Insights", variant: "primary" as const },
    { label: "Explore Coverage", variant: "secondary" as const },
  ],
};
