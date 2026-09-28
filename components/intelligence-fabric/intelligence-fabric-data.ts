export interface BreadcrumbItem {
  label: string;
  href: string;
}

export const BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/" },
  { label: "Intelligence Fabric™", href: "/intelligence-fabric" },
];

export const HERO_DATA = {
  eyebrow: "Governed AI for Telecom Fiscal Operations",
  headline: "Intelligence around the\ndecision. Deterministic\ncontrol at the decision.",
  description:
    "ZoikoTax Intelligence Fabric™ helps teams monitor change, structure source information, propose classifications, investigate anomalies, forecast scenarios, and explain governed fiscal outcomes — while approved rules, evidence, and required human authority remain in control.",
  compatibility:
    "AI-generated proposals and explanations are advisory unless a governed workflow permits adoption. Deterministic controls, approved content, evidence, and required human authority remain decisive.",
  trustLine: "AI assists. Approved rules decide. Evidence proves.",
  actions: [
    { label: "Book a Demo", href: "/contact", variant: "primary" as const },
    { label: "Explore Evidence & Replay", href: "#evidence-interlock", variant: "secondary" as const },
    { label: "Explore AI Governance", href: "#trust-center", variant: "secondary" as const },
  ],
  operationsGraphic: {
    label: "GOVERNED ASSISTANCE LAYER",
    pulse: "Change signal: Illustrative source update",
    flow: [
      "Intelligence Fabric structures candidate context",
      "Proposal: Candidate classification for review",
    ],
    lock: "Authority state: Human review required",
  },
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Platform Boundary",
  title: "What is ZoikoTax Intelligence Fabric™?",
  description:
    "The Intelligence Fabric is a governed, multi-model AI layer wrapped around the ZoikoTax fiscal engine. It automates high-overhead operational tasks—such as scraping tax authorities, tracing regulatory changes, predicting audit exposure, and explaining variances—without taking execution authority. AI never determines liability or applies rules autonomously.",
  advisory:
    "Advisory protection: AI-generated proposals and explanations remain non-authoritative until adopted through the applicable governed workflow. Deterministic controls, approved evidence, and required human authority remain decisive.",
};

export interface BoundaryItem {
  text: string;
}

export const BOUNDARY_MATRIX_DATA = {
  eyebrow: "Governance Code",
  title: "AI Capabilities and Strict Hard Boundaries",
  isCard: {
    title: "AI IS (Governed Advisory Assistance)",
    items: [
      "Scrape, read, and de-duplicate tax authority postings.",
      "Draft classification mapping proposals based on product terms.",
      "Highlight transactions presenting potential class discrepancies.",
      "Formulate natural-language explanations for transaction tax delta.",
      "Simulate the fiscal outcomes of prospective regulation packages.",
    ] as string[],
  },
  isNotCard: {
    title: "AI IS NOT (Hard-Blocked Execution)",
    items: [
      "Draft law or make unilateral regulatory interpretations.",
      "Change live production tax determination map tables.",
      "Accuse users of non-compliance or execute audits.",
      "Submit official compliance tax returns or e-invoices.",
      "Overwrite or modify cryptographic evidence records.",
    ] as string[],
  },
};

export interface LifecycleStage {
  step: string;
  name: string;
  detail: string;
}

export const LIFECYCLE_DATA = {
  eyebrow: "Continuous Fabric",
  title: "Governing the Telecom Fiscal Lifecycle",
  stages: [
    { step: "01", name: "Receive", detail: "Ingest billing files and change feeds." },
    { step: "02", name: "Classify", detail: "Trace service mapping candidates." },
    { step: "03", name: "Attribute", detail: "Explain complex multiple jurisdictions." },
    { step: "04", name: "Determine", detail: "Deterministic tax execution rules." },
    { step: "05", name: "Obligate", detail: "Evaluate non-tax fiscal duties." },
    { step: "06", name: "Comply", detail: "Prepare and check return files." },
    { step: "07", name: "Reconcile", detail: "Expose tax ledger variances." },
    { step: "08", name: "Prove", detail: "Preserve immutable audit evidence." },
  ] as LifecycleStage[],
};

export interface ChangeRow {
  jurisdiction: string;
  topic: string;
  effectiveDate: string;
  priority: string;
  reviewStatus: string;
  actionContext: string;
}

