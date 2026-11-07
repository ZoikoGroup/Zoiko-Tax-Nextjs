"use client";

// One Taxxon answer as the assistant shows it: status, the answer blocks as escaped text, evidence, clarification
// options and the approved CTA (WF-01/WF-03, Doc 01 §4 lead handoff).

import type { ApprovedCta, Evidence, TaxxonResponse } from "@/lib/taxxon/types";

const LEAD_NOTICE = "I'll open the official request form. Your details are only sent after you review and submit it.";

const STATUS_STYLE: Record<string, string> = {
  verified_live: "bg-[#e3f1ec] text-[#1d5946] ring-[#26735b]",
  limited: "bg-[#fbefdf] text-[#7a470d] ring-[#9a5b12]",
  planned: "bg-[#e6edf8] text-[#264a80] ring-[#315b9a]",
  not_offered: "bg-[#ecebee] text-taxxon-graphite ring-taxxon-graphite",
  unknown: "bg-white text-taxxon-graphite ring-[#8a86a3]",
};

function dateLabel(e: Evidence): string {
  if (e.date_kind === "site_published") return `Published on zoikotax.com • Checked ${e.relevant_as_of}`;
  const kind = e.date_kind === "coverage_reviewed" ? "Coverage reviewed" : e.date_kind === "law_effective" ? "Law effective" : "Content reviewed";
  return `${kind} ${e.relevant_as_of}`;
}

export default function TaxxonAnswer({
  r,
  chip,
  focusRing,
  busy,
  answered,
  reviewing,
  onReview,
  onOption,
  onFollowUp,
  className = "rounded-2xl rounded-tl-sm bg-white p-3.5 text-sm",
}: {
  r: TaxxonResponse;
  chip: string;
  focusRing: string;
  busy: boolean;
  answered: boolean;
  reviewing: boolean;
  onReview: (open: boolean) => void;
  onOption: (value: string, label: string, dimension: string) => void;
  onFollowUp?: (question: string) => void;
  className?: string;
}) {
  const status = r.answer_blocks.find((b) => b.type === "status");
  const coverageCard = r.intent === "coverage" && r.coverage_status !== undefined;
  return (
    <article className={`taxxon-enter space-y-2.5 leading-relaxed ring-1 ${coverageCard ? "ring-taxxon-aubergine/30" : "ring-black/10"} ${className}`} aria-label="Taxxon answer">
      {r.preview_content ? <p className="text-[11px] font-semibold uppercase tracking-wide text-[#7a470d]">Draft content preview</p> : null}
      {coverageCard ? <p className="text-[11px] font-semibold uppercase tracking-wide text-taxxon-graphite/80">Product information only • Not a tax determination</p> : null}
      {status && r.coverage_status ? (
        <p className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide">Status</span>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${STATUS_STYLE[r.coverage_status]}`}>{status.text}</span>
        </p>
      ) : null}
      {r.answer_blocks
        .filter((b) => b.type !== "status")
        .map((b, i) =>
          b.type === "heading" ? (
            <h3 key={i} className="text-base leading-snug font-bold text-[#1f1235]">{b.text}</h3>
          ) : (
            <p key={i} className={b.type === "exclusions" ? "text-xs text-taxxon-graphite/85" : b.type === "boundary" ? "font-medium" : b.type === "next_step" ? "text-taxxon-graphite/85" : undefined}>
              {b.text}
            </p>
          ),
        )}

      {r.evidence.length > 0 ? (
        <div className="space-y-1.5 border-t border-black/10 pt-2">
          <p className="text-xs font-semibold uppercase tracking-wide">Evidence</p>
          {r.evidence.map((e) => (
            <div key={e.source_id} className="rounded-lg bg-taxxon-porcelain px-2.5 py-2 text-xs">
              {e.canonical_public_url ? (
                <a href={e.canonical_public_url} className={`font-semibold text-taxxon-aubergine underline ${focusRing}`}>{e.human_title}</a>
              ) : (
                <span className="font-semibold">{e.human_title}</span>
              )}
              <span className="block text-taxxon-graphite/80">{dateLabel(e)}{e.date_kind === "site_published" ? "" : ` • Revision ${e.approved_revision}`}</span>
            </div>
          ))}
        </div>
      ) : r.source_unavailable ? (
        <p className="border-t border-black/10 pt-2 text-xs text-taxxon-graphite/85">Source unavailable: no current approved source supports a more precise answer.</p>
      ) : null}

      {r.clarification ? (
        <div className="flex flex-wrap gap-2 max-md:flex-col" role="group" aria-label="Choose an answer">
          {r.clarification.options.map((o) => (
            <button key={o.value} type="button" disabled={busy || answered} className={chip} onClick={() => onOption(o.value, o.label, r.clarification!.dimension)}>
              {o.label}
            </button>
          ))}
        </div>
      ) : null}

      {r.follow_ups?.length && onFollowUp && !answered ? (
        <div className="border-t border-black/10 pt-2.5">
          <p className="text-xs font-semibold tracking-wide uppercase text-taxxon-graphite/75">Related questions</p>
          <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Related questions">
            {r.follow_ups.map((q) => (
              <button
                key={q}
                type="button"
                disabled={busy}
                onClick={() => onFollowUp(q)}
                className={`inline-flex min-h-9 items-center gap-1.5 rounded-full border border-[#c9bff3] bg-[#f7f5fe] px-3.5 py-1.5 text-left text-[13px] font-medium text-[#3d2f86] transition-colors hover:bg-[#efebfd] disabled:opacity-60 ${focusRing}`}
              >
                {q}
                <span aria-hidden="true">→</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {r.approved_cta ? <CtaAction cta={r.approved_cta} chip={chip} focusRing={focusRing} reviewing={reviewing} onReview={onReview} /> : null}
    </article>
  );
}

function CtaAction({
  cta,
  chip,
  focusRing,
  reviewing,
  onReview,
}: {
  cta: ApprovedCta;
  chip: string;
  focusRing: string;
  reviewing: boolean;
  onReview: (open: boolean) => void;
}) {
  const link = (
    <a
      href={cta.url}
      {...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-11 items-center rounded-xl bg-taxxon-aubergine px-4 py-2 text-sm font-semibold text-white ring-2 ring-taxxon-copper/60 hover:bg-taxxon-aubergine/90 ${focusRing}`}
    >
      {cta.requires_review_notice ? "Open official request form" : cta.label}
      {cta.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
  if (!cta.requires_review_notice) return <div className="pt-1">{link}</div>;
  // Doc 01 §4 lead handoff: no data is sent from chat; the visitor reviews the
  // destination and submits the official form themselves.
  return reviewing ? (
    <div className="space-y-2 rounded-xl bg-taxxon-porcelain p-3">
      <p className="text-xs">{LEAD_NOTICE}</p>
      <div className="flex flex-wrap items-center gap-2">
        {link}
        <button type="button" onClick={() => onReview(false)} className={`text-xs underline ${focusRing}`}>Not now</button>
      </div>
    </div>
  ) : (
    <div className="pt-1">
      <button type="button" onClick={() => onReview(true)} className={chip}>{cta.label}</button>
    </div>
  );
}
