export const HERO_DATA = {
  eyebrow: "INDUSTRY STANDARDS",
  title: "Industry standards, mapped to what we can substantiate.",
  description:
    "Explore how approved telecom, tax, security and interoperability references inform ZoikoTax design, controls and operating practices. Each published entry identifies its scope and evidence status. Referencing a standard is not a claim of certification or universal compliance.",
  actions: [
    { label: "Book a Demo", variant: "primary" as const },
    { label: "Explore Standards", variant: "secondary" as const },
  ],
  destination: { title: "Visit Trust Center", note: "Information pending" },
  footnote: "Scope first. Evidence second. No claim beyond what is approved.",
  answer: {
    eyebrow: "Direct answer",
    title: "What does referencing a standard mean?",
    body:
      "An industry standard is a published framework, method or technical specification. ZoikoTax may reference standards in approved design and operational controls; the specific edition, implementation scope and evidence status determine what can be claimed. Referencing a standard alone does not establish compliance or certification.",
  },
};

export const FAMILY_OVERVIEW_DATA = {
  eyebrow: "Standards families",
  title: "Start with the context that matters.",
  description: "Five editorial lenses for evaluating scope, relationships and evidence.",
  families: [
    { title: "Telecom & industry frameworks", description: "Relevant telecom process and service frameworks, where approved mappings exist." },
    { title: "Tax and regulatory references", description: "Methodology and source context. Legal obligations remain jurisdiction-specific and counsel-owned." },
    { title: "Security & assurance", description: "Controls and independent evidence, distinguished from certification." },
    { title: "Privacy & data governance", description: "Scoped processing and data practices under approved authority." },
    { title: "Technical interoperability", description: "Standards references tied to verified technical patterns, not universal protocol support." },
  ],
  footnote: "Families are editorial categories—not claims that all standards in a family are implemented.",
};

export const CATALOGUE_DATA = {
  eyebrow: "Standards catalogue",
  title: "Explore only what can be verified.",
  description: "Only approved entries publish. Search and filters apply to a verified public register when one is available.",
  keyLabel: "READ THE RELATIONSHIP FIRST · DEFINITIONS, NOT RECORD STATUSES",
  relationshipKey: [
    { title: "Reference only", description: "Context; no implementation claim." },
    { title: "Design mapped", description: "Design relation under review." },
    { title: "Implemented", description: "Engineering verified; scoped capability." },
    { title: "Assessed", description: "Third-party review; defined scope." },
    { title: "Certified", description: "Approved certificate; scope owned by Certifications." },
  ],
  search: { label: "Search keyword or identifier", placeholder: "Enter a keyword or approved identifier" },
  filters: [
    { label: "Sort by", value: "Title A–Z" },
    { label: "Family", value: "All families" },
    { label: "Relevance", value: "All relevance" },
    { label: "Relationship", value: "All relationships" },
    { label: "Currentness", value: "All currentness" },
  ],
  registerLabel: "Public register column model · No approved records supplied",
  tableColumns: ["Standard / framework", "Edition", "Family", "Relevance", "Claimed relationship / status", "Scope", "Evidence type", "Last confirmed", "Detail action"],
  emptyState: {
    title: "No verified public standards entries are available",
    description:
      "The absence of published entries is not a negative compliance finding. No names, editions or evidence statuses are inferred from missing source records.",
    actions: [
      { label: "Book a Demo", variant: "primary" as const },
      { label: "Trust Center", variant: "pending" as const },
    ],
  },
  guidance: [
    { label: "FILTER STATE GUIDANCE", description: "If a verified register returns no matches, clear or reset filters. This is different from an empty register." },
    { label: "SOURCE STATE GUIDANCE", description: "Information temporarily unavailable — when sources cannot be retrieved, withhold positive claims. Sort may also use Last confirmed." },
  ],
};

