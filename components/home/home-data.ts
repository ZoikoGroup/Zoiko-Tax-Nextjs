import {
  Banknote,
  ClipboardCheck,
  Cpu,
  Database,
  Eye,
  FileText,
  Fingerprint,
  Hash,
  Inbox,
  Layers,
  MapPin,
  Receipt,
  RefreshCw,
  Search,
  Send,
  Shield,
  ShieldCheck,
  SquareCheckBig,
  Tag,
  Target,
  type LucideIcon,
} from "lucide-react";

type Card = { title: string; description: string };
type IconCard = Card & { icon: LucideIcon };

export const heroContent = {
  eyebrow: "Global telecom tax & regulatory obligations platform",
  title: "Determine telecom tax. Control obligations. Prove every outcome.",
  lead: "ZoikoTax is global telecom fiscal-compliance infrastructure for tax determination, regulatory obligations, filing, e-invoicing, reconciliation and replayable evidence.",
  body: "Deploy it natively where supported, coexist with incumbent tax engines, or use Shadow Assurance to compare outcomes before cutover.",
  footnote:
    "Built for governed telecom fiscal operations • Capability varies by activated market pack and operating mode.",
  actions: [
    { label: "Book a Demo", href: "#book-a-demo", variant: "primary" },
    { label: "Explore the Platform", href: "#platform", variant: "secondary" },
    { label: "View Coverage →", href: "#coverage", variant: "secondary" },
  ],
} as const;

export const directAnswer = {
  eyebrow: "Direct answer",
  title: "What is ZoikoTax?",
  description:
    "ZoikoTax is telecom tax and regulatory compliance software for communications businesses. It connects tax determination, regulatory-revenue classification, jurisdiction and responsibility, obligations, compliance workflows, reconciliation and evidence across governed country and regulatory packs.",
};

export const operatingModels: Card[] = [
  {
    title: "Native Full-Stack",
    description: "End-to-end determination through evidence, activated only where supported.",
  },
  {
    title: "Federated",
    description: "Coordinate obligations while incumbent engines continue monetary determination.",
  },
  {
    title: "Shadow Assurance",
    description: "Compare outcomes without impacting production paths before governed cutover.",
  },
  {
    title: "OEM / Embedded",
    description: "Embed governed fiscal capabilities into your product experience.",
  },
  {
    title: "Managed Compliance",
    description: "Operate with controlled workflows and clearly assigned accountability.",
  },
];

export const telecomProblems: Card[] = [
  {
    title: "Complex services",
    description: "Bundles, usage, access and digital components resist simplistic classification.",
  },
  {
    title: "Multiple authorities",
    description: "Tax and regulatory obligations can diverge across jurisdictional layers.",
  },
  {
    title: "Multi-party responsibility",
    description: "Seller, carrier, platform and customer roles change accountability.",
  },
  {
    title: "Audit exposure",
    description: "Every result needs durable facts, provenance, versioning and replay.",
  },
];

export const lifecycleSteps: { label: string; icon: LucideIcon }[] = [
  { label: "Receive", icon: Inbox },
  { label: "Classify", icon: Tag },
  { label: "Attribute", icon: Hash },
  { label: "Determine", icon: Search },
  { label: "Obligate", icon: ClipboardCheck },
  { label: "Comply", icon: ShieldCheck },
  { label: "Reconcile", icon: RefreshCw },
  { label: "Prove", icon: FileText },
];

export const lifecycleCapabilities: Card[] = [
  {
    title: "Telecom Tax Determination",
    description: "Deterministic monetary execution with controlled rules and versions.",
  },
  {
    title: "Regulatory Obligations",
    description: "Identify, assign and track non-tax fiscal duties.",
  },
  {
    title: "Compliance & Filing",
    description: "Govern preparation, review, approval and submission states.",
  },
  {
    title: "Fiscal Reconciliation",
    description: "Trace transactions, liabilities, filings and ledger outcomes.",
  },
  {
    title: "E-Invoicing & CTC",
    description: "Coordinate mandate-specific document and clearance workflows.",
  },
  {
    title: "Evidence & Replay",
    description: "Reconstruct outcomes from preserved facts and governing content.",
  },
  {
    title: "Shadow Assurance",
    description: "Compare engines before a governed production decision.",
  },
  {
    title: "ZoikoTax Intelligence Fabric™",
    description: "Advisory assistance around—not authority over—fiscal execution.",
  },
];

export const shadowAssuranceSteps: Card[] = [
  { title: "Connect", description: "Mirror governed transaction facts." },
  { title: "Compare", description: "Explain outcome differences." },
  { title: "Decide", description: "Approve a controlled cutover." },
];

export const evidenceChecklist = [
  "Input facts",
  "Jurisdiction",
  "Classification",
  "Rule/content versions",
  "Source provenance",
  "Approvals/state",
  "Replay manifest",
];

export const aiPolicy = {
  may: "Summarize variances • suggest classifications • surface anomalies • assist research",
  mayNot: "Silently set monetary outcomes • invent authority • bypass approval • overwrite evidence",
  disclosure:
    "Persistent disclosure: AI output is advisory and requires governed human or deterministic-system action.",
};

export type CoverageStatus = "pack" | "discovery" | "supported" | "assessment";

