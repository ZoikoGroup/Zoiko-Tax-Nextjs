// Taxxon orchestrator: Doc 03 §6's implementation sequence, enforced in code.
//
//   classify_input -> reject_private_or_write_request
//   normalise_scope_from_explicit_user_input
//   select_tools_by_intent_and_server_policy -> fetch_approved_public_evidence
//   validate_approval_status_freshness_scope_and_conflicts
//   select_disposition_and_controlled_template -> render_language_only_from_allowed_facts
//   validate_final_schema_links_claims_and_cta -> return_response_with_trace_and_version_proof
//
// There is no language model here. Doc 03 §8 allows a third-party AI processor
// only once Privacy/Legal approve one, and none is approved; every sentence a
// visitor reads is approved-candidate copy from Docs 01–04, a registry record,
// or a passage quoted verbatim from the published zoikotax.com site with a link
// to its page. The tool allowlist is the function calls below: knowledge
// lookup, website search, public coverage lookup and CTA resolution. Nothing
// can reach the tax core.

import { ASSISTANT_VERSION, POLICY_VERSION } from "./config";
import {
  COVERAGE_EXCLUSIONS,
  COVERAGE_SNAPSHOT_ID,
  clarificationFor,
  isNotSure,
  mergeScope,
  nextMissing,
  parseScope,
  resolvePublicCoverage,
  statusCopy,
} from "./coverage";
import { resolveApprovedCta } from "./cta";
import { MANIFEST_ID, articleByKb, bestIntentByKeywords, retrieveArticles, type Eligible } from "./knowledge";
import { GUARD_COPY, classifyGuard, type Guard } from "./policy";
import { opaqueId, type Session } from "./session";
import { headingFor, headingsOf, moreFromPage, passage, relatedQuestions, searchSite, siteEvidence, suggestQuestions, type SiteChunk } from "./site";
import { emit } from "./telemetry";
import type {
  AnswerBlock,
  ApprovedCta,
  Clarification,
  CoverageScope,
  CtaDestinationId,
  Disposition,
  Evidence,
  Intent,
  ResponseType,
  TaxxonResponse,
} from "./types";
import { INTENTS } from "./types";

const UNVERIFIABLE = "I cannot confirm this information from a current approved source. Please contact our team.";

const FOLLOW_UP: Record<Intent, string> = {
  capabilities: "Would you like to check jurisdiction coverage or explore how integrations work?",
  coverage: "",
  telecom_issues: "If you tell me your country and telecom service, I can check approved product coverage information.",
  integration: "Would you like to explore integration documentation or talk to the solutions team?",
  product_modes: "Would you like to discuss which operating mode fits your current setup?",
  demo: "",
  support: "",
};

const INTENT_OPTIONS: Clarification = {
  dimension: "intent",
  options: [
    { value: "capabilities", label: "Product capabilities" },
    { value: "coverage", label: "Jurisdiction coverage" },
    { value: "integration", label: "Integrations" },
    { value: "demo", label: "Request a demo" },
  ],
};

function responseType(d: Disposition): ResponseType {
  switch (d) {
    case "answered":
    case "not_verified":
      return "answer";
    case "needs_clarification":
      return "clarification";
    case "refused":
      return "refusal";
    case "handoff":
      return "handoff";
    case "error":
      return "error";
  }
}

interface Draft {
  intent: Intent | "unsupported";
  disposition: Disposition;
  blocks: AnswerBlock[];
  evidence?: Evidence[];
  sourceUnavailable?: boolean;
  cta?: CtaDestinationId;
  clarification?: Clarification;
  scope?: CoverageScope;
  coverage?: TaxxonResponse["coverage_status"];
  contentTimestamp?: string;
  preview?: boolean;
  followUps?: string[];
}

// Suggested next questions when the conversation has no topic yet.
const STARTER_QUESTIONS = [
  "What does ZoikoTax do?",
  "Which countries and taxes are supported?",
  "How does ZoikoTax connect to billing?",
  "How much does ZoikoTax cost?",
];