export const DETAIL_STRUCTURE_DATA = {
  eyebrow: "Reading a standards record",
  title: "The claim and its limits belong together.",
  description: "Illustrative detail structure — approved standards record required",
  summaryTitle: "What an approved detail would contain",
  summaryDescription: "No record-specific values are supplied. The fields below define the structure; they do not describe an implemented standard.",
  summaryBadge: "Not confirmed",
  fields: [
    { label: "Full approved name / edition", description: "The exact approved title and edition—not an inferred name or the newest edition by default." },
    { label: "Publisher", description: "The authoritative issuing body, confirmed against the registered source." },
    { label: "Role in the platform", description: "The specific design or operating purpose the reference informs." },
    { label: "Applicable capabilities", description: "Only capabilities covered by an approved, verified mapping." },
    { label: "Explicitly excluded scope", description: "Excluded activities, markets and capabilities sit next to the claim—not in a footnote." },
    { label: "Related implementation controls", description: "Scoped engineering evidence linking the reference to verified controls." },
    { label: "Relationship / evidence status", description: "The approved relationship and evidence class, without implying a higher status." },
    { label: "Source URL", description: "An approved public citation where permitted; restricted source material is not exposed." },
    { label: "Approval owner", description: "The accountable approver for the record and its public wording." },
    { label: "Review date", description: "The recorded confirmation and recheck context—not the date this page was created." },
  ],
  scopeNote:
    "A public summary is record-specific and approved. Restricted source evidence requires separate authorization. Unprovided data remains Not confirmed; exclusions must remain adjacent to every scoped claim.",
};

export const EVIDENCE_RELATIONSHIPS_DATA = {
  eyebrow: "Evidence relationships",
  title: "Different meanings. Different evidence.",
  description: "These are relationship definitions—not assertions that ZoikoTax currently holds any of these statuses.",
  relationships: [
    { title: "Reference only", description: "Context, no implementation claim. A published reference may inform discussion without demonstrating a control." },
    { title: "Design mapped", description: "Design relation under review. A documented mapping is not itself proof that engineering has implemented it." },
    { title: "Implemented", description: "Engineering verified for the scoped capability. Evidence must support that capability and its explicit boundaries." },
    { title: "Assessed", description: "Third-party review with its defined scope. The assessment subject and period limit what can be inferred." },
    { title: "Certified", description: "Approved certificate and scope owned by Certifications. Certification or attestation is stated only when legally applicable and evidence is approved." },
  ],
  scopeNote: "No automatic progression. A reference does not become an implementation, assessment or certification by moving through a sequence. There is no numeric compliance score.",
  destination: { title: "Certifications · official certificate and scope", note: "Information pending" },
};

export const TELECOM_TAX_RELEVANCE_DATA = {
  eyebrow: "Telecom fiscal-control infrastructure",
  title: "References in the lifecycle—not a substitute for authority.",
  description: "Conceptual fiscal lifecycle · Approved standard-to-stage mappings are required.",
  stages: [
    { title: "Determine", description: "Context for classification and source interpretation; not a supplied tax rate." },
    { title: "Obligate", description: "Context for responsibility and jurisdiction-specific obligations; counsel owns legal interpretation." },
    { title: "Comply", description: "Context for governed workflows; a reference does not imply automatic filing." },
    { title: "Reconcile", description: "Context for comparing controlled records and resolving differences." },
    { title: "Prove", description: "Context for provenance, approvals and the scope of substantiating evidence." },
  ],
  sequenceLine: "Determine → Obligate → Comply → Reconcile → Prove",
  scopeNote:
    "Unsupported standard-stage mappings are withheld. Global architecture is not global live coverage. Jurisdiction, effective date and capability availability are governed by Coverage. AI can assist; it does not authorize legal, coverage or assurance truth.",
  coverageHandoff: { description: "Check capability-specific production state in your operating context.", action: "View Coverage" },
};

