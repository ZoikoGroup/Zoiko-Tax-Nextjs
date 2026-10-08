export interface ProblemCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface BoundaryItem {
  id: string;
  title: string;
  description: string;
}

export interface LifecycleStage {
  step: string;
  name: string;
  description: string;
  isLast?: boolean;
}

export interface EcosystemCard {
  tag: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  icon: string;
}

export interface IntegrationPattern {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface OperatingPrinciple {
  id: string;
  title: string;
  description: string;
}

export interface AuthorityStage {
  tag: string;
  title: string;
  description: string;
  icon: string;
  hasNextArrow?: boolean;
}

export interface VerificationRoute {
  topic: string;
  description: string;
  route: string;
  href: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  linkText: string;
  linkHref: string;
  secondaryRoute?: string;
}

export interface EvaluationStep {
  step: string;
  title: string;
  linkText: string;
  linkHref: string;
  route: string;
}

export interface ResourcePath {
  title: string;
  description: string;
  route: string;
  href: string;
}

export const heroData = {
  eyebrow: "RESOURCES · ABOUT ZOIKOTAX",
  headline: "Telecom fiscal control, built around accountability.",
  introduction:
    "ZoikoTax is telecom-specific fiscal infrastructure. Its governed fiscal-control layer connects transaction facts, classification, jurisdiction, responsibility and determination with obligations, compliance, reconciliation and evidence.",
  subtext:
    "Integration-led by design: work alongside existing BSS/OSS, ERP/GL and approved tax engines, with policy, authority and evidence attached to material actions.",
  primaryCta: {
    label: "Explore the platform",
    href: "/platform/",
  },
  secondaryCta: {
    label: "View coverage",
    href: "/coverage/",
  },
  trustLink: {
    label: "Visit Trust Center",
    href: "/trust/",
  },
  coverageNote:
    "Global architecture does not mean universal live coverage. Capability and evidence depend on supported scope and retained context.",
};

export const problemData = {
  eyebrow: "THE STRUCTURAL PROBLEM",
  headline: "Complexity lives between the systems.",
  subhead:
    "Telecom fiscal operations cross operational and organizational boundaries. The challenge is keeping the context of an action connected—not just calculating a result.",
  cards: [
    {
      id: "fragmented-systems",
      icon: "Layers",
      title: "Fragmented systems",
      description:
        "Finance, billing, tax, compliance and evidence operate across multiple systems and teams. Transaction context can be split between them.",
    },
    {
      id: "detached-policy",
      icon: "Unlink",
      title: "Detached policy",
      description:
        "Rules and authority can sit apart from the operational actions they are intended to govern.",
    },
    {
      id: "jurisdiction-complexity",
      icon: "MapPin",
      title: "Jurisdiction complexity",
      description:
        "Fiscal responsibility varies with jurisdiction, business scope and transaction context—not simply geography.",
    },
    {
      id: "evidence-gaps",
      icon: "FileSearch",
      title: "Evidence gaps",
      description:
        "Historical facts, versions and reasoning can be difficult to reconstruct when their context is not retained together.",
    },
    {
      id: "change-velocity",
      icon: "GitBranch",
      title: "Change velocity",
      description:
        "Regulatory and integration changes require governance of both current operations and the context behind prior decisions.",
    },
  ] as ProblemCard[],
  statement:
    "A fiscal action needs more than an outcome. It needs its facts, applicable authority, accountable context and evidence.",
};

export const productBoundariesData = {
  eyebrow: "WHAT ZOIKOTAX IS",
  headline: "A control layer. Not a replacement story.",
  subhead:
    "ZoikoTax connects fiscal work across the systems you operate, keeping governance close to the action and evidence close to the decision.",
  definitionCard: {
    title: "Telecom-specific fiscal infrastructure",
    description:
      "A fiscal-control layer for connected governance: policy, authority and evidence stay attached to material actions.",
    attributes: [
      "Integration-led architecture",
      "Connected fiscal workflows",
      "Supported trace and replay",
    ],
    disclaimer:
      "Trace and replay depend on supported capabilities and retained context. This is an architectural framing, not a compliance or accuracy guarantee.",
    linkText: "Explore Platform overview",
    linkHref: "/platform/",
  },
  boundariesEyebrow: "SIX IMPORTANT BOUNDARIES",
  boundaries: [
    {
      id: "bss-oss",
      title: "Not a wholesale BSS/OSS replacement",
      description:
        "Connect approved transaction and business context from existing operational systems.",
    },
    {
      id: "erp-gl",
      title: "Not ERP/GL eradication",
      description:
        "Coexist with finance systems and their output and evidence needs.",
    },
    {
      id: "tax-engine",
      title: "Not a universal tax-engine replacement",
      description:
        "Use approved coexistence patterns with existing tax engines.",
    },
    {
      id: "legal-advice",
      title: "Not legal advice",
      description:
        "Product workflows do not substitute for qualified legal interpretation.",
    },
    {
      id: "production-coverage",
      title: "Not universal production coverage",
      description:
        "Global architecture is distinct from current jurisdiction and capability support.",
    },
    {
      id: "autonomous-ai",
      title: "Not autonomous AI fiscal authority",
      description:
        "Assistance stays bounded; governed logic and human review retain authority.",
    },
  ] as BoundaryItem[],
};

export const operatingModelData = {
  eyebrow: "OPERATING MODEL",
  headline: "From transaction facts to accountable context.",
  subhead:
    "A connected fiscal lifecycle—not a deployment topology. Each stage preserves the context needed by the work that follows.",
  diagramHeader: {
    badge: "POLICY · AUTHORITY · EVIDENCE",
    sub: "Conceptual fiscal lifecycle",
  },
  stages: [
    {
      step: "01",
      name: "Facts",
      description: "Receive and normalize approved transaction and business context.",
    },
    {
      step: "02",
      name: "Classification",
      description: "Assign categories to the approved context used in fiscal workflows.",
    },
    {
      step: "03",
      name: "Jurisdiction",
      description: "Identify relevant jurisdictional context where supported.",
    },
    {
      step: "04",
      name: "Responsibility",
      description: "Connect the accountable party and obligation context.",
    },
    {
      step: "05",
      name: "Determination",
      description: "Apply deterministic or governed logic within the approved scope.",
    },
    {
      step: "06",
      name: "Obligations",
      description: "Connect registrations, reporting, filing and related obligations where supported.",
    },
    {
      step: "07",
      name: "Evidence",
      description: "Retain trace, versions and control context where supported.",
      isLast: true,
    },
  ] as LifecycleStage[],
  connectedCard: {
    tag: "CONNECTED THROUGHOUT",
    title: "Compliance & reconciliation",
  },
  modelInWordsEyebrow: "THE MODEL IN WORDS",
  scopeNotice: {
    title: "Scope travels with the lifecycle",
    explanation:
      "Capabilities vary by supported jurisdiction, workflow and integration pattern. Compliance and reconciliation connect to this context; the diagram does not imply every function is live everywhere or that every historical action can be replayed.",
  },
};

export const ecosystemData = {
  eyebrow: "ONE ECOSYSTEM, DISTINCT SOURCES",
  headline: "Understand the product. Verify in the right place.",
  subhead:
    "About ZoikoTax supplies company and product context. It connects to—not replaces—the authoritative detail owned by each area.",
  cards: [
    {
      tag: "ARCHITECTURE",
      title: "Platform",
      description:
        "The core fiscal-control layer and governed workflows. Start here for the product architecture.",
      linkText: "Explore Platform",
      linkHref: "/platform/",
      icon: "Layers",
    },
    {
      tag: "ROLES & USE CASES",
      title: "Solutions",
      description:
        "Role- and use-case entry points for the teams evaluating and operating fiscal control.",
      linkText: "Explore Solutions",
      linkHref: "/solutions/",
      icon: "GitFork",
    },
    {
      tag: "SUPPORT AUTHORITY",
      title: "Coverage",
      description:
        "The source for current jurisdiction and capability support. Global design alone is not evidence of live coverage.",
      linkText: "Verify current Coverage",
      linkHref: "/coverage/",
      icon: "Globe",
    },
    {
      tag: "IMPLEMENTATION",
      title: "Developers",
      description:
        "APIs, SDKs, events, batch, integration patterns and sandbox context. Use the approved technical source.",
      linkText: "Open Developers",
      linkHref: "/developers/",
      icon: "Code",
    },
    {
      tag: "GOVERNANCE & ASSURANCE",
      title: "Trust",
      description:
        "Security, privacy, continuity, AI, evidence, accessibility and disclosure context belong in Trust.",
      linkText: "Visit Trust Center",
      linkHref: "/trust/",
      icon: "ShieldCheck",
    },
    {
      tag: "EDUCATION & EDITORIAL",
      title: "Resources",
      description:
        "Insights, guides and direct answers help explain the domain. Editorial context does not replace support or assurance sources.",
      linkText: "Read Resources Insights",
      linkHref: "/resources/",
      icon: "BookOpen",
    },
  ] as EcosystemCard[],
  footerNote:
    "Product owns architecture · Coverage owns support scope · Trust owns assurance context · Company / Legal owns corporate facts.",
};

export const integrationData = {
  eyebrow: "INTEGRATION BEFORE REPLACEMENT",
  headline: "Fit the architecture you already operate.",
  subhead:
    "Coexistence is a product principle. Implementation scope is established through approved Developers sources—not inferred from an architecture diagram.",
  patterns: [
    {
      id: "billing-bss",
      title: "Billing / BSS",
      description:
        "Integrate approved transaction and business context without a forced rip-and-replace of billing or operational systems.",
      icon: "Receipt",
    },
    {
      id: "erp-gl",
      title: "ERP / GL",
      description:
        "Connect finance outputs and evidence needs while preserving the role of existing finance systems.",
      icon: "Landmark",
    },
    {
      id: "tax-engines",
      title: "Existing tax engines",
      description:
        "Coexist through approved integration patterns. No universal replacement or guaranteed engine connectivity is implied.",
      icon: "Calculator",
    },
    {
      id: "einvoicing",
      title: "E-invoicing networks",
      description:
        "Connect to e-invoicing workflows and networks where the capability and integration pattern are supported.",
      icon: "FileCheck",
    },
    {
      id: "enterprise-data",
      title: "Enterprise data",
      description:
        "Use governed data patterns to carry approved business context into fiscal workflows.",
      icon: "Database",
    },
    {
      id: "oem-embedded",
      title: "OEM / embedded",
      description:
        "Use only the approved embedded and OEM pathways documented by Developers.",
      icon: "Boxes",
    },
  ] as IntegrationPattern[],
  pathways: {
    title: "Start with the approved integration path.",
    description:
      "Integration Guides, APIs, SDKs, events, batch and sandbox context are named source pathways in Developers. They are not a promise of connectivity to every system.",
    linkText: "Developers & Integration Guides",
    linkHref: "/developers/",
    sourceBox: {
      badge: "IMPLEMENTATION SOURCE",
      path: "/developers/",
      items:
        "APIs & SDKs · Events & batch Integration Guides · Sandbox Approved OEM / embedded patterns",
    },
  },
};

export const principlesData = {
  eyebrow: "OPERATING PRINCIPLES",
  headline: "Accountability is a design discipline.",
  subhead:
    "A consistent approach to fiscal control: connect the context, make authority explicit and keep each claim within its supported scope.",
  principles: [
    {
      id: "evidence-before-claims",
      title: "Evidence before claims",
      description:
        "Keep statements tied to the supporting context and source. An evidence route is not, by itself, proof of a guarantee.",
    },
    {
      id: "explicit-authority",
      title: "Explicit authority",
      description:
        "Make the governing logic, policy and accountable context clear. Assistance must not become silent fiscal authority.",
    },
    {
      id: "scope-before-scale",
      title: "Scope before scale",
      description:
        "Separate global architecture from actual support. Evaluate capability by jurisdiction, workflow and approved integration.",
    },
    {
      id: "integration-before-replacement",
      title: "Integration before replacement",
      description:
        "Work with existing operational, finance and approved tax systems. Do not infer a universal migration requirement.",
    },
    {
      id: "human-governance",
      title: "Human governance",
      description:
        "Retain human review and policy approval where required. Material fiscal actions remain within governed authority.",
    },
    {
      id: "currentness",
      title: "Currentness",
      description:
        "Use the authoritative source for support and governance detail. Do not treat a general product overview as a current coverage record.",
    },
  ] as OperatingPrinciple[],
};

export const aiAuthorityData = {
  eyebrow: "AI, DETERMINISM & HUMAN AUTHORITY",
  headline: "Advisory, never independently authoritative.",
  subhead:
    "Separate assistance from governed decisions and policy approval. The boundary matters most when an action carries monetary, legal or compliance consequences.",
  stages: [
    {
      tag: "AI ASSISTANCE",
      title: "Assisted input & support",
      description:
        "Bounded assistance can support operators. It does not independently authorize a fiscal action.",
      icon: "Sparkles",
      hasNextArrow: true,
    },
    {
      tag: "DECISION AUTHORITY",
      title: "Deterministic / governed decisions",
      description:
        "Apply approved logic and policy where required. AI output is not a substitute for governing authority.",
      icon: "GitBranch",
      hasNextArrow: true,
    },
    {
      tag: "POLICY AUTHORITY",
      title: "Human review & approval",
      description:
        "Human review remains where policy requires it; accountability is not delegated to an autonomous model.",
      icon: "UserCheck",
      hasNextArrow: false,
    },
  ] as AuthorityStage[],
  modelInWordsEyebrow: "THE AUTHORITY MODEL IN WORDS",
  modelInWords:
    "AI assists with input and support. Deterministic or governed logic supplies decisions within approved scope. Human review and policy approval remain where required. Explainability is limited to what the supported source context can establish.",
  scopeNotice: {
    title: "No independent AI fiscal authority",
    explanation:
      "AI does not independently set monetary outcomes or authorize legal, filing or remittance actions. Assistance must not bypass policy approval or replace the authority attached to a material action.",
  },
  governanceLink: {
    label: "Review AI governance",
    href: "/trust/ai-governance/",
  },
};

export const evidenceData = {
  eyebrow: "EVIDENCE & ACCOUNTABILITY",
  headline: "Keep the reasoning with the action.",
  subhead:
    "Evidence is context for accountability, not a decorative assurance badge.",
  narrativeParagraphs: [
    "ZoikoTax connects material actions to their approved context and supporting evidence routes. Supported historical reconstruction can help explain what facts, sources and versions informed a decision within the context that was retained.",
    "Source and version lineage is meaningful only where supported. Approval, override and event history should be relied on only when those records are supported and retained.",
  ],
  auditLink: {
    label: "Evidence & auditability",
    href: "/trust/evidence-auditability/",
  },
  diagram: {
    badge: "CONCEPTUAL EVIDENCE CONTEXT",
    header: {
      title: "Material fiscal action",
      subtitle: "Approved context · Governing authority",
    },
    links: [
      {
        title: "Facts & fiscal context",
        description: "Inputs, classification, jurisdiction and responsibility.",
      },
      {
        title: "Source & version lineage",
        description: "Applicable sources and logic versions, where supported.",
      },
      {
        title: "Control & retained history",
        description: "Supported trace and control context available for reconstruction.",
      },
    ],
    footerNote:
      "In words: the action connects to facts and fiscal context, supported source/version lineage, and retained control history.",
  },
  scopeNotice: {
    title: "Reconstruction has a supported boundary",
    explanation:
      "Trace and replay work only within supported retained context. Auditability is not certification, legal proof, a completeness promise or an accuracy guarantee. No downloadable audit artifact is implied here.",
  },
};

export const companyContextData = {
  eyebrow: "COMPANY CONTEXT",
  headline: "Product context is not a corporate biography.",
  subhead:
    "The product framing on this page is distinct from legal and organizational facts about the company.",
  card: {
    title: "Corporate details require approved company sources",
    description:
      "Company / Legal sources are required for legal entity and ownership, company history, locations, leadership and organizational information. These facts are not supplied here.",
    footerTags:
      "Legal & ownership · History & locations · Leadership & organization",
  },
};

export const verificationData = {
  eyebrow: "VERIFY AT THE SOURCE",
  headline: "Public context before commercial conversation.",
  subhead:
    "Evaluate the relevant sources directly. A demo is not a prerequisite for reviewing product scope, integration context or governance information.",
  primarySources: [
    {
      title: "Coverage",
      description:
        "Verify the relevant jurisdiction, capability and support scope before treating a workflow as available.",
      linkText: "Check Coverage · /coverage/",
      linkHref: "/coverage/",
      icon: "Globe",
    },
    {
      title: "Developers",
      description:
        "Verify the approved integration pattern and implementation context for the systems you operate.",
      linkText: "Technical source · /developers/",
      linkHref: "/developers/",
      icon: "Code",
    },
    {
      title: "Trust",
      description:
        "Review the applicable governance, evidence, security, privacy and continuity context at its source.",
      linkText: "Trust Center · /trust/",
      linkHref: "/trust/",
      icon: "Shield",
    },
  ],
  trustDirectory: {
    title: "Go deeper in Trust",
    subtitle: "Specific questions, specific sources",
    routes: [
      {
        topic: "Security",
        description: "Security context and source disclosures",
        route: "/trust/security/",
        href: "/trust/security/",
      },
      {
        topic: "Privacy",
        description: "Privacy context and information handling",
        route: "/trust/privacy/",
        href: "/trust/privacy/",
      },
      {
        topic: "Business continuity",
        description: "Continuity scope and supporting context",
        route: "/trust/business-continuity/",
        href: "/trust/business-continuity/",
      },
      {
        topic: "AI governance",
        description: "Assistance boundaries and decision authority",
        route: "/trust/ai-governance/",
        href: "/trust/ai-governance/",
      },
      {
        topic: "Evidence & auditability",
        description: "Retained-context and reconstruction boundaries",
        route: "/trust/evidence-auditability/",
        href: "/trust/evidence-auditability/",
      },
    ] as VerificationRoute[],
  },
  scopeNotice: {
    title: "Read scope, authority and currentness together",
    explanation:
      "For each source, check what it covers, who owns the information and its stated currency. This overview does not supply a reviewed date or replace child-source controls. Source access or an evidence route should not be read as a certification claim or a promise that a particular proof artifact is available.",
  },
};

export const faqsData = {
  eyebrow: "DIRECT ANSWERS",
  headline: "Clear definitions. Explicit boundaries.",
  subhead:
    "The essential questions for executives, tax, finance, engineering and procurement teams evaluating telecom fiscal infrastructure.",
  items: [
    {
      id: "what-is-zoikotax",
      question: "What is ZoikoTax?",
      answer:
        "ZoikoTax is telecom-specific fiscal infrastructure: a governed fiscal-control layer connecting transaction facts, classification, jurisdiction, responsibility and determination to obligations, compliance, reconciliation and evidence. Capabilities remain subject to supported scope.",
      linkText: "Explore the Platform",
      linkHref: "/platform/",
    },
    {
      id: "what-is-not",
      question: "What is ZoikoTax not?",
      answer:
        "It is not a wholesale BSS/OSS or ERP/GL replacement, a universal replacement for tax engines, legal advice or autonomous AI fiscal authority. Its global architecture does not mean universal production coverage.",
      linkText: "Check the product architecture",
      linkHref: "/platform/",
    },
    {
      id: "who-for",
      question: "Who is ZoikoTax for?",
      answer:
        "It provides product and evaluation context for executive, tax, finance, engineering and procurement roles accountable for telecom fiscal operations. Role and use-case detail belongs in Solutions; implementation and support must be verified separately.",
      linkText: "Explore role-based Solutions",
      linkHref: "/solutions/",
    },
    {
      id: "replace-current",
      question: "Does it replace our current systems?",
      answer:
        "Not as a universal requirement. ZoikoTax is integration-led and designed to coexist with existing BSS/OSS, ERP/GL and approved tax engines. The applicable pattern must come from approved Developers sources; compatibility is not assumed.",
      linkText: "Developers & Integration Guides",
      linkHref: "/developers/",
    },
    {
      id: "jurisdiction-supported",
      question: "Is every jurisdiction supported?",
      answer:
        "No universal support claim is made. Global architecture and current jurisdiction/capability support are different things. Use Coverage to verify the relevant scope instead of inferring readiness from this overview.",
      linkText: "Verify jurisdiction and capability support",
      linkHref: "/coverage/",
    },
    {
      id: "ai-evidence-governed",
      question: "How are AI and evidence governed?",
      answer:
        "AI assistance is distinct from deterministic or governed decisions and human review where policy requires it. AI has no independent monetary, legal, filing or remittance authority. Evidence and replay are bounded by supported retained context—not certification, legal proof or an accuracy guarantee.",
      linkText: "AI governance · Evidence & auditability",
      linkHref: "/trust/ai-governance/",
      secondaryRoute: "/trust/ai-governance/ · /trust/evidence-auditability/",
    },
  ] as FaqItem[],
};

export const evaluationData = {
  eyebrow: "YOUR EVALUATION PATH",
  headline: "Go deeper without losing the context.",
  subhead:
    "Move from product understanding to scope, implementation and governance. Explore public sources in the order that serves your evaluation.",
  steps: [
    {
      step: "01",
      title: "Understand the architecture",
      linkText: "Explore Platform",
      linkHref: "/platform/",
      route: "/platform/",
    },
    {
      step: "02",
      title: "Verify supported scope",
      linkText: "Current Coverage",
      linkHref: "/coverage/",
      route: "/coverage/",
    },
    {
      step: "03",
      title: "Plan implementation",
      linkText: "Developers & Integration Guides",
      linkHref: "/developers/",
      route: "/developers/",
    },
    {
      step: "04",
      title: "Assess governance",
      linkText: "Trust Center",
      linkHref: "/trust/",
      route: "/trust/",
    },
  ] as EvaluationStep[],
  pathways: [
    {
      title: "Insights",
      description: "Editorial context for telecom fiscal operations.",
      route: "/resources/insights/",
      href: "/resources/",
    },
    {
      title: "Guides & reports",
      description: "Deeper reading for product and evaluation context.",
      route: "/resources/guides-reports/",
      href: "/resources/",
    },
    {
      title: "Resource FAQ",
      description: "Continue with direct questions and answers.",
      route: "/resources/faq/",
      href: "/resources/",
    },
  ] as ResourcePath[],
  demoCallout: {
    eyebrow: "FROM UNDERSTANDING TO EVALUATION",
    headline: "See how fiscal control fits your telecom architecture.",
    subhead:
      "Bring your scope and integration questions to a product conversation. Public Coverage, Developers and Trust sources remain available independently.",
    primaryCta: {
      label: "Book a Demo",
      href: "#contact",
    },
    secondaryCta: {
      label: "Explore the platform",
      href: "/platform/",
    },
  },
};
