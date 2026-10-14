export const HERO_DATA = {
  eyebrow: "COVERAGE · UNITED KINGDOM",
  title: "United Kingdom coverage, capability by capability.",
  description:
    "Review governed public readiness for ZoikoTax capabilities in the United Kingdom market context. Each capability carries its own state, scope and currentness; a market label is not a blanket support claim.",
  actions: [
    { label: "Review capability status", href: "#capability-matrix" },
    { label: "View Status & Releases", href: "/status-and-releases" },
  ],
  demoLink: { label: "Book a Demo", href: "/contact" },
  footnote:
    "Availability is capability- and scope-specific. Review the stated scope and currentness for each capability.",
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct answer",
  title: "What does United Kingdom mean in ZoikoTax Coverage?",
  description:
    "It is a market-specific view of governed pack and capability readiness. A listed market or pack does not mean every capability is in production.",
  dimensions: ["Market", "Capability", "State", "Scope", "Currentness"],
  note: "Read these together. Never infer one from another.",
};

export const CURRENTNESS_DATA = {
  eyebrow: "Currentness & source health",
  title: "A current source comes before a claim.",
  marketName: "United Kingdom",
  marketStatusLabel: "Governed public source health",
  badge: "Status unavailable",
  fields: [
    { label: "Authoritative source", value: "Not supplied for this market" },
    { label: "Last verified", value: "Not publicly established" },
    { label: "Effective time", value: "Not publicly established" },
    { label: "Current pack / release", value: "Unavailable from governed source" },
  ],
  explanation:
    "Current public readiness could not be verified from the governed Coverage source. Do not infer production availability from earlier states, the market label or adjacent capabilities.",
};

export const CAPABILITY_STATUS_DATA = {
  eyebrow: "Capability matrix",
  title: "Readiness belongs to each capability.",
  description:
    "Review state, source, scope and currentness together. Missing records are shown explicitly—not converted into a support claim.",
  tableCaption: "United Kingdom · public capability records",
  tableSourceNote: "Governed source not supplied",
  columns: [
    "CAPABILITY / BOUNDARY",
    "STATE / SOURCE / CURRENTNESS",
    "EXACT PUBLIC SCOPE",
    "PACK / RELEASE",
  ],
  capabilities: [
    {
      name: "Tax Determination",
      boundary:
        "No rates, tax logic or accuracy claims are established by this public record.",
      status: "Status unavailable",
      source: "Source: not supplied",
      currentness: "Currentness: source required",
      scopeTitle: "Scope not publicly established",
      scopeDetail: "No availability claim without exact governed scope.",
      pack: "Pack: unavailable",
      release: "Release: unavailable",
      destination: "No approved detail destination supplied.",
    },
    {
      name: "Regulatory Obligations",
      boundary:
        "Readiness is not an organization-specific legal conclusion or obligation assessment.",
      status: "Status unavailable",
      source: "Source: not supplied",
      currentness: "Currentness: source required",
      scopeTitle: "Scope not publicly established",
      scopeDetail: "No availability claim without exact governed scope.",
      pack: "Pack: unavailable",
      release: "Release: unavailable",
      destination: "No approved detail destination supplied.",
    },
    {
      name: "Compliance & Filing",
      boundary:
        "No supported forms, filing deadlines or filing scope can be inferred.",
      status: "Status unavailable",
      source: "Source: not supplied",
      currentness: "Currentness: source required",
      scopeTitle: "Scope not publicly established",
      scopeDetail: "No availability claim without exact governed scope.",
      pack: "Pack: unavailable",
      release: "Release: unavailable",
      destination: "No approved detail destination supplied.",
    },
    {
      name: "Remittance",
      boundary:
        "Orchestration does not imply funds holding, transfers or settlement.",
      status: "Status unavailable",
      source: "Source: not supplied",
      currentness: "Currentness: source required",
      scopeTitle: "Scope not publicly established",
      scopeDetail: "No availability claim without exact governed scope.",
      pack: "Pack: unavailable",
      release: "Release: unavailable",
      destination: "No approved detail destination supplied.",
    },
    {
      name: "E-Invoicing & CTC",
      boundary:
        "No networks, mandates or authority coverage are inferred from this market label.",
      status: "Status unavailable",
      source: "Source: not supplied",
      currentness: "Currentness: source required",
      scopeTitle: "Scope not publicly established",
      scopeDetail: "No availability claim without exact governed scope.",
      pack: "Pack: unavailable",
      release: "Release: unavailable",
      destination: "No approved detail destination supplied.",
    },
    {
      name: "Managed Compliance",
      boundary:
        "Requires underlying Production and separate approved operational readiness. No managed service or SLA is inferred.",
      status: "Status unavailable",
      source: "Source: not supplied",
      currentness: "Currentness: source required",
      scopeTitle: "Scope not publicly established",
      scopeDetail: "No availability claim without exact governed scope.",
      pack: "Pack: unavailable",
      release: "Release: unavailable",
      destination: "No approved detail destination supplied.",
    },
  ],
  matrixReadingNote:
    "Status unavailable describes an unverified public record. It does not confirm overall support or a universal lack of support. Adjacent capabilities do not inherit one another’s state.",
  legend: {
    title: "What the governed states mean",
    description:
      "Definitions only—not United Kingdom assignments, a progression or a promise of promotion.",
    states: [
      {
        label: "RESEARCH",
        description: "Source discovery / interpretation is incomplete. Not production.",
        isMono: true,
      },
      {
        label: "VALIDATION",
        description: "Under formal / internal validation. Not production.",
        isMono: true,
      },
      {
        label: "PILOT",
        description: "Controlled, limited deployment within the exact stated scope.",
        isMono: true,
      },
      {
        label: "PRODUCTION",
        description: "Approved, authoritative production within the stated scope only.",
        isMono: true,
      },
      {
        label: "MANAGED",
        description:
          "Production plus approved managed operational readiness within exact scope.",
        isMono: true,
      },
      {
        label: "SUSPENDED",
        description:
          "New authoritative use stopped except an approved exception. Not current marketing availability.",
        isMono: true,
      },
      {
        label: "WITHDRAWN",
        description: "Retired; historical record only. No new availability.",
        isMono: true,
      },
      {
        label: "Status unavailable",
        description:
          "Unresolved: current governed readiness cannot be verified. Not a lifecycle assignment.",
        isHighlighted: true,
      },
    ],
  },
};

