"use client";

import React from "react";
import { Files, ArrowUpRight, Search, ChevronDown } from "lucide-react";
import { CURRENT_CHANGES_DATA as C, REGISTRY_DATA as R } from "./regulatory-change-data";
import { SectionContainer, SecondaryButton, Reveal } from "./shared";

export default function CurrentChangesSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/regulatory-change/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-14">
        <div className="flex flex-col gap-8">
          <Reveal>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-[#B65326]">{C.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold leading-[1.15] text-[#18141B]">{C.title}</h2>
              <p className="text-base sm:text-lg leading-[1.5] text-[#665F69] max-w-[1040px]">{C.description}</p>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-9 flex flex-col lg:flex-row items-start gap-7 shadow-[0px_4px_16px_0px_rgba(48,17,83,0.05)]">
              <div className="h-20 w-20 shrink-0 rounded-[20px] bg-[#F3EBF8] flex items-center justify-center">
                <Files className="h-9 w-9 text-[#301153]" aria-hidden="true" />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <span className="inline-flex w-fit items-center rounded-full border border-[#D8CEDD] bg-[#F3EBF8] px-3 py-1.5 text-xs font-semibold text-[#301153]">
                  {C.emptyState.badge}
                </span>
                <h3 className="text-2xl sm:text-[26px] font-bold leading-[1.15] text-[#18141B]">{C.emptyState.title}</h3>
                <p className="text-base leading-[1.6] text-[#665F69]">{C.emptyState.description}</p>
              </div>
              <div className="flex flex-col gap-3 sm:w-[245px] shrink-0">
                {C.emptyState.actions.map((a) => (
                  <SecondaryButton key={a}>
                    <span className="inline-flex items-center gap-2">
                      {a}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </SecondaryButton>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          <Reveal>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#B65326]">{R.eyebrow}</span>
              <h3 className="text-2xl sm:text-3xl md:text-[42px] font-bold leading-[1.15] text-[#18141B]">{R.title}</h3>
              <p className="text-base leading-[1.6] text-[#665F69]">{R.description}</p>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span className="inline-flex items-center rounded-full border border-[#D8CEDD] bg-[#F3EBF8] px-3 py-1.5 text-xs font-semibold text-[#301153]">
                  {R.discovery.badge}
                </span>
                <span className="text-sm font-semibold text-[#B65326]">{R.discovery.clearLabel}</span>
              </div>

              <div className="flex items-center gap-3.5 rounded-[10px] border border-[#D8CEDD] p-[18px]">
                <Search className="h-5 w-5 shrink-0 text-[#665F69]" aria-hidden="true" />
                <span className="text-[15px] text-[#665F69]">{R.discovery.searchPlaceholder}</span>
              </div>

              {R.discovery.filterGroups.map((row, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {row.map((f) => (
                    <div key={f.label} className="flex flex-col gap-2">
                      <span className="text-xs font-semibold text-[#665F69]">{f.label}</span>
                      <div className="flex items-center justify-between gap-2 rounded-lg border border-[#D8CEDD] bg-white p-3.5">
                        <span className="text-[13px] text-[#18141B]">{f.value}</span>
                        <ChevronDown className="h-3.5 w-3.5 shrink-0 text-[#665F69]" aria-hidden="true" />
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              <p className="text-sm leading-[1.6] text-[#665F69]">{R.discovery.footnote}</p>

              <div className="rounded-2xl bg-[#F3EBF8] p-6 flex flex-col gap-2.5">
                <span className="text-xs font-bold text-[#B65326]">{R.discovery.emptyResults.label}</span>
                <h4 className="text-xl font-semibold text-[#18141B]">{R.discovery.emptyResults.title}</h4>
                <p className="text-sm leading-[1.6] text-[#665F69]">{R.discovery.emptyResults.description}</p>
                <div className="flex items-center gap-4 pt-1">
                  <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-[#B65326] bg-white px-[22px] py-[15px] text-sm font-semibold text-[#18141B]">
                    {R.discovery.emptyResults.cta}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs text-[#665F69]">{R.discovery.emptyResults.focusNote}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <Reveal className="w-full lg:w-[390px] shrink-0">
            <div className="flex flex-col gap-5">
              <span className="text-xs font-bold text-[#B65326]">{R.cardGuide.label}</span>
              <h3 className="text-2xl sm:text-[26px] font-bold leading-[1.15] text-[#18141B]">{R.cardGuide.title}</h3>
              <p className="text-base leading-[1.6] text-[#665F69]">{R.cardGuide.description}</p>
              <p className="text-sm leading-[1.6] text-[#665F69]">{R.cardGuide.footnote}</p>
            </div>
          </Reveal>

          <Reveal delay={0.04} className="flex-1 min-w-0">
            <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-6 shadow-[0px_4px_16px_0px_rgba(48,17,83,0.05)]">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                {R.cardSpecimen.badges.map((b) => (
                  <span key={b} className="inline-flex items-center rounded-full border border-[#D8CEDD] bg-[#F3EBF8] px-3 py-1.5 text-xs font-semibold text-[#301153]">
                    {b}
                  </span>
                ))}
              </div>
              <h4 className="text-2xl sm:text-[26px] font-bold leading-[1.15] text-[#18141B]">{R.cardSpecimen.title}</h4>
              <p className="text-base leading-[1.6] text-[#665F69]">{R.cardSpecimen.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {R.cardSpecimen.fields.map((f) => (
                  <div key={f.label} className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-[#665F69]">{f.label}</span>
                    <span className="text-sm font-medium text-[#18141B]">{f.value}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#D8CEDD] pt-5">
                <span className="text-sm font-semibold text-[#B65326] whitespace-pre-line">{R.cardSpecimen.detailLink}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}
