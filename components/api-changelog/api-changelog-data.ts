export const HERO_DATA = {
  eyebrow: "DEVELOPERS · API CHANGELOG",
  headline: "Track ZoikoTax API changes with compatibility context.",
  description: "Review approved developer-facing version and compatibility changes across ZoikoTax integration surfaces.",
  subDescription: "Use search and filters to find changes relevant to your integration.",
  actions: [
    { label: "View latest changes", href: "#latest", variant: "primary" as const },
    { label: "Open API Reference", href: "/developers/api/", variant: "secondary" as const },
  ],
  exploreLink: "Explore Developers →",
  notice: "The public changelog summarizes approved developer-facing change information. API/reference documentation and governed release sources remain authoritative for technical contract details if a summary conflicts.",
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "DIRECT ANSWER",
  title: "What does the changelog tell you?",
  description: "The ZoikoTax API Changelog is a public, source-governed record of approved developer-facing changes. Each approved record identifies affected surfaces, explicit compatibility and action metadata, and authoritative references. Stable public links and history help you assess a change without treating a summary as the technical contract.",
};

export const LATEST_RELEASE_DATA = {
  eyebrow: "LATEST · APPROVED SOURCE ONLY",
  title: "Release context, not assumptions.",
  unavailableTitle: "Latest approved release unavailable — approved release data is not supplied.",
  unavailableDescription: "No version, publication date, release total or compatibility claim can be established from the information supplied.",
  badge: "Conditional summary anatomy · not release facts",
  fields: [
    { label: "Release group", value: "Source-controlled label" },
    { label: "Published date", value: "Not supplied" },
    { label: "Record / impact counts", value: "Derived only from approved records" },
    { label: "Affected surfaces", value: "Not supplied" },
  ],
  footnote: "Summary, breaking count and action-required count appear only when approved and derived. One governed version or date grouping model is used; no competing histories are inferred.",
  doctrine: "Known-good approved records may remain available with their source state. Unknown, stale or conflicting source information stays neutral or unavailable — never “latest”, “current” or “backward compatible” by default.",
};

export const CHANGES_DATA = {
  eyebrow: "CHANGES",
  title: "Find the changes that matter to your integration.",
  description: "Search approved public records by independent metadata dimensions. The controls below show a static illustrative filter state, not live results.",
  searchLabel: "Search changelog",
  searchPlaceholder: "Search approved public change titles and summaries",
  filters: [
    { label: "Change class", value: "Added · illustrative", active: true },
    { label: "Affected surface", value: "All surfaces", active: false },
    { label: "Compatibility", value: "All values", active: false },
    { label: "Action required", value: "All values", active: false },
    { label: "Date / release version", value: "Source-controlled only", active: false },
  ],
  taxonomy: {
    title: "Illustrative taxonomy",
    selectedCount: "1 selected",
    options: [
      { label: "Added", checked: true },
      { label: "Changed", checked: false },
      { label: "Fixed", checked: false },
      { label: "Deprecated", checked: false },
      { label: "Removed", checked: false },
      { label: "Security", checked: false },
      { label: "Documentation", checked: false },
    ],
  },
  guidance: {
    badge: "Illustrative active state · not release metadata",
    title: "Choose dimensions independently.",
    paragraph1: "Compatibility: Backward compatible / Potentially breaking / Breaking / Not applicable. Action: Required / Recommended / None. These are governed values, not claims about current releases.",
    paragraph2: "Affected surface families: API, SDKs, Webhooks & Events, Bulk & Batch, Sandbox and Integration Guides. Date and version choices appear only from approved release sources.",
    paragraph3: "Focus is shown on Change class. Intended keyboard pattern: Tab to control, arrows to options, Space to select, Escape to close; return focus to the control. Results state remains readable outside the menu.",
  },
  activeFilterChip: "Illustrative filter: Added ×",
  shareLink: "Share allowlisted filters",
  shareNote: "Share only public categorical filters on /developers/changelog/. Exclude private IDs, credentials, payloads and raw search text. Removing a chip reverses that filter; Clear filters restores the base state.",
  resultsStatus: "No published release records supplied",
  resultsOrder: "Approved records · newest first",
  emptyState: {
    title: "No public release records are available here.",
    description: "This is an absence of supplied public records, not evidence that no changes occurred. No results count or chronological release history is inferred.",
    actions: [
      { label: "Open API Reference", href: "/developers/api/", variant: "primary" as const },
      { label: "Explore Developers", href: "/developers/", variant: "secondary" as const },
    ],
  },
  specimensEyebrow: "SEPARATED DEMONSTRATION",
  specimensTitle: "Illustrative record anatomy — not actual releases",
  specimensDescription: "Neutral placeholders show the record contract. No title, date, version, endpoint or product behavior is asserted.",
};

