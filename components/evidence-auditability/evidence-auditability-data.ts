export const HERO_DATA = {
  eyebrow: "Evidence & Auditability for Consequential Fiscal Work",
  headline: "Preserve why the answer was the answer.",
  description:
    "In consequential telecom taxation, a calculation is only as strong as its context. ZoikoTax preserves replayable facts, rules, and approvals to establish comprehensive audit certainty.",
  trustLine:
    "Operational Trust Line: This platform establishes programmatic reproducibility. It does not replace independent qualified tax counsel, nor does it issue binding legal opinions.",
  actions: [
    { label: "Book a Demo", href: "/contact", variant: "primary" as const },
    { label: "Explore Evidence & Replay", href: "#replay", variant: "secondary" as const },
  ],
  provenance: {
    title: "Layered Provenance Chain",
    description: "Traceable operational steps preserved for deterministic replay.",
    layers: [
      { bg: "#5B2A86", title: "1. Outcome", description: "Reconstructible monetary value, liabilities, and reports" },
      { bg: "#4C1C70", title: "2. Approval / State", description: "Human workflow, signature approvals, and state machine logs" },
      { bg: "#3E125D", title: "3. Rule / Content Version", description: "Explicit database rules and effective dated files" },
      { bg: "#320A4E", title: "4. Source Provenance", description: "Verification of ingestion systems, files, or network streams" },
      { bg: "#27053E", title: "5. Jurisdiction & Classification", description: "Programmatic tax and regulatory category boundaries" },
      { bg: "#1D033B", title: "6. Input Facts", description: "Verifiable telemetry, raw transaction lines, and missing gaps" },
    ],
  },
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Core Definitions",
  title: "What is ZoikoTax Evidence & Auditability?",
  paragraph1:
    'Evidence & Auditability is the foundational public trust architecture of the ZoikoTax platform. Instead of acting as a "black box" that returns isolated calculations, the platform generates a structured, immutable link across input telemetry, active tax laws, human approvals, and system state.',
  paragraph2:
    "Crucially, this system preserves and displays incomplete, stale, or conflicted states explicitly. Rather than silently guessing parameters during service dropouts, it tags calculations with clear, discoverable flags to ensure audit integrity.",
  card: {
    title: "State Visibility Core Constraint",
    description: "Unlike systems that resolve anomalies with default assumptions, ZoikoTax makes data quality transparent:",
    points: [
      { color: "#D65A2C", text: 'Missing facts are preserved as "Unresolved"' },
      { color: "#F4A261", text: 'Stale calculations are flagged as "Stale"' },
    ],
  },
};

export interface PrincipleCard {
  number: string;
  title: string;
  description: string;
}

export const PRINCIPLES_DATA = {
  eyebrow: "Governing Methodology",
  title: "Evidence by Design Principles",
  description: "Seven core principles ensuring rigorous historical preservation and operational transparency.",
  cards: [
    { number: "01", title: "Evidence by Design", description: "Metadata collection is built directly into runtime execution blocks, never appended after the fact as secondary logging." },
    { number: "02", title: "Context before conclusion", description: "Every tax decision maps first to raw inputs, active jurisdiction parameters, and pipeline state before final calculation." },
    { number: "03", title: "Historical fidelity", description: "Once finalized, transaction rules, source files, and database indexes are frozen to maintain total historical recall." },
    { number: "04", title: "Explicit uncertainty", description: "Conflicting database parameters, missing dependencies, or restricted states are rendered clearly for operations team review." },
    { number: "05", title: "Authority clarity", description: "Explicitly identifies who approved the tax policy, which country pack was activated, and whether AI acted purely as an advisor." },
    { number: "06", title: "Controlled evolution", description: "Modifications to regulatory parameters are date-tracked with clear parent-child dependencies and change documentation." },
  ] as PrincipleCard[],
};

export interface AnatomyColumn {
  title: string;
  code: string;
  description: string;
}

