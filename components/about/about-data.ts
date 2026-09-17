import {
  ClipboardCheck,
  Cpu,
  Eye,
  FileText,
  FlaskConical,
  GitBranch,
  Globe,
  Layers,
  Link,
  MessageSquare,
  Phone,
  Radio,
  RefreshCw,
  Rocket,
  Settings,
  Shield,
  ShieldCheck,
  Smartphone,
  SquareCheckBig,
  Target,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Card = { title: string; description: string };
type IconCard = Card & { icon: LucideIcon };

export const heroContent = {
  eyebrow: "About ZoikoTax",
  title: "Building connected fiscal infrastructure for global telecommunications.",
  body: "Telecommunications is global, complex and continuously changing. The fiscal systems supporting it must be able to handle that complexity with control, evidence and interoperability. ZoikoTax is being built as telecom-specific tax and regulatory infrastructure - connecting determination, obligations, compliance, reconciliation and evidence within one governed platform.",
};

export const directAnswer =
  "ZoikoTax is a global telecom tax and regulatory obligations platform being built to help communications businesses determine fiscal treatment, manage regulatory obligations, operate compliance workflows, reconcile outcomes and preserve the evidence behind consequential decisions.";

export const buildingBlocks: Card[] = [
  {
    title: "Determine",
    description:
      "Determine applicable telecom taxes, fees, levies and supported fiscal charges through governed rules.",
  },
  {
    title: "Classify",
    description:
      "Classify communications services and regulatory-revenue treatment using controlled product semantics.",
  },
  {
    title: "Resolve",
    description:
      "Resolve jurisdiction, situs, authority and fiscal responsibility from relevant transaction facts.",
  },
  {
    title: "Obligate",
    description:
      "Identify registrations, reports, filings and other supported obligations that follow from the decision.",
  },
  {
    title: "Comply",
    description:
      "Prepare and govern supported compliance, filing and e-invoicing/CTC workflows.",
  },
  {
    title: "Reconcile",
    description:
      "Connect transaction, invoice, fiscal, filing, remittance and accounting outcomes.",
  },
  {
    title: "Prove",
    description:
      "Preserve source provenance, rule versions, approvals and evidence for historical replay.",
  },
  {
    title: "Modernize",
    description:
      "Compare incumbent outcomes through Shadow Assurance before changing production paths.",
  },
];

export const scope = {
  is: [
    "Telecom-native fiscal infrastructure",
    "A connected tax-and-obligations control plane",
    "Evidence-first and replay-oriented",
    "Engine-agnostic and integration-led",
    "Global in architecture with governed market activation",
    "AI-assisted within bounded authority",
    "Designed for consequential enterprise workflows",
  ],
  isNot: [
    "A generic consumer tax calculator",
    "A replacement for the customer's entire BSS or OSS",
    "An ERP or general-ledger replacement",
    "A payment processor",
    "A claim that every capability is available everywhere",
    "An autonomous AI that independently creates tax law",
    "A substitute for legal, tax, accounting or regulatory advice",
  ],
};

export const customerOrganizations: IconCard[] = [
  {
    icon: Radio,
    title: "MNOs",
    description:
      "National and multinational carriers managing high transaction volumes and multiple fiscal authorities.",
  },
  {
    icon: Smartphone,
    title: "MVNOs",
    description:
      "Virtual operators requiring clear separation of commercial models and downstream obligations.",
  },
  {
    icon: Layers,
    title: "MVNEs & MVNAs",
    description:
      "Enablement and aggregation platforms supporting multiple operators and commercial structures.",
  },
  {
    icon: Phone,
    title: "VoIP Providers",
    description:
      "Providers managing communications-tax exposure across voice, IP-based and distributed services.",
  },
  {
    icon: MessageSquare,
    title: "UCaaS & CPaaS",
    description:
      "Platforms combining voice, messaging, APIs, software and bundled communications services.",
  },
  {
    icon: Wifi,
    title: "Broadband & ISP",
    description:
      "Fixed and wireless connectivity providers managing recurring billing and applicable fiscal obligations.",
  },
  {
    icon: Cpu,
    title: "IoT & M2M",
    description:
      "Connected-device operators managing cross-border transactions and complex fiscal treatment.",
  },
  {
    icon: Globe,
    title: "Digital Communications",
    description:
      "Platforms providing any communications capability with applicable regulatory or tax exposure.",
  },
];

export const enterpriseFunctions: [string, string][] = [
  ["Tax & Regulatory Compliance", "Determine what applies, manage what is due and preserve why."],
  ["CFO & Finance", "Control liability, recovery, accrual, reconciliation and financial outcomes."],
  [
    "Billing & BSS Engineering",
    "Integrate governed fiscal decisions into transaction, billing and invoice flows.",
  ],
  [
    "Revenue Assurance",
    "Identify classification, taxation, recovery and reconciliation discrepancies.",
  ],
  [
    "Product & Commercial",
    "Understand fiscal consequences before launching services, bundles and market propositions.",
  ],
  [
    "CTO / CIO / Platform Engineering",
    "Govern APIs, integration architecture, deployment and operating models.",
  ],
];

export const brokenToday: [string, string, string][] = [
  [
    "Complex services",
    "Voice, messaging, broadband, VoIP, UCaaS and bundles may require different fiscal treatment.",
    "Governed telecom service and fiscal classification.",
  ],
  [
    "Jurisdiction complexity",
    "Relevant location facts and situs rules vary by service and authority.",
    "Traceable jurisdiction resolution using governed rules.",
  ],
  [
    "Responsibility ambiguity",
    "Carrier, wholesaler, reseller, MVNO and MVNE roles can alter fiscal responsibility.",
    "Explicit responsibility resolution tied to legal entities.",
  ],
  [
    "Tax is only one obligation",
    "Determination may trigger registration, reporting, invoicing, filing and evidence requirements.",
    "Connect the decision to the obligations that follow.",
  ],
  [
    "Continuous regulatory change",
    "E-invoicing mandates, rate changes and new obligations require governed content updates.",
    "Versioned, approved content with effective dating and rollback.",
  ],
  [
    "Weak historical evidence",
    "Organizations may know the amount but struggle to reconstruct the rule, version and approvals.",
    "Evidence and replay designed into the decision.",
  ],
  [
    "Reconciliation gaps",
    "Transaction, billing, filing and ledger outcomes may not align without a shared control layer.",
    "A connected reconciliation layer across fiscal lifecycle stages.",
  ],
  [
    "High-risk modernization",
    "Changing production tax engines is high-risk without parallel validation before cutover.",
    "Shadow Assurance enables governed comparison and controlled transition.",
  ],
];

/** Steps flagged `milestone` are highlighted in the decision chain. */
export const decisionChain: (Card & { milestone?: boolean })[] = [
  { title: "Product / Offer", description: "Service definition and commercial structure" },
  { title: "Transaction Facts", description: "Governed payload from billing or BSS" },
  { title: "Classification", description: "Service and fiscal type resolved" },
  { title: "Jurisdiction", description: "Situs, authority and responsibility resolved" },
  { title: "Determination", description: "Deterministic monetary execution", milestone: true },
  { title: "Obligations", description: "Filing, reporting and registration duties" },
  { title: "Compliance", description: "Governed workflows and state management" },
  { title: "Reconciliation", description: "Transactional and ledger alignment" },
  { title: "Evidence", description: "Replayable facts, versions and approvals", milestone: true },
];

export const industryShifts: [string, string][] = [
  [
    "Rate engine focused on monetary calculation only",
    "Fiscal infrastructure: what applies, why, who is responsible, what follows, and provable",
  ],
  [
    "Fragmented systems each knowing part of the story",
    "A connected decision chain from classification to evidence",
  ],
  [
    "Late tax review after product launch",
    "Earlier product governance with fiscal consequences assessed before launch",
  ],
  [
    "Post-audit reconstruction from incomplete records",
    "Evidence by design - preserved at the time of decision",
  ],
  [
    "Big-bang replacement of incumbent tax engines",
    "Measured modernization via federated operation and Shadow Assurance",
  ],
  [
    "Opaque automation with unbounded AI authority",
    "Bounded intelligence: AI assists, approved rules decide, evidence proves",
  ],
  [
    "Tax-only outcomes without downstream obligation management",
    "Tax and regulatory obligations connected in one governed lifecycle",
  ],
  [
    "Generic ERP or non-telecom tax tools applied to communications",
    "Telecom-native infrastructure designed for the structural complexity of communications",
  ],
];

export const mission = {
  title: "To make telecom fiscal compliance clear, connected and provable.",
  principles: [
    ["Clarity over ambiguity", "Expose uncertainty instead of silently guessing"],
    ["Evidence over assertion", "Outcomes should be explainable and reproducible"],
    ["Control over automation theater", "Automate where safe; govern where consequential"],
    ["Telecom depth over generic breadth", "Design for communications products"],
    ["Interoperability over lock-in", "Fit into existing enterprise architectures"],
  ] as [string, string][],
};

export const vision = {
  title:
    "A global telecommunications industry where every consequential fiscal decision can be understood, governed and reproduced.",
  body: "Establish a common fiscal-control layer for global telecommunications - connecting transactions, tax, regulatory obligations, compliance and evidence so communications businesses can expand and operate with greater confidence across markets.",
};

export const principles: IconCard[] = [
  {
    icon: Radio,
    title: "Telecom First",
    description:
      "Every concept, data model and decision workflow is designed for communications businesses, not adapted from generic tax tooling.",
  },
  {
    icon: FileText,
    title: "Evidence by Design",
    description:
      "Every determination preserves input facts, rule versions, classification, jurisdiction and approvals - by default, not as an afterthought.",
  },
  {
    icon: Target,
    title: "Determinism Where It Matters",
    description:
      "Authoritative monetary outcomes are governed by deterministic rules. Probabilistic AI does not make consequential fiscal decisions.",
  },
  {
    icon: Eye,
    title: "Explicit Uncertainty",
    description:
      "Unsupported, ambiguous or conflicted states are surfaced, not silently resolved. Operators retain control over uncertain outcomes.",
  },
  {
    icon: Link,
    title: "Interoperability",
    description:
      "Designed to coexist with or replace incumbent engines. ZoikoTax fits existing BSS, ERP and billing architectures.",
  },
  {
    icon: GitBranch,
    title: "Governed Evolution",
    description:
      "Content, rules, AI models and coverage expand through versioned, reviewed processes - not unilateral updates.",
  },
];

export const operatingModels: Card[] = [
  {
    title: "Native",
    description:
      "Use ZoikoTax as the authoritative determination capability where production support is approved. Only where supported by current capability status and contract.",
  },
  {
    title: "Federated",
    description:
      "Retain an incumbent engine while ZoikoTax manages supported downstream fiscal control. The incumbent has not been replaced.",
  },
  {
    title: "Shadow Assurance",
    description:
      "Compare incumbent and ZoikoTax outcomes without affecting production billing. Shadow outputs are not automatically authoritative.",
  },
  {
    title: "OEM / Embedded",
    description:
      "Expose approved ZoikoTax capabilities through partner or platform experiences. Preserve tenant, evidence and contractual boundaries.",
  },
  {
    title: "Managed Compliance",
    description:
      "Combine platform capabilities with approved operational compliance services where offered. Availability is jurisdiction- and service-specific.",
  },
];

export const coverageStatuses: IconCard[] = [
  {
    icon: ShieldCheck,
    title: "Production",
    description:
      "Approved production capability under applicable release and contractual conditions.",
  },
  {
    icon: Settings,
    title: "Managed",
    description: "Available through approved managed operating models only.",
  },
  {
    icon: Rocket,
    title: "Pilot",
    description: "Limited controlled deployment; not general availability.",
  },
  {
    icon: ClipboardCheck,
    title: "Validation",
    description: "Under technical and regulatory validation; not production.",
  },
  {
    icon: FlaskConical,
    title: "Research",
    description: "Research stage; not production capability.",
  },
];

export const governedAi = {
  may: [
    "Regulatory-change detection",
    "Document extraction",
    "Classification proposals (governed review required)",
    "Anomaly investigation",
    "Explanation of governed outcomes",
  ],
  mustNot: [
    "An authority that creates or amends production law",
    "The sole monetary authority for fiscal outcomes",
    "Able to approve filings or remittances",
    "A replacement for authoritative source records",
    "Capable of independently expanding coverage",
  ],
};

export const trustControls: IconCard[] = [
  {
    icon: SquareCheckBig,
    title: "Governed Tax Content",
    description:
      "Country and regulatory content is versioned, reviewed and controlled before activation.",
  },
  {
    icon: Zap,
    title: "Deterministic Monetary Execution",
    description:
      "Authoritative monetary outcomes are not delegated to unbounded probabilistic AI.",
  },
  {
    icon: RefreshCw,
    title: "Evidence & Historical Replay",
    description: "Decision context is designed to remain traceable and reproducible for audit.",
  },
  {
    icon: Eye,
    title: "Explicit Uncertainty",
    description:
      "Unsupported, ambiguous or conflicted states are surfaced - not silently resolved.",
  },
  {
    icon: Shield,
    title: "Tenant & Entity Isolation",
    description: "Customer and legal-entity boundaries are treated as architectural controls.",
  },
  {
    icon: Cpu,
    title: "Controlled AI Assistance",
    description:
      "AI operates inside defined authority and governance boundaries, never as sole decider.",
  },
];

export const aboutFaqs = [
  {
    question: "What is ZoikoTax?",
    answer:
      "ZoikoTax is telecom fiscal-compliance infrastructure for determination, obligations, filing, e-invoicing, reconciliation and evidence.",
  },
  {
    question: "Who is ZoikoTax designed for?",
    answer:
      "MNOs, MVNOs, MVNEs/MVNAs, VoIP providers, UCaaS and CPaaS providers, broadband operators, connected-service providers and other communications businesses, together with their tax, finance, compliance and technology teams.",
  },
  {
    question: "What problem does ZoikoTax solve?",
    answer:
      "ZoikoTax addresses fragmentation between telecom transaction data, product classification, jurisdiction, fiscal responsibility, tax determination, regulatory obligations, compliance workflows, reconciliation and evidence.",
  },
  {
    question: "Does ZoikoTax replace existing tax engines?",
    answer:
      "Not necessarily. The platform is designed to support native, federated and Shadow Assurance operating models so organizations can integrate with existing engines and validate outcomes before migration.",
  },
  {
    question: "How does ZoikoTax use AI?",
    answer:
      "Governed AI may support regulatory research, extraction, classification proposals, investigation and explanation. Authoritative fiscal outcomes remain subject to governed deterministic rules and workflows.",
  },
  {
    question: "Is ZoikoTax available globally?",
    answer:
      "ZoikoTax is architected for global use, but availability varies by jurisdiction and capability. Current production availability is governed through approved country and regulatory packs.",
  },
  {
    question: "What makes it different from a rate engine?",
    answer:
      'A rate engine answers "how much tax?" ZoikoTax is designed to answer what applies, why, who is responsible, what obligations follow, and whether the outcome can be proven and replayed - across the full fiscal lifecycle.',
  },
];
