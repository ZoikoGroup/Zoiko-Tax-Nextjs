export type StatusTone = "success" | "warning" | "info";

export interface TitledCard {
  title: string;
  description: string;
}

/** Card with a small orange eyebrow above a large light-weight title. */
export interface EyebrowCard extends TitledCard {
  eyebrow: string;
}

export interface Action {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "light" | "ghost";
}

const img = (name: string) => `/mvne-mvna/${name}.webp`;

export const IMAGES = {
  hero: img("hero-bg"),
  complexity: img("pattern-complexity"),
  lifecycle: img("lifecycle-bg"),
  classification: img("pattern-classification"),
  compliance: img("pattern-compliance"),
  evidence: img("evidence-bg"),
  shadow: img("pattern-shadow"),
  workspace: img("pattern-workspace"),
  integrations: img("integrations-bg"),
  faq: img("pattern-faq"),
  conversion: img("conversion-bg"),
};

export const HERO_DATA = {
  eyebrow: "Governed Multi-Tenant Intellectual Carrier Infrastructure",
  title: "Govern multi-tenant telecom fiscal control with attribution and isolation.",
  description:
    "ZoikoTax is telecom fiscal-control infrastructure for MVNEs and MVNAs supporting multiple operators, brands, tenants, and commercial structures — keeping service classification, legal-entity context, fiscal responsibility, downstream obligations, reconciliation, and evidence attributable and governed.",
  notice:
    "Platform structure does not determine legal responsibility. Coverage is capability-specific and governed by local tax packs.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" },
    { label: "Explore the Platform", href: "/platform-overview", variant: "secondary" },
    { label: "Explore Developers", href: "#", variant: "ghost" },
  ] satisfies Action[],
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct Answer",
  title: "What is ZoikoTax for MVNEs & MVNAs?",
  description:
    "ZoikoTax is designed as an embedded multi-tenant fiscal-control layer within approved platform architecture, preserving downstream attribution and governed isolation. Transaction facts remain linked to scoped tenant, entity, classification, responsibility, obligations, and evidence without implying the host platform inherits or transfers legal responsibility.",
};

export const REALITIES_DATA = {
  title: "Navigating Multi-Tenant Fiscal Realities",
  cards: [
    {
      eyebrow: "Structural Isolation",
      title: "Operator Attribution",
      description:
        "Keep agreed transaction and source references attributed to the scoped downstream tenant; unsupported or ambiguous attribution remains visible.",
    },
    {
      eyebrow: "Entity Binding",
      title: "Commercial Diversity",
      description:
        "Accommodate wholesale, retail, agent, and rev-share models seamlessly with flexible, rule-based hierarchy configurations.",
    },
    {
      eyebrow: "Liability Containment",
      title: "Responsibility Boundaries",
      description:
        "Isolate regulatory duties and tax filings between the platform host and individual tenant legal entities to prevent structural liability creep.",
    },
  ] satisfies EyebrowCard[],
};

export const LIFECYCLE_DATA = {
  eyebrow: "Data Pipeline Flow",
  title: "The Governed Multi-Tenant Fiscal Lifecycle",
  stages: [
    { title: "Receive", description: "Ingest downstream telecom logs." },
    { title: "Classify", description: "Map to regulatory taxonomy." },
    { title: "Attribute", description: "Assign brand and entity owner." },
    { title: "Determine", description: "Apply targeted local tax pack." },
    { title: "Obligate", description: "Establish filing requirements." },
    { title: "Comply", description: "Execute regional workflow states." },
    { title: "Reconcile", description: "Balance ledger to real outcomes." },
    { title: "Prove", description: "Archive replayable audit packet." },
  ] satisfies TitledCard[],
};

export const SCHEMA_DATA = {
  eyebrow: "Illustrative Refinement",
  title: "Multi-Tenant Platform Context Schema",
  description: "Demonstrating isolated data attribution from global host down to individual tax outcome definitions.",
  columns: ["Platform Context Level", "Attributed Data Element", "Isolation & Governance Scope"],
  rows: [
    {
      level: "Root Platform (MVNE/A)",
      element: "Platform Host Account ID",
      scope: "Aggregated global volume, core network metrics",
    },
    {
      level: "Tenant Level (MVNO)",
      element: "Scoped Tenant Reference",
      scope: "Strict data privacy boundary, independent config files",
    },
    {
      level: "Legal Entity Context",
      element: "Registered Entity Registration",
      scope: "Local country tax authorities, binding corporate ownership",
    },
    {
      level: "Service Layer",
      element: "Product/Service Taxonomy Code",
      scope: "Standardized service codes mapping to distinct tax logic",
    },
    {
      level: "Fiscal Execution",
      element: "Governed Outcome Hash",
      scope: "Versioned outcome and evidence references",
    },
  ],
};

