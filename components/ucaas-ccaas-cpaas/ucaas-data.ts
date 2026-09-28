export type BadgeTone = "success" | "neutral";

export interface TitledCard {
  title: string;
  description: string;
}

export interface Action {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface TextBlock {
  eyebrow: string;
  title: string;
  description: string;
}

const img = (name: string) => `/ucaas-ccaas-cpaas/${name}.webp`;

export const IMAGES = {
  hero: img("hero-bg"),
  complexity: img("pattern-complexity"),
  classification: img("pattern-classification"),
  determination: img("pattern-determination"),
  reconciliation: img("pattern-reconciliation"),
  integrations: img("pattern-integrations"),
  faq: img("pattern-faq"),
  conversion: img("conversion-bg"),
};

export const HERO_DATA = {
  eyebrow: "UCaaS, CCaaS & CPaaS",
  title: "Govern fiscal decisions across complex cloud communications.",
  description:
    "ZoikoTax connects governed service classification, jurisdiction, fiscal responsibility, obligations, reconciliation, and evidence across cloud communications platforms that combine voice, messaging, APIs, software, and bundled services.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" },
    { label: "Explore Platform", href: "/platform-overview", variant: "secondary" },
    { label: "View Coverage →", href: "#coverage", variant: "secondary" },
  ] satisfies Action[],
  matrix: {
    title: "Governed Telecom Decision Chain Matrix",
    steps: [
      { title: "1. Receive Facts", description: "Receive source-approved transaction, usage, and fiscal facts." },
      {
        title: "2. Classify Bundle",
        description: "Keep offer components and source descriptors distinct from governed classification.",
      },
      {
        title: "3. Attribute Location",
        description: "Preserve source-approved endpoint and location facts for governed jurisdiction analysis.",
      },
      {
        title: "4. Determine Outcome",
        description:
          "Resolve jurisdiction, authority, responsibility, and obligation context through governed rules and review.",
      },
    ] satisfies TitledCard[],
  },
};

export const DIRECT_ANSWER_DATA: TextBlock = {
  eyebrow: "The Direct Answer",
  title: "How does ZoikoTax solve cloud communications compliance?",
  description:
    "Product and technical facts remain inputs. Governed classification, jurisdiction, responsibility, approved rules, and required authority determine consequential fiscal outcomes.",
};

export const CHALLENGES_DATA = {
  eyebrow: "Structural Challenges",
  title: "Navigating UCaaS, CCaaS & CPaaS Complexity",
  cards: [
    {
      title: "Mixed Components",
      description: "Software licenses combined with hardware, voice usage, and SMS volume.",
    },
    {
      title: "Evolving Bundles",
      description: "Dynamic seat tiers where inclusions change monthly based on usage facts.",
    },
    {
      title: "Multiple Authorities",
      description: "Overlap of local utility, state communications, and national tax rules.",
    },
    {
      title: "Launch Pressure",
      description: "Quick-to-market feature deployments that outpace traditional compliance cycles.",
    },
  ] satisfies TitledCard[],
};

export const LIFECYCLE_DATA = {
  eyebrow: "Deterministic Compliance Engine",
  title: "The Eight-Stage Telecom Fiscal Lifecycle",
  stages: [
    { title: "Receive", description: "Ingest multi-tenant stream parameters and system facts." },
    { title: "Classify", description: "Break offerings into distinct component rules." },
    {
      title: "Attribute",
      description: "Preserve source-approved location facts and explicit unresolved states.",
    },
    { title: "Determine", description: "Resolve appropriate fiscal jurisdictions." },
    { title: "Obligate", description: "Calculate the exact non-tax duties and registry fees." },
    { title: "Comply", description: "Execute governed filings and reporting." },
    { title: "Reconcile", description: "Cross-check transactional lists against lead books." },
    { title: "Prove", description: "Compile final replayable documentation and evidence." },
  ] satisfies TitledCard[],
};

