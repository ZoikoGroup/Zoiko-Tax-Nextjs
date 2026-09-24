export const heroData = {
  breadcrumbs: ["Home", "Platform", "Compliance & Filing"],
  eyebrow: "TELECOM COMPLIANCE & FILING",
  subtitleMobile:
    "ZoikoTax connects governed regulatory obligations to supported return and filing workflows — bringing preparation, validation, review, approval, submission tracking and evidence into one controlled path.",
  title: "Prepare, review and track supported telecom filings with control.",
  subtitle:
    "ZoikoTax is designed to connect governed regulatory obligations to supported return and filing workflows — bringing preparation, validation, review, approval, submission tracking and evidence into one controlled operating path.",
  secondary:
    "Keep the reason for the filing, the data used, the approvals given and the submission outcome connected instead of reconstructing them later.",
  disclosure:
    "* Capability coverage varies strictly by active country and regulatory packs. Autonomous approval or direct fund movement is out of scope.",
};

export const directAnswer = {
  eyebrow: "Direct Answer",
  title: "What is ZoikoTax Compliance & Filing?",
  description:
    "ZoikoTax Compliance & Filing is a dedicated workflow layer for preparing, validating, reviewing, approving, and tracking telecom returns and regulatory filings. By grounding every filing in its originating regulatory obligation, the platform preserves the context of approvals, versions, notices, and durable evidence.",
};

export const boundaryComparison = {
  supports: {
    title: "What the platform supports",
    items: [
      "Inheriting obligations and rules per country pack",
      "Structured workpapers and validation checks",
      "Preparer, reviewer, and approver segregation",
      "Submission and receipt tracking where supported",
      "Notices, rejections, and amendment lineages",
      "Immutable evidence trails for historical replay",
    ],
  },
  outOfScope: {
    title: "What remains out of scope",
    items: [
      "Claims of universal country or channel coverage",
      "Autonomous AI signature, filing, or approval",
      "Direct electronic submission in unsupported zones",
      "Filing execution without prior customer sign-off",
      "Fiduciary fund custody, payment, or escrow",
      "Substituting for professional legal or tax advice",
    ],
  },
};

export const whyHardSectionHeader = {
  eyebrow: "Operational Complexity",
  title: "Why telecom compliance and filing is structurally hard",
  mobileTitle: "Why telecom compliance is structurally hard",
  description: "Nine failure vectors that require strict systems discipline over loose manual tools.",
};

export const whyHardChallenges = [
  {
    number: "01",
    title: "Multiple Obligations",
    challenge:
      "Divergent tax, USF, and carrier-specific regulatory duties across tiered local jurisdictions.",
  },
  {
    number: "02",
    title: "Data Readiness Gap",
    challenge:
      "Reconciling CDR volumes, transactions, and bundles into return-ready aggregates with clear provenance.",
  },
  {
    number: "03",
    title: "Review Authority",
    challenge:
      "Lack of clear separation between preparer, checker, and final approver leads to audit exposure.",
  },
  {
    number: "04",
    title: "Channel Variation",
    challenge:
      "Submitting via mail, secure portals, batch uploads, or APIs depending on local capability limits.",
  },
  {
    number: "05",
    title: "Ack Uncertainty",
    challenge:
      "A submission is not an acceptance. Managing silent failures or pending statuses is error-prone.",
  },
  {
    number: "06",
    title: "Amendment Lineage",
    challenge:
      "Reconstructing past states when retroactively correcting a prior period without breaking current logic.",
  },
  {
    number: "07",
    title: "Regulatory Change",
    challenge:
      "Keeping schemas, tax thresholds, rates, and forms up to date across shifting global rulesets.",
  },
  {
    number: "08",
    title: "Evidence Retention",
    challenge:
      "Losing validation logs, input artifacts, and receipts when personnel rotates or legacy systems deprecate.",
  },
  {
    number: "09",
    title: "Coverage Variability",
    challenge:
      "Managing international operating models where support status ranges from validated to suspended.",
  },
];

export const lifecycleHeader = {
  eyebrow: "State Transitions",
  title: "The controlled filing lifecycle",
  description:
    "Every filing moves through governed, visible states — ensuring exceptions remain exposed rather than hidden.",
};

