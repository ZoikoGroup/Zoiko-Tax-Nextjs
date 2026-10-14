"use client";

import React from "react";
import { DIRECT_ANSWER_DATA } from "./european-union-data";
import { SectionContainer, SectionHeading, Reveal } from "./shared";

export default function DirectAnswerSection() {
  const d = DIRECT_ANSWER_DATA;

  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeading
            eyebrow={d.eyebrow}
            title={d.title}
            description={d.description}
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10 shadow-xs">
            <h3 className="w-full md:w-[280px] lg:w-[320px] shrink-0 text-base sm:text-lg font-bold text-[#301153]">
              {d.card.title}
            </h3>
            <p className="flex-1 text-sm sm:text-base font-normal leading-[1.6em] text-[#665F69]">
              {d.card.description}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
