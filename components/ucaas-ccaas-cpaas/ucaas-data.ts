/**
 * Content + assets for the UCaaS, CCaaS & CPaaS page. Text follows the Figma
 * copy verbatim; icons/photos come from `public/UCaaS, CCaaS & CPaaS`.
 */
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Box,
  Calculator,
  CircleHelp,
  ClipboardCheck,
  Cpu,
  Database,
  FileCheck,
  FileText,
  GitBranch,
  GitMerge,
  Globe,
  Landmark,
  Layers,
  Library,
  ReceiptText,
  RefreshCw,
  Route,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

export interface TitledCard {
  title: string;
  description: string;
}

/** Card led by a small mono index (01, 02, …). */
export interface NumberedCard extends TitledCard {
  num: string;
}

export interface Action {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "light" | "ghost";
}

export interface TextBlock {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ChainStep {
  num: string;
  title: string;
  description: string;
}

const img = (name: string) => `/UCaaS, CCaaS & CPaaS/${name}`;

export const IMAGES = {
  hero: img("a67b485fd994857ebb1e8ad0102e4ef3f6fdc96a.jpg"),
  evidence: img("evidence-bg.jpg"),
  trust: img("trust-bg.jpg"),
  conversion: img("conversion-bg.jpg"),
};

/** Figma icon exports — orange on light surfaces, violet-950 / orange-300 on dark. */
export const ICONS = {
  contextCards: [
    { num: "01", title: "Service / offer identity", description: "Illustrative offer family + version" },
    { num: "02", title: "Commercial transaction facts", description: "Term, consideration, channel context" },
    { num: "03", title: "Communications characteristics", description: "Voice, messaging, API, software context" },
    { num: "04", title: "Relevant location facts", description: "Known locations kept distinct from situs" },
    { num: "05", title: "Provider / customer / partner", description: "Entity, relationship and responsibility facts" },
    { num: "06", title: "Effective time / rule version", description: "Decision-time and approved content version" },
    { num: "07", title: "Evidence references", description: "Source provenance and approval references" },
  ] satisfies NumberedCard[],

  integrationCards: [
    { icon: ReceiptText as LucideIcon, label: "Billing & BSS" },
    { icon: BookOpen as LucideIcon, label: "ERP & General Ledger" },
    { icon: Layers as LucideIcon, label: "Existing Tax Engines" },
    { icon: GitBranch as LucideIcon, label: "E-Invoicing Networks" },
    { icon: Database as LucideIcon, label: "Data & Batch" },
    { icon: Box as LucideIcon, label: "OEM / Embedded" },
  ],
};

export const HERO_DATA = {
  eyebrow: "UCaaS, CCaaS & CPaaS",
  title: "Govern complex cloud communications fiscal decisions from service model to evidence.",
  description:
    "Connect governed service and bundle classification, relevant location and jurisdiction context, responsibility, supported tax determination, obligations, compliance, reconciliation and replayable evidence across complex cloud communications and platform service models.",
  note: "Deploy natively where supported, coexist with incumbent tax engines in a federated model, or use Shadow Assurance to compare outcomes before governed cutover.",
  footnote: "Global architecture; production availability varies by jurisdiction and capability.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" },
    { label: "Explore the Platform", href: "/platform-overview", variant: "secondary" },
    { label: "View Current Coverage", href: "#coverage", variant: "secondary" },
  ] satisfies Action[],
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct answer",
  title: "What does ZoikoTax do for UCaaS, CCaaS & CPaaS providers?",
  description:
    "ZoikoTax helps UCaaS, CCaaS & CPaaS providers connect telecom service classification, relevant location and jurisdiction context, fiscal responsibility, supported tax determination, regulatory obligations, compliance, reconciliation and evidence within a governed fiscal-control architecture. Availability varies by jurisdiction and capability.",
  pills: [
    { label: "Service classification", highlight: false },
    { label: "Jurisdiction context", highlight: false },
    { label: "Fiscal responsibility", highlight: false },
    { label: "Evidence & replay", highlight: true },
  ],
};

