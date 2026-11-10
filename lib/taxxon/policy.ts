// Input policy for the public assistant. Doc 03 §6: the hard safety classifier
// runs before retrieval, in code; prompts are not a security boundary. Visitor
// text is untrusted data, so nothing here can raise privileges or add tools.

import { LIMITS } from "./config";

export type Guard =
  | "sensitive_data"
  | "injection"
  | "private_account"
  | "file_or_pay"
  | "content_change"
  | "calculation"
  | "legal_opinion"
  | "service_level";

// Control, zero-width, bidi-override and BOM characters, built from code
// points so this file stays ASCII.
const INVISIBLE = new RegExp(
  `[${[[0x00, 0x08], [0x0b, 0x0c], [0x0e, 0x1f], [0x7f, 0x7f], [0x200b, 0x200f], [0x2028, 0x202e], [0x2060, 0x206f], [0xfeff, 0xfeff]]
    .map(([a, b]) => `\\u${a.toString(16).padStart(4, "0")}-\\u${b.toString(16).padStart(4, "0")}`)
    .join("")}]`,
  "g",
);

/** Unicode-normalise and bound the text (Doc 03 §3 request validation). */
export function normaliseText(raw: string): string {
  return raw
    .normalize("NFKC")
    .replace(INVISIBLE, "")
    .replace(/[ \t]+/g, " ")
    .trim()
    .slice(0, LIMITS.maxMessageChars);
}

function luhn(digits: string): boolean {
  let sum = 0;
  let double = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = digits.charCodeAt(i) - 48;
    if (double) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
    double = !double;
  }
  return sum % 10 === 0;
}

function hasPaymentCard(text: string): boolean {
  for (const m of text.matchAll(/\b(?:\d[ -]?){13,19}\b/g)) {
    const digits = m[0].replace(/\D/g, "");
    if (digits.length >= 13 && digits.length <= 19 && luhn(digits)) return true;
  }
  return false;
}

