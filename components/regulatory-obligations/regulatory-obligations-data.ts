/**
 * Copy for the Regulatory Obligations page, transcribed from Figma file wN4drYDagdvZt1JB6POyDf
 * (desktop frame 233:11402, mobile frame 233:12494). `*Mobile` fields hold copy that differs in
 * the 390px mobile frame.
 */

const ICON = "/regulatory-obligations";

/* 233:11443 / 233:12502 */
export const heroData = {
  eyebrow: "Telecom Regulatory Obligations",
  title: "Know what follows every consequential telecom fiscal decision.",
  description:
    "ZoikoTax is designed to connect governed fiscal decisions to responsibility, registrations, reporting triggers, regulatory revenue and due-dated obligations — so tax and regulatory teams can see what requires action, why it applies and what evidence supports it.",
  secondary:
    "Move from isolated calculation to a controlled obligation chain that keeps decision context attached to downstream work.",
  primaryCta: "Book a Demo",
  secondaryCtas: ["View Current Coverage", "Explore Compliance & Filing"],
  disclosure: "Built for governed telecom fiscal operations • Capability varies by activated market pack.",
};

/* 233:11459 / 233:12515 */
export const directAnswer = {
  eyebrow: "Direct Answer",
  title: "What is Regulatory Obligations?",
  description:
    "Regulatory Obligations is the capability within ZoikoTax that connects supported telecom fiscal decisions to responsibility, registrations, reporting triggers, regulatory revenue and due-dated obligations, while preserving complete evidence context.",
  is: {
    title: "Governed Capabilities (What it IS)",
    items: [
      "Governed what-follows lifecycle layer",
      "Complete evidence and context-aware design",
      "Seamless handoff to Compliance & Filing",
      "Strictly coverage-specific pack architecture",
      "Coexistence compatible with existing tax engines",
    ],
  },
  isNot: {
    title: "Boundary Disclosure (What it IS NOT)",
    items: [
      "Not a generic, contextless task manager",
      "Not a universal global regulations master model",
      "Not a manual calendar template or simple date list",
      "Not the direct filing submission itself (owned by Filing Workspace)",
      "Not a guaranteed legal timeline or autonomous AI lawmaker",
    ],
  },
};

/* 233:11519 / 233:12554 */
export const hardProblems = {
  eyebrow: "Structural Challenges",
  title: "Why telecom regulatory obligations resist simplistic tracking",
  cards: [
    { number: "01", title: "Multiple Authorities", desc: "Tax and regulatory duties diverge sharply across federal, state, and local jurisdictional tiers." },
    { number: "02", title: "Multi-Party Responsibility", desc: "Complex seller, wholesaler, platform, and reseller relationships alter legal accountability." },
    { number: "03", title: "Obligation Diversity", desc: "A single transaction triggers multiple distinct non-monetary filings, franchise fees, and levies." },
    { number: "04", title: "Trigger Complexity", desc: "Revenue volume thresholds, service profiles, and customer classifications dynamically alter triggers." },
    { number: "05", title: "Period & Effective Dating", desc: "Historical rules must remain replayable while active dating changes apply in real-time." },
    { number: "06", title: "Downstream Execution", desc: "Bridging the gap between a high-volume billing engine and external local compliance workflows." },
    { number: "07", title: "Coverage Variance", desc: "Legal frameworks differ globally, demanding distinct pack capabilities instead of generic schemas." },
    { number: "08", title: "Change & Exception Handling", desc: "Logical, version-controlled audit trails must capture every custom local code variation." },
  ],
};

