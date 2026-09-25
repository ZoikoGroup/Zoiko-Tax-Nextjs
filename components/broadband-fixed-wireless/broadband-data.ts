import type { LucideIcon } from "lucide-react";
import {
  Inbox,
  Tag,
  Hash,
  Search,
  ClipboardCheck,
  ShieldCheck,
  RefreshCw,
  FileText,
} from "lucide-react";

export type BadgeTone = "success" | "warning" | "info" | "purple";

export interface TitledCard {
  title: string;
  description: string;
}

export interface ListCard {
  title: string;
  items: string[];
}

const img = (name: string) => `/broadband-fixed-wireless/${name}.webp`;

export const IMAGES = {
  hero: img("hero-bg"),
  heroPanel: img("hero-panel"),
  complexity: img("pattern-complexity"),
  context: img("pattern-context"),
  geography: img("pattern-geography"),
  determination: img("pattern-determination"),
  exemptions: img("pattern-exemptions"),
  evidence: img("pattern-evidence"),
  ai: img("pattern-ai"),
  trust: img("pattern-trust"),
  trustPanel: img("trust-panel"),
  faq: img("pattern-faq"),
  conversion: img("conversion-bg"),
};

export const HERO_DATA = {
  eyebrow: "TELECOM SOLUTION BRIEF",
  title: "Connect recurring connectivity to governed fiscal control",
  description:
    "ZoikoTax helps broadband, ISP, and fixed-wireless providers connect service classification, service-geography context, fiscal determination, regulatory obligations, compliance, reconciliation, and evidence across recurring billing operations.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" as const },
    { label: "Explore Platform", href: "/#platform", variant: "secondary" as const },
    { label: "View Coverage →", href: "/#coverage", variant: "secondary" as const },
  ],
  footnote:
    "Coexists natively with Billing/BSS frameworks • Active Shadow Assurance compares engine drift before production cutover.",
  chain: {
    title: "Governed Recurring Fiscal Chain",
    steps: [
      { tag: "01 / CONTRACT FACT", title: "Recurring Base Fee", badge: "Fact Logged", tone: "info" as BadgeTone },
      {
        tag: "02 / LOCATION CONTEXT",
        title: "Governed Resolution",
        badge: "Jurisdiction Mapped",
        tone: "purple" as BadgeTone,
      },
      {
        tag: "03 / DETERMINATION",
        title: "Supported Outcome",
        badge: "Evidence Context",
        tone: "success" as BadgeTone,
      },
    ],
  },
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct Answer",
  title: "What is the Governed Broadband Fiscal Model?",
  description:
    "ZoikoTax is designed to govern recurring broadband and fixed-wireless fiscal workflows by connecting service classification, service-geography facts, jurisdiction, responsibility, determination, obligations, compliance, reconciliation, and evidence. Access technology and address facts remain inputs, not automatic legal conclusions.",
};

export const CHALLENGES_DATA = {
  eyebrow: "Structural Challenges",
  title: "Six Points of Broadband Complexity",
  cards: [
    {
      title: "Recurring Services",
      description:
        "Continuous, month-over-month subscription billing formats with multi-day adjustments and retroactive plan changes.",
    },
    {
      title: "Service Geography",
      description:
        "Mismatched physical deployment paths, customer premises, and legal coordinates that split state and local tax treatments.",
    },
    {
      title: "Mixed Offers",
      description:
        "Bundled combinations of pure internet transport, hardware leases, and voice services that carry conflicting obligations.",
    },
    {
      title: "Multiple Authorities",
      description:
        "Situs coordinates subject to overlapping layers of county, municipal, state, and specialized utility compliance rules.",
    },
    {
      title: "Responsibility Ambiguity",
      description:
        "Unclear lines of commercial accountability between wholesale carriers, physical network operators, and white-label retail partners.",
    },
    {
      title: "Audit Exposure",
      description:
        "Historical billing datasets must remain traceably linked to the exact version of the tax engine and regulatory rulebook at execution.",
    },
  ] satisfies TitledCard[],
};

