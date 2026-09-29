export type BadgeTone = "success" | "warning" | "info" | "neutral";

export interface TitledCard {
  title: string;
  description: string;
}

export interface Action {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "light" | "ghost";
}

const img = (name: string) => `/mvno/${name}.webp`;

export const IMAGES = {
  hero: img("hero-bg"),
  complexity: img("pattern-complexity"),
  lifecycle: img("lifecycle-bg"),
  determination: img("pattern-determination"),
  compliance: img("compliance-bg"),
  reconciliation: img("pattern-reconciliation"),
  shadow: img("pattern-shadow"),
  ai: img("ai-bg"),
  integrations: img("pattern-integrations"),
  coverage: img("coverage-bg"),
  faq: img("pattern-faq"),
  conversion: img("conversion-bg"),
};

export const HERO_DATA = {
  eyebrow: "Governed Telecom Solutions for MVNOs",
  title: "Clarify MVNO tax, responsibility and obligations across operating models.",
  description:
    "ZoikoTax introduces rigorous fiscal infrastructure addressing service classification, commercial-chain contexts, operator dependencies, and downstream tax/regulatory obligations for MVNO brands.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" },
    { label: "Explore the Platform", href: "/platform-overview", variant: "secondary" },
    { label: "View Current Coverage →", href: "#coverage", variant: "secondary" },
  ] satisfies Action[],
  topology: {
    title: "Governed Commercial-Chain Topology (Audience Labels: Full • Light • Hybrid)",
    steps: [
      { tag: "01. Legal Entity", title: "Registrations & Authority" },
      { tag: "02. Portfolio Context", title: "Service Classification" },
      { tag: "03. Transaction Facts", title: "Operational Source Data" },
      { tag: "04. Fiscal Lifecycle", title: "Determination to Filing" },
      { tag: "05. Evidence Archive", title: "Replay & Reconstruct" },
    ],
  },
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct Answer",
  title: "What is ZoikoTax for MVNOs?",
  description:
    "ZoikoTax is specialized telecom compliance infrastructure connecting product classification, commercial-chain contexts, responsibility matrices, operator dependencies, regulatory obligations, and audit evidence. It establishes structured boundaries between the host MNO, billing platform, and your entity, ensuring computational outcomes remain defensible without assumptions of automatic status transfer.",
};

export const COMPLEXITY_DATA = {
  eyebrow: "Operating Complexity",
  title: "Labels do not assign legal responsibility.",
  description:
    "Whether classified under Full, Light, or Hybrid archetypes, responsibility is determined by actual commercial flow, registration states, and legal jurisdiction—never simply by structural categorization.",
  cards: [
    {
      title: "Commercial Model Separation",
      description:
        "Establishing who acts as the primary service provider to the customer versus who acts as the wholesaler or host.",
    },
    {
      title: "Service Classification Ambiguity",
      description:
        "Decoupling underlying network services from bundled voice, data, and value-added software before taxing.",
    },
    {
      title: "Downstream Obligations",
      description:
        "Ensuring required regulatory filings (universal service, state, and local surcharges) route through proper channels.",
    },
  ] satisfies TitledCard[],
};

