export const HERO_DATA = {
  eyebrow: "ASSURANCE & INTELLIGENCE · DASHBOARD & ANALYTICS",
  title: "See operational signals with the context needed to interpret them.",
  description:
    "Explore how governed metrics, exceptions and evidence context can support operational review across approved ZoikoTax workflows. Analytics summarizes and explains; it does not replace source-owned fiscal authority.",
  notice: "A number is meaningful only with its definition, scope, source and currentness.",
  actions: [{ label: "Book a Demo", variant: "primary" as const }],
  secondaryLink: "Explore Evidence & Replay",
  destination: { title: "Explore Intelligence Fabric", note: "Destination route required · not linked in this preview" },
  footnote:
    "Public explanation, not an authenticated dashboard. Book a Demo starts a commercial conversation, not customer access. Evidence & Replay route required; action is not linked.",
};

export const WHAT_MEANS_DATA = {
  eyebrow: "Direct answer",
  title: "Context first. Interpretation second.",
  description:
    "A public explanation of how ZoikoTax can present governed operational signals and analysis patterns around approved fiscal workflows, with source and context visible.",
  cards: [
    { icon: "layers", title: "Summarize, not decide", description: "Metrics contextualize source-owned outcomes. They do not decide tax or establish a live customer application." },
    { icon: "globe", title: "A chart is not Coverage", description: "Analytics patterns do not establish country or capability availability. Coverage owns that answer." },
    { icon: "shield", title: "A color is not service health", description: "A green state is not System Status. Missing or unassessed information is never treated as healthy." },
  ],
};

export const TRUTH_MODEL_DATA = {
  eyebrow: "Analytics truth model",
  title: "Different signals. Different authority.",
  description: "Read the category before interpreting the result. These concepts describe review patterns, not approved published metrics.",
  categories: [
    { icon: "landmark", title: "Authoritative fiscal outcome", description: "Owned by the governing source. Analytics does not replace the source-owned result." },
    { icon: "book-open", title: "Derived metric", description: "Requires a governed formula and documented inputs. It is not fiscal authority." },
    { icon: "activity", title: "Operational signal", description: "Calls attention to context; it is not a decision, instruction or approved action." },
    { icon: "git-compare", title: "Exception / variance", description: "A difference for review, not proof of error, liability or materiality." },
    { icon: "chart-line", title: "Trend", description: "Meaningful only across comparable definitions, scopes and periods." },
    { icon: "sparkles", title: "AI-assisted explanation", description: "Optional, source-aware assistance with inspectable limitations; never authorization." },
  ],
  notice: "Unknown or incomplete: not enough information to interpret. Never zero, green or normal by default.",
};

export const DASHBOARD_ANATOMY_DATA = {
  eyebrow: "Illustrative dashboard anatomy",
  title: "From signal to evidence, keep the path inspectable.",
  description: "An inline interface specimen shows how context could surround a signal. It is not a product screenshot, customer report or approved metric catalogue.",
  specimenLabel: "Illustrative interface pattern — not customer or production data.",
  specimenTitle: "Operational review · specimen only",
  scopeFields: [
    { label: "Entity", value: "Illustrative scope · unknown" },
    { label: "Capability", value: "Illustrative scope · unknown" },
    { label: "Period", value: "Illustrative scope · unknown" },
  ],
  signalCards: [
    { title: "Exceptions requiring review", status: "Illustrative · pending review" },
    { title: "Evidence completeness", status: "Illustrative · not assessed" },
    { title: "Comparison state", status: "Illustrative · insufficient evidence" },
  ],
  signalFootnote: "No numeric value is shown.",
  trend: {
    title: "Illustrative pattern",
    summary: "Text summary: separate comparable windows show changing illustrative shapes. The gap is unknown; no interpolation or healthy state is inferred. This is a pattern, not an observed result.",
    table: [
      { segment: "Pattern segment", equivalent: "Qualitative equivalent" },
      { segment: "Comparable window", equivalent: "Changing shape · illustrative only" },
      { segment: "Missing interval", equivalent: "Unknown · no inferred result" },
      { segment: "Separate window", equivalent: "Definition comparability required" },
    ],
  },
  exceptionQueue: {
    title: "Exceptions for review",
    rows: [
      { label: "Example A", status: "Illustrative · pending" },
      { label: "Example B", status: "Illustrative · not assessed" },
    ],
    footnote: "Abstract examples only. Severity, materiality, owner and lifecycle are source-required.",
  },
  evidencePanel: {
    title: "Evidence context",
    fields: [
      { label: "Source", value: "Source required" },
      { label: "Definition", value: "Not published" },
      { label: "Scope", value: "Illustrative scope · unknown" },
      { label: "Currentness", value: "Not assessed" },
    ],
    footnote: "No private documents or source snippets.",
  },
  nextContext: {
    title: "Continue with the owning domain",
    destinations: ["Evidence & Replay", "Shadow Assurance", "Migration & Onboarding", "Intelligence Fabric"],
    footnote: "Discovery destinations, not execution controls.",
  },
  notice: "No customer or production data. No filters, run, export, save-view or alert controls are established by this specimen.",
};

