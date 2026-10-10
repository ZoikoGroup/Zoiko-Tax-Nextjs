"use client";

import React from "react";
import { DIRECT_ANSWER_DATA as D } from "./regulatory-compliance-data";
import { SectionContainer, Reveal, ScopeDisclosure } from "./shared";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{D.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{D.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{D.description}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {D.scope.map((s, i) => (
          <Reveal key={s.title} delay={0.03 * i}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-[#18141B]">{s.title}</h3>
              <p className="text-base leading-[1.55] text-[#665F69]">{s.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <ScopeDisclosure>{D.disclosure}</ScopeDisclosure>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-col gap-1 mt-6">
          <span className="text-sm font-semibold text-[#18141B]">{D.destination.title}</span>
          <span className="text-[13px] text-[#665F69]">{D.destination.note}</span>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
