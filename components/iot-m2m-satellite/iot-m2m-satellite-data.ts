export type BadgeTone = "neutral" | "warning" | "success";

export interface TitledCard {
  title: string;
  description: string;
}

export interface TableColumn {
  label: string;
}

export interface TableRow {
  cells: [string, string, string];
  badge?: { label: string; tone: BadgeTone };
  /** Rendered as plain accent text instead of a badge. */
  accent?: string;
}

const img = (name: string) => `/iot-m2m-satellite/${name}.webp`;

export const IMAGES = {
  hero: img("hero-bg"),
  complexity: img("pattern-complexity"),
  lifecycle: img("lifecycle-bg"),
  ontology: img("pattern-ontology"),
  legalEntity: img("pattern-legal-entity"),
  obligations: img("pattern-obligations"),
  reconciliation: img("pattern-reconciliation"),
  evidence: img("evidence-bg"),
  integrations: img("pattern-integrations"),
  coverageCard: img("coverage-card"),
  faq: img("pattern-faq"),
  banner: img("banner-bg"),
};

export const HERO_DATA = {
  eyebrow: "EMBEDDED FISCAL CONTROL",
  title: "Govern connected-device fiscal complexity with evidence",
  description:
    "ZoikoTax helps communications businesses with IoT, M2M, and satellite models connect governed product ontology, device and connectivity facts, jurisdiction, responsibility, fiscal determination, regulatory obligations, reconciliation, and evidence.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" as const },
    { label: "Explore Platform", href: "/#platform", variant: "secondary" as const },
    { label: "View Coverage →", href: "/#coverage", variant: "secondary" as const },
  ],
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "THE GOVERNED MODEL DEFINED",
  title: "How ZoikoTax resolves connected-service complexity",
  description:
    "Connectivity can be embedded in devices, platforms, subscriptions, hardware, software, or broader commercial propositions. Device, network, account, site, usage, and transaction facts remain governed inputs; no single label or location establishes fiscal treatment.",
};

export const CHALLENGES_DATA = {
  eyebrow: "Structural Challenges",
  title: "Connected-product fiscal complexity is structural",
  description:
    "Simplified general tax engines fail when exposed to the technical realities of IoT/M2M deployments.",
  cards: [
    {
      title: "1. Embedded Commercial Models",
      description:
        "Hardware bundled with lifetime, prepaid, or subscription-based cellular access requires structured classification splits.",
    },
    {
      title: "2. Distributed & Changing Geography",
      description:
        "Devices operating across state, national, and oceanic boundaries challenge traditional point-of-sale tax rules.",
    },
    {
      title: "3. Ontology & Component Complexity",
      description:
        "Separating device hardware values from continuous airtime, software platform, and edge intelligence services.",
    },
    {
      title: "4. Multiple Overlapping Authorities",
      description:
        "Coordinating cellular telecom excise taxes with state and local sales taxes across multiple administrative tiers.",
    },
    {
      title: "5. Responsibility Ambiguity",
      description:
        "Correctly assigning tax collection responsibility between hardware OEMs, cellular networks, platform MVNOs, and end-users.",
    },
    {
      title: "6. Audit Exposure & Fact Drift",
      description:
        "Durable preservation of device connection logs, activations, and contractual states to defend outcomes years after execution.",
    },
  ] satisfies TitledCard[],
};

export const LIFECYCLE_DATA = {
  eyebrow: "Governance Workflow",
  title: "The Governed Connected-Service Lifecycle",
  description: "Deconstruct, calculate, and prove compliance at every programmatic step.",
  steps: [
    { title: "Receive", description: "Ingest telemetry, billing, and SIM carrier log events directly." },
    { title: "Classify", description: "Map payload items against native hardware and service ontology." },
    { title: "Attribute", description: "Determine exact local, regional, and national geographic anchors." },
    { title: "Determine", description: "Execute deterministic calculations against governed rule sets." },
    { title: "Obligate", description: "Assign administrative filing and regulatory responsibility states." },
    { title: "Comply", description: "Govern generation, approval paths, and external lodgements." },
    { title: "Reconcile", description: "Verify billing records against financial ledger declarations." },
    {
      title: "Prove",
      description: "Preserve material source facts, versions, approvals, and replay references where supported.",
    },
  ] satisfies TitledCard[],
};

