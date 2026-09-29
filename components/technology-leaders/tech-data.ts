export type Tone = "success" | "warning" | "accent";

export interface Card {
  title: string;
  description?: string;
  /** Small mono label above the title, e.g. "STAGE 01". */
  label?: string;
  badge?: { text: string; tone: Tone };
  /** Link row shown under the title (Direct Operational Handoffs). */
  link?: string;
  /** Small caption pinned to the card bottom (Migration Gates). */
  footer?: string;
}

export interface Action {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  description?: string;
}

const img = (name: string) => `/technology-leaders/${name}.webp`;

export const IMAGES = {
  hero: img("hero-bg"),
  principles: img("pattern-principles"),
  comparison: img("comparison-bg"),
  boundaries: img("pattern-boundaries"),
  isolation: img("pattern-isolation"),
  deployments: img("pattern-deployments"),
  procurement: img("procurement-bg"),
  resilience: img("pattern-resilience"),
  change: img("pattern-change"),
  migration: img("pattern-migration"),
  shadow: img("shadow-bg"),
  evidence: img("pattern-evidence"),
  ai: img("ai-bg"),
  roles: img("pattern-roles"),
  exceptions: img("exceptions-bg"),
  conversion: img("conversion-bg"),
};

const cards = (items: [string, string][]): Card[] => items.map(([title, description]) => ({ title, description }));

export const HERO_DATA = {
  eyebrow: "CTO, CIO & Platform Engineering",
  title: "Adopt telecom fiscal control on governed architecture terms.",
  description:
    "Evaluate how ZoikoTax fits existing enterprise architecture through governed APIs, regional execution, and data-domain controls. Achieve rigorous tenant/legal-entity isolation, flexible deployment patterns, evidence-led operations, and measured migration, while authoritative fiscal outcomes remain strictly bounded by deterministic controls and current Coverage registry.",
  qualifier:
    "Qualifier: This page explains public architecture and operating-model principles, not confidential infrastructure. Exact regions, providers, private configurations, performance targets, and production API contracts require governed confirmation.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" },
    { label: "Explore Developer Resources", href: "#", variant: "secondary" },
  ] satisfies Action[],
  links: [
    { label: "Visit the Trust Center", href: "#" },
    { label: "Explore the Platform", href: "/platform-overview" },
    { label: "View Current Coverage", href: "/coverage-overview" },
  ],
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct Answer",
  title: "What is ZoikoTax for Technology Leaders?",
  description:
    "ZoikoTax is a governed telecom fiscal-control layer designed to integrate reliably with your billing, enterprise ERP, tax engines, and partner systems. It provides robust regional and data-domain orchestration, deterministic authority boundaries, and immutable transaction evidence — allowing engineering teams to modernize without sacrificing regulatory compliance.",
  is: {
    title: "This page is:",
    items: [
      "A high-level public architecture abstraction",
      "A guide to supported integration patterns",
      "An explanation of compliance validation routes",
    ],
  },
  isNot: {
    title: "This page is not:",
    items: [
      "Production deployment topology or security design",
      "A guarantee of universal country regulatory support",
      "Proof that technical transport success equals fiscal correctness",
    ],
  },
};

export const PRINCIPLES_DATA = {
  eyebrow: "Architectural Integrity",
  title: "Core Principles of the Platform",
  description:
    "Every design choice inside ZoikoTax adheres to rigorous engineering principles, ensuring that compliance is an explicit property of the system rather than an afterthought.",
  cards: cards([
    ["Deterministic Authority", "Execution is bounded by hard-coded logic and exact governed rule packs, never guessing outcomes."],
    ["Explicit Uncertainty", "Unsupported markets, missing tax parameters, or error states raise clear blocks rather than silent failure."],
    ["Tenant/Legal Isolation", "Strict logical data separations exist between billing tenants and sovereign tax legal entities."],
    ["Evidence by Design", "Every outcome persists alongside its governing facts, metadata, and validation state for audit replay."],
    ["Governed Content", "Country and regulatory logic is delivered, versioned, and activated under strict change controls."],
    ["Residency-Aware", "Sensitive data remains confined to regional boundaries as defined by local regulatory requirements."],
    ["Operational Resilience", "Designed to degrade gracefully, guaranteeing core transaction services even if auxiliary subsystems disconnect."],
    ["Claims Discipline", "We assert capabilities only where we have verified regulatory validation, refusing broad assertions."],
  ]),
};

