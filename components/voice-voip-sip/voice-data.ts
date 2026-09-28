export interface TitledCard {
  title: string;
  description: string;
}

export interface ListCard {
  title: string;
  items: string[];
}

export interface Action {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "glass";
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  description: string;
}

const img = (name: string) => `/voice-voip-sip/${name}.webp`;

export const IMAGES = {
  hero: img("hero-bg"),
  complexity: img("pattern-complexity"),
  lifecycle: img("lifecycle-bg"),
  classification: img("pattern-classification"),
  responsibility: img("pattern-responsibility"),
  obligations: img("pattern-obligations"),
  reconciliation: img("reconciliation-bg"),
  shadow: img("shadow-bg"),
  ai: img("ai-bg"),
  integrations: img("pattern-integrations"),
  faq: img("pattern-faq"),
  conversion: img("conversion-bg"),
};

export const HERO_DATA = {
  eyebrow: "Voice, VoIP & SIP Solver",
  title: "Govern fiscal decisions across voice and IP communications.",
  description:
    "ZoikoTax connects commercially rated communications facts to governed classification, jurisdiction, responsibility, tax determination, obligations, reconciliation, and evidence — without reducing complex voice and IP models to a rate lookup.",
  note: "Deploy ZoikoTax natively where supported, integrate with existing billing and tax systems, or use Shadow Assurance to compare outcomes before authoritative cutover.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" },
    { label: "Explore the Platform", href: "/platform-overview", variant: "secondary" },
    { label: "View Current Coverage", href: "/#coverage", variant: "secondary" },
  ] satisfies Action[],
};

export const DIRECT_ANSWER_DATA: SectionIntro = {
  eyebrow: "Architectural Fact",
  title: "Voice metadata informs the workflow. Governing rules determine the outcome.",
  description:
    "A call detail record (CDR), SIP header, or billing event contains structural technical details—IP addresses, protocol tags, routing strings, and timestamps. While these parameters serve as inputs, they do not dictate regulatory or fiscal treatment. Legally robust decisions are derived from deterministic rules, version-controlled policies, and confirmed jurisdictional frameworks. Distinguishing facts from governing decisions is key to auditable compliance.",
};

export const COMPLEXITY_DATA = {
  eyebrow: "Structural Risk",
  title: "Telecom fiscal complexity is architectural, not occasional.",
  description:
    "Voice and IP services can combine changing source facts, distributed service contexts, and multiple commercial roles. Technical routing and protocol facts remain inputs, not automatic fiscal conclusions.",
  cards: [
    {
      title: "Complex Services",
      description:
        "Private networks, SIP trunking, call center modules, and mixed access categories escape basic taxing definitions.",
    },
    {
      title: "Distributed Geography",
      description:
        "Originating routing targets, terminating Gateways, and network path layers complicate location verification.",
    },
    {
      title: "Multiple Authorities",
      description:
        "Divergent state, local, public safety, and national agency rules overlap within a single communication path.",
    },
    {
      title: "Multi-Party Responsibility",
      description:
        "Reseller roles, wholesale carriers, white-labeled platforms, and customer agents shift fiscal accountability.",
    },
    {
      title: "Audit Exposure",
      description:
        "Enterprise review requires preserved source references, versions, approvals, and replay context; missing or restricted evidence remains visible.",
    },
    {
      title: "Fragmented Systems",
      description:
        "Legacy rating structures separated from compliance systems increase validation gaps and reporting risk.",
    },
  ] satisfies TitledCard[],
};

export const LIFECYCLE_DATA = {
  eyebrow: "Eight-Stage Regulatory Flow",
  title: "One governed telecom compliance lifecycle",
  description:
    "The workflow separates eight governed stages so context, authority, and evidence remain visible from intake through replay.",
  cards: [
    { title: "Receive", description: "Ingest session detail fragments and event flows." },
    { title: "Classify", description: "Separate raw protocol elements from fiscal types." },
    { title: "Attribute", description: "Identify multi-party commercial roles and entities." },
    { title: "Determine", description: "Process transaction metadata against rule logic." },
    { title: "Obligate", description: "Map tax boundaries, fees, and regulatory requirements." },
    { title: "Comply", description: "Draft filings and clear electronic invoices." },
    { title: "Reconcile", description: "Continuously balance transaction logs to ledgers." },
    { title: "Prove", description: "Compile complete evidence bundles for replay." },
  ] satisfies TitledCard[],
};