/* 233:11556 / 233:12591 — mobile uses darker #d65a2c 14px icons and swaps "search" for "clock". */
export const lifecycleData = {
  eyebrow: "Controlled Governance",
  title: "The Controlled Obligation Lifecycle",
  description: "Eight repeatable stages that ensure downstream activities stay tied to version-controlled upstream decisions.",
  stages: [
    { number: "01", name: "Receive", desc: "Mirror payload facts", icon: `${ICON}/lifecycle-inbox.svg`, iconMobile: `${ICON}/lifecycle-inbox-mobile.svg` },
    { number: "02", name: "Classify", desc: "Categorize service", icon: `${ICON}/lifecycle-tag.svg`, iconMobile: `${ICON}/lifecycle-tag-mobile.svg` },
    { number: "03", name: "Attribute", desc: "Map responsibility", icon: `${ICON}/lifecycle-hash.svg`, iconMobile: `${ICON}/lifecycle-hash-mobile.svg` },
    { number: "04", name: "Obligate", desc: "Identify obligation", icon: `${ICON}/lifecycle-clipboard-check.svg`, iconMobile: `${ICON}/lifecycle-clipboard-check-mobile.svg` },
    { number: "05", name: "Schedule", desc: "Establish timelines", icon: `${ICON}/lifecycle-search.svg`, iconMobile: `${ICON}/lifecycle-clock-mobile.svg` },
    { number: "06", name: "Control", desc: "Assign states & review", icon: `${ICON}/lifecycle-shield-check.svg`, iconMobile: `${ICON}/lifecycle-shield-check-mobile.svg` },
    { number: "07", name: "Comply", desc: "Execute handoffs", icon: `${ICON}/lifecycle-refresh-cw.svg`, iconMobile: `${ICON}/lifecycle-refresh-cw-mobile.svg` },
    { number: "08", name: "Prove", desc: "Preserve trace evidence", icon: `${ICON}/lifecycle-file-text.svg`, iconMobile: `${ICON}/lifecycle-file-text-mobile.svg` },
  ],
};

/* 233:11634 / 233:12661 */
export const proofSystem = {
  eyebrow: "Governance Interface",
  title: "The ZoikoTax Product Proof System",
  description: "REPRESENTATIVE WORKSPACES • FOR ILLUSTRATIVE PURPOSES ONLY",
  label: "Representative Interface",
  frames: [
    {
      meta: "Specimen View A",
      title: "Obligations Registry",
      titleMobile: "Obligations Registry",
      desc: "Continuous ledger view of triggered obligations across legal entities.",
    },
    {
      meta: "Evidence Path B",
      title: "Obligation Detail & Evidence Drawer",
      titleMobile: "Evidence Drawer",
      desc: "Audit-ready breakdown linking trigger logic, versions, and operators.",
    },
    {
      meta: "Control Route C",
      title: "Calendar & Attention Queue",
      titleMobile: "Attention Queue",
      desc: "Due-dated attention views flagging gaps, ownership conflicts, and change events.",
    },
  ],
  placeholder: "ILLUSTRATIVE MOCKUP",
  placeholderMobile: "ILLUSTRATIVE WIREFRAME MOCKUP",
};

/* 233:11664 / 233:12691 */
type Tone = "red" | "orange" | "purple" | "blue" | "green" | "amber" | "grey";

export const registryData = {
  eyebrow: "Specimen Registry View",
  title: "Obligations Registry",
  description:
    "Note: Illustrative mockup showcasing governed trace status. Custom adjustments require authorized user action.",
  search: "Search obligation, market pack or entity...",
  searchMobile: "Search obligation, market pack...",
  filters: ["All Markets", "Active Packs Only"],
  columns: [
    { label: "Obligation", width: "w-[180px]" },
    { label: "Category", width: "w-[130px]" },
    { label: "Responsible Entity", width: "w-[150px]" },
    { label: "Authority / Juris", width: "w-[150px]" },
    { label: "Period / Trigger", width: "w-[120px]" },
    { label: "Due Date", width: "w-[110px]" },
    { label: "Status", width: "w-[130px]" },
    { label: "Coverage State", width: "w-[150px]" },
    { label: "Update Hash", width: "min-w-0 flex-1" },
  ],
  mobileLabels: { categoryEntity: "Category / Entity", authorityRecurrence: "Authority / Recurrence" },
  rows: [
    { name: "Obligation A", category: "911 Fee", entity: "Operator Entity Alpha", authority: "State Authority Alpha", period: "Monthly", due: "Feb 20", status: { label: "Action required", tone: "red" as Tone }, coverage: { label: "Pack available", tone: "green" as Tone }, hash: "tx_trace_9a4d8b..." },
    { name: "Obligation B", category: "Regulatory Rev", entity: "Operator Entity Beta", authority: "Federal Authority Beta", period: "Quarterly", due: "Mar 15", status: { label: "In progress", tone: "orange" as Tone }, coverage: { label: "Pack available", tone: "green" as Tone }, hash: "tx_trace_9a4d8b..." },
    { name: "Obligation C", category: "PUC Surcharge", entity: "Operator Entity Gamma", authority: "Local Authority Gamma", period: "Annual", due: "Apr 30", status: { label: "Scheduled/upcoming", tone: "purple" as Tone }, coverage: { label: "Supported config", tone: "blue" as Tone }, hash: "tx_trace_9a4d8b..." },
    { name: "Obligation D", category: "Filing Handoff", entity: "Operator Entity Delta", authority: "State Authority Delta", period: "Monthly", due: "Feb 20", status: { label: "Ready for review", tone: "blue" as Tone }, coverage: { label: "Pack available", tone: "green" as Tone }, hash: "tx_trace_9a4d8b..." },
    { name: "Obligation E", category: "E-Invoicing CTC", entity: "Operator Entity Epsilon", authority: "National Authority E", period: "Transactional", due: "Immediate", status: { label: "Completed", tone: "green" as Tone }, coverage: { label: "Discovery required", tone: "amber" as Tone }, hash: "tx_trace_9a4d8b..." },
    { name: "Obligation F", category: "Custom Surcharge", entity: "Operator Entity Zeta", authority: "State Authority Zeta", period: "Monthly", due: "Immediate", status: { label: "Blocked", tone: "red" as Tone }, coverage: { label: "Unsupported/unknown", tone: "grey" as Tone }, hash: "tx_trace_9a4d8b..." },
  ],
};

