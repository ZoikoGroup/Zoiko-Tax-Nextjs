"use client";

import React from "react";
import { SectionContainer, Reveal } from "./shared";
import { applicabilityMatrixData } from "./exemptions-data";
import { X } from "lucide-react";

export default function ApplicabilityMatrixSection() {
  return (
    <SectionContainer id="applicability-matrix" className="bg-[#FAF8FA]">
      {/* Section Header */}
      <Reveal>
        <div className="flex flex-col gap-2.5 sm:gap-3 max-w-4xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-[#D65A2C]">
            {applicabilityMatrixData.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal leading-[1.12] tracking-tight text-[#18141B] font-['Tiro_Gurmukhi',serif] break-words">
            {applicabilityMatrixData.title}
          </h2>
          <p className="mt-1 text-sm sm:text-base leading-relaxed text-[#535055] max-w-3xl">
            {applicabilityMatrixData.description}
          </p>
        </div>
      </Reveal>

      {/* 4 Cards Grid */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {applicabilityMatrixData.cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.05}>
            <div className="flex h-full min-h-[160px] sm:min-h-[170px] flex-col justify-start rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-7 shadow-xs transition-all duration-200 hover:border-[#D65A2C]/30">
              <h3 className="text-base sm:text-[17px] font-bold text-[#18141B]">
                {card.title}
              </h3>
              <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
                {card.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-[13px] leading-relaxed text-[#535055]"
                  >
                    <span className="text-[#535055] select-none shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* The ZoikoTax Rigor Promise Banner */}
      <Reveal delay={0.2}>
        <div className="mt-8 sm:mt-10 rounded-2xl border border-[#EAD5CA] bg-[#FFF9F6] p-5 sm:p-7">
          <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#D65A2C]">
            {applicabilityMatrixData.rigorPromise.heading}
          </h4>

          {/* 3 Prohibitions on Single Plain Row */}
          <div className="mt-4 sm:mt-5 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {applicabilityMatrixData.rigorPromise.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed text-[#535055]"
              >
                <X className="h-3.5 w-3.5 shrink-0 text-[#FF3B30] mt-0.5 stroke-[3]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