export const CONTEXT_MODEL_DATA = {
  eyebrow: "Semantic Mapping",
  title: "The Connected-Product Transaction Context Model",
  description: "Every calculation is resolved inside a complete contextual mesh — not isolated billing lines.",
  cards: [
    {
      title: "Commercial Context",
      description: "Subscription models, prepaid cellular airtime, embedded hardware leases.",
    },
    {
      title: "Product / Component",
      description: "SIM identifiers, localized hardware serials, firmware activation states.",
    },
    {
      title: "Connectivity / Service",
      description: "APN endpoints, network carrier telemetry, data transport logs.",
    },
    {
      title: "Geography Context",
      description: "Cell tower registration coordinates, physical billing sites, device usage paths.",
    },
    {
      title: "Transaction / Usage",
      description: "Device active minutes, data MB consumption thresholds, api transaction calls.",
    },
    {
      title: "Authority Context",
      description: "Administrative boundaries, localized tax districts, telecom tax exemptions.",
    },
  ] satisfies TitledCard[],
};

export const ONTOLOGY_DATA = {
  eyebrow: "Data Classification",
  title: "Product Ontology & Classification",
  description: "Maintain separate product component categorization to prevent accidental tax blending.",
  gridClassName:
    "lg:grid-cols-[10rem_minmax(0,1fr)_11rem_minmax(12rem,max-content)] xl:grid-cols-[15rem_minmax(0,1fr)_14rem_minmax(12rem,max-content)]",
  columns: [
    { label: "Component Type" },
    { label: "Technical / Functional Scope" },
    { label: "Fiscal Classification" },
    { label: "Rule State" },
  ] satisfies TableColumn[],
  rows: [
    {
      cells: ["Device Hardware", "Physical tracker, embedded controller, or satellite modem", "Tangible Personal Property"],
      badge: { label: "Stable (Active)", tone: "neutral" },
    },
    {
      cells: ["Connectivity Access", "Cellular airtime, satellite bandwidth, LPWAN transport", "Telecommunications Service"],
      badge: { label: "Requires Live Local Mapping", tone: "warning" },
    },
    {
      cells: ["Platform Software", "Telemetry aggregation portals, OTA update software", "Information / Cloud Service"],
      badge: { label: "SaaS Rule Version 2.4", tone: "neutral" },
    },
    {
      cells: ["Ancillary Services", "Custom engineering, field installations, advisory support", "Professional Services"],
      badge: { label: "Exempt in Select Jurisdictions", tone: "neutral" },
    },
  ] satisfies TableRow[],
};

export const GEOGRAPHY_DATA = {
  eyebrow: "Location Provenance",
  title: "Device & Service Geography",
  description: "Resolve physical coordinates and network route markers into legally defensible location positions.",
  gridClassName:
    "lg:grid-cols-[10rem_minmax(0,1fr)_11rem_minmax(11rem,max-content)] xl:grid-cols-[15rem_minmax(0,1fr)_15rem_minmax(11rem,max-content)]",
  columns: [
    { label: "Location Fact" },
    { label: "Data Origin Source" },
    { label: "Tax Determination Weight" },
    { label: "Audit Status" },
  ] satisfies TableColumn[],
  rows: [
    {
      cells: ["Billing Address", "ERP / Account Profile", "Contractual Baseline"],
      badge: { label: "Durable Provenance", tone: "success" },
    },
    {
      cells: ["SIM Card Provisioning", "Mobile Operator HLR/HSS Log", "Origin-situs anchor"],
      badge: { label: "Durable Provenance", tone: "success" },
    },
    {
      cells: ["Physical Gateway Location", "Cell Tower or Base Station ID", "Operational location proof"],
      badge: { label: "Dynamic Verification", tone: "success" },
    },
    {
      cells: ["IP Address / APN Target", "Device Network Registration", "Secondary routing factor"],
      badge: { label: "Dynamic Verification", tone: "success" },
    },
  ] satisfies TableRow[],
};

