export const HERO_DATA = {
  eyebrow: "COVERAGE · UNITED STATES",
  title: "United States coverage, capability by capability.",
  description:
    "Review governed public readiness for ZoikoTax capabilities in the United States market context. Each capability carries its own state, scope and currentness; a market label is not a blanket support claim.",
  actions: [
    { label: "Review capability status", variant: "primary" as const },
    { label: "View Status & Releases", variant: "secondary" as const },
  ],
  relatedLink: "Book a Demo",
  footnote: "A market context, not a blanket support claim. Public readiness remains ungated.",
  answer: {
    eyebrow: "DIRECT ANSWER",
    title: "What does United States mean in ZoikoTax Coverage?",
    lead: "It is a market-specific view of governed pack and capability readiness. A listed market or pack does not mean every capability is in production.",
    body: "Availability is capability- and scope-specific. Review the stated scope and currentness for each capability.",
  },
};

export const CURRENTNESS_DATA = {
  title: "Currentness must come from the source.",
  description:
    "Current public readiness could not be verified from the governed Coverage source. Do not infer production availability from earlier states, the market label or adjacent capabilities.",
  badge: "Status unavailable",
  fields: [
    { label: "Market context", value: "United States" },
    { label: "Source health", value: "Status unavailable" },
    { label: "Currentness", value: "Status unavailable" },
    { label: "Owning release record", value: "Status unavailable" },
  ],
};

export const CAPABILITY_STATUS_DATA = {
  eyebrow: "CAPABILITY MATRIX",
  title: "Six capabilities. Independently governed.",
  description: "Read the state, scope and currentness together. No United States capability state is assigned without a current authoritative public record.",
  tableColumns: ["Capability & boundary", "Public state", "Stated scope", "Currentness & source"],
  capabilities: [
    { icon: "calculator", name: "Tax Determination", boundary: "Determination readiness only; no rates, taxability conclusions or universal accuracy claim." },
    { icon: "clipboard-list", name: "Regulatory Obligations", boundary: "Obligation readiness only; no specific registration requirement or customer legal conclusion." },
    { icon: "files", name: "Compliance & Filing", boundary: "Workflow readiness only; no filing form, frequency or deadline guarantee." },
    { icon: "landmark", name: "Remittance", boundary: "Orchestration readiness only; not funds custody, transfers or settlement." },
    { icon: "file-check-2", name: "E-Invoicing & CTC", boundary: "Capability readiness only; no named mandate, network or authority support is established." },
    { icon: "users-round", name: "Managed Compliance", boundary: "Requires separately verified underlying production and managed operational readiness; no staffing, hours or SLA claim." },
  ],
  scopeNotEstablished: "Not publicly established",
  scopeFootnote: "Do not borrow scope or readiness from another capability.",
  currentnessLabel: "Currentness: source required",
  currentnessFootnote: "Pack / release source unavailable.",
  matrixLimitation: "Status unavailable is a source-verification outcome, not RESEARCH, PILOT, PRODUCTION or a global unsupported claim.",
  legend: {
    title: "What the states mean",
    badge: "EXPLANATORY ONLY · NOT UNITED STATES ASSIGNMENTS",
    description: "These definitions explain the governed vocabulary. They are not a readiness stepper, a promise of progression or announced market events.",
    states: [
      { label: "RESEARCH", description: "Source discovery and interpretation are incomplete. Not production." },
      { label: "VALIDATION", description: "Formal or internal validation. Not production." },
      { label: "PILOT", description: "Controlled, limited deployment in exact stated scope. Not general availability." },
      { label: "PRODUCTION", description: "Approved authoritative production, within stated scope only." },
      { label: "MANAGED", description: "Production plus approved managed operational readiness." },
      { label: "SUSPENDED", description: "New authoritative use is stopped except for an approved exception. Not available for marketing." },
      { label: "WITHDRAWN", description: "Retired; historical only. No new availability." },
    ],
  },
};

export const PACK_CONTEXT_DATA = {
  eyebrow: "COUNTRY & REGULATORY PACKS",
  title: "A pack is context. Not blanket production.",
  description: "Pack lifecycle and capability readiness are separate governed facts. Neither can stand in for the other.",
  panel: {
    title: "United States pack context",
    paragraphs: [
      "A public pack is not confirmed here. Architecture, a market listing or a pack’s existence does not establish production readiness.",
      "Use the pack source for pack lifecycle, and the capability record for its exact state and scope.",
    ],
    link: "Country & Regulatory Packs",
  },
  fields: [
    { label: "Pack existence & lifecycle", value: "Status unavailable" },
    { label: "Approved source & provenance", value: "Status unavailable" },
    { label: "Owning release record", value: "Status unavailable" },
  ],
  link: "View Status & Releases",
};

