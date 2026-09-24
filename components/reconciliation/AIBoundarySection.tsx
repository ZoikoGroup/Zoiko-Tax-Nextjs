"use client";

import React from "react";
import { AI_BOUNDARY_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function AIBoundarySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/60">
      <Reveal>
        <SectionHeader
          eyebrow={AI_BOUNDARY_DATA.eyebrow}
          title={AI_BOUNDARY_DATA.title}
          description={AI_BOUNDARY_DATA.description}
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12">
        {/* What AI MAY Assist With */}
        <Reveal delay={0.06}>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8 shadow-xs flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold text-[#18141B] pb-4 border-b border-[#D8CEDD]/60 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D65A2C]/10 text-[#D65A2C] text-sm font-bold">
                •
              </span>
              What AI MAY Assist With
            </h3>
            <ul className="mt-5 space-y-4 flex-1">
              {AI_BOUNDARY_DATA.assists.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#18141B] leading-relaxed">
                  <span className="text-[#D65A2C] font-bold text-base shrink-0 mt-0.5 select-none">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* What Remains STRICTLY Deterministic */}
        <Reveal delay={0.12}>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8 shadow-xs flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold text-[#18141B] pb-4 border-b border-[#D8CEDD]/60 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#26735B]/10 text-[#26735B] text-sm font-bold">
                🔒
              </span>
              What Remains STRICTLY Deterministic
            </h3>
            <ul className="mt-5 space-y-4 flex-1">
              {AI_BOUNDARY_DATA.deterministic.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#18141B] leading-relaxed">
                  <span className="text-[#26735B] font-bold text-base shrink-0 mt-0.5 select-none">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
