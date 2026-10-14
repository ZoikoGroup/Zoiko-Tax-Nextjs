import {
  Blocks,
  BookOpen,
  Braces,
  Compass,
  Database,
  FileCheck,
  FlaskConical,
  History,
  Layers,
  Network,
  Package,
  Radio,
  ReceiptText,
  Route,
  type LucideIcon,
} from "lucide-react";

/**
 * Canonical developer sources. `path` is the canonical route shown in the design;
 * `href` is the page that exists on this site today.
 */
export const SOURCES = {
  overview: { path: "/developers/", href: "/developer-overview" },
  api: { path: "/developers/api/", href: "/api-reference" },
  sdks: { path: "/developers/sdks/", href: "/sdks" },
  events: { path: "/developers/webhooks-events/", href: "/webhooks-events" },
  batch: { path: "/developers/bulk-batch/", href: "/bulk-batch" },
  guides: { path: "/developers/integration-guides/", href: "/integration-guides" },
  sandbox: { path: "/developers/sandbox/", href: "/sandbox" },
  changelog: { path: "/developers/changelog/", href: "/api-changelog" },
};

export const TASKS = [
  "Understand the integration model",
  "Read exact API contracts",
  "Use a client library",
  "Consume events",
  "Move high-volume data",
  "Follow an implementation pattern",
  "Test non-production behavior",
  "Review compatibility changes",
] as const;

export type Task = (typeof TASKS)[number];

export const START_TASKS: { task: Task; icon: LucideIcon; description: string; source: keyof typeof SOURCES }[] = [
  {
    task: "Understand the integration model",
    icon: Compass,
    description: "Begin with integration concepts, authentication, environments and getting started.",
    source: "overview",
  },
  {
    task: "Read exact API contracts",
    icon: Braces,
    description: "Use API Reference for versioned endpoints, schemas, errors and contract details.",
    source: "api",
  },
  {
    task: "Use a client library",
    icon: Package,
    description: "Confirm supported libraries and versions in the SDK registry.",
    source: "sdks",
  },
  {
    task: "Consume events",
    icon: Radio,
    description: "Review event contracts and source-owned delivery semantics.",
    source: "events",
  },
  {
    task: "Move high-volume data",
    icon: Layers,
    description: "Explore governed asynchronous and batch integration patterns.",
    source: "batch",
  },
  {
    task: "Follow an implementation pattern",
    icon: Route,
    description: "Find architecture guidance without replacing the owning contracts.",
    source: "guides",
  },
  {
    task: "Test non-production behavior",
    icon: FlaskConical,
    description: "Review Sandbox guidance; access and capabilities remain source-controlled.",
    source: "sandbox",
  },
  {
    task: "Review compatibility changes",
    icon: History,
    description: "Return to API Changelog before making upgrade decisions.",
    source: "changelog",
  },
];

export const PATHS = [
  {
    name: "Billing & BSS",
    icon: ReceiptText,
    summary: "Quote/commit, invoice and transaction integration orientation.",
    detail: "Exact transaction contracts remain source-owned; patterns do not establish commercial availability.",
    path: "/developers/integrations/billing-bss/",
    href: "/billing-bss",
  },
  {
    name: "ERP & General Ledger",
    icon: BookOpen,
    summary: "Controlled journals, accounting bridges and reconciliation orientation.",
    detail: "Journal schemas, mappings and posting behavior belong to the owning technical sources.",
    path: "/developers/integrations/erp-gl/",
    href: "/erp-general-ledger",
  },
  {
    name: "Existing Tax Engines",
    icon: Network,
    summary: "Federated, Shadow and migration adapter patterns.",
    detail: "Platform and Coverage govern actual modes and availability. No vendor support or parity is implied.",
    path: "/developers/integrations/tax-engines/",
    href: "/existing-tax-engines",
  },
  {
    name: "E-Invoicing Networks",
    icon: FileCheck,
    summary: "Supported network and authority adapter patterns.",
    detail:
      "Actual network and jurisdiction support is Coverage-owned; no mandate, format or certificate support is inferred.",
    path: "/developers/integrations/e-invoicing/",
    href: "/e-invoicing-networks",
  },
  {
    name: "Data & Enterprise Systems",
    icon: Database,
    summary: "CPQ, CRM, product catalogue and approved data-platform patterns.",
    detail: "Use the owning guides for approved patterns. No named connector, data model or sync cadence is asserted.",
    path: "/developers/integrations/enterprise-data/",
    href: "/data-enterprise-systems",
  },
  {
    name: "OEM / Embedded",
    icon: Blocks,
    summary: "Partner provisioning and embedded capability patterns.",
    detail: "Patterns do not grant provisioning access, white-label rights, reseller rights or partner entitlements.",
    path: "/developers/integrations/oem-embedded/",
    href: "/oem-embedded",
  },
];

