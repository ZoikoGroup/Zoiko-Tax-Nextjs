export interface ContactHeroData {
  eyebrow: string;
  title: string;
  description1: string;
  description2: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  trustLink: {
    label: string;
    href: string;
  };
  notice: string;
  backgroundImage: string;
}

export interface IntentCardItem {
  id: string;
  iconName: "message" | "support" | "privacy" | "press" | "partners" | "careers" | "security" | "general";
  title: string;
  badge: string;
  description: string;
  subtext: string;
  accountableDomain: string;
  action?: {
    label: string;
    href: string;
    path: string;
  };
  unavailableNotice?: string;
}

export const CONTACT_HERO_DATA: ContactHeroData = {
  eyebrow: "RESOURCES · CONTACT",
  title: "Reach the right\nZoikoTax team.",
  description1:
    "Different needs call for different channels. Start with your reason, then follow the approved route for that purpose.",
  description2:
    "Explore the available evaluation and information routes below. Where a contact channel is not published, we say so—without asking you to share data.",
  primaryCta: {
    label: "Choose a contact reason ↓",
    href: "#intent-directory",
  },
  secondaryCta: {
    label: "Book a Demo",
    href: "/demo",
  },
  trustLink: {
    label: "Trust Center ↗",
    href: "/trust-center",
  },
  notice:
    "Privacy, security and customer support have distinct responsibilities. They do not belong in a sales or general inbox.",
  backgroundImage: "/Contact/rdd1.jpg",
};

export const INTENT_SECTION_DATA = {
  eyebrow: "INTENT FIRST",
  title: "What brings you here?",
  description:
    "Choose the purpose before sharing any data. Available links lead to established destinations; information-only routes are not submission channels.",
  legend: [
    { label: "Available: established destination", tone: "available" as const },
    { label: "Information-only = request/submission", tone: "info" as const },
    { label: "Source-required = no public intake form", tone: "source" as const },
  ],
  disclaimer:
    "No email address, phone number, office address, hours or response commitment has been supplied for this page. Unpublished channels are shown as information—not as disabled versions of a universal inbox.",
  cards: [
    {
      id: "sales-evaluation",
      iconName: "message",
      title: "Sales / evaluation",
      badge: "Available · evaluation route",
      description:
        "For prospective evaluation of ZoikoTax against your telecom fiscal requirements. Book a Demo is the established destination.",
      subtext:
        "Share only the qualification requested by its approved process. No trial, pricing, coverage or response guarantee is implied.",
      accountableDomain: "Sales / evaluation",
      action: {
        label: "Book a Demo",
        href: "/demo",
        path: "/demo",
      },
    },
    {
      id: "customer-support",
      iconName: "support",
      title: "Customer support",
      badge: "Source-required · channel not published",
      description:
        "For existing customer help, use the approved customer support process. A dedicated public help channel has not been supplied for this page.",
      subtext:
        "Do not send credentials, payment secrets or confidential account data. Sales and general contact are not support fallbacks.",
      accountableDomain: "Customer support",
      action: {
        label: "Developer documentation—not support",
        href: "/developer-overview",
        path: "/developers",
      },
    },
    {
      id: "privacy-data-rights",
      iconName: "privacy",
      title: "Privacy / data rights",
      badge: "Available · information-only",
      description:
        "Read the approved privacy information to understand the source-governed process. An actual rights-submission channel requires approval.",
      subtext:
        "Privacy requests must not go through sales or general contact. Information is not a completed request or verification process.",
      accountableDomain: "Privacy / Legal",
      action: {
        label: "Read privacy information",
        href: "/privacy-data-protection",
        path: "/trust/privacy",
      },
    },
    {
      id: "press-media",
      iconName: "press",
      title: "Press / media",
      badge: "Source-required · channel not published",
      description:
        "For media inquiries, an approved public Newsroom or media contact is required. No press destination has been supplied.",
      subtext:
        "No interview request, brand asset download or executive response is offered here. Support and sales are incorrect purposes.",
      accountableDomain: "Communications / media",
      unavailableNotice: "No approved public destination - no intake available",
    },
    {
      id: "partners",
      iconName: "partners",
      title: "Partners",
      badge: "Source-required · program not published",
      description:
        "A public ecosystem program and its approved contact channel are needed before partnership intake can be offered.",
      subtext:
        "No application, partner form or commercial terms are requested. An unpublished general route is not a fallback.",
      accountableDomain: "Partnerships / ecosystem",
      unavailableNotice: "No approved public destination - no intake available",
    },
    {
      id: "careers",
      iconName: "careers",
      title: "Careers",
      badge: "Available · current search",
      description:
        "Use the Careers page as the source for current roles and any approved application or inquiry instructions. This does not imply open positions.",
      subtext:
        "Follow only the recruiter, ATS or accommodation guidance published there. No CV upload or talent-pool collection is offered here.",
      accountableDomain: "People / recruiting",
      action: {
        label: "Visit Careers",
        href: "/about-us",
        path: "/company/careers",
      },
    },
    {
      id: "security-vulnerability",
      iconName: "security",
      title: "Security vulnerability",
      badge: "Available · policy and guidance only",
      description:
        "Consult the Responsible Disclosure guidance for security vulnerability reporting. Use only the dedicated process it actually specifies.",
      subtext:
        "Do not enter exploit details, secrets or credentials on this page. No bounty, safe-harbor, emergency response or confirmation is promised.",
      accountableDomain: "Security",
      action: {
        label: "Responsible disclosure guidance",
        href: "/responsible-disclosure",
        path: "/trust/responsible-disclosure/",
      },
    },
    {
      id: "general",
      iconName: "general",
      title: "General",
      badge: "Source-required · channel not published",
      description:
        "For non-specialized questions only after checking the appropriate routes. An approved general endpoint and field schema have not been supplied.",
      subtext:
        "No submission or submission is available here. General contact must never catch privacy, security or customer support requests.",
      accountableDomain: "General contact routing",
      unavailableNotice: "No approved public destination - no intake available",
    },
  ] as IntentCardItem[],
};