export const CLASSIFICATION_DATA = {
  title: "Deterministic Service Classification",
  description: "Explicitly flag what is supported natively versus what requires manual tax specialist review.",
  cards: [
    {
      eyebrow: "Supported State",
      title: "Native Deterministic Rules",
      supported: true,
      items: ["VOIP & SIP Session Traffic", "Host Platform Infrastructure Fees", "Standardized LTE Data Bundles"],
    },
    {
      eyebrow: "Explicit Warning State",
      title: "Manual Review Required",
      supported: false,
      items: [
        "Cross-Border Satellite Uplinks",
        "Mixed Hardware/Airtime Bundle Slices",
        "Non-Standard eSIM Device Activation Pools",
      ],
    },
  ],
};

export const RESPONSIBILITY_DATA = {
  title: "Isolating Responsibility & Obligations",
  description:
    "Hosting MVNO brands on your platform does not mean you shoulder their regional regulatory filings. ZoikoTax clarifies who is legally responsible for reporting, licensing, and local tax submissions.",
  cards: [
    {
      eyebrow: "MVNE / MVNA Level",
      title: "Platform Host Obligations",
      description:
        "Manage network license fees, direct transport taxes, and utility surcharges tied to the core hosting infrastructure.",
    },
    {
      eyebrow: "MVNO Brand Level",
      title: "Tenant Brand Obligations",
      description:
        "Direct responsibility for consumer sales tax, local E911 fees, municipal communications taxes, and direct filing execution.",
    },
  ] satisfies EyebrowCard[],
};

export const COMPLIANCE_DATA = {
  title: "Downstream Compliance & Workflows",
  description: "Execute region-specific tax filing and digital invoicing workflows isolated per tenant brand.",
  cards: [
    {
      eyebrow: "CTC Clearance",
      title: "Electronic Invoicing",
      description:
        "Coordinate supported e-invoicing handoff through approved profiles and adapters while preserving tenant and legal-entity context.",
    },
    {
      eyebrow: "Obligation Tracking",
      title: "Filing Orchestration",
      description:
        "Track submission states across states, jurisdictions, and countries, automatically updating internal review paths.",
    },
    {
      eyebrow: "Treasury Separation",
      title: "Remittance Directives",
      description:
        "Generate accurate tax liabilities per tenant, sending instruction payloads directly to downstream ERP systems.",
    },
  ] satisfies EyebrowCard[],
};

export const RECONCILIATION_DATA = {
  title: "Operational Reconciliation",
  description:
    "Compare calculated positions against actual billed, reported, and remitted totals on an isolated tenant-by-tenant basis.",
  notice:
    "Numerical alignment across registers confirms logical and computational consistency. It is not conclusive proof of ultimate legal compliance.",
};

export const EVIDENCE_DATA = {
  eyebrow: "Audit-Ready Archive",
  title: "Preserve Evidence Context",
  description:
    "Build durable audit readiness natively into your enablement platform. ZoikoTax signs and preserves the exact state of tax rules, transaction logs, and approval vectors.",
  cards: [
    { title: "Evidence & Source Tracking", description: "Know the origin and path of every transaction payload." },
    { title: "Immutable Registry", description: "No retroactive adjustments without explicit new audit entries." },
    { title: "Governed Approval State", description: "Maintain the precise timestamped logs of operator approvals." },
  ] satisfies TitledCard[],
};

export const SHADOW_DATA = {
  title: "Modernization & Shadow Assurance",
  description:
    "Transition to ZoikoTax at your own pace. Shadow Assurance lets you evaluate determinations against existing incumbent tax engines silently, without altering active production paths.",
  cards: [
    {
      eyebrow: "No Production Write in Shadow Mode",
      title: "Compare Outcomes",
      description:
        "Compare agreed source and ZoikoTax outcomes without changing production; findings remain non-authoritative before governed cutover.",
    },
    {
      eyebrow: "Governed Migration",
      title: "Controlled Decisions",
      description:
        "Plan a governed cutover only after applicable product, coverage, evidence, security, migration, and approval gates pass.",
    },
  ] satisfies EyebrowCard[],
};