export interface ChangeRecordField {
  label: string;
  value: string;
}

export interface ChangeRecord {
  tag: string;
  title: string;
  highlighted: boolean;
  fields: ChangeRecordField[];
  impactFields?: ChangeRecordField[];
  footnote: string;
}

export const CHANGE_RECORDS: ChangeRecord[] = [
  {
    tag: "Addition anatomy",
    title: "Approved change title",
    highlighted: false,
    fields: [
      { label: "Published date / release group", value: "Source-controlled / not supplied" },
      { label: "Change class", value: "Added · specimen" },
      { label: "Affected surface", value: "Approved family: not supplied" },
      { label: "Compatibility", value: "Not supplied" },
      { label: "Action required", value: "Not supplied" },
    ],
    footnote: "An addition is not a compatibility guarantee. Surface and reference eligibility must be approved.",
  },
  {
    tag: "Breaking / action-required anatomy",
    title: "Approved change title",
    highlighted: true,
    fields: [
      { label: "Published date / release group", value: "Source-controlled / not supplied" },
      { label: "Change class", value: "Changed · specimen" },
      { label: "Affected surface", value: "Approved family: not supplied" },
      { label: "Compatibility", value: "Breaking · specimen only" },
      { label: "Action required", value: "Required · specimen only" },
    ],
    footnote: "Impact and action are visible before expansion. Exact remediation comes from approved references.",
  },
  {
    tag: "Deprecation anatomy",
    title: "Approved change title",
    highlighted: false,
    fields: [
      { label: "Published date / release group", value: "Source-controlled / not supplied" },
      { label: "Change class", value: "Deprecated · specimen" },
      { label: "Affected surface", value: "Approved family: not supplied" },
      { label: "Compatibility", value: "Not supplied" },
      { label: "Action required", value: "Not supplied" },
    ],
    footnote: "Lifecycle state and any replacement are source-controlled. Deprecation does not establish removal.",
  },
  {
    tag: "Documentation / security anatomy",
    title: "Approved change title",
    highlighted: false,
    fields: [
      { label: "Published date / release group", value: "Source-controlled / not supplied" },
      { label: "Change class", value: "Documentation or Security · specimen" },
      { label: "Affected surface", value: "Approved family: not supplied" },
      { label: "Compatibility", value: "Not supplied" },
      { label: "Action required", value: "Not supplied" },
    ],
    footnote: "Documentation is not a capability release. Security detail is disclosed only through approved controlled sources.",
  },
];

export const EXPANDED_RECORD_DATA = {
  eyebrow: "SELECTED ILLUSTRATIVE RECORD",
  title: "Read the contract before taking action.",
  bannerLabel: "Illustrative record anatomy — not an actual release",
  bannerBadge: "Not a published change",
  recordTitle: "Approved change title",
  copyLink: "Copy public link · unavailable",
  sourceFields: [
    { label: "Exact-source title / published date", value: "Approved title / source-controlled date" },
    { label: "Release group / public record anchor", value: "Not supplied / not supplied" },
    { label: "Class / affected surfaces", value: "Changed · specimen / not supplied" },
  ],
  impactFields: [
    { label: "Compatibility", value: "Breaking · illustrative only" },
    { label: "Breaking metadata", value: "Explicit source field · specimen" },
    { label: "Action required", value: "Required · illustrative only" },
  ],
  summaryTitle: "Summary",
  summaryText: "Approved public summary appears here. No release facts have been supplied for this specimen.",
  technicalTitle: "Technical details & affected contracts",
  technicalText: "Exact-source detail and eligible contract references appear only after approval. No endpoint, SDK behavior, event payload or support guarantee is inferred.",
  actionTitle: "Required action",
  actionText: "Approved remediation text and its migration reference appear here when supplied. A change summary is not an instruction to modify an integration.",
  referencePanel: {
    title: "Authoritative references",
    fields: [
      { label: "Source / publication state", value: "Not supplied / not published" },
      { label: "Lifecycle / replacement / migration", value: "Conditional fields · not supplied" },
      { label: "Reference health", value: "Specific reference unavailable" },
    ],
    note: "Public source attribution only. No internal owner, approval ID, tenant data or private payloads are exposed.",
    links: ["API Reference →", "Integration Guides →"],
  },
  actions: [
    { label: "Open API Reference", href: "/developers/api/", variant: "primary" as const },
    { label: "Open Integration Guides", href: "/developers/integration-guides/", variant: "secondary" as const },
  ],
  footnote: "A stable public record link is offered only for an approved published record. Replacement and migration links are omitted when their governed targets or reference health are unavailable.",
};

