"use client";

import React from "react";
import { HARD_PROBLEMS_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function HardProblemsSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA] border-b border-[#D8CEDD]/60"
      style={{
        backgroundImage: "url('/reconciliation/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={HARD_PROBLEMS_DATA.eyebrow}
          title={HARD_PROBLEMS_DATA.title}
          description={HARD_PROBLEMS_DATA.description}
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-10 sm:mt-12">
        {HARD_PROBLEMS_DATA.problems.map((item, idx) => (
          <Reveal key={item.title} delay={0.04 * (idx + 1)}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white/95 backdrop-blur-xs p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-[#D65A2C]/40 hover:shadow-sm transition-all duration-200">
              <div>
                <h3 className="text-lg sm:text-[19px] font-bold text-[#18141B] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm sm:text-[15px] font-normal text-[#665F69] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
