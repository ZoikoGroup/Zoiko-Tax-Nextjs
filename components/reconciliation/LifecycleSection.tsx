"use client";

import React from "react";
import { LIFECYCLE_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function LifecycleSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/60">
      <Reveal>
        <SectionHeader
          eyebrow={LIFECYCLE_DATA.eyebrow}
          title={LIFECYCLE_DATA.title}
          description={LIFECYCLE_DATA.description}
        />
      </Reveal>

      {/* Grid of 10 stages: 5 cols on lg/xl, 2 on sm/md */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mt-10 sm:mt-12">
        {LIFECYCLE_DATA.stages.map((stage, idx) => (
          <Reveal key={stage.step} delay={0.03 * (idx + 1)}>
            <div className="h-full rounded-xl border border-[#D8CEDD] bg-white p-5 shadow-2xs flex flex-col justify-between hover:border-[#D65A2C]/40 hover:shadow-xs transition-all duration-200">
              <div>
                <span className="text-xs font-bold text-[#D65A2C] tracking-wider block">
                  {stage.step}
                </span>
                <h3 className="text-base sm:text-[17px] font-bold text-[#18141B] mt-1.5 leading-snug">
                  {stage.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#665F69] mt-2 leading-relaxed">
                  {stage.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