export const lifecycleStages = [
  { stage: "STAGE 01", title: "Inherit", detail: "obligation active" },
  { stage: "STAGE 02", title: "Prepare", detail: "draft workpaper" },
  { stage: "STAGE 03", title: "Validate", detail: "rules check" },
  { stage: "STAGE 04", title: "Review", detail: "checks complete" },
  { stage: "STAGE 05", title: "Approve", detail: "governed sign-off" },
  { stage: "STAGE 06", title: "Submit", detail: "supported channel" },
  { stage: "STAGE 07", title: "Track", detail: "ack/receipt pending" },
  { stage: "STAGE 08", title: "Correct", detail: "amendment loop" },
];

export const filingRegistry = {
  title: "Filing Registry / Workspace",
  tenant: "Tenant: Sacramento Operations",
  period: "Active Period: Q1 2026",
  notice: "2 filings require manual review. Submissions cannot occur until governed approvals are recorded.",
  columns: [
    { label: "Filing / Return", width: 180 },
    { label: "Authority", width: 140 },
    { label: "Period", width: 90 },
    { label: "Due Date", width: 90 },
    { label: "Readiness", width: 140 },
    { label: "Filing Status", width: 130 },
    { label: "Owner", width: 120 },
    { label: "Channel", width: 100 },
    { label: "Action", width: 0 },
  ],
};

export const filingRegistryRows = [
  {
    returnName: "USF Form 499-Q",
    authority: "Federal (F1-US)",
    period: "Feb 2026",
    due: "2026-03-01",
    readiness: "Ready for review",
    readinessTone: "orange",
    status: "Not submitted",
    statusTone: "orange",
    owner: "Alex T.",
    channel: "Supported API",
  },
  {
    returnName: "E911 Surcharge Return",
    authority: "State (S1-US-CA)",
    period: "Q1 2026",
    due: "2026-04-30",
    readiness: "Draft workpaper",
    readinessTone: "orange",
    status: "Not ready",
    statusTone: "orange",
    owner: "Sarah K.",
    channel: "Manual upload",
  },
  {
    returnName: "Telecom Excise Tax",
    authority: "Local (L1-US-SAC)",
    period: "Q1 2026",
    due: "2026-04-30",
    readiness: "Approved",
    readinessTone: "green",
    status: "Submitted",
    statusTone: "green",
    owner: "Alex T.",
    channel: "Supported API",
  },
  {
    returnName: "Utility User Surcharge",
    authority: "Local (L1-US-OAK)",
    period: "Q1 2026",
    due: "2026-04-30",
    readiness: "Not applicable",
    readinessTone: "orange",
    status: "Status unavailable",
    statusTone: "gray",
    owner: "System",
    channel: "External",
  },
  {
    returnName: "State Gross Receipts",
    authority: "State (S1-US-NY)",
    period: "Q1 2026",
    due: "2026-04-30",
    readiness: "Exception raised",
    readinessTone: "orange",
    status: "Rejected",
    statusTone: "orange",
    owner: "Sarah K.",
    channel: "Manual upload",
  },
];

export const evidencePanel: {
  title: string;
  mobileTitle: string;
  status: string;
  groups: { label: string; lines: [string, string]; mobileSecondLine?: string }[];
} = {
  title: "Filing Detail & Evidence Audit Panel",
  mobileTitle: "Filing Detail & Evidence Audit",
  status: "EVIDENCE SEALED",
  groups: [
    {
      label: "01 IDENTITY & OBLIGATION",
      lines: [
        "Filing Return: USF Form 499-Q (Q1 2026)",
        "Originated from: Active obligation F1-USF-2026",
      ],
    },
    {
      label: "02 PREPARATION DETAILS",
      lines: [
        "Reported amount: [Illustrative reported amount A]",
        "Workpaper Hash: sha256_9c23b8f2d57b... (deterministic validation passed)",
      ],
      mobileSecondLine: "Workpaper Hash: sha256_9c23b8f2d57b... (passed)",
    },
    {
      label: "03 REVIEWS & APPROVALS",
      lines: [
        "Preparer: Sarah K. (2026-02-15)",
        "Approver: Alex T. (2026-02-18 governed approval sign-off)",
      ],
      mobileSecondLine: "Approver: Alex T. (2026-02-18 sign-off)",
    },
    {
      label: "04 SUBMISSION VERIFICATION",
      lines: [
        "Filing outcome: Acknowledged by authority gateway",
        "Receipt Hash: sha256_evidence_seal_88e31a...",
      ],
    },
  ],
};

