export type GovernedState =
  | "Research"
  | "Validation"
  | "Pilot"
  | "Production"
  | "Managed"
  | "Suspended"
  | "Withdrawn"
  | "Status unavailable";

export interface RemittanceRecord {
  id: string;
  market: string;
  qualifier: string;
  capability: string;
  currentState: GovernedState;
  controlledScope: string;
  currentness: "Source current" | "Stale source" | "Conflicting" | "Source unavailable";
  evidencePack: string;
  evidenceStatus: string;
  scopeSummary: string;
  stateMeaning: string;
  packEvidence: string;
  statusCurrentness: string;
  remittanceCapability: string;
  adjacentCoverage: string;
  platformProof: string;
  commercialHandoff: string;
}

export const REMITTANCE_SPECIMEN_RECORDS: RemittanceRecord[] = [
  {
    id: "specimen-a",
    market: "Specimen Market A",
    qualifier: "Synthetic identity · selected",
    capability: "Remittance",
    currentState: "Research",
    controlledScope: "No public controlled scope stated in this specimen.",
    currentness: "Source current",
    evidencePack: "/coverage-overview",
    evidenceStatus: "/status-and-releases",
    scopeSummary: "No controlled scope stated for this specimen; unknown details are omitted.",
    stateMeaning: "Research indicates public investigation only. It is not production-use authority.",
    packEvidence: "Country & Regulatory Pack reference is the governed evidence route.",
    statusCurrentness: "Currentness must be checked against Status & Releases before use.",
    remittanceCapability: "Governed preparation, review, approval, handoff and tracking of supported instructions, references and statuses.",
    adjacentCoverage: "Determine, obligations, E-Invoicing/CTC and managed compliance remain separate.",
    platformProof: "Platform Remittance Orchestration explains architecture—not live market readiness.",
    commercialHandoff: "Book a Demo can confirm customer scenario and contract scope after public readiness review.",
  },
  {
    id: "specimen-b",
    market: "Specimen Jurisdiction B",
    qualifier: "Synthetic identity · selected",
    capability: "Remittance",
    currentState: "Status unavailable",
    controlledScope: "Omitted because governed scope is unknown.",
    currentness: "Stale source",
    evidencePack: "/coverage-overview",
    evidenceStatus: "/status-and-releases",
    scopeSummary: "Omitted because governed scope is unknown.",
    stateMeaning: "Status unavailable indicates current governed truth cannot be confirmed. No production-use authority may be inferred.",
    packEvidence: "Country & Regulatory Pack reference is the governed evidence route.",
    statusCurrentness: "Stale evidence requires review against Status & Releases before use.",
    remittanceCapability: "Governed preparation, review, approval, handoff and tracking of supported instructions, references and statuses.",
    adjacentCoverage: "Determine, obligations, E-Invoicing/CTC and managed compliance remain separate.",
    platformProof: "Platform Remittance Orchestration explains architecture—not live market readiness.",
    commercialHandoff: "Book a Demo can confirm customer scenario and contract scope after public readiness review.",
  },
  {
    id: "specimen-c",
    market: "Specimen Territory C",
    qualifier: "Synthetic identity · selected",
    capability: "Remittance",
    currentState: "Status unavailable",
    controlledScope: "Omitted while authoritative records conflict.",
    currentness: "Conflicting",
    evidencePack: "/coverage-overview",
    evidenceStatus: "/status-and-releases",
    scopeSummary: "Omitted while authoritative records conflict.",
    stateMeaning: "Status unavailable while authoritative records conflict. No positive or negative readiness claim is published.",
    packEvidence: "Authoritative pack records conflict; investigation required.",
    statusCurrentness: "Conflicting source records must be resolved in Status & Releases.",
    remittanceCapability: "Governed preparation, review, approval, handoff and tracking of supported instructions, references and statuses.",
    adjacentCoverage: "Determine, obligations, E-Invoicing/CTC and managed compliance remain separate.",
    platformProof: "Platform Remittance Orchestration explains architecture—not live market readiness.",
    commercialHandoff: "Book a Demo can confirm customer scenario and contract scope after public readiness review.",
  },
];

export interface StatusSemanticItem {
  status: GovernedState;
  iconName: string;
  colorScheme: "purple" | "yellow" | "green" | "red" | "gray";
  publicMeaning: string;
  productionMeaning: string;
  pageBehavior: string;
}