export const LIFECYCLE_DATA = {
  eyebrow: "Connected Fiscal Lifecycle",
  title: "Eight stages of telecom fiscal responsibility",
  description: "Preserving strict authority boundaries and source attribution across every execution phase.",
  stages: [
    {
      tag: "Stage 01 — Receive",
      title: "Fact Ingestion",
      description: "Import raw billing, CDR, and usage events with preserved original system metadata.",
    },
    {
      tag: "Stage 02 — Classify",
      title: "Portfolio Mapping",
      description: "Define products against granular regulatory tax codes and communications surcharges.",
    },
    {
      tag: "Stage 03 — Attribute",
      title: "Responsibility State",
      description: "Document who determines and files (Host MNO vs. MVNO) for each item segment.",
    },
    {
      tag: "Stage 04 — Determine",
      title: "Monetary Calculation",
      description: "Process exact telecom surcharges, local taxes, and federal surcharges with precision.",
    },
    {
      tag: "Stage 05 — Obligate",
      title: "Duty Tracking",
      description: "Map out critical due dates, target jurisdictions, and required reporting timelines.",
    },
    {
      tag: "Stage 06 — Comply",
      title: "Structured Filing",
      description: "Govern preparation, signature, and submission states with absolute human oversight.",
    },
    {
      tag: "Stage 07 — Reconcile",
      title: "Ledger Mapping",
      description: "Trace billing outputs against actual filings and general ledger collections.",
    },
    {
      tag: "Stage 08 — Prove",
      title: "Evidence Generation",
      description: "Retain a replayable audit history of facts, rules, and approvals for long-term safety.",
    },
  ],
};

export const CONTEXT_MODEL_DATA = {
  eyebrow: "Context Model",
  title: "Illustrative Refinement: Governed Commercial Chain",
  description: "Clear visibility into responsibilities across legal entity setups, operators, and portfolios.",
  setup: {
    title: "Synthetic Setup Parameters",
    rows: [
      { label: "Entity Type", value: "B2C MVNO (Hybrid Architecture)" },
      { label: "Commercial Ref", value: "REF-MVNO-0941" },
      { label: "Connected MNO", value: "Alpha Carrier Wholesale" },
      { label: "Billing Gateway", value: "Zoiko Stream Engine" },
      { label: "Service Portfolio", value: "Bundled Mobile Voice & Data Pack" },
      { label: "State of Responsibility", value: "MVNO (Assumed Surcharge Collector)" },
      { label: "Effective Period", value: "01 Jan 2026 - 31 Dec 2026" },
    ],
  },
  flow: {
    title: "Flow Verification",
    steps: ["Ingested Facts", "Validation & Attribution", "Evidence Preservation"],
  },
};

export const DETERMINATION_DATA = {
  eyebrow: "Determination",
  title: "Classification & Tax Determination",
  description:
    "Process complex telecom surcharges and local taxes. Explicitly isolate unsupported conditions for manual human review.",
  cards: [
    {
      title: "Surcharge Calculation",
      description: "Calculate state, county, and municipal communication surcharges.",
      badge: "Active Pack",
      tone: "success" as BadgeTone,
    },
    {
      title: "Review Required",
      description: "Flag transactions where source geolocation or service classification is ambiguous.",
      badge: "Needs Approval",
      tone: "warning" as BadgeTone,
    },
    {
      title: "Rule Overrides",
      description: "Apply custom tax rule sets according to specific partner agreements.",
      badge: "Configured",
      tone: "info" as BadgeTone,
    },
  ],
  action: { label: "Explore Tax Determination", href: "/determination", variant: "primary" } satisfies Action,
};

export const OBLIGATIONS_DATA = {
  eyebrow: "Regulatory Surcharges",
  title: "Clear ownership over regulatory obligations.",
  description: "Identify, assign, and track non-tax fiscal duties. Ambiguities remain visible until resolved.",
  panel: {
    title: "Obligation Mapping",
    caption: "Illustrative Overview",
    rows: [
      { name: "Federal Universal Service Fund (FUSF)", owner: "Assigned to MVNO", status: "Filing Required" },
      { name: "State 911 Emergency Surcharge", owner: "Assigned to Host MNO", status: "Attributed Sourced" },
      { name: "Local Utility User Tax (UUT)", owner: "Under Review", status: "Manual Decision Pending" },
    ],
  },
  action: {
    label: "Explore Regulatory Obligations",
    href: "/regulatory-obligations",
    variant: "secondary",
  } satisfies Action,
};

