import {
  FileClock,
  ArrowLeftRight,
  ScanSearch,
  Clock3,
  ShieldCheck,
  Inbox,
  SearchX,
  HelpCircle,
  DatabaseZap,
  History,
  PauseCircle,
  CircleOff,
  RefreshCw,
  Calculator,
  Landmark,
  FileCheck2,
  Send,
  FileOutput,
  Handshake,
  RotateCcw,
  LockKeyhole,
  EyeOff,
  MapPin,
  Code2,
  LifeBuoy,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type EventRecord = {
  id: string;
  badge: string;
  subBadge?: string;
  transition: string;
  transitionState: string;
  markerColor: string;
  market: string;
  capability: string;
  timeContext: string;
  timeType: "Published" | "Effective" | "Verified";
  scope: string;
  summary: string;
  links: { label: string; href: string }[];
};

export const eventsData: EventRecord[] = [
  {
    id: "EVT-1001",
    badge: "ILLUSTRATIVE SYNTHETIC DATA",
    transition: "VALIDATION → PILOT",
    transitionState: "PILOT",
    markerColor: "#301153",
    market: "Illustrative Market A",
    capability: "Tax Determination",
    timeContext: "Published: Illustrative date",
    timeType: "Published",
    scope: "Illustrative indirect tax determination scope for a fictional service class.",
    summary:
      "The stated illustrative scope moved from validation into a bounded pilot context. No broader market inference is made.",
    links: [
      { label: "View event detail", href: "#evt-1002-specimen" },
      { label: "View Current Coverage", href: "/coverage-overview" },
    ],
  },
  {
    id: "EVT-1002",
    badge: "ILLUSTRATIVE SYNTHETIC DATA",
    subBadge: "HISTORICAL",
    transition: "PRODUCTION → SUSPENDED",
    transitionState: "SUSPENDED",
    markerColor: "#9E3434",
    market: "Illustrative Market B",
    capability: "Compliance & Filing",
    timeContext: "Effective: Illustrative date",
    timeType: "Effective",
    scope: "Illustrative filing scope",
    summary:
      "The stated historical filing scope changed to SUSPENDED. This record does not assert a cause or describe current market-wide Coverage.",
    links: [
      { label: "View event detail", href: "#evt-1002-specimen" },
      { label: "View Current Coverage", href: "/coverage-overview" },
      { label: "Pack context", href: "#packs-context" },
    ],
  },
  {
    id: "EVT-1003",
    badge: "ILLUSTRATIVE SYNTHETIC DATA",
    transition: "SCOPE CHANGED",
    transitionState: "RESEARCH",
    markerColor: "#315D82",
    market: "Illustrative Market C",
    capability: "E-Invoicing & CTC",
    timeContext: "Verified: Illustrative date",
    timeType: "Verified",
    scope:
      "Illustrative outbound document exchange scope for a fictional clearance route.",
    summary:
      "The public scope description changed. No capability-wide state transition is represented by this specimen.",
    links: [
      { label: "View event detail", href: "#evt-1002-specimen" },
      { label: "View Current Coverage", href: "/coverage-overview" },
      { label: "Pack context", href: "#packs-context" },
    ],
  },
  {
    id: "EVT-1004",
    badge: "ILLUSTRATIVE SYNTHETIC DATA",
    transition: "PRODUCTION → MANAGED",
    transitionState: "MANAGED",
    markerColor: "#236C55",
    market: "Illustrative Market D",
    capability: "Managed Compliance",
    timeContext: "Published: Illustrative date",
    timeType: "Published",
    scope: "Illustrative managed return preparation and submission scope.",
    summary:
      "The stated illustrative scope moved to a managed operating context. The event does not claim universal customer activation.",
    links: [
      { label: "View event detail", href: "#evt-1002-specimen" },
      { label: "View Current Coverage", href: "/coverage-overview" },
      { label: "Pack context", href: "#packs-context" },
    ],
  },
];

export const directAnswerComparison = [
  {
    is: "A governed Coverage chronology",
    isNot: "A generic software changelog",
  },
  {
    is: "Capability- and scope-specific",
    isNot: "A country-wide support feed",
  },
  {
    is: "Linked to current Coverage",
    isNot: "A substitute for current truth",
  },
  {
    is: "A public-safe evidence route",
    isNot: "A restricted-source dump",
  },
];

export type ReadingDimension = {
  num: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export const readingDimensions: ReadingDimension[] = [
  {
    num: "01",
    name: "Event",
    description:
      "The governed public record of a change, with a stable event label and neutral summary.",
    icon: FileClock,
  },
  {
    num: "02",
    name: "State",
    description:
      "The stated transition or event outcome. Color supports the label; it never replaces it.",
    icon: ArrowLeftRight,
  },
  {
    num: "03",
    name: "Scope",
    description:
      "The exact market, capability, obligation or workflow boundary to which the event applies.",
    icon: ScanSearch,
  },
  {
    num: "04",
    name: "Time",
    description:
      "Effective, published and verified are separate labels. They answer different questions.",
    icon: Clock3,
  },
  {
    num: "05",
    name: "Proof",
    description:
      "Public-safe provenance and handoffs show how the record was governed and where to verify current truth.",
    icon: ShieldCheck,
  },
];

export const timeLabels = [
  {
    label: "EFFECTIVE",
    description: "When the stated change applies to its exact scope.",
  },
  {
    label: "PUBLISHED",
    description: "When the public chronology record became available.",
  },
  {
    label: "VERIFIED",
    description: "When the public current-state handoff was last checked.",
  },
];

export type StateVocabularyItem = {
  state: string;
  description: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
};

export const stateVocabularyData: StateVocabularyItem[] = [
  {
    state: "RESEARCH",
    description:
      "Coverage content is being researched. It is not available for governed operation.",
    textColor: "#315D82",
    borderColor: "#315D82",
    bgColor: "#E8F1F8",
  },
  {
    state: "VALIDATION",
    description:
      "Coverage content is under governed validation. Production use is not represented.",
    textColor: "#8A5A00",
    borderColor: "#8A5A00",
    bgColor: "#FFF4D6",
  },
  {
    state: "PILOT",
    description:
      "A bounded pilot may apply only to the stated participants, capability and scope.",
    textColor: "#301153",
    borderColor: "#301153",
    bgColor: "#EEE2F5",
  },
  {
    state: "PRODUCTION",
    description:
      "The stated capability and scope are available in a governed production context.",
    textColor: "#236C55",
    borderColor: "#236C55",
    bgColor: "#E8F4EF",
  },
  {
    state: "MANAGED",
    description:
      "ZoikoTax-managed operation applies to the expressly stated capability and scope.",
    textColor: "#236C55",
    borderColor: "#236C55",
    bgColor: "#E8F4EF",
  },
  {
    state: "SUSPENDED",
    description:
      "The stated capability and scope are temporarily not represented as currently available.",
    textColor: "#9E3434",
    borderColor: "#9E3434",
    bgColor: "#FBEAEA",
  },
  {
    state: "WITHDRAWN",
    description:
      "The stated Coverage has been removed from current public availability.",
    textColor: "#9E3434",
    borderColor: "#9E3434",
    bgColor: "#FBEAEA",
  },
  {
    state: "STATUS UNAVAILABLE",
    description:
      "Current state could not be verified. No availability inference should be made.",
    textColor: "#665F69",
    borderColor: "#665F69",
    bgColor: "#F7F3ED",
  },
];

export type EdgeStateItem = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  icon: LucideIcon;
};

export const edgeStatesData: EdgeStateItem[] = [
  {
    title: "No records",
    description:
      "No public chronology records are available for this route. Do not infer current Coverage.",
    linkText: "View Current Coverage",
    linkHref: "/coverage-overview",
    icon: Inbox,
  },
  {
    title: "No results",
    description:
      "No events match the selected filters. This does not mean no Coverage exists.",
    linkText: "Clear filters",
    linkHref: "#",
    icon: SearchX,
  },
  {
    title: "Status unavailable",
    description:
      "Current state could not be verified. Availability must not be inferred.",
    linkText: "View current-status guidance",
    linkHref: "/coverage-overview",
    icon: HelpCircle,
  },
  {
    title: "Dependency / source error",
    description:
      "An authoritative dependency could not be read. Stale chronology is not shown as current.",
    linkText: "Try again or contact Support",
    linkHref: "#",
    icon: DatabaseZap,
  },
  {
    title: "Historical",
    description:
      "This event describes a prior state. Verify the current state before acting.",
    linkText: "View Current Coverage",
    linkHref: "/coverage-overview",
    icon: History,
  },
  {
    title: "SUSPENDED",
    description:
      "The stated scope is temporarily not represented as currently available.",
    linkText: "Review exact scope",
    linkHref: "/coverage-overview",
    icon: PauseCircle,
  },
  {
    title: "WITHDRAWN",
    description:
      "The stated Coverage has been removed from current public availability.",
    linkText: "Review current routes",
    linkHref: "/coverage-overview",
    icon: CircleOff,
  },
  {
    title: "Stale chronology blocked",
    description:
      "A chronology view that cannot establish freshness is withheld rather than presented silently.",
    linkText: "View verification guidance",
    linkHref: "/coverage-overview",
    icon: RefreshCw,
  },
];

export type CapabilityRouteItem = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  icon: LucideIcon;
};