export const STATUS_SEMANTICS: StatusSemanticItem[] = [
  {
    status: "Research",
    iconName: "flask-conical",
    colorScheme: "purple",
    publicMeaning: "Public investigation or initial content work.",
    productionMeaning: "No production-use authority.",
    pageBehavior: "Show state and known source context; suppress unsupported scope.",
  },
  {
    status: "Validation",
    iconName: "list-checks",
    colorScheme: "purple",
    publicMeaning: "Governed validation is in progress.",
    productionMeaning: "Not authorized for production use.",
    pageBehavior: "Show validation label and limitations prominently.",
  },
  {
    status: "Pilot",
    iconName: "test-tube-2",
    colorScheme: "yellow",
    publicMeaning: "Controlled pilot within stated boundaries.",
    productionMeaning: "Only governed pilot use within explicit scope.",
    pageBehavior: "Show pilot qualifier; never present as general availability.",
  },
  {
    status: "Production",
    iconName: "badge-check",
    colorScheme: "green",
    publicMeaning: "Current governed Production state for stated Remittance scope.",
    productionMeaning: "Authoritative only for the stated capability, market and scope.",
    pageBehavior: "Show scope and evidence; never expand by adjacency or inference.",
  },
  {
    status: "Managed",
    iconName: "users-round",
    colorScheme: "green",
    publicMeaning: "A governed managed operating mode is stated.",
    productionMeaning: "Only the exact managed scope and contract are authoritative.",
    pageBehavior: "Separate managed availability from software capability readiness.",
  },
  {
    status: "Suspended",
    iconName: "pause-octagon",
    colorScheme: "red",
    publicMeaning: "Current use is paused under governance.",
    productionMeaning: "No current production-use authority.",
    pageBehavior: "Replace prior positive state and foreground suspension.",
  },
  {
    status: "Withdrawn",
    iconName: "ban",
    colorScheme: "red",
    publicMeaning: "Capability state has been withdrawn.",
    productionMeaning: "No production-use authority.",
    pageBehavior: "Show withdrawn as current truth; retain history only as history.",
  },
  {
    status: "Status unavailable",
    iconName: "circle-help",
    colorScheme: "gray",
    publicMeaning: "Current governed public state cannot be established.",
    productionMeaning: "No production-use authority may be inferred.",
    pageBehavior: "Say unavailable; explain stale, missing or conflicting evidence where known.",
  },
];

export interface BoundaryRowItem {
  capability: string;
  iconName: string;
  permitted: string;
  prohibited: string;
}

export const BOUNDARY_ROWS: BoundaryRowItem[] = [
  {
    capability: "Remittance Coverage",
    iconName: "radar",
    permitted: "Report current public Remittance state and governed scope by explicit market identity.",
    prohibited: "Determine a customer-specific remittance obligation, legal compliance or universal downstream support.",
  },
  {
    capability: "Country & Regulatory Packs",
    iconName: "book-open-check",
    permitted: "Provide governed jurisdictional content and evidence routes where stated.",
    prohibited: "Treat pack existence as proof of current Production readiness or every return, remittance, notice or amendment.",
  },
  {
    capability: "Tax Determination",
    iconName: "calculator",
    permitted: "Reference separate upstream Coverage and activated scope.",
    prohibited: "Assume live determination means Remittance is live—or that Remittance state determines tax.",
  },
  {
    capability: "Regulatory Obligations",
    iconName: "clipboard-check",
    permitted: "Point to separate obligation discovery and calendar capabilities.",
    prohibited: "Claim this page establishes any customer obligation, due item, regulator requirement or legal compliance.",
  },
  {
    capability: "Remittance Orchestration",
    iconName: "workflow",
    permitted: "Explain governed preparation, review, approval, handoff and status tracking.",
    prohibited: "Imply payment execution, bank connectivity, transfer, settlement or fund custody.",
  },
  {
    capability: "E-Invoicing & CTC",
    iconName: "file-digit",
    permitted: "Cross-link separate capability Coverage where available.",
    prohibited: "Imply universal CTC connectivity, endpoint support or inherited availability.",
  },
  {
    capability: "Managed Compliance",
    iconName: "users-round",
    permitted: "Identify a separately governed managed mode when explicitly stated.",
    prohibited: "Infer managed-service availability from software readiness, office presence or architecture.",
  },
  {
    capability: "AI",
    iconName: "sparkles",
    permitted: "Assist research, extraction, investigation and explanation under governance.",
    prohibited: "Act as remittance authority, source of law, autonomous approver or monetary decision-maker.",
  },
  {
    capability: "Existing tax engines",
    iconName: "combine",
    permitted: "Describe coexistence or integration patterns at the platform level.",
    prohibited: "Treat an integration, named engine or technical compatibility as Remittance readiness evidence.",
  },
];

