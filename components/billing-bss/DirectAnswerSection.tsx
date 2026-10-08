"use client";

import React from "react";
import { DIRECT_ANSWER_DATA } from "./billing-bss-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader eyebrow={DIRECT_ANSWER_DATA.eyebrow} title={DIRECT_ANSWER_DATA.title} />
      </Reveal>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
        <Reveal delay={0.06}>
          <p className="text-lg sm:text-xl leading-[1.55] text-[#665F69]">{DIRECT_ANSWER_DATA.description}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-l border-[#D8CEDD] pl-6 flex flex-col gap-3">
            <p className="text-[15px] font-bold text-[#301153]">{DIRECT_ANSWER_DATA.boundary.title}</p>
            <p className="text-[15px] leading-[1.55] text-[#665F69]">{DIRECT_ANSWER_DATA.boundary.description}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
