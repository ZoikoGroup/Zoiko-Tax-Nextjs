export const HERO_DATA = {
  eyebrow: "RESOURCES · CAREERS",
  title: "Build accountable telecom fiscal infrastructure.",
  description: "ZoikoTax connects telecom tax determination, regulatory obligations, compliance workflows and replayable evidence. Explore current roles and approved employer information.",
  actions: [
    { label: "View current roles", variant: "primary" as const },
    { label: "About ZoikoTax", variant: "secondary" as const },
  ],
  disclaimer: "No current public roles are listed. A verified recruiting source has not been supplied; this is not a statement about all hiring activity.",
};

export const WORK_CONTEXT_DATA = {
  eyebrow: "THE WORK BEHIND THE PLATFORM",
  title: "Complex obligations. Accountable outcomes.",
  description: "Telecom fiscal operations bring tax, compliance and enterprise infrastructure together. This is the work domain—not a list of departments or vacancies.",
  domains: [
    { title: "Telecom complexity", description: "Tax classification, jurisdiction and regulatory obligations must stay connected across complex communications services." },
    { title: "Fiscal control", description: "Material actions need policy, responsibility and governed authority—not a disconnected calculation." },
    { title: "Evidence by design", description: "Inputs, rule versions, approvals and source provenance support outcomes that can be reconstructed." },
  ],
  assistance: {
    title: "Advisory, never authoritative.",
    description: "ZoikoTax Intelligence Fabric™ assists operators; it is not fiscal authority.",
    aiMay: { label: "AI MAY ASSIST", description: "Summarize variances, suggest classifications, surface anomalies and assist research." },
    authorityStays: { label: "AUTHORITY STAYS GOVERNED", description: "No silent monetary decisions, invented authority, bypassed approvals or overwritten evidence." },
  },
  footnote: "Domains of work: product · engineering · tax · compliance · enterprise operations. No team taxonomy or current openings are implied.",
};

export const CURRENT_ROLES_DATA = {
  eyebrow: "CURRENT ROLES",
  title: "Find your next role.",
  description: "Published openings belong here. Search and filters become available when verified role data is connected.",
  search: { label: "Search by title, team, approved keywords or location", placeholder: "Role search unavailable until a recruiting source is connected" },
  sort: { label: "Sort roles", value: "Not available" },
  filters: [
    { label: "Team", value: "All teams" },
    { label: "Location", value: "All locations" },
    { label: "Work mode", value: "All work modes" },
    { label: "Employment type", value: "All employment types" },
  ],
  status: { text: "Filters paused · approved categories have not been published", clear: "Clear filters" },
  empty: {
    title: "No current public roles are listed",
    description: "A verified list of current roles is not available on this page. This does not confirm whether ZoikoTax is hiring elsewhere. No applications can be started here until a live role and approved application route are published.",
    badge: "Recruiting source unavailable",
  },
  footnote: "If a search returns no matches once listings are available, clear filters or broaden your terms to return to published roles. Newest, relevance and alphabetical sorting will appear only when meaningful data is available.",
  listing: {
    heading: "What a published listing will tell you",
    badge: "No published role data",
    note: "Listing structure only—not an opening. A “View role” link appears only for an approved live job with a canonical detail destination.",
    primaryFields: [
      { label: "Role title", value: "Not published" },
      { label: "Team", value: "Not published" },
      { label: "Exact location / hiring region", value: "Not published" },
      { label: "Per-role work mode", value: "Not published" },
    ],
    additionalFields: [
      { label: "Employment type", value: "Not published" },
      { label: "Posted / updated", value: "Not published" },
      { label: "Approved compensation cue", value: "Not published" },
      { label: "Stable job identifier", value: "Not published" },
    ],
  },
};

