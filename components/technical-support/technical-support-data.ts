export interface ResourceCard {
  title: string;
  description: string;
  actionText: string;
  href: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const HERO_DATA = {
  eyebrow: "OFFICES & CONNECT · TECHNICAL SUPPORT",
  title: "Technical Support",
  description:
    "Diagnose ZoikoTax implementation and integration issues using approved technical resources, then use the support path available to your organization when additional help is needed.",
  primaryAction: {
    label: "Check technical resources",
    href: "#resources",
  },
  secondaryAction: {
    label: "Get technical help",
    href: "#get-help",
  },
  disclaimer:
    "Technical Support does not replace canonical API/product documentation, current service status, Coverage, Responsible Disclosure or contractual support terms.",
  footnote:
    "Note: Available support paths, authentication and response commitments are shown only where they are approved for your scope.",
};

export const RESOURCES_DATA = {
  heading: "Check these resources first[cite:",
  description:
    "Resolve issues faster by consulting our authoritative documentation and live status sources before creating a technical case.",
  cards: [
    {
      title: "Developers",
      description: "Integration architecture, API/SDK/events/bulk/sandbox/change paths.",
      actionText: "Open Developers →",
      href: "/developer-overview",
    },
    {
      title: "Documentation",
      description: "How-to, workflow and product guidance.",
      actionText: "Open Documentation →",
      href: "/integration-guides",
    },
    {
      title: "System Status",
      description: "Current broad incident or maintenance state.",
      actionText: "Check System Status →",
      href: "/status-and-releases",
    },
    {
      title: "Coverage",
      description: "Market/capability availability and release state.",
      actionText: "View Coverage →",
      href: "/coverage-overview",
    },
    {
      title: "Customer Support",
      description: "General help, account issues or unclear support intent.",
      actionText: "Open Customer Support →",
      href: "/contact",
    },
    {
      title: "Responsible Disclosure",
      description: "Potential vulnerability or security-reporting issue.",
      actionText: "Report Vulnerability →",
      href: "/responsible-disclosure",
    },
  ] as ResourceCard[],
};

export const HELP_FORM_DATA = {
  heading: "Get technical help",
  description:
    "Provide reproducible context to route your issue to the correct governed support path.",
  sensitiveDataAlert: {
    title: "PROTECT SENSITIVE DATA",
    description:
      "Do not include passwords, API keys, access tokens, private keys or other credentials. Avoid unnecessary taxpayer, customer, financial or personal data.[cite: 11] ",
  },
  fields: {
    issueType: {
      label: "What do you need technical help with? *[cite: 11]",
      placeholder: "Select an issue type...",
      options: [
        "API Integration & Endpoint Errors",
        "SDK Configuration & Runtime Exception",
        "Webhooks & Real-time Event Delivery",
        "Bulk / Batch Processing & Ingestion Failure",
        "Sandbox Environment Access & Mock Data",
        "Authentication, Tokens & Key Exchange",
        "Tax Determination & Calculation Discrepancy",
        "E-Invoicing & CTC Network Transmission",
      ],
    },
    environment: {
      label: "Environment",
      placeholder: "Select environment...",
      options: [
        "Production (Live Telecom / BSS)",
        "Staging / Pre-Production",
        "Sandbox / Developer Testbed",
        "Local Emulation / CI Pipeline",
      ],
    },
    service: {
      label: "Capability / Service",
      placeholder: "Select related service...",
      options: [
        "Determination Engine (Real-Time Rates)",
        "E-Invoicing CTC & Reporting Engine",
        "Billing & BSS Interlock (Amdocs / Netcracker)",
        "Shadow Assurance & Variance Replay",
        "Reconciliation & General Ledger Feed",
        "Exemption Certificates & Lifecycle",
        "Regulatory Updates & Pack Sync",
      ],
    },
    issueSummary: {
      label: "Issue Summary *",
      placeholder: "Brief statement of the technical issue",
    },
    reproduceSteps: {
      label: "Steps to Reproduce & Observed Result *",
      placeholder:
        "Provide reproducible context. Do not paste full unredacted logs or private payloads.",
    },
  },
  footerNote:
    "Requires authentication. You will be prompted to sign in to your authorized organizational context before submission. ",
  submitButtonText: "Continue to Authenticate",
};

export const FAQ_DATA = {
  heading: "Frequently Asked Questions",
  items: [
    {
      id: "faq-1",
      question: "What is ZoikoTax Technical Support?",
      answer:
        "A technical triage and support-routing destination for approved product, implementation and integration issues. It does not replace Documentation, Developers, System Status or Coverage.[cite: 11]",
      defaultOpen: true,
    },
    {
      id: "faq-2",
      question: "Where can I find API or integration documentation?",
      answer:
        "Use the ZoikoTax Developers area and canonical technical documentation. Technical Support should not redefine API contracts.[cite: 11]",
      defaultOpen: false,
    },
    {
      id: "faq-3",
      question: "How do I report an outage?",
      answer:
        "Check System Status for current broad service health. If your issue is not reflected there and you have an approved support path, use Technical Support or Customer Support as appropriate.[cite: 11]",
      defaultOpen: false,
    },
    {
      id: "faq-4",
      question: "Can I send API keys or logs?",
      answer:
        "Do not send passwords, API keys, access tokens or private keys. Logs/attachments should be shared only through an approved secure support workflow and should be redacted.[cite: 11]",
      defaultOpen: false,
    },
    {
      id: "faq-5",
      question: "Where do I report a vulnerability?",
      answer:
        "Use Responsible Disclosure, not a generic technical support form.[cite: 11]",
      defaultOpen: false,
    },
  ] as FAQItem[],
};