export const DEDICATED_DESTINATIONS_DATA = {
  eyebrow: "DEDICATED DESTINATIONS",
  title: "Sensitive needs. Separate routes.",
  description:
    "Privacy and security information can help you find the right process. Neither route is replaced by a sales or general form.",
  backgroundImage: "/Contact/rdd2.jpg",
  cards: [
    {
      id: "privacy",
      title: "Privacy is a dedicated process.",
      badge: "Information / guidance · not submission",
      text1:
        "Request types, applicable deadlines and legal bases must come from the approved privacy source. Verification should use only the approved minimum—not identity uploads, social data or unnecessary free text.",
      text2:
        "Reading the privacy information does not submit a rights request. The actual request channel is not supplied here.",
      linkText: "Privacy Information",
      href: "/privacy-data-protection",
      path: "/trust/privacy",
    },
    {
      id: "security",
      title: "Security stays in its own flow.",
      badge: "Information / guidance · not submission",
      text1:
        "Responsible Disclosure is the established policy and reporting guidance destination. Vulnerability details belong only in the dedicated process it specifies, never in a general contact field.",
      text2:
        "Any receipt or confirmation must come from that actual process. This page does not provide a reporting mailbox or submission assurance.",
      linkText: "Responsible Disclosure",
      href: "/responsible-disclosure",
      path: "/trust/responsible-disclosure/",
    },
  ],
};