export const CHANGE_MONITORING_DATA = {
  eyebrow: "Change Intelligence",
  title: "Regulatory Change Monitoring Workflow",
  description:
    "Automatically discover, extract, and prioritize incoming tax regulatory changes globally before they impact your engine configuration.",
  columns: ["Jurisdiction", "Proposed Topic", "Effective Date", "Priority", "Review Status", "Action Context"],
  rows: [
    {
      jurisdiction: "California CPUC",
      topic: "911 Surcharge Update (Prop 24B)",
      effectiveDate: "Oct 01, 2026",
      priority: "Critical",
      reviewStatus: "Review Pending",
      actionContext: "Candidate extracted. Zero production impact.",
    },
    {
      jurisdiction: "Federal FCC",
      topic: "USF Contribution Factor Adjust",
      effectiveDate: "Jan 01, 2027",
      priority: "Medium",
      reviewStatus: "Evaluated Draft",
      actionContext: "Sandbox simulation complete. Evidence preserved.",
    },
  ] as ChangeRow[],
};

export const DOCUMENT_EXTRACTION_DATA = {
  eyebrow: "Text Intelligence",
  title: "Document Extraction & Citations",
  description:
    "Synthesize complex regulatory PDFs into structured, traceable data fields backed by direct source citations.",
  source: {
    fileName: "FCC-24-99-A1.pdf (Original Source)",
    heading: "Section 4(b) - Carrier VoIP Obligations:",
    body: "“All registered telecommunications providers rendering interconnected Voice over IP services shall evaluate local regulatory surcharges on a gross-receipt basis, excluding native data packets...”",
  },
  extracted: {
    title: "Extracted Rule Schema",
    fields: [
      "Target Service: Interconnected VoIP",
      "Surcharge Base: Gross Receipts",
      "Exclusion Parameter: Data Packets",
    ],
    metadata: "AI Metadata Run: ID #fcc-24-99-88 | Date Oct 12, 2026 | Confidence: 94% | Verified by: Admin Checker",
  },
};

export const CLASSIFICATION_DATA = {
  eyebrow: "Tax Mapping",
  title: "Classification Proposals & Governance",
  proposalId: "Proposal ID: #CLS-9942",
  flag: "Uncertainty Detected",
  fields: [
    { label: "INPUT PRODUCT NAME", value: "Lumen VoIP Trunk Bundle" },
    { label: "SUGGESTED MAP CATEGORY", value: "VoIP Surcharged Svc (Class 104)" },
    { label: "AI CONFIDENCE", value: "82%" },
  ],
  conflictContext:
    "Conflict Context: Input terms contain both “broadband” and “voice”, creating potential overlapping definitions. Draft mapping has been routed to human verification.",
  actions: ["Adopt Classification", "Reject / Override", "Simulate Downstream Impact"],
};

export interface AnomalyRow {
  title: string;
  state: string;
  description: string;
  priority: string;
}

export const ANOMALY_DATA = {
  eyebrow: "Investigation Support",
  title: "Anomaly investigation",
  description:
    "Surface unusual patterns for governed investigation without treating a signal as proof of error, fraud, or non-compliance.",
  rows: [
    {
      title: "Illustrative variance signal",
      state: "State: Investigating",
      description:
        "A variance pattern exceeded the configured review threshold for the selected synthetic cohort. Review source facts, classification, rules, and evidence.",
      priority: "Priority: Illustrative",
    },
    {
      title: "Illustrative invoice pattern",
      state: "State: Explained",
      description:
        "The pattern was reviewed against governed context and evidence. No autonomous correction or compliance conclusion was made.",
      priority: "Priority: Illustrative",
    },
  ] as AnomalyRow[],
};

export const FORECASTING_DATA = {
  eyebrow: "Scenario Sandbox",
  title: "Fiscal Forecasting & Policy Simulations",
  description: "Simulate hypothetical rate modifications. No mathematical forecasts are absolute; results are simulated boundaries.",
  inputs: {
    title: "Simulation Inputs",
    items: [
      "Target Package: EU Telecom Surcharge Base (+1.5% V.A.T.)",
      "Horizon Scope: Q3 2026 – Q4 2027",
      "Baseline Transactions: 1.2M Records",
    ],
  },
  outcomes: {
    title: "Simulated Outcomes (Delta)",
    value: "+$184,320.00 Est. Impact",
    notice: "Notice: Values are theoretical projections. This does not represent financial, accounting, or book-of-record statement authority.",
  },
};

export const OUTCOME_EXPLANATION_DATA = {
  eyebrow: "Auditability Trace",
  title: "Governed Outcome Explanations",
  description: "Trace natural-language justifications back to deterministic math rules. Confirmed compliance requires human approval.",
  transactionId: "Transaction Explanation ID: #TX-8831",
  lines: [
    { text: " Texas State Telecom Surcharge assessed at 4.2% total.", tone: "default" as const },
    {
      text: " Input VoIP facts mapped to Tax Code Tx-104 (interconnected service base). Exemption status evaluated: False. Effective Rule Version: 2026.04.1.",
      tone: "muted" as const,
    },
    {
      text: " AI identified alternative rule (Tx-102) with 14% matching weight. Conflicting rule was human-rejected on Oct 02, 2026.",
      tone: "alert" as const,
    },
  ],
  systemNote: "System Note: Computational consistency confirmed. Absolute compliance is governed by human-reviewed tax declarations.",
};