export const CONTEXT_MODEL_DATA = {
  eyebrow: "Enterprise Data Provenance",
  title: "Governed Context Model",
  panel: {
    title: "Dynamic Stream Ingestion",
    description:
      "The model links software subscription seats, API transactions, physical device leases, and physical network endpoints back to documented fiscal jurisdictions.",
  },
  rows: [
    { label: "Product & Offer", value: "Licenses • Seat Bundles • Hardware" },
    { label: "Usage & Rating", value: "CDR Logs • SMS API Calls • Toll-free routes" },
    { label: "Tenant & Location", value: "Physical registered addresses • Endpoints • Connection nodes" },
    { label: "Evidence Provenance", value: "Idempotent response manifests • Version hashes" },
  ],
};

export const CLASSIFICATION_DATA: TextBlock = {
  eyebrow: "Bundle Governance",
  title: "Service Classification vs. In-App Marketing",
  description:
    "Package labels, in-app feature flags, and billing SKUs do not equal governed fiscal definitions. ZoikoTax maps dynamic cloud tiers into recognized service components to ensure every software license, voice utility minutes, or API usage fact receives accurate classification.",
};

export const JURISDICTION_DATA: TextBlock = {
  eyebrow: "Dynamic Location Routing",
  title: "Determining True Jurisdiction",
  description:
    "We treat physical location as a governed input, not as a static, automatic guess. By compiling registration facts, connection handshakes, and verifiable address directories, ZoikoTax traces active lines back to proper jurisdictions.",
};

export const RESPONSIBILITY_DATA = {
  eyebrow: "Actor Rules",
  title: "Assigning Fiscal Responsibility",
  cards: [
    {
      title: "Wholesale Carrier",
      description:
        "Supplies core physical routes. Responsible for infrastructure duties and wholesale regulatory status.",
    },
    {
      title: "Platform Provider",
      description: "Orchestrates API calls and system routing. Manages technology transaction logs.",
    },
    {
      title: "Reseller / Retailer",
      description: "Faces the final customer. Holds downstream billing compliance obligations.",
    },
  ] satisfies TitledCard[],
};

export const DETERMINATION_DATA: TextBlock = {
  eyebrow: "Deterministic Calculations",
  title: "Governed Tax Determination",
  description:
    "ZoikoTax does not showcase fixed rates or speculative amounts. Instead, we produce deterministic outcomes verified against active rule versions and local authority parameters. Every calculation result maps directly to an audit-ready metadata context.",
};

export const OBLIGATIONS_DATA = {
  eyebrow: "Global Filings",
  title: "System Obligation Workflows",
  cards: [
    {
      title: "Local Registrations",
      description: "Maintain legal-entity and support context within approved capability scope.",
    },
    { title: "Dynamic Reporting", description: "Automate raw transactional files into clean tax forms." },
    {
      title: "E-Invoicing & CTC Context",
      description:
        "Coordinate supported invoice and CTC workflows through governed profiles and adapters where available.",
    },
  ] satisfies TitledCard[],
};

export const RECONCILIATION_DATA: TextBlock = {
  eyebrow: "Financial Reconciliation",
  title: "Continuous Audit Alignment",
  description:
    "Our platform aligns every step of the lifecycle: linking transaction events with calculated amounts, billing invoice records, actual collections, and the final General Ledger exports. This approach prevents reconciliation gaps and simplifies audit preparation.",
};

export const EVIDENCE_DATA = {
  eyebrow: "Durable Provenance",
  title: "Evidence-First Architecture",
  cards: [
    { title: "Facts Logged", description: "Every record captures raw origin metadata." },
    { title: "Rule Versioning", description: "Historical rule versions are preserved indefinitely." },
    { title: "Proven Replays", description: "Reconstruct older calculations with perfect consistency." },
  ] satisfies TitledCard[],
};