export const LOOP_DATA = {
  eyebrow: "Workflow Pipeline",
  title: "The Continuous Compliance Loop",
  stages: [
    { label: "Receive", icon: Inbox },
    { label: "Classify", icon: Tag },
    { label: "Attribute", icon: Hash },
    { label: "Determine", icon: Search },
    { label: "Obligate", icon: ClipboardCheck },
    { label: "Comply", icon: ShieldCheck },
    { label: "Reconcile", icon: RefreshCw },
    { label: "Prove", icon: FileText },
  ] satisfies { label: string; icon: LucideIcon }[],
};

export const CONTEXT_MODEL_DATA = {
  eyebrow: "Data Schema",
  title: "Service, Offer & Transaction Context Model",
  cards: [
    {
      title: "Commercial Context",
      items: ["Plan tier contracts", "Mixed bundles", "Hardware offsets", "Retroactive discounts"],
    },
    {
      title: "Offer & Component",
      items: ["Data transport limits", "Managed security add-ons", "Leased equipment", "Digital components"],
    },
    {
      title: "Service Location",
      items: ["Situs coordinates", "Service delivery points", "Local authority zones", "Effective dates"],
    },
    {
      title: "Evidence & Audit",
      items: ["Source provenance reference", "Rule versions", "Human approval states", "Versioned evidence references"],
    },
  ] satisfies ListCard[],
};

export const CLASSIFICATION_DATA = {
  eyebrow: "Tax Taxonomy",
  title: "Service Classification & Offer Governance",
  description:
    "Do not rely on vendor names or network standards (such as GPON, Docsis, or 5G FWA) to establish tax eligibility. ZoikoTax provides a rigorous mapping system that isolates the commercial product presentation from the raw technical capability of the connection.",
  from: { title: "Commercial Presentations", description: "Illustrative broadband offer reference" },
  to: {
    title: "True Governed Fiscal Schema",
    description: "90% Digital Transport Access + 10% Leased Terminal Equipment Interface",
  },
};

export const GEOGRAPHY_DATA = {
  eyebrow: "Spatial Mapping",
  title: "Situs, Jurisdiction & Provenance",
  description:
    "Telecom tax situs is dynamic. Instead of simple zipcode-to-rate lookup charts, ZoikoTax tracks physical location facts with direct spatial coordinate provenance and effective timestamps.",
  rows: [
    {
      title: "Customer Delivery Node Alpha",
      coordinates: "Lat 38.5816, Lon -121.4944",
      authority: "State Utility Board + County Transit Zone",
      badge: "Active Mapped",
    },
    {
      title: "Wholesale Delivery Hand-off Beta",
      coordinates: "Lat 37.7749, Lon -122.4194",
      authority: "Interstate Transit Authority Interface",
      badge: "Federated Mapped",
    },
  ],
};

export const LEGAL_ENTITY_DATA = {
  eyebrow: "Who is Accountable?",
  title: "Legal Entity, Commercial Role & Responsibility",
  description:
    "Separate your operational brand layers from true regulatory accountability. ZoikoTax maps outcomes differently based on active roles (MNO, MVNO, Reseller, or Enabler) to defend physical entity borders.",
  cards: [
    {
      title: "Wholesale Infrastructure Provider",
      description:
        "Monetary tax calculations handled internally; regulatory compliance report shared with reseller.",
    },
    {
      title: "White-Label Connectivity Reseller",
      description: "Wholesaler computes baseline; retail taxes mapped directly to consumer retail pricing models.",
    },
    {
      title: "Enterprise Client Managed Network",
      description: "Mixed entities; complex customer exemptions mapped at node rather than general account level.",
    },
  ] satisfies TitledCard[],
};

export const DETERMINATION_DATA = {
  eyebrow: "Calculations Engine",
  title: "Deterministic Monetary Outcomes",
  description:
    "Tax compliance is too sensitive for probabilistic machine-learning models. ZoikoTax computes outcomes using explicit, governed, rules-based logic. We do not hardcode rates or invent broad, unverified tax labels.",
  flow: "Input facts preserved → governed rule and version context → supported outcome",
  badge: "Deterministic Pass",
};

export const OBLIGATIONS_DATA = {
  eyebrow: "Reporting Systems",
  title: "Obligations & Unified Compliance",
  description:
    "Track obligation states and secure automated e-invoicing without claiming universal coverage. Continuous calendar integration helps internal accounting teams identify upcoming filings globally.",
  items: [
    { title: "Automated Monthly Tax Filing", badge: "Operational", tone: "success" as BadgeTone },
    {
      title: "E-Invoicing and Continuous Transaction Controls",
      badge: "Verification Required",
      tone: "warning" as BadgeTone,
    },
    { title: "Overlapping Municipality Reporting", badge: "Operational", tone: "success" as BadgeTone },
  ],
};

