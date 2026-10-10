export const HERO_DATA = {
  eyebrow: "TRUST · COMPLIANCE & CERTIFICATIONS",
  title: "Understand the assurance behind ZoikoTax.",
  description:
    "Review the types of independent assurance and security evidence relevant to ZoikoTax. Availability, scope and access are confirmed against current approved records.",
  actions: [
    { label: "Explore assurance information", variant: "primary" as const },
    { label: "Request assurance materials", variant: "secondary" as const },
  ],
  demoLink: "Book a Demo →",
  disclaimer: "Certification and audit scope vary by assessed entity, service, control boundary and review period.",
};

export const ASSURANCE_TAXONOMY_DATA = {
  eyebrow: "Direct answer",
  title: "What does certification mean for ZoikoTax?",
  description:
    "Certifications, independent audit reports, and standards alignment are different kinds of assurance. Each applies only to the organization, services, controls and time period described in the underlying approved evidence. The Trust Center provides the appropriate route to examine the current scope and supporting materials.",
  classes: [
    { title: "Certification", description: "Independent confirmation against specified requirements within a stated entity or system and validity scope." },
    { title: "Audit/attestation", description: "An examination and report on a defined subject, controls and reporting period. Not automatically a certificate." },
    { title: "Independent assessment", description: "A scoped external evaluation with its own basis, findings and limitations." },
    { title: "Standards alignment", description: "Mapped practices or controls relative to a named standard. Not proof of certification." },
  ],
  scopeNote: "These definitions describe evidence classes. They do not imply that ZoikoTax has attained a certification or completed an assessment.",
};

export const ASSURANCE_INVENTORY_DATA = {
  eyebrow: "Assurance information",
  title: "Review available assurance information.",
  pending: {
    title: "Current public assurance information is being confirmed. Contact our team for relevant documentation.",
    description: "Unconfirmed public availability is not a statement that no certifications exist. GRC and Legal confirm what may be disclosed against approved records.",
    action: "Request assurance materials",
    note: "Request route pending",
  },
  reading: {
    title: "What to check when approved entries are available",
    description:
      "Review the name and evidence class, controlled status, assessed subject, issuer or assessor, scope, relevant review period or issue and expiry dates, last verification, evidence access and a valid next action. Filters by class, scope and currentness appear only when governed records support them.",
  },
  statusVocab: {
    label: "STATUS VOCABULARY — NOT LIVE RECORD STATUSES",
    items: [
      { title: "Current", description: "Verified, applicable source and valid scope." },
      { title: "Superseded", description: "Replaced by a later record; retained as history." },
      { title: "Expired", description: "Validity has ended; not a current claim." },
      { title: "Pending verification", description: "Source or scope still requires confirmation." },
    ],
  },
  scopeNote:
    "A stale source suppresses “Current.” Withdrawal or revocation removes the claim. Source unavailability calls for a warning and governed request pathway, not a conclusion of “no certifications.”",
};

export const ASSURANCE_SCOPE_DATA = {
  eyebrow: "Read the boundary",
  title: "What an assurance statement covers.",
  description:
    "Scope is record-specific. Approved evidence owners supply the metadata; architecture, company identity or global language cannot establish a catch-all scope.",
  dimensions: [
    { title: "Responsible entity", description: "The legal organization named in the evidence." },
    { title: "Assessed service/system", description: "The particular product, service or system examined." },
    { title: "Boundaries", description: "What is inside and outside the assessment." },
    { title: "Control family/standard", description: "The criteria or control set used for evaluation." },
    { title: "Region/deployment scope", description: "The locations and deployment contexts included." },
    { title: "Review period", description: "The time window to which the evidence applies." },
    { title: "Exclusions", description: "Explicit limitations and items not covered." },
    { title: "Subservice organizations", description: "Third-party services and their treatment in scope." },
    { title: "Version", description: "The applicable record or system version." },
    { title: "Status", description: "The source-controlled validity and currentness." },
    { title: "Evidence owner", description: "The accountable owner of the source and metadata." },
  ],
  viewScope: { title: "View scope →", description: "Contextual detail for an approved entry. No live approved record is shown here." },
  scopeNote: "Assurance does not automatically establish fiscal correctness, local registration or filing readiness.",
};