export const capabilityRoutesData: CapabilityRouteItem[] = [
  {
    title: "Tax Determination",
    description: "Inspect current market, service and determination scope.",
    linkText: "Open Tax Determination current scope",
    linkHref: "/determination",
    icon: Calculator,
  },
  {
    title: "Regulatory Obligations",
    description: "Inspect current obligation and responsibility scope.",
    linkText: "Open Regulatory Obligations current scope",
    linkHref: "/coverage-overview",
    icon: Landmark,
  },
  {
    title: "Compliance & Filing",
    description: "Inspect current return, filing and workflow scope.",
    linkText: "Open Compliance & Filing current scope",
    linkHref: "/coverage-overview",
    icon: FileCheck2,
  },
  {
    title: "Remittance",
    description: "Inspect current payment and remittance scope.",
    linkText: "Open Remittance current scope",
    linkHref: "/coverage-overview",
    icon: Send,
  },
  {
    title: "E-Invoicing & CTC",
    description: "Inspect current document and exchange scope.",
    linkText: "Open E-Invoicing & CTC current scope",
    linkHref: "/e-invoicing-ctc",
    icon: FileOutput,
  },
  {
    title: "Managed Compliance",
    description: "Inspect current managed operating scope.",
    linkText: "Open Managed Compliance current scope",
    linkHref: "/coverage-overview",
    icon: Handshake,
  },
];