export const COMPLIANCE_DATA = {
  eyebrow: "Compliance & Filing",
  title: "Coordinate filing, e-invoicing, and clearance states.",
  description:
    "Integrate with mandate-specific clearance workflows while preserving separate, verified accountability boundaries.",
  cards: [
    {
      title: "E-Invoicing Clearance",
      description: "Automatically formats invoice metadata to adhere to country-specific CTC mandates.",
    },
    {
      title: "Workflow Approvals",
      description: "Requires manual human sign-off on generated filing sheets prior to submittal.",
    },
    {
      title: "Filing Remittance",
      description: "Keeps a detailed log of payment receipts linked back to the respective transaction evidence.",
    },
  ] satisfies TitledCard[],
  action: { label: "Explore Compliance & Filing", href: "/compliance-filing", variant: "light" } satisfies Action,
};

export const RECONCILIATION_DATA = {
  eyebrow: "Financial Controls",
  title: "Match transactions across the MVNO value chain.",
  description:
    "Reconcile calculated liabilities against billed, collected, reported, and ledger positions. Matches confirm consistency—not legal correctness.",
  panel: {
    title: "Balance Reconciliation (Simulated Period)",
    caption: "Values in USD",
    rows: [
      { name: "Total Surcharges Calculated", billed: "12,450.00", ledger: "12,450.00", delta: "0.00", match: true },
      { name: "Municipal Utility Taxes", billed: "4,820.00", ledger: "4,780.00", delta: "40.00", match: false },
      { name: "E-911 Fees Collected", billed: "1,110.00", ledger: "1,110.00", delta: "0.00", match: true },
    ],
  },
  action: { label: "Explore Reconciliation", href: "/reconciliation", variant: "secondary" } satisfies Action,
};

export const EVIDENCE_DATA = {
  eyebrow: "Governed Proof",
  title: "Evidence & Auditability",
  description: "Replay the exact rule-sets, transaction inputs, approvals, and decisions behind every fiscal state.",
  cards: [
    {
      title: "Idempotent History",
      description: "Ensure recalculations produce identical results using the exact historical parameters.",
    },
    {
      title: "Rule Provenance",
      description: "Audit trail showing which version of local tax rules was active on a transaction date.",
    },
    {
      title: "Replay Manifests",
      description: "Compile discrete zip records of inputs, rules, and outcomes for direct audit export.",
    },
  ] satisfies TitledCard[],
  action: { label: "Explore Evidence & Replay", href: "/evidence-auditability", variant: "primary" } satisfies Action,
};

export const SHADOW_DATA = {
  eyebrow: "Shadow Assurance",
  title: "Coexist and compare before you cut over.",
  description:
    "Run Shadow Assurance on live billing feeds to verify and compare outcomes against incumbent systems without impacting production.",
  cards: [
    {
      title: "Native Stack",
      description: "Run full calculations and compliance natively within the ZoikoTax platform.",
    },
    {
      title: "Federated Mode",
      description: "Coordinate and track obligation states while existing billing engines calculate taxes.",
    },
    {
      title: "Shadow Verification",
      description: "Mirror incoming facts, compare calculation variations, and adjust before cutover.",
    },
  ] satisfies TitledCard[],
  action: { label: "Explore Shadow Assurance", href: "/shadow-assurance", variant: "secondary" } satisfies Action,
};

export const AI_DATA = {
  eyebrow: "Governed AI",
  title: "Advisory suggestions—never autonomous decisions.",
  description:
    "AI can assist with complex rule research, identify transaction variances, and propose service mappings. It cannot assign legal accountability or authorize fiscal outcomes.",
  cards: [
    {
      title: "AI May",
      items: [
        "Suggest optimal regulatory revenue codes",
        "Summarize complex municipal code filings",
        "Surface calculations outside target thresholds",
      ],
    },
    {
      title: "AI May Not",
      items: [
        "Overwrite established compliance decisions",
        "Commit monetary outcomes directly",
        "Bypass mandatory reviewer approval gates",
      ],
    },
  ],
};

