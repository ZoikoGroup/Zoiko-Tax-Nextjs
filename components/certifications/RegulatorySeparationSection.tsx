"use client";

import React from "react";
import { REGULATORY_SEPARATION_DATA as R } from "./certifications-data";
import { SectionContainer, Reveal, SecondaryButton } from "./shared";

export default function RegulatorySeparationSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{R.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{R.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{R.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="flex items-center gap-4 flex-wrap mb-6">
          <SecondaryButton className="!bg-transparent">{R.action.label}</SecondaryButton>
          <span className="text-sm text-[#665F69]">{R.action.path}</span>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="rounded-lg bg-[#EEE5F4] p-5 mb-6">
          <p className="text-sm leading-[1.6] text-[#665F69]">{R.scopeNote}</p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="text-base leading-[1.6] text-[#665F69]">{R.footnote}</p>
      </Reveal>
    </SectionContainer>
  );
}
