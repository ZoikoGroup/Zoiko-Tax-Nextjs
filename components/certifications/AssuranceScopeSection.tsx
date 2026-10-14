"use client";

import React from "react";
import { ASSURANCE_SCOPE_DATA as A } from "./certifications-data";
import { SectionContainer, Reveal } from "./shared";

export default function AssuranceScopeSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{A.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{A.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{A.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {A.dimensions.map((d) => (
            <div key={d.title} className="rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-2">
              <h3 className="text-base font-semibold text-[#18141B]">{d.title}</h3>
              <p className="text-sm leading-[1.6] text-[#665F69]">{d.description}</p>
            </div>
          ))}
          <div className="rounded-2xl bg-[#EEE5F4] p-6 flex flex-col gap-2">
            <h3 className="text-base font-semibold text-[#301153]">{A.viewScope.title}</h3>
            <p className="text-sm leading-[1.6] text-[#665F69]">{A.viewScope.description}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="rounded-lg bg-[#EEE5F4] p-5">
          <p className="text-sm leading-[1.6] text-[#665F69]">{A.scopeNote}</p>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
