export interface OperationalStep {
  title: string;
  subtitle: string;
  isExternal?: boolean;
}

export interface ComplexityItem {
  id: string;
  title: string;
  description: string;
}

export interface LifecycleStage {
  step: string;
  title: string;
  description: string;
}

export interface ProofModule {
  id: string;
  title: string;
  description: string;
}

export interface InvoiceRecord {
  id: string;
  counterparty: string;
  jurisdiction: string;
  fiscalProfile: string;
  validationStatus: "PASS" | "WARN" | "FAIL";
  adapterState: string;
  externalState: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  detail: string;
}

export interface ContractItem {
  title: string;
  description: string;
}

export interface ValidationItem {
  title: string;
  status: "Pass" | "Pass with Warnings" | "Blocked";
}

export interface ResolutionMarket {
  market: string;
  profileVersion: string;
  network: string;
  adapter: string;
  verifiedDate: string;
}

export interface HandoffStep {
  step: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface ResponseState {
  title: string;
  description: string;
}

export interface StateModelRow {
  track: string;
  statusBadge?: string;
  statusDetail?: string;
  steps?: string[];
}

export interface OperatingModel {
  title: string;
  description: string;
}

export interface CoverageRow {
  jurisdiction: string;
  profileStatus: string;
  adapterVersion: string;
  stage: string;
}

export interface TrustItem {
  title: string;
  description: string;
}

export interface OutcomeItem {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const HERO_DATA = {
  eyebrow: "TELECOM E-INVOICING & CONTINUOUS TRANSACTION CONTROLS (CTC)",
  title: "Control telecom e-invoicing through governed profiles and adapters.",
  description:
    "ZoikoTax introduces deterministic compliance validation, jurisdiction-specific e-invoice schemas, and direct reporting handoffs for complex telecom transaction streams without replacing billing/ERP systems.",
  subDescription:
    "Deploy natively over standard APIs, coexist with legacy tax configurations, or use passive Shadow Assurance to trace compliance integrity at line-item scale before live transmission.",
  disclaimer:
    "Governed by deterministic rule-engines • E-invoice clearance paths are market-specific and profile-dependent.",
  operationalChain: [
    { title: "Invoice Facts", subtitle: "Commercial payload" },
    { title: "Fiscal Context", subtitle: "Situs & validation" },
    { title: "Governed Profile", subtitle: "Tax schema rule" },
    { title: "Handoff Adapter", subtitle: "CTC delivery payload" },
    {
      title: "External Network",
      subtitle: "Outside ZoikoTax control",
      isExternal: true,
    },
  ] as OperationalStep[],
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct answer",
  title: "What is ZoikoTax E-Invoicing & CTC?",
  description:
    "A specialized, deterministic middle layer that handles complex telecom service schemas, validates tax consistency, translates formats to localized profiles, and manages secure external authority handoffs.",
  included: [
    "Telecom-native semantic schema structures",
    "Dynamic mapping to regional CTC profiles",
    "Passive outcome tracing & dry-run assurance",
    "Persistent cryptographic replay evidence",
  ],
  excluded: [
    "Direct legal/accounting advisory services",
    "Replacement of incumbent billing or ERP ledger",
    "Universal guaranteed coverage in all jurisdictions",
    "Guarantees against external clearance rejects",
  ],
};

export const WHY_HARD_DATA = {
  eyebrow: "Telecom complexity",
  title: "Why standard e-invoicing packages break under carrier requirements",
  description:
    "Traditional corporate e-invoice tools are built for static hardware or generic business services. Telecom billing payloads introduce multi-layered variables that cause standard schema validation to reject.",
  items: [
    {
      id: "01",
      title: "Telecom Line Semantics",
      description:
        "Complex service bundles, roaming, and call-detail-record access items defy flat schemas.",
    },
    {
      id: "02",
      title: "Jurisdiction & Situs",
      description:
        "Determining precise local tax authority across mobile networks and boundary handoffs is dynamic.",
    },
    {
      id: "03",
      title: "Tax & Regulatory Charges",
      description:
        "Unified invoices must isolate VAT from USF, municipal fees, and state utility surcharges.",
    },
    {
      id: "04",
      title: "Multiple Profiles",
      description:
        "Single invoices can span multiple legal entities, carriers of record, or billing partners.",
    },
    {
      id: "05",
      title: "Network Diversity",
      description:
        "Different regional authorities utilize completely divergent APIs, transport layers, and schemas.",
    },
    {
      id: "06",
      title: "Response Diversity",
      description:
        "A rejection or validation warning format differs across every government clearance platform.",
    },
  ] as ComplexityItem[],
};

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    step: "01. Receive",
    title: "Receive",
    description:
      "Ingests raw billing facts, CDRs, and pricing outcomes over programmatic APIs.",
  },
  {
    step: "02. Contextualize",
    title: "Contextualize",
    description:
      "Resolves legal entities, counterparties, and dynamic network-situs coordinates.",
  },
  {
    step: "03. Validate",
    title: "Validate",
    description:
      "Executes deterministic tax determination checks and line-level consistency runs.",
  },
  {
    step: "04. Map",
    title: "Map",
    description:
      "Transforms internal records into targeted transaction schemas (UBL, XML, JSON).",
  },
  {
    step: "05. Prepare",
    title: "Prepare",
    description:
      "Assembles cryptographic payloads, hashes, and digital signatures.",
  },
  {
    step: "06. Handoff",
    title: "Handoff",
    description:
      "Transmits structured data packets to supported regional networks or platforms.",
  },
  {
    step: "07. Track",
    title: "Track",
    description:
      "Monitors the transmission thread for real-time acknowledgment or network rejections.",
  },
  {
    step: "08. Resolve",
    title: "Resolve",
    description:
      "Processes external status responses and captures authoritative clearance events.",
  },
  {
    step: "09. Reconcile",
    title: "Reconcile",
    description:
      "Validates returned fiscal tokens and hashes against the general ledger.",
  },
  {
    step: "10. Prove",
    title: "Prove",
    description:
      "Preserves immutable evidence snapshots and re-playable transaction records.",
  },
];

