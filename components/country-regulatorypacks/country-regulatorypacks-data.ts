export interface CapabilityMatrixItem {
  id: string;
  name: string;
  state: string;
  stateClass: string;
  scope: string;
  currentness: string;
  actionText: string;
  href: string;
}

export interface LifecycleStage {
  id: string;
  name: string;
  isLast?: boolean;
}

export interface CapabilityBoundary {
  id: string;
  title: string;
  description: string;
}

export interface StatusDefinition {
  id: string;
  label: string;
  badgeClass: string;
  meaning: string;
  productionUse: string;
  productionColorClass: string;
}

export interface RelatedDestination {
  id: string;
  title: string;
  subtext?: string;
  description?: string;
  actionText: string;
  href: string;
  isAuthority?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const CAPABILITY_FILTER_CHOICES = [
  "Determination",
  "Regulatory Obligations",
  "Compliance & Filing",
  "Remittance",
  "E-Invoicing/CTC",
  "Managed Compliance",
];

export const STATUS_FILTER_CHOICES = [
  { label: "RESEARCH", bg: "bg-[#ECE7F8]", text: "text-[#665F69]" },
  { label: "VALIDATION", bg: "bg-[#ECE7F8]", text: "text-[#51418A]" },
  { label: "PILOT", bg: "bg-[#FFF0D9]", text: "text-[#8A531F]" },
  { label: "PRODUCTION", bg: "bg-[#E6F2EB]", text: "text-[#256346]" },
  { label: "MANAGED", bg: "bg-[#E5F1F4]", text: "text-[#245D6B]" },
  { label: "SUSPENDED", bg: "bg-[#FBEAE0]", text: "text-[#9A4726]" },
  { label: "WITHDRAWN", bg: "bg-[#F7E8ED]", text: "text-[#8A3A53]" },
];

export const CAPABILITY_MATRIX_ITEMS: CapabilityMatrixItem[] = [
  {
    id: "tax-determination",
    name: "Tax Determination",
    state: "Status unavailable",
    stateClass: "bg-[#F3EDF7] text-[#665F69]",
    scope: "Governed source required",
    currentness: "Governed source required",
    actionText: "View Tax Determination coverage →",
    href: "/determination",
  },
  {
    id: "regulatory-obligations",
    name: "Regulatory Obligations",
    state: "Status unavailable",
    stateClass: "bg-[#F3EDF7] text-[#665F69]",
    scope: "Governed source required",
    currentness: "Governed source required",
    actionText: "View Regulatory Obligations coverage →",
    href: "/regulatory-obligations",
  },
  {
    id: "compliance-filing",
    name: "Compliance & Filing",
    state: "Status unavailable",
    stateClass: "bg-[#F3EDF7] text-[#665F69]",
    scope: "Governed source required",
    currentness: "Governed source required",
    actionText: "View Compliance & Filing coverage →",
    href: "/compliance-filing",
  },
  {
    id: "remittance",
    name: "Remittance",
    state: "Status unavailable",
    stateClass: "bg-[#F3EDF7] text-[#665F69]",
    scope: "Governed source required",
    currentness: "Governed source required",
    actionText: "View Remittance coverage →",
    href: "/remittance-coverage",
  },
  {
    id: "e-invoicing-ctc",
    name: "E-Invoicing & CTC",
    state: "Status unavailable",
    stateClass: "bg-[#F3EDF7] text-[#665F69]",
    scope: "Governed source required",
    currentness: "Governed source required",
    actionText: "View E-Invoicing & CTC coverage →",
    href: "/e-invoicing-ctc",
  },
  {
    id: "managed-compliance",
    name: "Managed Compliance",
    state: "Status unavailable",
    stateClass: "bg-[#F3EDF7] text-[#665F69]",
    scope: "Governed source required",
    currentness: "Governed source required",
    actionText: "View Managed Compliance coverage →",
    href: "/managed-compliance-coverage",
  },
];

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  { id: "review", name: "Source / Review" },
  { id: "validation", name: "Validation" },
  { id: "pilot", name: "Pilot" },
  { id: "production", name: "Production / Managed", isLast: true },
];

export const CAPABILITY_BOUNDARIES: CapabilityBoundary[] = [
  {
    id: "tax-determination",
    title: "Tax Determination",
    description: "Determination readiness does not guarantee every service’s rates or treatment.",
  },
  {
    id: "regulatory-obligations",
    title: "Regulatory Obligations",
    description: "Regulatory obligation readiness does not decide a customer’s legal obligations.",
  },
  {
    id: "compliance-filing",
    title: "Compliance & Filing",
    description: "Readiness does not mean every form, frequency, authority or deadline is supported.",
  },
  {
    id: "remittance",
    title: "Remittance",
    description: "Remittance means orchestration readiness. ZoikoTax does not hold, transfer or custody customer funds.",
  },
  {
    id: "e-invoicing-ctc",
    title: "E-Invoicing & CTC",
    description: "Readiness is jurisdiction AND network-adapter specific—not every mandate or network is supported.",
  },
  {
    id: "managed-compliance",
    title: "Managed Compliance",
    description: "Requires production capability PLUS approved operational readiness, both within the stated scope.",
  },
];

