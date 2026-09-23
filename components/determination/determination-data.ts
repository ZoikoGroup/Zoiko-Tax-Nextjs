export interface TraceStage {
  tag: string;
  label: string;
}

export interface ChallengeCard {
  number: string;
  tag: string;
  title: string;
  challenge: string;
  strategy: string;
}

export interface DecisionStep {
  number: number;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface ContractRow {
  field: string;
  type: string;
  description: string;
  status: "Verified" | "Proposed";
}

export interface CoverageRow {
  pack: string;
  capability: string;
  state: "Production" | "Pilot" | "Research";
}

export interface TrustPrinciple {
  title: string;
  description: string;
}

export interface OutcomeCard {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const heroData = {
  eyebrow: "GLOBAL TELECOM TAX DETERMINATION",
  title: "Determine telecom tax with governed, explainable control.",
  subtitle:
    "ZoikoTax determines supported telecom taxes, fees, levies, and fiscal charges from governed transaction facts, service classification, jurisdiction, and responsibility while preserving rule, version, and trace evidence.",
  secondary:
    "Deploy natively, coexist with incumbent tax engines, or run under shadow assurance modes before managed production cutover.",
  disclosures: [
    "• AI is advisory only. Rules decide monetary outcomes.",
    "• Capability rollout varies by country pack. No universal coverage.",
  ],
  pipelineStages: [
    { tag: "[Fact]", label: "Transaction parameters mapped" },
    { tag: "[Class]", label: "Regulatory revenue classification" },
    { tag: "[Situs]", label: "Jurisdictional responsibility defined" },
    { tag: "[Exempt]", label: "Checked active certificate context" },
    { tag: "[Rules]", label: "Governed rule-set executed" },
    { tag: "[Proof]", label: "Evidence manifest structured & signed" },
  ] as TraceStage[],
};

export const directAnswerData = {
  eyebrow: "DIRECT ANSWER",
  title: "What is ZoikoTax Tax Determination?",
  description:
    "It is a telecom-specific, governed fiscal capability built to ingest transaction variables and execute deterministic taxation calculations. Designed explicitly for compliance audit trails, it preserves temporal rule sets, exemption certificates, and evidence outcomes to eliminate audit vulnerability.",
  isList: [
    "• A governed, deterministic tax execution environment.",
    "• Evidence and version aware for robust audit trails.",
    "• Gated by activated jurisdiction country packs.",
    "• Traceable step-by-step from facts to output replay.",
  ],
  isNotList: [
    "• A generic consumer tax calculator or loose estimate tool.",
    "• An autonomous AI system deciding tax law or monetary authority.",
    "• A universal platform claiming automatic support in all markets.",
    "• Legal, tax, regulatory, or certified accounting advice.",
  ],
};

export const whyHardChallenges: ChallengeCard[] = [
  {
    number: "01",
    tag: "STRUCTURAL",
    title: "Complex Services",
    challenge:
      "Bundles, digital services, VoIP, and cellular data cannot be treated with static tax lists.",
    strategy:
      "ZoikoTax decomposes bundles dynamically into standard regulatory tax components.",
  },
  {
    number: "02",
    tag: "STRUCTURAL",
    title: "Jurisdictional Nexus",
    challenge:
      "Taxes vary on exact physical endpoints, switch paths, and customer addresses.",
    strategy:
      "Determines precise situs using multiple geographic and digital inputs.",
  },
  {
    number: "03",
    tag: "STRUCTURAL",
    title: "Situs & Responsibility",
    challenge:
      "Determining whether carrier, seller, reseller, or platform holds the final tax responsibility.",
    strategy:
      "Maintains formal multi-entity responsibility maps within each transaction payload.",
  },
  {
    number: "04",
    tag: "STRUCTURAL",
    title: "Exemption Overhead",
    challenge:
      "Exempt certificates require continuous verification against active local state mandates.",
    strategy:
      "Enforces structural interlocks that reject informal overrides without signed proof.",
  },
  {
    number: "05",
    tag: "STRUCTURAL",
    title: "Regulatory Change Velocity",
    challenge:
      "Telecom tax laws, local fees, and FCC contributions change constantly.",
    strategy:
      "Executes logic tied to immutable, versioned regulatory country packages.",
  },
  {
    number: "06",
    tag: "STRUCTURAL",
    title: "Historical Audit Replay",
    challenge:
      "Failing to reconstruct old determinations exactly due to database drift.",
    strategy:
      "Saves immutable fact manifests to perfectly replay and explain historical outputs.",
  },
];

export const decisionSteps: DecisionStep[] = [
  {
    number: 1,
    title: "Receive Facts",
    description:
      "Ingests structured JSON transaction payload from active Billing or ERP networks.",
  },
  {
    number: 2,
    title: "Classify Code",
    description:
      "Maps products and lines to standardized telecom regulatory revenue codes.",
  },
  {
    number: 3,
    title: "Attribute Situs",
    description:
      "Resolves jurisdictions and authority layers based on physical and digital situs inputs.",
  },
  {
    number: 4,
    title: "Apply Exemption",
    description:
      "Queries valid active certificate registries for approved non-tax status.",
    highlight: true,
  },
  {
    number: 5,
    title: "Determine Liability",
    description:
      "Executes deterministic rule calculations against temporal, validated tax tables.",
    highlight: true,
  },
  {
    number: 6,
    title: "Resolve State",
    description:
      "Flags results as Approved, Needs Review, or Unsupported before finalizing ledger inputs.",
  },
  {
    number: 7,
    title: "Prove Outcomes",
    description:
      "Preserves metadata, fact manifests, and active rule version into an audit-ready format.",
  },
  {
    number: 8,
    title: "Hand Off",
    description:
      "Transmits finalized, signed tax records to ERP general ledgers and compliant filing systems.",
  },
];

export const contractRows: ContractRow[] = [
  {
    field: "transaction.id",
    type: "string (UUID)",
    description:
      "Unique trace identifier for billing reconciliation and downstream auditing.",
    status: "Verified",
  },
  {
    field: "service.code",
    type: "string (Code)",
    description:
      "Standardized telecom regulatory classification reference.",
    status: "Verified",
  },
  {
    field: "location.situs",
    type: "object (lat/long)",
    description:
      "Latitude, longitude, or postal data used to resolve complex municipal boundaries.",
    status: "Verified",
  },
  {
    field: "entity.role",
    type: "string (enum)",
    description:
      "Specifies responsibility role: seller, platform operator, carrier of record.",
    status: "Verified",
  },
  {
    field: "exemption.id",
    type: "string (null)",
    description:
      "Reference to an active, validated exemption certificate in the safe vault.",
    status: "Proposed",
  },
  {
    field: "system.version",
    type: "string (Code)",
    description:
      "Forces execution against a specific historical version of the country package rules.",
    status: "Verified",
  },
];

export const coverageRows: CoverageRow[] = [
  {
    pack: "North America (Federal & State)",
    capability: "Tax Determination, FCC Remittance",
    state: "Production",
  },
  {
    pack: "European Union (VAT & CTC)",
    capability: "E-Invoicing, VAT Determination",
    state: "Pilot",
  },
  {
    pack: "Asia-Pacific Core",
    capability: "Local Telecom levies",
    state: "Research",
  },
];

export const trustPrinciples: TrustPrinciple[] = [
  {
    title: "Deterministic Code Enforced",
    description:
      "We reject black-box models. Every calculation outcome is explicitly trace-mapped to verified country rule formulas.",
  },
  {
    title: "Explicit Uncertainty Logging",
    description:
      "Unknowns are not silently bypassed. Unresolved geographic sites flag as Needs Review to keep compliance audits accurate.",
  },
  {
    title: "Rigid Tenant Isolation",
    description:
      "Customer contexts and active certificate vaults operate in logical boundaries to guarantee transaction data safety.",
  },
  {
    title: "Governed Content Control",
    description:
      "All code updates are locked, timestamped, and peer-approved before deploying onto live transactional systems.",
  },
];

export const buyerOutcomes: OutcomeCard[] = [
  {
    title: "Defensible Audits",
    description:
      "Provide signed, un-editable system files to regulators to explain why each tax was processed.",
  },
  {
    title: "Reduced Manual Override",
    description:
      "Ensure all billing engines align precisely with the active master exemption certificate vault.",
  },
  {
    title: "Clean ERP Replay",
    description:
      "Sync transactions directly into general ledgers with clean correlation IDs for total dispute resolution.",
  },
];

export const determinationFaqs: FaqItem[] = [
  {
    question: "What is telecom tax determination?",
    answer:
      "It is the systematic calculation of specialized telecommunications taxes, local municipal levies, and regulatory fees using customer location (situs), product classification, and active regulatory rule versions.",
  },
  {
    question: "How does ZoikoTax determine telecom tax?",
    answer:
      "By taking structured transaction details, resolving the precise situs, validating local exemption states, and applying deterministic code formulas.",
  },
  {
    question: "Is ZoikoTax a simple tax calculator?",
    answer:
      "No. ZoikoTax is a comprehensive global tax compliance database. It manages active rule versions, maintains active exemption certificates, and builds un-alterable evidence receipts.",
  },
  {
    question: "Does ZoikoTax use AI to calculate tax?",
    answer:
      "Absolutely not. AI is used solely for initial keywords classification suggestions and anomaly lookups. Final monetary rates are handled by hardcoded rule tables.",
  },
  {
    question: "Can ZoikoTax work with our existing tax engine?",
    answer:
      "Yes. Through Shadow Assurance or Federated operating modes, you can mirror transactions and compare outcomes side-by-side with incumbent platforms before changing production.",
  },
  {
    question: "How are active exemptions handled?",
    answer:
      "They are stored in a digital safe locker. If a transaction attempts to apply an exemption, it is checked for active valid dates. Arbitrary overrides are blocked.",
  },
  {
    question: "Can older determinations be replayed for audits?",
    answer:
      "Yes. Every output produces an audit-trail recipe file. The engine can reload those historical rules and execute the same payload again for proof.",
  },
  {
    question: "Which countries currently support Tax Determination?",
    answer:
      "Detailed country packs are rolling out incrementally. Check the Coverage section on our website to see the specific country capability roadmap.",
  },
  {
    question: "Does it integrate natively with active billing platforms?",
    answer:
      "Yes, we offer standard API schemas, webhooks, and sandbox environments to connect securely to your billing system.",
  },
  {
    question: "Does ZoikoTax guarantee total tax accuracy?",
    answer:
      "No. ZoikoTax provides state-of-the-art computational infrastructure. Definitive liability relies on the rule configurations, active country packs, and customer-approved tax policy.",
  },
];