export const PROOF_MODULES: ProofModule[] = [
  {
    id: "Module 01",
    title: "Operations Workspace",
    description:
      "Global view of active telecom streams, filters, validation statuses, and error tracking.",
  },
  {
    id: "Module 02",
    title: "Detail & Evidence Drawer",
    description:
      "Deep inspection tool verifying exactly what facts went in, the profile applied, and what response returned.",
  },
  {
    id: "Module 03",
    title: "Profile & Adapter Matrix",
    description:
      "Dynamic matrix showing system readiness, schema versioning, and validation status by country.",
  },
  {
    id: "Module 04",
    title: "Response & Exception Queue",
    description:
      "Isolate and process external rejections, formatting warnings, and connectivity issues.",
  },
];

export const WORKSPACE_RECORDS: InvoiceRecord[] = [
  {
    id: "INV-2026-001",
    counterparty: "Telco Alpha → Corp A",
    jurisdiction: "Market Alpha",
    fiscalProfile: "Profile XML v2.4.1",
    validationStatus: "PASS",
    adapterState: "REST Adapter v1.8",
    externalState: "Accepted & Cleared",
  },
  {
    id: "INV-2026-002",
    counterparty: "Telco Beta → Corp B",
    jurisdiction: "Market Gamma",
    fiscalProfile: "UBL v2.1 Profile",
    validationStatus: "PASS",
    adapterState: "REST Adapter v1.4",
    externalState: "Reported",
  },
  {
    id: "INV-2026-003",
    counterparty: "Telco Delta → Corp C",
    jurisdiction: "Market Beta",
    fiscalProfile: "Clearance Schema v3",
    validationStatus: "PASS",
    adapterState: "SOAP Adapter v2.0",
    externalState: "Pending Validation",
  },
  {
    id: "INV-2026-004",
    counterparty: "Telco Gamma → Corp D",
    jurisdiction: "Market Alpha",
    fiscalProfile: "Profile XML v2.4.1",
    validationStatus: "WARN",
    adapterState: "REST Adapter v1.8",
    externalState: "Revision Required",
  },
];