export const ANATOMY_DATA = {
  eyebrow: "Evidentiary Structure",
  title: "Canonical Evidence Anatomy",
  description: "The structure of a single immutable audit packet in ZoikoTax.",
  columns: [
    { title: "1. Input Facts", code: "telemetry_hash", description: "Raw events, customer metadata, duration logs, and device origin." },
    { title: "2. Jurisdiction", code: "juris_zone_id", description: "Identified taxing authority layers, national, and municipal boundaries." },
    { title: "3. Classification", code: "service_tax_code", description: "Telecommunications categorization mapping (VOIP, text, data bundles)." },
    { title: "4. Rule Versions", code: "rule_matrix_ver", description: "The exact date-stamped ruleset active when the transaction occurred." },
    { title: "5. Source Provenance", code: "origin_signature", description: "Verified sender systems, ingestion pipelines, and transmission records." },
    { title: "6. Approvals / State", code: "auth_workflow_id", description: "State machine sign-offs, manual overrides, and operations authorization." },
    { title: "7. Replay Manifest", code: "deterministic_run_id", description: "Complete parameters required to re-run and confirm output identity." },
  ] as AnatomyColumn[],
  note: "* Note: Separate organizational approval is required to initiate retention extension, data-hold, or specific ledger integrity audits.",
};

export interface TraceNode {
  label: string;
  value: string;
  tag: string;
}

export const TRACEABILITY_DATA = {
  eyebrow: "Visual Governance",
  title: "Traceability Chain & Decision Lineage",
  description: "A transparent visualization of a telemetry payload mapping to a finalized fiscal outcome.",
  tabs: ["Open Lineage", "Inspect Node", "Compare Versions", "Replay Handoff"],
  trackerTitle: "Live Decision Flow Tracker",
  nodes: [
    { label: "Input Fact", value: "EVD-IN-4882", tag: "Verified Ingestion" },
    { label: "Jurisdiction", value: "US-CA-SAC-01", tag: "Multi-Tier Layer" },
    { label: "Classification", value: "VoIP Trunking", tag: "Pck-Approved" },
    { label: "Rule Version", value: "RuleSet v4.12.8", tag: "Effective Dated" },
    { label: "Outcome State", value: "Approved Outcome", tag: "Locked Signoff" },
  ] as TraceNode[],
};

export const HIERARCHY_DATA = {
  eyebrow: "Precedence Rules",
  title: "Authority & Provenance Hierarchy",
  description: "Clear programmatic weight rules showing what constitutes authoritative truth.",
  rows: [
    { title: "1. Authoritative External Source", role: "Direct, authenticated feed from government or official utility APIs", limitation: "Must not be used to bypass system approval boundaries." },
    { title: "2. Governed ZoikoTax Rule / Content", role: "Explicit country pack logic matching activated database dates", limitation: "Must not be represented as autonomous legal counsel." },
    { title: "3. Input / Source-System Fact", role: "Verifiable billing payload and raw transaction metadata", limitation: "Must not be assumed correct if marked 'Unresolved/Conflicted'." },
    { title: "4. Human Approval / State Machine", role: "Authorized operator sign-off documented within compliance workflow", limitation: "Must not bypass core deterministic rulesets." },
    { title: "5. AI Proposal / Explanation", role: "GenAI advisory assistance for anomaly identification and mapping support", limitation: "Must not be represented as authoritative or set monetary values autonomously." },
  ],
};

export const VERSIONING_DATA = {
  eyebrow: "Temporal Tracking",
  title: "Versioning, Effective Context & Supersession",
  paragraph1:
    "Tax regulations undergo continuous updates. ZoikoTax ensures historical continuity by explicitly separating calculation time from effective time.",
  paragraph2:
    'When a retrospective correction is applied, the system does not overwrite the original record. Instead, it creates a structured "superseded" relationship, linking the original transaction directly to its successor, preserving both the audit trail and the context of the original decision.',
  diagram: {
    title: "Effective dated state tracker",
    original: { label: "Original Run (Jan 15):", detail: "Rule Set v3.0 (Superseded by Run 2)" },
    correction: { label: "Correction Run (Feb 10):", detail: "Rule Set v3.1 (Effective Retroactive)" },
  },
};

