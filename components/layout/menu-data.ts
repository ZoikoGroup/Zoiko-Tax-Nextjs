import {
  Accessibility,
  Activity,
  Bell,
  Book,
  BookOpen,
  Briefcase,
  Bug,
  Building,
  Calculator,
  Calendar,
  Camera,
  ChartColumn,
  ChartNoAxesColumnIncreasing,
  CircleCheck,
  CircleHelp,
  ClipboardCheck,
  Clock,
  Code,
  Cog,
  Compass,
  Container,
  Cpu,
  CreditCard,
  Crown,
  Database,
  DollarSign,
  Eye,
  FileCheck,
  FileText,
  Flag,
  GitBranch,
  Globe,
  Info,
  Layers,
  Link as LinkIcon,
  List,
  Mail,
  MapPin,
  MessageSquare,
  PenLine,
  Phone,
  PhoneCall,
  Radio,
  ReceiptText,
  Search,
  Settings,
  Share2,
  Shield,
  ShieldCheck,
  TriangleAlert,
  UserCheck,
  UserCog,
  Users,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export type MenuItem = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type MenuSection = {
  title: string;
  icon: LucideIcon;
  items: MenuItem[];
};

export type MenuFeature = {
  eyebrow?: string;
  title: string;
  description?: string;
  cta: string;
  href: string;
  image: string;
};

export type MegaMenu = {
  label: string;
  sections: MenuSection[];
  feature: MenuFeature;
};

const item = (label: string, description: string, icon: LucideIcon, href = "#"): MenuItem => ({
  label,
  description,
  icon,
  href,
});

export const megaMenus: MegaMenu[] = [
  {
    label: "Platform",
    sections: [
      {
        title: "Core Capabilities",
        icon: Database,
        items: [
          item("Platform Overview", "How the full platform works", Compass),
          item("Tax Determination", "Supported telecom taxes, fees and levies", Calculator, "/determination"),
          item("Exemptions & Certificates", "Evidence and applicability controls", FileCheck, "/exemptions-certificates"),
          item("Regulatory Obligations", "Registrations, duties and obligations", ShieldCheck, "/regulatory-obligations"),
          item(
            "Compliance & Filing",
            "Prepare, review and track filings",
            ClipboardCheck,
            "/compliance-filing"
          ),
        ],
      },
      {
        title: "Control & Operations",
        icon: Settings,
        items: [
          item("Remittance Orchestration", "Governed remittance instructions", CreditCard),
          item("E-Invoicing & CTC", "Fiscal invoice lifecycle integration", ReceiptText, "/e-invoicing-ctc"),
          item("Reconciliation", "Connect tax, invoice and accounting outcomes", Activity, "/reconciliation"),
          item("Evidence & Replay", "Trace historical authoritative outcomes", Clock),
          item("Shadow Assurance", "Compare governed outcomes safely", Eye),
        ],
      },
      {
        title: "Continuity & Intelligence",
        icon: Activity,
        items: [
          item("Migration & Onboarding", "Profile, map, reconcile and cut over", GitBranch),
          item(
            "ZoikoTax Intelligence Fabric™",
            "Governed AI for monitoring and assistance",
            Cpu,
            "/intelligence-fabric"
          ),
        ],
      },
    ],
    feature: {
      title: "Explore Platform",
      description:
        "One telecom fiscal control plane. Keep buyer-facing capabilities visible without exposing internal architecture.",
      cta: "EXPLORE",
      href: "#platform",
      image: "/menu/platform.webp",
    },
  },
  {
    label: "Solutions",
    sections: [
      {
        title: "Operator Models",
        icon: Building,
        items: [
          item("Mobile Network Operators", "Large-scale portfolios and multi-jurisdiction operations.", Wifi),
          item("MVNOs", "Clear separation of commercial models and tax treatment", Share2),
          item("MVNEs & MVNAs", "Multi-tenant enablement platforms with attribution", Layers),
          item("Wholesale Carriers", "Support for complex wholesale relationships", Globe),
        ],
      },
      {
        title: "Service Types",
        icon: Phone,
        items: [
          item("Voice, VoIP & SIP", "Traditional and IP-based voice communications", PhoneCall),
          item("UCaaS, CCaaS & CPaaS", "Unified and bundled communications services", MessageSquare),
          item("Broadband & Fixed Wireless", "Recurring billing and connectivity services", Radio),
          item("IoT, M2M & Satellite", "Emerging services and connectivity models", Cpu),
        ],
      },
      {
        title: "By Buyer Role",
        icon: Users,
        items: [
          item("Tax & Regulatory", "Determine what applies and manage obligations", Shield),
          item("CFO & Finance", "Control liability, recovery and accrual", DollarSign),
          item("Billing & BSS Engineering", "Integrate fiscal decisions into transaction flows", Cog),
          item("Revenue Assurance", "Identify discrepancies and reconciliation gaps", ChartColumn),
        ],
      },
    ],
    feature: {
      title: "Find the right solution for your role",
      cta: "Explore All Solutions",
      href: "#solutions",
      image: "/menu/solutions.webp",
    },
  },
  {
    label: "Coverage",
    sections: [
      {
        title: "Explore Coverage",
        icon: MapPin,
        items: [
          item("Coverage Overview", "Current public capability availability by market", Globe),
          item("Country & Regulatory Packs", "Governed jurisdiction packs and activation", Flag),
          item("Status & Releases", "Current status from authoritative coverage data", Activity),
        ],
      },
      {
        title: "Capabilities",
        icon: Settings,
        items: [
          item("Tax Determination", "Availability by exact capability", Calculator, "/determination"),
          item("Regulatory Obligations", "Availability by exact capability", ShieldCheck, "/regulatory-obligations"),
          item(
            "Compliance & Filing",
            "Availability by exact capability",
            ClipboardCheck,
            "/compliance-filing"
          ),
          item("Remittance", "Supported orchestration, not fund custody", CreditCard),
          item("E-Invoicing & CTC", "Country and network adapter capability", ReceiptText, "/e-invoicing-ctc"),
          item("Managed Compliance", "Requires production and operational readiness", UserCheck),
        ],
      },
      {
        title: "Coverage Doctrine",
        icon: BookOpen,
        items: [
          item("Production", "Approved capability for stated scope", CircleCheck),
          item("Managed", "Production plus approved managed service", UserCog),
          item("Pilot", "Controlled, limited deployment", Clock),
          item("Validation", "Under formal validation", ClipboardCheck),
          item("Research", "Research stage, not marketed as production", Search),
        ],
      },
    ],
    feature: {
      title: "View Coverage",
      description:
        "Global architecture does not equal universal live support. Coverage stays capability-specific.",
      cta: "EXPLORE",
      href: "#coverage",
      image: "/menu/coverage.webp",
    },
  },
  {
    label: "Developers",
    sections: [
      {
        title: "Start Building",
        icon: Code,
        items: [
          item("Developer Overview", "Architecture, environments and getting started", Compass),
          item("API Reference", "Versioned endpoints, schemas and errors", ReceiptText),
          item("SDKs", "Supported client libraries and versions", Code),
          item("Webhooks & Events", "Event contracts and delivery semantics", Activity),
        ],
      },
      {
        title: "Integration Paths",
        icon: GitBranch,
        items: [
          item("Billing & BSS", "Quote, invoice and transaction integration", CreditCard),
          item("ERP & General Ledger", "Controlled journals and reconciliation", BookOpen),
          item("Existing Tax Engines", "Federated, shadow and migration adapters", Calculator),
          item("E-Invoicing Networks", "Authority and network adapter patterns", Share2),
        ],
      },
      {
        title: "Enterprise Systems",
        icon: Container,
        items: [
          item("Data & Enterprise Systems", "CPQ, CRM and product catalogue patterns", Database),
          item("OEM / Embedded", "Partner provisioning and embedded capability", Cpu),
          item("Bulk & Batch", "High-volume asynchronous processing", List),
          item("Integration Guides", "Implementation patterns and architecture guidance", Book),
        ],
      },
    ],
    feature: {
      title: "Explore Developers",
      description:
        "Discover top developer tools, resources, and communities to level up your skills.",
      cta: "EXPLORE",
      href: "#developers",
      image: "/menu/developers.webp",
    },
  },
  {
    label: "Trust",
    sections: [
      {
        title: "Security & Privacy",
        icon: Shield,
        items: [
          item("Security", "Threat model, controls and incident response", Shield),
          item("Privacy & Data Protection", "GDPR, CCPA and global compliance", Cog),
          item("Data Processing & Residency", "Regional data requirements and control", Globe),
          item("Business Continuity", "Availability, disaster recovery and SLAs", ChartColumn),
        ],
      },
      {
        title: "Governance & Assurance",
        icon: ShieldCheck,
        items: [
          item("AI Governance", "Bounded intelligence with human authority", Shield),
          item(
            "Evidence & Auditability",
            "Decision lineage and historical replay",
            ClipboardCheck,
            "/evidence-auditability"
          ),
          item("Accessibility", "WCAG 2.2 AA compliance and inclusive design", Accessibility),
          item("Responsible Disclosure", "Security vulnerability reporting program", Bug),
        ],
      },
      {
        title: "Compliance & Certifications",
        icon: Crown,
        items: [
          item("Certifications", "SOC 2, ISO 27001 and others", Crown),
          item("Regulatory Compliance", "Meeting requirements in each market", ReceiptText),
          item("Audit Reports", "Third-party assurance documentation", ReceiptText),
          item("Industry Standards", "Alignment with telecom and tax standards", ChartNoAxesColumnIncreasing),
        ],
      },
    ],
    feature: {
      title: "Control Before Claims",
      description:
        "Built for consequential fiscal work with deterministic outcomes. Evidence before claims.",
      cta: "Visit Trust Center",
      href: "#trust",
      image: "/menu/trust.webp",
    },
  },
  {
    label: "Resources",
    sections: [
      {
        title: "Learn & Research",
        icon: BookOpen,
        items: [
          item("Telecom Tax Insights", "Deep dives into telecommunication taxation", Book),
          item("Regulatory Change", "Global tax and telecom regulatory updates", TriangleAlert),
          item("Guides & Reports", "Comprehensive how-to and analysis documents", FileText),
          item("Glossary", "Telecom tax terminology reference", List),
          item("FAQ", "Common questions and quick answers", CircleHelp),
        ],
      },
      {
        title: "Company & Community",
        icon: Users,
        items: [
          item("About ZoikoTax", "Our mission, vision and founding story", Info, "/about-us"),
          item("Blog", "Latest news, updates and thought leadership", PenLine),
          item("Partners", "Integrations and technology partnerships", LinkIcon),
          item("Careers", "Join the ZoikoTax team", Briefcase),
          item("Contact", "Get in touch with our team", Mail),
        ],
      },
      {
        title: "Stay Updated",
        icon: Bell,
        items: [
          item("Newsroom", "Press releases and company announcements", Radio),
          item("Media Kit", "Logos, photos and brand guidelines", Camera),
          item("Events", "Webinars, conferences and workshops", Calendar),
          item("Newsletter", "Subscribe to our updates", Mail),
          item("Social Media", "Follow us on social platforms", Share2),
        ],
      },
    ],
    feature: {
      eyebrow: "Knowledge Base",
      title: "Expert Resources",
      description: "Everything you need to understand telecom tax and compliance.",
      cta: "Explore Resources",
      href: "#resources",
      image: "/menu/resources.webp",
    },
  },
];