export interface AuthorityLevel {
  level: string;
  title: string;
  description: string;
}

export const AUTHORITY_MODEL_DATA = {
  eyebrow: "Sovereign Control",
  title: "The Governed Authority Hierarchy",
  description: "How mathematical precision, administrative control, and AI advisory components relate within the platform.",
  levels: [
    { level: "Lvl 01", title: "Deterministic Rules", description: "Absolute priority. Evaluated through compiled, human-signed mathematical logic only." },
    { level: "Lvl 02", title: "Human Authorization", description: "No code promote occurs without multi-tenant administrative approval logs." },
    { level: "Lvl 03", title: "Advisory Assistance", description: "Intelligence Fabric proposes, categorizes, and alerts. Completely non-authoritative." },
    { level: "Lvl 04", title: "Evidence Manifest", description: "Every trace outcome is cryptographically signed and stored for total audit visibility." },
  ] as AuthorityLevel[],
};

export const WORKSPACE_PROOF_DATA = {
  eyebrow: "Product Preview",
  title: "Governed Intelligence Workspace",
  description: "Interactive queue of advisory telemetry. Non-committing workspace environment.",
  queueTitle: "Operational Workspace Queue",
  modeBadge: "Synthetic Data Mode",
  tabs: [
    { label: "Change Logs (14)", active: false },
    { label: "Classification Proposes (3)", active: true },
    { label: "Discrepancy Signals (2)", active: false },
    { label: "Saved Simulations", active: false },
  ],
  proposal: "Proposed: Map 'SIP Trunking' to Svc Code 20B",
  actions: ["Approve Proposal", "Verify Source Docs"],
};

export const DETAIL_DRAWER_DATA = {
  eyebrow: "Trace Metadata",
  title: "Intelligence Item Detail & Provenance",
  analysis: {
    title: "Item Analysis: #CLS-9942",
    items: [
      "Underlying Model: Fiscal-Text-v2 (Run #8821)",
      "Evaluated Variables: SIP, Call-routing, Termination-rate",
      "Source Citations: FCC-24-99-A1, Page 12, Paragraph 4",
    ],
  },
  actions: {
    title: "Required Downstream Actions",
    description: "This proposal will affect mapping parameters for 4 active billing rules. Downstream recalculation estimate: $12k shift.",
    note: "★ Maker-Checker rule active. Requires a separate administrator signature.",
  },
};

export interface ReviewStage {
  step: string;
  detail: string;
  highlighted?: boolean;
}

export const REVIEW_PROCESS_DATA = {
  eyebrow: "Operations Audit",
  title: "Review, Adoption & Escalation Lifecycle",
  stages: [
    { step: "01 / Created", detail: "Trace logged and cryptographically saved." },
    { step: "02 / Triaged", detail: "Trace logged and cryptographically saved." },
    { step: "03 / Simulated", detail: "Trace logged and cryptographically saved." },
    { step: "04 / Approved", detail: "Awaiting Maker-Checker authorization pin.", highlighted: true },
    { step: "05 / Evidenced", detail: "Trace logged and cryptographically saved." },
  ] as ReviewStage[],
};

export interface ConfidenceMetric {
  title: string;
  value: string;
  description: string;
}

export const CONFIDENCE_MODEL_DATA = {
  eyebrow: "Uncertainty Metrics",
  title: "Decoupled Confidence & Quality Model",
  description: "AI confidence is mathematically separated from legal coverage or computational readiness. Clear metrics defend audit boundaries.",
  metrics: [
    { title: "AI Model Confidence", value: "84%", description: "Synthesizing input terms and patterns." },
    { title: "Source Document Quality", value: "A / Authentic", description: "Verified directly against authority registry." },
    { title: "Data Freshness", value: "Real-time", description: "Source captured within 4 hours." },
    { title: "Jurisdictional Coverage", value: "Active Pack", description: "No unsupported parameters." },
  ] as ConfidenceMetric[],
};

export interface InterlockCard {
  title: string;
  description: string;
}

export const PLATFORM_INTERLOCKS_DATA = {
  eyebrow: "Silo Integration",
  title: "Cross-Platform Functional Interlocks",
  description: "The Intelligence Fabric wraps and supports core engines without breaking underlying boundaries.",
  cards: [
    { title: "Tax Determination", description: "Engine evaluates math rules. Fabric monitors incoming change candidates." },
    { title: "Filing & Compliance", description: "Form generation remains deterministic. Fabric suggests triage tags." },
    { title: "Evidence & Replay", description: "Evidence stays frozen. Fabric logs proposal trace history." },
    { title: "Shadow Assurance", description: "Compares live outcomes. Fabric explains variance reasons." },
  ] as InterlockCard[],
};