export const ROLE_DECISION_DATA = {
  eyebrow: "BEFORE YOU APPLY",
  title: "Clear information for an informed decision.",
  description: "Each live role should provide its own requirements, terms and application route. No role-specific information has been published here yet.",
  identity: { title: "Role information", subtitle: "Role title not published", badge: "Not a live vacancy" },
  metadataRows: [
    [
      { label: "Team", value: "Not published" },
      { label: "Location / hiring region", value: "Not published" },
      { label: "Work mode", value: "Not published" },
      { label: "Employment type", value: "Not published" },
    ],
    [
      { label: "Job identifier", value: "Not published" },
      { label: "Posted date", value: "Not published" },
      { label: "Updated date", value: "Not published" },
      { label: "Source status", value: "Not published" },
    ],
  ],
  sections: [
    { title: "Role summary", description: "Not published. The recruiting source must provide the role's purpose and scope." },
    { title: "Responsibilities", description: "Not published. Accountabilities and expected work must be approved for the specific role." },
    { title: "Required qualifications", description: "Not published. No minimum experience, credentials or technical requirements are assumed." },
    { title: "Preferred qualifications", description: "Not published. Optional qualifications will be distinguished from requirements." },
    { title: "Compensation and applicable benefits", description: "Not published. Any pay information must state currency and location scope; benefits require country, role and eligibility approval." },
  ],
  eligibility: {
    title: "Check the terms of each role.",
    description: "These details must come from the approved role source, not a company-wide assumption.",
    fields: [
      { label: "Country eligibility & hiring region", value: "Not published" },
      { label: "Attendance & work location", value: "Not published" },
      { label: "Relocation & visa / sponsorship", value: "Not published" },
      { label: "Employee vs contractor terms", value: "Not published" },
    ],
  },
  processNotice: { title: "Process and candidate notices", description: "Not published. Recruiting expectations, the candidate privacy notice and any confirmed interview-adjustment route belong with the live role." },
  applyAction: "Apply unavailable",
  applyNote: "There is no live role or approved application endpoint. Review current roles when authoritative information is available; do not submit candidate details through this page.",
};

export const HIRING_EXPECTATIONS_DATA = {
  eyebrow: "HIRING EXPECTATIONS",
  title: "A process specific to the role.",
  description: "Approved recruiting information should help you know what to expect—without inventing a standard sequence or promising a timeline.",
  cards: [
    { title: "Role-specific information", description: "Process details have not been supplied. Assessments, interviews, offers or checks should be described only where approved for the role." },
    { title: "Confirmed communication", description: "Recruiting is the source for communication expectations. No acknowledgment, feedback or decision timeframe is guaranteed here." },
    { title: "A receipt is not an outcome", description: "An application receipt is valid only when confirmed by the recruiting system. It is not a promise of review, interview or selection." },
  ],
};

export const EMPLOYER_INFO_DATA = {
  eyebrow: "EMPLOYER INFORMATION",
  title: "Employment terms, not assumptions.",
  description: "Benefits, workplace arrangements and culture information must be approved before publication. The exact terms belong with the role and its country of employment.",
  companyContext: {
    title: "Understand the company behind the infrastructure.",
    description: "Explore ZoikoTax's telecom fiscal-control context. Product positioning is not a statement about employee experience or workplace policy.",
    action: "About ZoikoTax",
  },
  termsStatus: {
    badge: "Employer terms not published",
    title: "What to check in each approved role",
    paragraphs: [
      "Salary, bonus and equity; health and retirement; leave; equipment and learning benefits are unavailable pending role, country and eligibility approval.",
      "Workplace and work-mode details are not published. Do not assume remote work, a particular office, relocation support or sponsorship.",
    ],
    footnote: "No approved culture statements, employer awards or employee testimonials have been supplied.",
  },
};

export const APPLYING_DATA = {
  eyebrow: "APPLYING",
  title: "One authoritative application route.",
  description: "Applications belong in the approved recruiting system, not in a duplicate form on this page.",
  availability: {
    badge: "Application destination not supplied",
    title: "No application can be started here yet.",
    description: "A live role, approved external destination and candidate notices must be available before applying is enabled. The recruiting system is the source of truth for submission and receipt.",
    applyAction: "Apply unavailable",
    nextStepNote: "Return to current roles for verified listings. Do not send a résumé or personal details through a general sales or marketing channel.",
    viewRolesAction: "View current roles",
  },
  recovery: [
    { title: "A role is no longer open", description: "Closed, filled or withdrawn roles should not appear as open. Return to current listings rather than using an old application link." },
    { title: "An application route is unavailable", description: "Applying stays disabled when a destination or source cannot be verified. No successful submission or receipt is implied." },
  ],
  statusExplanations: {
    title: "Understanding role availability",
    description: "These are explanatory lifecycle states, not the status of any published vacancy.",
    rows: [
      { status: "Draft", description: "Unpublished until approved." },
      { status: "Open", description: "Apply enabled only for a verified current role and approved endpoint." },
      { status: "Paused", description: "Source instructions determine whether to hide the role or disable applying." },
      { status: "Filled / Closed", description: "Removed from open results; no new application action." },
      { status: "Withdrawn", description: "Unpublished." },
      { status: "Source or link unavailable", description: "Applying disabled; broken links require owner attention. Sync failures fail closed, not as stale openings." },
    ],
  },
};