export const productProofIntro = {
  eyebrow: "Product Proof",
  title: "Representative system interfaces",
  descriptionBefore:
    "Explore three critical frames demonstrating how the system monitors work, stores evidence, and tracks the lifecycle. All details are ",
  descriptionBold: "Representative and Illustrative",
  descriptionAfter: " of system capabilities.",
};

export const workpaperModel = {
  title: "Preparation & Workpaper Model",
  description:
    "All source data undergoes strict validation. Calculations must be deterministic, preventing silent adjustment by black-box algorithms.",
};

export const workpaperSteps = [
  { step: "STEP 01", title: "Draft", detail: "Schedules initialized with CDR aggregates" },
  { step: "STEP 02", title: "Needs Data", detail: "Awaiting manual adjustment or batch upload" },
  { step: "STEP 03", title: "Validation Check", detail: "Running validation check against ruleset" },
  { step: "STEP 04", title: "Ready for Approval", detail: "Approved as recommended by system check" },
];

export const reviewDuties = {
  title: "Segregation of Duties & Governed Roles",
  description:
    "Explicit permission boundary parameters prevent unauthorized actions. There is no single universal role model.",
};

export const reviewRoles = [
  { role: "Preparer", detail: "Edit draft, compile workpapers, upload attachments" },
  { role: "Reviewer", detail: "Validate outputs, raise exceptions, check variances" },
  { role: "Approver", detail: "Finalize filing state, authorize submission queue" },
  { role: "Viewer/Auditor", detail: "Read-only access, run historical replay, export evidence" },
];

export const submissionTracking = {
  title: "Submission State & Receipt Tracking",
  description:
    "Explicit states differentiate a submitted file from an accepted file. Duplicate-safety loops prevent accidental duplicate submissions.",
};

export const submissionStates = [
  { label: "Ready to Submit", dot: "#665f69" },
  { label: "Submitting", dot: "#9a5b12" },
  { label: "Submitted", dot: "#315b9a" },
  { label: "Acknowledged", dot: "#26735b" },
  { label: "Accepted", dot: "#26735b" },
];

export const noticesAmendments = {
  title: "Notices, Rejections & Amendments",
  description:
    "When an authority notice is received or a filing is rejected, the amendment lineage preserves historical submissions instead of overwriting them. No legal penalties or consequences are inferred.",
};

export const noticesCards = [
  {
    title: "Authority Notice",
    status: "Awaiting review",
    detail: "Notice ingested, linked to origin filing period",
  },
  {
    title: "Rejected Filing",
    status: "Needs amendment",
    detail: "Exception exposed, state changed, original data frozen",
  },
  {
    title: "Amendment Lineage",
    status: "Traceable",
    detail: "Re-run calculations, submit replacement, bind to previous transaction ID",
  },
];

export const obligationsInterlock = {
  eyebrow: "Obligations Interlock",
  title: "No orphan filing tasks",
  description:
    "Every filing in ZoikoTax must interlock directly with an upstream registration, active obligation, or country pack regulatory timeline. Filing tasks are never floating checklists.",
  flowTitle: "Traceable Flow",
  flowTitleMobile: "Traceable Flow Steps",
  flowSteps: [
    "1. Active country pack defines the required registration.",
    "2. Obligation manager tracks due dates and rules.",
    "3. Filing registry pulls obligation specs directly into draft.",
  ],
  ctaTitle: "Configure & Track Obligations",
  ctaLabel: "Explore Regulatory Obligations",
};

export const remittanceBoundary: {
  eyebrow: string;
  title: string;
  mobileTitle: string;
  description: string;
  columns: { title: string; description: string; limitation?: string }[];
} = {
  eyebrow: "System Boundaries",
  title: "Filing versus Remittance Orchestration",
  mobileTitle: "Filing versus Remittance",
  description: "ZoikoTax maintains a strict boundary between reporting a filing return and moving actual tax funds.",
  columns: [
    {
      title: "Compliance & Filing",
      description:
        "Tracks form validation, approvals, preparation logs, notices, and receipt statuses. Focuses on governed workflows and immutable evidence trails.",
    },
    {
      title: "Remittance Orchestration",
      description: "Generates remittance payment instructions and approval flows for treasury teams.",
      limitation: "ZoikoTax does not custody, execute, or hold payment funds.",
    },
  ],
};

