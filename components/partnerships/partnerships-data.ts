export interface QuickLink {
  label: string;
  href: string;
}

export interface RoutingCard {
  title: string;
  description: string;
  routeCode?: string;
  routePrefix?: string;
  routeSuffix?: string;
  gated?: boolean;
  linkText?: string;
  href: string;
  iconName: string;
}

export interface TaxonomyExclusion {
  text: string;
}

export interface TaxonomyCard {
  title: string;
  description: string;
  inferredTag: string;
  iconName: string;
  exclusions: string[];
}

export interface HonestStateItem {
  id: string;
  statusLabel: string;
  dotColor: string;
  title: string;
  description?: string;
  hasProgress?: boolean;
  progressPercent?: number;
}

export interface FAQItem {
  question: string;
  answerPrefix?: string;
  codeHighlight?: string;
  answerSuffix?: string;
  fullAnswer?: string;
}

export interface RelatedRouteItem {
  title: string;
  subtitle: string;
  href: string;
  iconName: string;
}

export const HERO_DATA = {
  eyebrow: "Offices & Connect · Partnerships",
  title: "Find the right path for partnership questions.",
  description:
    "Explore approved partner relationships, understand where technical and trust information lives, and use the same governed Partnerships path regardless of whether you arrived from Offices & Connect or another approved navigation placement.",
  primaryCta: {
    label: "Explore Partners",
    href: "/company/partners",
  },
  secondaryCta: {
    label: "Explore a partnership",
    href: "#explore-partnership",
  },
  ctaNote:
    "Explore a partnership opens only when an approved public partnership process is available.",
  quickLinksIntro: "Looking for something specific?",
  quickLinks: [
    { label: "Developers", href: "/developer-overview" },
    { label: "Sales Inquiry", href: "/contact" },
    { label: "General Contact", href: "/contact" },
  ] as QuickLink[],
  disclaimer:
    "Partnership interest, a listed relationship or an integration discussion does not by itself create certification, authorization, product availability or commercial rights.",
};

export const ROUTING_MATRIX_DATA = {
  eyebrow: "Step 1 · Where do I go?",
  title: "Pick the path that matches your question.",
  description:
    "Partnerships answers “where do I go?” before “what do I submit?” Each route resolves to the team that owns that truth — relationships, technical contracts, assurance or availability.",
  badge: "Routing matrix",
  cards: [
    {
      title: "Find an approved partner",
      description:
        "Browse current source-approved relationships and their scope.",
      routeCode: "/company/partners/",
      href: "/company/partners",
      iconName: "icon-search.svg",
    },
    {
      title: "Explore a potential partnership",
      description:
        "Use an approved public partnership-intake process, only when one exists.",
      routePrefix: "Inquiry or",
      routeCode: "/contact/",
      routeSuffix: "fallback",
      gated: true,
      href: "#explore-partnership",
      iconName: "icon-handshake.svg",
    },
    {
      title: "Technical collaboration",
      description:
        "Review canonical integration contracts and compatibility.",
      routeCode: "/developers/",
      href: "/developer-overview",
      iconName: "icon-code.svg",
    },
    {
      title: "Commercial evaluation",
      description:
        "Talk about buying or evaluation rather than partner status.",
      linkText: "Sales Inquiry · Book a Demo",
      href: "/contact",
      iconName: "icon-briefcase.svg",
    },
    {
      title: "Existing partner help",
      description:
        "Use the approved relationship-support or correction path.",
      linkText: "Source-controlled route",
      href: "/technical-support",
      iconName: "icon-user.svg",
    },
    {
      title: "Security & compliance",
      description:
        "Review authoritative assurance evidence directly.",
      linkText: "Trust",
      href: "/trust-center-security",
      iconName: "icon-shield.svg",
    },
    {
      title: "Market availability",
      description:
        "Review current capability and jurisdiction coverage.",
      linkText: "Coverage",
      href: "/coverage-overview",
      iconName: "icon-globe.svg",
    },
    {
      title: "General business inquiry",
      description:
        "Use general contact routing when nothing above fits.",
      routeCode: "/contact/",
      href: "/contact",
      iconName: "icon-chat.svg",
    },
  ] as RoutingCard[],
  doctrine: {
    title: "Production doctrine",
    description:
      "Partnerships is a governed routing experience. It does not create partner status, technical compatibility, coverage, assurance, program eligibility or commercial rights.",
    iconName: "icon-doctrine-clock.svg",
  },
};

