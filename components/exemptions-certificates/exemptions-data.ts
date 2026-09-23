export interface PipelineStage {
  num: string;
  tag: string;
  title: string;
  desc: string;
}

export interface RegistryItem {
  ref: string;
  entity: string;
  category: string;
  scope: string;
  period: string;
  evidenceState: string;
  reviewState: string;
  stateType: "ready" | "review" | "expired";
  action: string;
}

export interface QueueItem {
  code: string;
  entity: string;
  ref: string;
  date: string;
  scope: string;
  action: string;
}

export interface CoverageItem {
  jurisdiction: string;
  scope: string;
  status: string;
  statusColor: "green" | "amber" | "blue" | "gray";
}

export interface FAQItem {
  q: string;
  a: string;
}

export const heroData = {
  eyebrow: "TELECOM TAX EXEMPTIONS & CERTIFICATES",
  title: "Govern exemption evidence before it changes the tax outcome.",
  subtitle:
    "ZoikoTax is designed to manage supported exemption evidence, certificates and applicability controls so telecom fiscal workflows can evaluate the right context for the right subject, scope and period — with traceable evidence behind consequential use.",
  callout:
    "Connect exemption context to supported tax determination without turning a certificate into an ungoverned global override.",
  primaryCta: { label: "Book a Demo", href: "#demo" },
  secondaryCta: { label: "View Current Coverage", href: "#coverage" },
  disclosures: [
    "* Compliance workflows do not independently certify legal validity.",
    "Capability & jurisdictional coverage varies by activated country pack and operational model.",
  ],
};

export const directAnswerData = {
  eyebrow: "DIRECT ANSWER",
  title: "What is ZoikoTax Exemptions & Certificates?",
  description:
    "ZoikoTax Exemptions & Certificates is the platform capability for managing supported exemption evidence, tax certificates, and applicability rules used in telecom fiscal workflows. It connects the validated scope of each document to active transaction logic, preserving a traceable history of why every decision was made.",
  isTitle: "WHAT ZOIKOTAX IS",
  isItems: [
    "Governed evidence-and-applicability database",
    "Scope, time, and review state-aware matching rules",
    "Strictly interlocked with active tax determination engines",
    "Coverage-specific system supporting configured regulatory packs",
    "Traceable decision manifest with replay capability",
    "API and batch-compatible enterprise infrastructure",
  ],
  isNotTitle: "WHAT ZOIKOTAX IS NOT",
  isNotItems: [
    "A simple public cloud folder/unstructured storage drive",
    "A universal 'Exempt All' zero-tax master switch",
    "A tool to bypass standard determination logic entirely",
    "A replacement for your billing, CRM, or document master system",
    "A source of certified professional legal or tax opinions",
    "An autonomous AI bot that approves raw filings without review",
  ],
};

export const whyHardData = {
  eyebrow: "THE PROBLEM SPACE",
  title: "Why telecom exemption control is structurally difficult",
  description:
    "Treating an exemption certificate as a generic PDF attachment creates massive audit exposure. True compliance requires a multi-dimensional rule chain.",
  items: [
    {
      num: "01",
      title: "Subject Identity",
      desc: "Verifying that the specific legal entity on the transaction record matches the exact entity named on the certificate.",
    },
    {
      num: "02",
      title: "Bounded Scope",
      desc: "Limiting exemptions strictly to configured service bundles, traffic types, or jurisdictions rather than global overrides.",
    },
    {
      num: "03",
      title: "Effective Period",
      desc: "Enforcing expiration gates and effective dates dynamically across continuous transactional billing runs.",
    },
    {
      num: "04",
      title: "Evidence Completeness",
      desc: "Tracking necessary metadata fields rather than just verifying a file exist on an unstructured folder.",
    },
    {
      num: "05",
      title: "Review Boundaries",
      desc: "Clearly segregating operator validation status from raw uploads so unreviewed files do not alter taxes.",
    },
    {
      num: "06",
      title: "Lifecycle & Change",
      desc: "Detecting changes, suspensions, or replacement events, and systematically archiving past evidence.",
    },
    {
      num: "07",
      title: "Engine Linkage",
      desc: "Placing an explicit gate in the determination logic that retrieves, confirms, and logs the exemption rule used.",
    },
    {
      num: "08",
      title: "Jurisdictional Rules",
      desc: "Accounting for varying rules across municipal, state, federal, and international regulatory boundaries.",
    },
  ],
  alert:
    "Critical Exposure: A document folder is structurally insufficient for enterprise telecom tax audit defense.",
};

