export interface TraceNode {
  title: string;
  subtitle: string;
  status: string;
}

export interface ProblemCard {
  title: string;
  description: string;
}

export interface LifecycleStage {
  step: string;
  name: string;
  detail: string;
}

export interface ProofInterface {
  id: string;
  label: string;
  description: string;
}

export interface RegistryRow {
  scope: string;
  sourceAB: string;
  variance: string;
  classification: string;
  materiality: string;
  owner: string;
  status: string;
}

export interface BalanceDimension {
  title: string;
  description: string;
}

export interface TolerancePolicy {
  title: string;
  metric: string;
}

export interface ExceptionQueueStage {
  title: string;
  count: string;
  cardTitle: string;
  cardMeta: string;
}

export interface InterlockItem {
  title: string;
  description: string;
}

export interface ComplianceCard {
  title: string;
  metric: string;
  badge: string;
}

export interface TimelineEvent {
  time: string;
  agent: string;
  event: string;
}

export interface IntegrationCard {
  title: string;
  detail: string;
}

export interface CapabilityRow {
  pack: string;
  scope: string;
  state: string;
}

export interface TrustCard {
  title: string;
  description: string;
}

export interface ValueCard {
  title: string;
  description: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const HERO_DATA = {
  eyebrow: "TELECOM FISCAL RECONCILIATION",
  title: "Reconcile every fiscal outcome with evidence.",
  description:
    "Connect calculated, billed, collected, reported, paid, and accounting/exported positions dynamically. Trace alignment and highlight tax or regulatory variance automatically with complete replayable evidence files.",
  boundaryNote:
    "System Boundary Note: Matched positions represent computational and workflow alignment for analysis and trace. They are not a replacement for authoritative legal tax engines, official regulatory filings, actual bank settlements, or official corporate general ledger records.",
  targetAudience:
    "Built specifically for governed tax, finance, revenue assurance, compliance, and telecom technology operations.",
  traceNodes: [
    { title: "Calculated", subtitle: "Zoiko Engine", status: "Aligned" },
    { title: "Billed", subtitle: "Amdocs BSS", status: "Aligned" },
    { title: "Collected", subtitle: "Lockbox Batch", status: "Variance Triggered" },
    { title: "Reported", subtitle: "Filing Draft", status: "Pending" },
    { title: "Paid", subtitle: "Treasury Confirm", status: "Pending" },
    { title: "GL / Exported", subtitle: "SAP S/4HANA", status: "Awaiting Pre-Run" },
  ] as TraceNode[],
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct Answer",
  title: "What is ZoikoTax Reconciliation?",
  description:
    "It is a specialized telemetry and financial alignment layer engineered to verify communications tax and regulatory compliance cycles. By auditing computational logic against downstream outcomes, it maps discrepancy patterns and logs durable, replayable compliance files.",
  does: [
    "Aggregates tax positions across heterogeneous telecom billing stacks",
    "Correlates transactional tax files with actual general ledger adjustments",
    "Flags material variances outside versioned tolerance ranges",
    "Provides immutable evidence files showing audit trail provenance",
    "Isolates tenant environments and respects data residency requirements",
  ],
  doesNot: [
    "Does not serve as an active statutory general ledger or book-of-record",
    "Does not autonomously authorize payments or execute treasury wires",
    "Does not perform auto-write-offs without governed approval limits",
    "Does not replace legal advisors or determine final statutory tax rates",
    "Does not bypass human control or override active user approvals",
  ],
};

export const HARD_PROBLEMS_DATA = {
  eyebrow: "The Complexity Landscape",
  title: "Why Telecom Reconciliation Resists Generic ERP Tools",
  description:
    "High transaction volume, overlapping billing calendars, regional authority changes, and multi-party carrier liabilities create unique architectural friction.",
  problems: [
    {
      title: "Diverse Lifecycle Clocks",
      description:
        "Real-time network events, batch billing, monthly collections, and quarterly returns create misaligned temporal baselines.",
    },
    {
      title: "Granular Transaction Scales",
      description:
        "Micro-transactions and bundles must be reconciled with state, county, and local tax-jurisdiction summaries.",
    },
    {
      title: "Multi-Party Liabilities",
      description:
        "Sorting carrier, reseller, and end-user obligations across cascading platform roles.",
    },
    {
      title: "Corrections & Amendments",
      description:
        "Prior-period adjustments and active customer credits alter current liability runs without recalculating history.",
    },
    {
      title: "Incumbent Coexistence",
      description:
        "Managing dual outcome tracking where legacy billing engines operate alongside modern stacks.",
    },
    {
      title: "Continuous Audit Demands",
      description:
        "Durable reconstruction of exact facts and system state at the time of calculation.",
    },
  ] as ProblemCard[],
};

export const LIFECYCLE_DATA = {
  eyebrow: "Controlled Process",
  title: "The Ten-Stage Fiscal Governance Loop",
  description:
    "Every verification cycle progresses through deterministic stages, ensuring strict accountability and preserving numeric differences even when within tolerance boundaries.",
  stages: [
    { step: "01", name: "Scope", detail: "Define active billing domains" },
    { step: "02", name: "Ingest", detail: "Securely aggregate file flows" },
    { step: "03", name: "Normalize", detail: "Format disparate structures" },
    { step: "04", name: "Correlate", detail: "Map transactional identifiers" },
    { step: "05", name: "Compare", detail: "Calculate numeric variance" },
    { step: "06", name: "Classify", detail: "Tag deviation behaviors" },
    { step: "07", name: "Investigate", detail: "Identify systemic drivers" },
    { step: "08", name: "Resolve", detail: "Approve ledger corrections" },
    { step: "09", name: "Sign off", detail: "Lock reconciled period states" },
    { step: "10", name: "Prove", detail: "Publish replayable audit maps" },
  ] as LifecycleStage[],
};

export const PROOF_SYSTEM_DATA = {
  eyebrow: "Product Proof System",
  title: "Governance Interfaces",
  description:
    "Interactive, version-controlled surfaces designed to keep operations visible and audit trails unbreakable.",
  interfaces: [
    {
      id: "workspace",
      label: "Reconciliation Workspace",
      description:
        "Operational registry tracking multi-source batch runs, variance percentages, and tolerance status across business units.",
    },
    {
      id: "case-detail",
      label: "Case Detail & Timeline",
      description:
        "Side-by-side mismatch root cause audit with versioned rule tags, assigned reviewers, and immutable evidence hashes.",
    },
    {
      id: "source-position",
      label: "Source Position Panel",
      description:
        "Six-dimensional view correlating calculated, billed, collected, reported, paid, and exported accounting figures.",
    },
    {
      id: "matching-tolerance",
      label: "Matching & Tolerance Policy",
      description:
        "Customizable mathematical boundaries governing federal, state, and timing deviation rules with key verification.",
    },
    {
      id: "exception-queue",
      label: "Exception Queue",
      description:
        "Role-governed operational transitions with SLA age trackers and structured resolution workflows.",
    },
    {
      id: "period-control",
      label: "Period Control & Sign-Off",
      description:
        "Formal dual-approval sign-off mechanism generating locked period state archives and reopen logs.",
    },
    {
      id: "evidence-archive",
      label: "Evidence Archive",
      description:
        "Tamper-evident replay records capturing raw input payloads, rule version hashes, and execution timelines.",
    },
  ] as ProofInterface[],
};

export const WORKSPACE_REGISTRY_DATA = {
  eyebrow: "Active Workspace",
  title: "The Multi-Source Registry",
  description:
    "Trace active runs, compare computed values, and observe mapped outcomes. Autonomous bulk auto-fix is disabled to ensure strict control.",
  rows: [
    {
      scope: "US East - VoIP Run 2026-03",
      sourceAB: "Calculated / Billed",
      variance: "0.04% Deviation",
      classification: "Timing Window Diff",
      materiality: "Within Policy",
      owner: "FinOps Alpha",
      status: "Within policy",
    },
    {
      scope: "EU Central - CTC Audit",
      sourceAB: "Calculated / Reported",
      variance: "Material Mismatch",
      classification: "Unmapped Tax Code",
      materiality: "Review Required",
      owner: "Regulatory Lead",
      status: "Review required",
    },
    {
      scope: "APAC - MNO Feed Pre-Check",
      sourceAB: "Calculated / Paid",
      variance: "No Mismatch Detected",
      classification: "Fully Aligned",
      materiality: "Zero",
      owner: "Audit System",
      status: "Matched",
    },
    {
      scope: "UK North - SIP Trunk Return",
      sourceAB: "Calculated / Billed",
      variance: "Prior-Period Adjust",
      classification: "Post-Close Amendment",
      materiality: "Accepted Exception",
      owner: "Compliance Lead",
      status: "Resolved",
    },
  ] as RegistryRow[],
};

export const CASE_DETAIL_DATA = {
  eyebrow: "Granular Auditing",
  title: "Case Investigation & Evidence Panel",
  description:
    "Examine specific mismatch causes side-by-side. Trace transaction provenance, document reviewer comments, and publish permanent compliance files.",
  caseId: "Case #RC-2026-0814",
  systemFlag:
    "System Flag: Non-standard tax classification detected on high-bandwidth bundle. Deviation exceeds maximum configured state-level tolerance of 0.05%.",
  positions: [
    { label: "Calculated position", value: "Engine Output (Aligned)" },
    { label: "Collected position", value: "Billing Ledger Diff" },
  ],
  investigation:
    "Investigation: This discrepancy is attributed to customer-specific exemption certificate expiration that was registered in Amdocs BSS but not yet propagated to the central tax catalog.",
  dossier: {
    factsHash: "SHA-256: e8d4f...921a",
    ruleVersion: "US-Telco-2026-v2.1",
    reviewer: "Sarah Jenkins (FinOps Lead)",
    outcomeState: "Resolved - Exemption Certificate Re-Verified",
  },
};

export const BALANCE_MODEL_DATA = {
  eyebrow: "Control Balance Model",
  title: "The Six Dimensions of Fiscal Alignment",
  description:
    "Observe alignment and map flows across all six statutory boundaries. Authoritative limits are enforced at the source layer.",
  dimensions: [
    {
      title: "Calculated Position",
      description: "Statutory tax determination output before billing application.",
    },
    {
      title: "Billed Position",
      description: "Applied invoice charges as registered in carrier billing nodes.",
    },
    {
      title: "Collected Position",
      description: "Actual bank clearance summaries and lockbox receipts.",
    },
    {
      title: "Reported Position",
      description: "Pre-filing drafts and submitted jurisdictional tax records.",
    },
    {
      title: "Paid Position",
      description: "Confirmed treasury wire exits and state remittance clearances.",
    },
    {
      title: "GL / Exported Position",
      description: "Mapped journal entries and permanent general ledger adjustments.",
    },
  ] as BalanceDimension[],
};

export const MATCHING_TOLERANCES_DATA = {
  eyebrow: "Matching & Tolerance Controls",
  title: "Versioned Policies & Granular Variance Rules",
  description:
    "Define how data-completeness rules, timing offsets, and calculation version policies map discrepancy patterns.",
  boxTitle: "Active Tolerance Policy Run Mapping",
  policies: [
    { title: "Federal Tax Tolerance", metric: "0.01% Deviation Limit" },
    { title: "Local Sales Offset", metric: "0.05% Max Delta" },
    { title: "Timing Window Margin", metric: "72-Hour Alignment" },
    { title: "Data Completeness Run", metric: "Required Key Verification" },
  ] as TolerancePolicy[],
};

export const EXCEPTION_QUEUE_DATA = {
  eyebrow: "Operations Management",
  title: "Active Exception Queue & Controlled Transitions",
  description:
    "Discrepancies are routed with explicit ownership, age trackers, and structured workflow steps. No system bypasses are allowed.",
  stages: [
    {
      title: "Unassigned Queue",
      count: "3 Pending",
      cardTitle: "Mismatched State Tax Code",
      cardMeta: "Age: 4 Days | Materiality: Over Limit",
    },
    {
      title: "Investigating Mode",
      count: "5 Active",
      cardTitle: "Mismatched State Tax Code",
      cardMeta: "Age: 4 Days | Materiality: Over Limit",
    },
    {
      title: "Awaiting Source Update",
      count: "2 Locked",
      cardTitle: "Mismatched State Tax Code",
      cardMeta: "Age: 4 Days | Materiality: Over Limit",
    },
    {
      title: "Approved Resolution",
      count: "14 Verified",
      cardTitle: "Mismatched State Tax Code",
      cardMeta: "Age: 4 Days | Materiality: Over Limit",
    },
  ] as ExceptionQueueStage[],
};

export const PERIOD_CLOSE_DATA = {
  eyebrow: "Period Governance",
  title: "Structured Close & Multi-Role Sign-Off",
  description:
    "Lock reconciled states with verified review cycles, approval manifests, and reopen tracking. This verifies operational data state and does not claim statutory general ledger closure.",
  cycleTitle: "March 2026 Fiscal Cycle",
  cycleState:
    "State: All scope checks reconciled. Pre-sign-off tests pass. Reopen history reflects zero unexpected amendments.",
  roles: [
    { role: "Reviewer", status: "Confirmed" },
    { role: "Approver", status: "Confirmed" },
  ],
  cta: "Approve & Lock Period",
};

export const TAX_BILLING_INTERLOCK_DATA = {
  eyebrow: "Determination Interlock",
  title: "Active Determination & Billing Feeds",
  description:
    "Transaction files and active tax determinations feed directly into the reconciliation ledger without recalculating, modifying, or bypassing source billing logic.",
  items: [
    {
      title: "Statutory Determination Inputs",
      description: "Preserved rule-version context from original engine.",
    },
    {
      title: "Billing & Adjustment Log",
      description: "Credits, chargebacks, and adjustments mapped directly.",
    },
    {
      title: "Reconciliation Compare",
      description: "Auditable outcome tracking preserves source integrity.",
    },
  ] as InterlockItem[],
};

export const COMPLIANCE_FILING_INTERLOCK_DATA = {
  eyebrow: "Filing & Invoicing Interlock",
  title: "Direct E-Invoicing & Compliance Alignment",
  description:
    "Coordinate reconciliation status with active e-invoicing network clearances, mandate workflows, and drafted compliance-filing positions.",
  cards: [
    {
      title: "CTC Clearances",
      metric: "12,482 Mandates Approved",
      badge: "Aligned",
    },
    {
      title: "Filing Prep Logs",
      metric: "Draft Positions Locked",
      badge: "Awaiting Remittance",
    },
    {
      title: "Compliance Registry",
      metric: "All Notices Mapped",
      badge: "Audit-Ready",
    },
  ] as ComplianceCard[],
};

export const REMITTANCE_INTERLOCK_DATA = {
  eyebrow: "Remittance Verification",
  title: "Instruction Verification & Settlement Tracking",
  description:
    "Map cleared payment confirmations directly to corresponding period summaries. Payment custody or wire generation is strictly out of system scope.",
  boxTitle: "Remittance Interlock Boundary Map",
  tracks: [
    "Verified instructions against bank settlement responses",
    "Payment timeline correlation maps",
    "Confirmed remittance ledger variances",
  ],
  enforces: [
    "No treasury execution capability is held inside the system",
    "No guaranteed settlement or payment processing claims are made",
    "Clear boundaries separate trace records from final bank statements",
  ],
};

export const ACCOUNTING_EXPORT_DATA = {
  eyebrow: "GL & Export Controls",
  title: "ERP General Ledger Identity & Governed Mapping",
  description:
    "Map outcome files to the correct corporate General Ledger structure. Adjustments are logged with versioned models prior to external ledger export.",
  boxTitle: "Active ERP Mapping Configuration",
  configs: [
    { label: "General Ledger Target System", value: "SAP S/4HANA (US-Instance)" },
    { label: "Active Mapping Version", value: "v2026.03.14-Corporate" },
    { label: "Control Totals Hash", value: "SHA-256: 3c9b8...142d" },
    { label: "Last Adjustment Export State", value: "Awaiting General Ledger Handshake" },
  ],
};

export const EVIDENCE_REPLAY_DATA = {
  eyebrow: "Traceability",
  title: "Durable Audit Trails & Historical Replay Map",
  description:
    "Every outcome can be reconstructed from explicit facts and version-controlled policies. All missing data points or unknown properties are logged transparently.",
  boxTitle: "Trace Record Log Timeline",
  timeline: [
    {
      time: "09:04:12 UTC",
      agent: "System Agent",
      event: "Data Ingest: March Amdocs BSS feed loaded. Hash verified.",
    },
    {
      time: "09:05:44 UTC",
      agent: "Compliance Rule Engine",
      event: "Comparison Run: 0.04% Deviation detected on transaction-level tax calculation.",
    },
    {
      time: "11:12:00 UTC",
      agent: "Auditor Lead",
      event: "Manual Review: Flag classified as Timing Offset. Comment logged.",
    },
    {
      time: "14:22:15 UTC",
      agent: "FinOps Approver",
      event: "Approved State: Signed-off. Dossier RC-2026-0814 published.",
    },
  ] as TimelineEvent[],
};

export const SHADOW_ASSURANCE_DATA = {
  eyebrow: "Migration Strategy",
  title: "Compare Legacy Stacks with Zero Production Risk",
  description:
    "Operate 'Shadow Assurance' parallel trails to analyze outcome differences before cutting over live tax systems.",
  boxTitle: "Assurance and Operations Boundaries",
  shadow: [
    "Connect non-production instances with mirrored facts",
    "Flag and explain computational discrepancies before live deployment",
    "Assesses transitional risk with zero impact to transaction billing paths",
  ],
  operational: [
    "Matches active monthly transactions and ledgers",
    "Audits and tracks compliance-filing variances",
    "Governs actual cycle sign-off and permanent audit exports",
  ],
  cta: "Explore Shadow Assurance",
};

export const OPERATING_MODELS_DATA = {
  eyebrow: "Coexistence & Architecture",
  title: "Flexible Integration Layers",
  description:
    "Support native, federated, and embedded setups. Connect with standard billing systems, ERPs, and compliance reporting networks.",
  integrations: [
    { title: "Billing & BSS", detail: "Amdocs, Aria, Stripe Billing" },
    { title: "Tax Engines", detail: "Coexist with Vertex, Sabrix, Avalara" },
    { title: "Filing Systems", detail: "Governed draft exports" },
    { title: "E-Invoicing", detail: "CTC and PEPPOL clearance networks" },
    { title: "Accounting & ERP", detail: "SAP, Oracle, NetSuite journals" },
  ] as IntegrationCard[],
  cta: "Explore Developers",
};

export const COVERAGE_TRUTH_DATA = {
  eyebrow: "Jurisdictional Reality",
  title: "Availability & Capability-Specific Readiness",
  description:
    "Factual capability mappings by regional pack. Mappings represent verified operational coverage, not forward-looking marketing statements.",
  boxTitle: "Illustrative Regional Capability Matrix",
  rows: [
    {
      pack: "Market Alpha Pack",
      scope: "Tax determination, billing comparison",
      state: "Supported Configuration",
    },
    {
      pack: "European CTC Pack",
      scope: "E-invoicing validation & ledger matching",
      state: "Pilot Support",
    },
    {
      pack: "Latin America CTC Pack",
      scope: "Real-time clearance & withholding audit",
      state: "Selective Pilot",
    },
  ] as CapabilityRow[],
  cta: "View Current Coverage",
};

export const AI_BOUNDARY_DATA = {
  eyebrow: "Governed Intelligence",
  title: "AI Assists. Approved Rules Decide. Evidence Proves.",
  description:
    "Clear boundaries separate machine suggestions from deterministic rule execution and durable audit logs.",
  assists: [
    "Highlighting potential variance pattern anomalies",
    "Suggesting common exception classification categories",
    "Synthesizing transaction timelines for speedier human audit",
    "Clustering recurring micro-discrepancies by vendor profile",
  ],
  deterministic: [
    "All variance calculations executed by deterministic mathematical rules",
    "All tolerance threshold comparisons governed by explicit versioned policies",
    "No generative AI writes to ledger tables or marks exceptions resolved",
    "No autonomous adjustment postings made without verified human sign-off",
  ],
};

export const TRUST_DATA = {
  eyebrow: "Security & Governance",
  title: "Enterprise Security & Controls Infrastructure",
  description:
    "Durable architecture built for high-security financial operations. Mapped controls ensure data isolation, least privilege, and non-repudiation.",
  cards: [
    {
      title: "Tenant Context Isolation",
      description: "Logical, secure partition layers separating customer logs.",
    },
    {
      title: "Least Privilege Control",
      description: "Permission-gated file exports and scoped write access.",
    },
    {
      title: "Segregation of Duties",
      description: "Distinct roles for review, approval, and compliance publication.",
    },
    {
      title: "Immutable Audit Trail",
      description: "Cryptographically verified evidence archives for all period closes.",
    },
  ] as TrustCard[],
  cta: "Visit Trust Center",
};

export const VALUE_PROPS_DATA = {
  eyebrow: "Buyer Outcomes",
  title: "Durable Operational Value",
  description:
    "Achieve continuous visibility, clear variance explanations, and audit peace of mind without disruptive core infrastructure overhauls.",
  cards: [
    {
      title: "Resolve Mismatches Early",
      description: "Flag tax catalog configuration issues before billing finalization.",
    },
    {
      title: "Coexist Seamlessly",
      description: "Bridge legacy stacks and new models without operational risk.",
    },
    {
      title: "Continuous Trace Verification",
      description: "Avoid months of audit prep work with automated monthly evidence archives.",
    },
  ] as ValueCard[],
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct Operational Answers",
  description: "Clear limits, direct system answers, and zero inflated claims.",
  faqs: [
    {
      q: "What is telecom tax reconciliation?",
      a: "It is the process of auditing, tracing, and aligning calculated, billed, collected, reported, and paid fiscal records to explain discrepancies.",
    },
    {
      q: "What specific positions connect?",
      a: "It maps calculated engine logs, billing details, lockbox collection records, regulatory filings, treasury bank wire responses, and ERP adjustments.",
    },
    {
      q: "Does matching prove statutory tax correctness?",
      a: "No. Computation and workflow alignment confirm consistent data processing, not legal statutory correctness.",
    },
    {
      q: "Can it run alongside my existing tax engine?",
      a: "Yes. Federated and Shadow Assurance operating models support dual outcomes without replacement.",
    },
    {
      q: "Does the system automatically fix tax errors?",
      a: "No. The system flags variances but requires deterministic rule configurations or authorized human actions to resolve.",
    },
    {
      q: "How is AI used safely?",
      a: "AI acts purely as an advisory assistant for suggesting anomaly classifications, pattern recognition, and prior-period summaries.",
    },
    {
      q: "Are all packs available worldwide?",
      a: "No. Regional pack availability depends on specific compliance readiness and integration states as shown in the Coverage portal.",
    },
    {
      q: "Can prior outcomes be reproduced for audit?",
      a: "Yes. Immutable outcome logs are permanently archived for durable reconstruction of factual system runs.",
    },
  ] as FAQItem[],
};

export const CONVERSION_DATA = {
  eyebrow: "CONNECT THE FISCAL CHAIN",
  title: "See where telecom fiscal outcomes align — and where they need action.",
  description:
    "Examine the operating model, governed capabilities, and market packs that align billing, determination, filing, and general ledger streams with complete replayable evidence.",
  buttons: [
    { label: "Book a Demo", href: "/contact", primary: true },
    { label: "Explore Evidence & Replay", href: "#evidence-replay" },
    { label: "View Current Coverage", href: "#coverage-truth" },
  ],
  note: "Federated and Shadow Assurance paths remain fully available for parallel evaluation runs.",
};
