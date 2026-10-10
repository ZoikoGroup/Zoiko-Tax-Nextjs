export const HERO_DATA = {
  eyebrow: "TRUST / COMPLIANCE & CERTIFICATIONS",
  title: "Make regulatory requirements traceable from source to action.",
  description:
    "See how ZoikoTax is designed to connect telecom regulatory obligations, accountable workflows and evidence to governed fiscal decisions. Availability must be verified for each market and capability.",
  actions: [
    { label: "View Current Coverage", variant: "secondary" as const },
    { label: "Book a Demo", variant: "primary" as const },
  ],
  disclaimer: "This page describes product architecture, not a legal compliance certification or legal advice.",
  statement: "Requirements become manageable when their scope, ownership and evidence are explicit.",
};

export const DIRECT_ANSWER_DATA = {
  eyebrow: "Direct answer",
  title: "What is regulatory compliance in ZoikoTax?",
  description:
    "Regulatory compliance refers to governed work to understand applicable telecom fiscal requirements, identify obligations, assign responsibility, track supported processes and preserve evidence. ZoikoTax is designed to connect these activities with tax and billing workflows; each available capability and market must be confirmed from current coverage records.",
  scope: [
    {
      title: "In scope",
      description:
        "Workflow governance, explicit scope and evidence. Connect requirement review to ownership, supported processes and retained decisions.",
    },
    {
      title: "Not a guarantee",
      description:
        "Guaranteed legal compliance, independent legal interpretation and universal filing support are outside this page's claims.",
    },
  ],
  disclosure:
    "Regulatory requirements, product feature support, market/capability coverage, customer execution and independent legal conclusions are separate questions—not a single “compliant” status.",
  destination: { title: "Explore Regulatory Obligations", note: "Information pending" },
};

export const REQUIREMENT_SOURCE_DATA = {
  eyebrow: "Requirement traceability",
  title: "From a source to an accountable outcome.",
  description:
    "Make purpose, ownership and review explicit at every handoff. A source is not a binding automated legal interpretation.",
  conceptualNote: "Conceptual workflow · Illustrative-only schematic. No verified source records supplied.",
  stages: ["Source", "Applicability", "Obligation", "Assignment", "Action", "Evidence"],
  tableColumns: ["Step", "Purpose and required context", "Owner / review boundary", "Source / scope status"],
  tableRows: [
    ["Source", "Issuing authority, document reference, jurisdiction, effective date and document version.", "Regulatory content owner", "Not published"],
    ["Applicability", "Service category, transaction context, scope and owner review.", "Enterprise owner + tax/legal review", "Requires review"],
    ["Obligation", "Registration, reporting, filing or another supported action category.", "Regulatory content + product scope review", "Not confirmed"],
    ["Assignment", "Responsible organization function and approval/checkpoint.", "Enterprise owner", "Not published"],
    ["Action", "Configured process and handoff; source-of-truth controls remain in their owning systems.", "Product implementation + downstream owner", "Not confirmed"],
    ["Evidence", "Rule version, decisions, approvals and available export/reference.", "Evidence owner + authorized reviewer", "Unavailable"],
  ],
  disclosure:
    "Regulatory content authority, product implementation authority and Trust assurance authority remain distinct. No fictitious law citation or inferred legal action is represented.",
  actions: [
    { label: "View Current Coverage", variant: "secondary" as const },
    { label: "Book a Demo", variant: "primary" as const },
  ],
};

export const MARKET_COVERAGE_DATA = {
  eyebrow: "Current coverage",
  title: "Verify the market. Verify the capability.",
  description:
    "This preview hands off to authoritative coverage records. It is not a second registry, and product architecture does not establish live readiness.",
  filters: [
    { label: "Market search", value: "Search published markets" },
    { label: "Capability", value: "All capabilities" },
    { label: "Stage / status", value: "All published stages" },
    { label: "Sort choices", value: "Market A–Z" },
  ],
  filterFootnote: "Sort choices: Market A–Z / Last updated newest. Static preview; no market or stage is preselected.",
  unavailable: {
    title: "Coverage details temporarily unavailable",
    description:
      "No approved market/capability records are available for this preview. Live readiness is Not confirmed. Missing data must not be read as “unsupported.”",
    actions: [
      { label: "View Current Coverage", variant: "secondary" as const },
      { label: "Book a Demo", variant: "primary" as const },
    ],
  },
  recordAffordance: { left: "Illustrative schema · no market records", right: "View coverage record · Unavailable" },
  tableColumns: ["Market / pack", "Capability", "Status", "Effective version", "As-of date", "Restrictions / notes", "Authoritative link"],
  tableRows: [
    ["Not published", "Not published", "Not confirmed", "Not published", "Not published", "Source required", "Unavailable"],
  ],
  guidance: {
    title: "Read a status only within its published scope.",
    description:
      "Source-defined stages: Production · Managed · Pilot · Validation · Research. Stage meanings and scope must come from the owning coverage record; they are not assigned here. Pilot, Validation and Research are not general production availability.",
    unknownStates: [
      "Unknown / Not confirmed: current readiness cannot be established.",
      "Not published: a source record or field has not been supplied. This is distinct from a negative support decision.",
    ],
  },
  footnote:
    "State guidance—not concurrent live states: Loading → wait for authoritative records. No matching published records → reset filters. Stale → verification required. Error → use the static coverage overview. Permission denied → no protected details; use the approved contact path.",
};