export const decisionChainData = {
  eyebrow: "OPERATIONAL WORKFLOW",
  title: "The Controlled Exemption Decision Chain",
  description:
    "How ZoikoTax handles context from initial intake down to active determination output. We enforce explicit state validation at every gate.",
  steps: [
    {
      num: "01",
      tag: "GOVERNED",
      title: "Identify",
      desc: "Confirm entity matches master billing record",
    },
    {
      num: "02",
      tag: "GOVERNED",
      title: "Capture",
      desc: "Receive document metadata and capture payload",
    },
    {
      num: "03",
      tag: "GOVERNED",
      title: "Structure",
      desc: "Convert files to structured, machine-queryable context",
    },
    {
      num: "04",
      tag: "GOVERNED",
      title: "Scope",
      desc: "Define explicit tax types, zones, and excluded items",
    },
    {
      num: "05",
      tag: "GOVERNED",
      title: "Review",
      desc: "Perform operator verification and record approval state",
    },
    {
      num: "06",
      tag: "GOVERNED",
      title: "Evaluate",
      desc: "Active match of transaction criteria against scope boundaries",
    },
    {
      num: "07",
      tag: "GOVERNED",
      title: "Determine",
      desc: "Execute zero or reduced rate in standard tax engine",
    },
    {
      num: "08",
      tag: "GOVERNED",
      title: "Prove",
      desc: "Log complete metadata and logic paths to the manifest",
    },
  ],
};

export const productProofData = {
  eyebrow: "PRODUCT INTERFACE",
  title: "System Evidence Registry & Applicability Detail",
  description:
    "Review representative product mockups illustrating structured certificate records, governance states, and applicability controls.",
  warningNotice:
    "2 certificates expire in next 30 days. Automated notifications issued to role owners.",
  table: [
    {
      ref: "REF-2026-001",
      entity: "Carrier Alpha Inc.",
      category: "Federal Resell",
      scope: "US-FED Interstate",
      period: "2026-01-01 to 2026-12-31",
      evidenceState: "Active",
      reviewState: "Ready for Use",
      stateType: "ready",
      action: "Edit Context",
    },
    {
      ref: "REF-2026-002",
      entity: "Beta Global Corp.",
      category: "State Resell",
      scope: "TX-State Only",
      period: "2026-03-01 to 2027-02-28",
      evidenceState: "Pending",
      reviewState: "Needs Review",
      stateType: "review",
      action: "Verify",
    },
    {
      ref: "REF-2026-003",
      entity: "Gamma Net LLC",
      category: "Federal USF Ex.",
      scope: "US-FED FUSF",
      period: "2025-01-01 to 2025-12-31",
      evidenceState: "Archived",
      reviewState: "Expired",
      stateType: "expired",
      action: "Update",
    },
  ] as RegistryItem[],
  detailCard: {
    id: "REF-2026-001",
    title: "Evidence Metadata Record",
    fields: [
      { label: "Governed Entity", value: "Carrier Alpha Inc." },
      {
        label: "Exemption Category",
        value: "Telecommunications Wholesale / Reseller",
      },
      {
        label: "Verified Effective Scope",
        value: "US-FED Interstate Voice Traffic",
      },
      {
        label: "Active Period Bounds",
        value: "Effective 2026-01-01 / Expiration 2026-12-31",
      },
      {
        label: "Verification Context",
        value: "Approved by Compliance Lead (Role: Fiscal Analyst)",
      },
      {
        label: "Interlocked Engine Rule",
        value: "Rule-14-Wholesale-Resell-FUSF",
      },
    ],
  },
  detailText: {
    title: "Exemption evidence is structured metadata — not a file folder.",
    body: "Compliance is achieved when tax calculations are backed by auditable metadata. Each active certificate in ZoikoTax represents a structured set of rules that defines what entities, what jurisdictions, and what services are permitted to utilize the exemption.",
    checklist: [
      "Identity verified against standard company registers.",
      "Scope defined by actual telecom service classification codes.",
      "Active time windows enforced with hard system validation gates.",
    ],
  },
};