export const COMPARISON_DATA = {
  eyebrow: "Transport vs Compliance",
  title: "Distinguish Integration State from Compliance State",
  description:
    "A successful API payload or green HTTP status code is not proof of fiscal correctness. Ensure your operations distinguish between successful delivery and computational authority.",
  rows: [
    {
      layer: "Payload Transport",
      event: "A JSON document is accepted by the REST surface.",
      state: "Transport Accepted",
      meaning: "Network & payload syntax validated; no tax verified.",
    },
    {
      layer: "Operational Processing",
      event: "Normalization pipelines process billing identifiers.",
      state: "Processing State",
      meaning: "Service attribution mapped; regulatory status pending.",
    },
    {
      layer: "Tax Determination",
      event: "Exact calculation rules evaluate tax and duties.",
      state: "Authority State",
      meaning: "Deterministic computations executed based on Coverage rules.",
    },
    {
      layer: "Downstream Reporting",
      event: "Obligation summaries generated for e-invoices.",
      state: "Evidence State",
      meaning: "Immutable evidence manifest committed, ready for audit.",
    },
  ],
};

export const LIFECYCLE_DATA = {
  eyebrow: "Integration Design",
  title: "Sovereign Transaction Lifecycle",
  description:
    "How billing and ERP engines orchestrate step-by-step calculations with duplicate safety, evidence logging, and error handling.",
  cards: [
    {
      label: "STAGE 01",
      title: "Quote / Preview",
      description: "Simulate calculated tax parameters during early bill simulation. Does not commit to audit trails.",
    },
    {
      label: "STAGE 02",
      title: "Commit / Auth Write",
      description: "Execute deterministic final calculations. Records immutable evidence maps.",
    },
    {
      label: "STAGE 03",
      title: "Adjustment / Invoice",
      description: "Process post-transaction amendments. Links to parent evidence for record integrity.",
    },
  ] satisfies Card[],
};

export const BOUNDARIES_DATA = {
  eyebrow: "System Boundaries",
  title: "Respecting Your System of Record",
  description:
    "ZoikoTax does not replace your ERP, general ledger, or billing engines. It operates as a distinct calculation authority.",
  cards: cards([
    ["Billing / BSS / OSS", "Retains commercial ownership of accounts and customer balances. Calls ZoikoTax for calculation inputs."],
    ["ERP / General Ledger", "Remains the ultimate financial system of record. Consumes ZoikoTax evidence logs."],
    ["Existing Tax Engines", "Can coexist with legacy setups, handling telecom-specific packs while legacy systems manage core tax."],
    ["E-Invoicing / CTC", "Downstream mandates consume the evidence output directly, ensuring document-clearance conformity."],
    ["Enterprise Data / Batch", "Maintains analytics and warehousing. Extracts calculation histories via bulk reporting."],
    ["Partner / OEM Systems", "Leverages normalized calculation APIs to surface tax parameters within third-party tools."],
  ]),
};

export const PLATFORM_FIT_DATA = {
  eyebrow: "Embedded Compliance",
  title: "BSS/OSS & OEM Platform Fit",
  description:
    "Surface governed tax calculations directly inside your own application, maintaining isolation and consistent audit logs for downstream tenants.",
  cards: cards([
    ["Tenant Attribution", "Strict logical partitioning tags calculations back to individual sub-tenant business profiles."],
    ["Isolation Verification", "Guarantees database-level domain boundaries so sub-tenant transaction facts remain entirely separated."],
    ["Evidence Continuity", "Ensures downstream partners receive verifiable compliance reports without revealing parent infra."],
  ]),
};

export const ISOLATION_DATA = {
  eyebrow: "Security & Boundaries",
  title: "Tenant & Legal-Entity Isolation",
  description:
    "Strict isolation parameters define our architectural layout. We do not support cross-tenant data pooling or unvouched multi-tenant infrastructure configurations.",
  cards: cards([
    ["Logical Authorization", "Token-based constraints dictate that every request is strictly authenticated against a validated enterprise tenant ID."],
    ["Database Domain Split", "Sub-tenant transaction storage runs in distinct virtual segments, preventing shared record exposures."],
    ["Sovereign Entity Alignment", "Align calculations directly with specific sovereign legal entities for direct, clean compliance reporting."],
  ]),
};