export const REPLAY_DATA = {
  eyebrow: "Deterministic Simulation",
  title: "Replay Controls & Evidentiary Boundaries",
  description:
    "A replay confirms computational consistency across platforms. However, programmatic replay does not guarantee absolute legal or regulatory compliance in un-activated markets.",
  boundaryList: [
    { ok: true, text: "Verified inputs produce identical outputs in sandbox containers." },
    { ok: true, text: "Identifies which country packs were active during compilation." },
    { ok: false, text: "Does not override local tax auditor discretionary interpretations." },
  ],
  cta: "Explore Evidence & Replay",
  statusCard: {
    title: "Replay simulation statuses",
    statuses: [
      { label: "Replayable", active: true },
      { label: "Partial", active: false },
      { label: "Blocked", active: false },
      { label: "Superseded", active: false },
    ],
    note: "Selecting 'Replayable' allows engineers to rerun historical payload EVD-2026-033 natively and verify calculations in real-time.",
  },
};

export interface StateModelRow {
  attribute: string;
  optimal: string;
  uncertainty: string;
  impact: string;
}

export const STATE_MODEL_DATA = {
  eyebrow: "Structured Metrics",
  title: "Evidence State Model & Uncertainty Matrix",
  description: "Detailed attributes of telemetry records, bypassing arbitrary performance scores.",
  columns: ["Attribute", "Optimal State", "Uncertainty Flag", "Audit Impact"],
  rows: [
    { attribute: "Completeness", optimal: "All parameters present", uncertainty: "Missing non-critical payload facts", impact: "System applies strict placeholder variables, leaving state marked explicitly." },
    { attribute: "Freshness", optimal: "Current active country rules", uncertainty: "Calculated with retroactive parameters", impact: "Triggers correction workflows and updates corresponding ledger files." },
    { attribute: "Conflict", optimal: "Single clear taxing jurisdiction", uncertainty: "Overlapping geographic municipal boundaries", impact: "Preserves overlap state for manual reviewer intervention." },
    { attribute: "Access", optimal: "Fully public trust record", uncertainty: "Restricted data payload due to GDPR", impact: "Only verified operators can inspect decrypted payload values." },
  ] as StateModelRow[],
};

export interface WorkspaceRow {
  id: string;
  capability: string;
  jurisdiction: string;
  date: string;
  completeness: string;
  completenessTone: "green" | "orange";
  replayStatus: string;
  replayTone: "green" | "amber";
  notice: string;
}

export const WORKSPACE_DATA = {
  eyebrow: "Interactive Preview",
  title: "Representative Evidence Control Workspace",
  description: "A high-fidelity interface mockup showcasing real transaction entries and state controls.",
  logTitle: "Control Audit Log",
  logBadge: "Showing 4 critical records",
  filters: ["Filter: All States", "Search entries..."],
  columns: ["Outcome ID", "Capability", "Jurisdiction", "Date", "Completeness", "Replay Status", "Warnings/Notices"],
  rows: [
    { id: "EVD-2026-001", capability: "Tax Determination", jurisdiction: "US-CA-SAC", date: "Jan 12", completeness: "Complete", completenessTone: "green", replayStatus: "Replayable", replayTone: "green", notice: "None" },
    { id: "EVD-2026-014", capability: "E-Invoicing & CTC", jurisdiction: "FR-IDF-PAR", date: "Jan 14", completeness: "Stale", completenessTone: "orange", replayStatus: "Partial", replayTone: "amber", notice: "Stale source configuration active" },
    { id: "EVD-2026-021", capability: "Exemption Audit", jurisdiction: "US-TX-AUS", date: "Jan 15", completeness: "Conflicted", completenessTone: "orange", replayStatus: "Blocked", replayTone: "amber", notice: "Conflicting boundary files detected" },
    { id: "EVD-2026-033", capability: "Compliance Filing", jurisdiction: "GB-LND-CIT", date: "Jan 18", completeness: "Restricted", completenessTone: "orange", replayStatus: "Unavailable", replayTone: "amber", notice: "Restricted payload access (GDPR)" },
  ] as WorkspaceRow[],
};