export const COMPLEXITY_DATA = {
  eyebrow: "Why fiscal control is complex",
  title: "Cloud communications bundles can be simple to buy and complex to classify, attribute and govern fiscally.",
  cards: [
    {
      num: "01",
      title: "Does a UCaaS, CCaaS or CPaaS label determine tax treatment?",
      description:
        "No. Service-model, component and bundle labels are input context—not automatic legal or tax classifications. Governed facts and approved rules determine supported outcomes.",
    },
    {
      num: "02",
      title: "Does geography matter?",
      description:
        "Yes, but relevant location, situs and jurisdiction logic vary by supported context. Keep location facts separate from the authority and decision they inform.",
    },
    {
      num: "03",
      title: "Who is responsible?",
      description:
        "Responsibility comes from governed legal-entity, provider, customer, partner, relationship and contractual facts—not from a product label alone.",
    },
    {
      num: "04",
      title: "Is tax the only obligation?",
      description:
        "No. Supported outcomes may extend to registrations, reporting, filing, invoicing, remittance orchestration, reconciliation and evidence where capability is ready.",
    },
  ] satisfies NumberedCard[],
  guardrail: "Visible guardrail: a service-model label is not the fiscal conclusion.",
};

export const CONTEXT_MODEL_DATA: TextBlock = {
  eyebrow: "Service context → fiscal decision",
  title: "Model the context before governing the conclusion.",
  description:
    "Conceptual design vocabulary—not an exact production schema. Neutral labels illustrate the categories of facts that may inform a supported decision.",
};

export const CONTEXT_AUTHORITY = {
  title: "Approved decision authority",
  description: "Deterministic rules decide supported monetary outcomes; AI may assist analysis.",
};

export const LIFECYCLE_DATA = {
  eyebrow: "Connected fiscal lifecycle",
  title: "Connect the fiscal decision chain from service and bundle context to evidence.",
  steps: [
    { num: "01", title: "SERVICE / OFFER\nCONTEXT", description: "Labels remain context" },
    { num: "02", title: "CLASSIFY", description: "Governed classification" },
    { num: "03", title: "ATTRIBUTE", description: "Location + responsibility" },
    { num: "04", title: "DETERMINE", description: "Supported rules" },
    { num: "05", title: "OBLIGATE", description: "Obligation state" },
    { num: "06", title: "COMPLY", description: "Prepared workflow" },
    { num: "07", title: "RECONCILE", description: "Linked outcomes" },
    { num: "08", title: "PROVE", description: "Replayable proof" },
  ] satisfies ChainStep[],
  throughline: "Facts → versions → approvals → replay",
  note: "Service-model and bundle labels remain separate from governed classification. ZoikoTax Intelligence Fabric™ assists operators; it is not fiscal authority.",
};

export const DETERMINATION_DATA: TextBlock = {
  eyebrow: "Tax determination + exemptions",
  title: "Determine from governed facts. Apply supported evidence controls.",
  description:
    "Supported deterministic taxes, fees, levies and fiscal charges are determined from governed facts and approved rules. Exemption evidence and applicability controls are capability-specific—never a universal taxability, rate or exemption claim.",
};

export const DETERMINATION_CARDS = [
  {
    num: "01",
    icon: Calculator,
    title: "Tax Determination",
    description:
      "Connect classified service and bundle context, relevant jurisdiction and responsibility facts to supported deterministic outcomes and preserved rule versions.",
  },
  {
    num: "02",
    icon: FileCheck,
    title: "Exemptions & Certificates",
    description:
      "Evaluate supported evidence, scope, dates and applicability controls without treating a certificate or label as a universal conclusion.",
  },
];

export const OBLIGATIONS_DATA: TextBlock = {
  eyebrow: "Regulatory obligations + compliance",
  title: "Connect supported obligation states to controlled workflows.",
  description:
    "Readiness is explicit. Registrations, reporting and submission workflows are available only where the current capability and governed market pack support them.",
};

export const OBLIGATIONS_CARDS = [
  {
    icon: Landmark,
    title: "Regulatory Obligations",
    description:
      "Represent supported registration, reporting and obligation states with effective dates, ownership, authority context, review state and evidence references. No automatic liability conclusion.",
    link: "Regulatory Obligations →",
    href: "/regulatory-obligations",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Filing",
    description:
      "Prepare, review and submit supported workflows only where the current capability and pack are ready. Every transition remains controlled and evidenced; filing is not assumed universally.",
    link: "Compliance & Filing →",
    href: "/compliance-filing",
  },
];