export const RECORD_DETAIL_DATA = {
  eyebrow: "Evidence reading guide",
  title: "A record should explain its limits.",
  description:
    "An expanded public detail pattern makes the basis, boundary and access policy understandable before a team requests restricted evidence.",
  panelCaption: {
    title: "Illustrative detail structure — approved record required",
    description: "Field explanations only. No certificate name, issuer, dates or current assurance facts are populated.",
  },
  subdivisions: [
    {
      title: "Overview",
      fields: [
        { label: "Record name & classification", description: "Identifies the approved evidence and distinguishes a certificate, report, assessment or alignment." },
        { label: "Currentness & provenance", description: "Shows governed status, issuing or assessing body, evidence owner and last verification." },
      ],
    },
    {
      title: "Scope",
      fields: [
        { label: "Assessed subject & boundaries", description: "Names the responsible entity, service/system, controls, deployment scope and exclusions." },
        { label: "Applicable time & version", description: "Explains the review period, relevant issue or validity dates and record/system version." },
      ],
    },
    {
      title: "Evidence Access",
      fields: [
        { label: "Public summary", description: "Keeps approved metadata and essential scope readable here, not only in a PDF." },
        { label: "Controlled materials", description: "States eligibility and authorized access policy. Sensitive findings and private file titles stay private." },
      ],
    },
    {
      title: "History",
      fields: [
        { label: "Changes & superseded records", description: "Explains revisions and replacement relationships. Historical evidence is not current validity." },
        { label: "Source unavailable", description: "Shows a neutral warning and governed request pathway; no unsupported “Current” status." },
      ],
    },
  ],
  scopeNote:
    "Public summaries explain approved scope. They do not disclose customer audit findings, private records or secure access tokens. A request never creates an entitlement to restricted artifacts.",
};

export const REVIEW_METHODOLOGY_DATA = {
  eyebrow: "Publication governance",
  title: "How assurance is verified and maintained.",
  scopeNote:
    "Conceptual governance model: these steps explain how publication should be governed. They do not assert that a particular certificate exists or that an assessment is complete.",
  lifecycle: ["Assessed", "Evidence approved", "Scope mapped", "Published", "Reviewed/Updated"],
  practices: [
    { title: "Record approval", description: "GRC and Legal approve the evidence, public wording and access classification before publication." },
    { title: "Independent verification", description: "Verify the issuer or assessor and the underlying evidence through an authoritative source." },
    { title: "Scope mapping", description: "Map the assessed entity, services and controls to the product context without widening the boundary." },
    { title: "Currentness checks", description: "Check validity, source availability and the last verified event before presenting a current claim." },
    { title: "Renewal controls", description: "Track relevant validity and replacement evidence. A renewal expectation is not a renewed claim." },
    { title: "Corrections", description: "Recheck discrepancies, suppress stale claims and remove withdrawn or revoked statements." },
  ],
  footnote: "The audit owner retains the source evidence and last-checked event. No issuance date, renewal timeframe or review schedule is implied here.",
};

export const MATERIALS_REQUEST_DATA = {
  eyebrow: "Purpose-scoped access",
  title: "Request relevant assurance materials.",
  description:
    "Public explanatory information is open. Restricted artifacts require an eligible, authorized request; a demo or sign-in is not required to understand assurance.",
  journeyTitle: "A focused review, not a sales gate.",
  steps: [
    { title: "Choose a document category", description: "Certification, report, assessment or alignment." },
    { title: "Provide company and work email", description: "Use business contact details for eligibility review." },
    { title: "Explain the business purpose", description: "Share only the minimum review context needed." },
    { title: "Identify your relationship", description: "Customer, prospect, partner or auditor." },
    { title: "Region, if needed", description: "Only when required by approved routing." },
    { title: "NDA/access instructions, if approved", description: "Conditional policy requirements, not assumed terms." },
    { title: "Review and submit", description: "Submit only through an approved request service." },
  ],
  form: {
    title: "Assurance materials request",
    note: "Request pathway subject to approved routing and access policy",
    categoryLabel: "Document category",
    categories: ["Certification", "Report", "Assessment", "Alignment"],
    companyLabel: "Company",
    companyPlaceholder: "Company name",
    emailLabel: "Work email",
    emailPlaceholder: "Business email address",
    relationshipLabel: "Relationship",
    relationshipPlaceholder: "Select customer, prospect, partner or auditor",
    purposeLabel: "Business purpose",
    purposePlaceholder: "Describe the review purpose and relevant service or scope.",
    disclaimer: "Do not include sensitive tax, customer or security details. No file upload is requested. Region and NDA/access requirements appear only when necessary and approved.",
    submitLabel: "Request route pending",
    submitNote: "Static pathway preview. Submission is unavailable until the request route and access policy are approved. No immediate access or response time is promised.",
  },
  accessStages: [
    { title: "Public overview", description: "Approved metadata and explanatory scope remain readable without sales or sign-in gating." },
    { title: "Controlled request", description: "Business context is privately reviewed. A receipt acknowledges a request, not entitlement or delivery." },
    { title: "Authorized delivery", description: "Only eligible, authorized recipients receive restricted artifacts through an approved service." },
  ],
  scopeNote:
    "Outcome guidance: pending review, permission denied or source unavailable should use non-enumerating language and never reveal private artifact names. Duplicate or interrupted submissions need safe guidance, not an access promise. Request details remain private and out of URLs, analytics and search.",
};

