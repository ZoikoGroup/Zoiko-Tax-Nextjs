"use client";

import React from "react";
import { ArrowRight, ChevronDown, Files, Search } from "lucide-react";
import { CATALOGUE_DATA as C } from "./industry-standards-data";
import { SectionContainer, Reveal, PrimaryButton } from "./shared";

export default function CatalogueSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{C.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{C.title}</h2>
          <p className="text-base sm:text-lg leading-[1.55] text-[#665F69]">{C.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="flex flex-col gap-4 mb-8">
          <p className="text-sm font-bold text-[#301153]">{C.keyLabel}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {C.relationshipKey.map((k) => (
              <div key={k.title} className="flex flex-col gap-2">
                <h4 className="text-base font-bold text-[#18141B]">{k.title}</h4>
                <p className="text-sm leading-[1.55] text-[#665F69]">{k.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-6 flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-6 items-end">
            <div className="flex-1 w-full flex flex-col gap-2">
              <span className="text-[13px] font-semibold text-[#18141B]">{C.search.label}</span>
              <div className="flex items-center gap-3 rounded-lg border border-[#D8CEDD] px-3.5 py-3.5">
                <Search className="h-5 w-5 shrink-0 text-[#301153]" aria-hidden="true" />
                <span className="text-sm text-[#665F69]">{C.search.placeholder}</span>
              </div>
            </div>
            <div className="w-full lg:w-[235px] shrink-0 flex flex-col gap-2">
              <span className="text-[13px] font-semibold text-[#18141B]">{C.filters[0].label}</span>
              <div className="flex items-center justify-between rounded-lg border border-[#D8CEDD] px-3.5 py-3.5">
                <span className="text-sm text-[#665F69]">{C.filters[0].value}</span>
                <ChevronDown className="h-3.5 w-3.5 shrink-0 text-[#665F69]" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {C.filters.slice(1).map((f) => (
              <div key={f.label} className="flex flex-col gap-2">
                <span className="text-[13px] font-semibold text-[#18141B]">{f.label}</span>
                <div className="flex items-center justify-between rounded-lg border border-[#D8CEDD] px-3.5 py-3.5">
                  <span className="text-sm text-[#665F69]">{f.value}</span>
                  <ChevronDown className="h-3.5 w-3.5 shrink-0 text-[#665F69]" aria-hidden="true" />
                </div>
              </div>
            ))}
            <span className="text-sm font-semibold text-[#301153] self-center lg:self-end lg:pb-3.5">Clear / Reset</span>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-[#665F69]">{C.registerLabel}</p>
            <div className="rounded-lg bg-[#EEE5F5] px-3 py-4 overflow-x-auto">
              <div className="flex gap-3 min-w-[900px] text-[13px] font-semibold text-[#301153]">
                {C.tableColumns.map((col) => (
                  <span key={col} className="flex-1">{col}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl px-6 sm:px-24 py-11 flex flex-col items-center gap-5 text-center">
            <Files className="h-6 w-6 text-[#301153]" aria-hidden="true" />
            <h3 className="text-xl sm:text-2xl font-bold leading-[1.1] text-[#18141B]">{C.emptyState.title}</h3>
            <p className="text-base leading-[1.55] text-[#665F69] max-w-[620px]">{C.emptyState.description}</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <PrimaryButton>
                <span className="inline-flex items-center gap-2">
                  {C.emptyState.actions[0].label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </PrimaryButton>
              <div className="flex flex-col gap-0.5 text-left">
                <span className="text-sm font-semibold text-[#301153]">{C.emptyState.actions[1].label}</span>
                <span className="text-xs text-[#665F69]">Information pending</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          {C.guidance.map((g) => (
            <div key={g.label} className="flex flex-col gap-2">
              <p className="text-sm font-bold text-[#301153]">{g.label}</p>
              <p className="text-sm leading-[1.55] text-[#665F69]">{g.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionContainer>
  );
}