export const EXEMPTIONS_DATA = {
  eyebrow: "Exemption Controls",
  title: "Exemptions & Recovery Boundaries",
  description:
    "Manage supported exemption evidence and applicability context only where the applicable jurisdiction and capability provide a governed workflow.",
  cards: [
    {
      title: "Durable Exemption Evidence",
      description:
        "Preserve effective dates, review state, source evidence, and capability support where governed.",
    },
    {
      title: "Recovery Context Limits",
      description:
        "Keep supported applicability context and evidence distinct; unsupported or ambiguous states remain visible for review.",
    },
  ] satisfies TitledCard[],
};

export const RECONCILIATION_DATA = {
  eyebrow: "Reconciliation Loop",
  title: "Calculated vs. Billed vs. Paid Ledger Reconciliation",
  description:
    "Avoid billing discrepancies by linking all five compliance stages inside a unified ledger format.",
  stages: ["Calculated", "Billed", "Collected", "Reported", "Paid", "Reconciled GL"],
};

export const EVIDENCE_DATA = {
  eyebrow: "Durable Facts",
  title: "Evidence & Replay Manifests",
  description:
    "Preserve source inputs, rule and content versions, approvals, and replay references for historical reconstruction where supported. Missing dependencies remain explicit.",
  reference: "Illustrative evidence references • versioned context",
  badge: "Evidence Context Available",
};

export const SHADOW_DATA = {
  eyebrow: "Coexistence Strategies",
  title: "Shadow Assurance & Migration Boundaries",
  description:
    "Deploy ZoikoTax as a shadow layer alongside your current tax engine. Compare outcome variations in production without impacting downstream customer bills before a controlled migration.",
  cards: [
    {
      title: "Native",
      description: "Operates as the primary computation engine across supported billing paths.",
    },
    {
      title: "Federated",
      description: "Manages obligation states while external engines continue financial calculations.",
    },
    {
      title: "Shadow Assurance",
      description: "Compares billing results on live streams without modifying live production logic.",
    },
  ] satisfies TitledCard[],
};

export const AI_DATA = {
  eyebrow: "AI Boundaries",
  title: "Governed Artificial Intelligence",
  description:
    "AI may assist research, classification proposals, anomaly investigation, forecasting, and explanation. Authoritative fiscal actions remain governed and are not delegated to AI.",
  cards: [
    {
      title: "AI May",
      items: [
        "Suggest tariff classifications based on contract drafts",
        "Detect anomalies in monthly filing ledgers",
        "Assist team members researching local rule updates",
      ],
    },
    {
      title: "AI May Not",
      items: [
        "Silently overwrite approved billing outcomes",
        "Skip human-required compliance checks",
        "Bypass rule audit trails and evidence requirements",
      ],
    },
  ] satisfies ListCard[],
};

export const WORKSPACE_DATA = {
  eyebrow: "Interactive Control Workspace",
  title: "Synthetic Broadband Fiscal Workspace",
  panelTitle: "Active Connection Event Monitoring",
  mode: "Workspace Mode: Safe Preview",
  columns: ["Event ID", "Source System", "Service Type", "Jurisdiction Context", "Status"],
  rows: [
    {
      id: "TX-9481",
      source: "Billing Hub Fiber Event",
      service: "Business Broadband",
      jurisdiction: "Oregon Delivery Point v2",
      status: "Approved",
      tone: "success" as BadgeTone,
    },
    {
      id: "TX-9482",
      source: "Fixed Wireless Billing Engine",
      service: "Mixed Service Bundle",
      jurisdiction: "California Hand-off v1",
      status: "Review Required",
      tone: "warning" as BadgeTone,
    },
    {
      id: "TX-9483",
      source: "Enterprise Satellite Hub",
      service: "Private Line Interface",
      jurisdiction: "Federal Transit Boundary",
      status: "Approved",
      tone: "success" as BadgeTone,
    },
  ],
};

