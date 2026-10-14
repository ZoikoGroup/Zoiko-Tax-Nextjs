export const HERO_DATA = {
  eyebrow: "COVERAGE · EUROPEAN UNION",
  title: "European Union coverage, capability by capability.",
  description:
    "Review governed public readiness for ZoikoTax capabilities in the European Union market context. Each capability carries its own state, scope and currentness; a market label is not a blanket support claim.",
  actions: [
    { label: "Review capability status", href: "#capability-matrix" },
    { label: "View Status & Releases", href: "/status-and-releases" },
  ],
  demoLink: { label: "Book a Demo ↗", href: "/contact" },
  footnote:
    "Regional identity does not establish readiness for every member state.",
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct answer",
  title: "What does European Union mean in ZoikoTax Coverage?",
  description:
    "It is a market-specific view of governed pack and capability readiness. A listed market or pack does not mean every capability is in production.",
  card: {
    title: "A regional label is not a member-state claim.",
    description:
      "Exact regional and member-state semantics must come from governed Coverage. The European Union label does not mean all member states have equivalent capability readiness.",
  },
};

export const CURRENTNESS_DATA = {
  eyebrow: "CURRENTNESS & SOURCE HEALTH",
  marketName: "European Union",
  badge: "Status unavailable",
  explanation:
    "Current public readiness could not be verified from the governed Coverage source. Do not infer production availability from earlier states, the market label or adjacent capabilities.",
  fields: [
    {
      label: "Governed public source",
      value: "Current record unavailable",
    },
    {
      label: "Effective context",
      value: "Not publicly established",
    },
    {
      label: "Review context",
      value: "Not publicly established",
    },
  ],
  note: "An unavailable record is not a claim that every capability is unsupported. Missing, stale, partial, conflicting or future-dated evidence cannot establish current readiness.",
};

export const CAPABILITY_MATRIX_DATA = {
  eyebrow: "Capability matrix",
  title: "Readiness is specific. Review each capability.",
  description:
    "Availability is capability- and scope-specific. Review the stated scope and currentness for each capability.",
  tableCaption: "European Union",
  tableSourceNote: "Independent records · no regional rollup",
  columns: [
    "Capability / boundary",
    "State / currentness",
    "Governed scope",
    "Source / pack / release",
  ],
  capabilities: [
    {
      name: "Tax Determination",
      boundary:
        "No rates, taxability conclusions or determination accuracy are established by this record.",
      status: "Status unavailable",
      currentness: "Currentness: source required",
      scopeTitle: "Scope not publicly established",
      scopeDetail: "Exact applicability requires a governed record.",
      source: "Source: unavailable",
      packRelease: "Pack / release: unavailable",
      detail: "Detail record unavailable",
    },
    {
      name: "Regulatory Obligations",
      boundary:
        "Readiness is not a customer-specific legal conclusion or confirmation of applicable obligations.",
      status: "Status unavailable",
      currentness: "Currentness: source required",
      scopeTitle: "Scope not publicly established",
      scopeDetail: "Exact applicability requires a governed record.",
      source: "Source: unavailable",
      packRelease: "Pack / release: unavailable",
      detail: "Detail record unavailable",
    },
    {
      name: "Compliance & Filing",
      boundary:
        "No forms, filing frequencies or deadlines are established by this record.",
      status: "Status unavailable",
      currentness: "Currentness: source required",
      scopeTitle: "Scope not publicly established",
      scopeDetail: "Exact applicability requires a governed record.",
      source: "Source: unavailable",
      packRelease: "Pack / release: unavailable",
      detail: "Detail record unavailable",
    },
    {
      name: "Remittance",
      boundary:
        "Orchestration does not imply custody, holding funds, transfers or a settlement guarantee.",
      status: "Status unavailable",
      currentness: "Currentness: source required",
      scopeTitle: "Scope not publicly established",
      scopeDetail: "Exact applicability requires a governed record.",
      source: "Source: unavailable",
      packRelease: "Pack / release: unavailable",
      detail: "Detail record unavailable",
    },
    {
      name: "E-Invoicing & CTC",
      boundary:
        "No mandates, networks or authority connections can be inferred from the market label.",
      status: "Status unavailable",
      currentness: "Currentness: source required",
      scopeTitle: "Scope not publicly established",
      scopeDetail: "Exact applicability requires a governed record.",
      source: "Source: unavailable",
      packRelease: "Pack / release: unavailable",
      detail: "Detail record unavailable",
    },
    {
      name: "Managed Compliance",
      boundary:
        "Requires underlying PRODUCTION and separately approved operational readiness. No hours, staffing or SLA are inferred.",
      status: "Status unavailable",
      currentness: "Currentness: source required",
      scopeTitle: "Scope not publicly established",
      scopeDetail: "Exact applicability requires a governed record.",
      source: "Source: unavailable",
      packRelease: "Pack / release: unavailable",
      detail: "Detail record unavailable",
    },
  ],
  tableInterpretation: {
    title: "Status unavailable is not a readiness state.",
    description:
      "It means current public readiness could not be verified. It does not mean unsupported everywhere, and it must not be replaced by a nearby capability’s state or an earlier record.",
  },
  legend: {
    title: "What the governed states mean",
    subtitle:
      "Definitions only — none of these states is assigned to the European Union capabilities above. This is not an automatic progression.",
    states: [
      {
        label: "RESEARCH",
        description:
          "Source discovery and interpretation are incomplete. Not production availability.",
      },
      {
        label: "VALIDATION",
        description:
          "Formal or internal validation. Not production availability.",
      },
      {
        label: "PILOT",
        description:
          "Controlled, limited deployment within a stated scope.",
      },
      {
        label: "PRODUCTION",
        description:
          "Approved authoritative production within the exact stated scope.",
      },
      {
        label: "MANAGED",
        description:
          "Production plus approved managed operational readiness within the exact stated scope.",
      },
      {
        label: "SUSPENDED",
        description:
          "New authoritative use has stopped except for an approved exception. Not current availability marketing.",
      },
      {
        label: "WITHDRAWN",
        description:
          "Retired or historical. No new availability.",
      },
    ],
  },
};