const SENSITIVE: RegExp[] = [
  /\b(password|passwd|pwd|passcode|api[ _-]?key|secret|bearer|access token|auth token)\b\s*(is|[:=])/i,
  /\bmy (password|passcode|pin)\b/i,
  /\b[A-Z]{2}\d{2}(?: ?[A-Z0-9]{4}){3,7}(?: ?[A-Z0-9]{1,3})?\b/, // IBAN
  /\b\d{3}-\d{2}-\d{4}\b/, // US SSN
  /\b\d{2}-\d{7}\b/, // US EIN
  /\b[A-CEGHJ-PR-TW-Z]{2} ?\d{2} ?\d{2} ?\d{2} ?[A-D]\b/, // UK NINO
  /\b(account number|routing number|sort code|swift|bic|tax id|taxpayer id|tin|vat number)\b\s*(is|[:#=])?\s*[A-Z0-9][A-Z0-9 -]{5,}/i,
];

/** Pasted invoice/dossier: an invoice reference alongside several amounts. */
function looksLikeInvoice(text: string): boolean {
  const amounts = text.match(/(?:[$£€]\s?\d[\d,]*(?:\.\d{2})?|\b\d[\d,]*\.\d{2}\b)/g) ?? [];
  return /\binvoice\s*(no|number|#|id)\b/i.test(text) && amounts.length >= 3;
}

const INJECTION: RegExp[] = [
  /\b(ignore|disregard|forget|override)\b[^.]{0,40}\b(previous|prior|above|earlier|all|your|the|system)\b[^.]{0,20}\b(instructions?|rules|polic(y|ies)|prompts?|guardrails|safeguards)\b/i,
  /^\s*(system|developer|assistant)\s*:/im,
  /\[(system|developer)\]/i,
  /\byou are now\b/i,
  /\b(reveal|show|print|repeat|leak)\b[^.]{0,30}\b(system prompt|hidden prompt|instructions|secrets?|api keys?)\b/i,
  /\bi am (an? )?(admin|administrator|super ?admin|developer|root|zoiko (staff|employee))\b/i,
  /\b(jailbreak|dan mode|developer mode|god mode)\b/i,
];

// Requests aimed at the assistant itself ("submit my return") are refused;
// questions about the product ("can Zoiko Tax file returns?") are answered
// from approved content instead (Doc 01 §9).
const DIRECTED = String.raw`(?:^|\b(?:can|could|would|will) you\b|\bplease\b|\bpls\b)\s*`;

const PRIVATE_ACCOUNT: RegExp[] = [
  /\b(show|read|open|pull|fetch|retrieve|look up|access|view|display|list)\b[^.]{0,40}\b(ledger|tenant|account|records?|invoices?|transactions?|filings?)\b/i,
  /\b(my|our)\b[^.]{0,20}\b(ledger|tax records|account (data|records|balance|details))\b/i,
];

const FILE_OR_PAY: RegExp[] = [
  new RegExp(
    `${DIRECTED}(file|submit|amend|lodge|pay|remit)\\b[^.?]{0,40}\\b(returns?|filings?|forms?|tax|taxes|liability|vat|it|this|that|amount|payment)\\b`,
    "i",
  ),
  /\b(file|submit|amend|pay|remit)\b[^.]{0,40}\bfor (me|us)\b/i,
  new RegExp(
    `${DIRECTED}(make|authori[sz]e|approve)\\b(?:\\s+(?:a|an|the|this|that|any|my|our|your))?\\s+(payment|remittance|filing)\\b`,
    "i",
  ),
];

const CONTENT_CHANGE: RegExp[] = [
  new RegExp(`${DIRECTED}(change|update|edit|modify|set|lower|raise|override)\\b[^.]{0,30}\\b(rates?|rules?|ledger|invoices?|content)\\b`, "i"),
];

const CALCULATION: RegExp[] = [
  new RegExp(`${DIRECTED}(calculate|compute|work out|estimate|tell me)\\b[^.]{0,40}\\b(tax|taxes|liability|fees?|surcharge|amount|vat)\\b`, "i"),
  /\b(calculate|compute|work out)\b[^.]{0,15}\b(my|our|this|the exact|exact)\b/i,
  /\bhow much (tax|vat|surcharge|fees?) (do|will|would|should|must) (i|we)\b/i,
  /\b(what is|what's|give me|tell me|current|exact|today'?s)\b[^.?]{0,40}\btax(es)? rates?\b/i,
  /\b(what is|what's|give me|tell me)\b[^.?]{0,40}\brates?\b[^.?]{0,20}\b(tax|vat|telecom|excise)\b/i,
  /\btax rate (on|for)\b/i,
  /\b(this|my|our|an?) invoice\b[^.]{0,40}\b(tax|total|amount|rate)\b/i,
];

const LEGAL_OPINION: RegExp[] = [
  /\b(do|must|should) (i|we) (have to |need to )?(file|register|collect|remit|pay)\b/i,
  /\b(am i|are we) (required|obliged|liable)\b/i,
  /\b(nexus|taxable|is (it|this|my service) taxable|tax treatment of my)\b/i,
];

const SERVICE_LEVEL: RegExp[] = [/\b(guaranteed )?(uptime|sla|service level|availability guarantee)\b/i];

/** First matching guard in decreasing order of risk, or null. */
export function classifyGuard(text: string): Guard | null {
  if (hasPaymentCard(text) || looksLikeInvoice(text) || SENSITIVE.some((r) => r.test(text))) return "sensitive_data";
  if (INJECTION.some((r) => r.test(text))) return "injection";
  if (PRIVATE_ACCOUNT.some((r) => r.test(text))) return "private_account";
  if (FILE_OR_PAY.some((r) => r.test(text))) return "file_or_pay";
  if (CONTENT_CHANGE.some((r) => r.test(text))) return "content_change";
  if (CALCULATION.some((r) => r.test(text))) return "calculation";
  if (LEGAL_OPINION.some((r) => r.test(text))) return "legal_opinion";
  if (SERVICE_LEVEL.some((r) => r.test(text))) return "service_level";
  return null;
}

/** Doc 04 §10 mandatory messages, worded as approved there. */
export const GUARD_COPY: Record<Guard, string> = {
  sensitive_data:
    "Please do not share bank details, passwords, tax IDs or invoice records here. For account-specific help, use the secure support route.",
  injection:
    "I can help with Zoiko Tax product information. I cannot override system safeguards or access restricted systems.",
  private_account: "I cannot access or disclose private account data. Please sign in to the authorised service.",
  file_or_pay:
    "I cannot submit returns or make payments here. Those actions require authorised workflows outside this public assistant.",
  content_change:
    "I cannot change tax rates, content releases, invoices or ledgers. Tax content changes follow a governed review and release process outside this public assistant.",
  calculation: "I can explain the platform, but I cannot calculate an invoice-specific tax amount in public chat.",
  legal_opinion:
    "That requires current source-backed analysis by an authorised tax professional. Here is how Zoiko Tax approaches the workflow.",
  service_level:
    "I can't verify a service level or uptime commitment from an approved source. Please refer to official commercial terms or contact our team.",
};

export const DATA_PROTECTION_NOTICE =
  "Please don't share invoices, tax returns, account numbers, credentials or personal financial information here. I can explain Zoiko Tax features and help you find a secure route.";
