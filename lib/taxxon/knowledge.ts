// Controlled knowledge pack (ZTAX-CHAT-CONT-004). The articles and sources are
// the Doc 04 candidates verbatim. Every one ships as "draft" with no approval:
// Doc 04 says appearing here approves nothing, so the eligibility check below
// rejects them until Content/Legal record a published, approved revision.

import { previewContentEnabled } from "./config";
import type { CtaDestinationId, Intent } from "./types";

export const MANIFEST_ID = "kb_taxxon_2026_10_draft";

export type ContentStatus = "draft" | "in_review" | "approved" | "published" | "suspended" | "withdrawn";

export interface SourceRecord {
  source_id: string;
  title: string;
  publisher: string;
  /** Internal sources support drafting only and are never shown as citations. */
  disclosure_class: "public" | "internal_restricted";
  canonical_url: string | null;
  status: ContentStatus;
  checked_at: string;
}

/** Doc 04 §3 source registry. */
export const SOURCES: Record<string, SourceRecord> = {
  "INT-ARCH-001": { source_id: "INT-ARCH-001", title: "ZoikoTax Global Backend Architecture, ZTAX-ARCH-001 v2.0", publisher: "Zoiko Tax", disclosure_class: "internal_restricted", canonical_url: null, status: "approved", checked_at: "2026-10-24" },
  "INT-GOV-001": { source_id: "INT-GOV-001", title: "ZoikoTax Documentation Estate Governance, ZTAX-GOV-001 v3.0", publisher: "Zoiko Tax", disclosure_class: "internal_restricted", canonical_url: null, status: "approved", checked_at: "2026-10-24" },
  "INT-ENG-RESET-001": { source_id: "INT-ENG-RESET-001", title: "Zoiko Tax Engineering Reset & Delivery Playbook v1.0", publisher: "Zoiko Tax", disclosure_class: "internal_restricted", canonical_url: null, status: "approved", checked_at: "2026-10-24" },
  "INT-CHAT-001": { source_id: "INT-CHAT-001", title: "Taxxon Document 01", publisher: "Zoiko Tax", disclosure_class: "internal_restricted", canonical_url: null, status: "approved", checked_at: "2026-10-24" },
  "INT-CHAT-002": { source_id: "INT-CHAT-002", title: "Taxxon Document 02", publisher: "Zoiko Tax", disclosure_class: "internal_restricted", canonical_url: null, status: "approved", checked_at: "2026-10-24" },
  "INT-CHAT-003": { source_id: "INT-CHAT-003", title: "Taxxon Document 03", publisher: "Zoiko Tax", disclosure_class: "internal_restricted", canonical_url: null, status: "approved", checked_at: "2026-10-24" },
  // Official external sources: registry candidates only. LAW-* articles built
  // on them are "do not publish yet" (Doc 04 §9), so none is wired to an intent.
  "EXT-USAC-001": { source_id: "EXT-USAC-001", title: "USAC, Forms to File", publisher: "USAC", disclosure_class: "public", canonical_url: "https://www.usac.org/service-providers/contributing-to-the-usf/forms-to-file/", status: "draft", checked_at: "2026-10-24" },
  "EXT-IL-001": { source_id: "EXT-IL-001", title: "Illinois DOR, RT-2 Instructions", publisher: "Illinois Department of Revenue", disclosure_class: "public", canonical_url: "https://tax.illinois.gov/forms/excise/telecomexise/rt-2-instr.html", status: "draft", checked_at: "2026-10-24" },
  "EXT-HMRC-001": { source_id: "EXT-HMRC-001", title: "HMRC, VAT Notice 741A", publisher: "HMRC", disclosure_class: "public", canonical_url: "https://www.gov.uk/guidance/vat-place-of-supply-of-services-notice-741a", status: "draft", checked_at: "2026-10-24" },
};

/** Doc 04 §2 canonical knowledge object. */
export interface Article {
  article_id: string;
  kb: string;
  revision: string;
  intent: Intent;
  title: string;
  short_answer: string;
  /** Lower-case match terms for deterministic retrieval (no model recall). */
  keywords: string[];
  source_ids: string[];
  status: ContentStatus;
  public_visibility: boolean;
  approval_id: string | null;
  reviewed_by: string | null;
  effective_from: string | null;
  expires_at: string | null;
  release_id: string | null;
  /** First-party page this answer points to, resolved through the CTA registry. */
  related_cta?: CtaDestinationId;
}

function draft(
  n: number,
  intent: Intent,
  title: string,
  short_answer: string,
  keywords: string[],
  source_ids: string[],
  related_cta?: CtaDestinationId,
): Article {
  const kb = `KB-${String(n).padStart(3, "0")}`;
  return {
    article_id: `ZTAX-PUB-${String(n).padStart(3, "0")}`,
    kb,
    revision: "1.0-draft",
    intent,
    title,
    short_answer,
    keywords,
    source_ids,
    status: "draft",
    public_visibility: false,
    approval_id: null,
    reviewed_by: null,
    effective_from: null,
    expires_at: null,
    release_id: null,
    related_cta,
  };
}