export const DRAWER_DATA = {
  eyebrow: "Record Deep Dive",
  title: "Evidence Record Detail — EVD-2026-021",
  metadata: {
    title: "Metadata and Provenance Trace",
    rows: [
      { label: "Jurisdiction & Classification", value: "Austin City Municipal District, Telecom Services" },
      { label: "Rules Database ID", value: "rule_db_aus_voip_v4.12.ef" },
      { label: "Payload Ingestion Hash", value: "sha256:7f48e3a2c0bc08f...92da" },
      { label: "Replay Manifest Status", value: "Partially Replayable" },
    ],
  },
  limitations: {
    title: "Evidentiary Limitations",
    description:
      "Data export and sharing are governed by security policy constraints. Sensitive transaction parameters are masked unless explicit decryption clearance is verified by compliance administrators.",
    actions: ["Request Full Access", "Export Manifest"],
  },
};

export interface LifecycleCard {
  title: string;
  description: string;
}

export const LIFECYCLE_CONTRACT_DATA = {
  eyebrow: "Execution Context",
  title: "Cross-Lifecycle Evidence Contract",
  description: "How evidence contributions map across our operational modules.",
  cards: [
    { title: "Tax Determination", description: "Verifies monetary execution values against date-stamped legal rule sets." },
    { title: "Exemptions & Certificates", description: "Validates purchaser documentation state and effective expirations." },
    { title: "Regulatory Obligations", description: "Coordinates non-tax compliance records across state municipal lines." },
    { title: "Compliance & Filing", description: "Documents human review approvals and electronic submission dates." },
    { title: "E-Invoicing & CTC", description: "Bridges global clearance networks and mandate compliance logs." },
    { title: "Remittance Orchestration", description: "Aligns liabilities with downstream general ledger allocations." },
    { title: "Reconciliation", description: "Validates internal calculations against ledger balance audits." },
    { title: "Shadow Assurance", description: "Provides compare-mode evidence before production configuration changes." },
    { title: "Migration & Onboarding", description: "Tracks database transfers and historical verification mapping." },
    { title: "Intelligence & AI", description: "Provides prompt context and verification states for proposed changes." },
  ] as LifecycleCard[],
};

export const INTERLOCK_DATA = {
  eyebrow: "Trust vs. Tools",
  title: "Evidence & Replay Interlock",
  publicTrust: {
    title: "Public Trust Framework",
    description:
      "Our public trust documentation details computational rules, metadata structures, and the general system governance active across the platform. It provides clear visibility into compliance pipelines without exposing real tenant payload data.",
  },
  operational: {
    title: "Operational Replay Engine",
    description:
      "Accessible only inside customer-governed environments, our operational tool sets allow enterprise engineers to recompile historical source data natively, executing live tests against exact past parameters.",
  },
};

export const AI_GOVERNANCE_DATA = {
  eyebrow: "Governed Machine Intelligence",
  quote: '"AI assists. Approved rules decide. Evidence proves."',
  support: {
    title: "AI May Support",
    items: [
      "Analyzing raw billing files for structural anomalies",
      "Proposing categories for unmapped tax lines",
      "Drafting research summaries of municipal tax revisions",
    ],
  },
  restricted: {
    title: "AI May Not Execute",
    items: [
      "Approving live calculation rules autonomously",
      "Overwriting finalized transaction evidence",
      "Altering calculated liability balances without approval",
    ],
  },
};