export const INTEROPERABILITY_DATA = {
  eyebrow: "Technical interoperability",
  title: "Validate the pattern. Then define the boundary.",
  description: "A standards mention does not establish protocol or API implementation—or production availability in a market.",
  diagramLabel: "CONCEPTUAL · NOT AN IMPLEMENTATION OR CONNECTOR INVENTORY",
  flow: ["Approved standards reference", "Scoped technical mapping", "Verified version & pattern"],
  boundaries: [
    { title: "BSS / OSS", description: "Billing and operational boundaries. Confirm the specific capability, interface and technical mapping before relying on a pattern." },
    { title: "ERP", description: "Financial-system boundaries. Validate the approved version and integration scope; do not infer connector support." },
    { title: "E-invoicing", description: "Document and submission boundaries. Jurisdiction-specific requirements and production availability remain separately governed." },
  ],
  handoff: {
    title: "Technical scope must be source-confirmed.",
    description: "API and SDK versions, supported patterns and technical documentation are published only when approved sources confirm them. No protocol, endpoint or network support is implied here.",
    destination: { title: "View Technical Integration", note: "Information pending" },
  },
};

export const ASSURANCE_BOUNDARIES_DATA = {
  eyebrow: "Assurance boundaries",
  title: "Five concepts that must not be conflated.",
  description: "Read the evidence class, authority and scope before drawing a conclusion.",
  tableColumns: ["Concept", "Required evidence / authority", "Scope boundary"],
  tableRows: [
    ["Standards reference", "Approved edition and source citation.", "Context only; no implemented-control or compliance claim."],
    ["Implemented controls", "Scoped engineering verification and approved control evidence.", "Only the verified capability and boundaries; not certification."],
    ["Certification", "Approved certificate validity record and defined scope.", "Named subject, scope and validity; owned by Certifications."],
    ["Audit report", "Authorized assessment evidence with subject and assessment period.", "Independent audit is not automatically certification."],
    ["Legal / regulatory obligation", "Relevant activity, jurisdiction and effective authority; counsel-owned interpretation.", "Legal compliance is not established by standards alignment."],
  ],
  scopeNote: "A standards reference is not implementation, independent assessment, certification, legal regulatory compliance or market availability. Each needs its own approved evidence and authority.",
  destinationsLabel: "Separate assurance destinations · Routes awaiting confirmation",
  destinations: ["Security", "Certifications", "Audit Reports", "Regulatory Compliance", "Privacy", "Trust Center"],
  destinationsNote: "Information pending",
};

export const EVIDENCE_CURRENTNESS_DATA = {
  eyebrow: "Evidence & currentness",
  title: "Current is a source condition—not a marketing label.",
  description: "Edition, source, scope, version and review due govern whether a record can substantiate a claim.",
  publicConfirmation: {
    title: "Public confirmation",
    fields: [
      { label: "Evidence status", value: "Not confirmed" },
      { label: "Last confirmed", value: "Not provided" },
      { label: "Currentness", value: "Not provided" },
    ],
    footnote: "No approved date or owner is supplied. Metadata is displayed only from an approved source—not generated by AI.",
  },
  restrictedAccess: {
    title: "Restricted materials need authorization.",
    description: "Use the approved request pathway and access rules once confirmed. A request receipt confirms submission only—not an access grant, report delivery or a promised response time. No confidential files or source URLs are shown here.",
    destination: { title: "Request authorized evidence", note: "Information pending" },
  },
  states: [
    { title: "Pending / no evidence / unresolved", status: "Not confirmed", description: "No positive claim without approved evidence. Missing, unknown or conflicted sources fail closed." },
    { title: "Expired / stale", status: "Not current / recheck required", description: "An overdue or expired source cannot sustain a current positive claim." },
    { title: "Withdrawn / revoked", status: "No positive claim", description: "Suspend the relationship claim and review the affected scope." },
    { title: "Source outage", status: "Information temporarily unavailable", description: "Withhold a positive claim until authoritative source access is restored." },
    { title: "Access denied", status: "Non-enumerating response", description: "Do not reveal whether a restricted artifact exists or disclose its identifiers." },
  ],
  scopeNote: "Public definitions remain freely accessible. Sensitive evidence is available only through approved authorization; it is not a public download or a demo-gated definition.",
};

