export interface NavRoute {
  label: string;
  href: string;
}

export interface RouteCard {
  id: string;
  title: string;
  description: string;
  badge: string;
  href: string;
  icon: string;
}

export interface TruthfulState {
  key: string;
  name: string;
  dotColor: string;
  title: string;
  description: string;
  barColor?: string;
}

export interface FAQItem {
  question: string;
  answerParts: Array<{ text: string; code?: boolean }>;
}

export interface RelatedRoute {
  title: string;
  detail: string;
  href: string;
  icon: string;
}

export const GENERAL_CONTACT_HERO_DATA = {
  eyebrow: "Offices & Connect · General Contact",
  heading: "Reach the right ZoikoTax team.",
  description:
    "Choose the reason you are contacting ZoikoTax. Use the dedicated route for sales, support, technical help, partnerships, privacy, press, careers or security. Use the general business form only when none of those options fit. This is the same governed General Contact experience wherever the navigation label appears.",
  primaryCta: {
    label: "Choose a contact reason",
    href: "#contact-reasons",
  },
  secondaryCta: {
    label: "Book a demo",
    href: "/contact",
  },
  notice:
    "This page routes inquiries. Specialist destinations remain authoritative for their own processes, evidence and response commitments.",
  bgImage: "/general-contact/hero-bg.webp",
};

export const GENERAL_CONTACT_REASON_ROUTER_DATA = {
  eyebrow: "Step 1 · Choose a contact reason",
  heading: "Pick the route that matches your need.",
  description:
    "Specialist destinations are shown before any general form. Selecting a route takes you to the team that owns that work — it never creates a case or lead on its own.",
  priorityTag: "Priority routes",
  priorityRoutes: [
    {
      id: "customer-support",
      title: "Customer Support",
      description:
        "Existing customer, product or account help. We route operational and account issues to the support team.",
      badge: "/support/",
      href: "/contact",
      icon: "/general-contact/icon-customer-support.svg",
    },
    {
      id: "technical-support",
      title: "Technical Support",
      description:
        "Technical troubleshooting or an implementation issue. Reference questions go to docs first, then escalation.",
      badge: "Technical Support route",
      href: "/technical-support",
      icon: "/general-contact/icon-tech-support.svg",
    },
    {
      id: "system-status",
      title: "System Status",
      description:
        "Current service availability, incidents or maintenance. Live operational truth lives on the status surface.",
      badge: "Status destination",
      href: "/status-and-releases",
      icon: "/general-contact/icon-system-status.svg",
    },
    {
      id: "sales-inquiry",
      title: "Sales Inquiry",
      description:
        "Product evaluation, buying or commercial questions. Book a Demo remains a separate commercial path.",
      badge: "Sales Inquiry path",
      href: "/contact",
      icon: "/general-contact/icon-sales-inquiry.svg",
    },
    {
      id: "security-issue",
      title: "Report a security issue",
      description:
        "Vulnerability or security disclosure. This never uses the general form — it goes straight to disclosure.",
      badge: "/trust/responsible-disclosure/",
      href: "/responsible-disclosure",
      icon: "/general-contact/icon-security-vuln.svg",
    },
    {
      id: "documentation",
      title: "Documentation",
      description:
        "Public product and developer documentation, API reference, SDKs and release notes.",
      badge: "/docs/",
      href: "/developer-overview",
      icon: "/general-contact/icon-documentation.svg",
    },
  ] as RouteCard[],
  moreSpecialistTag: "More specialist routes",
  moreSpecialistRoutes: [
    {
      id: "community-forum",
      title: "Community Forum",
      description:
        "Peer discussion and community knowledge. Not official support or product truth.",
      badge: "Community destination",
      href: "#",
      icon: "/general-contact/icon-documentation.svg",
    },
    {
      id: "partnerships",
      title: "Partnerships",
      description:
        "Prospective relationship or partner question. Handed off to Partnerships / the Partners page.",
      badge: "Partnerships route",
      href: "/partnerships",
      icon: "/general-contact/icon-partnerships.svg",
    },
    {
      id: "privacy-rights",
      title: "Privacy & data rights",
      description:
        "Privacy question or rights request. Handled by the approved privacy process, excluded from marketing.",
      badge: "Privacy process",
      href: "/privacy-data-protection",
      icon: "/general-contact/icon-privacy.svg",
    },
    {
      id: "press-media",
      title: "Press & media",
      description:
        "Media or press inquiry. Routed to the newsroom / media path — never a generic sales queue.",
      badge: "Newsroom route",
      href: "/newsroom",
      icon: "/general-contact/icon-press-media.svg",
    },
    {
      id: "careers",
      title: "Careers",
      description:
        "Employment or recruiting question. Go to Careers — do not attach a CV to the general form.",
      badge: "/company/careers/",
      href: "/careers",
      icon: "/general-contact/icon-careers.svg",
    },
    {
      id: "trust-assurance",
      title: "Trust & assurance",
      description:
        "Security posture and due-diligence evidence. Public evidence is never gated behind a contact form.",
      badge: "/trust/",
      href: "/trust-center",
      icon: "/general-contact/icon-general-contact-card.svg",
    },
  ] as RouteCard[],
  fallbackBanner: {
    tag: "Fallback · use only if nothing above fits",
    title: "General business inquiry",
    textPrefix: "None of the specialist routes fit? Open the minimum-data general form below. It stays on ",
    code: "/contact/",
    textSuffix: " and collects only what is needed to route your message.",
    buttonText: "Open general form →",
    buttonHref: "#general-form",
  },
  routingRule: {
    title: "Routing rule",
    text: "The router must not auto-submit, prefill sensitive data, create a case or lead merely from a selection, or hide specialist destinations behind a generic form.",
  },
};