export interface DimensionCard {
  title: string;
  question: string;
  values: string;
  description: string;
}

export const COMPATIBILITY_ACTION_DATA = {
  eyebrow: "INTERPRETATION GUIDE",
  title: "Three dimensions. Three separate decisions.",
  description: "Illustrative taxonomy meanings — not the status of any ZoikoTax release.",
  dimensions: [
    { title: "Change class", question: "What kind of change is it?", values: "Added · Changed · Fixed · Deprecated · Removed · Security · Documentation", description: "Class describes the change. It does not establish compatibility or an action requirement." },
    { title: "Compatibility", question: "Can the integration remain unchanged?", values: "Backward compatible · Potentially breaking · Breaking · Not applicable", description: "Only explicit approved metadata can answer this. Unknown compatibility remains unknown." },
    { title: "Action required", question: "What should the integrator do?", values: "Required · Recommended · None", description: "Action language is taken from approved references, independently of class and compatibility." },
  ] as DimensionCard[],
  impactGuidance: {
    badge: "Breaking · explicit metadata only",
    text: "Material breaking and action-required signals stay visible on the collapsed record. Absence is not “None”; missing fields remain unknown. A documentation change does not imply a capability release. Meaning is expressed in text, never through color alone.",
  },
};

export interface LifecycleCard {
  title: string;
  description: string;
  badge: string;
}

export interface LifecycleState {
  title: string;
  description: string;
}

export const DEPRECATIONS_DATA = {
  eyebrow: "DEPRECATIONS & REMOVAL",
  title: "Lifecycle state comes from the source.",
  description: "Conditional lifecycle specimen — no dates, deadlines or successor versions have been supplied.",
  warning: "Deprecated does not mean removed. Elapsed time does not change source state.",
  cards: [
    { title: "Announced", description: "Approved announcement", badge: "Source-controlled date" },
    { title: "Effective deprecation", description: "Approved deprecation state", badge: "Source-controlled date" },
    { title: "Sunset / removal", description: "Explicit source transition", badge: "No deadline supplied" },
    { title: "Replacement / migration", description: "Governed route only", badge: "No successor supplied" },
  ] as LifecycleCard[],
  states: [
    { title: "Scheduled", description: "Approved future lifecycle transition; not yet effective." },
    { title: "Active deprecation", description: "Source marks the contract deprecated, not removed." },
    { title: "Removed", description: "Explicit approved removal state; never inferred from time." },
    { title: "Superseded", description: "Source identifies a successor; historical record remains non-current." },
  ] as LifecycleState[],
  footnote: "These labels are anatomy meanings, not current statuses. Lifecycle fields appear only when applicable and approved. A past sunset date alone must not update a record to Removed; replacement links require a governed, healthy reference.",
};

export interface SurfaceRow {
  surface: string;
  purpose: string;
  relationship: string;
}

export const SURFACE_MATRIX_DATA = {
  eyebrow: "AFFECTED SURFACES",
  title: "Follow the surface. Verify the version relationship.",
  description: "Family vocabulary defines where to look, not a support map. No API release is assumed to establish SDK, event or Sandbox support.",
  columns: ["AFFECTED SURFACE", "PURPOSE / SOURCE ELIGIBILITY", "VERSION RELATIONSHIP"],
  rows: [
    { surface: "API", purpose: "Exact public API contracts", relationship: "Unknown · release data not supplied" },
    { surface: "SDKs", purpose: "Approved SDK-specific references", relationship: "Unknown · release data not supplied" },
    { surface: "Webhooks & Events", purpose: "Approved event / webhook contracts", relationship: "Unknown · release data not supplied" },
    { surface: "Bulk & Batch", purpose: "Approved bulk / batch references", relationship: "Unknown · release data not supplied" },
    { surface: "Sandbox", purpose: "Non-production references; no parity promise", relationship: "Unknown · release data not supplied" },
    { surface: "Integration Guides", purpose: "Approved integration-family guidance", relationship: "Unknown · release data not supplied" },
  ] as SurfaceRow[],
  stackedSpecimen: {
    badge: "Stacked / narrow-layout anatomy",
    title: "Surface: API",
    description: "Purpose: exact public contracts. Version relationship: unknown. Labels remain attached to values in a stacked view; no inferred support ticks or support windows.",
  },
};