// Conversational turns. These are about the conversation, never about the
// product, so they make no claim that needs a source.
const GREETING =
  "Hello! I'm ZoikoTax Intelligence, the public assistant for ZoikoTax. Ask me about the platform, telecom tax workflows, integrations, coverage or pricing, and I'll answer from published ZoikoTax information.";
const SELF =
  "I'm ZoikoTax Intelligence, ZoikoTax's public assistant. I answer questions about ZoikoTax from its published website and approved product information, with a link to every source. I can't see any account data, and I don't give tax or legal advice.";
const THANKS = "You're welcome! Is there anything else you'd like to know about ZoikoTax?";
const BYE = "Thanks for stopping by. Start a new conversation any time you have a question.";
const MORE_WHAT = "Happy to. What would you like to know more about?";
const CONTACT_LEAD = "You can reach the ZoikoTax team through its official contact routes:";

const says = (t: string, re: RegExp) => re.test(t.toLowerCase().replace(/[^a-z' ]+/g, " ").replace(/\s+/g, " ").trim());

/** Quote website sections as an answer, with what to ask next. */
function quoteSite(session: Session, intent: Intent | "unsupported", hits: SiteChunk[], extra: Partial<Draft> = {}): Draft {
  const earlier = session.lastSite?.url === hits[0].url ? session.lastSite.shown : [];
  session.lastSite = { url: hits[0].url, shown: [...earlier, ...hits.map((h) => h.id)] };
  const blocks: AnswerBlock[] = [];
  for (const h of hits) {
    const heading = headingFor(h);
    if (heading) blocks.push({ type: "heading", text: heading });
    blocks.push({ type: "summary", text: passage(h) });
  }
  return {
    intent,
    disposition: intent === "demo" || intent === "support" ? "handoff" : "answered",
    // One source card per page, however many of its sections are quoted.
    evidence: hits.filter((h, i) => hits.findIndex((o) => o.url === h.url) === i).map(siteEvidence),
    // Suggest what has not been shown yet in this conversation.
    followUps: relatedQuestions(hits[0], 6).filter((q) => !headingsOf(session.lastSite?.shown ?? []).has(q.toLowerCase())).slice(0, 3),
    ...extra,
    blocks: [...(extra.blocks ?? []), ...blocks],
  };
}

/** Nothing published answers this: say so, and offer the nearest questions that are. */
function unverified(intent: Intent | "unsupported", text: string, notice: string, cta?: CtaDestinationId): Draft {
  const near = suggestQuestions(text);
  return {
    intent,
    disposition: "not_verified",
    blocks: [{ type: "notice", text: notice }, ...(near.length ? [{ type: "next_step" as const, text: "These related questions are answered on zoikotax.com:" }] : [])],
    sourceUnavailable: true,
    cta,
    followUps: near.length ? near : STARTER_QUESTIONS,
  };
}

/** Greetings, thanks, "tell me more", "who are you", "talk to a human". */
function conversational(session: Session, text: string): Draft | undefined {
  const chat = (copy: string, followUps = STARTER_QUESTIONS): Draft => ({
    intent: "unsupported",
    disposition: "answered",
    blocks: [{ type: "summary", text: copy }],
    followUps,
  });
  if (says(text, /^(hi|hello|hey|hiya|howdy|greetings|good (morning|afternoon|evening|day))( there)?( zoiko ?tax| taxxon)?$/)) return chat(GREETING);
  if (says(text, /^(ok |okay |great |perfect |awesome |nice |cool |got it |understood |that helps |brilliant )?(thanks|thank you|thank you so much|thanks a lot|many thanks|thx|ty|cheers|ok|okay|great|perfect|awesome|nice|cool|got it|understood|that helps|helpful|brilliant)( very much)?$/)) {
    return chat(THANKS);
  }
  if (says(text, /^(bye|goodbye|good bye|see you|see ya|that's all|thats all|no thanks|no thank you|nothing else|i'm done|im done|done)$/)) return chat(BYE, []);
  if (says(text, /^(who are you|what are you|are you a bot|are you human|are you an ai|what can you do|how can you help( me)?|what do you do)$/)) return chat(SELF);
  if (says(text, /^(tell me more|more|more please|go on|continue|keep going|more details|explain more|elaborate|what else|and)$/)) {
    if (!session.lastSite) return chat(MORE_WHAT);
    const next = moreFromPage(session.lastSite.url, session.lastSite.shown);
    return next.length ? quoteSite(session, "capabilities", next) : chat(MORE_WHAT);
  }
  if (says(text, /\b(human|real person|someone|somebody|agent|representative|talk to|speak to|speak with|talk with|contact (you|someone|the team|zoiko ?tax)|call you|phone number|email address)\b/)) {
    const hits = searchSite("How do I contact ZoikoTax customer support?");
    return hits.length
      ? quoteSite(session, "support", hits, { blocks: [{ type: "summary", text: CONTACT_LEAD }], cta: "support" })
      : chat("Human support is available via the contact form on this website.");
  }
  if (says(text, /\bwho (built|made|makes|owns|created|developed|runs|operates|is behind)\b|\bwhat company\b|\bparent company\b/)) {
    const hits = searchSite("ZoikoTax trading name of Zoiko Tech Inc Zoiko Group company");
    if (hits.length) return quoteSite(session, "capabilities", hits);
  }
  return undefined;
}

/** Classify by explicit wording only; null means ambiguous. */
export function classifyIntent(text: string): Intent | null {
  const t = text.toLowerCase();
  const parsed = parseScope(text);
  if (parsed.ambiguous || parsed.scope.country) return "coverage";
  // "Do you support VoIP?" asks what the product covers, not for customer support.
  if (/\b(?:do|does|can|will)\s+(?:you|zoiko\s*tax)\s+support\b/.test(t)) {
    return parsed.scope.service || parsed.scope.capability ? "coverage" : "capabilities";
  }
  if (/\b(demo|demonstration|book|pricing|price|cost|quote|sales)\b/.test(t)) return "demo";
  if (/\b(integrat\w*|connect\w*|billing|bss|erp|api|apis|sdk|webhooks?|connectors?)\b/.test(t)) return "integration";
  if (/\b(shadow|federated|oem|embedded|managed|alongside|existing tax engine|current tax engine|operating modes?)\b/.test(t)) return "product_modes";
  if (/\b(coverage|covered|countries|jurisdictions?|states|regions|available in|live in|supported|global)\b/.test(t)) return "coverage";
  if (/\b(existing customer|support|help desk|ticket|my account|sign in|log ?in|contact|human)\b/.test(t)) return "support";
  if (/\b(telecom tax(es)?|fees|surcharges?|usf|form 499|excise|taxes work|tax advice)\b/.test(t)) return "telecom_issues";
  if (/\b(what (is|does)|capabilit\w*|features?|platform|product|evidence|audit|certif\w*|compliant|ai|filing|remittance)\b/.test(t)) return "capabilities";
  return bestIntentByKeywords(text)?.intent ?? null;
}

function articleEvidence(e: Eligible): Evidence {
  const cta = e.article.related_cta ? resolveApprovedCta(e.article.related_cta) : undefined;
  return {
    source_id: e.article.article_id,
    human_title: e.article.title,
    canonical_public_url: cta?.url ?? null,
    approved_revision: e.article.revision,
    relevant_as_of: e.article.effective_from ?? "2026-10-24",
    date_kind: "content_reviewed",
  };
}

function guardDraft(guard: Guard, now: Date): Draft {
  const boundary: AnswerBlock = { type: "boundary", text: GUARD_COPY[guard] };
  switch (guard) {
    case "sensitive_data":
    case "private_account":
    case "file_or_pay":
      return { intent: "support", disposition: "refused", blocks: [boundary], cta: "support" };
    case "injection":
    case "content_change":
      return { intent: "unsupported", disposition: "refused", blocks: [boundary] };
    case "calculation":
      // Doc 02 §6 safe dialogue: limit, then the next action.
      return {
        intent: "telecom_issues",
        disposition: "refused",
        blocks: [
          boundary,
          { type: "summary", text: "The result depends on the actual service, locations, applicable rules and effective date." },
          {
            type: "next_step",
            text: "Are you asking about Zoiko Tax's product coverage, or do you need professional help reviewing a specific invoice? I can check approved coverage information or help you find the right team.",
          },
        ],
        clarification: {
          dimension: "intent",
          options: [
            { value: "coverage", label: "Check product coverage" },
            { value: "support", label: "Find the right team" },
          ],
        },
      };
    case "legal_opinion": {
      const kb = articleByKb("KB-005", now);
      return {
        intent: "telecom_issues",
        disposition: "refused",
        blocks: kb ? [boundary, { type: "summary", text: kb.article.short_answer }] : [boundary],
        evidence: kb ? [articleEvidence(kb)] : [],
        preview: kb?.preview,
      };
    }
    case "service_level":
      return { intent: "demo", disposition: "not_verified", blocks: [boundary], cta: "demo_request", sourceUnavailable: true };
  }
}

function coverageDraft(session: Session, text: string, now: Date): Draft {
  // A follow-up after a result keeps the visitor's earlier country, state and
  // service; only the dimensions they name now replace those answers.
  const last = session.lastCoverage;
  const pending = session.pendingCoverage ?? (last ? { country: last.country, subdivision: last.subdivision, service: last.service } : {});
  const missingBefore = nextMissing(pending);
  const parsed = parseScope(text);

  if (parsed.ambiguous) {
    session.pendingCoverage = pending;
    return {
      intent: "coverage",
      disposition: "needs_clarification",
      blocks: [{ type: "summary", text: `Do you mean the U.S. state of ${parsed.ambiguous} or the country of ${parsed.ambiguous}?` }],
      clarification: {
        dimension: "country",
        options: [
          { value: `state of ${parsed.ambiguous}`, label: `U.S. state of ${parsed.ambiguous}` },
          { value: `country of ${parsed.ambiguous}`, label: `Country of ${parsed.ambiguous}` },
        ],
      },
      scope: pending,
    };
  }

  const answer: CoverageScope = { ...parsed.scope };
  // "I'm not sure" opts out of the remaining questions (Doc 02 S1 exit): check
  // what is known now instead of asking for more.
  if (isNotSure(text) && missingBefore) answer.declined = ["country", "service", "capability"];
  // Newly named dimensions override what was carried over from the last result.
  const scope = session.pendingCoverage ? mergeScope(pending, answer) : mergeScope(answer, pending);
  const missing = nextMissing(scope);
  if (missing) {
    session.pendingCoverage = scope;
    const c = clarificationFor(missing);
    return {
      intent: "coverage",
      disposition: "needs_clarification",
      blocks: [{ type: "summary", text: c.question }],
      clarification: { dimension: missing, options: c.options },
      scope,
    };
  }

  session.pendingCoverage = undefined;
  session.lastCoverage = scope;
  const result = resolvePublicCoverage(scope, now);
  const copy = statusCopy(result, scope);
  const evidence: Evidence[] =
    result.record?.public_source_ids.map((id) => ({
      source_id: id,
      human_title: `Coverage record ${result.record?.coverage_record_id ?? ""}`,
      canonical_public_url: null,
      approved_revision: result.record?.content_revision ?? "",
      relevant_as_of: result.record?.reviewed_at ?? "",
      date_kind: "coverage_reviewed" as const,
    })) ?? [];
  emit("taxxon.evidence.resolved", {
    coverage_snapshot: COVERAGE_SNAPSHOT_ID,
    coverage_status: result.status,
    defect: result.defect,
    source_count: evidence.length,
  });
  const live = result.status !== "unknown";
  // With no approved record the status stays unknown, but what the website
  // publishes about this scope is still shown, quoted and linked.
  const published = live ? [] : searchSite([text, scope.country, scope.subdivision, scope.service, scope.capability].filter(Boolean).join(" "), 1);
  return {
    intent: "coverage",
    disposition: live ? "answered" : "not_verified",
    blocks: [
      { type: "status", text: copy.heading },
      { type: "summary", text: copy.summary },
      ...published.map((h) => ({ type: "summary" as const, text: `Published on zoikotax.com: ${passage(h)}` })),
      { type: "exclusions", text: COVERAGE_EXCLUSIONS },
    ],
    evidence: [...evidence, ...published.map(siteEvidence)],
    sourceUnavailable: live && evidence.length === 0,
    cta: result.status === "verified_live" ? "product_overview" : "demo_request",
    scope,
    coverage: result.status,
    contentTimestamp: result.record?.reviewed_at,
  };
}

/** Answer from the published website: matching sections quoted as published. */
function siteDraft(session: Session, intent: Intent, text: string, cta: CtaDestinationId | undefined): Draft | undefined {
  const hits = searchSite(text);
  emit("taxxon.evidence.resolved", { manifest: "site", source_count: hits.length });
  if (hits.length === 0) return undefined;
  return quoteSite(session, intent, hits, { cta });
}

function knowledgeDraft(session: Session, intent: Intent, text: string, now: Date): Draft {
  const found = retrieveArticles(intent, text, now)[0];
  const handoff = intent === "demo" || intent === "support";
  const cta: CtaDestinationId | undefined =
    intent === "demo" ? "demo_request" : intent === "support" ? "support" : found?.article.related_cta;
  emit("taxxon.evidence.resolved", { manifest: MANIFEST_ID, source_count: found ? 1 : 0, freshness: found ? "eligible" : "none" });

  if (!found) {
    const site = siteDraft(session, intent, text, cta);
    if (site) return site;
    return unverified(intent, text, UNVERIFIABLE, cta ?? "support");
  }
  const blocks: AnswerBlock[] = [{ type: "summary", text: found.article.short_answer }];
  if (intent === "telecom_issues") {
    blocks.push({
      type: "boundary",
      text: "I can explain how Zoiko Tax approaches telecom taxes and fees in general, but actual rates and obligations depend on the service, locations, applicable rules and effective date.",
    });
  }
  if (FOLLOW_UP[intent]) blocks.push({ type: "next_step", text: FOLLOW_UP[intent] });
  return {
    intent,
    disposition: handoff ? "handoff" : "answered",
    blocks,
    evidence: [articleEvidence(found)],
    cta,
    preview: found.preview,
    contentTimestamp: found.article.effective_from ?? undefined,
  };
}

function route(session: Session, text: string, hint: Intent | undefined, now: Date): Draft {
  const guard = classifyGuard(text);
  if (guard) {
    emit("taxxon.policy.denied", { category: guard, policy_version: POLICY_VERSION });
    return guardDraft(guard, now);
  }

  const small = conversational(session, text);
  if (small) {
    session.intentClarifyAsked = false;
    return small;
  }
  // "Tell me more about e-invoicing" is a question about e-invoicing.
  text = text.replace(/^\s*(?:(?:can you |please )?tell me (?:more )?about|what about|how about|and)\s+/i, "") || text;

  // A pending WF-03 question takes the next message as its answer unless the
  // visitor clearly moved on (a different starter, or a different intent).
  if (session.pendingCoverage && (hint === undefined || hint === "coverage")) {
    const parsed = parseScope(text);
    const contributes =
      isNotSure(text) || parsed.ambiguous !== undefined || Object.keys(parsed.scope).length > 0;
    const elsewhere = classifyIntent(text);
    if (contributes || elsewhere === null || elsewhere === "coverage") return coverageDraft(session, text, now);
    session.pendingCoverage = undefined;
  }

  // After a coverage result, a typed follow-up that names only a country,
  // service or capability ("what about obligation tracking?") is still coverage.
  if (hint === undefined && session.lastCoverage && classifyIntent(text) === null) {
    const parsed = parseScope(text);
    if (parsed.ambiguous !== undefined || Object.keys(parsed.scope).length > 0) return coverageDraft(session, text, now);
  }

  const intent = hint ?? classifyIntent(text);
  if (intent === null) {
    // Any other public question is answered from the website when it says so.
    const site = siteDraft(session, "capabilities", text, undefined);
    if (site) {
      session.intentClarifyAsked = false;
      return site;
    }
    if (!session.intentClarifyAsked) {
      session.intentClarifyAsked = true;
      return {
        intent: "unsupported",
        disposition: "needs_clarification",
        blocks: [{ type: "summary", text: "I can help with product capabilities, jurisdiction coverage, integrations or arranging a demonstration. Which would you like?" }],
        clarification: INTENT_OPTIONS,
      };
    }
    session.intentClarifyAsked = false;
    return unverified("unsupported", text, "I can't answer that from published Zoiko Tax product information. Human support is available via the contact form.", "support");
  }
  session.intentClarifyAsked = false;
  emit("taxxon.intent.classified", { intent, policy_version: POLICY_VERSION });
  if (intent === "coverage") {
    return coverageDraft(session, text, now);
  }
  return knowledgeDraft(session, intent, text, now);
}

/** Final gate: schema, enums, links and CTA re-resolved from the registry. */
function finalise(draft: Draft, session: Session, traceId: string): TaxxonResponse {
  const cta: ApprovedCta | undefined = draft.cta ? resolveApprovedCta(draft.cta) : undefined;
  const evidence = (draft.evidence ?? []).filter(
    (e) => e.canonical_public_url === null || (e.canonical_public_url.startsWith("/") && !e.canonical_public_url.startsWith("//")),
  );
  const blocks = draft.blocks.filter((b) => b.text.trim() !== "");
  if (blocks.length === 0) blocks.push({ type: "notice", text: UNVERIFIABLE });
  const intent = draft.intent === "unsupported" || (INTENTS as readonly string[]).includes(draft.intent) ? draft.intent : "unsupported";
  const responseId = opaqueId("rsp");
  session.responseIds.add(responseId);
  return {
    response_id: responseId,
    message_id: responseId,
    session_id: session.id,
    trace_id: traceId,
    intent,
    disposition: draft.disposition,
    response_type: responseType(draft.disposition),
    ...(draft.scope ? { scope: draft.scope } : {}),
    ...(draft.coverage ? { coverage_status: draft.coverage } : {}),
    answer_blocks: blocks,
    evidence,
    source_unavailable: draft.sourceUnavailable ?? false,
    ...(cta ? { approved_cta: cta } : {}),
    ...(draft.clarification ? { clarification: draft.clarification } : {}),
    ...(draft.contentTimestamp ? { content_timestamp: draft.contentTimestamp } : {}),
    ...(draft.followUps?.length ? { follow_ups: [...new Set(draft.followUps)].slice(0, 3) } : {}),
    preview_content: draft.preview ?? false,
    versions: {
      assistant: ASSISTANT_VERSION,
      policy: POLICY_VERSION,
      coverage_snapshot: COVERAGE_SNAPSHOT_ID,
      manifest: MANIFEST_ID,
    },
  };
}

export function respond(session: Session, text: string, hint: Intent | undefined, traceId: string, now: Date): TaxxonResponse {
  const draft = route(session, text, hint, now);
  // Never suggest the question that was just asked.
  const asked = text.trim().toLowerCase().replace(/[?.!\s]+$/, "");
  draft.followUps = draft.followUps?.filter((q) => q.toLowerCase().replace(/[?.!\s]+$/, "") !== asked);
  const response = finalise(draft, session, traceId);
  if (response.approved_cta) {
    emit("taxxon.cta.offered", { destination_id: response.approved_cta.destination_id, trace_id: traceId });
  }
  return response;
}