export const CONTEXT_MODEL_DATA = {
  eyebrow: "System Schematics",
  title: "Voice Service & Transaction Context Model",
  description:
    "Illustrative model showing how technical facts remain separate from governed fiscal context and evidence.",
  technical: {
    title: "Technical Metadata Ingestion",
    rows: [
      { label: "Raw Service Identity", value: "Illustrative service reference" },
      { label: "Media Protocol", value: "Protocol descriptor supplied by source" },
      { label: "Session Origin", value: "Illustrative origin reference" },
      { label: "Session Target", value: "Illustrative destination reference" },
      { label: "Signaling Path", value: "Illustrative signaling-path reference" },
      { label: "Duration Facts", value: "Illustrative duration fact" },
    ],
  },
  governed: {
    title: "Governed Fiscal Context",
    rows: [
      { label: "Fiscal Jurisdiction", value: "Illustrative jurisdiction result" },
      { label: "Service Classification", value: "Proposed service classification — review required" },
      { label: "Commercial Entity", value: "Illustrative provider and entity context" },
      { label: "Exemption State", value: "Status unavailable / review required" },
      { label: "Evidence Package", value: "Versioned evidence references — illustrative" },
      { label: "Filing Status", value: "Illustrative downstream obligation state" },
    ],
  },
};

export const CLASSIFICATION_DATA = {
  eyebrow: "Protocol vs. Treatment",
  title: "Separate system configuration from tax classification rules.",
  description:
    "SIP, RTP, H.323, and WebRTC are protocol descriptions—not fiscal categories. ZoikoTax isolates system mechanics from legal reality. Rules translate technical event logs into stable, auditable tax classes, ensuring technology updates do not alter compliance logic.",
  input: {
    title: "System Configuration Labels (Raw Input)",
    items: [
      "SIP Signaling and SDP payloads",
      "Interconnected Trunking Gateway tags",
      "Private Circuit Interface properties",
    ],
  } satisfies ListCard,
  output: {
    title: "Governed Compliance Classes (Deterministic Output)",
    items: [
      "Interconnected VoIP (Federal & State Treatment)",
      "Non-Interconnected Voice Transport Access",
      "Ancillary Digital Communication Enhancements",
    ],
  } satisfies ListCard,
};

export const GEOGRAPHY_DATA = {
  eyebrow: "Geographic Resolution",
  title: "Geography as facts—never automatic situs.",
  description:
    "Determining location for virtual sessions requires robust evidence, not assumptions. ZoikoTax treats IP points, gateway registries, billing statements, and signaling routes as distinct elements to verify location securely.",
  cards: ["Signaling IP", "Gateway Registry", "Customer Billing", "Signaling Route"].map((title) => ({
    title,
    description: "Verified coordinate input to ensure accurate location validation.",
  })) satisfies TitledCard[],
};

export const RESPONSIBILITY_DATA = {
  eyebrow: "Accountability Assignment",
  title: "Distinguish commercial role, legal entity, and fiscal responsibility.",
  description:
    "Voice services involve multiple resellers, software platforms, and underlying network operators. ZoikoTax clarifies who is responsible for each transaction to keep compliance accurate and prevent dual-taxation issues.",
  cards: [
    {
      title: "Reseller Platform Models",
      description:
        "Determine legal accountability for white-label platform services and underlying network facilities.",
    },
    {
      title: "Principal Carrier Configurations",
      description: "Assign tax responsibilities between wholesale network providers and retail application sellers.",
    },
  ] satisfies TitledCard[],
};

