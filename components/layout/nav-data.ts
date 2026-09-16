export type NavLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const primaryNav: NavLink[] = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Coverage", href: "#coverage" },
  { label: "Developers", href: "#developers" },
  { label: "Trust", href: "#trust" },
  { label: "Resources", href: "#resources" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Platform Overview", href: "#" },
      { label: "Tax Determination", href: "#" },
      { label: "Exemptions & Certificates", href: "#" },
      { label: "Regulatory Obligations", href: "#" },
      { label: "Compliance & Filing", href: "#" },
      { label: "Real-time Orchestration", href: "#" },
      { label: "E-Invoicing & CTC", href: "#" },
      { label: "Reconciliation", href: "#" },
    ],
  },
  {
    title: "Assurance & Intelligence",
    links: [
      { label: "Insight & Reply", href: "#" },
      { label: "Deviation Auditor", href: "#" },
      { label: "Migration & Onboarding", href: "#" },
      { label: "Intelligence Fabric", href: "#" },
      { label: "Dashboard & Analytics", href: "#" },
    ],
  },
  {
    title: "Telecom Solutions",
    links: [
      { label: "MVNOs", href: "#" },
      { label: "MVNEs", href: "#" },
      { label: "MVNEs & VNOs", href: "#" },
      { label: "Voice, VoIP & VNOs", href: "#" },
      { label: "UCaaS & CPaaS", href: "#" },
      { label: "IoT & Satellite", href: "#" },
    ],
  },
  {
    title: "Teams",
    links: [
      { label: "Tax & Regulatory", href: "#" },
      { label: "CFO & Finance", href: "#" },
      { label: "Product & Commercial", href: "#" },
      { label: "Technology Leaders", href: "#" },
    ],
  },
  {
    title: "Coverage",
    links: [
      { label: "Coverage Overview", href: "#" },
      { label: "Country & Regulatory Packs", href: "#" },
      { label: "United States", href: "#" },
      { label: "European Union", href: "#" },
      { label: "United Kingdom", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Developer Portal", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "SDKs & Libraries", href: "#" },
      { label: "Integration Guides", href: "#" },
      { label: "Sandbox", href: "#" },
      { label: "API Changelog", href: "#" },
    ],
  },
  {
    title: "Integrations",
    links: [
      { label: "Billing & BSS", href: "#" },
      { label: "ERP & General Ledger", href: "#" },
      { label: "Tax Engines", href: "#" },
      { label: "E-Invoicing & Telecoms", href: "#" },
      { label: "Data & Enterprise", href: "#" },
      { label: "OSS & Network", href: "#" },
    ],
  },
  {
    title: "Trust & Governance",
    links: [
      { label: "Trust Center", href: "#" },
      { label: "Security", href: "#" },
      { label: "Privacy & Data Protection", href: "#" },
      { label: "Bug Bounty & Reports", href: "#" },
      { label: "AI Governance", href: "#" },
      { label: "Certifications", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights & Blog", href: "#" },
      { label: "Regulatory Change", href: "#" },
      { label: "Events & Reports", href: "#" },
      { label: "Glossary", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About ZoikoTax", href: "/about-us" },
      { label: "Zoiko Group", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Press & Media", href: "#" },
    ],
  },
  {
    title: "Support & Status",
    links: [
      { label: "Customer Support", href: "#" },
      { label: "System Status", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Community Forum", href: "#" },
    ],
  },
  {
    title: "Offices & Connect",
    links: [
      { label: "Sales Inquiry", href: "#" },
      { label: "General Support", href: "#" },
      { label: "Technical Support", href: "#" },
      { label: "Partnerships", href: "#" },
      { label: "General Contact", href: "#" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Security", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Sitemap", href: "#" },
];
