"use client";

import React from "react";
import { Search, Check, Info, FileText } from "lucide-react";
import { DISCOVERY_DATA as D } from "./guides-reports-data";
import { SectionContainer, Reveal } from "./shared";

export default function DiscoverySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-xs font-bold text-[#A64B22]">{D.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.12] text-[#18141B]">{D.title}</h2>
          <p className="text-base sm:text-lg leading-[1.5] text-[#665F69]">{D.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-7 mb-6">
          <div className="flex items-center gap-3 rounded-[10px] border-2 border-[#301153] p-4">
            <Search className="h-[22px] w-[22px] shrink-0 text-[#665F69]" aria-hidden="true" />
            <span className="flex-1 text-base text-[#665F69]">{D.searchPlaceholder}</span>
            <span className="text-xs font-semibold text-[#301153]">{D.focusLabel}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {D.filterGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-3">
                <span className="text-sm text-[#18141B]">{group.label}</span>
                <div className="flex flex-wrap gap-2">
                  {group.options.map((opt) => (
                    <span key={opt} className="rounded-full border border-[#D8CEDD] bg-[#FFFAFA] px-3 py-2 text-xs text-[#301153]">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {D.dateSortGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-3">
                <span className="text-sm text-[#18141B]">{group.label}</span>
                <div className="flex flex-wrap gap-2">
                  {group.options.map((opt) => (
                    <span key={opt} className="rounded-full border border-[#D8CEDD] bg-[#FFFAFA] px-3 py-2 text-xs text-[#301153]">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {D.selectedFilters.map((f) => (
                <span key={f} className="inline-flex items-center gap-1.5 rounded-full border border-[#D8CEDD] bg-[#F4EDF8] px-3 py-2 text-xs text-[#301153]">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  {f}
                </span>
              ))}
            </div>
            <span className="text-sm font-semibold text-[#A64B22]">{D.clearLabel}</span>
          </div>

          <p className="text-sm leading-[1.65] text-[#665F69]">{D.toolbarFootnote}</p>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="rounded-2xl bg-[#FAEEE6] p-6 flex items-start gap-4 mb-10">
          <Info className="h-[22px] w-[22px] shrink-0 text-[#A64B22]" aria-hidden="true" />
          <div className="flex flex-col gap-2">
            <p className="text-base text-[#18141B]">{D.noMatchesNotice.title}</p>
            <p className="text-sm leading-[1.65] text-[#665F69]">{D.noMatchesNotice.description}</p>
          </div>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row gap-10">
        <Reveal className="w-full lg:w-[480px] shrink-0">
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-5">
            <span className="text-xs font-bold text-[#A64B22]">{D.cardAnatomy.label}</span>
            <div className="flex items-center gap-2.5">
              <FileText className="h-[22px] w-[22px] text-[#18141B]" aria-hidden="true" />
              <span className="text-sm font-semibold text-[#18141B]">{D.cardAnatomy.typeLabel}</span>
            </div>
            <h3 className="text-2xl sm:text-[28px] leading-[1.2] text-[#18141B]">{D.cardAnatomy.title}</h3>
            <p className="text-base leading-[1.65] text-[#665F69]">{D.cardAnatomy.description}</p>
            <div className="flex flex-col text-sm text-[#665F69] leading-[1.6]">
              {D.cardAnatomy.metadata.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <span className="inline-flex w-fit items-center rounded-full bg-[#F4EDF8] px-[18px] py-[14px] text-sm font-semibold text-[#665F69]">
              {D.cardAnatomy.destination}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.04} className="flex-1 min-w-0">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl sm:text-[28px] text-[#18141B]">{D.registryFields.title}</h3>
            <p className="text-base leading-[1.65] text-[#665F69]">{D.registryFields.description}</p>
            <div className="flex flex-col mt-2">
              {D.registryFields.rows.map((row) => (
                <div key={row.label} className="border-b border-[#D8CEDD] py-3.5 flex flex-col sm:flex-row gap-1 sm:gap-6">
                  <span className="text-sm font-semibold text-[#18141B] sm:w-[172px] shrink-0">{row.label}</span>
                  <span className="flex-1 text-sm leading-[1.55] text-[#665F69]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