export const DETERMINATION_DATA = {
  eyebrow: "Deterministic Logic",
  title: "Verifiable outcomes derived from governing context",
  description:
    "Supported outcomes use governed rule and content versions, jurisdiction, and responsibility context where ZoikoTax is authoritative. Unknown or unsupported states remain explicit.",
  cards: [
    {
      title: "Active Rule Registry",
      description: "Confirm which rules applied when the call occurred to trace decisions cleanly.",
    },
    {
      title: "Deterministic Proof",
      description: "Verify outputs through mathematical modeling, not subjective estimations.",
    },
    {
      title: "Version Traceability",
      description: "Maintain clear historical snapshots to support audits and trace updates easily.",
    },
  ] satisfies TitledCard[],
};

export const OBLIGATIONS_DATA = {
  eyebrow: "Workflow Execution",
  title: "Govern registration, reporting, and e-invoicing states.",
  description:
    "Beyond simple calculations, compliance requires managing complex tasks. ZoikoTax controls registration workflows, public safety reporting requirements, and local digital filing rules step-by-step.",
  cards: ["Filing States", "Registry Management", "Digital E-Invoicing"].map((title) => ({
    title,
    description: "Track regulatory updates, submission dates, and active workflows in real time.",
  })) satisfies TitledCard[],
};

export const RECONCILIATION_DATA = {
  eyebrow: "Continuous Verification",
  title: "Balance calculated, billed, and collected positions.",
  description:
    "Ensure absolute financial consistency across your operations. ZoikoTax automatically matches system calculations with billing statements, cash receipts, and tax filings to eliminate variance.",
  cards: ["Billing Systems", "General Ledgers", "Filing Reports"].map((title) => ({
    title,
    description:
      "Compare calculated positions against transaction logs to prevent data mismatch and resolve variances early.",
  })) satisfies TitledCard[],
};

export const EVIDENCE_DATA = {
  eyebrow: "Versioned Evidence",
  title: "Reconstruct results from preserved facts and governing content.",
  description:
    "Ensure audit readiness with verifiable proof. ZoikoTax seals the original input metadata, jurisdictional details, active system rules, and approval records into a secure, replayable bundle.",
  cards: ["Original Inputs", "Rule Versions", "Approval Records"].map((title) => ({
    title,
    description:
      "Preserve source references, rule and content versions, approvals, and replay pointers where supported.",
  })) satisfies TitledCard[],
};

export const SHADOW_DATA = {
  eyebrow: "Risk Mitigation",
  title: "Compare outcomes safely without impacting production.",
  description:
    "Use Shadow Assurance to compare agreed source and ZoikoTax outcomes without changing production. Findings remain non-authoritative before cutover.",
  cards: [
    {
      title: "Native Mode",
      description:
        "Use a native operating model only where the applicable capability and pack are production-ready.",
    },
    {
      title: "Federated Mode",
      description: "Govern complex compliance tasks while legacy systems calculate rates.",
    },
    {
      title: "Shadow Mode",
      description: "Compare system outputs silently without disrupting production paths.",
    },
  ] satisfies TitledCard[],
};

export const AI_DATA = {
  eyebrow: "Governed AI",
  title: "Advisory assistance—never autonomous decision-making.",
  description:
    "AI should support operations, not manage them. ZoikoTax limits AI to diagnostic assistance, regulatory research, and analysis. Final decisions always require human approval or verified rules.",
  may: {
    title: "AI May (Diagnostic Support)",
    items: [
      "Highlight variance anomalies across jurisdictions",
      "Recommend service classifications for review",
      "Help teams research historical compliance updates",
    ],
  } satisfies ListCard,
  mayNot: {
    title: "AI May Not (System Limits)",
    items: [
      "Update active rules or classifications autonomously",
      "Change tax calculations without verified inputs",
      "Bypass required human review or audit trails",
    ],
  } satisfies ListCard,
};