export const STATUS_DEFINITIONS: StatusDefinition[] = [
  {
    id: "research",
    label: "RESEARCH",
    badgeClass: "bg-[#ECE7F8] text-[#665F69]",
    meaning: "Source discovery/interpretation incomplete.",
    productionUse: "Not production.",
    productionColorClass: "text-[#665F69]",
  },
  {
    id: "validation",
    label: "VALIDATION",
    badgeClass: "bg-[#ECE7F8] text-[#51418A]",
    meaning: "Rules/capability under formal validation.",
    productionUse: "Not production; not generally available.",
    productionColorClass: "text-[#51418A]",
  },
  {
    id: "pilot",
    label: "PILOT",
    badgeClass: "bg-[#FFF0D9] text-[#8A531F]",
    meaning: "Contractually bounded controlled deployment.",
    productionUse: "Controlled use only, scope-specific.",
    productionColorClass: "text-[#8A531F]",
  },
  {
    id: "production",
    label: "PRODUCTION",
    badgeClass: "bg-[#E6F2EB] text-[#256346]",
    meaning: "Approved production capability for stated scope.",
    productionUse: "Yes only within governed scope/currentness.",
    productionColorClass: "text-[#256346]",
  },
  {
    id: "managed",
    label: "MANAGED",
    badgeClass: "bg-[#E5F1F4] text-[#245D6B]",
    meaning: "Production capability plus approved managed operations.",
    productionUse: "Both capability and operations approved within scope.",
    productionColorClass: "text-[#245D6B]",
  },
  {
    id: "suspended",
    label: "SUSPENDED",
    badgeClass: "bg-[#FBEAE0] text-[#9A4726]",
    meaning: "New authoritative use stopped except approved exception.",
    productionUse: "No new use/current-availability claim.",
    productionColorClass: "text-[#9A4726]",
  },
  {
    id: "withdrawn",
    label: "WITHDRAWN",
    badgeClass: "bg-[#F7E8ED] text-[#8A3A53]",
    meaning: "Capability retired; historical versions may remain replayable.",
    productionUse: "Historical, not current support.",
    productionColorClass: "text-[#8A3A53]",
  },
  {
    id: "unavailable",
    label: "STATUS UNAVAILABLE",
    badgeClass: "bg-[#ECE7F8] text-[#665F69]",
    meaning: "State cannot be resolved from governed source.",
    productionUse: "Unknown, never infer PRODUCTION.",
    productionColorClass: "text-[#665F69]",
  },
];

export const RELATED_CAPABILITY_DESTINATIONS: RelatedDestination[] = [
  {
    id: "tax-determination",
    title: "Tax Determination",
    actionText: "View Tax Determination coverage →",
    href: "/determination",
  },
  {
    id: "regulatory-obligations",
    title: "Regulatory Obligations",
    actionText: "View Regulatory Obligations coverage →",
    href: "/regulatory-obligations",
  },
  {
    id: "compliance-filing",
    title: "Compliance & Filing",
    actionText: "View Compliance & Filing coverage →",
    href: "/compliance-filing",
  },
  {
    id: "remittance",
    title: "Remittance",
    actionText: "View Remittance coverage →",
    href: "/remittance-coverage",
  },
  {
    id: "e-invoicing-ctc",
    title: "E-Invoicing & CTC",
    actionText: "View E-Invoicing & CTC coverage →",
    href: "/e-invoicing-ctc",
  },
  {
    id: "managed-compliance",
    title: "Managed Compliance",
    actionText: "View Managed Compliance coverage →",
    href: "/managed-compliance-coverage",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is a ZoikoTax Country or Regulatory Pack?",
    answer: "A governed jurisdiction layer used to organize market-specific content and activate supported capabilities.",
  },
  {
    id: "faq-2",
    question: "Does a country pack mean ZoikoTax supports every capability in that country?",
    answer: "No. Availability is capability-specific; each capability has its own readiness state and scope.",
  },
  {
    id: "faq-3",
    question: "How do I know what is live?",
    answer: "Use the capability states shown in the pack and Coverage pages, sourced from governed Coverage/release data.",
  },
  {
    id: "faq-4",
    question: "What if a status is missing?",
    answer: "The UI shows Status unavailable rather than inferring production support.",
  },
  {
    id: "faq-5",
    question: "Is Managed Compliance available wherever a pack exists?",
    answer: "No. Managed Compliance requires production capability plus approved operational readiness for the stated scope.",
  },
  {
    id: "faq-6",
    question: "How do I confirm exact procurement scope when the source is unavailable?",
    answer: "Consult Coverage Overview and Status & Releases for public coverage truth. Book a Demo to confirm the market, capability, current state and scope for your contract and implementation; a conversation does not replace governed coverage evidence.",
  },
];