export const CONTINUATION_DATA = {
  eyebrow: "Connected continuation",
  title: "Carry governed outcomes into invoicing, remittance orchestration and reconciliation.",
  cards: [
    {
      num: "01",
      icon: ReceiptText,
      title: "E-Invoicing & CTC",
      description:
        "Connect supported invoice and clearance workflows where required and capability-ready. Not every UCaaS, CCaaS or CPaaS market requires CTC.",
    },
    {
      num: "02",
      icon: GitMerge,
      title: "Remittance Orchestration",
      description:
        "Coordinate supported approvals, instructions and evidence. Remittance does not imply fund custody.",
    },
    {
      num: "03",
      icon: RefreshCw,
      title: "Reconciliation",
      description:
        "Link transaction, tax, invoice, filing, remittance and accounting outcomes. A match does not prove legal correctness.",
    },
  ],
  guardrail: "Platform defines the control architecture. Coverage confirms where each capability is currently ready.",
};

export const EVIDENCE_DATA = {
  eyebrow: "Evidence + replay",
  title: "Preserve why the outcome was authoritative.",
  checklist: [
    "Source provenance",
    "Input facts",
    "Rule/content version",
    "Jurisdiction/responsibility context",
    "Approval/workflow context",
    "Historical replay",
    "Current-policy comparison",
    "Uncertainty",
  ],
  action: { label: "Explore Evidence & Replay", href: "/evidence-auditability", variant: "primary" } satisfies Action,
  panel: {
    title: "Do not just calculate the answer. Preserve why it was the answer.",
    description:
      "Historical replay reconstructs a supported decision using its historical inputs, effective-time context and approved versions. Current-policy comparison is a separate, explicit operation.",
    rows: [
      { num: "01", title: "Historical inputs" },
      { num: "02", title: "Historical rule/content versions" },
      { num: "03", title: "Approval and workflow state" },
      { num: "04", title: "Replay manifest + uncertainty" },
    ],
    guardrail: "Historical replay never silently substitutes current rules.",
  },
};

export const MODERNIZATION_DATA = {
  eyebrow: "Modernization paths",
  title: "Modernize without assuming rip-and-replace.",
  description:
    "Choose the operating path that fits current authority boundaries, capability readiness and approval controls.",
  paths: [
    {
      num: "01",
      title: "Native",
      description: "Use ZoikoTax as the governed decision and evidence path where supported.",
    },
    {
      num: "02",
      title: "Federated",
      description: "Coordinate ZoikoTax with incumbent tax engines and explicit authority boundaries.",
    },
    {
      num: "03",
      title: "Shadow Assurance",
      description: "Compare non-authoritative shadow outcomes before review and governed cutover.",
    },
    {
      num: "04",
      title: "OEM / Embedded",
      description: "Embed supported fiscal control into a provider experience with governed contracts.",
    },
    {
      num: "05",
      title: "Managed Compliance",
      description: "Combine platform control with supported managed workflows where available.",
    },
  ] satisfies NumberedCard[],
  journeyTitle: "A measured, governed journey",
  journeySteps: ["COEXIST", "COMPARE", "APPROVE", "CUTOVER"],
  footnote:
    "No migration duration, match percentage, savings or guaranteed outcome is implied. Shadow Assurance remains non-authoritative before review and cutover.",
  actions: [
    { label: "Explore Shadow Assurance", href: "/shadow-assurance", variant: "primary" },
    { label: "Migration & Onboarding", href: "/migration-onboarding", variant: "light" },
  ] satisfies Action[],
};

export const INTEGRATIONS_DATA = {
  eyebrow: "Integrations + developers",
  title: "Fit governed fiscal control into the telecom financial architecture.",
  description: "Connect systems through explicit authority, version and evidence boundaries—not through opaque shortcuts.",
  panel: {
    eyebrow: "Developer signals",
    title: "Controlled integration, built for consequential writes.",
    description:
      "Canonical contracts, explicit versions and operational correlation help preserve the boundary between advisory analysis and authoritative action.",
    action: { label: "Explore Developers", href: "#", variant: "light" } satisfies Action,
    pills: [
      "REST APIs",
      "Versioned contracts",
      "Idempotent authoritative writes",
      "Async bulk jobs",
      "Events / signed webhooks",
      "SDKs from canonical contracts",
      "Sandbox / certification paths",
      "Correlation IDs / structured problem details",
    ],
    note: "Illustrative integration vocabulary only. No credentials, endpoints, unsupported fields, latency or SLA claims.",
  },
};