export const TRUST_BOUNDARIES_DATA = {
  eyebrow: "Related trust topics",
  title: "Different questions. Different evidence.",
  description: "Keep enterprise security, processing scope and historical fiscal evidence distinct.",
  destinations: [
    { title: "Security", description: "Enterprise security assurance concerns the specified systems and controls, not universal tax readiness." },
    { title: "Data Processing & Residency", description: "Privacy, processing roles and residency depend on the stated deployment and data-processing scope." },
    { title: "Evidence & Auditability", description: "Historical fiscal-decision evidence explains inputs, versions and outcomes. It is not a security accreditation." },
  ],
  note: "Information pending",
};

export const REGULATORY_SEPARATION_DATA = {
  eyebrow: "Assurance ≠ market readiness",
  title: "Assurance is not universal regulatory approval.",
  description:
    "A security assurance statement does not establish that every tax capability or regulatory obligation is supported in a market. Check Coverage and the relevant regulatory status for capability-specific production readiness.",
  action: { label: "View Current Coverage →", path: "/coverage/" },
  scopeNote: "Production / Pilot / Validation / Research are coverage labels, not accreditation statuses.",
  footnote:
    "Managed compliance does not create an assurance-equivalent promise. Embedding, OEM and partner scope must be confirmed separately; assurance is not inherited from the ZoikoTax brand or a platform integration.",
};

export const FAQ_DATA = {
  eyebrow: "Frequently asked questions",
  title: "Direct answers. Defined scope.",
  items: [
    {
      question: "Is ZoikoTax SOC 2 certified?",
      lead: "Please request current verified status and scope.",
      answer: "SOC 2 typically produces an examination/attestation report rather than an ISO-style certification. No attained yes or no status is asserted here.",
    },
    {
      question: "Is ISO 27001 certification available?",
      lead: "Please request current verified status and scope.",
      answer: "Availability can only be confirmed against an approved current record. This page does not imply that a certificate exists.",
    },
    {
      question: "How can my security team access assurance documents?",
      answer: "Review approved public metadata and use an approved request pathway. Restricted materials require eligibility and authorization; submitting a request does not grant entitlement.",
    },
    {
      question: "Does an audit report cover every ZoikoTax capability?",
      answer: "A report applies only to its defined entity, systems, controls and reporting period. Do not assume whole-platform, OEM, partner or global coverage.",
    },
    {
      question: "Are tax compliance and security certification the same?",
      answer: "No. Security assurance and fiscal or legal obligations are separate. Verify capability-specific coverage and seek qualified professional interpretation as needed.",
    },
  ],
};

export const TEAM_EVIDENCE_DATA = {
  eyebrow: "A SHARED EVIDENCE REVIEW",
  title: "Review trust evidence with your team.",
  description: "Discuss your review context and the scope your team needs to examine.",
  actions: [
    { label: "Book a Demo", variant: "primary" as const },
    { label: "Visit the Trust Center · Route pending", variant: "secondary" as const },
  ],
  requestLink: "Request assurance materials → See request guidance above",
  footnote: "A commercial conversation is optional, not a requirement to understand public assurance information.",
};