export const LEGAL_ENTITY_DATA = {
  eyebrow: "Responsibility Assignment",
  title: "Legal Entity, Commercial Role & Responsibility",
  description: "Define the exact contractual boundaries governing each participant in the delivery chain.",
  gridClassName:
    "lg:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1.3fr)_10rem] xl:grid-cols-[15rem_minmax(0,1fr)_20rem_12rem]",
  columns: [
    { label: "Commercial Entity Role" },
    { label: "Delivery Relation Scope" },
    { label: "Assigned Operational Responsibility" },
    { label: "Governing Authority" },
  ] satisfies TableColumn[],
  rows: [
    {
      cells: ["Device OEM", "Sells hardware + prepaid bundle", "Maintains hardware warranty & initial tax declaration"],
      accent: "Sales Tax / VAT",
    },
    {
      cells: ["Telecom Carrier", "Wholesales airtime & data transport", "Declares network connectivity to reseller limits"],
      accent: "Excise & Utilities",
    },
    {
      cells: ["IoT Platform / MVNO", "Sells packaged connectivity & software", "Reclassifies services, aggregates usage, and files"],
      accent: "Excise + Service Tax",
    },
    {
      cells: ["End-User Enterprise", "Consumes telemetry insights", "Utilizes device outcomes for business processes"],
      accent: "Consumer Use Tax",
    },
  ] satisfies TableRow[],
};

export const DETERMINATION_DATA = {
  eyebrow: "Execution Engine",
  title: "Deterministic Connected-Product Tax Determination",
  description: "How ZoikoTax processes transactional payloads without resorting to generic global rates.",
  cards: [
    {
      title: "Deterministic Logic",
      description:
        "Instead of executing generic country-level estimates, ZoikoTax maps exact payload telemetry into active jurisdiction packs. This ensures local utility, telecom excise, and state-level franchise taxes are calculated according to actual device attributes.",
    },
    {
      title: "Exception Governance",
      description:
        "When ambiguous payloads or missing telemetry coordinates occur, the engine triggers active alert notifications instead of silently processing incorrect calculations. Resolve data gaps natively with full version control.",
    },
  ] satisfies TitledCard[],
};

export const OBLIGATIONS_DATA = {
  eyebrow: "Compliance Cycles",
  title: "Obligations & Compliance",
  description: "Track filing, declaration, and transaction clearance processes across active compliance packs.",
  gridClassName:
    "lg:grid-cols-[10rem_minmax(0,1fr)_11rem_minmax(12rem,max-content)] xl:grid-cols-[15rem_minmax(0,1fr)_15rem_minmax(12rem,max-content)]",
  columns: [
    { label: "Jurisdiction Region" },
    { label: "Primary Regulatory Process" },
    { label: "Declaration Cycle" },
    { label: "Illustrative support state" },
  ] satisfies TableColumn[],
  rows: [
    {
      cells: ["United States", "Filing & Remittance (High (Excise + Local Sales))", "Monthly / Quarterly"],
      badge: { label: "Active in Pack US-2026", tone: "success" },
    },
    {
      cells: [
        "European Union",
        "E-Invoicing & VAT Clearance (Medium (Digital Services))",
        "Continuous Transaction Controls (CTC)",
      ],
      badge: { label: "Active in Pack EU-2.4", tone: "success" },
    },
    {
      cells: ["United Kingdom", "M2M Compliance Reporting (Medium (Network Excise))", "Quarterly Declarations"],
      badge: { label: "Active in Pack UK-M2M", tone: "success" },
    },
  ] satisfies TableRow[],
};

export const EXEMPTIONS_DATA = {
  eyebrow: "Recovery Boundaries",
  title: "Exemptions & Recovery Boundaries",
  description:
    "Verify exemption states and manage recovery rules safely without assuming automatic universal outcomes.",
  cards: [
    {
      title: "Exemption Verification",
      description:
        "Manage supported exemption evidence and applicability context only where the applicable jurisdiction and capability provide a governed workflow.",
    },
    {
      title: "Recovery Audit Logs",
      description:
        "Effective dates, review state, source evidence, and capability support remain explicit. Unsupported exemption states must not imply tax exclusion.",
    },
  ] satisfies TitledCard[],
};

export const RECONCILIATION_DATA = {
  eyebrow: "Financial Control",
  title: "Reconciliation & Finance",
  description: "Track the complete financial reconciliation path from raw calculations to general ledger entries.",
  phases: [
    {
      phase: "PHASE 01",
      title: "Calculate",
      owner: "ZoikoTax Engine",
      description: "Governed determination using approved source facts",
    },
    { phase: "PHASE 02", title: "Bill", owner: "Billing BSS / ERP", description: "Amount invoiced to customer account" },
    { phase: "PHASE 03", title: "Collect", owner: "Accounts Receivable", description: "Payments received and cleared" },
    {
      phase: "PHASE 04",
      title: "Report & Pay",
      owner: "Tax Operations",
      description: "Filing and treasury payment to authorities",
    },
  ],
};