export const SCOPE_EXCLUSIONS_DATA = {
  eyebrow: "SCOPE DETAIL",
  title: "The boundary matters as much as the state.",
  description: "Availability is capability- and scope-specific. A partial or unresolved source never inherits the state of a neighbouring capability.",
  dimensions: [
    { label: "Product & service", value: "Not publicly established", description: "Only an approved source can define included products and services." },
    { label: "Entity & transaction", value: "Not publicly established", description: "An entity or transaction is not included by implication." },
    { label: "Sub-jurisdiction", value: "Not publicly established", description: "Public sub-jurisdiction scope is not established here." },
    { label: "Authority & network", value: "Not publicly established", description: "No authority or network scope is established here." },
    { label: "Managed scope", value: "Not publicly established", description: "Requires verified production scope and separate operational readiness." },
  ],
  boundary: {
    title: "Not established is not an exclusion.",
    paragraphs: [
      "No sourced inclusion or exclusion is asserted here. Missing scope cannot confirm coverage—or universal lack of coverage.",
      "Public sub-jurisdiction scope is not established here. No state or local availability should be inferred.",
    ],
    links: ["Review pack context", "View Status & Releases"],
  },
  professionalNotice: "Public Coverage describes product readiness; it is not legal or tax advice for a specific organization or transaction.",
};

export const CHANGE_HISTORY_DATA = {
  eyebrow: "STATUS & RELEASES",
  title: "Current truth, not a parallel timeline.",
  description: "The owning Status & Releases record holds governed chronology. No current United States release record is established here.",
  latestState: { label: "Latest governed state", value: "Status unavailable", action: "View Status & Releases" },
  rules: [
    { title: "Historical ≠ current", description: "Historical or superseded records do not establish current readiness. Future records do not become current early." },
    { title: "Later restrictions govern", description: "SUSPENDED after PRODUCTION takes precedence. WITHDRAWN means no new availability—not a new availability CTA." },
    { title: "Conflict never promotes", description: "Conflicting sources suppress the current assignment. Do not select the more favourable state." },
  ],
  footnote: "These are illustrative state meanings and reading rules, not announced United States events.",
};

export const SPECIALIST_BOUNDARIES_DATA = {
  eyebrow: "SPECIALIST BOUNDARIES",
  title: "Different questions. Different sources.",
  description: "Coverage describes product readiness. Keep technical, trust, service-health and account questions with their owning source.",
  boundaries: [
    { icon: "code-xml", title: "Developers", description: "Exact technical contracts, sandbox entitlement and adapter source belong to Developers. Architecture is not live Coverage.", link: "Explore Developers" },
    { icon: "shield-check", title: "Trust", description: "Security, privacy, residency, continuity and certifications are separate Trust facts—not evidence of market readiness." },
    { icon: "activity", title: "System Status", description: "Live service health is separate. A healthy service does not prove United States Coverage; PRODUCTION does not prove a particular transaction or account is healthy." },
    { icon: "messages-square", title: "Technical & Customer Support", description: "Account-specific technical or customer support belongs in its approved support channel, not in public Coverage." },
    { icon: "bug", title: "Responsible Disclosure", description: "Vulnerability reporting belongs to Responsible Disclosure. Do not submit secrets or technical exposure details through Coverage or demo enquiries." },
    { icon: "presentation", title: "Commercial Demo", description: "Discuss the exact scenario you need. A demo is not access, support, a readiness entitlement or evidence of product availability.", link: "Book a Demo" },
  ],
  presenceNotice: {
    title: "Corporate presence ≠ product Coverage.",
    description: "A headquarters location is a corporate fact, not proof of capability readiness, local support or United States-based compliance services.",
  },
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. Qualified by the source.",
  description: "Public truth stays visible. No sign-in, form or accordion is needed to read the limitations.",
  items: [
    {
      question: "Does ZoikoTax support the United States?",
      answer: "Readiness is capability- and scope-specific. Current public state must be verified independently for every capability; this page has no current authoritative records supplied, so it cannot confirm overall support or universal lack of support.",
    },
    {
      question: "Does a United States pack mean every capability is live?",
      answer: "No. Pack existence and capability production state are separate, each requires source-specific state and scope.",
    },
    {
      question: "How do I know what is production-ready?",
      answer: "Review current state, exact scope/currentness and owning Status & Releases record; none should be inferred from the label.",
    },
    {
      question: "What if a status is missing?",
      answer: "Status unavailable; do not infer production from earlier/adjacent/architecture/route.",
    },
    {
      question: "Does the Sacramento headquarters prove US product coverage?",
      answer: "No. Corporate location and product Coverage are separate facts.",
    },
    {
      question: "Does PRODUCTION mean every customer/use case is covered?",
      answer: "No. Exact stated scope only, not substitute for customer contract/tax/legal analysis.",
    },
  ],
};

export const SCENARIO_DISCUSSION_DATA = {
  title: "Discuss the exact scenario you need.",
  description: "Book a Demo to discuss your capability and scope requirements—not to unlock public truth. A demo does not establish access, support or production readiness.",
  actions: [
    { label: "Book a Demo", variant: "primary" as const },
    { label: "Review capability status", variant: "secondary" as const },
  ],
  links: ["Country & Regulatory Packs", "Status & Releases"],
};