export const AI_DATA = {
  eyebrow: "Cooperative Exclusion Rules",
  title: "Governed AI: Advisory, Never Authoritative",
  description:
    "AI may assist research, extraction, classification proposals, investigation, and explanation. It cannot determine legal responsibility or authorize fiscal execution; governed rules, evidence, and required human authority remain decisive.",
};

export const WORKSPACE_DATA = {
  eyebrow: "Synthetic Product Proof",
  title: "Multi-Tenant Fiscal Control Center",
  description: "Platform administrators manage downstream operators from a secure, unified workspace.",
  scope: "Platform Scope: GLOBAL_ENABLEMENT_01",
  scopeBadge: "Secure Host",
  summary: "Downstream Brands: 4 Active",
  rows: [
    {
      brand: "SwiftMobile US",
      entity: "Swift Telco LLC",
      service: "LTE Voice/Data Bundle",
      status: "Supported",
      tone: "success" as StatusTone,
      state: "Pack Ready",
      action: "File Direct",
    },
    {
      brand: "Apex IoT Global",
      entity: "Apex Solutions Inc",
      service: "Machine telemetry",
      status: "Manual Review",
      tone: "warning" as StatusTone,
      state: "Validation required",
      action: "Assign Advisor",
    },
    {
      brand: "Halo Cellular UK",
      entity: "Halo Europe LTD",
      service: "B2C Voice Airtime",
      status: "Supported",
      tone: "success" as StatusTone,
      state: "Pack Ready",
      action: "File Direct",
    },
    {
      brand: "Novus Connect",
      entity: "Novus Telecom S.A.",
      service: "Carrier Transport fees",
      status: "Federated Path",
      tone: "info" as StatusTone,
      state: "Shadow Mode",
      action: "Legacy Engine",
    },
  ],
};

export const INTEGRATIONS_DATA = {
  eyebrow: "Developer Integrations",
  title: "Embed Governed Fiscal Logic Natively",
  cards: [
    {
      title: "Billing & BSS Core",
      description: "Inject transaction rules into native billing event triggers seamlessly.",
    },
    {
      title: "General Ledger Integration",
      description: "Reconcile direct liabilities back into host corporate accounting.",
    },
    {
      title: "API / Event Architecture",
      description: "Idempotent, trackable endpoints designed for enterprise multi-tenancy.",
    },
  ] satisfies TitledCard[],
  action: { label: "Explore Developer Docs", href: "#", variant: "primary" } satisfies Action,
};

export const OUTCOMES_DATA = {
  title: "Aligned Outcomes Across Your Organization",
  cards: [
    {
      title: "Platform Product",
      description: "Evaluate catalog capability with explicit responsibility and coverage boundaries.",
    },
    { title: "Tax Specialist Teams", description: "Control precise rulesets and entity boundaries natively." },
    { title: "CFO & Finance", description: "Close books with accurate, verified downstream revenue." },
    { title: "Billing Engineers", description: "Idempotent APIs designed for scale and platform isolation." },
  ] satisfies TitledCard[],
};

export const FAQ_DATA = {
  title: "Direct Answers on Platform Integration",
  items: [
    {
      title: "How does ZoikoTax prevent host platform liability?",
      description:
        "By enforcing strict legal-entity binding at the transaction level. The host enablement platform remains a technological pipeline, while tax and licensing obligations map specifically to the registered MVNO brand.",
    },
    {
      title: "Can we coexist with an MVNO's preferred legacy tax engine?",
      description:
        "Yes. ZoikoTax supports Federated Mode, allowing legacy systems to perform core calculations while we coordinate transaction mapping, obligations, and e-invoicing states.",
    },
    {
      title: "How is data isolated between downstream brands?",
      description:
        "Tenant and legal-entity access remains permission-scoped; public proof does not define or guarantee a universal isolation mechanism.",
    },
    {
      title: "What happens if a service classification is unsupported?",
      description:
        "The transaction is flagged with an explicit Review State, preventing automated incorrect execution and allowing your team to manually verify classification rules.",
    },
  ] satisfies TitledCard[],
};

export const CONVERSION_DATA = {
  eyebrow: "Governed Multi-Tenant Fiscal Control",
  title: "See how ZoikoTax can fit your MVNE or MVNA platform estate.",
  description:
    "Achieve precise attribution, rigorous tenant isolation, and explicit responsibility boundaries. Integrate native tax determination without structural liability creep.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" },
    { label: "View Current Coverage", href: "/#coverage", variant: "light" },
    { label: "Explore Developers", href: "#", variant: "ghost" },
  ] satisfies Action[],
};