export interface LifecycleStage {
  id: string;
  name: string;
  iconName: string;
  isCurrent?: boolean;
}

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  { id: "receive", name: "Receive", iconName: "inbox" },
  { id: "classify", name: "Classify", iconName: "tags" },
  { id: "attribute", name: "Attribute", iconName: "git-branch" },
  { id: "determine", name: "Determine", iconName: "calculator" },
  { id: "obligate", name: "Obligate", iconName: "clipboard-check" },
  { id: "comply", name: "Comply", iconName: "file-check-2" },
  { id: "remittance", name: "Remittance\nOrchestration", iconName: "workflow", isCurrent: true },
  { id: "reconcile", name: "Reconcile", iconName: "scale" },
  { id: "prove", name: "Prove", iconName: "shield-check" },
];

export interface ProofLinkCard {
  title: string;
  description: string;
  linkText: string;
  href: string;
  iconName: string;
}

export const PROOF_LINK_CARDS: ProofLinkCard[] = [
  {
    title: "Country & Regulatory Packs",
    description: "Inspect governed market content, source provenance and the exact capability scope stated for the pack.",
    linkText: "Explore packs →",
    href: "/coverage-overview",
    iconName: "book-open-check",
  },
  {
    title: "Status & Releases",
    description: "Check currentness, change history, service notices and whether public evidence is stale or unavailable.",
    linkText: "View status →",
    href: "/status-and-releases",
    iconName: "radio-tower",
  },
  {
    title: "Platform Remittance Orchestration",
    description: "Understand preparation, review, approval, handoff and tracking architecture without assuming market readiness.",
    linkText: "See the platform →",
    href: "/remittance-orchestration",
    iconName: "workflow",
  },
  {
    title: "Adjacent capability Coverage",
    description: "Review separate readiness for determination, obligations, E-Invoicing/CTC and managed compliance.",
    linkText: "Compare Coverage →",
    href: "/coverage-overview",
    iconName: "split",
  },
  {
    title: "Developers",
    description: "Evaluate controlled integration patterns and implementation concepts after confirming public capability readiness.",
    linkText: "Developer resources →",
    href: "#",
    iconName: "braces",
  },
  {
    title: "Trust",
    description: "Review the governance, control and evidence architecture supporting sensitive fiscal operations.",
    linkText: "Visit Trust →",
    href: "/evidence-auditability",
    iconName: "shield-check",
  },
];

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    number: "01",
    question: "What does Remittance Coverage mean?",
    answer: "It is the public, capability-specific ZoikoTax readiness view for Remittance by explicit market or jurisdiction identity, current governed state and controlled scope.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "Does Production mean ZoikoTax moves money?",
    answer: "No. Production can apply only to stated Remittance orchestration scope. ZoikoTax does not hold, transfer or settle customer funds and the state does not imply payment execution.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "Is Remittance available wherever Tax Determination is live?",
    answer: "No. Tax Determination and Remittance are separate capabilities with separate states, packs and scopes. Availability never transfers by adjacency.",
  },
  {
    id: "faq-4",
    number: "04",
    question: "Does it prove a customer has a remittance obligation?",
    answer: "No. Coverage does not determine a customer-specific obligation, provide legal advice or prove legal compliance. Customer facts and governed obligation analysis remain separate.",
  },
  {
    id: "faq-5",
    number: "05",
    question: "Are all returns, payment references or downstream channels supported?",
    answer: "No. Only expressly stated controlled scope is supported. Do not infer every return, remittance, notice, amendment, payment reference, endpoint or downstream channel.",
  },
  {
    id: "faq-6",
    number: "06",
    question: "What happens when status is stale, conflicting or unknown?",
    answer: "The page shows Status unavailable with the reason where known. It suppresses unsupported scope and never upgrades missing, stale or conflicting evidence to Production.",
  },
  {
    id: "faq-7",
    number: "07",
    question: "How should buyers verify exact scope?",
    answer: "Start with this ungated public Coverage truth, then inspect the current pack and Status & Releases. Book a Demo can confirm implementation, contract and customer-scenario scope; it never replaces public readiness evidence.",
  },
];
