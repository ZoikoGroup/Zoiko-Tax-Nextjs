"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { aiBoundaryData } from "./exemptions-data";
import { X } from "lucide-react";

export default function AIBoundarySection() {
  return (
    <SectionContainer id="ai-boundary" className="bg-[#FAF8FA]">
      <Reveal>
        <SectionHeader
          eyebrow={aiBoundaryData.eyebrow}
          title={aiBoundaryData.title}
          description={aiBoundaryData.description}
        />
      </Reveal>

      <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        {/* Left: AI ASSISTANCE CAPABILITIES (MAY) */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-7 md:p-9 shadow-sm transition-all duration-200">
            <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#D65A2C]">
              {aiBoundaryData.mayTitle}
            </h3>

            <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-3.5">
              {aiBoundaryData.mayItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] leading-relaxed text-[#535055]">
                  <span className="text-[#535055] select-none text-base leading-none shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Right: STRICT TECHNOLOGY PROHIBITIONS (MAY NOT) */}
        <Reveal delay={0.2}>
          <div className="flex h-full flex-col rounded-2xl bg-[#1A062F] p-5 sm:p-7 md:p-9 text-white shadow-xl transition-all duration-200">
            <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#D65A2C]">
              {aiBoundaryData.mayNotTitle}
            </h3>

            <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-3.5">
              {aiBoundaryData.mayNotItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] leading-relaxed text-white/80">
                  <X className="h-3.5 w-3.5 shrink-0 text-[#FF3B30] mt-1 stroke-[3]" />
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