export const PACK_CONTEXT_DATA = {
  eyebrow: "Country & regulatory packs",
  title: "Pack context is not capability readiness.",
  description:
    "A pack’s lifecycle, its source provenance and each capability’s state are separate governed facts.",
  publicPackRecord: {
    title: "Public pack record",
    fields: [
      {
        label: "Pack existence / identity",
        value: "Not established by the supplied source",
      },
      { label: "Pack lifecycle", value: "Status unavailable" },
      { label: "Approved source / provenance", value: "Not supplied" },
      { label: "Review / approval", value: "Not publicly established" },
      {
        label: "Current release reference",
        value: "Unavailable from governed source",
      },
    ],
  },
  readingGuidance: {
    title: "A listed pack is not a blanket “live” label.",
    description:
      "No actual United Kingdom pack record is supplied here. Pack existence must not be assumed, and even an existing pack does not put every capability into Production.",
    actionEyebrow: "Go to the governed source",
    actions: [
      {
        label: "Country & Regulatory Packs",
        href: "/country-regulatorypacks",
      },
      {
        label: "Status & Releases",
        href: "/status-and-releases",
      },
    ],
  },
};

export const SCOPE_EXCLUSIONS_DATA = {
  eyebrow: "Exact scope",
  title: "Read the boundary—not just the market.",
  description:
    "Availability is capability- and scope-specific. Review the stated scope and currentness for each capability.",
  cards: [
    {
      icon: "/united-kingdom/icons/layers.svg",
      title: "Product & use-case scope",
      subtitle: "Product · service · entity · use case",
      description: "Exact supported combinations are not publicly established.",
    },
    {
      icon: "/united-kingdom/icons/file-search.svg",
      title: "Jurisdiction & authority scope",
      subtitle: "Sub-jurisdiction · authority · network",
      description: "Public sub-jurisdiction scope is not established here",
    },
    {
      icon: "/united-kingdom/icons/users-round.svg",
      title: "Managed operating scope",
      subtitle: "Underlying capability · operational readiness",
      description: "Separate approved managed scope is required; it is not inferred.",
    },
  ],
  interpretation: {
    card1: {
      title: "Partial is not the same as unresolved.",
      description:
        "Partial scope requires a verified boundary that names what is included and excluded. An absent source is unresolved—not a narrower scope claim and not evidence that everything is unsupported.",
    },
    card2: {
      title: "Nothing extends by implication.",
      description:
        "Do not extend readiness to unlisted entities, services, jurisdictions, authorities, networks or managed operations. This view does not publish tax rules or organization-specific advice.",
    },
  },
  nextStep: {
    text: "Use Country & Regulatory Packs to review governed context or explore another market. No local hierarchy or neighboring market readiness is assumed here.",
    actionLabel: "View Country & Regulatory Packs",
    actionHref: "/country-regulatorypacks",
  },
};

export const CHANGE_HISTORY_DATA = {
  eyebrow: "Status & releases",
  title: "Changes belong to the governed record.",
  description:
    "The latest United Kingdom source record is not supplied here. Review Status & Releases for source-owned currentness and change history.",
  note: "How to interpret a record · explanatory conditions, not announced United Kingdom events",
  conditions: [
    {
      title: "Historical or superseded",
      description:
        "Earlier records explain history. They do not establish current availability.",
    },
    {
      title: "Scheduled or future",
      description:
        "A future effective state is not current readiness before its governed effective time.",
    },
    {
      title: "Stale or partial source",
      description:
        "Do not reuse old affirmative readiness. Publish only the currently verified scope.",
    },
    {
      title: "SUSPENDED",
      description:
        "Suspension dominates earlier Production. New authoritative use is stopped except an approved exception.",
    },
    {
      title: "WITHDRAWN",
      description:
        "A withdrawn record is historical. It does not authorize new availability.",
    },
    {
      title: "Conflicting sources",
      description:
        "Conflicting affirmative claims are suppressed until the governed source resolves them.",
    },
  ],
  actionText:
    "No dates, release identifiers or market events are inferred from an absent record.",
  actionLabel: "View Status & Releases",
  actionHref: "/status-and-releases",
};

