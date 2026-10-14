"use client";

import React from "react";
import { ArrowRight, Info, Scan } from "lucide-react";
import { SCOPE_EXCLUSIONS_DATA as S } from "./united-states-data";
import { SectionContainer, Reveal } from "./shared";

export default function ScopeExclusionsSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-sm font-bold text-[#D65A2C]">{S.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{S.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{S.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 mb-6">
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-8 flex flex-col">
            {S.dimensions.map((d) => (
              <div key={d.label} className="border-b border-[#D8CEDD] last:border-b-0 py-[18px] flex flex-col sm:flex-row gap-3 sm:gap-6">
                <span className="w-full sm:w-[190px] shrink-0 text-base font-semibold text-[#18141B]">{d.label}</span>
                <div className="flex-1 flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-[#665F69]">{d.value}</span>
                  <p className="text-sm leading-[1.55] text-[#665F69]">{d.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[26px] bg-[#301153] p-8 flex flex-col gap-6">
            <Scan className="h-8 w-8 text-[#F4A261]" aria-hidden="true" />
            <h3 className="text-2xl font-bold leading-[1.25] text-white">{S.boundary.title}</h3>
            {S.boundary.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-[1.55] text-[#D9D0DF]">{p}</p>
            ))}
            {S.boundary.links.map((link) => (
              <span key={link} className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#F4A261]">
                {link}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="rounded-2xl bg-[#F1E8F5] p-6 flex gap-4">
          <Info className="h-5 w-5 shrink-0 text-[#301153]" aria-hidden="true" />
          <p className="flex-1 text-[15px] leading-[1.55] text-[#18141B]">{S.professionalNotice}</p>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