export const EVIDENCE_INTERLOCK_DATA = {
  eyebrow: "Replay System",
  title: "Evidence & Replay Architecture",
  description: "Never rewrite history. The Fabric records proposals as historical context, while deterministic executions remain cryptographically static.",
  manifestId: "REPLAY MANIFEST ID: #REP-2026-88B",
  items: [
    "Original Surcharge Context: Gross-VoIP Input Payload",
    "AI Recommendation Path: Rule Proposal mapped to Version 14C",
    "Deterministic Decision: promotion signed by Admin #2408",
  ],
  auditNotice: "Audit Notice: Historical outcomes cannot be mutated. Regenerating calculated tax returns from raw transaction facts will always return identical outcomes.",
};

export interface RoleRow {
  role: string;
  actions: string;
  limits: string;
}

export const ROLES_MATRIX_DATA = {
  eyebrow: "Operational Risk",
  title: "Roles, Permissions & Maker-Checker Boundaries",
  columns: ["Role Profile", "Workspace Actions", "Governance Limits"],
  rows: [
    {
      role: "Domain Approver",
      actions: "Signs proposals & promotes to production",
      limits: "Strictly bounded by double-signature (maker-checker) rules.",
    },
    {
      role: "AI Governance Officer",
      actions: "Views model run telemetry, configures limits",
      limits: "No authority to view or modify transaction values.",
    },
  ] as RoleRow[],
};

export const OPERATING_MODELS_DATA = {
  eyebrow: "Integration Architecture",
  title: "Operating Models, Integrations & Developer Architecture",
  description: "Deploy to match your existing business-systems structure. API-driven contracts ensure predictable results.",
  shadow: {
    title: "Shadow Assurance Mode",
    description: "Mirror live transaction data fields into a parallel sandbox instance. Explain every variance compared to your current tax engine before going live.",
  },
  developer: {
    title: "Developer API Contract",
    code: 'POST /v1/proposals/classify\nPayload: { item: "VOIP_CONN", evidence: true }\nResponse: { proposed_class: 104, confidence: 0.84 }',
    action: "Explore Developer Docs",
  },
};

export interface CoverageMarket {
  name: string;
  status: string;
}

export const COVERAGE_DATA = {
  eyebrow: "Coverage Boundaries",
  title: "Capability-specific coverage & readiness",
  description: "Capability deployment remains subject to governed market, profile, adapter, and product readiness. AI confidence does not expand approved coverage.",
  markets: [
    { name: "Market A", status: "Illustrative" },
    { name: "Market B", status: "Status unavailable" },
    { name: "Market C", status: "Illustrative" },
  ] as CoverageMarket[],
};

export const TRUST_CENTER_DATA = {
  eyebrow: "TRUST & GOVERNANCE",
  title: "Trust, Security, Privacy & AI Governance",
  cards: [
    {
      title: "Tenant & Entity Boundaries",
      description: "Data access and processing remain scoped by tenant, legal entity, permission, deployment, and contractual controls.",
    },
    {
      title: "Governed Data Use",
      description: "Model and data handling follow approved use-case, privacy, security, and retention controls; this page does not promise a universal training or storage policy.",
    },
  ],
  actions: ["Visit Trust Center", "Explore AI Governance"],
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA = {
  eyebrow: "Direct Answers",
  title: "Frequently Asked Questions",
  items: [
    {
      question: "What does the Intelligence Fabric do?",
      answer: "It provides advisory assistance—such as monitoring regulatory changes, proposing service classifications, and explaining calculation deltas—without taking execution authority.",
    },
    {
      question: "Is ZoikoTax an autonomous tax decision-maker?",
      answer: "No. The system does not make autonomous tax decisions or promote rate changes directly. A human administrator must verify and approve every proposal before it applies to production billing.",
    },
    {
      question: "Does the system verify its own predictions?",
      answer: "Every classification or surcharge suggestion maps back to explicit, citation-supported document summaries with a clear math trace. This allows administrators to verify outcomes reliably.",
    },
  ] as FAQItem[],
};

export const CONVERSION_DATA = {
  eyebrow: "READY TO MODERNIZE TELECOM FISCAL COMPLIANCE?",
  title: "See how ZoikoTax Intelligence Fabric™ can support your telecom fiscal operations.",
  description: "Explore evidence-linked change monitoring, product mapping proposals, anomaly investigation, and policy simulations without losing operational authority.",
  actions: [
    { label: "Book a Demo", href: "/contact", variant: "primary" as const },
    { label: "Explore Evidence & Replay", href: "#evidence-interlock", variant: "secondary" as const },
    { label: "Explore AI Governance", href: "#trust-center", variant: "secondary" as const },
  ],
};
