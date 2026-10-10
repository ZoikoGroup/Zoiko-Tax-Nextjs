export interface AudienceNeedCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface LogoVariantCard {
  id: string;
  title: string;
  status: string;
  description: string;
  note?: string;
  previewType: "primary" | "reversed" | "monochrome";
}

export interface ColorSwatch {
  id: string;
  name: string;
  hex: string;
  bgClass?: string;
  bgColor: string;
  note: string;
}

export interface BoilerplateOption {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  description: string;
}

export interface UsageRule {
  title: string;
  description: string;
}

export interface StatusDefinition {
  status: string;
  meaning: string;
  action: string;
}

export interface MetadataField {
  label: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RelatedResourceItem {
  title: string;
  description: string;
  href: string;
}

export const audienceNeedsData: AudienceNeedCard[] = [
  {
    id: "journalists",
    icon: "newspaper",
    title: "Journalists & analysts",
    description: "Use current logos, approved company wording and source-approved media in reporting.",
  },
  {
    id: "events",
    icon: "calendar",
    title: "Event organizers",
    description: "Find correct company and speaker assets. Asset access does not imply sponsorship or endorsement.",
  },
  {
    id: "partners",
    icon: "handshake",
    title: "Partners",
    description: "Use co-marketing materials only where the specific relationship and usage rights are established.",
  },
  {
    id: "agencies",
    icon: "layers",
    title: "Agencies & internal communications",
    description: "Check versions and supersession before publishing. Keep the approved art and context together.",
  },
];

export const colorSwatchesData: ColorSwatch[] = [
  {
    id: "surface",
    name: "Section surface",
    hex: "#FAF3FF",
    bgColor: "#FAF3FF",
    note: "Observed reference only",
  },
  {
    id: "brand-purple",
    name: "Brand purple",
    hex: "#301153",
    bgColor: "#301153",
    note: "Observed reference only",
  },
  {
    id: "deep-purple",
    name: "Deep purple",
    hex: "#1D033B",
    bgColor: "#1D033B",
    note: "Observed reference only",
  },
  {
    id: "warm-action",
    name: "Warm action",
    hex: "#BF6735",
    bgColor: "#BF6735",
    note: "Observed reference only",
  },
  {
    id: "editorial-accent",
    name: "Editorial accent",
    hex: "#D65A2C",
    bgColor: "#D65A2C",
    note: "Observed reference only",
  },
];

export const boilerplateOptionsData: BoilerplateOption[] = [
  {
    id: "short",
    title: "Short",
    subtitle: "For brief company references",
    status: "UNAVAILABLE · NOT SUPPLIED",
    description: "Request the approved short description and its permitted context. No official short wording is supplied.",
  },
  {
    id: "medium",
    title: "Medium",
    subtitle: "For press and event background",
    status: "UNAVAILABLE · NOT SUPPLIED",
    description: "Request the approved medium description with its source, version and review record. No official medium wording is supplied.",
  },
  {
    id: "long",
    title: "Long",
    subtitle: "For detailed editorial context",
    status: "UNAVAILABLE · NOT SUPPLIED",
    description: "Request the approved long description. Validate every claim against the owning source. No official long wording is supplied.",
  },
];

export const usageDoRules: UsageRule[] = [
  {
    title: "Keep approved artwork intact",
    description: "Use the source-approved original with its version and usage guidance.",
  },
  {
    title: "Use source-defined clear space",
    description: "Consult the owning guidance for clear space, minimum size and placement. No ratios are established here.",
  },
  {
    title: "Check the intended use",
    description: "Confirm rights, credit and restrictions for your publication, channel and audience.",
  },
];

export const usageDoNotRules: UsageRule[] = [
  {
    title: "Alter or recreate the artwork",
    description: "Do not recolor, distort, crop, trace or combine a mark into new artwork.",
  },
  {
    title: "Infer association or endorsement",
    description: "Do not imply partnership, sponsorship, certification or support from asset access.",
  },
  {
    title: "Publish an unverified version",
    description: "Do not treat reference previews, stale files or missing rights as approval.",
  },
];

export const rightsBoundariesData = [
  {
    icon: "copyright",
    title: "Trademark & copyright",
    description:
      "Confirm the rights owner and the permitted use from the governed asset record. No blanket licence is granted by this page. Missing rights metadata means the download is withheld.",
  },
  {
    icon: "shield-alert",
    title: "Association & endorsement",
    description:
      "Using or accessing brand artwork does not establish sponsorship, endorsement, certification or a third-party relationship. Do not imply claims that the owning source does not support.",
  },
  {
    icon: "handshake",
    title: "Partner & co-marketing use",
    description:
      "Partner use requires permission for the specific relationship, asset and context. Do not add third-party marks, combine logos or infer rights from a visual example.",
  },
];

export const statusTableData: StatusDefinition[] = [
  {
    status: "CURRENT",
    meaning: "The owning source confirms the published version is current and approved.",
    action: "Review the asset-specific rights and use only the verified file.",
  },
  {
    status: "SUPERSEDED",
    meaning: "A newer approved version replaces this asset; the prior version is not current.",
    action: "Find the approved replacement. Do not reuse the older file.",
  },
  {
    status: "WITHDRAWN",
    meaning: "The owning source has removed the asset from approved use.",
    action: "Stop use and seek guidance on replacement or removal.",
  },
  {
    status: "REQUEST_ONLY",
    meaning: "Access requires a governed request; no public download is offered.",
    action: "Use the approved contact route when it is published.",
  },
  {
    status: "UNAVAILABLE",
    meaning: "The file, source or approval record is missing or cannot be verified.",
    action: "Read available guidance; wait for a verified source or request it.",
  },
  {
    status: "MISSING_RIGHTS_METADATA",
    meaning: "Rights, owner or permitted-use information is not established.",
    action: "Withhold download and publication until rights are resolved.",
  },
];

export const assetMetadataFields: MetadataField[] = [
  { label: "Asset name", value: "ZoikoTax wordmark · homepage reference" },
  { label: "Version", value: "Not supplied · governed source required" },
  { label: "Status", value: "Unapproved reference · MISSING_RIGHTS_METADATA" },
  { label: "Actual format", value: "No downloadable format supplied. Raster preview only." },
  { label: "Usage / restrictions", value: "No approved usage supplied. Do not extract this preview for publication." },
  { label: "Rights / owner", value: "Not supplied · rights owner and permission source required" },
  { label: "Last reviewed", value: "Not supplied · review record required" },
  { label: "Source", value: "Existing homepage artwork · visual reference, not approval evidence" },
  { label: "Alt text", value: "ZoikoTax wordmark with a stylized Z and circular network motif." },
];

export const mediaKitFaqData: FaqItem[] = [
  {
    question: "What is the purpose of the ZoikoTax Media Kit?",
    answer:
      "The Media Kit is designed as a governed public brand-asset and media-resource destination. It helps journalists, analysts, event organizers, partners, agencies and internal communications teams find logos, photos, brand guidance and approved next steps. This candidate page does not yet offer a current approved asset registry.",
  },
  {
    question: "How can I tell whether an asset is current?",
    answer:
      "Check the explicit status, version, owning source and last-reviewed record together. CURRENT must be established by the owning source. No approved version numbers or review dates have been supplied here, so reference previews are not presented as current.",
  },
  {
    question: "Does downloading an asset give me permission to use it?",
    answer:
      "No. Asset access and legal permission are separate. Review the specific rights, owner, permitted use, restrictions and credit. A download does not establish endorsement, a third-party relationship or a blanket licence.",
  },
  {
    question: "What should I do when a download or contact action is unavailable?",
    answer:
      "Do not extract a preview, use an unverified substitute or assume approval. Read the available guidance and wait for the governed file or verified contact route. Download and submission actions remain unavailable while their sources are missing.",
  },
  {
    question: "Can I continue using a superseded or withdrawn asset?",
    answer:
      "A superseded asset is not the current version; seek the approved replacement. A withdrawn asset is removed from approved use; stop use and seek guidance on replacement or removal. Any exception needs its own governed approval.",
  },
  {
    question: "Are font files included in the Media Kit?",
    answer:
      "No font files are offered for download. Inter and Roboto Mono are observed reference fonts, not a grant of font rights. Obtain fonts from their legitimate distributor and follow the applicable licence.",
  },
  {
    question: "Can a partner use these assets to imply endorsement?",
    answer:
      "No. Asset access does not establish sponsorship, certification, endorsement or partnership. Co-marketing use needs permission for the specific relationship, artwork and context, supported by the owning source.",
  },
];

export const relatedResourcesData: RelatedResourceItem[] = [
  {
    title: "Newsroom",
    description: "Press releases and company announcements",
    href: "/newsroom",
  },
  {
    title: "About ZoikoTax",
    description: "Our mission, vision and founding story",
    href: "/resources-about",
  },
  {
    title: "Contact",
    description: "Get in touch with our team",
    href: "/contact",
  },
  {
    title: "Insights",
    description: "Telecom tax and regulatory perspectives",
    href: "/telecom-tax-insights",
  },
  {
    title: "Trust",
    description: "Governance and evidence context",
    href: "/trust-center",
  },
];