export const ARCHITECTURE_DATA = {
  eyebrow: "Operating Architecture",
  title: "Fit the architecture you operate today.",
  description:
    "ZoikoTax connects with your existing tech stack without requiring complex rebuilds or fragile logic integrations.",
  cards: [
    {
      title: "Billing & BSS/OSS",
      description: "Integrate cleanly with billing systems and operations platforms.",
    },
    {
      title: "Legacy Tax Engines",
      description: "Federate and exchange data with existing tax systems smoothly.",
    },
    { title: "ERP & General Ledger", description: "Export transaction records to financial ledgers cleanly." },
    { title: "APIs & Event Streams", description: "Process high-volume transaction data in real time." },
    {
      title: "Partner & OEM Embeds",
      description: "Embed governed compliance rules directly into your platform.",
    },
    {
      title: "E-Invoicing Networks",
      description: "Connect with regional digital invoicing and compliance systems.",
    },
  ] satisfies TitledCard[],
};

export const TEAMS_DATA = {
  eyebrow: "Organizational Success",
  title: "Predictable outcomes for every accountability layer",
  description:
    "ZoikoTax supports billing engineers, financial managers, and risk auditors with unified compliance controls.",
  cards: [
    {
      title: "Tax Team",
      description: "Evaluate governed determinations and obligations with version and evidence context.",
    },
    {
      title: "Regulatory Team",
      description: "Identify, assign, and track compliance requirements across overlapping authorities.",
    },
    {
      title: "Finance Team",
      description: "Balance calculated liabilities, billing registers, and general ledger accounts smoothly.",
    },
    {
      title: "Revenue Assurance",
      description: "Detect leakages and explain outcome variances with robust computational trace records.",
    },
    {
      title: "Billing Engineers",
      description: "Integrate platform systems without building complex, hard-coded tax formulas.",
    },
    {
      title: "Product & Commercial",
      description: "Deploy new communication services quickly with pre-configured market packs.",
    },
    {
      title: "Technology Leaders",
      description: "Modernize stack architecture using secure, resilient compliance infrastructure.",
    },
    {
      title: "Audit & Risk Teams",
      description: "Review operational decisions with attributable history and replay references where supported.",
    },
  ] satisfies TitledCard[],
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. Transparent compliance.",
  items: [
    {
      title: "How are raw session protocols mapped to fiscal treatment?",
      description:
        "SIP logs, IP metadata, and transmission metrics serve as fact inputs. The system processes these attributes against verified classification models to determine obligations cleanly.",
    },
    {
      title: "How is session location resolved without location shortcuts?",
      description:
        "The system treats IP addresses, signaling routes, and billing coordinates as geographic facts. It applies local jurisdiction rules to confirm situs accurately.",
    },
    {
      title: "Who carries fiscal responsibility in complex partner chains?",
      description:
        "ZoikoTax maps resellers, legal entities, and commercial roles clearly. This ensures calculations match each company's specific compliance requirements.",
    },
    {
      title: "Can ZoikoTax coexist with our legacy tax engine?",
      description:
        "Yes. Shadow Assurance and Federated modes allow companies to test outcomes and manage workflows safely without disrupting active production systems.",
    },
    {
      title: "Are active market compliance packs verified?",
      description:
        "Yes. Active market packs map jurisdiction rules and requirements directly. This provides pre-configured compliance logic for each region.",
    },
    {
      title: "How are compliance results replayed for audits?",
      description:
        "The system is designed to preserve source inputs, versions, approvals, and replay references for historical reconstruction where supported.",
    },
    {
      title: "What role does AI play in managing compliance?",
      description:
        "AI supports teams by diagnosing variance anomalies, suggesting service classes, and researching rules. AI cannot authorize changes or calculate taxes autonomously.",
    },
    {
      title: "How does the system integrate with enterprise platforms?",
      description:
        "ZoikoTax integrates cleanly with ERP ledgers, billing networks, and event-streaming APIs. This prevents data loss and maintains high-volume efficiency.",
    },
  ] satisfies TitledCard[],
};

export const CONVERSION_DATA = {
  eyebrow: "Ready to Modernize Telecom Fiscal Compliance?",
  title: "Governed fiscal control for voice and IP communications.",
  description:
    "Connect communications-service facts to governed classification, jurisdiction, responsibility, determination, obligations, reconciliation, and evidence without reducing complex voice and IP models to a rate lookup.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" },
    { label: "View Coverage", href: "/#coverage", variant: "glass" },
    { label: "Explore Developers", href: "#", variant: "glass" },
  ] satisfies Action[],
};