export const SPECIALIST_BOUNDARIES_DATA = {
  eyebrow: "Keep the boundaries clear",
  title: "The right question. The right source.",
  description:
    "Coverage describes where and what is ready. Other specialist surfaces answer different questions; none substitutes for governed market readiness.",
  surfaces: [
    {
      icon: "/united-kingdom/icons/code-xml.svg",
      title: "Developers",
      subtitle: "How to integrate",
      description:
        "Integration guidance is separate from where and what is ready. No technical endpoints or versions are established here.",
    },
    {
      icon: "/united-kingdom/icons/shield.svg",
      title: "Trust",
      subtitle: "Security, privacy & governance",
      description:
        "Residency, continuity and certification claims belong to their governed Trust sources—not to a market label.",
    },
    {
      icon: "/united-kingdom/icons/activity.svg",
      title: "System Status",
      subtitle: "Live service health",
      description:
        "Healthy System Status does not establish market support. Production does not ensure account or transaction health.",
    },
    {
      icon: "/united-kingdom/icons/message-circle.svg",
      title: "Customer / Technical Support",
      subtitle: "Account-specific assistance",
      description:
        "Account and technical matters belong in approved support channels, not in public Coverage records.",
    },
    {
      icon: "/united-kingdom/icons/lock-keyhole.svg",
      title: "Responsible Disclosure",
      subtitle: "Vulnerability reporting",
      description:
        "Use the governed vulnerability-reporting channel. Do not submit secrets or vulnerabilities through Coverage.",
    },
    {
      icon: "/united-kingdom/icons/messages-square.svg",
      title: "Book a Demo",
      subtitle: "Commercial fit & exact scope",
      description:
        "Discuss the capability and scope you need. A demo is neither production approval nor a promise of availability.",
    },
  ],
  corporateAndAdvice: [
    {
      title: "Corporate presence ≠ product Coverage",
      description:
        "The London European Headquarters is a corporate fact. It does not establish United Kingdom product readiness, data residency or local support availability.",
    },
    {
      title: "Product readiness, not professional advice",
      description:
        "Public Coverage describes product readiness; it is not legal or tax advice for a specific organization or transaction.",
    },
  ],
  handoff: {
    text: "Public readiness stays ungated. Do not provide taxpayer details, customer records, account data or private tax questions to review Coverage.",
    actionLabel: "Explore Developers",
    actionHref: "/developer-overview",
  },
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. No blanket claims.",
  description:
    "All answers are visible. Read them alongside the capability matrix and its source/currentness boundaries.",
  items: [
    {
      question: "Does ZoikoTax support the United Kingdom?",
      answer:
        "Readiness is capability- and scope-specific and must be verified independently through the current governed matrix. Current authoritative UK records aren’t supplied here, so no overall support or universal lack-of-support can be confirmed.",
    },
    {
      question: "Does a United Kingdom pack mean every capability is live?",
      answer:
        "No. Pack existence and capability Production state are separate. Every capability needs governed state/scope.",
    },
    {
      question: "How do I know what is production-ready?",
      answer:
        "Review current state, exact scope/currentness and linked Status & Releases; do not infer from label/history.",
    },
    {
      question: "What if a status is missing?",
      answer: "Status unavailable, no borrowing earlier or adjacent readiness.",
    },
    {
      question: "Does the London European Headquarters prove UK product coverage?",
      answer:
        "No. Corporate office presence and product Coverage are separate facts. Readiness must come from governed market/capability state, scope and currentness.",
    },
    {
      question: "Does PRODUCTION mean every customer/use case is covered?",
      answer:
        "No. Exact stated scope only, not substitute for customer contracts or tax/legal analysis.",
    },
  ],
};

export const DISCUSSION_DATA = {
  eyebrow: "CAPABILITY-SPECIFIC CONVERSATIONS",
  title: "Discuss the exact scope you need.",
  description:
    "Book a Demo for a capability- and scope-specific discussion. A conversation is not a production promise, and public readiness remains available without a sales gate.",
  actions: [
    { label: "Book a Demo", variant: "primary" as const, href: "/contact" },
    {
      label: "Review capability status",
      variant: "darkPill" as const,
      href: "#capability-matrix",
    },
    {
      label: "Country & Regulatory Packs",
      variant: "darkPill" as const,
      href: "/country-regulatorypacks",
    },
    {
      label: "Status & Releases",
      variant: "darkPill" as const,
      href: "/status-and-releases",
    },
  ],
};
