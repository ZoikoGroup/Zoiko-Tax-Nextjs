"use client";

import React from "react";
import { Info } from "lucide-react";
import { DIRECT_ANSWER_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader eyebrow={DIRECT_ANSWER_DATA.eyebrow} title={DIRECT_ANSWER_DATA.title} />
      </Reveal>

      <Reveal delay={0.06}>
        <p className="mt-6 text-base sm:text-lg lg:text-[20px] leading-[1.6] lg:leading-[1.5] text-[#665F69] w-full">
          {DIRECT_ANSWER_DATA.description}
        </p>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#D8CEDD] bg-[#F7F3ED] p-4 sm:p-5">
          <Info className="h-[18px] w-[18px] shrink-0 text-[#D65A2C] mt-0.5" aria-hidden="true" />
          <p className="text-sm sm:text-[14px] font-semibold leading-[1.5] text-[#18141B]">
            {DIRECT_ANSWER_DATA.advisory}
          </p>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