export const coverageRows: { market: string; capability: string; status: CoverageStatus }[] = [
  { market: "Market Alpha", capability: "Tax determination", status: "pack" },
  { market: "Market Beta", capability: "E-invoicing & CTC", status: "discovery" },
  { market: "Market Gamma", capability: "Compliance & filing", status: "supported" },
  { market: "Market Delta", capability: "Shadow Assurance", status: "assessment" },
];

export const coverageStatusLabels: Record<CoverageStatus, { label: string; className: string }> = {
  pack: { label: "Pack available", className: "text-status-teal outline-status-teal" },
  discovery: { label: "Discovery required", className: "text-status-amber outline-status-amber" },
  supported: { label: "Supported configuration", className: "text-status-blue outline-status-blue" },
  assessment: { label: "Assessment available", className: "text-plum-700 outline-plum-700" },
};

export const integrations: { label: string; icon: LucideIcon }[] = [
  { label: "Billing & BSS", icon: Receipt },
  { label: "ERP & General Ledger", icon: FileText },
  { label: "Existing Tax Engines", icon: Cpu },
  { label: "E-Invoicing Networks", icon: Send },
  { label: "Data & Batch", icon: Database },
  { label: "OEM & Embedded", icon: Layers },
];

export const integrationPrinciples =
  "Versioned contracts • idempotent requests • deterministic responses • traceable decisions • tenant-aware controls • replay-ready evidence";

export const operatorModels = [
  "MNOs",
  "MVNOs",
  "MVNEs/MVNAs",
  "VoIP/SIP",
  "UCaaS/CCaaS/CPaaS",
  "Broadband/ISP/Fixed Wireless",
  "IoT/M2M/Satellite",
];

export const buyerOutcomes: Card[] = [
  { title: "Tax & Compliance", description: "Defensible decisions and controlled obligations." },
  { title: "Finance", description: "Close with reconciled fiscal truth." },
  { title: "Revenue Assurance", description: "Detect leakage and explain variance." },
  // The zero-width space after the slash lets these titles wrap in narrow cards.
  { title: "Billing/​BSS Engineering", description: "Integrate without fragile fiscal logic." },
  { title: "Product/​Commercial", description: "Launch with market-specific clarity." },
  { title: "CTO/CIO", description: "Modernize with governed architecture." },
];

export const trustPrinciples: IconCard[] = [
  {
    icon: Banknote,
    title: "Deterministic monetary execution",
    description: "Repeatable execution governed by explicit facts, content and versions.",
  },
  {
    icon: Eye,
    title: "Explicit uncertainty",
    description: "Unknowns and unsupported conditions stay visible-not silently guessed.",
  },
  {
    icon: Shield,
    title: "Tenant isolation",
    description: "Logical boundaries protect each customer context.",
  },
  {
    icon: Fingerprint,
    title: "Evidence by design",
    description: "Provenance and replay are part of the result.",
  },
  {
    icon: SquareCheckBig,
    title: "Governed content",
    description: "Controlled release, approval and effective dating.",
  },
  {
    icon: MapPin,
    title: "Residency-aware architecture",
    description: "Deployment choices account for locality requirements.",
  },
  {
    icon: RefreshCw,
    title: "Operational resilience",
    description: "Recoverable workflows and observable states.",
  },
  {
    icon: Target,
    title: "Claims discipline",
    description: "Capabilities are described only within supported scope.",
  },
];

export const insights = [
  { category: "Architecture brief", title: "Designing evidence-first fiscal systems" },
  { category: "Coverage note", title: "Why capability status must be specific" },
  { category: "Assurance guide", title: "A governed path from compare to cutover" },
  { category: "Operations perspective", title: "Reconciliation as a continuous control" },
];

export const faqs = [
  {
    question: "What is ZoikoTax?",
    answer:
      "ZoikoTax is telecom fiscal-compliance infrastructure for determination, obligations, filing, e-invoicing, reconciliation and evidence.",
  },
  {
    question: "Is ZoikoTax a tax engine?",
    answer:
      "It can operate natively where supported, federate with incumbent engines, or compare outcomes through Shadow Assurance.",
  },
  {
    question: "Does ZoikoTax replace our existing tax engine?",
    answer:
      "Not necessarily. Federated and Shadow Assurance modes support coexistence and governed transition.",
  },
  {
    question: "How does Shadow Assurance work?",
    answer:
      "It connects governed facts, compares outcomes and supports a controlled decision without impacting production until cutover.",
  },
  {
    question: "Does comparator agreement prove legal correctness?",
    answer:
      "No. Agreement between engines confirms computational consistency, not legal correctness. Legal compliance depends on the underlying rules, obligations and jurisdiction-specific interpretations that govern each determination.",
  },
  {
    question: "How is AI used?",
    answer:
      "AI assists with anomaly detection, classification suggestions and pattern recognition across tax rules. It does not make autonomous tax decisions. Every AI-assisted output is validated against governed rule sets before it reaches production.",
  },
  {
    question: "Is every capability available in every country?",
    answer:
      "Not yet. Capability rollout depends on local regulatory requirements, data-residency rules and integration readiness. Each country is onboarded individually, with jurisdiction-specific configuration and compliance validation before activation.",
  },
  {
    question: "Can outcomes be replayed for audit?",
    answer:
      "Yes. Every determination, comparison and decision is logged with full traceability. Outcomes can be replayed from governed facts at any point, supporting audit requirements, dispute resolution and regulatory review.",
  },
];
