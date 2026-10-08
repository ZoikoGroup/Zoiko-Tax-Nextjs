export interface RelationshipCategory {
  name: string;
  definition: string;
  explanation: string;
  verificationGuidance: string;
  iconName: "network" | "workflow" | "layers";
}

export interface AuthorityDefinition {
  term: string;
  limitation: string;
}

export interface ResponsibilityRow {
  area: string;
  zoikoTax: string;
  partner: string;
  customer: string;
}

export interface LifecycleState {
  name: string;
  meaning: string;
}

export interface QuestionAnswer {
  question: string;
  answer: string;
}

export interface SourceRouteCard {
  label: string;
  purpose: string;
  path: string;
  iconName: "code-2" | "globe-2" | "shield-check" | "building-2" | "newspaper" | "message-circle";
}

export const heroData = {
  eyebrow: "RESOURCES · PARTNERS",
  headline: "Build with the right ecosystem.",
  introduction:
    "Understand technology, implementation and ecosystem relationships—where current, approved public evidence defines the role and scope.",
  publicationRule: "Approved technology, implementation and ecosystem relationships only.",
  primaryCta: {
    label: "Explore Developers",
    href: "/developers",
  },
  secondaryCta: {
    label: "Understand relationships",
    href: "#relationship-types",
  },
  contextualLink: {
    label: "Contact — general inquiry routing",
    href: "/contact",
  },
  disclosure: {
    title: "Approved public partner records not supplied",
    explanation:
      "No live partner directory is presented. “Explore partners” is reserved for an approved live registry; the guidance below explains the relationship model.",
  },
};

export const relationshipTypesData = {
  eyebrow: "Relationship-first",
  title: "Start with the role. Not the logo.",
  introduction:
    "Three explanatory relationship types. These labels describe the model—not a claim of live partner coverage.",
  categories: [
    {
      name: "Technology",
      definition: "Approved product or integration relationship",
      explanation:
        "Defines a documented technical connection and its current boundaries. Integration status does not imply implementation delivery.",
      verificationGuidance: "Read the integration scope and approved technical evidence.",
      iconName: "network",
    },
    {
      name: "Implementation",
      definition: "Approved delivery scope",
      explanation:
        "Defines what a relationship may deliver within an approved scope. Method, credentials and service regions require their own evidence.",
      verificationGuidance: "Read the delivery scope and responsibility handoff.",
      iconName: "workflow",
    },
    {
      name: "Ecosystem",
      definition: "Approved adjacent role",
      explanation:
        "Defines a specific role around ZoikoTax. An adjacent relationship is not automatically an integration, delivery or sales authorization.",
      verificationGuidance: "Read the exact role and any explicit authority.",
      iconName: "layers",
    },
  ] as RelationshipCategory[],
  authorities: [
    {
      term: "Referral / reseller",
      limitation:
        "Only where explicit approved authority defines the role. No sales authority is implied here.",
    },
    {
      term: "Marketplace",
      limitation:
        "Only an official, current listing may establish a marketplace relationship. None is supplied.",
    },
    {
      term: "Strategic",
      limitation:
        "Use only with an approved definition of the relationship—not as a prestige or tier claim.",
    },
  ] as AuthorityDefinition[],
  notice: {
    title: "Different roles. Separate approvals.",
    explanation:
      "Not every relationship does both technical integration and implementation delivery. Assess each approved scope independently.",
  },
};

export const registryDiscoveryData = {
  eyebrow: "Approved registry",
  title: "Public evidence before public discovery.",
  introduction:
    "A relationship is discoverable only when its approved public record establishes who it is, what it does and where its scope ends.",
  emptyState: {
    title: "Approved public partner records not supplied",
    explanation:
      "No approved names, logos, status, capabilities or service regions are available in the supplied source. No featured records, directory results or partner detail destinations are shown.",
    safeRoutes: [
      { label: "Developers", href: "/developers" },
      { label: "Trust", href: "/about-us" },
      { label: "General Contact", href: "/contact" },
    ],
  },
  specimen: {
    statusBadge: "STRUCTURAL SPECIMEN · NOT LIVE",
    title: "How an approved directory is discovered",
    explanation:
      "Labels and states below explain the discovery pattern. Search, filters, sorting and reset are inactive until approved registry data exists.",
    sortRules:
      "Featured requires approved selection. Alphabetical uses the exact public name. Newest-updated requires a useful, actual reviewed date.",
    noResults: {
      title: "No approved results to display",
      guidance:
        "When live data exists, a zero-result state should explain how to reset or broaden approved filters. It must never synthesize a partner, result count or service region.",
    },
    accessibleGuidance:
      "Focus-ring specimen shown on search. Persistent labels, text status and a readable core explanation remain available without hover, motion or JavaScript. This is a static design, not a working directory.",
  },
};