export const WORKSPACE_DATA = {
  eyebrow: "Workspace Preview",
  title: "Synthetic Product Proof: Command Center",
  description: "Demonstrating layout consistency and flow verification. No real operator, contract, or market data is used.",
  tenant: "Active Tenant Instance: Zoiko MVNO Alpha",
  version: "Version 4.2.1-PROD",
  tiles: [
    { label: "Portfolio Classification", value: "Bundled Voice & Access", status: "Attributed Sourced", ok: true },
    { label: "MNO Dependency", value: "Wholesale CDR Feed", status: "Connection Active", ok: true },
    { label: "Reconciliation Anomalies", value: "Municipal UUT Variance", status: "Review Pending", ok: false },
  ],
};

export const ARCHITECTURE_DATA = {
  eyebrow: "Architecture Fits",
  title: "Coexist seamlessly with your active technology systems.",
  description: "Integrated directly via standardized, non-impacting data pathways.",
  cards: [
    { title: "Billing & BSS", description: "Ingest transactions directly from billing events." },
    { title: "ERP & General Ledger", description: "Push exact, reconciled financial reports." },
    { title: "Existing Tax Engines", description: "Run side-by-side or push federated outcomes." },
    { title: "Batch & Event Data", description: "Integrate with asynchronous files or real-time streams." },
  ] satisfies TitledCard[],
  action: { label: "Explore Developers", href: "#", variant: "secondary" } satisfies Action,
};

export const COVERAGE_DATA = {
  eyebrow: "Coverage Boundaries",
  title: "Coverage is capability- and jurisdiction-specific",
  description:
    "Current readiness must come from the governed Coverage source; operating-model labels do not establish live support.",
  markets: [
    { market: "Market A", scope: "Illustrative capability scope", badge: "Illustrative", tone: "success" as BadgeTone },
    { market: "Market B", scope: "Status unavailable", badge: "Status unavailable", tone: "neutral" as BadgeTone },
    { market: "Market C", scope: "Illustrative operating scope", badge: "Illustrative", tone: "info" as BadgeTone },
  ],
};

export const OUTCOMES_DATA = {
  eyebrow: "Targeted Outcomes",
  title: "Rigorous tools designed for telecom operators",
  cards: [
    {
      title: "Tax & Regulatory Teams",
      description: "Govern rule revisions and tax jurisdictions with evidence-led control.",
    },
    {
      title: "Finance Leads",
      description: "Reconcile billed surcharges directly against ledgers for error-free closing.",
    },
    {
      title: "Billing & BSS Engineering",
      description: "Integrate through API contracts without hard-coding complex tax logics.",
    },
    {
      title: "Product & Commercial",
      description: "Verify municipal tax liabilities prior to launch of novel communications bundles.",
    },
  ] satisfies TitledCard[],
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. No inflated claims.",
  items: [
    {
      title: "How are MVNO tax responsibilities established?",
      description:
        "Fiscal responsibility is determined through transactional commercial streams and local filing registrations—never merely by structural labels like Full or Light MVNO.",
    },
    {
      title: "Can ZoikoTax coexist with our active wholesale MNO engine?",
      description:
        "Yes. Shadow Assurance allows side-by-side transaction comparisons without modifying active production billing paths.",
    },
    {
      title: "Is every capability active across all countries?",
      description:
        "Rollout: Feature and surcharge compliance rolls out on a region-by-region basis. Check the active coverage map in the portal for specific capability readiness.",
    },
  ] satisfies TitledCard[],
};

export const CONVERSION_DATA = {
  eyebrow: "Governed Fiscal Control for MVNO Operating Models",
  title: "See how ZoikoTax can fit your MVNO commercial and technology estate.",
  description:
    "Evaluate how service classification, commercial-chain context, responsibility, downstream obligations, coexistence, and evidence can fit your MVNO operating model without hard-coding duties from a full, light, or hybrid label.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" },
    { label: "View Current Coverage", href: "#coverage", variant: "light" },
    { label: "Explore Developers", href: "#", variant: "ghost" },
  ] satisfies Action[],
};