export const COVERAGE_DATA = {
  eyebrow: "Coverage Boundaries",
  title: "Capability-specific Coverage & Readiness",
  description:
    "Current readiness must come from governed Coverage sources for the exact market and capability scope. Status unavailable remains explicit.",
  markets: [
    { label: "Market A — Illustrative capability scope", state: "ok" as const },
    { label: "Market Beta — Shadow Assurance (Assessment Available)", state: "ok" as const },
    { label: "Market Gamma — E-Invoicing (Discovery Required)", state: "warning" as const },
  ],
  panel: {
    title: "Permission-scoped Data Boundaries",
    caption: "Secure Operations Zone v4 • Tenant Isolated",
  },
};

export const OUTCOMES_DATA = {
  eyebrow: "Strategic Outcomes",
  title: "Engineered for Cross-Functional Governance",
  cards: [
    { title: "Tax Teams", description: "Deploy deterministic rules with clear audit trail logic." },
    { title: "Regulatory Teams", description: "Track non-tax utility filings without system drift." },
    { title: "Finance Teams", description: "Reconcile continuous cycles direct to ledger." },
    { title: "Revenue Assurance", description: "Detect leakage between computed and billed states." },
    { title: "Billing Engineering", description: "Isolate complex logic outside raw codebase paths." },
    { title: "Product Teams", description: "Launch recurring offers with instant classification." },
    { title: "Technology Leaders", description: "Incorporate modern, tenant-isolated architecture." },
    { title: "Audit & Risk", description: "Review replayable evidence manifests on demand." },
  ] satisfies TitledCard[],
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Broadband Fiscal FAQ",
  items: [
    {
      title: "How is broadband connectivity classified under modern tax frameworks?",
      description:
        "Classification uses supplied commercial and service facts under governed rules; access-technology labels alone do not establish fiscal treatment.",
    },
    {
      title: "Does ZoikoTax hardcode local utility tax rates?",
      description:
        "No universal rate or treatment is inferred. Determination uses supported governed packs where ZoikoTax is authoritative; unsupported states remain explicit.",
    },
    {
      title: "How does the system reconcile calculated and billed values?",
      description:
        "Reconciliation can tie calculated, billed, collected, reported, paid, and GL or exported positions where supported, with exceptions and evidence links.",
    },
    {
      title: "Can we run ZoikoTax safely alongside legacy tax software?",
      description:
        "Shadow Assurance can run non-impact comparison alongside existing systems; findings remain non-authoritative until reviewed and adopted.",
    },
    {
      title: "How are recurring subscription adjustments managed?",
      description:
        "Recurring charges and supplied adjustments retain billing-period, reference, and provenance context for governed review and reconciliation.",
    },
    {
      title: "Who is responsible for tax calculation in reseller models?",
      description:
        "Responsibility is resolved from supported legal-entity, commercial-role, jurisdiction, and governing context; reseller status alone does not determine duty.",
    },
    {
      title: "What is a replay manifest?",
      description:
        "An evidence and replay reference preserves material inputs, versions, provenance, approvals, and dependency state needed for later reconstruction where supported.",
    },
    {
      title: "Does AI make final decisions in ZoikoTax?",
      description:
        "AI may assist research, classification proposals, anomaly investigation, forecasting, and explanation. Authoritative fiscal actions remain governed.",
    },
    {
      title: "How secure is tenant data under this model?",
      description:
        "Security, privacy, residency, isolation, and access controls are evaluated against scoped Trust documentation and deployment context.",
    },
    {
      title: "What integrations are supported natively?",
      description:
        "Supported patterns include APIs, events, batch, and governed connections with Billing/BSS, ERP, tax engines, data platforms, and embedded or OEM models; exact availability is capability-specific.",
    },
  ] satisfies TitledCard[],
};

export const CONVERSION_DATA = {
  eyebrow: "MODERNIZE BROADBAND FISCAL ARCHITECTURE",
  title: "See how ZoikoTax can fit your broadband and fixed-wireless operating model.",
  description:
    "Use Shadow Assurance for non-impact comparison before cutover; findings remain non-authoritative.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" as const },
    { label: "View Coverage", href: "/#coverage", variant: "secondary" as const },
    { label: "Explore Developers", href: "/#developers", variant: "secondary" as const },
  ],
};