export const applicabilityMatrixData = {
  eyebrow: "SYSTEM RIGOR",
  title: "Applicability Controls Matrix",
  description:
    "How ZoikoTax matches incoming transaction criteria against validated records before altering tax outcomes. We explicitly reject simplistic bypass gates.",
  cards: [
    {
      title: "Subject / Entity Profile",
      bullets: [
        "Matches exact wholesale ID",
        "Must pass verification gate",
        "Requires structured tax profile",
      ],
    },
    {
      title: "Service / Product Group",
      bullets: [
        "Scope restricted by telecom codes",
        "Bundle separation enforced",
        "Non-eligible components taxed",
      ],
    },
    {
      title: "Jurisdiction & Authority",
      bullets: [
        "Valid only where supported",
        "Explicit boundary validation",
        "No global statewide override",
      ],
    },
    {
      title: "Time & Effective bounds",
      bullets: [
        "Strict transaction date match",
        "Automated pre-expiration flags",
        "History-preserving updates",
      ],
    },
  ],
  rigorPromise: {
    heading: "THE ZOIKOTAX RIGOR PROMISE — WE SYSTEMATICALLY REJECT AND PROHIBIT:",
    items: [
      "No binary database flag is permitted to bypass system calculation logic completely.",
      "Simply uploading an image files does not automatically apply a tax-determination rule.",
      "Green status icons do not serve as authority over active determination rules.",
    ],
  },
};

export const lifecycleData = {
  eyebrow: "LIFECYCLE MANAGEMENT",
  title: "The Evidence Lifecycle & Attention Queue",
  description:
    "How certificates move from ingest, validation, and active status, through expiration or modification events.",
  steps: [
    {
      num: "01",
      title: "Capture & Reference",
      desc: "Metadata ingest & initial profile check.",
    },
    {
      num: "02",
      title: "Complete Context",
      desc: "Exempt scope & jurisdiction bounds defined.",
    },
    {
      num: "03",
      title: "Operator Review",
      desc: "Compliance team validates facts.",
    },
    {
      num: "04",
      title: "Active In-Effect",
      desc: "Rule active for standard determination.",
    },
    {
      num: "05",
      title: "Attention Warning",
      desc: "Expiring or data-mismatch event.",
    },
    {
      num: "06",
      title: "Supersede / Suspend",
      desc: "Archived & locked from active calculation.",
    },
  ],
  queueTitle: "Attention & Expiry Action Queue",
  queueItems: [
    {
      code: "⚠️ Expiration < 30d",
      entity: "Carrier Alpha Inc.",
      ref: "REF-2026-001",
      date: "2026-12-31",
      scope: "US-FED Interstate",
      action: "Issue Renewal Request",
    },
    {
      code: "⚠️ Missing Tax ID",
      entity: "Beta Global Corp.",
      ref: "REF-2026-002",
      date: "2026-03-01",
      scope: "TX-State Only",
      action: "Enter Entity Metadata",
    },
  ] as QueueItem[],
};

export const interlockData = {
  eyebrow: "ENGINE INTEGRATION",
  title: "The Tax Determination Interlock",
  description:
    "Exemption context does not bypass tax calculation. It serves as an active rule constraint inside the engine.",
  steps: [
    {
      num: "01",
      title: "Transaction Facts",
      desc: "Origin/dest, customer profile, and services payload.",
    },
    {
      num: "02",
      title: "Classification",
      desc: "Identify tax categories and regulatory rules.",
    },
    {
      num: "03",
      title: "Active Scope Query",
      desc: "Retrieve active exemption records for entity.",
    },
    {
      num: "04",
      title: "Rigor Validation",
      desc: "Verify dates, zones, and status checks.",
    },
    {
      num: "05",
      title: "Standard Calculation",
      desc: "Apply zero or reduced rate strictly based on active rules.",
    },
    {
      num: "06",
      title: "Manifest Generated",
      desc: "Log active rule ID and record hash to audit manifest.",
    },
  ],
  primaryCta: { label: "Explore Tax Determination", href: "/determination" },
  secondaryCta: { label: "Explore Evidence & Replay →", href: "#replay" },
};