export const OBLIGATIONS_LIFECYCLE_DATA = {
  eyebrow: "Regulatory obligations",
  title: "Identify the obligation. Govern each next step.",
  description:
    "Detection does not establish completion. Preparation, filing, submission, payment and legal sign-off remain distinct actions.",
  conceptualNote: "Conceptual workflow · submission and handoff are conditional",
  stages: ["Identify trigger", "Validate applicability", "Assign owner", "Prepare", "Review / approve", "Submit or hand off (if supported)", "Preserve evidence"],
  disclosure:
    "Requires external process unless filing or remittance is proven for the covered scenario. No implemented filing workflow, deadline or due-date computation is asserted.",
  schemaTitle: "Illustrative schema · obligation record",
  schemaFields: [
    "Obligation type", "Source reference", "Relevant service / jurisdiction", "Owner",
    "Due-date authority", "Current stage", "Downstream system",
  ],
  states: [
    { title: "Draft", description: "Prepared information is not approved or completed." },
    { title: "Past due", description: "An authoritative due date has passed; no dates or calculations are shown here." },
    { title: "Blocked", description: "A required dependency or approval prevents progression." },
    { title: "Disputed applicability", description: "The obligation’s scope remains unresolved." },
    { title: "Withdrawn authority", description: "The underlying authority is no longer current." },
  ],
  statesFootnote: "These are purpose-specific definitions, not actual obligation items or alerts.",
  destination: { title: "Regulatory Obligations", note: "Information pending" },
  action: { label: "Book a Demo", variant: "primary" as const },
};

export const RESPONSIBILITY_DATA = {
  eyebrow: "Responsibility and authority",
  title: "Accountability stays with the right authority.",
  description:
    "Legal judgment, product implementation and assurance review have different owners. A platform workflow does not transfer statutory responsibility.",
  disclosure: "The platform does not assume the customer’s statutory duty.",
  photoCaption: "Human review, explicit ownership, governed scope.",
  tableColumns: ["Actor", "Responsibility", "Boundary"],
  tableRows: [
    ["Regulator / issuing authority", "Publishes and revises rules, obligations and guidance.", "Regulatory source authority."],
    ["Enterprise owner", "Determines operational responsibilities, approves configurations and manages required actions.", "Customer configuration and operational execution."],
    ["Tax and legal advisers", "Provide necessary interpretation/advice under customer engagement.", "Independent professional interpretation."],
    ["ZoikoTax", "Operates approved product controls, content/workflows and evidence within supported scope.", "Product implementation—not customer legal sign-off."],
    ["Integrations / partners", "Own system-specific state and handoff by governed contract.", "Downstream obligations remain with owning systems."],
  ],
  destination: { title: "Explore Trust", note: "Information pending" },
  action: { label: "Book a Demo", variant: "primary" as const },
};

export const REGULATORY_CHANGE_DATA = {
  eyebrow: "Regulatory change",
  title: "Review the change before changing the control.",
  description:
    "A new source version prompts impact review—not an automatic legal update or a silent change to production.",
  disclosure:
    "Requires review · Missing or conflicting sources do not authorize a guessed legal action. Last approved known version and as-of date: Not published.",
  schemaTitle: "Illustrative schema · source-change review",
  schemaFields: ["Source version", "Date observed", "Applicable scope", "Reviewer", "Effective date", "Superseded source", "Impact summary"],
  versionCards: [
    { title: "Prior source version", description: "Not published. No dated history or approved source has been supplied." },
    { title: "Proposed source version", description: "Source required. Compare scope, changes and authority through governed review." },
    { title: "Dependent decisions", description: "Identify linked records and re-evaluation needs before any configured change." },
  ],
  reviewStatesTitle: "Review meanings · definitions, not actual approvals",
  reviewStates: [
    { title: "New", description: "Source received; applicability and authority are not yet approved." },
    { title: "Pending applicability", description: "Service, transaction and jurisdiction scope await review." },
    { title: "Under review", description: "Assigned human review is in progress." },
    { title: "Approved for configured scope", description: "Approval applies only to the recorded scope and controls." },
    { title: "Replaced", description: "A superseding source requires dependent decisions to be reviewed." },
    { title: "Withdrawn", description: "Source removed from the current authoritative summary." },
    { title: "Unsupported", description: "Scope is outside the confirmed product implementation." },
  ],
  aiDisclosure:
    "No unapproved source or generative AI output may automatically override production controls. AI assistance cannot authorize consequential legal or product status; approved sources, human authority and deterministic controls remain decisive.",
  destination: { title: "Content governance", note: "Information pending" },
};