const ARCH = "INT-ARCH-001";
const RESET = "INT-ENG-RESET-001";
const CHAT = ["INT-CHAT-001", "INT-CHAT-002", "INT-CHAT-003"];

/** Doc 04 §4–7: the 20 candidate public answers, worded exactly as drafted. */
export const ARTICLES: Article[] = [
  draft(1, "capabilities", "What is Zoiko Tax?",
    "Zoiko Tax is a telecom-focused fiscal software platform designed to support tax and fee determination, regulatory obligations and controlled compliance workflows. The functions available to your organisation depend on the released product and agreed scope.",
    ["what is zoiko", "what does zoiko", "what do you do", "zoiko tax do", "platform", "product", "capabilit", "overview", "about zoiko"], [ARCH, RESET], "product_overview"),
  draft(2, "capabilities", "Who is Zoiko Tax designed for?",
    "The platform is designed for telecom and communications providers, enterprise tax and finance teams, and approved implementation or technology partners. We can help identify the appropriate product scope for your organisation.",
    ["who is it for", "designed for", "who uses", "customers", "mvno", "operator", "carrier", "isp", "suitable for"], [RESET], "product_overview"),
  draft(3, "capabilities", "Does Zoiko Tax set prices or rate calls?",
    "Zoiko Tax is designed to receive rated commercial information from connected billing or charging systems. Tax and regulatory treatment is a separate responsibility from setting the original call, usage or subscription price.",
    ["rate calls", "rating", "set prices", "charging", "call pricing", "usage price"], [RESET]),
  draft(4, "capabilities", "What does AI do in Zoiko Tax?",
    "The public assistant explains approved product information and can direct you to official resources. It does not decide tax rates or perform customer-specific tax calculations. Fiscal outcomes must come from governed calculation and regulatory systems.",
    ["ai do", "artificial intelligence", "machine learning", "llm", "what can you do", "are you ai", "chatbot"], [ARCH, ...CHAT]),
  draft(5, "telecom_issues", "Is Zoiko Tax a substitute for tax advice?",
    "No. The public assistant provides general product information and, where approved, educational explanations. It does not issue binding tax opinions or decide the correct treatment of an individual transaction.",
    ["tax advice", "substitute", "advisor", "accountant", "legal advice", "opinion"], CHAT),
  draft(6, "coverage", "Which taxes and fees can it handle?",
    "The platform is designed for telecommunications-related fiscal requirements. Precise tax types, supported services and available jurisdictions must be checked against a published coverage record before we can confirm them.",
    ["which taxes", "taxes and fees", "fees", "tax types", "surcharge", "telecom tax", "how do telecom taxes", "telecom fees"], [ARCH]),
  draft(7, "capabilities", "Can Zoiko Tax help with filing or remittance?",
    "The architecture includes controlled compliance workflows, including obligations and evidence of authorised actions. The public chatbot cannot prepare or submit your tax return, instruct payment, or confirm that a particular filing service is live.",
    ["filing", "remittance", "returns", "file returns", "compliance workflow", "obligations"], [RESET], "product_overview"),
  draft(8, "product_modes", "What is Shadow Assurance?",
    "Shadow Assurance is an operating approach intended to compare tax outcomes against an incumbent system without changing live billing or initiating compliance actions. Whether the option is offered for your use case must be confirmed.",
    ["shadow", "assurance", "compare", "incumbent", "parallel run"], [RESET], "product_overview"),
  draft(9, "product_modes", "Can Zoiko Tax work alongside an existing tax engine?",
    "The product architecture includes a federated operating model in which specified outputs can be supplied through a governed third-party adapter. Availability of any particular integration or vendor pairing needs confirmation.",
    ["alongside", "existing tax engine", "current tax engine", "federated", "avalara", "vertex", "suretax", "ceretax", "replace"], [RESET], "product_overview"),
  draft(10, "product_modes", "Is there an embedded or managed option?",
    "The architecture contemplates embedded/OEM arrangements and managed compliance workflows with defined responsibilities. Specific commercial availability, permissions and service levels must be verified with the Zoiko Tax team.",
    ["embedded", "oem", "managed", "white label", "managed compliance", "operating mode", "modes"], [RESET], "product_overview"),
  draft(11, "coverage", "Does it support my country or state?",
    "Please tell me the country and, where relevant, the state or region, telecom service, requested capability and operating mode. I can confirm availability only where there is an approved, current public coverage record. Otherwise, I will say that I cannot verify the scope.",
    ["country", "state", "jurisdiction", "coverage", "support my", "which countries", "supported"], ["INT-CHAT-002", "INT-CHAT-003"]),
  draft(12, "integration", "Can we connect it to our billing platform?",
    "Zoiko Tax is designed for integration with commercial billing and finance systems. Whether a particular API, connector or migration path is available depends on the published technical documentation and supported deployment scope.",
    ["billing", "connect", "integration", "integrate", "api", "bss", "erp", "connector", "webhook", "sdk"], [RESET], "developer_docs"),
  draft(13, "capabilities", "How is a tax result evidenced?",
    "The product design calls for a traceable determination: the input facts, applied rule/version, jurisdiction, result and related evidence should be reconstructable through authorised product workflows. The public chatbot does not expose private decision records.",
    ["evidence", "audit", "traceable", "replay", "evidenced", "audit trail"], [RESET]),
  draft(14, "support", "Can Taxxon access my ZoikoSuite account?",
    "No. This public assistant is separate from authenticated ZoikoSuite and Zoiko Tax accounts. Do not enter passwords, taxpayer identifiers, invoice data or bank information here. Use the approved secure sign-in or support route for account-specific help.",
    ["my account", "zoikosuite", "access my", "sign in", "login", "log in"], ["INT-CHAT-003"], "support"),
  draft(15, "demo", "Do you offer pricing or a demo?",
    "Commercial options depend on the required jurisdictions, services, integrations and workflow scope. You can use the official demo or contact route once its published destination is verified; I cannot create a booking from this conversation.",
    ["price", "pricing", "cost", "quote", "demo", "demonstration", "book", "sales", "how much does"], [], "demo_request"),
  draft(16, "coverage", "Is coverage global already?",
    "Zoiko Tax has been designed with a global domain model. That does not mean every country, tax type or workflow is currently available. Please specify your requirements so availability can be checked against approved records.",
    ["global", "worldwide", "every country", "all countries", "international", "which states are live"], [RESET]),
  draft(17, "capabilities", "Is the system compliant or certified?",
    "Zoiko Tax is designed with controlled fiscal records, evidence and security safeguards. Any certification, accreditation or jurisdiction-specific compliance representation must be checked against published, independently verifiable documentation.",
    ["certified", "certification", "compliant", "soc", "iso", "accredit", "secure", "security"], []),
  draft(18, "capabilities", "What if a legal rule changes?",
    "The architecture calls for governed source reviews, versioned releases and historically reproducible determinations. The public assistant can only discuss published, reviewed content; it cannot promise that an unsupported change has already been implemented.",
    ["rule changes", "law changes", "regulatory change", "updates", "new law", "rate change"], [RESET]),
  draft(19, "support", "How do I contact support?",
    "For account-specific or technical issues, please use the official support channel. I cannot view your account, modify your records or create a support case until an approved and authorised workflow has been completed outside public chat.",
    ["support", "contact", "help desk", "existing customer", "technical issue", "ticket", "human"], [], "support"),
  draft(20, "telecom_issues", "Can you calculate tax for my invoice here?",
    "I cannot calculate or confirm an invoice-specific tax liability in this public chat. The authorised Zoiko Tax application is separate from this assistant. Please use your approved product workflow or seek appropriate professional guidance.",
    ["calculate", "invoice", "how much tax", "tax rate", "liability"], ["INT-CHAT-003"]),
];