export const replayData = {
  eyebrow: "AUDIT PREPARATION",
  title: "Evidence, Auditability & Historical Replay",
  description:
    "How ZoikoTax can reconstruct why an exemption context was applied to any historical transaction, using preserved version history.",
  manifest: {
    header: "HISTORICAL REPLAY REPORT",
    traceId: "TX_TRACE_901824",
    rows: [
      { label: "Target Invoice Timestamp", value: "Illustrative timestamp" },
      { label: "Subject Entity Name", value: "Entity A" },
      { label: "Governing Rule Code", value: "Rule reference placeholder" },
      {
        label: "Linked Reference Record",
        value: "Evidence record • version placeholder",
      },
      {
        label: "Active Period Validation",
        value: "Within configured period • illustrative",
      },
      {
        label: "Operator Approval State",
        value: "Configured review state • illustrative",
      },
      {
        label: "System Output Record",
        value: "Determination linkage • no tax value shown",
      },
    ],
  },
  rightSide: {
    title: "A result you can reconstruct.",
    body: "Instead of claiming system 'perfection' or using misleading 'audit-proof' language, ZoikoTax delivers absolute transparency. We preserve complete transaction variables, tax content databases, and the exact state profile of every certificate as it existed at the time of the transaction.",
    note: "ZoikoTax uses traceable, version-aware, and history-preserving storage architecture, systematically rejecting absolute safety terms like 'tamper-proof' or 'court-ready.'",
  },
};

export const operatingModelsData = {
  eyebrow: "COEXISTENCE & DEPLOYMENT",
  title: "Operating Models & Core Integrations",
  description:
    "ZoikoTax supports multiple deployment topologies to coexist natively with your incumbent systems and billing workflows.",
  topologies: [
    {
      tag: "TOPOLOGY 01",
      title: "Native Full-Stack",
      desc: "Manage all exemptions, rule logic, and active calculation rules entirely within the local country pack.",
    },
    {
      tag: "TOPOLOGY 02",
      title: "Federated Integration",
      desc: "Manage structured certificates globally while feeding active states to traditional monetary engines.",
    },
    {
      tag: "TOPOLOGY 03",
      title: "Shadow Assurance",
      desc: "Evaluate transaction payloads and log comparison results in parallel prior to governed production cutover.",
    },
  ],
  integrationFamilies: [
    "CRM & Customer Master Systems",
    "Billing & BSS Platforms",
    "Incumbent Tax Calculation Engines",
    "Unstructured Content/Document Storage",
    "Enterprise Resource Planning (ERP)",
    "Direct Batch APIs & Events",
  ],
  ctaText: "Explore Integration Documentation & Developer Guides →",
  ctaHref: "#developer",
};

export const coverageData = {
  eyebrow: "GLOBAL AVAILABILITY",
  title: "Availability Status & Coverage Realism",
  description:
    "Explore our standard rollout tiers and capability-specific readiness. ZoikoTax rejects global, non-verified compliance claims.",
  directoryBadge: "ILLUSTRATIVE STATUS ONLY",
  directoryTitle: "Specimen Availability Directory",
  items: [
    {
      jurisdiction: "Jurisdiction Alpha",
      scope: "Wholesale Exemption Verification",
      status: "Production",
      statusColor: "green",
    },
    {
      jurisdiction: "Jurisdiction Beta",
      scope: "FUSF Regulatory Validation",
      status: "Managed Pilot",
      statusColor: "amber",
    },
    {
      jurisdiction: "Jurisdiction Gamma",
      scope: "Municipal Utility Tax Scope",
      status: "In Research",
      statusColor: "blue",
    },
    {
      jurisdiction: "Jurisdiction Delta",
      scope: "E-Invoicing Clearance Linkage",
      status: "Status Unavailable",
      statusColor: "gray",
    },
  ] as CoverageItem[],
  warning:
    "Do not assume universal country support. Status must be verified by explicit country pack.",
};

export const aiBoundaryData = {
  eyebrow: "TECHNOLOGY RIGOR",
  title: "The Governed AI Boundary",
  description: "AI assists. Approved rules decide. Evidence proves.",
  mayTitle: "AI ASSISTANCE CAPABILITIES (MAY)",
  mayItems: [
    "Extract metadata fields from uploaded document drafts",
    "Suggest standard classifications based on similar entities",
    "Identify potential missing fields or anomalies",
    "Detect duplicate records during draft ingestion",
    "Prioritize records for manual human validation review",
  ],
  mayNotTitle: "STRICT TECHNOLOGY PROHIBITIONS (MAY NOT)",
  mayNotItems: [
    "Autonomous approval of any certificate or record",
    "Bypass operator verification checkpoints",
    "Generate legal-validity authority certificates",
    "Overrule or overwrite active rule-checking configurations",
    "Silently apply zero-tax determination without a checked rule",
  ],
};

