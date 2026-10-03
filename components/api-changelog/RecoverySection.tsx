"use client";

import React from "react";
import { SearchX } from "lucide-react";
import { RECOVERY_DATA } from "./api-changelog-data";
import { SectionContainer, Reveal } from "./shared";

export default function RecoverySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-3.5 mb-6">
          <span className="text-xs font-bold text-[#D65A2C]">{RECOVERY_DATA.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.12] text-[#18141B]">
            {RECOVERY_DATA.title}
          </h2>
          <p className="text-base leading-[1.6] text-[#665F69]">{RECOVERY_DATA.description}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {RECOVERY_DATA.patterns.map((pattern, i) => (
          <Reveal key={pattern.title} delay={0.03 * i}>
            <div className="h-full min-h-[164px] rounded-2xl border border-[#D8CEDD] bg-white p-5.5 flex flex-col gap-2.5">
              <h3 className="text-base font-semibold text-[#18141B]">{pattern.title}</h3>
              <p className="text-sm leading-[1.6] text-[#665F69]">{pattern.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-6 rounded-2xl bg-[#FFF0E7] p-6 flex flex-col sm:flex-row sm:items-center gap-5">
          <SearchX className="h-6 w-6 shrink-0 text-[#D65A2C]" aria-hidden="true" />
          <div className="flex-1 flex flex-col gap-1.5">
            <h3 className="text-base font-semibold text-[#18141B]">{RECOVERY_DATA.noResultsSpecimen.title}</h3>
            <p className="text-sm leading-[1.6] text-[#665F69]">{RECOVERY_DATA.noResultsSpecimen.description}</p>
          </div>
          <span className="text-sm font-semibold text-[#D65A2C] whitespace-nowrap">{RECOVERY_DATA.noResultsSpecimen.action}</span>
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <p className="mt-6 text-sm leading-[1.6] text-[#665F69]">{RECOVERY_DATA.footnote}</p>
      </Reveal>
    </SectionContainer>
  );
}