export const EXCEPTIONS_DATA = {
  eyebrow: "Exceptions and escalations",
  title: "Make uncertainty visible. Keep escalation governed.",
  description:
    "Illustrative triage—not a live customer action center. No severity, liability or current emergency is inferred from these categories.",
  categories: [
    { title: "Unsupported market", description: "Scope has no confirmed supported process." },
    { title: "Evidence incomplete", description: "Required record or provenance is missing." },
    { title: "Applicability unclear", description: "Relevant service, jurisdiction or transaction scope is unresolved." },
    { title: "Source conflict", description: "Authorities or source versions require reconciliation." },
    { title: "Expiry", description: "Source validity requires renewed review." },
    { title: "Integration failure", description: "A downstream dependency or handoff needs investigation." },
    { title: "Review overdue", description: "An authoritative review checkpoint has not been completed." },
  ],
  tableColumns: ["Type", "Source / capability", "Owner role", "Severity definition", "Last reviewed", "Next approved action"],
  tableRows: [
    ["Illustrative only", "Not published", "Compliance owner (conceptual)", "Not published; source required", "Not published", "Requires review"],
  ],
  stages: ["Compliance owner", "Tax / legal review", "Controlled configuration or external handoff"],
  disclosure:
    "Missing or conflicting information stays Requires review. Scenario-specific evaluation must establish scope and the next approved action.",
  action: { label: "Book a Demo", variant: "primary" as const },
};

export const INTEGRATIONS_DATA = {
  eyebrow: "Integrations and fiscal boundary",
  title: "Fit the architecture. Preserve the boundaries.",
  description:
    "Conceptual architecture—not a connector catalog. APIs, connectors, partner support and capability coverage require controlled evidence.",
  systems: [
    { title: "BSS / OSS", description: "Transaction facts and service context" },
    { title: "Tax engines", description: "Approved determination boundary" },
    { title: "ERP / general ledger", description: "Accounting and reconciliation handoff" },
    { title: "E-invoicing / CTC network", description: "Downstream delivery where supported" },
    { title: "Source registry", description: "Controlled sources and versions" },
    { title: "Regulatory operations", description: "Owner review and supported obligations" },
  ],
  systemStatus: "Support not confirmed",
  handoff: {
    label: "Conceptual workflow",
    stages: ["Transaction facts", "Governed determination", "Obligation / reconciliation handoff", "Reviewed evidence"],
    description:
      "Product controls and evidence are separate from downstream filing, delivery and payment. A prepared handoff does not prove completion in the receiving system.",
  },
  disclosure:
    "Dependency unavailable never implies successful submission, delivery or payment. Owning systems retain their source-of-truth state and approved controls; no partner connector is asserted here.",
  destination: { title: "Developers overview", note: "Information pending" },
  action: { label: "Book a Demo", variant: "primary" as const },
};

export const ADJACENT_ASSURANCE_DATA = {
  eyebrow: "Compliance & certifications",
  title: "Different questions. Distinct assurance scopes.",
  description: "These are separate Trust destinations, not interchangeable proof of regulatory compliance.",
  destinations: [
    { title: "Certifications", description: "Source-verified certificates and attestations only. Not equivalent to regulatory compliance.", note: "Information pending", current: false },
    { title: "Audit Reports", description: "Scoped third-party or authorized audit evidence only when approved.", note: "Information pending", current: false },
    { title: "Industry Standards", description: "Alignment mappings with exact support and version qualifiers.", note: "Information pending", current: false },
    { title: "Regulatory Compliance", description: "Current page: requirement-to-obligation governance.", note: "Current page", current: true },
  ],
  footnote: "No certificate, audit evidence or standards support has been supplied for public publication. Unpublished destinations are noninteractive.",
};

export const FAQ_DATA = {
  eyebrow: "FAQ",
  title: "Direct answers. No implied guarantees.",
  items: [
    {
      question: "Does ZoikoTax make a company compliant?",
      answer:
        "No software page can establish a customer’s compliance by itself. Actual compliance depends on applicable law, configured processes, execution, review and current evidence.",
    },
    {
      question: "Is every jurisdiction supported?",
      answer: "No universal coverage claim is made. Consult current capability-specific coverage data.",
    },
    {
      question: "Does ZoikoTax replace legal or tax counsel?",
      answer: "No. Regulatory interpretation and advice remain with authorized professionals.",
    },
    {
      question: "Are certifications the same as regulatory compliance?",
      answer:
        "No. Certifications and audit reports reflect specific assurance scopes; regulatory obligations depend on the particular activity and jurisdiction.",
    },
  ],
};

export const SCOPED_EVALUATION_DATA = {
  title: "Evaluate regulatory obligations with scope and evidence in view.",
  description:
    "Start with your market, capability and operating context. The approved demo form handles regulated inquiries; no extra sensitive information is requested on this public page.",
  actions: [
    { label: "Book a Demo", variant: "primary" as const },
    { label: "View Current Coverage", variant: "locked" as const },
  ],
};