export const DATA_RESTRAINT_DATA = {
  eyebrow: "DATA RESTRAINT",
  title: "Only the data the right process needs.",
  description:
    "A route comes first. Collection comes only after its purpose, fields, privacy wording and destination have been approved.",
  sensitiveNotice: {
    title: "Keep sensitive information out of contact fields.",
    text: "Do not send passwords, credentials, payment secrets, confidential account information or unnecessary sensitive personal, tax or implementation data. Vulnerability details belong in the dedicated security flow. No uploads are offered without explicit approval; friction profiling must not be inferred.",
  },
  formAnatomy: {
    badge: "ILLUSTRATIVE · NOT ACTIVE",
    title: "Form anatomy — illustrative, not an active contact channel",
    description:
      "Field schema, endpoint and consent wording are unapproved. These are structural examples, not a request to enter personal data. No form on this page collects or sends a request.",
    callout: {
      title: "Minimum means purpose-specific.",
      paragraphs: [
        "For evaluation, name, business email, company, role, country, topic and message are all conditional—not an approved field list.",
        "Country may be used for routing only if approved. It is not evidence of coverage. Optional free text should remain limited and safe.",
        "A general channel, if approved later, should use only minimum contact and reason data. No internal queues, inferred profiles or unapproved uploads.",
      ],
      bottomNotice:
        "Required fields, retention and privacy notice must be resolved from the approved source before collection.",
    },
  },
  stateAnatomy: {
    title: "State anatomy, not a submitted request",
    description:
      "Same-page specimens describe a future approved channel. No current status, delivery, duplicate handling or operational integration is claimed.",
    validationSpecimen: {
      title: "Validation error · illustrative specimen",
      fieldCheck: "Check business_email_4",
      summary: "Summary points to the previous field label and to inline message.",
      label: "Business email · validation example",
      value: "invalid email example",
      error: "Enter an email address in a valid format.",
      note: "Update focus specimen · error identification, not color alone.",
    },
    states: [
      {
        id: "submitting",
        title: "Submitting",
        status: 'Illustrative status: "Submitting your approved request..."',
        description:
          "Prevent repeat activation and retain safe-entered data. This is not a current submission.",
      },
      {
        id: "success",
        title: "Success",
        status:
          'Illustrative status: "[Request type] submitted through its approved process."',
        description:
          "Show only the actual next approved step. No receipt is issued here; no response time is promised.",
      },
      {
        id: "network-failure",
        title: "Provider / network failure",
        status:
          'Illustrative status: "The request could not be sent. Your safe entries are preserved."',
        description:
          "Retry only through the approved process. No alternate contact or fallback endpoint has been supplied.",
      },
      {
        id: "destination-unavailable",
        title: "Destination unavailable",
        status: 'Illustrative status: "This destination is unavailable."',
        description:
          "Offer an alternate only if approved for the same purpose. Existing information does not fulfill the request.",
      },
      {
        id: "spam-check",
        title: "Spam / abuse check",
        status: 'Illustrative status: "We could not complete this request."',
        description:
          "Use neutral, safe guidance without disclosing detection rules or making a delivery assurance.",
      },
      {
        id: "duplicate-request",
        title: "Duplicate request",
        status:
          'Illustrative status: "This action may repeat a request. Check the dedicated process before trying again."',
        description:
          "Do not claim a second submission or reveal internal matching logic.",
      },
    ],
    bottomNotice: {
      title: "Before any illustrative form becomes a channel",
      text: "Route-owner, Legal / Privacy, schema, source, integration and accessibility review are required—not claimed/provided. Any future measurement should use conceptual intent IDs and error categories, never raw-form values or user profiling. This mockup makes no implementation claim.",
    },
  },
};

export const UNAVAILABLE_ROUTE_DATA = {
  eyebrow: "WHEN A ROUTE IS UNAVAILABLE",
  title: "Keep the purpose. Don't change the channel.",
  description:
    "A site or route failure is not the same as urgent customer support or a security incident. Availability does not change who should handle a request.",
  cards: [
    {
      title: "A page cannot be reached",
      text: "Use existing information only where relevant to your purpose. A documentation page is not an alternate submission route, and no approved fallback endpoint is supplied.",
    },
    {
      title: "A matter feels urgent",
      text: "Follow your approved customer support or dedicated security process. This page does not establish emergency contacts, severity levels, escalation paths, hours or response guarantees.",
    },
    {
      title: "A channel is not published",
      text: "Do not redirect privacy, security or support to sales or general contact. A same-purpose alternate requires approval; missing channels remain explicitly unavailable.",
    },
  ],
  link: {
    label: "Trust Center - existing information, not live support",
    href: "/trust-center",
    path: "/trust",
  },
};