export interface RouteItem {
  title: string;
  description: string;
  action: string;
}

export const MIGRATION_REFERENCES_DATA = {
  eyebrow: "TECHNICAL NEXT STEPS",
  title: "Resolve the change at its authoritative reference.",
  description: "Specific source links take priority. Until an approved change reference is available, use the safe documentation routes below.",
  routes: [
    { title: "Breaking / action required", description: "Approved migration instructions and exact API reference.", action: "API Reference →" },
    { title: "Deprecated", description: "Governed replacement or lifecycle guide, when supplied.", action: "Integration Guides →" },
    { title: "Removed", description: "Historical record and approved successor, if identified.", action: "Integration Guides →" },
    { title: "Added", description: "Relevant API, SDK or Sandbox route only when verified.", action: "Developer Overview →" },
    { title: "Security", description: "Approved controlled advisory only; no details or advisory URL supplied.", action: "API Reference →" },
    { title: "Documentation", description: "The approved changed reference, not a capability claim.", action: "API Reference →" },
  ] as RouteItem[],
  actions: [
    { label: "Open API Reference", href: "/developers/api/", variant: "primary" as const },
    { label: "Open Integration Guides", href: "/developers/integration-guides/", variant: "secondary" as const },
  ],
  footnote: "These are general documentation fallbacks, not record-specific remediation. Invalid or unavailable reference links are omitted. No sales step interrupts a required technical action.",
};

export const ARCHIVE_DATA = {
  eyebrow: "ARCHIVE & CURRENTNESS",
  title: "Stable history. Explicit source state.",
  emptyState: {
    title: "No historical records supplied",
    description: "No historical dates, page totals, version list or currentness can be established.",
    action: "Developer Overview →",
  },
  specimen: {
    badge: "Illustrative archive layout · not historical release data",
    fields: [
      { label: "Record / governed group", value: "Approved change title / not supplied" },
      { label: "Published date / stable public anchor", value: "Source-controlled / not supplied" },
      { label: "Record status", value: "Source-controlled · unknown" },
    ],
    note: "Historical, Superseded and Removed labels appear only when approved and are explicitly non-current. One governed release grouping model is retained across records and archive.",
    pagination: { prev: "← Previous · unavailable", middle: "Page links appear only when history is supplied", next: "Next · unavailable →" },
  },
  footnote: "Stable public record and group anchors, crawlable page routes and allowlisted categorical query state are the intended architecture. Base canonical: /developers/changelog/. Unknown or stale source information is not “current”. No history is manufactured to fill pagination.",
};

export interface RecoveryPattern {
  title: string;
  description: string;
}