export const GENERAL_CONTACT_FORM_DATA = {
  eyebrow: "Step 2 · Only if no route fits",
  heading: "General business inquiry",
  description:
    "Use this form for a business question that does not belong to one of the specialist routes above. We ask for the minimum needed to route your message.",
  bgImage: "/general-contact/inquiry-form-bg.webp",
  prohibitedItemsTitle: "Keep this out of your message",
  prohibitedItems: [
    "Passwords and one-time codes",
    "API secrets or production credentials",
    "Taxpayer or customer records",
    "Payment details and production logs",
    "Security-vulnerability details",
  ],
  capabilityNote:
    "No phone field or file upload is shown by default. These appear only when an approved source or capability flag enables them.",
  formCard: {
    title: "Send us a message",
    stateBadge: "State · General selected",
    subtitle: "Fields are kept to the approved minimum. Every field has a routing purpose.",
    reasonLabel: "Reason · optional",
    reasonPlaceholder: "Select a general topic…",
    reasonOptions: [
      "General question",
      "Corporate / HQ inquiry",
      "Vendor / procurement inquiry",
      "Billing clarification",
      "Other general topic",
    ],
    reasonHelp: "Controlled values come from the Contact Routing Registry.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Work / business email",
    emailPlaceholder: "you@company.com",
    emailHelp: "Used only to reply, where a reply workflow exists.",
    orgLabel: "Organization · optional",
    orgPlaceholder: "Company name",
    orgHelp: "Routing context only.",
    countryLabel: "Country / region · optional",
    countryPlaceholder: "Select…",
    countryOptions: [
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "European Union",
      "Other",
    ],
    messageLabel: "Message",
    messagePlaceholder:
      "Describe your general business question. Do not include sensitive data (see the list on the left).",
    messageMaxLength: 1000,
    consentText:
      "Optional: I’d like to receive occasional ZoikoTax product updates. This is separate from processing my inquiry and is off unless I choose it.",
    submitButtonText: "Send general inquiry",
    notice:
      "By sending, you agree to the handling described in our Privacy Notice. No response time or commitment is implied.",
  },
};