export interface AssuranceCard {
  tag: string;
  title: string;
  description: string;
}

export const ASSURANCE_MODULES_DATA = {
  eyebrow: "Integration Assurance",
  title: "Migration & Alignment Proof Cards",
  cards: [
    { tag: "Pre-Production Comparison", title: "Shadow Assurance", description: "Runs active calculation streams parallel to incumbent engines, generating comprehensive comparator reports before live platform cutover." },
    { tag: "Ledger Alignment Verification", title: "Ledger Reconciliation", description: "Provides automated analysis comparing compliance output summaries directly with General Ledger allocations to locate tax variance." },
    { tag: "Historical Rules Verification", title: "Migration Assurance", description: "Validates database migrations by mapping legacy rule outputs alongside current ZoikoTax parameters to ensure continuous context." },
  ] as AssuranceCard[],
  footnote: "* Calculations run in assurance modes do not guarantee external municipal approval.",
};

export interface PermissionRow {
  role: string;
  metadataView: string;
  restrictedPayload: string;
  exportCapabilities: string;
  stateAuthority: string;
}

export const PERMISSIONS_DATA = {
  eyebrow: "Operational Access Control",
  title: "Access, Permissions & Export Scope Matrix",
  columns: ["Role", "Metadata View", "Restricted Payload", "Export Capabilities", "State Authority"],
  rows: [
    { role: "Tax Compliance Reviewer", metadataView: "Unrestricted", restrictedPayload: "Masked", exportCapabilities: "Standard Reports", stateAuthority: "Propose Changes" },
    { role: "Finance / Rev Assurance", metadataView: "Unrestricted", restrictedPayload: "Masked", exportCapabilities: "Full Datasets", stateAuthority: "Reconciliation Approval" },
    { role: "Internal Risk & Audit", metadataView: "Unrestricted", restrictedPayload: "Verified Decryption", exportCapabilities: "Complete Manifest", stateAuthority: "No Rule Authority" },
    { role: "Public / External Visitor", metadataView: "System Principles Only", restrictedPayload: "Unauthorized", exportCapabilities: "None", stateAuthority: "Read-Only" },
  ] as PermissionRow[],
};

export const SECURITY_BAND_DATA = {
  eyebrow: "Platform Safeguards",
  title: "Security, Privacy & Data Integrity Boundaries",
  paragraph1:
    "Evidence access is permission-controlled and tenant context remains isolated. Material changes, approvals, and access events retain attributable history where the governed implementation supports it.",
  paragraph2:
    "Retention, residency, deletion, and legal-hold behavior follow approved policy, contract, and applicable service configuration. This page does not promise a fixed duration, immutable storage, certification, or legal outcome.",
  policiesTitle: "Core System Policies",
  policies: [
    "Security Center Policy & Controls",
    "GDPR & Privacy Framework Docs",
    "Governed AI Model Guidelines",
    "Responsible Vulnerability Disclosure",
  ],
};

export interface ExceptionRow {
  title: string;
  badge: string;
  mitigation: string;
}

export const EXCEPTIONS_DATA = {
  eyebrow: "Operational Fallbacks",
  title: "Evidence Exceptions & Automatic Remediation Paths",
  description: "Explicit system action paths triggered when metadata parameters are compromised.",
  rows: [
    { title: "Missing Dependency", badge: "Blocked Replay", mitigation: "System holds calculation run; flags missing parameter explicitly for operations queue." },
    { title: "Stale Source Configuration", badge: "Stale Metadata", mitigation: "Applies retroactive update flags; queues correction run upon rules update." },
    { title: "Conflicting Jurisdictional File", badge: "Overlapping Boundary", mitigation: "Highlights geographic overlapping sectors; requests compliance manager manual select." },
    { title: "Suspected Data Integrity Alteration", badge: "Integrity Verification Fault", mitigation: "Immediately quarantines calculation packet; alerts system administrators for ledger validation." },
  ] as ExceptionRow[],
};

