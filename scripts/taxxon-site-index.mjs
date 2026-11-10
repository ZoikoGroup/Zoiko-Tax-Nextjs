#!/usr/bin/env node
// Builds lib/taxxon/site-index.json: the published text of the public website,
// split into heading-led sections, for Taxxon to quote verbatim with a link to
// the page it came from. Nothing here is rewritten or summarised.
//
//   node scripts/taxxon-site-index.mjs [base-url]   (default https://zoikotax.com)
//
// Re-run after site content changes and commit the result.

import { readdirSync, writeFileSync } from "node:fs";

const BASE = new URL(process.argv[2] ?? "https://zoikotax.com").origin;
const OUT = new URL("../lib/taxxon/site-index.json", import.meta.url);
const MAX_PAGES = 400;
const SKIP = /^\/(?:api|_next|sign-in|sign-up|login|register)(?:\/|$)|\.[a-z0-9]{2,5}$/i;
const SECTION_LIMIT = 900;

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", mdash: "—", ndash: "–", hellip: "…", bull: "•", middot: "·", trade: "™", reg: "®", copy: "©" };
const decode = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) =>
    e[0] === "#" ? String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : Number(e.slice(1))) : ENTITIES[e.toLowerCase()] ?? m,
  );
const clean = (html) => decode(html.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

function extract(html) {
  const title = clean(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").replace(/^ZoikoTax\s*[|–—-]\s*|\s*[|–—-]\s*ZoikoTax.*$/gi, "");
  let main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? "";
  main = main.replace(/<(script|style|svg|noscript|form|button|nav|footer)\b[\s\S]*?<\/\1>/gi, " ");
  const sections = [];
  let current = { heading: title, parts: [] };
  const seen = new Set();
  for (const m of main.matchAll(/<(h[1-4]|p|li|dt|dd|td|th|summary|blockquote|figcaption)\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
    const tag = m[1].toLowerCase();
    // FAQ entries end with their anchor id and a "Copy link" button label.
    const text = clean(m[2]).replace(/\s*(?:\b[a-z]+(?:-[a-z0-9]+)+\s*)?·?\s*Copy link$/i, "");
    // Breadcrumbs ("Offices & Connect · Partnerships") are navigation, not content.
    if (!text || text.length < 3 || seen.has(text) || /^[^.?!]{1,60} · [^.?!]{1,60}$/.test(text)) continue;
    seen.add(text);
    if (tag[0] === "h") {
      if (current.parts.length) sections.push(current);
      current = { heading: text, parts: [] };
    } else {
      current.parts.push(text);
    }
  }
  if (current.parts.length) sections.push(current);
  return { title, sections };
}

function links(html, from) {
  const out = new Set();
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    try {
      const u = new URL(decode(m[1]), from);
      if (u.origin !== BASE) continue;
      const path = u.pathname.replace(/\/+$/, "") || "/";
      if (!SKIP.test(path)) out.add(path);
    } catch {}
  }
  return out;
}

// Pages nothing links to are still public: seed every static route in app/.
function appRoutes(dir = new URL("../app/", import.meta.url), prefix = "") {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory() || /^[_[@.]/.test(e.name) || e.name === "api") continue;
    const seg = /^\(.*\)$/.test(e.name) ? "" : `/${e.name}`;
    const child = new URL(`${e.name}/`, dir);
    if (readdirSync(child).some((f) => /^page\.(tsx|jsx|ts|js|mdx)$/.test(f))) out.push(prefix + seg || "/");
    out.push(...appRoutes(child, prefix + seg));
  }
  return out;
}

const queue = ["/", ...appRoutes().filter((r) => r !== "/" && !SKIP.test(r))];
const visited = new Set(queue);
const failed = [];
const chunks = [];
let pages = 0;

while (queue.length && pages < MAX_PAGES) {
  const batch = queue.splice(0, 4);
  await Promise.all(
    batch.map(async (path) => {
      let html;
      for (let attempt = 1; attempt <= 4 && html === undefined; attempt++) {
        try {
          const res = await fetch(BASE + path, { headers: { "user-agent": "TaxxonSiteIndexer/1.0" }, redirect: "follow", signal: AbortSignal.timeout(30_000) });
          if (res.status === 404) return;
          if (res.ok && res.headers.get("content-type")?.includes("text/html")) html = await res.text();
          else if (res.ok) return;
        } catch {}
        if (html === undefined) await new Promise((r) => setTimeout(r, 1500 * attempt));
      }
      if (html === undefined) {
        failed.push(path);
        return;
      }
      pages++;
      for (const l of links(html, BASE + path)) {
        if (visited.has(l)) continue;
        visited.add(l);
        queue.push(l);
      }
      const { title, sections } = extract(html);
      sections.forEach((s, i) => {
        // Long sections become several chunks, split between whole parts.
        let text = "";
        let part = 0;
        const flush = () => {
          if (text) chunks.push({ id: `${path}#${i}.${part++}`, url: path, title: title || path, heading: s.heading, text });
          text = "";
        };
        for (const p of s.parts) {
          if (text && text.length + p.length + 1 > SECTION_LIMIT) flush();
          text = text ? `${text} ${p}` : p;
        }
        flush();
      });
    }),
  );
}

chunks.sort((a, b) => a.id.localeCompare(b.id));
writeFileSync(OUT, JSON.stringify({ source: BASE, crawled_at: new Date().toISOString().slice(0, 10), pages, chunks }, null, 1) + "\n");
console.log(`indexed ${pages} pages, ${chunks.length} sections from ${BASE}`);
if (failed.length) {
  console.error(`could not fetch ${failed.length} page(s): ${failed.join(" ")}`);
  process.exitCode = 1;
}
