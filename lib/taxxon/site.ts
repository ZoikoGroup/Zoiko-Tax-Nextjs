// Published website search. site-index.json is the text of zoikotax.com as
// crawled by scripts/taxxon-site-index.mjs; this ranks its sections against a
// question (BM25) and returns whole sections to be quoted verbatim with a link
// to their page. Nothing is paraphrased, summarised or generated.

import index from "./site-index.json" with { type: "json" };
import type { Evidence } from "./types";

export interface SiteChunk {
  id: string;
  url: string;
  title: string;
  heading: string;
  text: string;
}

export const SITE_SOURCE: string = index.source;
export const SITE_CRAWLED_AT: string = index.crawled_at;
const CHUNKS: SiteChunk[] = index.chunks;

const STOP = new Set(
  "a about above after again all also am an and any are as at be been being below between both but by can could did do does doing down during each few for from further had has have having here how i if in into is it its itself just me more most my no nor not now of off on once only or other our out over own same she should so some such than that the their them then there these they this those through to too under until up very was we were what when where which while who whom why will with would you your yours taxxon please tell know want need help give explain show work works working use using get make mean means way thing things kind type something anything offer offers offering provide provides available availability apply applies applied differ differs different ok okay yes yeah yep hi hello hey thanks thank so well good great best better suitable fit right really just"
    .split(" "),
);

function stem(t: string): string {
  if (t.length > 5 && t.endsWith("ies")) return `${t.slice(0, -3)}y`;
  if (t.length > 5 && t.endsWith("ing")) return t.slice(0, -3);
  if (t.length > 4 && t.endsWith("ed")) return t.slice(0, -2);
  if (t.length > 3 && t.endsWith("s") && !t.endsWith("ss")) return t.slice(0, -1);
  return t;
}

function terms(text: string): string[] {
  return (text.toLowerCase().normalize("NFKD").replace(/\bzoiko\s+tax\b/g, "zoikotax").match(/[a-z0-9]+/g) ?? []).filter((t) => t.length > 1 && !STOP.has(t)).map(stem);
}

// Title and heading words are counted twice: they say what a section is about.
const DOCS = CHUNKS.map((c) => {
  const tf = new Map<string, number>();
  for (const t of [...terms(c.title), ...terms(c.heading), ...terms(c.heading), ...terms(c.text)]) tf.set(t, (tf.get(t) ?? 0) + 1);
  let len = 0;
  for (const n of tf.values()) len += n;
  return {
    tf,
    len,
    title: new Set(terms(c.title)),
    heading: new Set(terms(c.heading)),
    defines: /^(?:what|who) (?:is|are)\b/i.test(c.heading),
    yesNo: /^(?:does|do|is|are|can|will|should|could|would|has|have)\b.*\?$/i.test(c.heading),
    // A page's opening sections are its own summary of the topic.
    lead: /#[01]\.0$/.test(c.id),
  };
});
const AVG_LEN = DOCS.reduce((s, d) => s + d.len, 0) / Math.max(DOCS.length, 1);
const DF = new Map<string, number>();
for (const d of DOCS) for (const t of d.tf.keys()) DF.set(t, (DF.get(t) ?? 0) + 1);

const idf = (t: string) => {
  const df = DF.get(t) ?? 0;
  return Math.log(1 + (DOCS.length - df + 0.5) / (df + 0.5));
};

const MAX_IDF = Math.log(1 + (DOCS.length + 0.5) / 0.5);

// The site's own words for what visitors commonly ask about.
const SYNONYMS: Record<string, string[]> = {
  office: ["hq", "headquarter"],
  company: ["us", "group"],
  mode: ["model"],
  down: ["status"],
  headquarter: ["hq"],
  job: ["career"],
  hir: ["career"],
  vacancy: ["career"],
  price: ["pricing", "cost"],
  cost: ["pricing"],
  trial: ["pilot", "sandbox"],
  vulnerability: ["disclosure"],
  outage: ["status"],
  downtime: ["status"],
  voip: ["voice"],
};

interface Ranked {
  i: number;
  score: number;
  coverage: number;
}

