export type CoverageState =
  | "RESEARCH"
  | "VALIDATION"
  | "PILOT"
  | "PRODUCTION"
  | "MANAGED"
  | "SUSPENDED"
  | "WITHDRAWN"
  | "STATUS UNAVAILABLE";

export interface StateDefinition {
  state: CoverageState;
  description: string;
}

export const STATE_DEFINITIONS: StateDefinition[] = [
  {
    state: "RESEARCH",
    description: "Discovery is active; production use is not represented.",
  },
  {
    state: "VALIDATION",
    description: "Content or workflow is being verified against governed acceptance criteria.",
  },
  {
    state: "PILOT",
    description: "Controlled use is limited to an approved pilot scope; it is not general production availability.",
  },
  {
    state: "PRODUCTION",
    description: "The stated capability and scope are approved for production use under the referenced pack and release.",
  },
  {
    state: "MANAGED",
    description: "Production capability plus separately approved ZoikoTax operational readiness for the stated scope.",
  },
  {
    state: "SUSPENDED",
    description: "Previously available capability is temporarily not available for new or continued use as stated.",
  },
  {
    state: "WITHDRAWN",
    description: "The capability has been removed from current availability; historical context belongs in Status & Releases.",
  },
  {
    state: "STATUS UNAVAILABLE",
    description: "ZoikoTax cannot publish a reliable current state. Do not infer availability from adjacent records.",
  },
];

export interface MarketCapabilityRecord {
  market: string;
  isSynthetic: boolean;
  capabilities: {
    determination: CoverageState;
    obligations: CoverageState;
    filing: CoverageState;
    remittance: CoverageState;
    eInvoicing: CoverageState;
    managed: CoverageState;
  };
}

export const ILLUSTRATIVE_MARKETS: MarketCapabilityRecord[] = [
  {
    market: "Illustrative Market A",
    isSynthetic: true,
    capabilities: {
      determination: "PRODUCTION",
      obligations: "VALIDATION",
      filing: "RESEARCH",
      remittance: "STATUS UNAVAILABLE",
      eInvoicing: "PILOT",
      managed: "STATUS UNAVAILABLE",
    },
  },
  {
    market: "Illustrative Market B",
    isSynthetic: true,
    capabilities: {
      determination: "PILOT",
      obligations: "PILOT",
      filing: "VALIDATION",
      remittance: "RESEARCH",
      eInvoicing: "STATUS UNAVAILABLE",
      managed: "RESEARCH",
    },
  },
  {
    market: "Illustrative Market C",
    isSynthetic: true,
    capabilities: {
      determination: "SUSPENDED",
      obligations: "PRODUCTION",
      filing: "PRODUCTION",
      remittance: "VALIDATION",
      eInvoicing: "PRODUCTION",
      managed: "VALIDATION",
    },
  },
  {
    market: "Illustrative Market D",
    isSynthetic: true,
    capabilities: {
      determination: "WITHDRAWN",
      obligations: "WITHDRAWN",
      filing: "WITHDRAWN",
      remittance: "WITHDRAWN",
      eInvoicing: "WITHDRAWN",
      managed: "WITHDRAWN",
    },
  },
];

export interface ExpandedCapabilityDetail {
  name: string;
  state: CoverageState;
  scope: string;
  verificationText: string;
  limitation: string;
  packHref: string;
  statusHref: string;
}

export const MARKET_A_DETAILS: ExpandedCapabilityDetail[] = [
  {
    name: "Tax Determination",
    state: "PRODUCTION",
    scope: "Illustrative scope · governed calculation workflow",
    verificationText: "Illustrative verification context",
    limitation: "No inference to filing, remittance or managed operation.",
    packHref: "/coverage/packs/",
    statusHref: "/coverage/status/",
  },
  {
    name: "Regulatory Obligations",
    state: "VALIDATION",
    scope: "Illustrative scope · obligation discovery and calendar review",
    verificationText: "Illustrative verification context",
    limitation: "Validation is not production authorization.",
    packHref: "/coverage/packs/",
    statusHref: "/coverage/status/",
  },
  {
    name: "Compliance & Filing",
    state: "RESEARCH",
    scope: "Illustrative scope · selected return workflow research",
    verificationText: "Illustrative verification context",
    limitation: "No submission workflow is represented as live.",
    packHref: "/coverage/packs/",
    statusHref: "/coverage/status/",
  },
  {
    name: "Remittance Orchestration",
    state: "STATUS UNAVAILABLE",
    scope: "Illustrative scope · publishable state unresolved",
    verificationText: "Illustrative verification context",
    limitation: "No custody, movement or payment availability may be inferred.",
    packHref: "/coverage/packs/",
    statusHref: "/coverage/status/",
  },
  {
    name: "E-Invoicing & CTC",
    state: "PILOT",
    scope: "Illustrative scope · named adapter and network pilot only",
    verificationText: "Illustrative verification context",
    limitation: "Pilot boundary excludes unlisted adapters and networks.",
    packHref: "/coverage/packs/",
    statusHref: "/coverage/status/",
  },
  {
    name: "Managed Compliance",
    state: "STATUS UNAVAILABLE",
    scope: "Illustrative scope · operational readiness unresolved",
    verificationText: "Illustrative verification context",
    limitation: "Managed status requires separate approved readiness.",
    packHref: "/coverage/packs/",
    statusHref: "/coverage/status/",
  },
];

export interface CapabilityRoute {
  name: string;
  iconName: "calculator" | "list-checks" | "file-check-2" | "waypoints" | "network" | "users-round";
  url: string;
  description: string;
}

