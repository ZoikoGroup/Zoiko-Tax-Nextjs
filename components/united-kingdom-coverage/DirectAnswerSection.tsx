"use client";

import React from "react";
import { DIRECT_ANSWER_DATA } from "./united-kingdom-data";
import { SectionContainer, SectionHeading, Reveal } from "./shared";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeading
            eyebrow={DIRECT_ANSWER_DATA.eyebrow}
            title={DIRECT_ANSWER_DATA.title}
            description={DIRECT_ANSWER_DATA.description}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border-t border-[#D8CEDD] pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4.5">
              {DIRECT_ANSWER_DATA.dimensions.map((dim, idx) => (
                <React.Fragment key={dim}>
                  {idx > 0 && (
                    <span className="text-[20px] font-normal text-[#665F69]" aria-hidden="true">
                      ×
                    </span>
                  )}
                  <span className="text-[17px] font-semibold text-[#301153]">
                    {dim}
                  </span>
                </React.Fragment>
              ))}
            </div>

            <p className="text-sm font-normal leading-[1.5em] text-[#665F69] md:text-right">
              {DIRECT_ANSWER_DATA.note}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