export const einvoicingBoundary: {
  eyebrow: string;
  title: string;
  description: string;
  columns: { title: string; mobileTitle?: string; description: string }[];
} = {
  eyebrow: "System Boundaries",
  title: "Filing versus E-Invoicing & CTC",
  description: "Understand how periodic reporting is distinct from continuous transaction clearance networks.",
  columns: [
    {
      title: "Compliance Return Filing",
      description:
        "Aggregates historical data to compile periodic returns (monthly, quarterly, or annually) for submission to local tax and regulatory authorities.",
    },
    {
      title: "E-Invoicing & Continuous Clearance (CTC)",
      mobileTitle: "E-Invoicing & Continuous Clearance",
      description:
        "Real-time invoice clearance, digital invoice reporting, and strict network validation per transaction. Clearance receipts are distinct from filing receipts.",
    },
  ],
};

export const evidenceReplay = {
  eyebrow: "Traceability System",
  title: "Evidence, auditability and historical replay",
  mobileTitle: "Evidence, auditability & historical replay",
  description:
    "Compliance is not defined by a simple green Filed badge. You must be able to reconstruct the historical decision chain years later.",
  archiveTitle: "Historical Decision Chain Archive",
  items: [
    "Originating obligation ID reference & active rule versions",
    "Filing inputs, CDR workpaper states, and calculation outputs",
    "Internal checks: validation outputs, threshold alerts",
    "Approver, Preparer, and Reviewer cryptographic timestamps",
    "Authority receipts, acknowledgements, notices, and amendments",
  ],
  ctaTitle: "Reconstruct Decision Trails",
  ctaLabel: "Explore Evidence & Replay",
};

export const operatingModelsHeader = {
  eyebrow: "Operating Architecture",
  title: "Flexible operating models & coexistence",
  description: "Fit your current billing, BSS, or tax engine architecture.",
  actions: [
    { label: "Explore Developer API", href: "/developer-api" },
    { label: "View Integration Guides →", href: "/integrations" },
  ],
};

export const operatingModels = [
  {
    mode: "Native stack",
    title: "Native stack",
    description:
      "End-to-end determination and filing tracking managed through active ZoikoTax country packs.",
    highlighted: false,
  },
  {
    mode: "Federated mode",
    title: "Federated mode",
    description:
      "Integrate with legacy tax engines. ZoikoTax handles obligation tracking and workpaper validation.",
    highlighted: false,
  },
  {
    mode: "Shadow assurance",
    title: "Shadow assurance",
    description:
      "Compare calculations, detect variances, and validate readiness before cutting over production paths.",
    highlighted: false,
  },
];

export const coverageTruth = {
  eyebrow: "Global Coverage",
  title: "Availability transparency — no inflated coverage maps",
  mobileTitle: "Availability transparency — no inflated maps",
  description:
    "Filing formats and requirements vary globally. We clearly label active capabilities so teams can integrate with confidence.",
  classificationsTitle: "Readiness Classifications",
  classifications: [
    { label: "Production", detail: "Available and validated in live environments" },
    { label: "Managed Compliance", detail: "Operational under defined compliance oversight" },
    { label: "Validation/Pilot", detail: "Active testing with select partner systems" },
    { label: "Suspended", detail: "Temporarily unavailable due to changing local laws" },
  ],
  marketsTitle: "Market Pack Status Preview",
  markets: [
    { name: "Market Alpha", scope: "Tax determination & period filings", status: "Production" },
    { name: "Market Beta", scope: "E-invoicing networks & receipts", status: "Validation/Pilot" },
    { name: "Market Gamma", scope: "Regulatory USF obligations", status: "Managed" },
  ],
  ctaLabel: "View Current Coverage Portal",
};