export const partnerRecordAnatomyData = {
  eyebrow: "Read the relationship",
  title: "Identity, scope and boundaries—together.",
  introduction:
    "A directory card introduces an approved relationship. Its inline detail explains the role. These structural specimens are not real partner records.",
  directoryCard: {
    specimenLabel: "CARD ANATOMY · NOT A PARTNER",
    logoRule:
      "Logo asset not supplied. Display only with actual usage rights; the written name always identifies the partner.",
    nameField: "Exact approved public name",
    fields: [
      {
        label: "Stable partner ID",
        guidance: "Source-assigned identity; not generated here.",
      },
      {
        label: "Relationship type",
        guidance: "Approved Technology, Implementation or Ecosystem role.",
      },
      {
        label: "Canonical capability",
        guidance: "Approved capability summary using consistent terminology.",
      },
      {
        label: "Service region & role",
        guidance: "Actual approved regions and current service role. Neither is supplied.",
      },
      {
        label: "Current status & review",
        guidance: "Active / Limited / Paused / Retired, with a sourced reviewed date. Not supplied.",
      },
    ],
    detailGate:
      "A live “View details” link needs a real, approved record destination. No link is created here.",
  },
  inlineDetail: {
    specimenLabel: "INLINE DETAIL ANATOMY · NOT A PARTNER",
    title: "A relationship, not a blanket endorsement.",
    summaryGuidance:
      "Begin with the exact public name, approved relationship type and summary. State the scope explicitly; do not extend it through an adjacent role, logo or sales description.",
    fields: [
      {
        label: "Capabilities",
        guidance:
          "Actual approved capabilities, including any limits. No public capability claims supplied.",
      },
      {
        label: "Integration / delivery role",
        guidance:
          "Document the actual technical or implementation role separately. Neither role is presumed.",
      },
      {
        label: "Regions & availability",
        guidance:
          "Source-scoped service geography and availability only. Not platform coverage or residency.",
      },
      {
        label: "Responsibility boundaries",
        guidance:
          "Describe the approved handoff among ZoikoTax, the partner and the customer. Use the public model below.",
      },
    ],
    proofBoundary: {
      title: "Proof travels with its source and rights.",
      guidance:
        "Only approved, current proof belongs on a live detail. No case studies, customer references, quotes, tiers, certifications or technical validation are supplied.",
    },
    contextRoutes: [
      { label: "Developers", href: "/developers" },
      { label: "Trust", href: "/about-us" },
      { label: "General Contact", href: "/contact" },
    ],
    sourceRequirement:
      "Actual public name, status, reviewed date and approved evidence are required before this pattern becomes a live record. No invented partner title or detail route is shown.",
  },
  notice: {
    title: "Read text, not just visual signals.",
    explanation:
      "Public names, relationship type, status and scope need written labels. Logos and color must never be the only way to identify a relationship or understand its limits.",
  },
};

export const technologyScopeData = {
  eyebrow: "Role boundaries",
  title: "A connection is not a delivery commitment.",
  introduction:
    "Illustrative role anatomy only. No actual integration, implementation service or partner capability is asserted below.",
  techRole: {
    title: "Technology integration",
    introduction:
      "Technical context should establish a current, approved integration status—not imply universal compatibility.",
    fields: [
      {
        label: "Approved technical surface",
        guidance:
          "API, event or batch surfaces may be named only when actually approved in Developers. No specific surface is approved here.",
      },
      {
        label: "Versions & validation",
        guidance:
          "Supported versions require current source evidence. No certification, formal tier or compatibility version is supplied.",
      },
      {
        label: "Support handoff",
        guidance:
          "The exact approved boundary is required. No 24/7 service, SLA or joint roadmap is implied.",
      },
    ],
    link: {
      label: "Read technical context in Developers",
      href: "/developers",
    },
  },
  implementationRole: {
    title: "Implementation delivery",
    introduction:
      "Delivery context should define an approved scope—not turn a possible task into an available service promise.",
    fields: [
      {
        label: "Approved delivery activities",
        guidance:
          "Discovery, configuration, integration, migration and training belong here only when actually included in approved scope.",
      },
      {
        label: "Method, credentials & regions",
        guidance:
          "Public method, credentials and service geography each need source evidence. None is supplied; no certification is implied.",
      },
      {
        label: "Customer engagement terms",
        guidance:
          "No savings, outcomes or delivery timelines are guaranteed. Customer contract terms are not public assumptions.",
      },
    ],
    link: {
      label: "Understand platform posture in Trust",
      href: "/about-us",
    },
  },
  notice: {
    title: "Keep the handoff explicit.",
    explanation:
      "Integration approval does not approve implementation delivery. A delivery scope does not expand platform functionality, product coverage or the customer’s legal responsibilities.",
  },
};