export const REVIEW_METHODOLOGY_DATA = {
  eyebrow: "Review methodology",
  title: "A controlled path from source to public claim.",
  description: "Conceptual publishing path · Not a claim that any record has completed these steps.",
  stages: [
    { title: "Source registration", description: "Confirm source, edition and authority." },
    { title: "Owner interpretation", description: "Define the technical relationship." },
    { title: "Engineering verification", description: "Verify implementation and publication gates." },
    { title: "Legal/Security review", description: "Review wording and assurance evidence." },
    { title: "Public approval", description: "Approve capability scope and public claims." },
    { title: "Scheduled recheck", description: "Revisit currentness and material changes." },
  ],
  sequenceLine: "Source registration → Owner interpretation → Engineering verification → Legal/Security review → Public approval → Scheduled recheck",
  authority: {
    title: "Ownership is specific. Approval is shared.",
    paragraphs: [
      "Claim owners define technical relationships. Legal/Compliance owns public wording, Security owns assurance review, Product confirms capability scope, and Engineering enforces verification and publication gates.",
      "Material edition changes or revoked evidence trigger review and claim suspension—not a silently persisted positive claim. Version history appears only if maintained; no dated records are supplied here.",
    ],
  },
  scopeNote: "Invalid identifiers, mismatched scope, expired evidence and missing approval block publication. No missing or conflicted source defaults to a positive claim.",
};

export const BUYER_PATHWAYS_DATA = {
  eyebrow: "Buyer pathways",
  title: "Follow the evidence for your decision.",
  description: "Contextual pathways—not promises of certification, protocol support or market readiness.",
  scenarios: [
    { title: "Procurement", description: "Choose a family → inspect version and scope → verify evidence → request authorized materials → scope a demo. Evaluate the claim, its exclusions and the evidence class before procurement decisions." },
    { title: "Engineering", description: "Interoperability family → approved technical mapping → verify version and implementation → governed developer docs. An unverified protocol remains unverified; a reference is not an integration promise." },
    { title: "Alignment vs certification", description: "Relationship status → Certifications for an approved certificate if one exists → Audit Reports for authorized report access → return to standards. These are distinct evidence classes, not substitute claims." },
  ],
};

export const FAQ_DATA = {
  eyebrow: "Frequently asked questions",
  title: "Direct answers. No inflated claims.",
  items: [
    {
      question: "Does alignment mean certification?",
      answer: "No. Alignment may describe a reference or a scoped design relationship; certification requires an approved certificate and its defined subject, scope and validity. Implementation and independent assessment are also separate evidence classes. Only approved, legally applicable evidence supports a certification claim, and the official certificate record belongs to Certifications.",
    },
    {
      question: "How do you verify current scope?",
      answer: "Check the approved edition, capability scope, exclusions, approval owner and recorded review date against the authoritative source. Confirm that evidence remains applicable and a recheck is not overdue. None of those record-specific values is supplied here. Missing, stale or conflicted information remains Not confirmed rather than becoming a positive claim.",
    },
    {
      question: "Does a standard mean coverage in every market?",
      answer: "No. A standard reference does not establish jurisdiction readiness or production availability. Coverage is capability-specific and depends on the relevant operating context, jurisdiction and effective date. View Coverage for the governed production state. A global architecture is not a promise that every service, integration or capability is live in every market.",
    },
    {
      question: "Where are reports available?",
      answer: "Reports belong to the separate Audit Reports destination and are available only through approved routes and authorization where applicable. Public standards definitions are not restricted, but confidential evidence is not a public download. The report-request route is unconfirmed here. A submission receipt would confirm the request only, not access approval or delivery.",
    },
    {
      question: "What happens when standards change?",
      answer: "Material edition changes trigger owner interpretation, engineering verification and Legal/Security review before updated public approval. Revoked or expired evidence can require claim suspension and a currentness recheck. A prior positive claim must not silently persist. Version history is shown only when maintained; no dated change records or approved standards records are supplied here.",
    },
  ],
};

export const CLOSING_CTA_DATA = {
  title: "Review standards in your operating context.",
  description: "Bring your capability scope, evidence questions and integration boundaries to a focused conversation.",
  actions: [
    { label: "Book a Demo", variant: "primary" as const },
    { label: "View Coverage", variant: "secondary" as const },
  ],
  destination: { title: "View Technical Integration", note: "Information pending" },
};