export const RELATIONSHIP_TAXONOMY_DATA = {
  eyebrow: "Relationship taxonomy",
  title: "What a partner relationship means — and doesn’t.",
  description:
    "Partner categories are source-controlled classification, not marketing decoration. Each type describes only its approved scope. Status is earned, never inferred.",
  cards: [
    {
      title: "Technology partner",
      description:
        "An approved product or integration relationship only. Technical surface and compatibility come from canonical Developers sources.",
      inferredTag: "Never inferred",
      iconName: "icon-tech-grid.svg",
      exclusions: [
        "Certification",
        "Compatibility breadth",
        "Reseller rights",
      ],
    },
    {
      title: "Implementation partner",
      description:
        "An approved delivery or implementation role only, described with clear scope and responsibility boundaries for its approved service regions.",
      inferredTag: "Never inferred",
      iconName: "icon-impl-user.svg",
      exclusions: [
        "Guaranteed outcomes",
        "Global coverage",
        "Accreditation",
      ],
    },
    {
      title: "Ecosystem partner",
      description:
        "An approved adjacent relationship with a scoped, plain-language description — not every ecosystem relationship is an integration or implementation partnership.",
      inferredTag: "Never inferred",
      iconName: "icon-ecosystem-nodes.svg",
      exclusions: [
        "Strategic prestige",
        "Exclusivity",
        "Endorsement",
      ],
    },
  ] as TaxonomyCard[],
};

export const PARTNERSHIP_FORM_DATA = {
  eyebrow: "Step 2 · Only when a process exists",
  title: "Explore a partnership",
  description:
    "The partnership inquiry is a gated capability contract, not a guaranteed launch component. We collect only routing-essential information.",
  gateBox: {
    title: "Render gate.",
    text: "This form appears only when a staffed, privacy-approved, canonical partnership process exists. Otherwise the page shows an approved alternative route instead.",
    iconName: "icon-lock.svg",
  },
  warningBox: {
    title: "Keep this out of your request",
    bullets: [
      "Credentials and production secrets",
      "Taxpayer or customer data",
      "Confidential contracts",
      "Security-vulnerability details",
    ],
    footer:
      "No file upload is shown unless a separately approved secure exchange workflow exists.",
    iconName: "icon-alert-triangle.svg",
  },
  form: {
    title: "Partnership request",
    stateBadge: "State · Inquiry available",
    subtitle:
      "Fields are kept to the owner-approved minimum. This does not create partner status.",
    intentLabel: "Partnership intent",
    intentPlaceholder: "Select an approved type…",
    intentHelper: "Approved taxonomy values only — no invented categories.",
    intentOptions: [
      "Technology partner",
      "Implementation partner",
      "Ecosystem partner",
      "Strategic distribution inquiry",
      "Other approved category",
    ],
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Work email",
    emailPlaceholder: "you@company.com",
    emailHelper: "Minimum owner-approved contact field.",
    orgLabel: "Organization",
    orgPlaceholder: "Company name",
    websiteLabel: "Website or region · optional",
    websitePlaceholder: "example.com · region",
    websiteHelper: "Routing context only.",
    contextLabel: "Context · optional",
    contextPlaceholder:
      "Briefly describe the partnership you’d like to explore. Do not include confidential or sensitive data.",
    contextMaxChars: 1000,
    marketingConsentLabel:
      "Optional: send me occasional ZoikoTax partner updates. This is separate from processing my request and is off unless I choose it.",
    submitButtonLabel: "Send partnership request",
    disclaimer:
      "By sending, you agree to the handling described in our Privacy Notice. A receipt does not create partner status, acceptance or rights.",
  },
};