export const PROCUREMENT_CLAIMS_DATA = {
  eyebrow: "Compliance Alignment",
  title: "Procurement Claims & Legal Boundaries",
  description: "A side-by-side verification of approved programmatic statements versus restricted marketing language.",
  approved: {
    title: "Approved Statements (Context & Traceability)",
    items: [
      "Preserves reproducible runtime calculation pathways.",
      "Maintains explicit records of rule versions and changes.",
      "Displays incomplete or missing data parameters transparently.",
    ],
  },
  restricted: {
    title: "Restricted Language (Avoid-Claims)",
    items: [
      "Guarantees data is 'legally admissible' in court without review.",
      "Provides 'absolute compliance' guarantees across untracked territories.",
      "Maintains 'immutable ledgers' without standard administrative rights.",
    ],
  },
};

export interface JourneyStep {
  step: string;
  description: string;
}

export const SALES_JOURNEY_DATA = {
  eyebrow: "Enterprise Onboarding",
  title: "Compliance Integration & Purchase Journey",
  steps: [
    { step: "1. Evaluation", description: "Access the Trust Portal to inspect generic metadata rule configurations." },
    { step: "2. Comparison", description: "Use Shadow Assurance to verify differences against old systems." },
    { step: "3. Onboarding", description: "Map active business databases directly to country-specific rule packs." },
    { step: "4. Deployment", description: "Finalize compliance workflows and enable deterministic audit replay." },
  ] as JourneyStep[],
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA = {
  eyebrow: "Direct Answers",
  title: "Frequently Asked Questions",
  items: [
    { question: "What is Evidence & Auditability?", answer: "It is the structured metadata trace that maps raw input facts, jurisdictions, classification rules, and approval states directly to a finalized monetary calculation outcome." },
    { question: "What parameters are preserved in an audit packet?", answer: "Every packet contains raw telemetry hashes, identified municipal zoning IDs, active rules database versions, provenance signatures, and full replay parameters." },
    { question: "Does an audit trail guarantee legal correctness?", answer: "No. The system ensures mathematical reproducibility and trace logic. True legal or regulatory compliance depends on the validated rulesets approved by your regional tax administrators." },
    { question: "Can a transaction be replayed after a correction occurs?", answer: "Yes. ZoikoTax never overwrites historical results. When a correction run is executed, the original packet is preserved as 'Superseded' and linked directly to its successor." },
    { question: "How are data omissions or conflicts managed?", answer: "Instead of applying default assumptions silently, the system logs the omission explicitly as 'Conflicted' or 'Unresolved', preserving visibility for compliance manager resolution." },
    { question: "Does AI assist with final monetary decisions?", answer: "No. Generative AI components function purely in an advisory capacity, supporting metadata classification and anomaly identification. Final monetary runs are governed by deterministic rules." },
    { question: "Does ZoikoTax guarantee specific retention periods?", answer: "Data retention structures and regulatory hold configurations are managed directly by your organization's system administrators. ZoikoTax acts as the pipeline framework." },
  ] as FAQItem[],
};

export const FINAL_BANNER_DATA = {
  eyebrow: "EVIDENCE FOR CONSEQUENTIAL FISCAL WORK",
  title: "See how ZoikoTax preserves the context behind every governed outcome.",
  description: "Coordinate telemetry facts, rule versions, logical isolation, and programmatic replay controls without administrative uncertainty.",
  actions: [
    { label: "Book a Demo", href: "/contact", variant: "primary" as const },
    { label: "Explore Evidence & Replay", href: "#replay", variant: "secondary" as const },
    { label: "Visit Trust Center", href: "#", variant: "outline" as const },
  ],
};