export const RESIDENCY_DATA = {
  eyebrow: "Data Sovereignty",
  title: "Residency & Regional Data-Domains",
  description:
    "Sovereign compliance demands physical data constraints. ZoikoTax supports precise regional data boundary controls.",
  cards: cards([
    ["Where is data processed?", "Processing locations adhere strictly to selected regional data-domains. Global orchestration does not imply centralized storage. Specific configurations require solution confirmation."],
    ["Log & Evidence Storage", "Compliance and log outputs must obey local storage mandates. Verification files reside only inside approved regional zones, preventing global replication."],
    ["In-Country Availability", "Availability varies by activated regulatory packs. Direct local storage options exist for key European and North American environments, subject to architecture review."],
    ["Residency vs Coverage", "Residency refers to raw data storage location; Coverage refers to computational regulatory rules. A system can process Coverage rules for region X while data resides in region Y."],
  ]),
};

const confirm = { text: "Requires Confirmation", tone: "warning" as Tone };

export const DEPLOYMENTS_DATA = {
  eyebrow: "Architectural Fit",
  title: "Regional & Private Deployments",
  description:
    "We frame deployment choices as rigorous architectural questions to find the ideal fit for your platform, rather than transactional commercial SKUs.",
  cards: cards([
    ["Shared Multi-Tenant", "Standard cloud isolation with zero custom infrastructure footprint. Optimized for agile, globally distributed teams."],
    ["Private Dedicated Virtual", "Single-tenant database instances aligned with defined virtual networks. Requires explicit solution confirmation."],
    ["Sovereign OEM Fit", "Embedded execution structures mapped directly to private, partner-vouched network nodes."],
  ]).map((card) => ({ ...card, badge: confirm })),
};

export const HANDOFFS_DATA = {
  eyebrow: "Security & Procurement",
  title: "Direct Operational Handoffs",
  description:
    "We exchange marketing assertions for formal, checkable architectural proof. Route your diligence targets back to verified system paths.",
  cards: [
    { title: "Infrastructure Isolation", link: "Trust & Security Portal" },
    { title: "Data Processing Limits", link: "Privacy & Residency Annex" },
    { title: "Change Governance Trails", link: "Evidence & Auditability" },
    { title: "Autonomous Agent Guardrails", link: "Governed AI Framework" },
    { title: "Operational Redundancy", link: "Business Continuity Plan" },
    { title: "Vulnerability Disclosure", link: "Responsible Disclosure Path" },
  ] satisfies Card[],
};

const faultPath = { text: "Active Fault Path", tone: "success" as Tone };

export const RESILIENCE_DATA = {
  eyebrow: "Fault Tolerance",
  title: "Operational Resilience in Degraded Modes",
  description:
    "A robust system must expect external failures. ZoikoTax maintains core calculation health even if upstream or partner networks fail.",
  cards: cards([
    ["Core Calculation Health", "Core deterministic APIs function locally. No dependencies on non-essential external endpoints to complete calculations."],
    ["AI Assistant Interruption", "If AI assistance experiences downtime, tax classification suggestions default to clean manual fallback states."],
    ["Downstream Connection Failure", "Filing and e-invoicing backlogs are safely queued, auto-retrying once external networks restore."],
  ]).map((card) => ({ ...card, badge: faultPath })),
};

export const OBSERVABILITY_DATA = {
  eyebrow: "Observability",
  title: "Deep Operational Diagnostics",
  description:
    "Maintain comprehensive visibility. We map diagnostic outputs through explicit parameters, completely separate from secure transaction records.",
  items: [
    "Correlation ID: Track a single billing request step-by-step through our network layers.",
    "Structured Problem Details: Follows exact compliance specifications for errors, preventing silent failures.",
    "Source Timestamps & Versions: Every output logs the precise version of active tax calculation logic used.",
  ],
  specimen: {
    title: "Diagnostic Specimen — Illustrative Only",
    lines: [
      ["correlation_id", '"tx-zoiko-881a29f"'],
      ["status", "200"],
      ["authority_state", '"DETERMINED"'],
      ["version_content", '"EU-V2026.14"'],
      ["data_domain", '"EU-Central-1"'],
    ],
    note: "Diagnostic trails exclude raw, personal billing payloads.",
  },
};

