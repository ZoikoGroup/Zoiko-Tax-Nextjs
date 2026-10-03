"use client";

import React, { useMemo, useState } from "react";
import { ArrowRight, Boxes, ChevronDown, Files, Search } from "lucide-react";
import { BG, FINDER_DATA, ILLUSTRATIVE_LABEL, ROUTES, SDK_RECORDS } from "./sdks-data";
import {
  SectionContainer,
  SectionHeader,
  SecondaryButton,
  Reveal,
  TextLink,
  IllustrativeBanner,
  MetaField,
  NoticeBox,
} from "./shared";

export default function FinderSection() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");

  const results = useMemo(() => {
    const term = submitted.trim().toLowerCase();
    const sorted = [...SDK_RECORDS].sort((a, b) => a.title.localeCompare(b.title));
    if (!term) return sorted;
    return sorted.filter((r) =>
      [r.title, r.language, ...r.aliases].some((v) => v.toLowerCase().includes(term))
    );
  }, [submitted]);

  const reset = () => {
    setQuery("");
    setSubmitted("");
  };

  const state = SDK_RECORDS.length === 0 && !submitted.trim() ? FINDER_DATA.empty : FINDER_DATA.noMatch;
  const { card, detail, facets } = FINDER_DATA;

  return (
    <SectionContainer
      id="sdk-finder"
      className="bg-[#FAF8FA] scroll-mt-24"
      style={{ backgroundImage: `url('${BG.finder}')`, backgroundSize: "cover", backgroundPosition: "top center" }}
    >
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeader eyebrow={FINDER_DATA.eyebrow} title={FINDER_DATA.title} description={FINDER_DATA.description} />
        </Reveal>

        {/* Search panel */}
        <Reveal delay={0.04}>
          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(query);
            }}
            className="rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-7 flex flex-col gap-4"
          >
            <label htmlFor="sdk-search" className="text-sm font-semibold text-[#18141B]">
              {FINDER_DATA.searchLabel}
            </label>
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
              <div className="flex-1 h-14 px-4 rounded-[10px] bg-[#FAF8FA] border-2 border-[#301153] flex items-center gap-3 focus-within:ring-2 focus-within:ring-[#D65A2C]/30">
                <Search className="h-5 w-5 shrink-0 text-[#665F69]" aria-hidden="true" />
                <input
                  id="sdk-search"
                  type="search"
                  autoComplete="off"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={FINDER_DATA.placeholder}
                  className="flex-1 min-w-0 bg-transparent text-base text-[#18141B] placeholder:text-[#665F69] outline-none [&::-webkit-search-cancel-button]:hidden"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="text-xs text-[#D65A2C] hover:underline cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#BF6735] h-12 px-5 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all active:scale-[0.98] cursor-pointer"
                >
                  Search records
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="text-sm font-semibold text-[#D65A2C] hover:underline cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </div>
            <p className="text-sm leading-5 text-[#665F69]">{FINDER_DATA.helper}</p>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="text-[#665F69]">{FINDER_DATA.registryStatus}</span>
              <span className="text-[#18141B]">{FINDER_DATA.order}</span>
            </div>
          </form>
        </Reveal>

        {/* Results / empty state */}
        <Reveal delay={0.08}>
          <div aria-live="polite">
            {results.length > 0 ? (
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((r) => (
                  <li key={r.title} className="rounded-2xl border border-[#D8CEDD] bg-white p-6">
                    <p className="text-lg font-semibold text-[#18141B]">{r.title}</p>
                    <p className="text-sm text-[#665F69]">{r.language}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="rounded-3xl border border-[#D8CEDD] bg-white px-5 py-10 sm:p-10 flex flex-col items-center gap-4 text-center">
                <Files className="h-10 w-10 text-[#D65A2C]" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#18141B]">{state.title}</h3>
                <p className="max-w-[880px] text-base leading-6 text-[#665F69]">{state.description}</p>
                <div className="flex flex-wrap justify-center gap-3 pt-1">
                  <SecondaryButton href={ROUTES.apiReference}>
                    <span className="inline-flex items-center gap-2.5">
                      Read API Reference
                      <ArrowRight className="h-4 w-4 text-[#D65A2C]" aria-hidden="true" />
                    </span>
                  </SecondaryButton>
                  <SecondaryButton href={ROUTES.integrationGuides}>
                    <span className="inline-flex items-center gap-2.5">
                      Explore Integration Guides
                      <ArrowRight className="h-4 w-4 text-[#D65A2C]" aria-hidden="true" />
                    </span>
                  </SecondaryButton>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Specimen header */}
        <Reveal>
          <div className="pt-6 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#18141B]">{FINDER_DATA.specimenTitle}</h3>
            <span className="text-xs font-semibold text-[#665F69]">{FINDER_DATA.specimenTag}</span>
          </div>
        </Reveal>

        {/* Specimen card + detail */}
        <div className="flex flex-col lg:flex-row gap-6">
          <Reveal className="lg:w-96 shrink-0">
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col items-start gap-4">
              <IllustrativeBanner />
              <Boxes className="h-8 w-8 text-[#D65A2C]" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-2xl font-semibold text-[#18141B]">{card.title}</p>
              {card.fields.map((f) => (
                <MetaField key={f.label} label={f.label} value={f.value} />
              ))}
              <div className="w-full rounded-[10px] bg-[#F1E8F8] p-4 flex flex-col gap-2.5">
                <p className="text-xs font-semibold text-[#18141B]">{card.slotsTitle}</p>
                <p className="text-xs leading-5 text-[#665F69]">
                  {card.slotsLines[0]}
                  <br />
                  {card.slotsLines[1]}
                </p>
              </div>
              <SecondaryButton href="#sdk-detail">
                <span className="inline-flex items-center gap-2.5">
                  {card.action}
                  <ArrowRight className="h-4 w-4 text-[#D65A2C]" aria-hidden="true" />
                </span>
              </SecondaryButton>
              <p className="text-xs leading-5 text-[#665F69]">{card.footnote}</p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex-1 min-w-0">
            <div
              id="sdk-detail"
              className="h-full rounded-3xl border border-[#301153] bg-white p-6 sm:p-8 flex flex-col gap-4 scroll-mt-24"
            >
              <IllustrativeBanner />
              <div className="flex flex-col gap-2">
                <p className="text-2xl sm:text-3xl font-semibold text-[#18141B]">{detail.title}</p>
                <p className="text-sm leading-5 text-[#665F69]">{detail.description}</p>
              </div>
              {detail.fields.map((f) => (
                <MetaField key={f.label} label={f.label} value={f.value} />
              ))}
              <NoticeBox title={detail.notice.title} description={detail.notice.description} />
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {detail.links.map((l) => (
                  <TextLink key={l.label} href={l.href}>
                    {l.label}
                  </TextLink>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Facet placeholders */}
        <Reveal>
          <div className="rounded-xl border border-[#D8CEDD] bg-[#F1E8F8] p-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="md:max-w-[580px] flex flex-col gap-2">
              <p className="text-xs font-bold text-[#D65A2C]">{ILLUSTRATIVE_LABEL}</p>
              <p className="text-xs leading-5 text-[#665F69]">{facets.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {facets.items.map((label) => (
                <span
                  key={label}
                  aria-disabled="true"
                  className="inline-flex items-center gap-3 rounded-lg border border-[#D8CEDD] bg-white p-3.5 text-xs text-[#665F69] cursor-not-allowed"
                >
                  {label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
