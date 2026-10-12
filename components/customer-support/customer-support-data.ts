export const HERO_DATA = {
  eyebrow: "SUPPORT & STATUS · CUSTOMER SUPPORT",
  title: "Get to the right ZoikoTax help.",
  description:
    "Find approved product guidance, check current service status, and move to the appropriate support path when self-service information is not enough.",
  actions: [
    { label: "Find support", variant: "primary" as const },
    { label: "Browse Documentation", variant: "outline" as const },
    { label: "Check System Status", variant: "text" as const },
  ],
  footnote: "Support channels, availability and response commitments are governed by approved customer/support arrangements and are not implied by this public page.",
};

export const WHAT_IS_DATA = {
  title: "What is ZoikoTax Customer Support?",
  description:
    "ZoikoTax Customer Support helps users find the correct source of help for product questions, technical issues, service-status questions and approved support escalation. Documentation remains the authority for published product/reference guidance, System Status remains the authority for current service-health information, and specialist routes such as security reporting or technical support retain their own ownership.",
  is: {
    label: "Customer Support is",
    items: [
      "A public support entry point",
      "A router to canonical sources",
      "A safe self-service and escalation path",
      "A boundary-aware support experience",
      "A place to explain available support paths",
      "Compatible with authenticated support systems",
    ],
  },
  isNot: {
    label: "Customer Support is not",
    items: [
      "A promise of a specific support tier, SLA or 24/7 channel",
      "A replacement for Documentation or System Status",
      "A place to submit passwords, tokens or uncontrolled production data",
      "Tax/legal advice or a guarantee of product behavior",
      "Proof that every visitor is entitled to every support route",
      "A public replica of internal case-management tooling",
    ],
  },
};

export const SUPPORT_NEEDS_DATA = {
  title: "Select your support need",
  description: "We will route you to the correct canonical source or escalation path.",
  cards: [
    { title: "Product guidance", description: "Find how ZoikoTax features and workflows are documented.", badge: "Documentation", badgeStyle: "purple" as const },
    { title: "Technical integration", description: "Find developer/integration guidance or the approved technical-support path.", badge: "Developers", badgeStyle: "purple" as const },
    { title: "Service availability", description: "Check whether a current service issue is published.", badge: "System Status", badgeStyle: "blue" as const },
    { title: "Account / access", description: "Get help reaching the approved account/access support route.", badge: "Account Support", badgeStyle: "gray" as const },
    { title: "Security / vulnerability", description: "Report a security issue through the protected disclosure route.", badge: "Responsible Disclosure", badgeStyle: "orange" as const },
    { title: "Other customer issue", description: "Use the approved customer support contact path.", badge: "Contact Support", badgeStyle: "green" as const },
  ],
};

export const SEARCH_DATA = {
  title: "Search approved ZoikoTax help",
  placeholder: "Search ZoikoTax help",
  action: "Search",
  footnote: "Indexes official Documentation, Status, and Support guidance only.",
};

export const START_HERE_DATA = {
  cards: [
    {
      title: "Checking a service issue? Start with System Status.",
      description: "System Status is the sole authority for current service health and availability publication. Check here before opening a ticket.",
      action: "Check System Status",
      iconBg: "#DBEAFE",
      iconColor: "#1D4ED8",
      border: "#E5E7EB",
    },
    {
      title: "Looking for product or technical guidance? Browse Documentation.",
      description: "Documentation remains the canonical source for published reference content, feature workflows, and platform capabilities.",
      action: "Browse Documentation",
      iconBg: "#E9D5FF",
      iconColor: "#6B21A8",
      border: "#F3E8FF",
    },
  ],
};

export const FORM_DATA = {
  title: "Still need help? Use the approved support route for your issue.",
  description: "Submit a request through the authenticated portal. Ensure you have reviewed documentation and status first.",
  warning: {
    title: "Do not send passwords, access tokens or other secrets.",
    before: "If your issue involves a potential security vulnerability, please immediately use the ",
    link: "Responsible Disclosure",
    after: " route instead of this form.",
  },
  fields: {
    topic: { label: "Support Topic *", placeholder: "Select intent registry value..." },
    product: { label: "Product / Capability", placeholder: "Select affected product..." },
    email: { label: "Work Email *" },
    account: { label: "Account / Workspace ID", placeholder: "e.g. ztx_12345" },
    summary: { label: "Issue Summary *", placeholder: "Brief description of the problem" },
    details: { label: "Detailed Description *", placeholder: "Provide steps to reproduce. Remember: no secrets, PII, or confidential production logs." },
  },
  submit: "Submit Request",
};

export const FAQ_DATA = {
  title: "Customer Support questions",
  items: [
    {
      question: "How do I check current service health?",
      answer: "System Status owns public service-health truth. Please visit the canonical System Status page for live updates on incidents, degradations, and maintenance windows. Customer Support will not publish independent status updates.",
    },
    {
      question: "Can support provide tax or legal advice?",
      answer: "No. Customer Support provides software functionality and workflow guidance. We do not certify legal correctness, provide tax guidance, or expand product coverage capabilities.",
    },
    {
      question: "Where do I report a security vulnerability?",
      answer: "Do not use standard support forms for security reports. All vulnerabilities and exploit details must be submitted through the official Responsible Disclosure process to protect sensitive information.",
    },
  ],
};

export const CLOSING_DATA = {
  title: "Choose the next support path with confidence.",
  description: "Ensure you are navigating to the authoritative source for your request. If your destination is unavailable, fallback routes are provided.",
  action: "Return to Intent Router",
};