export const CHANGE_DATA = {
  eyebrow: "Change Control",
  title: "Strict Version & Release Governance",
  description:
    "Changes inside regulatory engines must be highly predictable. We segregate product codebase changes from country ruleset updates.",
  cards: cards([
    ["Application Codebase", "Core binary releases follow traditional staging, testing, and security scanning paths before activation."],
    ["Country Content Packs", "Tax rule updates are delivered as distinct versioned packs, loaded and verified with zero disruption to the parent app."],
    ["Historical Evidence", "Updating core software does not alter existing, locked transaction files. Old calculations replay under their original rulesets."],
  ]),
};

export const COVERAGE_DATA = {
  eyebrow: "Regulatory Alignment",
  title: "Global Coverage States",
  description:
    "Technical availability does not imply legal production authority. Ensure your regulatory teams have validated active markets.",
  states: ["Research", "Validation", "Pilot", "Production", "Managed", "Suspended", "Withdrawn"],
  note: "Status remains subject to localized parameters. For exact legal applicability, consult current registries.",
  link: { label: "View Coverage Portal →", href: "/coverage-overview" },
};

export const MIGRATION_DATA = {
  eyebrow: "Migration Framework",
  title: "Phased Migration Readiness Gates",
  description:
    "Sovereign migration is a highly structured process, not a cutover event. We deploy explicit, state-vouched gates.",
  cards: cards([
    ["01. Profile Map", "Align sovereign corporate entities with target country computation rules."],
    ["02. Normalise", "Map transaction payloads into standard schemas, validating field accuracy."],
    ["03. Reconcile", "Verify initial tax computations parallel with production outputs."],
    ["04. Shadow Assurance", "Run isolated parallel processing to explain system variances."],
    ["05. Cut over", "Approve transition once shadow variances have been formally documented."],
  ]).map((card) => ({ ...card, footer: "Gate Status" })),
};

export const SHADOW_DATA = {
  eyebrow: "Parallel Validation",
  title: "Shadow Assurance Mode",
  description:
    "Compare calculation outcomes side-by-side with incumbent setups without impact to live production paths.",
  cards: [
    { label: "CONNECT", title: "", description: "Mirror incoming live billing payload flows to ZoikoTax." },
    { label: "COMPARE", title: "", description: "Identify variances in computed outputs automatically." },
    { label: "INVESTIGATE", title: "", description: "Isolate variances due to ruleset differences." },
    { label: "DECIDE", title: "", description: "Provide clear variance evidence before activating cutover." },
  ] satisfies Card[],
  note: "Note: Shadow metrics are observations, not formal audits. Production endpoints are completely isolated.",
};

export const OPERATING_MODELS_DATA = {
  eyebrow: "Operating Architecture",
  title: "Tailored Operating Models",
  description:
    "We align with your corporate hierarchy and active country requirements, defining strict responsibility boundaries.",
  cards: cards([
    ["Native Full-Stack", "ZoikoTax owns calculations and evidence tracking end-to-end where verified rulesets exist."],
    ["Federated Support", "Delegate localized computations to incumbent engines while ZoikoTax normalizes the audit history."],
    ["Managed Compliance", "Operate with dedicated team handoffs and clearly documented transaction controls."],
  ]),
};

export const EVIDENCE_DATA = {
  eyebrow: "Durable Auditing",
  title: "Immutable Evidence & Replay Manifests",
  description:
    "Calculations represent frozen history. We save locked output files that contain the raw inputs, logic version, and tax calculations used.",
  items: [
    "Classification Version: Lock the exact classification parameters applied to raw line items.",
    "Audit Replay: Re-simulate transactions under their original parameters to verify accuracy.",
    "Original Rule State: Lock the active rules and exceptions valid at the time of calculation.",
    "Signed Verification: Output logs are cryptographically sealed to ensure record integrity.",
  ],
};

export const AI_DATA = {
  eyebrow: "Artificial Intelligence Boundary",
  title: "Governed Intelligence Control",
  description: "AI assists. Approved rules decide. Evidence proves.",
  may: {
    title: "AI May Assist:",
    items: [
      "Parse unclassified catalog strings to suggest candidate taxonomies.",
      "Surface anomalies in calculated tax output trends.",
      "Draft initial explanations of variance maps under shadow mode.",
    ],
  },
  mayNot: {
    title: "AI May Not:",
    items: [
      "Silently modify active production rulesets.",
      "Bypass mandatory validation or manual approvals.",
      "Submit final corporate filing returns autonomously.",
    ],
  },
};