/* 233:11771 / 233:12801 */
export const evidenceDrawer = {
  eyebrow: "Trace Provenance",
  title: "Obligation Detail & Evidence Drawer",
  description:
    "This view resolves why an obligation exists, who is accountable, when action is required, and what trace evidence supports it.",
  identityLabel: "Obligation Identity A",
  identityTitle: "Specimen State 911 Return Requirement",
  context: [
    { label: "Responsibility Mapping", value: "Resolved to Operating Entity Alpha (MNO Commercial Relationship)" },
    { label: "Upstream Decision Context", value: "Triggered by Transaction Payload tax_trace_9a4d8b on VoIP Service classification." },
    { label: "Trigger / Period State", value: "Monthly recurrence triggered by volume threshold exceeding Market Alpha limits." },
    { label: "Operational Control Handoff", value: "Ready for Filing Workspace preparation. Scheduled for Feb 20." },
  ],
  manifestTitle: "Audit-Ready Evidence Manifest",
  manifest: [
    { label: "Source Provenance", value: "Verifiable transaction payload with idempotent key reference." },
    { label: "Content Versioning", value: "Governed Ruleset v2.4.1 (Effective Jan 1, 2026)." },
    { label: "Approval Logs", value: "Decision context approved by Governed Operator on Jan 14." },
    { label: "Replay Reference", value: "Outcome reconstructable through replay trace pointer hash_e3a1f9." },
  ],
  warning:
    "Agreement between analytical models confirms computational consistency, not legal compliance. Final approval remains with the operator.",
};

/* 233:11811 / 233:12837 — mobile icons are grey (#665f69) 18px variants. */
export const responsibilityModel = {
  eyebrow: "Accountability Audit",
  title: "Responsibility Resolution Model",
  description:
    "Determine exactly which operating entity, partnership, or customer role owns the obligation context before executing downstream tasks.",
  states: [
    {
      title: "Responsible party resolved",
      desc: "Legal entity, commercial relationship, and jurisdiction map to a clear owner.",
      color: "text-[#26735b]",
      border: "border-[#26735b]",
      icon: `${ICON}/responsibility-shield-check.svg`,
      iconMobile: `${ICON}/responsibility-shield-check-mobile.svg`,
    },
    {
      title: "Review required",
      desc: "Conflict detected in upstream relationship mapping. Action recommended before filing.",
      color: "text-[#d65a2c]",
      border: "border-[#d65a2c]",
      icon: `${ICON}/responsibility-eye.svg`,
      iconMobile: `${ICON}/responsibility-eye-mobile.svg`,
    },
    {
      title: "Unknown or unsupported",
      desc: "Unmapped service profile or local variant. Subject to fallback rule defaults.",
      color: "text-[#665f69]",
      border: "border-[#665f69]",
      icon: `${ICON}/responsibility-x.svg`,
      iconMobile: `${ICON}/responsibility-x-mobile.svg`,
    },
  ],
};