export type ProofBoundaryItem = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  icon: LucideIcon;
};

export const proofBoundaryRoutes: ProofBoundaryItem[] = [
  {
    title: "Evidence & Replay",
    description:
      "Follow reconstructable outcome evidence for transaction-level proof.",
    linkText: "Open Evidence & Replay",
    linkHref: "/about-us",
    icon: RotateCcw,
  },
  {
    title: "Trust",
    description: "Review governance, controls and assurance boundaries.",
    linkText: "Open Trust",
    linkHref: "/about-us",
    icon: ShieldCheck,
  },
  {
    title: "Security",
    description: "Review security architecture and control posture.",
    linkText: "Open Security",
    linkHref: "/about-us",
    icon: LockKeyhole,
  },
  {
    title: "Privacy",
    description: "Review privacy commitments and processing boundaries.",
    linkText: "Open Privacy",
    linkHref: "/about-us",
    icon: EyeOff,
  },
  {
    title: "Residency",
    description:
      "Review separate data-residency information; status is not proof.",
    linkText: "Open Residency",
    linkHref: "/about-us",
    icon: MapPin,
  },
  {
    title: "Developers",
    description:
      "Use APIs and implementation guidance for governed integrations.",
    linkText: "Open Developers",
    linkHref: "/about-us",
    icon: Code2,
  },
  {
    title: "Support",
    description:
      "Ask for assistance without turning chronology into an incident feed.",
    linkText: "Open Support",
    linkHref: "/about-us",
    icon: LifeBuoy,
  },
];

export type PublicSurfaceItem = {
  title: string;
  description: string;
  route: string;
  href: string;
  isCurrentSurface?: boolean;
};

export const publicSurfacesData: PublicSurfaceItem[] = [
  {
    title: "Coverage Overview",
    description:
      "Canonical current market × capability × state × scope truth.",
    route: "/coverage/",
    href: "/coverage-overview",
  },
  {
    title: "Country & Regulatory Packs",
    description:
      "Pack lifecycle, versions and governed activation context.",
    route: "/coverage/packs/",
    href: "/coverage-overview",
  },
  {
    title: "Status & Releases",
    description: "Public chronology of governed Coverage changes.",
    route: "/coverage/status/",
    href: "/status-and-releases",
    isCurrentSurface: true,
  },
  {
    title: "Product Release Notes",
    description:
      "Product delivery changes; not a Coverage availability route.",
    route: "/releases/",
    href: "#",
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqData: FAQItem[] = [
  {
    question: "What is Status & Releases?",
    answer:
      "It is the public chronology for governed ZoikoTax Coverage changes. It describes event, state, scope, time and proof context, then hands off to Coverage Overview for current truth.",
  },
  {
    question: "Does an event mean the whole country is supported?",
    answer:
      "No. An event applies only to its stated market, capability and exact scope. It must not be read as country-wide or capability-wide availability.",
  },
  {
    question: "Is this the same as product Release Notes?",
    answer:
      "No. Status & Releases records governed Coverage changes. Product Release Notes describe product delivery and live at /releases/.",
  },
  {
    question: "What happens if current status cannot be verified?",
    answer:
      "The interface shows STATUS UNAVAILABLE or an explicit dependency error and does not infer availability. Stale chronology must not be silently presented as current.",
  },
  {
    question: "Does PRODUCTION mean every customer transaction is legally correct?",
    answer:
      "No. PRODUCTION is bounded to the stated market, capability and scope. It is not transaction-level replay proof, a legal guarantee or universal customer activation.",
  },
  {
    question: "Can AI change a Coverage state?",
    answer:
      "No. AI may assist research or summarization, but approved rules and governed authority decide state changes. AI cannot silently publish or override Coverage truth.",
  },
];