export const PACK_CONTEXT_DATA = {
  eyebrow: "Country & Regulatory Packs",
  title: "A governance container. Not a support guarantee.",
  description:
    "A pack organizes governed content and lineage. Its existence or lifecycle does not establish that a capability is in production.",
  interpretation: {
    title: "Pack lifecycle ≠ capability readiness",
    body1:
      "No authoritative public European Union pack record is supplied here. Review the pack record and each capability’s independent state, scope and currentness together.",
    body2:
      "A global architecture, market label or neighboring pack is not proof of live capability.",
  },
  publicPackRecord: {
    fields: [
      { label: "Public pack record", value: "Unavailable" },
      { label: "Source / lineage", value: "Unavailable" },
      { label: "Owner / review context", value: "Unavailable" },
      { label: "Effective context", value: "Unavailable" },
      { label: "Release record", value: "Unavailable" },
      { label: "Pack lifecycle", value: "Unavailable" },
    ],
  },
  handoffs: [
    { label: "Country & Regulatory Packs", href: "/country-regulatorypacks" },
    { label: "View Status & Releases", href: "/status-and-releases" },
  ],
};

export const GOVERNED_SCOPE_DATA = {
  eyebrow: "Scope detail",
  title: "Regional label ≠ universal member-state coverage",
  description:
    "The European Union is the market context for this page, not evidence that readiness is identical across member states or subordinate jurisdictions.",
  scopeBoundary: {
    title: "Scope not publicly established",
    description:
      "No regional or member-state relationship is prepopulated. Exact scope must come from governed Coverage. An adjacent market, pack or capability is never a proxy; the regional label cannot establish all-member-state coverage.",
  },
  dimensions: [
    {
      title: "Regional / member-state relationship",
      status: "Not publicly established",
      description:
        "Region-level, member-state-level or hybrid only when the governed source defines it.",
    },
    {
      title: "Jurisdiction relationships",
      status: "Not publicly established",
      description:
        "Subordinate jurisdiction relationships require source-defined scope. No hierarchy is inferred.",
    },
    {
      title: "Product / service / entity / use case",
      status: "Not publicly established",
      description:
        "Applicability must be stated for the exact capability. Missing scope does not mean universal applicability.",
    },
    {
      title: "Authority / managed applicability",
      status: "Not publicly established",
      description:
        "Authority context and managed operational scope each require explicit governed records.",
    },
  ],
  footerNote:
    "Only source-defined scope can establish applicability. This view does not infer member countries, authorities, tax rules, rates, filings, deadlines, registrations or payment arrangements.",
};