/* 233:11838 / 233:12861 */
export const timelineModel = {
  eyebrow: "Temporal Control",
  title: "Trigger, Period & Due-Date Model",
  description: "Track relative task attention windows aligned with category, authority, and version state.",
  lanesTitle: "Core Control Lanes",
  lanes: [
    { title: "Upcoming / Scheduled", desc: "Specimen obligations categorized in this attention lane remain traceable through upstream reference." },
    { title: "Due / Immediate Attention Required", desc: "Specimen obligations categorized in this attention lane remain traceable through upstream reference." },
    { title: "Completed / Replayable History", desc: "Specimen obligations categorized in this attention lane remain traceable through upstream reference." },
  ],
  blocked: {
    title: "Disconnected / Blocked Rail",
    desc: "This lane segregates trace tasks marked as unresolved, blocked by missing authority registrations, or featuring unsupported custom properties.",
    itemLabel: "Trace Blocked",
    itemValue: "Authority Pack Alpha not activated",
  },
};

/* 233:11861 / 233:12883 */
export const filingRelationship = {
  eyebrow: "Platform Architecture",
  title: "Registration, Reporting & Filing Scope",
  description:
    "Explicit boundary definition: ZoikoTax identifies, resolves, and tracks compliance triggers. External workspace engines handle preparation, signatures, and submissions.",
  cards: [
    { title: "Registrations", desc: "Identify required legal presence or local filings triggers based on continuous transaction thresholds." },
    { title: "Reporting Triggers", desc: "Track non-monetary obligations, volume reports, and specific data transfers mandated by authorities." },
    { title: "Filing Hand-off", desc: "Map compliance readiness, package verified trace evidence, and initiate downstream filing workflows." },
    { title: "Regulatory Revenue", desc: "Classify and trace telecom gross revenue lines back to raw transaction classification histories." },
  ],
};

/* 233:11879 / 233:12901 */
export const exceptionData = {
  eyebrow: "Exception Workspace",
  title: "Calendar, Attention & Exception Management",
  description: "Track anomalies, source changes, or downstream review blocks as version-aware exceptions.",
  columns: [
    { label: "Exception Reason", width: "w-[200px]" },
    { label: "Triggered Obligation", width: "w-[200px]" },
    { label: "Responsible Entity", width: "w-[150px]" },
    { label: "Authority / Juris", width: "w-[150px]" },
    { label: "Due Date", width: "w-[120px]" },
    { label: "Status", width: "w-[130px]" },
    { label: "Evidence Reference", width: "min-w-0 flex-1" },
  ],
  mobileLabels: { obligation: "Triggered Obligation", entityAuthority: "Entity / Authority" },
  rows: [
    { reason: "Source changed", obligation: "Obligation Specimen A", entity: "Entity Alpha", authority: "State Auth A", due: "Feb 20", status: { label: "Review required", tone: "orange" as Tone }, ref: "ex_trace_8bf3d..." },
    { reason: "Coverage unavailable", obligation: "Obligation Specimen B", entity: "Entity Beta", authority: "State Auth B", due: "Immediate", status: { label: "Blocked", tone: "red" as Tone }, ref: "ex_trace_8bf3d..." },
    { reason: "Responsibility unresolved", obligation: "Obligation Specimen C", entity: "Entity Gamma", authority: "State Auth C", due: "Mar 15", status: { label: "Review required", tone: "orange" as Tone }, ref: "ex_trace_8bf3d..." },
    { reason: "Conflict detected", obligation: "Obligation Specimen D", entity: "Entity Delta", authority: "State Auth D", due: "Immediate", status: { label: "Blocked", tone: "red" as Tone }, ref: "ex_trace_8bf3d..." },
  ],
};

/* 233:11933 / 233:12959 */
export const filingInterlock = {
  eyebrow: "Downstream Workflow Connect",
  title: "Compliance & Filing Interlock",
  description:
    "Trace the transition from obligation identification to actual preparation, submission, and ledger verification.",
  steps: [
    { step: "STEP 01", title: "Supported Obligation", desc: "Trace identified via market pack rules" },
    { step: "STEP 02", title: "Ready Status", desc: "Tax evidence packages prepared" },
    { step: "STEP 03", title: "Filing Handoff", desc: "Workspace receives structured data" },
    { step: "STEP 04", title: "Ledger Reconciliation", desc: "Ledger balances updated on response" },
  ],
  ctas: {
    primary: { label: "Explore Compliance & Filing", href: "/compliance-filing" },
    secondary: [
      { label: "View Current Coverage", href: "#coverage" },
      { label: "Explore Evidence & Replay", href: "#" },
    ],
  },
};

