"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { ALIASES_DATA as A } from "./glossary-data";
import { SectionContainer, Reveal } from "./shared";

export default function AliasesSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-xs font-bold text-[#AC4F25]">{A.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{A.title}</h2>
          <p className="text-base leading-[1.6] text-[#665F69]">{A.description}</p>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-14">
        <Reveal className="flex-1 min-w-0">
          <div className="flex flex-col">
            {A.rules.map((rule) => (
              <div key={rule.title} className="border-b border-[#D8CEDD] py-4 flex flex-col gap-2">
                <h3 className="text-base sm:text-[17px] font-semibold text-[#18141B]">{rule.title}</h3>
                <p className="text-sm leading-[1.6] text-[#665F69]">{rule.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.06} className="w-full lg:w-[570px] shrink-0">
          <div className="rounded-[26px] border border-[#D8CEDD] bg-[#FAF3FF] p-7 sm:p-8 flex flex-col gap-5">
            <span className="text-xs font-bold text-[#AC4F25]">{A.matchSpecimen.label}</span>
            <div className="flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold text-[#AC4F25]">{A.matchSpecimen.aliasLabel}</span>
              <span className="text-base leading-[1.6] text-[#665F69]">{A.matchSpecimen.alias}</span>
            </div>
            <ArrowDown className="h-5 w-5 text-[#18141B]" aria-hidden="true" />
            <h3 className="text-2xl sm:text-[28px] font-bold leading-[1.15] text-[#18141B]">{A.matchSpecimen.term}</h3>
            <p className="text-base leading-[1.6] text-[#665F69]">{A.matchSpecimen.definition}</p>
            <p className="text-sm leading-[1.6] text-[#665F69]">{A.matchSpecimen.note}</p>
            <span className="text-sm font-semibold text-[#AC4F25]">{A.matchSpecimen.cta}</span>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <h3 className="text-xl sm:text-2xl md:text-[32px] font-bold text-[#18141B] mb-8">{A.historyTitle}</h3>
      </Reveal>

      <div className="flex flex-col lg:flex-row gap-8">
        <Reveal delay={0.04} className="w-full lg:w-[570px] shrink-0">
          <div className="rounded-2xl border border-[#E4C4AD] bg-[#FFF2E9] p-7 flex flex-col gap-4">
            <span className="text-xs font-bold text-[#AC4F25]">{A.deprecatedSpecimen.label}</span>
            <h3 className="text-xl sm:text-2xl font-bold leading-[1.15] text-[#18141B]">{A.deprecatedSpecimen.term}</h3>
            <p className="text-base leading-[1.6] text-[#665F69]">{A.deprecatedSpecimen.definition}</p>
            <div className="flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold text-[#AC4F25]">{A.deprecatedSpecimen.replacementLabel}</span>
              <span className="text-base leading-[1.6] text-[#665F69]">{A.deprecatedSpecimen.replacement}</span>
            </div>
            <p className="text-[13px] leading-[1.6] text-[#665F69]">{A.deprecatedSpecimen.footnote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="flex-1 min-w-0">
          <div className="flex flex-col">
            {A.historyRules.map((rule) => (
              <div key={rule.title} className="border-b border-[#D8CEDD] py-4 flex flex-col gap-2">
                <h3 className="text-base sm:text-[17px] font-semibold text-[#18141B]">{rule.title}</h3>
                <p className="text-sm leading-[1.6] text-[#665F69]">{rule.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