export const RECOVERY_DATA = {
  eyebrow: "READING & RECOVERY",
  title: "Uncertainty stays visible. Documentation stays first.",
  description: "Illustrative state patterns — not claims of a current outage or a runtime implementation.",
  patterns: [
    { title: "No published records", description: "Show the neutral empty state and documentation routes. Do not imply no changes occurred." },
    { title: "Release data unavailable", description: "Do not fabricate a latest release, date, version or count. Keep authoritative documentation accessible." },
    { title: "Stale / conflicting source", description: "Retain known-good source state where permitted; do not mark uncertain information current." },
    { title: "Unknown filter", description: "Normalize or ignore unsupported public filter values safely; keep the base record route accessible." },
    { title: "No filter results", description: "“No records match these filters.” Offer Clear filters; this is distinct from no public records." },
    { title: "Reference unavailable", description: "Omit the invalid specific link. Offer API Reference or Integration Guides as general fallbacks." },
    { title: "Conflicting compatibility", description: "Withhold the disputed compatibility claim; require source review before publication." },
    { title: "Past sunset", description: "Preserve the approved source status. Elapsed time does not authorize automatic removal." },
    { title: "No JavaScript", description: "Core documentation, records, section anchors and page routes remain the intended readable path." },
  ] as RecoveryPattern[],
  noResultsSpecimen: {
    title: "No records match these filters · illustrative state",
    description: "Reset filters to broaden the view. A zero-result query is not evidence that no changes occurred.",
    action: "Clear filters →",
  },
  footnote: "Reading intent: persistent labels, visible focus and text impact signals; logical headings; labeled table-to-card alternatives; narrow and 200–400% text flow; core content readable without motion, hover or color-only meaning and in print. This static mockup does not claim those runtime behaviors are implemented.",
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. No inferred release facts.",
  items: [
    { question: "What is ZoikoTax API Changelog?", answer: "It is the public governed record of approved developer-facing version and compatibility changes. Records identify affected surfaces, explicit impact and action metadata, and authoritative references. No approved release data has been supplied for this page." },
    { question: "How are breaking changes identified?", answer: "Breaking status is explicit governed metadata, not an inference from the change title or class. Material compatibility and action-required signals are visible before expansion. Unknown or conflicting metadata is not labeled backward compatible." },
    { question: "What does deprecated mean?", answer: "Deprecated is a source-defined lifecycle state, not removal. Effective dates, sunset information and replacement guidance appear only when approved. A past deadline alone never changes a record to Removed." },
    { question: "How find SDK/webhook changes?", answer: "Use Affected surface to choose SDKs or Webhooks & Events, then refine class, compatibility and action independently. Check each record’s approved references; an API release does not establish SDK or webhook support." },
    { question: "Where is API Reference?", answer: "Open API Reference at /developers/api/. Exact API/reference documentation remains authoritative for technical contract details if a changelog summary conflicts. Integration Guides are available at /developers/integration-guides/." },
    { question: "How know action required?", answer: "Read the independent Action required field: Required, Recommended or None, only when source-approved. Follow the approved migration or reference instructions. An absent field remains unknown; no technical action is inferred from prose." },
  ] as FAQItem[],
};

export interface DeveloperResource {
  icon: "book" | "braces" | "package" | "webhook" | "layers" | "route";
  title: string;
  description: string;
  action: string;
  path: string;
}

export const RELATED_RESOURCES_DATA = {
  eyebrow: "RELATED DEVELOPERS RESOURCES",
  title: "Continue with the exact documentation.",
  description: "Use approved public routes for your integration. No support contact, service commitment or specific release reference is inferred.",
  resources: [
    { icon: "book", title: "Developer Overview", description: "Start with the developer documentation hub.", action: "Open documentation →", path: "/developers/" },
    { icon: "braces", title: "API Reference", description: "Read the authoritative public API contracts.", action: "Open documentation →", path: "/developers/api/" },
    { icon: "package", title: "SDKs", description: "Find approved SDK-specific documentation.", action: "Open documentation →", path: "/developers/sdks/" },
    { icon: "webhook", title: "Webhooks & Events", description: "Review event and webhook contract references.", action: "Open documentation →", path: "/developers/webhooks-events/" },
    { icon: "layers", title: "Bulk & Batch", description: "Find bulk and batch integration references.", action: "Open documentation →", path: "/developers/bulk-batch/" },
    { icon: "route", title: "Integration Guides", description: "Use approved implementation and migration guidance.", action: "Open documentation →", path: "/developers/integration-guides/" },
  ] as DeveloperResource[],
  sandbox: {
    title: "Sandbox",
    description: "Non-production documentation and context. No production parity or support promise is made.",
    action: "Open Sandbox",
    path: "/developers/sandbox/",
  },
};

export const NEXT_STEPS_DATA = {
  eyebrow: "NEXT STEPS",
  title: "Start with the contract. Plan with confidence.",
  description: "Review the API Reference and Integration Guides before changing your integration. Approved technical references take precedence over a release summary.",
  actions: [
    { label: "Open API Reference", href: "/developers/api/", variant: "primary" as const },
    { label: "Open Integration Guides", href: "/developers/integration-guides/", variant: "outline" as const },
  ],
  demoNote: "Evaluating ZoikoTax for an enterprise architecture? Book a Demo →",
};
