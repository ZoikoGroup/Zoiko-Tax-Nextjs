"use client";

import React from "react";
import { Search, ChevronDown, SearchX } from "lucide-react";
import { DISCOVERY_DATA as D } from "./telecom-tax-insights-data";
import { SectionContainer, Reveal } from "./shared";

export default function DiscoverySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-xs font-bold uppercase text-[#D65A2C]">{D.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{D.title}</h2>
          <p className="text-base sm:text-lg leading-[1.5] text-[#665F69] max-w-[960px]">{D.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="rounded-2xl border border-[#D8CEDD] bg-[#F8F5FA] p-7 flex flex-col gap-5 mb-8">
          <span className="text-xs font-bold uppercase text-[#D65A2C]">{D.taxonomy.label}</span>
          <div className="flex flex-wrap gap-2.5">
            {D.taxonomy.topics.map((t) => (
              <span key={t} className="rounded-full border border-[#D8CEDD] bg-[#F2EAF7] px-3 py-1.5 text-xs font-semibold text-[#301153]">
                {t}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {D.taxonomy.fields.map((f) => (
              <div key={f.label} className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-[#665F69]">{f.label}</span>
                <span className="text-sm text-[#18141B]">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="rounded-[26px] border border-[#D8CEDD] p-7 sm:p-8 flex flex-col gap-6">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h3 className="text-xl sm:text-[22px] text-[#18141B]">{D.pattern.title}</h3>
            <span className="rounded-full border border-[#D8CEDD] bg-[#F2EAF7] px-3 py-1.5 text-xs font-semibold text-[#301153]">
              {D.pattern.badge}
            </span>
          </div>
          <p className="text-sm leading-[1.6] text-[#665F69]">{D.pattern.description}</p>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-[570px] shrink-0 flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold text-[#18141B]">{D.pattern.searchLabel}</span>
              <div className="flex items-center gap-2.5 rounded-[10px] border-2 border-[#BF6735] bg-white p-3.5">
                <span className="flex-1 text-sm text-[#665F69]">{D.pattern.searchValue}</span>
                <Search className="h-4 w-4 shrink-0 text-[#665F69]" aria-hidden="true" />
              </div>
              <span className="text-xs text-[#665F69]">{D.pattern.searchHelper}</span>
            </div>
            <div className="flex-1 flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold text-[#18141B]">{D.pattern.dateBasis.label}</span>
              <div className="flex items-center justify-between gap-2 rounded-[10px] border border-[#D8CEDD] bg-white p-3.5">
                <span className="text-sm text-[#665F69]">{D.pattern.dateBasis.value}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-[#665F69]" aria-hidden="true" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold text-[#18141B]">{D.pattern.sort.label}</span>
              <div className="flex items-center justify-between gap-2 rounded-[10px] border border-[#D8CEDD] bg-white p-3.5">
                <span className="text-sm text-[#665F69]">{D.pattern.sort.value}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-[#665F69]" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {D.pattern.filters.map((f) => (
              <div key={f.label} className="flex flex-col gap-1.5">
                <span className="text-[13px] font-semibold text-[#18141B]">{f.label}</span>
                <div className="flex items-center justify-between gap-2 rounded-[10px] border border-[#D8CEDD] bg-white p-3.5">
                  <span className="text-sm text-[#665F69]">{f.value}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-[#665F69]" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-[#D8CEDD] bg-[#F2EAF7] px-3 py-1.5 text-xs font-semibold text-[#301153]">
              {D.pattern.filteredSpecimen}
            </span>
            <span className="text-[13px] font-semibold text-[#BF6735] underline">{D.pattern.clearLabel}</span>
            <span className="text-xs text-[#665F69]">{D.pattern.structuralNote}</span>
          </div>

          <p className="text-[13px] leading-[1.5] text-[#665F69]">{D.pattern.sortNote}</p>

          <div className="h-px bg-[#D8CEDD]" />

          <div className="rounded-2xl bg-[#F2EAF7] p-6 flex items-start gap-6">
            <SearchX className="h-7 w-7 shrink-0 text-[#18141B]" aria-hidden="true" />
            <div className="flex-1 flex flex-col gap-2.5">
              <h4 className="text-xl sm:text-[22px] leading-[1.25] text-[#18141B]">{D.pattern.noMatches.title}</h4>
              <p className="text-sm leading-[1.6] text-[#665F69]">{D.pattern.noMatches.description}</p>
              <div className="flex flex-wrap gap-6">
                {D.pattern.noMatches.actions.map((a) => (
                  <span key={a} className="text-sm font-semibold text-[#BF6735] underline">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <Reveal className="w-full lg:w-[380px] shrink-0">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase text-[#D65A2C]">{D.listingAnatomy.label}</span>
            <h3 className="text-2xl sm:text-[32px] font-medium leading-[1.2] text-[#18141B]">{D.listingAnatomy.title}</h3>
            <p className="text-base sm:text-[17px] leading-[1.6] text-[#665F69]">{D.listingAnatomy.description}</p>
            <p className="text-sm leading-[1.6] text-[#665F69]">{D.listingAnatomy.footnote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04} className="flex-1 min-w-0">
          <div className="rounded-2xl border border-[#D8CEDD] bg-[#FFFAFA] p-7 sm:p-8 flex flex-col gap-5">
            <span className="inline-flex w-fit rounded-full border border-[#D8CEDD] bg-[#F2EAF7] px-3 py-1.5 text-xs font-semibold text-[#301153]">
              {D.cardSpecimen.badge}
            </span>
            <p className="text-xs text-[#665F69]">{D.cardSpecimen.matchPattern}</p>
            <h4 className="text-2xl sm:text-[28px] leading-[1.2] text-[#18141B]">
              <span className="underline decoration-[#BF6735] text-[#BF6735]">{D.cardSpecimen.title}</span>
            </h4>
            <p className="text-base sm:text-[17px] leading-[1.6] text-[#665F69]">{D.cardSpecimen.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {D.cardSpecimen.fields.map((f) => (
                <div key={f.label} className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-[#665F69]">{f.label}</span>
                  <span className="text-sm text-[#18141B]">{f.value}</span>
                </div>
              ))}
            </div>
            <div className="h-px bg-[#D8CEDD]" />
            <p className="text-sm leading-[1.55] text-[#665F69]">{D.cardSpecimen.footnote1}</p>
            <p className="text-xs leading-[1.5] text-[#665F69]">{D.cardSpecimen.footnote2}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