export const CAPABILITY_ROUTES: CapabilityRoute[] = [
  {
    name: "Tax Determination",
    iconName: "calculator",
    url: "/platform/tax-determination/",
    description: "No inference from adjacent capabilities; published scope governs products, transactions and rules.",
  },
  {
    name: "Regulatory Obligations",
    iconName: "list-checks",
    url: "/platform/regulatory-obligations/",
    description: "An obligation record does not imply determination, filing or remittance is live.",
  },
  {
    name: "Compliance & Filing",
    iconName: "file-check-2",
    url: "/platform/compliance-filing/",
    description: "Filing readiness is workflow- and form-specific; adjacent production states do not transfer.",
  },
  {
    name: "Remittance Orchestration",
    iconName: "waypoints",
    url: "/platform/remittance/",
    description: "Orchestration does not imply custody, money movement or regulated payment services.",
  },
  {
    name: "E-Invoicing & CTC",
    iconName: "network",
    url: "/platform/e-invoicing-ctc/",
    description: "Availability is adapter-, network- and document-flow-specific.",
  },
  {
    name: "Managed Compliance",
    iconName: "users-round",
    url: "/platform/managed-compliance/",
    description: "MANAGED requires PRODUCTION plus separately approved operational readiness.",
  },
];

export interface DegradedStateItem {
  iconName:
    | "loader-circle"
    | "database-zap"
    | "search-x"
    | "rows-3"
    | "circle-help"
    | "clock-alert"
    | "git-compare-arrows"
    | "unplug"
    | "pause-circle"
    | "archive-x";
  title: string;
  description: string;
  actionText?: string;
}

export const DEGRADED_STATES: DegradedStateItem[] = [
  {
    iconName: "loader-circle",
    title: "Loading",
    description: "Keep structure visible and announce that current records are loading.",
  },
  {
    iconName: "database-zap",
    title: "No published records",
    description: "Say that no governed records are currently published; do not imply unsupported.",
  },
  {
    iconName: "search-x",
    title: "No search results",
    description: "Preserve the query and provide a visible Clear filters action.",
    actionText: "Clear filters",
  },
  {
    iconName: "rows-3",
    title: "Partial market record",
    description: "Show published capabilities and label missing records without filling gaps by inference.",
  },
  {
    iconName: "circle-help",
    title: "Status unavailable",
    description: "Publish uncertainty when a reliable current state cannot be established.",
  },
  {
    iconName: "clock-alert",
    title: "Stale warning",
    description: "Keep the age warning distinct from the current state and route to verification context.",
  },
  {
    iconName: "git-compare-arrows",
    title: "Conflicting source",
    description: "Suppress an unverified conclusion and expose the evidence conflict.",
  },
  {
    iconName: "unplug",
    title: "Source dependency error",
    description: "State the dependency failure; never substitute cached marketing copy.",
  },
  {
    iconName: "pause-circle",
    title: "SUSPENDED",
    description: "Make temporary unavailability and the governed scope explicit.",
  },
  {
    iconName: "archive-x",
    title: "WITHDRAWN",
    description: "Remove current availability and route readers to historical chronology.",
  },
];

export interface ProofRouteItem {
  name: string;
  description: string;
  href: string;
}

export const PROOF_ROUTES: ProofRouteItem[] = [
  {
    name: "Evidence & Replay",
    description: "Transaction-level reconstruction and source provenance",
    href: "/reconciliation",
  },
  {
    name: "Platform",
    description: "Architecture, controls and capability behavior",
    href: "/determination",
  },
  {
    name: "Developers",
    description: "Interfaces, schemas and integration guidance",
    href: "#",
  },
  {
    name: "Trust",
    description: "Governance and control architecture",
    href: "#",
  },
  {
    name: "Security",
    description: "Security program and technical safeguards",
    href: "#",
  },
  {
    name: "Privacy",
    description: "Privacy practices and data handling",
    href: "#",
  },
  {
    name: "Data Residency",
    description: "Residency options and data-location boundaries",
    href: "#",
  },
  {
    name: "Business Continuity",
    description: "Operational resilience and continuity planning",
    href: "#",
  },
  {
    name: "Support",
    description: "Support channels and operating guidance",
    href: "#",
  },
];

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const COVERAGE_FAQS: FAQItem[] = [
  {
    id: "faq-01",
    number: "01",
    question: "Which countries does ZoikoTax support?",
    answer:
      "Coverage is not a binary supported-country list. Search the governed registry for the current state of each capability in a market, then inspect its exact scope, pack and release context.",
  },
  {
    id: "faq-02",
    number: "02",
    question: "Does PRODUCTION mean every capability is live?",
    answer:
      "No. PRODUCTION applies only to the named capability and published scope. No adjacent capability inherits that state.",
  },
  {
    id: "faq-03",
    number: "03",
    question: "What does PILOT mean?",
    answer:
      "PILOT means controlled use within an approved pilot boundary. It does not represent general production availability or availability outside the stated scope.",
  },
  {
    id: "faq-04",
    number: "04",
    question: "What does MANAGED mean?",
    answer:
      "MANAGED means the underlying capability is production-ready and ZoikoTax operational readiness has been separately approved for the stated scope.",
  },
  {
    id: "faq-05",
    number: "05",
    question: "Why might a status be unavailable?",
    answer:
      "A current state may be unavailable when evidence is incomplete, stale, conflicting, dependent on an unavailable source, or not approved for publication. The registry will not guess.",
  },
  {
    id: "faq-06",
    number: "06",
    question: "Does Coverage provide tax or legal advice?",
    answer:
      "No. Coverage communicates governed readiness. It is not tax or legal advice, a legal opinion, or a substitute for contracts and authoritative documentation.",
  },
  {
    id: "faq-07",
    number: "07",
    question: "Where can I see changes to coverage?",
    answer:
      "Coverage Overview owns the current state. Status & Releases at /coverage/status/ owns the authoritative public chronology, approved transitions and release context.",
  },
];