export const trustData = {
  eyebrow: "SECURITY & PRIVACY",
  title: "Trust & Sensitive Data Architecture",
  description:
    "Governed operations for high-security, sensitive customer tax records and corporate profiles.",
  cards: [
    {
      title: "Logical Tenant Isolation",
      desc: "No data is shared or co-mingled. Complete logical boundaries separate customer files and company accounts.",
    },
    {
      title: "Verified Claims Only",
      desc: "Security posture verified strictly through standard compliance audits. No overreaching security claims.",
    },
    {
      title: "Residency-Aware Storage",
      desc: "Configure metadata storage to respect region-specific regulatory data processing mandates.",
    },
  ],
  cta: { label: "Visit Trust Center", href: "#trust" },
};

export const buyerOutcomesData = {
  eyebrow: "OPERATIONAL BENEFITS",
  title: "Practical capabilities built for enterprise risk management",
  description:
    "How ZoikoTax delivers concrete, structured benefits without relying on marketing hype.",
  outcomes: [
    {
      title: "Structured Scope Mapping",
      desc: "Exemptions apply strictly to mapped accounts and codes instead of generic global overrides.",
    },
    {
      title: "Complete Context History",
      desc: "Past certificate states and validation actions remain queryable for audit replay.",
    },
    {
      title: "Proactive Warning Gate",
      desc: "Role owners receive notifications before expiration windows affect active determination runs.",
    },
    {
      title: "Integration Coexistence",
      desc: "Coexist comfortably with your billing engines, CRM master profiles, and existing document files.",
    },
    {
      title: "Clear Capability State",
      desc: "Identify validated country rules and capability-specific readiness through clear status tiers.",
    },
    {
      title: "Governed Approval Control",
      desc: "Unreviewed files remain isolated from active tax-determination rules until validated.",
    },
  ],
};

export const faqData = {
  eyebrow: "FREQUENTLY ASKED QUESTIONS",
  title: "Direct answers. No inflated claims.",
  faqs: [
    {
      q: "What does ZoikoTax Exemptions & Certificates do?",
      a: "It provides the structured framework and validation gates to manage exemption evidence, active scopes, and certificate status used inside active tax calculation workflows.",
    },
    {
      q: "Does ZoikoTax decide whether every certificate is legally valid?",
      a: "No. The system validates complete metadata and structured input facts. Verifying ultimate legal validity remains the responsibility of your professional tax advisors and regulatory compliance team.",
    },
    {
      q: "Can exemption evidence affect tax determination?",
      a: "Only when a structured certificate has been manually reviewed, approved, and satisfies the exact transaction date, service group, and jurisdictional match requirements.",
    },
    {
      q: "How are expired or incomplete records handled?",
      a: "Incomplete or expired records are flagged inside the Attention Queue and are locked from active tax calculation. Simple PDF uploads do not bypass tax calculation without validation.",
    },
    {
      q: "Can ZoikoTax work with an existing tax engine?",
      a: "Yes. Federated and Shadow Assurance operating models are designed to supply structured validation data and compare outcomes beside your legacy engines.",
    },
    {
      q: "Does AI approve exemptions or certificates?",
      a: "No. Autonomous AI is prohibited from approving files or overriding calculation rules. It assists operators strictly with data extraction, duplicate suggestions, and prioritization drafts.",
    },
    {
      q: "Is Exemptions & Certificates available in every country?",
      a: "Rollout is country-specific. Supported capabilities depend entirely on the activated country pack and your specific operating configuration.",
    },
    {
      q: "Can historical use of exemption evidence be explained later?",
      a: "Yes. The Replay system stores version histories and active rules used at the precise time of calculation, allowing complete trace reports to be generated during audits.",
    },
  ] as FAQItem[],
};

export const conversionData = {
  eyebrow: "GOVERN EXEMPTION CONTEXT WITH THE FISCAL DECISION",
  title:
    "See how ZoikoTax can fit exemption evidence into your telecom tax operating model.",
  description:
    "Evaluate how supported exemption evidence, applicability controls, Tax Determination, coverage and evidence can work together around existing telecom systems and operating processes.",
  primaryCta: { label: "Book a Demo", href: "#demo" },
  secondaryCta: { label: "Explore Platform", href: "#workflow" },
  disclaimer:
    "* Built for consequential fiscal workflows where evidence, scope, time and authority need to remain explicit.",
};