export const accountabilityModelData = {
  eyebrow: "Accountability architecture",
  title: "Clear roles. No transferred assumptions.",
  introduction:
    "A general public responsibility model—not a contractual assignment. The approved engagement scope must establish the actual boundaries.",
  matrix: [
    {
      area: "Platform",
      zoikoTax: "Owns approved functionality.",
      partner: "Does not redefine platform truth.",
      customer: "Authorized use and configuration.",
    },
    {
      area: "Implementation",
      zoikoTax: "Approved guidance and tools.",
      partner: "Approved delivery scope.",
      customer: "Environment, decisions and approvals.",
    },
    {
      area: "Security / privacy",
      zoikoTax: "Posture within its scope.",
      partner: "Its own controls and services.",
      customer: "Own controls and responsibilities.",
    },
    {
      area: "Coverage / legal",
      zoikoTax: "Coverage source controls availability.",
      partner: "Cannot expand coverage.",
      customer: "Validates own legal and business requirements.",
    },
  ] as ResponsibilityRow[],
  notice: {
    title: "Partner geography ≠ product coverage or data residency.",
    explanation:
      "A service region says where an approved partner role may operate. It does not establish product availability, residency, fiscal authority or legal suitability.",
  },
  linearAlternative: {
    title: "Reading without the table",
    context:
      "The same model in a linear, print- and narrow-reading-friendly form. No horizontal comparison is needed.",
    areas: [
      {
        name: "Platform",
        text: "ZoikoTax defines approved functionality. Partners cannot redefine it; customers remain responsible for authorized use and configuration.",
      },
      {
        name: "Implementation",
        text: "ZoikoTax provides approved guidance and tools. Partner delivery stays within scope; customer environments, decisions and approvals remain with the customer.",
      },
      {
        name: "Security / privacy",
        text: "Each actor retains its own security and privacy scope: ZoikoTax posture, partner controls and services, and customer controls and responsibilities.",
      },
      {
        name: "Coverage / legal",
        text: "The Coverage source controls platform availability. A partner cannot expand it; customers validate their own legal and business requirements.",
      },
    ],
  },
  verificationRoutes: [
    { label: "Verify product Coverage", href: "/coverage-overview" },
    { label: "Read the Trust context", href: "/about-us" },
  ],
};

export const relationshipLifecycleData = {
  eyebrow: "Currentness & rights",
  title: "A relationship must stay true after publication.",
  introduction:
    "Illustrative lifecycle states—not a status assigned to any actual partner. No relationship dates or approvals are supplied.",
  states: [
    { name: "Draft", meaning: "Internal only. Not a public relationship." },
    { name: "Approved", meaning: "Approval follows source and rights checks." },
    { name: "Active", meaning: "An approved relationship may be public." },
    { name: "Limited", meaning: "Public scope must carry an explicit limitation." },
    { name: "Paused", meaning: "Discovery is governed by approved policy." },
    { name: "Retired", meaning: "Unpublish or redirect only as approved." },
  ] as LifecycleState[],
  governance: {
    title: "Approval is a release gate.",
    description:
      "Alliances owns relationship records. Legal / Brand reviews public claims and rights. Product / Developers validates technical scope. Trust reviews posture boundaries.",
    releaseRequirement:
      "These approvals, accessibility review and route verification are required before publication. This page is an approval candidate; it does not claim those checks have passed.",
  },
  rightsRestraint: {
    title: "Remove what no longer has rights.",
    rule: "If rights are revoked, remove affected logos, public names and claims promptly. Review the actual source and status before relying on any public relationship.",
    measurement:
      "Any proposed discovery measurement should use record IDs, relationship type and aggregate counts only—not sensitive context. No current data collection is asserted here.",
  },
};

