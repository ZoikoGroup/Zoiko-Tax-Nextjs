"use client";

import React, { useMemo, useState } from "react";
import clsx from "clsx";
import { Files, Search } from "lucide-react";
import { EVENT_CONTRACTS_DATA, EVENT_RECORDS } from "./webhooks-events-data";
import { SectionContainer, SectionHeader, Reveal, Card, ArrowLink, LAVENDER } from "./shared";

export default function EventContractsSection() {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();

  const results = useMemo(
    () =>
      EVENT_RECORDS.filter(
        (r) => !term || r.name.toLowerCase().includes(term) || r.description.toLowerCase().includes(term)
      ),
    [term]
  );

  const state = term ? EVENT_CONTRACTS_DATA.noMatch : EVENT_CONTRACTS_DATA.empty;

  return (
    <SectionContainer id="event-contracts" className={clsx(LAVENDER, "scroll-mt-24")}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            eyebrow={EVENT_CONTRACTS_DATA.eyebrow}
            title={EVENT_CONTRACTS_DATA.title}
            description={EVENT_CONTRACTS_DATA.description}
          />
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-3xl border border-[#D8CEDD] bg-white p-5 sm:p-8 flex flex-col gap-6">
            <form
              role="search"
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-4"
            >
              <div className="flex-1 flex flex-col gap-2.5">
                <label htmlFor="event-search" className="text-sm text-[#18141B]">
                  {EVENT_CONTRACTS_DATA.searchLabel}
                </label>
                <div className="min-h-14 px-3 sm:px-4 rounded-xl border-2 border-[#6B21A8] flex items-center gap-3 focus-within:ring-2 focus-within:ring-[#6B21A8]/25">
                  <Search className="h-5 w-5 shrink-0 text-[#665F69]" aria-hidden="true" />
                  <input
                    id="event-search"
                    type="search"
                    autoComplete="off"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={EVENT_CONTRACTS_DATA.placeholder}
                    className="flex-1 min-w-0 bg-transparent py-3 text-sm sm:text-base text-[#18141B] placeholder:text-[#665F69] outline-none [&::-webkit-search-cancel-button]:hidden"
                  />
                  <span className="hidden sm:inline text-xs text-[#665F69] whitespace-nowrap">
                    {EVENT_CONTRACTS_DATA.status}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="self-start sm:self-auto min-h-12 rounded-full border border-[#D8CEDD] bg-white px-6 text-sm font-semibold text-[#18141B] hover:border-[#BF6735]/40 hover:bg-[#FAF8FA] transition-colors cursor-pointer"
              >
                Reset
              </button>
            </form>

            <p className="text-sm leading-5 text-[#665F69]">{EVENT_CONTRACTS_DATA.helper}</p>

            <div aria-live="polite">
              {results.length > 0 ? (
                <ul className="flex flex-col divide-y divide-[#D8CEDD]">
                  {results.map((r) => (
                    <li key={r.name} className="py-4">
                      <p className="font-semibold text-[#18141B]">{r.name}</p>
                      <p className="text-sm text-[#665F69]">{r.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-2xl bg-[#F3EBF7] px-5 py-8 sm:p-10 flex flex-col items-center gap-4 text-center">
                  <Files className="h-9 w-9 text-[#301153]" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="max-w-[870px] text-xl sm:text-2xl leading-8 text-[#18141B]">{state.title}</h3>
                  <p className="max-w-[850px] text-base leading-6 text-[#665F69]">{state.description}</p>
                  <div className="flex flex-wrap justify-center gap-x-6">
                    {EVENT_CONTRACTS_DATA.links.map((l) => (
                      <ArrowLink key={l.label} href={l.href}>
                        {l.label}
                      </ArrowLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {EVENT_CONTRACTS_DATA.illustrative.map((card, idx) => (
            <Reveal key={card.title} delay={0.05 * idx} className="h-full">
              <Card>
                <span className="text-xs font-bold uppercase text-[#D65A2C]">{card.tag}</span>
                <h3 className="text-xl sm:text-2xl font-semibold leading-7 text-[#18141B]">{card.title}</h3>
                <p className="text-base leading-6 text-[#665F69]">{card.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