export const DETAIL_PANEL_DATA = {
  eyebrow: "Audit Trace",
  title: "Invoice Detail & Evidence Panel",
  description:
    "Review underlying transaction facts, mapping execution logs, and cryptographic hashes stored for replay evidence.",
  identity: {
    documentId: "INV-2026-001",
    issuerEntity: "Zoiko Telecom United US, LLC",
    counterparty: "Enterprise Partners Inc.",
    documentHash: "SHA-256: 3a7f6c...921b",
  },
  logs: {
    targetSchema: "Market Alpha XML schema profile v2",
    mappingStatus: "Transformation Pass",
    validationRun: "No semantic warnings",
  },
  timeline: [
    {
      time: "10:30:12 UTC",
      title: "Billing Fact Ingestion",
      detail: "Validated schema facts",
    },
    {
      time: "10:30:14 UTC",
      title: "Tax Determination Verified",
      detail: "Computed with rule engine v1.4.1",
    },
    {
      time: "10:30:15 UTC",
      title: "Adapter Transmission",
      detail: "Handed off to Market Alpha node",
    },
    {
      time: "10:30:18 UTC",
      title: "Authoritative Clearance",
      detail: "Token: cleared_tx_9210-A",
    },
  ] as TimelineEvent[],
};

export const CONTEXT_CONTRACT_ITEMS: ContractItem[] = [
  {
    title: "Commercial Facts",
    description:
      "Line item charges, usage statistics, durations, and connection units.",
  },
  {
    title: "Legal Entity Details",
    description:
      "Verifying exact corporate taxonomy, registration status, and tax IDs.",
  },
  {
    title: "Service Classification",
    description:
      "Matching product codes with regional telecom tax categories.",
  },
  {
    title: "Jurisdiction & Situs",
    description:
      "Confirming point-of-origin, termination, and billing address rules.",
  },
  {
    title: "Tax Determination",
    description:
      "Verifying computed calculations match the active tax rule-set version.",
  },
  {
    title: "Regulatory Surcharges",
    description:
      "Isolating mandatory utility fees and non-tax obligations from gross sums.",
  },
];

export const VALIDATION_ITEMS: ValidationItem[] = [
  {
    title: "Structural/Schema Validation",
    status: "Pass",
  },
  {
    title: "Semantic & Business Rules",
    status: "Pass with Warnings",
  },
  {
    title: "Fiscal Consistency Logic",
    status: "Pass",
  },
  {
    title: "Jurisdictional Profile Matching",
    status: "Pass",
  },
  {
    title: "Transport-Adapter Readiness",
    status: "Blocked",
  },
];

export const RESOLUTION_MARKETS: ResolutionMarket[] = [
  {
    market: "Market Alpha",
    profileVersion: "Profile XML v2.4.1",
    network: "Authorized Portal API",
    adapter: "Adapter REST v1.8",
    verifiedDate: "Verified Dec 14, 2025",
  },
  {
    market: "Market Beta",
    profileVersion: "Clearance v3.0.1",
    network: "Indirect CTC Hub",
    adapter: "Adapter SOAP v2.1",
    verifiedDate: "Verified Jan 08, 2026",
  },
  {
    market: "Market Gamma",
    profileVersion: "UBL 2.1 Standard",
    network: "Local Clearance Node",
    adapter: "Adapter REST v1.2",
    verifiedDate: "Verified Nov 20, 2025",
  },
];

export const HANDOFF_STEPS: HandoffStep[] = [
  {
    step: "1",
    title: "1. Billing Engine",
    description:
      "Calculates and outputs commercial charges and customer transaction facts.",
  },
  {
    step: "2",
    title: "2. ZoikoTax Layer",
    description:
      "Applies country schema profiles, executes validations, and structures secure handoffs.",
    highlight: true,
  },
  {
    step: "3",
    title: "3. Local Network/CTC",
    description:
      "External authority receives transmission, returns clearance tokens, and issues receipts.",
  },
];