export interface Eligible {
  article: Article;
  preview: boolean;
}

/**
 * Doc 04 §2 implementation invariant: reject any article with
 * public_visibility != true, status != published, missing approval, expired
 * scope, unavailable source proof or a release that is not this manifest.
 * Preview admits drafts outside production only, and says so.
 */
export function eligibility(article: Article, now: Date): Eligible | null {
  const sourcesOk = article.source_ids.every((id) => {
    const s = SOURCES[id];
    return s !== undefined && s.status !== "withdrawn" && s.status !== "suspended";
  });
  const inDate =
    (article.effective_from === null || new Date(article.effective_from) <= now) &&
    (article.expires_at === null || now < new Date(article.expires_at));
  const approved =
    article.status === "published" &&
    article.public_visibility &&
    article.approval_id !== null &&
    article.release_id === MANIFEST_ID;
  if (approved && inDate && sourcesOk) return { article, preview: false };
  const previewable = article.status === "draft" || article.status === "in_review" || article.status === "approved";
  if (previewContentEnabled() && previewable && sourcesOk) return { article, preview: true };
  return null;
}

/** Lookup by KB number, eligibility enforced. */
export function articleByKb(kb: string, now: Date): Eligible | null {
  const a = ARTICLES.find((x) => x.kb === kb);
  return a ? eligibility(a, now) : null;
}

/**
 * Deterministic retrieval (Doc 03 §5 retrieveApprovedArticles): eligible
 * articles for an intent, ranked by keyword hits in the visitor's text.
 */
export function retrieveArticles(intent: Intent, text: string, now: Date): Eligible[] {
  const lower = text.toLowerCase();
  return ARTICLES.filter((a) => a.intent === intent)
    .map((a) => ({ a, score: a.keywords.filter((k) => lower.includes(k)).length }))
    .sort((x, y) => y.score - x.score)
    .map(({ a }) => eligibility(a, now))
    .filter((e): e is Eligible => e !== null);
}

/** Best keyword match across every intent; used by the classifier. */
export function bestIntentByKeywords(text: string): { intent: Intent; score: number } | null {
  const lower = text.toLowerCase();
  let best: { intent: Intent; score: number } | null = null;
  for (const a of ARTICLES) {
    const score = a.keywords.filter((k) => lower.includes(k)).length;
    if (score > 0 && (best === null || score > best.score)) best = { intent: a.intent, score };
  }
  return best;
}
