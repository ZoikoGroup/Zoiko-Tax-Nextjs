"use client";

import React from "react";
import { ArrowRight, ChevronDown, Database, Search } from "lucide-react";
import { MARKET_COVERAGE_DATA as M } from "./regulatory-compliance-data";
import { SectionContainer, Reveal, ReferenceTable, PrimaryButton, SecondaryButton } from "./shared";

export default function MarketCoverageSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{M.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{M.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{M.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {M.filters.map((f, i) => (
              <div key={f.label} className="flex flex-col gap-2.5">
                <span className="text-[13px] font-semibold text-[#18141B]">{f.label}</span>
                <div className="flex items-center justify-between rounded-[8px] bg-white border border-[#D8CEDD] h-[48px] px-3.5">
                  <span className="text-sm text-[#665F69]">{f.value}</span>
                  {i === 0 ? (
                    <Search className="h-4 w-4 shrink-0 text-[#665F69]" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-4 w-4 shrink-0 text-[#665F69]" aria-hidden="true" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="text-[13px] leading-[1.55] text-[#665F69]">{M.filterFootnote}</p>
            <span className="text-sm font-semibold text-[#301153]">Clear filters</span>
          </div>

          <div className="rounded-2xl bg-[#FAF3FF] p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Database className="h-6 w-6 text-[#301153]" aria-hidden="true" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#18141B]">{M.unavailable.title}</h3>
            </div>
            <p className="text-base leading-[1.55] text-[#665F69]">{M.unavailable.description}</p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <SecondaryButton>
                <span className="inline-flex items-center gap-2">
                  {M.unavailable.actions[0].label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </SecondaryButton>
              <PrimaryButton>
                <span className="inline-flex items-center gap-2">
                  {M.unavailable.actions[1].label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </PrimaryButton>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 flex-wrap text-[13px]">
            <span className="font-semibold text-[#301153]">{M.recordAffordance.left}</span>
            <span className="text-[#665F69]">{M.recordAffordance.right}</span>
          </div>

          <ReferenceTable columns={M.tableColumns} rows={M.tableRows} />
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="flex flex-col gap-4 mt-10">
          <h3 className="text-xl font-bold text-[#18141B]">{M.guidance.title}</h3>
          <p className="text-sm leading-[1.55] text-[#665F69]">{M.guidance.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {M.guidance.unknownStates.map((s) => (
              <div key={s} className="rounded-xl border border-[#D8CEDD] bg-[#EEE5F4] p-5">
                <p className="text-sm leading-[1.55] text-[#301153]">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-sm leading-[1.55] text-[#665F69] mt-6">{M.footnote}</p>
      </Reveal>
    </SectionContainer>
  );
}