export const EVIDENCE_DATA = {
  eyebrow: "Audit Readiness",
  title: "Evidence & Replay",
  description:
    "Preserve material source facts, versions, provenance, approvals, and replay references needed for governed review where supported.",
  points: [
    {
      title: "Durable Technical Context",
      description: "Preserve material product, transaction, location, rule, and evidence context where supported.",
    },
    {
      title: "Historical Replay Context",
      description:
        "Because calculations rely on explicit facts and version-controlled compliance packs, any historical outcome can be replayed and reconstructed exactly as it occurred.",
    },
  ] satisfies TitledCard[],
  record: {
    title: "PRESERVED FACT RECORD",
    items: [
      "Illustrative device reference",
      "Carrier network log event",
      "Illustrative network and location fact",
      "Illustrative commercial context",
      "Governing rule version",
    ],
  },
};

export const MIGRATION_DATA = {
  eyebrow: "Safe Migration",
  title: "Shadow Assurance & Migration",
  description: "Compare agreed source and ZoikoTax outcomes before cutover; findings remain non-authoritative.",
  cards: [
    {
      title: "Native Full-Stack",
      description:
        "Use supported determination and downstream workflows only where applicable capabilities and packs are production-ready.",
    },
    {
      title: "Federated Coexistence",
      description:
        "Keep incumbent systems authoritative for agreed functions while ZoikoTax provides supported downstream controls.",
    },
    {
      title: "Shadow Assurance",
      description: "Run non-impact Shadow comparison before cutover; findings remain non-authoritative.",
    },
  ] satisfies TitledCard[],
};

export const INTEGRATIONS_DATA = {
  eyebrow: "Platform Adaptability",
  title: "Fit your existing enterprise architecture",
  description: "Connect ZoikoTax seamlessly to active billing, routing, and reporting infrastructure.",
  cards: [
    {
      title: "Billing & BSS",
      description: "Sync natively with carrier rating, charging, and customer billing engines.",
    },
    {
      title: "ERP & General Ledger",
      description: "Automate downstream ledger postings of calculated tax liabilities directly.",
    },
    {
      title: "Incumbent Tax Engines",
      description: "Integrate through structured APIs to exchange location and determination facts.",
    },
    {
      title: "Device & IoT Platforms",
      description: "Ingest telemetry logs directly from connectivity platforms and LPWAN portals.",
    },
  ] satisfies TitledCard[],
};

export const COVERAGE_DATA = {
  eyebrow: "Coverage Boundaries",
  title: "Capability-specific Coverage & Trust",
  description:
    "Current readiness remains capability-, jurisdiction-, profile-, and integration-specific and must come from governed Coverage sources.",
  boundaryTitle: "Security, Privacy & Evidence Boundaries",
  boundaryDescription:
    "Data handling and tenant or legal-entity boundaries follow approved deployment, privacy, security, contract, and source-of-truth.",
  markets: [
    { name: "Market A", status: "ILLUSTRATIVE" },
    { name: "Market B", status: "STATUS UNAVAILABLE" },
  ],
  imageCaption: "Illustrative trust context",
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. No inflated claims.",
  description: "Clear answers on connected-product tax regulations and systems management.",
  items: [
    {
      title: "Q: How is cellular airtime treated when bundled with device hardware?",
      description:
        "Each product element is handled according to the governed ontology maps. Airtime elements resolve under telecommunication rules, while hardware is isolated cleanly under personal property regulations.",
    },
    {
      title: "Q: Can device location telemetry trigger automated calculation rules?",
      description:
        "Telemetry provides spatial coordinates which map directly into jurisdiction packs. If location data changes, calculation policies adjust automatically based on proven network events.",
    },
    {
      title: "Q: How does Shadow Assurance function during system migration?",
      description:
        "It mirrors transaction payloads, calculates results on both engines concurrently, and highlights billing differences without affecting active production lines.",
    },
    {
      title: "Q: How is artificial intelligence used in the platform?",
      description:
        "Our AI assists with transaction data mapping research, pattern checking, and audit anomalies. It does not direct tax decisions or overwrite evidence files.",
    },
  ] satisfies TitledCard[],
};

export const BANNER_DATA = {
  eyebrow: "READY TO MODERNIZE COMPLIANCE?",
  title: "See how ZoikoTax governs connected-product complexity",
  description:
    "Explore our Native, Federated, and Shadow operating models with a dedicated solutions specialist.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" as const },
    { label: "Explore Platforms", href: "/#platform", variant: "secondary" as const },
    { label: "Contact Solutions Support", href: "#", variant: "secondary" as const },
  ],
};
