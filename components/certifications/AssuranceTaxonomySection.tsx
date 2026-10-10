"use client";

import React from "react";
import { ASSURANCE_TAXONOMY_DATA as A } from "./certifications-data";
import { SectionContainer, Reveal } from "./shared";

export default function AssuranceTaxonomySection() {
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
          {A.classes.map((c) => (
            <div key={c.title} className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl font-bold leading-[1.15] text-[#18141B]">{c.title}</h3>
              <p className="text-base leading-[1.6] text-[#665F69]">{c.description}</p>
            </div>
          ))}
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