export const METRIC_REGISTRY_DATA = {
  eyebrow: "Metric definition registry pattern",
  title: "Before a value, inspect its meaning.",
  description:
    "No approved metric record has been supplied. This annotated definition pattern shows the context a governed registry would need—not an actual record, formula, owner, date or version.",
  cardLabel: "Illustrative interface pattern — not customer or production data.",
  cardTitle: "Governed definition · illustrative schema",
  fields: [
    { label: "Approved label", value: "Not published · source required" },
    { label: "Semantic meaning", value: "Documented interpretation required" },
    { label: "Unit", value: "Not published · no financial unit implied" },
    { label: "Scope", value: "Illustrative scope · unknown" },
    { label: "Source", value: "Owning source required" },
    { label: "Period", value: "Not published · comparable window required" },
    { label: "Freshness", value: "Source-defined currentness required" },
    { label: "Owner", value: "Not published · no named owner supplied" },
    { label: "Evidence", value: "Permission-bound source reference required" },
    { label: "Caveat", value: "Limitations must remain visible" },
  ],
  guidance: {
    title: "Withhold a value you cannot verify.",
    description: "The label, inputs, definition window and owning source make interpretation inspectable. A derived metric is not a fiscal determination.",
    notice: "This metric cannot be verified from its current source. No value is shown.",
    footnote: "Safe recovery pattern: explain the missing source, retain the context and avoid a numeric or reassuring substitute. Numeric publication requires an approved registry.",
  },
  statesTitle: "State definitions—not live results",
  states: [
    { title: "Current", description: "Within the owning source’s defined currentness window." },
    { title: "Delayed", description: "Outside the source-defined expected window." },
    { title: "Partial", description: "Some required source coverage is missing." },
    { title: "Unavailable", description: "The required source cannot be obtained." },
    { title: "Not applicable", description: "Outside the definition’s documented scope." },
    { title: "Not assessed", description: "No verified assessment is available." },
    { title: "Conflicted", description: "Sources disagree; interpretation is withheld." },
    { title: "Illustrative", description: "A design pattern, not a live result." },
  ],
};

export const SCOPE_SEGMENTATION_DATA = {
  eyebrow: "Scope & segmentation",
  title: "A comparison needs a documented window.",
  description:
    "Entity, market, capability, period, product and comparator are meaningful only when governed by the owning definition. This is a scope pattern, not a working filter model.",
  barLabel: "Illustrative interface pattern — not customer or production data.",
  fields: [
    { label: "Entity", value: "Illustrative scope · unknown" },
    { label: "Market", value: "Illustrative scope · unknown" },
    { label: "Capability", value: "Illustrative scope · unknown" },
    { label: "Period", value: "Illustrative scope · unknown" },
    { label: "Product", value: "Illustrative scope · unknown" },
    { label: "Comparator", value: "Illustrative scope · unknown" },
  ],
  barFootnote: "Specimen only · no operational dropdowns or reset action. No customer, country or tenant is selected; no tenant information belongs in a public URL.",
  cards: [
    { icon: "calendar-range", title: "Compare like with like", description: "Use only documented, comparable definition and period windows. A missing interval stays a gap—not a healthy inferred result." },
    { icon: "scan-line", title: "No forecast is established", description: "This page explains retrospective patterns. Forecasts and predictive capabilities are not supplied or approved." },
  ],
  notice: "Conditional definition-change example: The metric definition changed for this period. Compare only within the documented definition window.",
};