export const inquiryBoundaryData = {
  eyebrow: "Engagement boundaries",
  title: "Contact is a route. Not a partner application.",
  inquiryExplanation:
    "No approved public partner recruitment program is supplied. General Contact routes an inquiry; it does not establish eligibility, acceptance or an approved partner intake process.",
  contactLink: {
    label: "General inquiry routing · /contact/",
    href: "/contact",
  },
  programBoundary: {
    title: "No recruitment offer or form",
    requirements:
      "Eligibility, process, minimal business fields, response timing and commercial terms need an approved source before any public program can be described.",
    limitation:
      "None is supplied. No application, joint offer, exclusivity or future-program promise is presented.",
  },
};

export const directAnswersData = {
  eyebrow: "Direct answer",
  title: "Clear answers. No implied authority.",
  introduction: "Source-bound guidance for understanding and verifying a relationship.",
  questions: [
    {
      question: "Who are ZoikoTax partners?",
      answer:
        "ZoikoTax partners are approved technology, implementation or ecosystem relationships with a current public record. No approved public names have been supplied for this page, so no partner identities are presented.",
    },
    {
      question: "How do the relationship types differ?",
      answer:
        "Technology defines an approved product or integration relationship. Implementation defines an approved delivery scope. Ecosystem defines an approved adjacent role. Referral, reseller and marketplace authority require explicit evidence.",
    },
    {
      question: "Does technical integration mean implementation delivery?",
      answer:
        "Not automatically. Integration and delivery are distinct scopes. Read the actual approved role and handoff rather than assuming a technical connection includes implementation services.",
    },
    {
      question: "Who is accountable for what?",
      answer:
        "ZoikoTax, the partner and the customer retain separate responsibilities across platform functionality, implementation, security and privacy, and coverage and legal requirements. The matrix above is the general public model—not a substitute for approved engagement terms.",
    },
    {
      question: "Does a partner’s region mean ZoikoTax supports that region?",
      answer:
        "No. Partner service geography does not establish product support, fiscal coverage or data residency. Use the Coverage source to verify platform availability and validate your own legal and business requirements.",
    },
    {
      question: "How can I verify a current relationship?",
      answer:
        "Check its actual approved public record, current status, scope, reviewed source and usage rights. Those records and dates are not supplied here. Official news can add context but cannot replace current scope and status.",
    },
    {
      question: "How can I engage?",
      answer:
        "Use Developers for technical context or Contact for general inquiry routing. Contact is not a partner application, acceptance guarantee or response-time commitment. No approved public recruitment program is supplied.",
    },
  ] as QuestionAnswer[],
};

export const verificationNextStepsData = {
  eyebrow: "Verify the right source",
  title: "Take the next step with context.",
  introduction:
    "Use the source that answers your question. None of these routes implies a partner-specific offer, availability or endorsement.",
  routes: [
    {
      label: "Developers",
      purpose: "Technical context and approved integration documentation.",
      path: "/developers/",
      iconName: "code-2",
    },
    {
      label: "Coverage",
      purpose: "The source for platform availability—not partner geography.",
      path: "/coverage/",
      iconName: "globe-2",
    },
    {
      label: "Trust",
      purpose: "Platform posture and security / privacy scope.",
      path: "/trust/",
      iconName: "shield-check",
    },
    {
      label: "About ZoikoTax",
      purpose: "Company context, separate from relationship approval.",
      path: "/company/about/",
      iconName: "building-2",
    },
    {
      label: "Official Newsroom",
      purpose: "Official announcements; not a substitute for current status.",
      path: "/company/newsroom/",
      iconName: "newspaper",
    },
    {
      label: "General Contact",
      purpose: "Intent routing only. Not an application or response promise.",
      path: "/contact/",
      iconName: "message-circle",
    },
  ] as SourceRouteCard[],
  conversion: {
    eyebrow: "PLATFORM CONTEXT",
    title: "Understand ZoikoTax in your architecture.",
    explanation:
      "After reviewing role, coverage and accountability, explore the platform itself. A demo is not a partner-specific service offer.",
    primaryCta: {
      label: "Explore Developers",
      href: "/developers",
    },
    secondaryCta: {
      label: "Get a demo",
      href: "/demo",
    },
    demoRoute: "Developers /developers/ · Platform demo /demo/",
  },
};