export const HONEST_STATES_DATA = {
  eyebrow: "Step 3 · Honest states",
  title: "State language communicates uncertainty without inventing operations.",
  description:
    "No synthesized partner records, no fake disabled forms, no status an inquiry didn’t earn. Every state is truthful, accessible and recoverable.",
  states: [
    {
      id: "router-ready",
      statusLabel: "ROUTER READY",
      dotColor: "#8F8AA6",
      title: "Intent options + Partners CTA.",
      description: "No form shown if the inquiry capability is disabled.",
    },
    {
      id: "inquiry-available",
      statusLabel: "INQUIRY AVAILABLE",
      dotColor: "#5AC08A",
      title: "Form appears with non-status, privacy-safe guidance.",
    },
    {
      id: "inquiry-unavailable",
      statusLabel: "INQUIRY UNAVAILABLE",
      dotColor: "#F0B98A",
      title: "A public partnership inquiry path is not available from this page.",
      description:
        "Use the approved Partners or General Contact route shown here. No fake disabled form.",
    },
    {
      id: "submitting",
      statusLabel: "SUBMITTING",
      dotColor: "#8F6EF0",
      title: "Sending your request…",
      description: "Progress announced; duplicate submit prevented.",
      hasProgress: true,
      progressPercent: 62,
    },
    {
      id: "validation-error",
      statusLabel: "VALIDATION ERROR",
      dotColor: "#E4B36A",
      title: "Check the highlighted fields.",
      description:
        "Error summary plus inline message; values preserved safely.",
    },
    {
      id: "success",
      statusLabel: "SUCCESS",
      dotColor: "#5AC08A",
      title: "Your partnership request has been received.",
      description:
        "Any next step is subject to the approved review process; this confirmation does not create partner status or rights.",
    },
    {
      id: "registry-unavailable",
      statusLabel: "REGISTRY UNAVAILABLE",
      dotColor: "#E46A6A",
      title: "We couldn’t load partner records right now.",
      description:
        "We never synthesize partners. Retry or use a related route.",
    },
    {
      id: "no-matching-partner",
      statusLabel: "NO MATCHING PARTNER",
      dotColor: "#B6A8CF",
      title: "No partners match these filters.",
      description:
        "Clear filters or use a related route — no fabricated recommendation.",
    },
  ] as HonestStateItem[],
};

export const FAQ_DATA = {
  eyebrow: "Answers",
  title: "Partnerships, answered.",
  description:
    "Stable boundary answers only. Current partner facts stay in the registry; technical, assurance and availability truth stay with their owners.",
  items: [
    {
      question: "Where can I find ZoikoTax partners?",
      answerPrefix: "Use the canonical Partners destination at ",
      codeHighlight: "/company/partners/",
      answerSuffix: " for approved public relationships.",
    },
    {
      question: "Does sending an inquiry make my company a ZoikoTax partner?",
      fullAnswer:
        "No. An inquiry is prospective interest only; partner status requires an approved relationship record.",
    },
    {
      question: "Are listed partners certified or authorized resellers?",
      fullAnswer:
        "Only when a specific source-controlled relationship or program record explicitly says so.",
    },
    {
      question: "Does a partner relationship prove an integration is supported?",
      fullAnswer:
        "No. Technical compatibility belongs to canonical Developers and technical sources.",
    },
    {
      question: "Can a partner make ZoikoTax available in a market?",
      fullAnswer: "No. Current product availability is governed by Coverage.",
    },
    {
      question: "Where should I report a security vulnerability?",
      fullAnswer: "Responsible Disclosure, not Partnerships.",
    },
  ] as FAQItem[],
};

export const RELATED_ROUTES_DATA = {
  eyebrow: "Related routes",
  title: "Keep the right destination close.",
  description:
    "Partners, Developers, Sales, Trust, Coverage and General Contact stay discoverable so no question hits a dead end.",
  routes: [
    {
      title: "Partners",
      subtitle: "Approved relationships · /company/partners/",
      href: "/company/partners",
      iconName: "icon-user.svg",
    },
    {
      title: "Developers",
      subtitle: "Integration contracts · /developers/",
      href: "/developer-overview",
      iconName: "icon-code.svg",
    },
    {
      title: "Sales Inquiry",
      subtitle: "Buying & evaluation questions",
      href: "/contact",
      iconName: "icon-briefcase.svg",
    },
    {
      title: "Trust",
      subtitle: "Security, privacy & compliance evidence",
      href: "/trust-center-security",
      iconName: "icon-shield.svg",
    },
    {
      title: "Coverage",
      subtitle: "Capability & jurisdiction availability",
      href: "/coverage-overview",
      iconName: "icon-globe.svg",
    },
    {
      title: "General Contact",
      subtitle: "Fallback routing · /contact/",
      href: "/contact",
      iconName: "icon-chat.svg",
    },
  ] as RelatedRouteItem[],
};