export const EXCEPTION_VARIANCE_DATA = {
  eyebrow: "Exception & variance exploration",
  title: "A difference opens a question, not a conclusion.",
  notice: "A variance is a reason to investigate, not proof that either source is wrong.",
  exampleLabel: "Illustrative interface pattern — not customer or production data.",
  exampleTitle: "Example A · review context",
  fields: [
    { label: "Source", value: "Source required · not published" },
    { label: "Rule / definition", value: "Governing rule required" },
    { label: "Context", value: "Illustrative scope · unknown" },
    { label: "State", value: "Illustrative · pending review" },
    { label: "Evidence handoff", value: "Permission-bound source required" },
  ],
  exampleFootnote: "No cause, error, resolution, financial or legal materiality is asserted. Rule, owner and lifecycle are not supplied.",
  boundaries: {
    title: "Comparison is not a ledger.",
    paragraphs: [
      "Calculated, billed, collected, filed, remitted and accounting comparisons are conceptual review boundaries. They are not ledger postings, payment controls or tax and currency treatment.",
      "No money amounts, thresholds, severity or source-specific reconciliation rules are established here.",
    ],
    notice: "A difference requires source context and review—not an assumed liability or an automatic correction.",
  },
  partialStateLabel: "CONDITIONAL PARTIAL-STATE EXAMPLE",
  partialStateNotice: "This view is incomplete for the selected scope. Review source coverage before interpreting the result.",
};

export const EVIDENCE_REPLAY_DATA = {
  eyebrow: "Evidence & Replay",
  title: "Let the source carry the proof.",
  description: "Analytics can summarize a signal. Where supported, the handoff belongs to permission-bound source, proof and reproduction authority.",
  cards: [
    { icon: "chart-no-axes-combined", title: "Analytics context", description: "Retain the metric’s definition, scope, source and currentness. A changed metric alone cannot establish cause." },
    { icon: "file-check", title: "Source-owned proof", description: "Evidence remains authoritative within its governed domain. Analytics does not override or reconstruct missing evidence." },
    { icon: "history", title: "Governed reproduction", description: "Replay depends on source support and access. Universal replay, export and drilldown are not promised." },
  ],
  notice: "Source unavailable? Withhold the interpretation and say what is missing. Never expose private evidence or fabricate a source reference.",
  destination: { title: "Explore Evidence & Replay", note: "Destination route required · not linked in this preview" },
};

export const SHADOW_ASSURANCE_DATA = {
  eyebrow: "Shadow Assurance",
  title: "Compare with context. Preserve authority.",
  description: "Shadow Assurance owns comparator context. Analytics may summarize a sourced comparison; it does not establish legal correctness or transfer authority.",
  destination: { title: "Explore Shadow Assurance", note: "Destination route required · not linked in this preview" },
  panel: {
    label: "Illustrative interface pattern — not customer or production data.",
    title: "Source-defined comparison states",
    concepts: [
      { label: "Alignment", description: "Comparable sources show agreement in the defined scope." },
      { label: "Variance", description: "A difference requires evidence and review." },
      { label: "Insufficient evidence", description: "No supported conclusion can be drawn." },
      { label: "Unsupported", description: "The comparison is not supported for the scope." },
    ],
    footnote: "Illustrative definitions only—not measured results or approved thresholds.",
  },
  notice: "The incumbent remains authoritative until a separately governed transfer. This public page offers no cutover action.",
};

export const MIGRATION_READINESS_DATA = {
  eyebrow: "Migration & Onboarding",
  title: "Readiness is governed, not inferred.",
  description: "Use analytics as an adoption-review aid around source-approved readiness gates. It can summarize a gate’s context; it cannot create readiness or authorize cutover.",
  cards: [
    { icon: "list-checks", title: "Document the scope", description: "Identify the proposed workflow and the owning readiness criteria. No mapping percentage or completeness result is published." },
    { icon: "clipboard-check", title: "Review the source", description: "Inspect source-approved evidence, dependencies and limitations. A chart cannot replace the readiness gate." },
    { icon: "signpost", title: "Keep the decision governed", description: "Transfer and adoption decisions stay with the separately governed process—not an analytics state." },
  ],
  notice: "No fixed shadow period, instant migration, zero-downtime or automatic rollback guarantee is established.",
  destination: { title: "Explore Migration & Onboarding", note: "Destination route required · not linked in this preview" },
};