/* 233:11963 / 233:12988 */
export const taxInterlock = {
  eyebrow: "Upstream Integration",
  title: "Tax Determination Interlock",
  description: "How raw transaction facts turn into clear non-monetary obligations with attached evidence.",
  steps: [
    { number: "01", text: "Transaction facts mirrored into operator namespace" },
    { number: "02", text: "Service classifications evaluated against regulatory matrices" },
    { number: "03", text: "Jurisdictional boundaries mapped to target legal entity" },
    { number: "04", text: "Fiscal determinations triggered and logged" },
    { number: "05", text: "Subsequent regulatory duties identified and queued" },
  ],
  schemaImage: `${ICON}/tax-interlock-schema.webp`,
  schemaAlt: "Illustrative schema linking transaction system tables through transaction context to regulatory obligations and obligation mapping controls",
};

/* 233:11986 / 233:13010 — desktop checks are orange, mobile checks are green. */
export const auditReplay = {
  eyebrow: "Audit Defense",
  title: "Evidence, Auditability & Historical Replay",
  description:
    "Reconstruct historically triggered duties using versioned rules and facts. Avoid static legal claims or immutable guarantees.",
  manifestTitle: "Trace Manifest Specimen",
  manifest: [
    "Upstream transaction context map",
    "Tax and obligation entity maps",
    "Authorized authority registrations",
    "Original calculation inputs & parameters",
    "Ruleset and boundary pack versions",
    "Handoff trace hashes",
  ],
  scenarioTitle: "Audit Scenario Case",
  scenario: 'Scenario: "Why did Operating Entity Alpha trigger Obligation Specimen A for Period 2026-M01?"',
  scenarioBody:
    "Trace elements allow investigators to reconstruct the ruleset versions, authority packs, and raw transaction classifications in place at the exact time the decision was logged.",
  code: 'reconstruction_trace_hash = "rev_9a4d8_v2"',
};

/* 233:12030 / 233:13048 */
export const coexistence = {
  eyebrow: "System Coexistence",
  title: "Operating Models & Architectural Coexistence",
  description: "Determine compliance readiness across distinct deployment topologies.",
  models: [
    { title: "Native Full-Stack", desc: "Execution directly on ZoikoTax calculated states, available within specific packs." },
    { title: "Federated Coexistence", desc: "Calculate via incumbent engines while mapping obligations inside ZoikoTax." },
    { title: "Shadow Assurance", desc: "Compare tax and compliance states safely before production cutover decisions." },
    { title: "OEM / Embedded", desc: "Embed governed fiscal workflows directly into custom partner applications." },
  ],
  note: "Supports connections to billing, ERP general ledgers, CRM entity masters, and tax engines via standard APIs.",
  cta: { label: "Explore Developers", href: "#" },
};

/* 233:12052 / 233:13069 */
export const coverageTruth = {
  eyebrow: "Market Activation Portal",
  title: "Global Coverage & Status Portal",
  description: "Trace capability states directly without assuming global uniformity. Custom validation may apply.",
  statuses: [
    { label: "Production", tone: "green" as Tone },
    { label: "Managed Compliance", tone: "blue" as Tone },
    { label: "Pilot Active", tone: "amber" as Tone },
    { label: "Validation Only", tone: "purple" as Tone },
    { label: "Research Phase", tone: "grey" as Tone },
    { label: "Suspended / Inactive", tone: "red" as Tone },
  ],
  cta: { label: "View Current Coverage", href: "#coverage" },
};