export type PathName = (typeof PATHS)[number]["name"];

const ALL_PATHS = PATHS.map((p) => p.name);

/**
 * Core resources for the searchable directory. Path tags follow the design's source map:
 * every integration family routes through Integration Guides to the API, SDK, Events and Batch sources.
 */
export const RESOURCES: {
  name: string;
  icon: LucideIcon;
  summary: string;
  detail: string;
  action: string;
  source: keyof typeof SOURCES;
  task: Task;
  paths: string[];
}[] = [
  {
    name: "API Reference",
    icon: Braces,
    summary: "Versioned endpoints, schemas, errors and contract details.",
    detail:
      "Read the owning reference for exact production contracts; this portal does not duplicate endpoint tables.",
    action: "Open API Reference",
    source: "api",
    task: "Read exact API contracts",
    paths: ALL_PATHS,
  },
  {
    name: "SDKs",
    icon: Package,
    summary: "Supported client libraries and versions.",
    detail: "Use the SDK registry to confirm library support, packages and version guidance before choosing a client.",
    action: "Explore SDKs",
    source: "sdks",
    task: "Use a client library",
    paths: ALL_PATHS,
  },
  {
    name: "Webhooks & Events",
    icon: Radio,
    summary: "Event-driven integration contracts and delivery semantics.",
    detail:
      "Consult the source for event definitions, delivery and verification details. No delivery guarantees are implied here.",
    action: "Explore Webhooks & Events",
    source: "events",
    task: "Consume events",
    paths: ALL_PATHS,
  },
  {
    name: "Bulk & Batch",
    icon: Layers,
    summary: "High-volume asynchronous and batch integration patterns.",
    detail:
      "Review the source for the applicable contracts and constraints; no batch limits or throughput are asserted here.",
    action: "Explore Bulk & Batch",
    source: "batch",
    task: "Move high-volume data",
    paths: ALL_PATHS,
  },
  {
    name: "Integration Guides",
    icon: Route,
    summary: "Implementation patterns and architecture guidance.",
    detail:
      "Follow the pattern that fits your architecture, then return to the owning reference for exact contract details.",
    action: "Open Integration Guides",
    source: "guides",
    task: "Follow an implementation pattern",
    paths: ALL_PATHS,
  },
  {
    name: "Sandbox",
    icon: FlaskConical,
    summary: "Non-production integration and testing experience.",
    detail:
      "Sandbox is non-production. Access, capabilities and parity depend on approved environment and entitlement sources.",
    action: "Explore Sandbox",
    source: "sandbox",
    task: "Test non-production behavior",
    paths: [],
  },
  {
    name: "API Changelog",
    icon: History,
    summary: "Version and compatibility changes.",
    detail:
      "Review source-owned changes before implementation or upgrade. This portal does not reproduce a latest release.",
    action: "View API Changelog",
    source: "changelog",
    task: "Review compatibility changes",
    paths: [],
  },
];