export const RESPONSE_STATES: ResponseState[] = [
  {
    title: "No Handoff",
    description: "Invoice queued; no transformation executed yet.",
  },
  {
    title: "Handed Off",
    description: "Structured payload transmitted to the destination adapter.",
  },
  {
    title: "Acknowledged",
    description: "External node confirms receipt of structured packet.",
  },
  {
    title: "Accepted/Cleared",
    description:
      "External source returns a profile-specific accepted or cleared state where supported.",
  },
  {
    title: "Rejected",
    description: "Transmission blocked by authority schema validation error.",
  },
  {
    title: "Correction Required",
    description: "Validation alert requires credit memo or structural amend.",
  },
  {
    title: "Superseded",
    description: "Invoice withdrawn and replaced by corrected reference.",
  },
  {
    title: "Unknown State",
    description: "No status returned by external system endpoint.",
  },
];

export const STATE_MODEL_ROWS: StateModelRow[] = [
  {
    track: "Validation Run",
    statusBadge: "State Traceable",
    statusDetail: "• Full version history preserved",
  },
  {
    track: "Profile Status",
    statusBadge: "State Traceable",
    statusDetail: "• Full version history preserved",
  },
  {
    track: "Adapter State",
    statusBadge: "State Traceable",
    statusDetail: "• Full version history preserved",
  },
  {
    track: "External State",
    statusBadge: "State Traceable",
    statusDetail: "• Full version history preserved",
  },
  {
    track: "Reconciliation",
    statusBadge: "State Traceable",
    statusDetail: "• Full version history preserved",
  },
];

export const RECONCILIATION_CARDS = [
  {
    title: "Source vs payload",
    description:
      "Ensures no commercial billing facts are lost during system conversion.",
  },
  {
    title: "Computed vs determined",
    description:
      "Validates final schema tax sums correspond directly with the determination output.",
  },
  {
    title: "Handoff vs response",
    description:
      "Compares structured packets with tokens returned by destination networks.",
  },
];

export const EVIDENCE_REPLAY_STEPS = [
  {
    title: "Ingest facts",
    description: "Original payload snapshot preserved",
  },
  {
    title: "Verify version",
    description: "Checks applied tax schema rules version",
  },
  {
    title: "Verify clearance",
    description: "Traces cryptographic authority response",
  },
  {
    title: "Generate manifest",
    description: "Saves signed document trace",
  },
];

export const DEVELOPER_DATA = {
  eyebrow: "Developers",
  title: "Fit the architecture you already operate",
  description:
    "Secure APIs built to manage complex billing transactions. Integrate over traceable endpoints, idempotent requests, and structured errors.",
  guarantees: [
    "Strictly versioned JSON/XML contract payloads",
    "Idempotent transmission tracing to prevent duplicate clearance",
    "Traceable validation decisions for every payload field",
    "Standard test sandbox mirroring external network latency",
  ],
  codeSnippet: `request = {
  intent: "validate_and_transform",
  invoice_id: "INV-2026-001",
  profile: "market_alpha_v2.4",
  facts: "telecom_structured_facts_payload"
}`,
};

export const OPERATING_MODELS: OperatingModel[] = [
  {
    title: "Native Full-Stack",
    description:
      "End-to-end tax calculation, schema transformation, handoff, and evidence.",
  },
  {
    title: "Federated",
    description:
      "Coordinates obligations and schemas while third-party systems compute taxes.",
  },
  {
    title: "Shadow Assurance",
    description:
      "Passively mirrors production data to test outcomes before live transition.",
  },
  {
    title: "OEM / Embedded",
    description:
      "Bypasses external workflows by embedding compliance logic inside your product.",
  },
];

export const COVERAGE_DATA: CoverageRow[] = [
  {
    jurisdiction: "Region Alpha",
    profileStatus: "UBL v2.4 Profile",
    adapterVersion: "Adapter REST v1.8",
    stage: "Production",
  },
  {
    jurisdiction: "Region Beta",
    profileStatus: "Custom XML v3.0",
    adapterVersion: "Adapter SOAP v2.1",
    stage: "Validation",
  },
  {
    jurisdiction: "Region Gamma",
    profileStatus: "Clearance Schema v1.1",
    adapterVersion: "Adapter REST v1.2",
    stage: "Pilot",
  },
];