export const WORKSPACE_DATA = {
  eyebrow: "Operations Interface",
  title: "Cloud Communications Workspace",
  description:
    "Ingest and review transaction logs, classifications, and audit trials within an integrated management console.",
  panelTitle: "ZoikoTax Workspace Pro",
  badge: "Live Sandbox Environment",
  rows: [
    { id: "TX-10029", service: "UCaaS seat bundle", endpoint: "Endpoint Sacramento, CA", status: "Active Determination" },
    { id: "TX-10030", service: "SMS verification API", endpoint: "Endpoint Seattle, WA", status: "Cleared CTC" },
    { id: "TX-10031", service: "SIP Trunk Voice Call", endpoint: "Endpoint Austin, TX", status: "Federated Path" },
  ],
};

export const INTEGRATIONS_DATA = {
  eyebrow: "Coexistence & Extensibility",
  title: "Flexible Architecture Integrations",
  cards: [
    {
      title: "Billing & BSS Platforms",
      description: "Connect natively with enterprise billing stacks and rating engines.",
    },
    {
      title: "ERP & General Ledger",
      description: "Export compliant journals and general ledger adjustments automatically.",
    },
    {
      title: "Incumbent Tax Engines",
      description: "Coexist comfortably with existing tax engines through shadow mapping.",
    },
  ] satisfies TitledCard[],
};

export const COVERAGE_DATA = {
  eyebrow: "Coverage Boundaries",
  title: "Capability-specific coverage & readiness",
  description:
    "Current readiness is capability-, jurisdiction-, profile-, and adapter-specific and must come from governed Coverage sources.",
  markets: [
    { market: "Market A", scope: "Illustrative capability scope", badge: "Illustrative", tone: "success" as BadgeTone },
    { market: "Market B", scope: "Status unavailable", badge: "Status unavailable", tone: "success" as BadgeTone },
    { market: "Market C", scope: "Illustrative integration scope", badge: "Illustrative", tone: "neutral" as BadgeTone },
  ],
};

export const TEAMS_DATA = {
  eyebrow: "Organizational Value",
  title: "Empowering Every Team",
  cards: [
    {
      title: "Tax & Compliance",
      description: "Approve dynamic service classification categories and rules with confidence.",
    },
    {
      title: "CFO & Finance",
      description: "Speed up period close with aligned calculated liabilities and General Ledger records.",
    },
    {
      title: "Revenue Assurance",
      description: "Analyze transaction differences in Shadow Assurance to find potential billing leakage.",
    },
    {
      title: "Billing Engineers",
      description: "Integrate through structured endpoints without managing tax rules in core code.",
    },
  ] satisfies TitledCard[],
};

export const FAQ_DATA = {
  eyebrow: "Common Questions",
  title: "Frequently Asked Questions",
  items: [
    {
      title: "How are bundle inclusions classified?",
      description:
        "Inclusions are broken down dynamically by service line. Software elements, minutes, and devices are attributed to their verified rules, avoiding arbitrary bulk allocation.",
    },
    {
      title: "How is physical location verified?",
      description:
        "We map physical connection nodes and client network addresses. This replaces static address estimations with trace indicators.",
    },
    {
      title: "Can we run this system alongside existing billing platforms?",
      description:
        "Yes. ZoikoTax connects smoothly with core billing stacks through modern event logs or simple batch files.",
    },
    {
      title: "Is shadow testing supported before system migration?",
      description:
        "Absolutely. Shadow Assurance lets you test live traffic stream calculations side-by-side with no impact on production billing.",
    },
    {
      title: "How are calculation outcomes verified for audit?",
      description:
        "The system is designed to preserve source facts, governed rule and content versions, approvals, and replay references for historical reconstruction where supported.",
    },
  ] satisfies TitledCard[],
};

export const CONVERSION_DATA = {
  eyebrow: "Governed Fiscal Control for Cloud Communications",
  title: "See how ZoikoTax can fit your UCaaS, CCaaS or CPaaS architecture.",
  description:
    "Evaluate how governed classification, jurisdiction, responsibility, obligations, reconciliation, and evidence can fit your cloud communications platform without treating product labels or usage units as fiscal rules.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" },
    { label: "View Coverage", href: "#coverage", variant: "secondary" },
  ] satisfies Action[],
};