export const DIRECT_ANSWERS_DATA = {
  eyebrow: "DIRECT ANSWERS",
  title: "The right route, in plain language.",
  description:
    "A destination's scope matters. Guidance is useful—but it is not the same as submitting a request.",
  items: [
    {
      question: "How do I contact sales?",
      answer:
        "Use Book a Demo for prospective evaluation. Follow only the qualification in that approved process; it is not a support or privacy channel.",
      link: {
        label: "Book a Demo",
        href: "/demo",
        path: "/demo/",
      },
    },
    {
      question: "Where can I get customer help?",
      answer:
        "Use the approved dedicated customer support process. A public help destination has not been supplied here. Developer documentation is not live support, and sales is not a fallback.",
    },
    {
      question: "How do I make a privacy or data-rights request?",
      answer:
        "Start with the approved privacy information. It describes the source-governed controls; an actual rights-submission route requires approval. Reading this page does not fulfill a request.",
      link: {
        label: "Privacy Information",
        href: "/privacy-data-protection",
        path: "/trust/privacy/",
      },
    },
    {
      question: "How can press or media get in touch?",
      answer:
        "An approved Newsroom or media channel is needed. None has been supplied for this page, so no media contact, interview intake or press-assets destination is offered.",
    },
    {
      question: "Can I inquire about a partnership?",
      answer:
        "A published, approved ecosystem program and channel are needed first. Neither has been supplied; this page does not offer a partnership application or general-contact substitute.",
    },
    {
      question: "Where do I find careers information?",
      answer:
        "Use Careers as the current roles source and follow the instructions actually published there. This link does not claim that roles are open or connect directly to a recruiter.",
      link: {
        label: "Careers",
        href: "/about-us",
        path: "/company/careers/",
      },
    },
    {
      question: "Where should I report a security vulnerability?",
      answer:
        "Consult Responsible Disclosure for policy and reporting guidance. Use only the dedicated process it specifies. Never put vulnerability details, secrets or credentials in general contact fields.",
      link: {
        label: "Responsible Disclosure",
        href: "/responsible-disclosure",
        path: "/trust/responsible-disclosure/",
      },
    },
    {
      question: "What if my question is general?",
      answer:
        "Check the specialized routes first. No approved general endpoint has been supplied, so no general request can be submitted here. Privacy, security and support must remain separate.",
    },
  ],
};

export const EXPLORE_NEXT_DATA = {
  eyebrow: "EXPLORE NEXT",
  title: "Useful information. Clear boundaries.",
  description:
    "Contact ZoikoTax through the right route for sales, support, privacy, press, partnerships, careers, security reporting or general inquiries.",
  cards: [
    {
      id: "trust-center",
      title: "Trust Center",
      path: "/trust/",
      href: "/trust-center",
      description: "Privacy, security and trust information.",
    },
    {
      id: "faq",
      title: "FAQ",
      path: "/resources/faq/",
      href: "/resources-faq",
      description: "Answers about ZoikoTax and its scope.",
    },
    {
      id: "developers",
      title: "Developers",
      path: "/developers/",
      href: "/developer-overview",
      description: "Technical documentation—not customer support.",
    },
    {
      id: "coverage",
      title: "Coverage",
      path: "/coverage/",
      href: "/coverage-overview",
      description: "Capability-specific readiness, not a guarantee.",
    },
  ],
};

export const FINAL_CTA_DATA = {
  title: "Evaluating ZoikoTax for your telecom architecture?",
  description:
    "Book a Demo is the prospective evaluation route—not a substitute for customer support, privacy requests or security reporting.",
  cta: {
    label: "Book a Demo",
    href: "/demo",
    path: "/demo/",
  },
  backgroundImage: "/Contact/rdd3.jpg",
};