export const CANDIDATE_CARE_DATA = {
  eyebrow: "CANDIDATE CARE",
  title: "Know where your information goes.",
  description: "Candidate notices and confirmed adjustment information need to accompany an approved application route.",
  safeguards: [
    { title: "Candidate privacy", description: "An approved recruiting system owns application data. Its candidate privacy notice has not been supplied. No retention period is stated here. Marketing consent must not be bundled with an application; any supported talent pool requires separate, explicit consent." },
    { title: "Interview adjustments", description: "An approved accommodation route and confirmed interview-adjustment information have not been supplied. No unsupported contact channel or assistance mechanism is promised. These details remain a dependency before applying is enabled." },
  ],
  navigation: {
    title: "Finding information on this page",
    paragraphs: [
      "Use the section navigation to follow roles, role details and applying in reading order. Filters have visible labels; unavailable actions are identified in words, not color alone.",
      "Published job links should name the role, with readable metadata for reflow and printing. Clear errors, visible focus and comfortable targets are part of the design—not a claim of accessibility certification or a completed audit.",
    ],
  },
  measurement: {
    title: "Privacy-safe recruiting measurement",
    paragraphs: [
      "The permitted approach is categorical: query length and result count; filter type and selected count; published job identifier, team, location and action placement.",
      "Raw searches, names, emails, résumés and sensitive candidate data must not enter funnel measurement. This describes the intended privacy boundary, not a claim that tracking is active.",
    ],
  },
};

export const FAQ_DATA = {
  eyebrow: "CAREERS FAQ",
  title: "Direct answers. No assumed terms.",
  items: [
    { question: "Are there current ZoikoTax roles?", answer: "No current public roles are listed on this page. A verified recruiting source has not been supplied, so this does not establish whether other hiring activity exists." },
    { question: "Where would I work? Is remote work available?", answer: "Location, hiring region, attendance and work mode are role-specific. None has been published. No global remote, hybrid, relocation or sponsorship policy is implied." },
    { question: "What employment types are available?", answer: "No employment types are published. Employee or contractor status and country eligibility must be stated in the approved role." },
    { question: "What is the hiring process?", answer: "Approved role-specific process information has not been supplied. Interview stages, assessments, checks and timelines are not assumed. Only the recruiting system can confirm receipt." },
    { question: "Where can I find employer information?", answer: "About ZoikoTax provides company context. Compensation, benefits, workplace and culture information require separate approval and appropriate role, country and eligibility scope." },
    { question: "How do I apply?", answer: "Apply only through the approved recruiting destination attached to a current open role. No live role or application endpoint has been supplied, so applying is unavailable here." },
    { question: "What if a role is closed or the application link is unavailable?", answer: "Return to current listings. Closed, filled and withdrawn roles should not be shown as open. When a source or application link cannot be verified, applying remains disabled." },
    { question: "Where are the candidate privacy notice and adjustment details?", answer: "Neither an approved candidate privacy notice nor an accommodation route has been supplied. These must be confirmed alongside the application destination before applying is enabled." },
  ],
};

export const GOVERNANCE_DATA = {
  eyebrow: "PUBLICATION INTEGRITY",
  title: "Keeping role information current.",
  description: "A clear approval and review model protects the information you use to decide. These are responsibilities—not named reviewers or a record of completed approvals.",
  roles: [
    { title: "Recruiting source", description: "Openings, process and candidate communication." },
    { title: "Hiring manager", description: "Role scope and required versus preferred qualifications." },
    { title: "People", description: "Benefits, employment terms and per-role work mode." },
    { title: "Legal", description: "Candidate notices and approved privacy information." },
    { title: "Editorial", description: "Clear, accurate and visitor-readable publication." },
    { title: "Engineering", description: "Verified source synchronization and safe application routing." },
  ],
  readiness: {
    title: "Only approved, current information belongs here.",
    badge: "Publication approvals pending",
    paragraphs: [
      "Current roles and employer information require source, legal, privacy, accessibility, application-route and data-sync approval. Stale, closed or withdrawn listings must not appear as open.",
      "Application actions remain blocked until the live role, destination, candidate notices and adjustment dependencies are approved. This page's design approval does not establish live vacancies or completed release approval.",
    ],
  },
};

export const RELATED_INFO_DATA = {
  eyebrow: "RELATED INFORMATION",
  title: "Company context. Current role information.",
  cards: [
    { title: "About ZoikoTax", description: "Understand the telecom tax, compliance and enterprise infrastructure behind the work.", action: "About ZoikoTax", variant: "secondary" as const, hasPhoto: true },
    { title: "Careers", description: "Your destination for current public roles and approved employer information. No live roles are listed at this time.", action: "View current roles", variant: "primary" as const, hasPhoto: false },
  ],
};

export const CLOSING_BAND_DATA = {
  title: "Explore the work. Verify the role.",
  description: "Start with current roles and the approved information that matters to your decision.",
  actions: [
    { label: "View current roles", variant: "primary" as const },
    { label: "About ZoikoTax", variant: "secondary" as const },
  ],
};