export const aiBoundary = {
  eyebrow: "Governed Automation",
  title: "AI assists. Approved rules decide. Evidence proves.",
  mobileTitle: "AI assists. Approved rules decide.",
  description:
    "Our advisory artificial intelligence features assist your operations without overriding human governance.",
  may: {
    title: "AI Features May",
    items: [
      "Summarize notice text or flag authority rejections",
      "Detect anomalies, variance trends, or missing fields",
      "Suggest transaction classification classifications",
      "Organize and rank items in preparation queues",
    ],
  },
  mayNot: {
    title: "AI Features May Not",
    items: [
      "Autonomous sign off, approve, or submit returns",
      "Alter rules, schemas, or active due dates silently",
      "Bypass required preparer or reviewer approvals",
      "Act as professional tax, legal, or accounting advice",
    ],
  },
};

export const trustSecurity = {
  eyebrow: "Operational Security",
  title: "Control is an architectural property",
  description:
    "ZoikoTax uses a strictly governed, residency-aware infrastructure to isolate sensitive data and isolate tenant contexts.",
  cards: [
    {
      title: "Tenant Isolation",
      description: "Logical separation isolates operations between customer units.",
    },
    {
      title: "Credential Protection",
      description: "Secure authority credentials are held under strict access parameters.",
    },
    {
      title: "Residency-Aware",
      description: "Locality constraints determine where server-side data is persisted.",
    },
  ],
  ctaLabel: "Visit Trust Center",
};

export const buyerOutcomesHeader = {
  eyebrow: "Value & Governance",
  title: "Engineered for teams accountable for outcomes",
  description: "Bring structural control, historic validation, and auditable proof back into your compliance lifecycle.",
};

export const buyerOutcomes = [
  {
    title: "Durable Audits",
    description:
      "Reconstruct exactly what was reported, what rules generated the calculations, and who approved it.",
  },
  {
    title: "Expose Exceptions",
    description:
      "Rather than silently smoothing over rejections or missing contexts, errors stay highly visible until resolved.",
  },
  {
    title: "Change Aware",
    description:
      "Keeps systems aligned with changing global forms, country pack requirements, and schemas.",
  },
];

export const faqHeader = {
  eyebrow: "FAQ",
  title: "Direct answers. No inflated claims.",
};

export const complianceFilingFaqs = [
  {
    question: "What does ZoikoTax Compliance & Filing do?",
    answer:
      "It provides a managed workflow system to validate raw tax data, structure return papers, assign preparer-reviewer-approver permissions, track supported submission paths, and preserve compliance receipts.",
  },
  {
    question: "Does it file every telecom return in every country?",
    answer:
      "No. Capability coverage is limited strictly to active country and regulatory packs. Some jurisdictions require manual uploads rather than direct electronic connections.",
  },
  {
    question: "How does it relate to Regulatory Obligations?",
    answer:
      "They are directly interlocked. Filing tasks are generated from active registration obligations, preventing orphan tasks or missing filings.",
  },
  {
    question: "Does submitted mean accepted?",
    answer:
      "No. A submission only verifies receipt of data by the gateway. Acceptance is a separate, downstream authority decision. ZoikoTax isolates these states.",
  },
  {
    question: "Can it handle amendments?",
    answer:
      "Yes. Amendments are generated from original logs. The system preserves the historical return data rather than overwriting past results, maintaining a complete lineage.",
  },
  {
    question: "Does it move payment after filing?",
    answer:
      "No. Filing reporting is structurally separated from treasury orchestration. ZoikoTax generates payment instructions but does not hold, move, or custody fiduciary funds.",
  },
  {
    question: "How does AI work?",
    answer:
      "AI features operate purely as an advisory assistance layer (anomaly flags, notice summary extraction, category suggestions). Determinations require human sign-off against rules.",
  },
  {
    question: "Can filing history be reproduced later?",
    answer:
      "Yes. ZoikoTax seals the origin data, calculation formulas, active rulesets, and approval logs, allowing teams to replay and reconstruct the filing years later.",
  },
];

export const conversionData = {
  eyebrow: "CONTROL THE FILING LIFECYCLE",
  title:
    "See how ZoikoTax can connect obligations, filing workflows and evidence in your telecom operation.",
  description:
    "Evaluate a governed path from filing readiness and review through supported submission tracking, exception handling and historical proof — without assuming every jurisdiction works the same way.",
};