export const COVERAGE_DATA = {
  eyebrow: "Coverage + readiness",
  title: "Relevant to UCaaS, CCaaS & CPaaS. Explicit about what is currently live.",
  description:
    "Coverage answers where and for which capabilities—not a global yes/no support claim. Readiness is evaluated by jurisdiction, capability, operating mode and governed pack state.",
  legendTitle: "Capability-specific readiness states",
  legendNote: "State labels describe lifecycle readiness, not a universal promise.",
  action: { label: "View Current Coverage", href: "/coverage-overview", variant: "light" } satisfies Action,
  states: [
    { label: "RESEARCH", highlight: false },
    { label: "VALIDATION", highlight: false },
    { label: "PILOT", highlight: false },
    { label: "PRODUCTION", highlight: true },
    { label: "MANAGED", highlight: false },
    { label: "SUSPENDED", highlight: false },
    { label: "WITHDRAWN", highlight: false },
    { label: "STATUS UNAVAILABLE", highlight: false },
  ],
  guardrail:
    "Never infer production from generic country mentions, office presence, global architecture or a UCaaS, CCaaS or CPaaS service label.",
};

export const TRUST_DATA = {
  eyebrow: "Trust + AI governance",
  title: "Built for consequential fiscal work.",
  description: "A disciplined control foundation for sensitive cloud communications fiscal operations.",
  cards: [
    { title: "Deterministic monetary execution", icon: Cpu as LucideIcon },
    { title: "Explicit uncertainty", icon: CircleHelp as LucideIcon },
    { title: "Tenant / entity isolation", icon: GitBranch as LucideIcon },
    { title: "Evidence by design", icon: FileCheck as LucideIcon },
    { title: "Governed content", icon: Library as LucideIcon },
    { title: "Residency-aware architecture", icon: Globe as LucideIcon },
    { title: "Operational resilience", icon: ShieldCheck as LucideIcon },
  ],
  banner: "AI assists. Approved rules decide.\nEvidence proves.",
  authorityLabel: "Authority boundary",
  authority:
    "AI may assist research, comparison and review; it cannot be fiscal authority, a source of law, legal or tax advice, an evidence replacement or a guaranteed outcome.",
  actions: [
    { label: "Visit Trust Center", href: "#", variant: "light" },
    { label: "Explore Evidence & Replay", href: "/evidence-auditability", variant: "light" },
  ] satisfies Action[],
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. No inflated claims.",
  description: "Capability-specific answers for teams governing complex cloud communications fiscal work.",
  items: [
    {
      num: "01",
      title: "What does ZoikoTax do for UCaaS, CCaaS & CPaaS providers?",
      description:
        "It connects governed telecom service classification, relevant location and jurisdiction context, responsibility, supported tax determination, obligations, compliance, reconciliation and evidence. Availability varies by jurisdiction and capability.",
    },
    {
      num: "02",
      title: "Does a UCaaS, CCaaS or CPaaS label automatically determine tax treatment?",
      description:
        "No. Service-model, component and bundle labels are input context. Approved rules evaluate governed facts; labels are not automatic legal or tax classifications.",
    },
    {
      num: "03",
      title: "How does ZoikoTax handle jurisdiction?",
      description:
        "It keeps relevant location facts, situs or jurisdiction logic, authority, legal entity, relationship and responsibility distinct, then applies supported governed logic for the applicable capability.",
    },
    {
      num: "04",
      title: "Can ZoikoTax work with an existing tax engine?",
      description:
        "Yes, where supported. A federated model can preserve explicit authority boundaries, while Shadow Assurance can compare non-authoritative outcomes before review and governed cutover.",
    },
    {
      num: "05",
      title: "Which countries are supported?",
      description:
        "Coverage is capability- and jurisdiction-specific. View Current Coverage for readiness states; do not infer production from a country mention, office presence, architecture or service label.",
    },
  ] satisfies NumberedCard[],
};

export const CONVERSION_DATA = {
  eyebrow: "Cloud communications fiscal control",
  title: "See how ZoikoTax can fit your cloud communications fiscal architecture.",
  description:
    "Discuss your service and bundle context, current authority boundaries and capability-specific readiness—without assuming a generic deployment path.",
  actions: [
    { label: "Book a Demo", href: "#", variant: "primary" },
    { label: "View Current Coverage", href: "#coverage", variant: "light" },
  ] satisfies Action[],
};

export { BookOpen };