export const AI_BOUNDARY_DATA = {
  eyebrow: "Governed Artificial Intelligence",
  title: "AI assists. Approved rules decide. Evidence proves.",
  description:
    "We enforce strict boundaries on predictive models to protect sensitive fiscal operations from unchecked errors.",
  may: [
    "Suggest line-item classification mappings",
    "Summarize external clearance rejections",
    "Spot anomalies in transaction datasets",
    "Assist with regulatory-change research",
  ],
  mayNot: [
    "Silently modify gross tax values",
    "Overwrite deterministic validation failures",
    "Bypasses required human approvals",
    "Generate legally binding advisory outputs",
  ],
};

export const TRUST_ITEMS: TrustItem[] = [
  {
    title: "Tenant Isolation",
    description:
      "Tenant and legal-entity boundaries are designed to isolate scoped data and access.",
  },
  {
    title: "Least Privilege",
    description:
      "Access to sensitive invoice data remains permission-scoped and need-to-know.",
  },
  {
    title: "Invoice Data Masking",
    description:
      "Sensitive identifiers and invoice details are minimized or masked in public and operational views where governed.",
  },
  {
    title: "Credential Vaulting",
    description:
      "External credentials and certificates are handled through approved security and runtime controls.",
  },
  {
    title: "Durable Retention",
    description:
      "Evidence history and retention follow approved product, policy, and contractual scope.",
  },
  {
    title: "Local residency",
    description:
      "Processing and residency follow approved deployment, contract, and applicable source-of-truth.",
  },
];

export const BUYER_OUTCOMES: OutcomeItem[] = [
  {
    title: "Coexistence over replacement",
    description:
      "Coexist seamlessly with legacy tax engines. No billing platform cutover required.",
  },
  {
    title: "Traceable evidence",
    description:
      "Clear proof of every handoff and cryptographic token response is preserved.",
  },
  {
    title: "Transparent exception queues",
    description: "Isolate rejections instantly to prevent billing delays.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is ZoikoTax E-Invoicing & CTC?",
    answer:
      "A specialized compliance middle layer validating tax consistency, mapping billing data to localized profiles, and managing secure handoffs.",
  },
  {
    question: "Does this replace my existing billing or ERP system?",
    answer:
      "No. ZoikoTax is designed for non-disruptive coexistence, integrating over APIs with your operational databases.",
  },
  {
    question: "How is global support structured?",
    answer:
      "Capability is activated through distinct country packs. We do not claim universal coverage; availability is verified by market-specific adapters.",
  },
  {
    question: "Are direct authority connections guaranteed?",
    answer:
      "Direct handoffs use authorized local portals or REST endpoints. Non-supported or offline connection statuses are reported transparently.",
  },
  {
    question: "What is the difference between Handoff and Clearance?",
    answer:
      "Handoff is the transmission of the mapped payload. Clearance is the official government validation and receipt issuance.",
  },
  {
    question: "How does the system handle schema rejections?",
    answer:
      "Rejections are captured, mapped to structured errors, and placed in a dedicated exception queue for manual or API-driven resolution.",
  },
  {
    question: "How does this link with Tax Determination?",
    answer:
      "Upstream determination calculations feed directly into localized e-invoice structures, preserving totals.",
  },
  {
    question: "How is AI utilized inside the platform?",
    answer:
      "AI suggests mappings and summarizes rejections, but deterministic rule engines make all final compliance decisions.",
  },
  {
    question: "Can past outcomes be reconstructed for audits?",
    answer:
      "Yes. Every transformation, state decision, and authority response is archived with a signed replay manifest.",
  },
];

export const CONVERSION_DATA = {
  eyebrow: "CONTROL THE TELECOM FISCAL-INVOICE LIFECYCLE",
  title:
    "See how governed e-invoicing and CTC can fit your telecom architecture.",
  description:
    "Explore our operating model, local country packs, and trace-reconcile pipelines without replacing active billing engines.",
};