/** Every section scored against a question, strongest first; [] when nothing applies. */
function rank(question: string): { ranked: Ranked[]; floor: number } {
  // Visitors ask the site about itself: "do you…", "your company".
  // "Do you support VoIP?" asks about VoIP, not about customer support.
  const plain = question.replace(/\b(do|does|can|will)\s+(you|zoiko\s*tax)\s+support\b/gi, "$1 $2");
  const base = terms(plain.replace(/\b(?:you|your|yours|yourselves)\b/gi, "zoikotax"));
  const asked = [...new Set(base)];
  const expanded = [...new Set(base.flatMap((t) => SYNONYMS[t]?.map(stem) ?? []))].filter((t) => !asked.includes(t) && DF.has(t));
  const definition = /^\s*(?:what|who)\s+(?:is|are|does|do)\b/i.test(question);
  const wh = /^\s*(?:how|where|what|which|who|when|why)\b/i.test(question);
  const q = asked.filter((t) => DF.has(t));
  if (q.length === 0 && expanded.length === 0) return { ranked: [], floor: 0 };
  // Words the site never uses still count: a question mostly about something
  // the site does not cover ("the weather today") gets no answer.
  const askedWeight = asked.reduce((sum, t) => sum + (DF.has(t) ? idf(t) : MAX_IDF), 0);
  const k1 = 1.2;
  const b = 0.75;
  const ranked = DOCS.map((d, i) => {
    let score = 0;
    let covered = 0;
    for (const t of q) {
      const f = d.tf.get(t);
      if (!f) continue;
      covered += idf(t);
      score += idf(t) * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * d.len) / AVG_LEN)));
    }
    // A synonym stands in for an asked word the site does not use.
    for (const t of expanded) {
      const f = d.tf.get(t);
      if (!f) continue;
      covered += MAX_IDF;
      score += idf(t) * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * d.len) / AVG_LEN)));
    }
    const c = CHUNKS[i];
    // A one-line card says little on its own; prefer sections with substance,
    // and sections the site itself frames as an answer to a question.
    if (c.text.length < 80) score *= 0.5;
    else if (c.text.length < 160) score *= 0.8;
    if (c.heading.endsWith("?")) score *= 1.5;
    // A heading that names what was asked about is the strongest signal; a
    // page whose title does is about the topic as a whole.
    const n = Math.max(q.length, 1);
    score *= 1 + Math.min(1, [...q, ...expanded].filter((t) => d.heading.has(t)).length / n);
    score *= 1 + (1.5 * q.filter((t) => d.title.has(t)).length) / n;
    if (definition && d.defines) score *= 1.6;
    // A yes/no FAQ ("Does subscribing authorize sales contact?") seldom
    // answers a how/where/what question that shares its words.
    if (wh && d.yesNo) score *= 0.5;
    // On the page about the topic asked, its introduction answers best.
    if (d.lead && q.some((t) => d.title.has(t))) score *= 1.6;
    return { i, score, coverage: askedWeight > 0 ? covered / askedWeight : 0 };
  })
    .filter((s) => s.score > 0)
    .sort((x, y) => y.score - x.score);
  // A word on nearly every page ("ZoikoTax") scores low however well it
  // matches, so the floor is never above what the question can earn.
  return { ranked, floor: Math.min(3, q.reduce((sum, t) => sum + idf(t), 0)) };
}

/** The best-matching sections, at most one per page, strongest first. */
export function searchSite(question: string, limit = 1): SiteChunk[] {
  const { ranked, floor } = rank(question);
  const best = ranked.filter((s) => s.coverage >= 0.5 && s.score > floor);
  const pages = new Set<string>();
  const texts = new Set<string>();
  const out: SiteChunk[] = [];
  for (const s of best) {
    const c = CHUNKS[s.i];
    // The same passage is published on more than one page; show it once.
    if (pages.has(c.url) || texts.has(c.text)) continue;
    pages.add(c.url);
    texts.add(c.text);
    out.push(c);
    if (out.length === limit) break;
  }
  // A second page is shown only when it is nearly as relevant as the first.
  if (out.length === 2) {
    const [a, b2] = out.map((c) => best.find((s) => CHUNKS[s.i] === c)!.score);
    if (b2 < a * 0.9) out.pop();
  }
  return out;
}