export const AI_BOUNDARY_DATA = {
  eyebrow: "Intelligence Fabric",
  title: "Assistance is not authority.",
  description: "Where approved, source-aware assistance may help explain context and navigate supporting material. Sources and limitations must remain inspectable, separate from the source fact.",
  destination: { title: "Explore Intelligence Fabric", note: "Destination route required · not linked in this preview" },
  panel: {
    title: "Advisory, never authoritative.",
    paragraphs: [
      "This page establishes no AI monitoring, classification, forecast, confidence score, training or customer-data use.",
      "Intelligence Fabric owns intelligence tasks. AI Governance remains a separately governed authority; its policy is not duplicated here.",
    ],
    destination: { title: "AI Governance", note: "Destination route required · not linked in this preview" },
  },
  notice: "AI-assisted explanation may help navigate context; it does not authorize tax, filing, remittance or legal outcomes.",
};

export const TRUST_BOUNDARIES_DATA = {
  eyebrow: "The public estate",
  title: "Use the right authority for the question.",
  description: "This discovery page explains analytics boundaries. Specialist destinations own their respective sources, service information and commitments.",
  destinations: [
    { icon: "globe", title: "Coverage", description: "Market and capability availability." },
    { icon: "shield-check", title: "Trust", description: "Security, privacy and residency context." },
    { icon: "activity", title: "System Status", description: "Live public service health and incidents." },
    { icon: "life-buoy", title: "Support", description: "Account-specific issues through the owning support channel." },
    { icon: "code", title: "Developers", description: "Integration contracts and developer information." },
    { icon: "shield-alert", title: "Responsible Disclosure", description: "Vulnerability reporting through the governed destination." },
  ],
  notices: ["Analytics visibility does not establish market or capability availability.", "For live service health and incidents, use System Status."],
  publicNotice: {
    title: "Public content is not account access.",
    paragraphs: [
      "Public specimens contain no customer data. Authenticated views, if supported, remain permission-bound; this page establishes no role rights or customer dashboard access.",
      "A missing metric does not imply an outage. No public incident does not prove account health. No support SLA or account diagnosis is asserted.",
    ],
  },
  commercial: {
    title: "Sales / demo",
    description: "Book a Demo is a commercial evaluation step, not activation, entitlement or operational access.",
    destination: { title: "Book a Demo", note: "Destination route required · not linked in this preview" },
  },
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. No implied capability.",
  items: [
    {
      question: "What is Dashboard & Analytics?",
      answer: "A public ZoikoTax Assurance & Intelligence destination explaining governed operational visibility patterns around approved fiscal workflows. It does not by itself establish a live customer dashboard or metric catalogue.",
    },
    {
      question: "Does ZoikoTax provide real-time analytics?",
      answer: "Current sources supplied for this specification do not establish a universal real-time refresh commitment. Any freshness claim must come from the owning metric/data source.",
    },
    {
      question: "Can I see the evidence behind a metric?",
      answer: "Where supported, analytics should route to the source or Evidence & Replay. This page does not promise universal drilldown/export behavior.",
    },
    {
      question: "Does a variance mean an error occurred?",
      answer: "No. A variance identifies a difference that requires context, evidence and review.",
    },
    {
      question: "Does AI decide tax outcomes?",
      answer: "No. AI may assist with approved intelligence tasks, but authoritative fiscal actions remain governed by deterministic/product controls and human/process gates.",
    },
    {
      question: "Does the page show country availability?",
      answer: "No. Capability and market availability belong to Coverage.",
    },
    {
      question: "Is this the same as System Status?",
      answer: "No. System Status owns live public service-health and incident information.",
    },
    {
      question: "Can prospects access customer dashboards?",
      answer: "No such access is established by the supplied sources. Public content must never expose customer data.",
    },
  ],
};

export const CLOSING_CTA_DATA = {
  title: "Evaluate visibility, evidence and control in your operating context.",
  description: "Start with the workflows, sources and proof your team needs to review. A demo is a commercial conversation—not access to a customer dashboard.",
  action: { label: "Book a Demo", variant: "primary" as const },
  secondaryLink: "Explore Evidence & Replay",
  footnote: "Evidence & Replay destination route required · not linked in this preview",
};
