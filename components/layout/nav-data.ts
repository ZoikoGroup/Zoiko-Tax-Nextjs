export type NavLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type Office = {
  title: string;
  lines: string[];
  phone: string;
};

const links = (...labels: string[]): NavLink[] =>
  labels.map((label) => ({
    label,
    href:
      label === "Tax Determination"
        ? "/determination"
        : label === "Exemptions & Certificates"
          ? "/exemptions-certificates"
          : label === "Compliance & Filing"
            ? "/compliance-filing"
            : label === "Regulatory Obligations"
              ? "/regulatory-obligations"
              : label === "E-Invoicing & CTC"
                ? "/e-invoicing-ctc"
                : label === "Reconciliation"
                  ? "/reconciliation"
                  : label === "Intelligence Fabric"
                    ? "/intelligence-fabric"
                    : label === "Evidence & Auditability"
                      ? "/evidence-auditability"
                      : "#",
  }));

export const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: links(
      "Platform Overview",
      "Tax Determination",
      "Exemptions & Certificates",
      "Regulatory Obligations",
      "Compliance & Filing",
      "Remittance Orchestration",
      "E-Invoicing & CTC",
      "Reconciliation",
    ),
  },
  {
    title: "Assurance & Intelligence",
    links: links(
      "Evidence & Replay",
      "Shadow Assurance",
      "Migration & Onboarding",
      "Intelligence Fabric",
      "Dashboard & Analytics",
    ),
  },
  {
    title: "Telecom Solutions",
    links: links(
      "MNOs",
      "MVNOs",
      "MVNEs & MVNAs",
      "Voice, VoIP & SIP",
      "UCaaS & CPaaS",
      "Broadband & Fixed Wireless",
      "IoT & Satellite",
    ),
  },
  {
    title: "Teams",
    links: links(
      "Tax & Regulatory",
      "CFO & Finance",
      "Billing & BSS",
      "Revenue Assurance",
      "Product & Commercial",
      "Technology Leaders",
    ),
  },
  {
    title: "Coverage",
    links: links(
      "Coverage Overview",
      "Country & Regulatory Packs",
      "Status & Releases",
      "United States",
      "European Union",
      "United Kingdom",
    ),
  },
  {
    title: "Developers",
    links: links(
      "Developer Portal",
      "API Reference",
      "SDKs & Libraries",
      "Integration Guides",
      "Sandbox",
      "API Changelog",
    ),
  },
  {
    title: "Integrations",
    links: links(
      "Billing & BSS",
      "ERP & General Ledger",
      "Tax Engines",
      "E-Invoicing Networks",
      "Data & Enterprise",
      "OEM & Partners",
    ),
  },
  {
    title: "Trust & Governance",
    links: links(
      "Trust Center",
      "Security",
      "Privacy & Data Protection",
      "AI Governance",
      "Evidence & Auditability",
      "Certifications",
    ),
  },
  {
    title: "Resources",
    links: links("Insights & Blog", "Regulatory Change", "Guides & Reports", "Glossary", "FAQ"),
  },
  {
    title: "Company",
    links: [
      { label: "About ZoikoTax", href: "/about-us" },
      ...links("Zoiko Group", "Careers", "Newsroom", "Press & Media"),
    ],
  },
  {
    title: "Support & Status",
    links: links("Customer Support", "Documentation", "System Status", "Community Forum"),
  },
  {
    title: "Offices & Connect",
    links: links("Sales Inquiry", "Technical Support", "Partnerships", "General Contact"),
  },
];

export const offices: Office[] = [
  {
    title: "Global Headquarters",
    lines: ["Sacramento, California", "United States"],
    phone: "1-800-484-5574",
  },
  {
    title: "European Headquarters",
    lines: ["London W1W 5PF", "United Kingdom"],
    phone: "+44 20 7164 6399",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#", icon: "/layout/linkedin.svg" },
  { label: "YouTube", href: "#", icon: "/layout/youtube.svg" },
  { label: "X", href: "#", icon: "/layout/x.svg" },
  { label: "GitHub", href: "#", icon: "/layout/github.svg" },
];

export const trustNotes = [
  {
    title: "Coverage Truth",
    body: "ZoikoTax is architected globally but capability is activated through governed country and regulatory packs. Not all services are available everywhere. Current availability is shown in the Coverage portal.",
  },
  {
    title: "Professional Advice",
    body: "ZoikoTax is not a substitute for legal, tax, accounting or regulatory advice. Consult qualified professionals for your specific situation. All determinations are subject to your review and approval.",
  },
  {
    title: "AI Authority",
    body: "AI assists with research, extraction, and explanation. Authoritative fiscal outcomes are determined by governed rules, not autonomous AI. Approval and responsibility remain with you.",
  },
];

export const legalLinks: NavLink[] = links(
  "Privacy Policy",
  "Terms of Service",
  "Security",
  "Accessibility",
  "Cookie Policy",
  "Sitemap",
);