export const GENERAL_CONTACT_TRUTHFUL_STATES_DATA = {
  eyebrow: "Step 3 · Truthful states",
  heading: "Every outcome is explicit and recoverable.",
  description:
    "The submission is honest about what happened. Success appears only after a confirmed receipt, errors preserve your safe input, and nothing promises a response time or team.",
  bgImage: "/general-contact/truthful-states-bg.webp",
  states: [
    {
      key: "default",
      name: "Default",
      dotColor: "#8F8AA6",
      title: "Intent router visible; general form collapsed.",
      description: "",
    },
    {
      key: "submitting",
      name: "Submitting",
      dotColor: "#8F6EF0",
      title: "Sending your inquiry…",
      description: "Progress is announced and duplicate submits are prevented.",
      barColor: "#F0B98A",
    },
    {
      key: "success",
      name: "Success",
      dotColor: "#5AC08A",
      title: "Your general inquiry was received.",
      description:
        "This confirmation does not establish a response time, priority, support entitlement or commercial commitment.",
    },
    {
      key: "validation_error",
      name: "Validation error",
      dotColor: "#F0B98A",
      title: "Check the highlighted fields.",
      description:
        "A summary plus inline errors; your values are preserved so nothing is retyped.",
    },
    {
      key: "provider_error",
      name: "Provider error",
      dotColor: "#E46A6A",
      title: "We could not confirm that your inquiry was received.",
      description: "Review the available specialist routes or try again. Safe input is kept.",
    },
    {
      key: "form_unavailable",
      name: "Form unavailable",
      dotColor: "#B6A8CF",
      title: "The general inquiry form is not available from this page right now.",
      description:
        "Use one of the approved specialist routes above. No fake email or phone is shown.",
    },
  ] as TruthfulState[],
};

export const GENERAL_CONTACT_FAQ_DATA = {
  eyebrow: "Answers",
  heading: "Contacting ZoikoTax, answered.",
  description:
    "Stable routing questions, kept source-controlled. Operational facts stay with the teams that own them.",
  items: [
    {
      question: "How do I contact ZoikoTax?",
      answerParts: [
        { text: "Start at " },
        { text: "/contact/", code: true },
        {
          text: " and choose the route that matches your need. Use specialist destinations for sales, support, technical help, partnerships, privacy, press, careers or security.",
        },
      ],
    },
    {
      question: "What is General Contact for?",
      answerParts: [
        {
          text: "A non-specialized business inquiry, used only when no dedicated route fits.",
        },
      ],
    },
    {
      question: "Can I use General Contact for customer support?",
      answerParts: [
        { text: "Use Customer Support at " },
        { text: "/support/", code: true },
        { text: " or the approved technical/support path instead." },
      ],
    },
    {
      question: "Can I report a security vulnerability here?",
      answerParts: [
        { text: "No. Use Responsible Disclosure at " },
        { text: "/trust/responsible-disclosure/", code: true },
        { text: "." },
      ],
    },
    {
      question: "Can I send tax records, logs or credentials?",
      answerParts: [
        {
          text: "No. Do not submit sensitive customer or tax data, credentials, secrets or private production records through a general contact form.",
        },
      ],
    },
    {
      question: "How quickly will ZoikoTax respond?",
      answerParts: [
        {
          text: "No public response time is stated unless an approved operational source establishes one.",
        },
      ],
    },
    {
      question: "Is there a public ZoikoTax phone number or email?",
      answerParts: [
        {
          text: "Only exact channels an approved current source establishes are published. This page does not establish one.",
        },
      ],
    },
  ] as FAQItem[],
};

export const GENERAL_CONTACT_RELATED_ROUTES_DATA = {
  eyebrow: "Related routes",
  heading: "Keep the right destination close.",
  description:
    "Support, Status, Docs, Sales, Partnerships and Trust stay discoverable so no request hits a dead end.",
  bgImage: "/general-contact/related-routes-bg.webp",
  routes: [
    {
      title: "Customer Support",
      detail: "Account and product help · /support/",
      href: "/contact",
      icon: "/general-contact/icon-rel-support.svg",
    },
    {
      title: "System Status",
      detail: "Availability, incidents & maintenance",
      href: "/status-and-releases",
      icon: "/general-contact/icon-rel-status.svg",
    },
    {
      title: "Documentation",
      detail: "Product & developer docs · /docs/",
      href: "/developer-overview",
      icon: "/general-contact/icon-rel-docs.svg",
    },
    {
      title: "Sales Inquiry",
      detail: "Evaluation & commercial questions",
      href: "/contact",
      icon: "/general-contact/icon-rel-sales.svg",
    },
    {
      title: "Partnerships",
      detail: "Partner discovery & new relationships",
      href: "/partnerships",
      icon: "/general-contact/icon-rel-partners.svg",
    },
    {
      title: "Trust & Responsible Disclosure",
      detail: "Assurance evidence & security reporting",
      href: "/responsible-disclosure",
      icon: "/general-contact/icon-rel-trust.svg",
    },
  ] as RelatedRoute[],
};