export const CHANGE_HISTORY_DATA = {
  eyebrow: "Status & Releases",
  title: "History explains change. It does not prove currentness.",
  description:
    "Source-owned chronology belongs in Status & Releases. The latest authoritative European Union record is unavailable here; no timeline or announced event is inferred.",
  latestRecord: {
    title: "Latest public record",
    badge: "Status unavailable",
    description:
      "Release identifier, effective date and current source context are unavailable.",
  },
  currentnessRules: [
    "Historical or superseded records do not establish current availability. Scheduled changes are not current early.",
    "SUSPENDED dominates an earlier production record. WITHDRAWN provides no new availability.",
    "Stale, partial or conflicting evidence suppresses affirmative readiness; an earlier green state is not retained.",
  ],
  action: {
    label: "View Status & Releases",
    href: "/status-and-releases",
  },
};

export const SPECIALIST_BOUNDARIES_DATA = {
  eyebrow: "Use the right source",
  title: "Readiness is one question. Not every answer.",
  description:
    "Keep governed Coverage separate from technical contracts, security assurances, live health and account-specific support.",
  surfaces: [
    {
      title: "Coverage",
      role: "Where and what is ready",
      description:
        "Governed product readiness by capability, exact scope and currentness. A market label is not a support guarantee.",
    },
    {
      title: "Developers",
      role: "How the technical contracts work",
      description:
        "Technical integration contracts and implementation guidance. Technical documentation alone does not establish regional readiness.",
    },
    {
      title: "Trust",
      role: "Security, privacy and data handling",
      description:
        "Security, privacy, residency, localization and certifications need their own source authority. None is inferred from the European Union label.",
    },
    {
      title: "System Status",
      role: "Live operational health",
      description:
        "Healthy system status is not European Union or member-state support. PRODUCTION is not account or transaction health.",
    },
    {
      title: "Customer / Technical Support",
      role: "Account-specific assistance",
      description:
        "Account and technical issues belong to the appropriate support surface, not public Coverage. No sensitive customer or tax information is collected here.",
    },
    {
      title: "Responsible Disclosure",
      role: "Vulnerability reporting",
      description:
        "Security vulnerabilities belong in responsible disclosure, separate from readiness questions and commercial discussions.",
    },
    {
      title: "Demo",
      role: "Commercial capability and scope discussion",
      description:
        "A demonstration does not activate support, grant access or establish production readiness.",
    },
  ],
  professionalBoundary: {
    title:
      "Public Coverage describes product readiness; it is not legal or tax advice for a specific organization or transaction.",
    description:
      "Use source-owned specialist surfaces for their distinct purposes. Do not submit taxpayer details, filing data, personal information or private scope through public Coverage.",
  },
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. No blanket claims.",
  description:
    "Public readiness information stays visible — no sign-in, sales gate or collapsed critical truth.",
  items: [
    {
      question: "Does ZoikoTax support the European Union?",
      answer:
        "Readiness is capability- and scope-specific and must be independently verified in the governed matrix. No current authoritative records are supplied here, so overall support or universal unavailability cannot be confirmed.",
    },
    {
      question: "Does a European Union pack mean every capability is live?",
      answer:
        "No. Pack existence and a PRODUCTION state are separate. Each capability needs its own exact governed state and scope.",
    },
    {
      question: "How do I know what is production-ready?",
      answer:
        "Review the current state, stated scope and currentness for each capability, together with Status & Releases. Do not infer production readiness from the region label or historical records.",
    },
    {
      question: "What if a status is missing?",
      answer:
        "Status unavailable. Current public readiness could not be verified from the governed Coverage source. Do not borrow production availability from neighboring capabilities or earlier states.",
    },
    {
      question: "Does the European Union label mean every member state is covered?",
      answer:
        "No. A regional label does not establish identical readiness across member states or subordinate jurisdictions. Only governed scope and capability records can establish applicability.",
    },
    {
      question: "Does PRODUCTION mean every customer/use case is covered?",
      answer:
        "No. PRODUCTION applies only to the exact stated scope. It is not a substitute for contracts or customer-specific tax and legal analysis.",
    },
  ],
};

export const DISCUSSION_DATA = {
  title: "Discuss the exact capability. Clarify the exact scope.",
  description:
    "Bring your European Union capability and scope questions to a commercial discussion. Public readiness remains available without booking a demo.",
  footnote:
    "A demo is not activation, a support or access promise, or readiness approval.",
  actions: [
    { label: "Book a Demo", href: "/contact" },
    { label: "Review capability status", href: "#capability-matrix" },
    { label: "Country & Regulatory Packs", href: "/country-regulatorypacks" },
    { label: "View Status & Releases", href: "/status-and-releases" },
  ],
};