const order = (c: SiteChunk) => {
  const m = c.id.match(/#(\d+)\.(\d+)$/);
  return m ? Number(m[1]) * 1000 + Number(m[2]) : 0;
};
// A real question, not a call to action ("Already a customer?").
const isQuestion = (h: string) => h.endsWith("?") && h.length <= 110 && h.split(/\s+/).length >= 4;

/**
 * What to ask next after a passage, all things the site answers: FAQ headings
 * on the same page, then its other substantive section headings, then FAQs
 * on other pages about the same topic.
 */
export function relatedQuestions(shown: SiteChunk, n = 3): string[] {
  const seen = new Set([shown.heading.toLowerCase(), shown.title.toLowerCase()]);
  const out: string[] = [];
  const take = (heading: string) => {
    const h = heading.replace(/^Q:\s*/i, "");
    if (out.length < n && !seen.has(h.toLowerCase())) {
      seen.add(h.toLowerCase());
      out.push(h);
    }
  };
  const page = CHUNKS.filter((c) => c.url === shown.url && c.id !== shown.id).sort((a, b) => order(a) - order(b));
  for (const c of page) if (isQuestion(c.heading) && c.text.length >= 40) take(c.heading);
  for (const q of suggestQuestions(`${shown.title} ${shown.heading}`, n + 2)) take(q);
  // Topic headings ("Federated Mode"), not taglines ending in a full stop.
  for (const c of page) if (!/[.!?]$/.test(c.heading) && c.heading.length >= 8 && c.heading.length <= 50 && c.text.length >= 80) take(c.heading);
  return out;
}

/** "Tell me more": the page's next substantive sections not yet shown. */
export function moreFromPage(url: string, shown: string[], n = 2): SiteChunk[] {
  const skip = new Set(shown);
  const texts = new Set(CHUNKS.filter((c) => skip.has(c.id)).map((c) => c.text));
  const out: SiteChunk[] = [];
  for (const c of CHUNKS.filter((c) => c.url === url).sort((a, b) => order(a) - order(b))) {
    if (skip.has(c.id) || texts.has(c.text) || c.text.length < 80) continue;
    texts.add(c.text);
    out.push(c);
    if (out.length === n) break;
  }
  return out;
}

/** When nothing answers well enough: the closest questions the site does answer. */
export function suggestQuestions(question: string, n = 3): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const s of rank(question).ranked) {
    if (s.coverage < 0.3) continue;
    const h = CHUNKS[s.i].heading;
    if (!isQuestion(h) || seen.has(h.toLowerCase())) continue;
    seen.add(h.toLowerCase());
    out.push(h);
    if (out.length === n) break;
  }
  return out;
}

/** Headings of sections by id, so suggestions never repeat what was shown. */
export function headingsOf(ids: string[]): Set<string> {
  const want = new Set(ids);
  return new Set(CHUNKS.filter((c) => want.has(c.id)).map((c) => c.heading.replace(/^Q:\s*/i, "").toLowerCase()));
}

/** A section heading worth showing above its passage, if it adds anything. */
export function headingFor(c: SiteChunk): string | undefined {
  const h = c.heading.trim();
  if (h.length < 8 || h.length > 120 || h === c.title || c.text.startsWith(h)) return undefined;
  return h;
}

/** The passage as published, cut at a sentence end if it is long. */
export function passage(c: SiteChunk, max = 600): string {
  if (c.text.length <= max) return c.text;
  const cut = c.text.slice(0, max);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "), cut.lastIndexOf("! "));
  return end > max / 3 ? cut.slice(0, end + 1) : `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

export function siteEvidence(c: SiteChunk): Evidence {
  return {
    source_id: `site:${c.id}`,
    human_title: c.heading && c.heading !== c.title ? `${c.title}: ${c.heading}` : c.title,
    canonical_public_url: c.url,
    approved_revision: `zoikotax.com ${SITE_CRAWLED_AT}`,
    relevant_as_of: SITE_CRAWLED_AT,
    date_kind: "site_published",
  };
}