export const PROOF_DATA = {
  eyebrow: "Operational Validation",
  title: "Recommended Product-Proof Refinement",
  description: "Labeled as synthetic data for illustrative workspace modeling.",
  caption: "Illustrative Synthetic Data Only",
  columns: ["Specimen ID", "Operating Mode", "Data Domain", "Status"],
  row: { id: "ARCH-EVAL-104", mode: "Federated", domain: "REQUIRES CONFIRMATION", status: "Mixed Coverage" },
};

export const ROLES_DATA = {
  eyebrow: "Access Roles",
  title: "Structured Segregation of Duties",
  description:
    "Security architecture demands role boundaries. No single operator controls the entire compliance pipeline.",
  cards: cards([
    ["Enterprise Architect", "Governs platform topography, integration interfaces, and residency definitions."],
    ["Integration Engineer", "Manages REST connections, batch jobs, and cryptographic webhook pipelines."],
    ["Security Reviewer", "Audits tenant isolation, programmatic access tokens, and residency boundaries."],
    ["Release Approver", "Controls software deployment environments and staging promotions."],
    ["Tax Content Authority", "Reviews, approves, and dates localized computational country rule packs."],
    ["Migration Approver", "Validates shadow data comparisons before authorizing cutover states."],
    ["Audit (Read-Only)", "Accesses completed evidence replay manifests to fulfill audit targets."],
    ["OEM Admin", "Coordinates sub-tenant logical isolation and downstream verification maps."],
  ]),
};

const halted = { text: "Halted State", tone: "accent" as Tone };

export const EXCEPTIONS_DATA = {
  eyebrow: "Exceptional States",
  title: "Handling System Uncertainty",
  description:
    "Every non-ideal condition uses explicit text indicators. We reject silent workarounds and color-only status indicators.",
  cards: cards([
    ["Coverage State Unknown", "Calculation halted: target jurisdiction is missing from the active Coverage registry."],
    ["Residency Unresolved", "Storage blocked: programmatic constraints cannot verify targeted physical storage region."],
    ["Incumbent Sync Failed", "Muted calculation: federated engines failed to return validation parameters."],
  ]).map((card) => ({ ...card, badge: halted })),
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct Architectural Answers",
  items: cards([
    ["Does ZoikoTax replace our existing BSS, OSS, or General Ledger?", "No. ZoikoTax functions as a dedicated calculation and evidence engine. Your current BSS/OSS continues to manage accounts, and ERP/GL remains the financial system of record."],
    ["What integration patterns are supported?", "We support synchronous REST APIs for real-time calculations, idempotent asynchronous bulk processes for large batch runs, and signed cryptographic webhooks for event synchronization."],
    ["Does API availability mean active regional Coverage?", "No. Global endpoint availability is a separate layer from local regulatory validation. A functioning API will reject calculations if target regulatory packs are inactive."],
    ["How is data residency managed?", "Raw data storage constraints are strictly aligned with selected local regions. We segregate residency from general rule processing, allowing compliance execution inside approved physical limits."],
    ["Are private/dedicated infrastructure configurations available?", "Yes. Private dedicated setups exist for sensitive corporate platform profiles. Specific deployment parameters require solution confirmation."],
    ["How does the migration process operate?", "We follow a phased verification pathway covering entity profiling, normalization testing, parallel shadow verification, and formal sign-off gates before cutover."],
    ["Can autonomous AI change calculation rules or file returns?", "No. AI is bounded to advisory roles, such as parsing catalog strings or isolating transaction variances. Authoritative execution depends strictly on deterministic rule sets."],
  ]),
};

export const CONVERSION_DATA = {
  eyebrow: "Ready to Evaluate?",
  title: "Assess ZoikoTax for your telecom platform.",
  description:
    "Discuss integration constraints, operating modes, and local residency requirements with our engineering team.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" },
    { label: "View Coverage", href: "/coverage-overview", variant: "secondary" },
  ] satisfies Action[],
};