/* 233:12073 / 233:13089 */
export const aiBoundary = {
  eyebrow: "Responsible AI",
  title: "AI assists. Approved rules decide. Evidence proves.",
  may: {
    title: "AI May Assist With",
    items: [
      "Explaining variance calculations across periods",
      "Proposing initial service category mapping suggestions",
      "Summarizing tax registration change notes",
      "Flagging outlier threshold transaction anomalies",
      "Assisting research into historical local code revisions",
    ],
  },
  mustNot: {
    title: "AI Must Not Be Presented As",
    items: [
      "Autonomous law interpretation or legal authority",
      "A replacement for verified authority source documentation",
      "A silent conflict resolution engine without human oversight",
      "An automatic filing approver or signature engine",
      "A universal coverage or legal compliance guarantee",
    ],
  },
};

/* 233:12094 / 233:13108 */
export const trustSecurity = {
  eyebrow: "Security Foundation",
  title: "Trust, Security & Data Governance",
  principles: [
    { title: "Tenant Isolation", desc: "Logical namespaces protect sensitive operators, database states, and transaction histories." },
    { title: "Least Disclosure", desc: "Minimal operational logs preserved. No transactional details cached longer than needed." },
    { title: "Residency Aware", desc: "Packs activate within regional parameters to support local deployment rules." },
  ],
  cta: { label: "Visit Trust Center", href: "#" },
};

/* 233:12111 / 233:13124 */
export const buyerOutcomes = {
  eyebrow: "Operational Value",
  title: "Designed for continuous operational confidence",
  outcomes: [
    { title: "Finance Teams", desc: "Close periods with reconciled fiscal truth mapped directly to original transaction facts." },
    { title: "Billing Engineers", desc: "Integrate billing nodes directly without hardcoding fragile tax and compliance logic." },
    { title: "Product Leaders", desc: "Launch new digital service profiles with predictable regulatory obligation rules in place." },
  ],
};

/* 233:12125 / 233:13138 — the mobile frame shows only the first four questions. */
export const faqData = {
  eyebrow: "FAQ",
  title: "Direct answers. No inflated claims.",
  mobileCount: 4,
  items: [
    { q: "What are Regulatory Obligations in ZoikoTax?", a: "It is the platform capability designed to connect governed telecom fiscal decisions to downstream obligations, assigning owners and managing timelines with attached trace evidence." },
    { q: "What kinds of obligations can ZoikoTax identify?", a: "It identifies registrations, reporting triggers, PUC levies, non-monetary compliance tasks, and local regulatory revenue classification rules." },
    { q: "How do they relate to Tax Determination?", a: "Tax determination calculates monetary liabilities. Regulatory Obligations mapping identifies the subsequent actions, deadlines, and ownership steps initiated by those calculations." },
    { q: "Does ZoikoTax submit filings directly?", a: "No. It identifies and package trace evidence. Downstream Filing workspaces handle preparation, verification, and submissions." },
    { q: "Can it work with an existing tax engine?", a: "Yes. Using Federated and Shadow Assurance modes, ZoikoTax integrates with incumbent engines to manage obligations while calculation paths remain unchanged." },
    { q: "Is it available globally?", a: "ROLLOUT DEPENDS ON LOCAL REGULATORY RULES. Capabilities activate via region-specific country and regulatory packs." },
    { q: "How does AI work in this capability?", a: "AI operates strictly in an advisory capacity, assisting humans with classification suggestions and variance summaries. Rules determine outcomes, not AI." },
    { q: "Can it explain a historical obligation?", a: "Yes. Reconstruct audit paths anytime using the trace index mapping transaction payloads, original rulesets, and active dating in effect at calculation time." },
    { q: "Does a 'Completed' status mean the authority accepted it?", a: "No. Status states reflect operator workspace validation. Only the respective fiscal authority confirms formal acceptance of filed items." },
  ],
};

/* 233:12157 / 233:13167 */
export const finalCta = {
  eyebrow: "Control what follows the fiscal decision",
  title: "See how ZoikoTax can connect telecom fiscal decisions to governed obligations.",
  description:
    "Explore the operating model, governed capabilities and market-pack approach that fit your fiscal-compliance transformation without universal coverage claims or immediate rip-and-replace demands.",
  primaryCta: { label: "Book a Demo", href: "/book-demo" },
  secondaryCtas: [
    { label: "View Current Coverage", href: "#coverage" },
    { label: "Explore Compliance & Filing", href: "/compliance-filing" },
  ],
  footnote:
    "Built for communications businesses that need clear responsibility, controlled handoffs and evidence across complex telecom fiscal workflows.",
};
