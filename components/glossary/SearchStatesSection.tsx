"use client";

import React from "react";
import { Search } from "lucide-react";
import { SEARCH_STATES_DATA as S, LOCALIZATION_DATA as L, READER_HELP_DATA as R } from "./glossary-data";
import { SectionContainer, Reveal } from "./shared";

export default function SearchStatesSection() {
  return (
    <>
      <SectionContainer className="bg-[#FAF3FF]">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-xs font-bold text-[#AC4F25]">{S.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{S.title}</h2>
            <p className="text-base leading-[1.6] text-[#665F69]">{S.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-2xl border border-[#D8CEDD] p-7 flex flex-col gap-4">
              <span className="text-xs font-bold text-[#AC4F25]">{S.focusMatch.label}</span>
              <div className="flex items-center gap-3 h-[54px] rounded-xl border-2 border-[#301153] px-4">
                <Search className="h-[18px] w-[18px] shrink-0 text-[#665F69]" aria-hidden="true" />
                <span className="bg-[#E8E8E8] px-1 py-0.5 text-base text-[#18141B]">{S.focusMatch.selectedText}</span>
              </div>
              <h3 className="text-2xl font-bold leading-[1.15] text-[#18141B]">{S.focusMatch.term}</h3>
              <p className="text-base leading-[1.6] text-[#665F69]">{S.focusMatch.definition}</p>
              <p className="text-sm leading-[1.6] text-[#665F69]">{S.focusMatch.note}</p>
              <div className="rounded-xl bg-[#FFF2E9] p-4 flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-[#AC4F25]">{S.focusMatch.reviewDue.title}</span>
                <span className="text-[13px] leading-[1.6] text-[#665F69]">{S.focusMatch.reviewDue.description}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-[#FEFEFE] p-7 flex flex-col gap-4">
              <span className="text-xs font-bold text-[#AC4F25]">{S.zeroResults.label}</span>
              <h3 className="text-2xl font-bold leading-[1.15] text-[#18141B]">{S.zeroResults.title}</h3>
              <p className="text-base leading-[1.6] text-[#665F69]">{S.zeroResults.description}</p>
              <div className="flex flex-wrap gap-6">
                {S.zeroResults.routes.map((r) => (
                  <span key={r} className="text-sm font-semibold text-[#AC4F25]">
                    {r}
                  </span>
                ))}
              </div>
              <div className="border-t border-[#D8CEDD] pt-5 flex flex-col gap-2">
                <h4 className="text-base font-semibold text-[#18141B]">{S.zeroResults.requestTitle}</h4>
                <p className="text-sm leading-[1.6] text-[#665F69]">{S.zeroResults.requestDescription}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white relative">
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: "url(/glossary/pattern-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-[#AC4F25]">{L.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{L.title}</h2>
              <p className="text-base leading-[1.6] text-[#665F69]">{L.description}</p>
            </div>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            <Reveal delay={0.04} className="flex-1 min-w-0">
              <div className="flex flex-col gap-4">
                {L.guidance.map((g) => (
                  <p key={g} className="text-base leading-[1.6] text-[#665F69]">
                    {g}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="w-full lg:w-[570px] shrink-0">
              <div className="rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-5">
                <span className="text-xs font-bold text-[#AC4F25]">{L.specimen.label}</span>
                {L.specimen.fields.map((f) => (
                  <div key={f.label} className="flex flex-col gap-1.5">
                    <span className="text-[13px] font-semibold text-[#AC4F25]">{f.label}</span>
                    <span className="text-base leading-[1.6] text-[#665F69]">{f.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-[#FAF3FF]">
        <Reveal>
          <div className="flex flex-col gap-4 mb-8">
            <span className="text-xs font-bold text-[#AC4F25]">{R.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{R.title}</h2>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {R.items.map((item, i) => (
            <Reveal key={item.question} delay={0.04 * i}>
              <div className="border-t border-[#D8CEDD] py-6 flex flex-col gap-2.5">
                <h3 className="text-lg sm:text-xl font-semibold text-[#18141B]">{item.question}</h3>
                <p className="text-base leading-[1.6] text-[#665F69]">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
