"use client";

import React from "react";
import {
  SectionContainer,
  SectionHeader,
  PatternBackground,
  StatusChip,
  Reveal,
} from "./shared";
import { STATUS_DEFINITIONS } from "./country-regulatorypacks-data";

export default function StatusLegendSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD] relative overflow-hidden">
      {/* Figma background pattern */}
      <PatternBackground />

      <div className="relative z-10">
        <Reveal>
          <div className="flex flex-col gap-10">
            {/* Section Heading */}
            <SectionHeader
              eyebrow="Status definitions"
              title="Read the state. Respect the scope."
              description="These are definitions—not the statuses of any market. Text and production-use meanings accompany every color."
              className="mb-0"
            />

            {/* 8 Status Definition Cards (2 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {STATUS_DEFINITIONS.map((def) => (
                <div
                  key={def.id}
                  className="rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-7 flex flex-col justify-between gap-5 shadow-xs hover:border-[#301153]/50 transition-colors"
                >
                  <div className="flex flex-col gap-3">
                    <div>
                      <StatusChip label={def.label} className={def.badgeClass} />
                    </div>
                    <p className="text-base sm:text-[16px] text-[#18141B] leading-[1.55] font-medium font-['Inter',sans-serif]">
                      {def.meaning}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D8CEDD]/60 flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#665F69] font-['Inter',sans-serif]">
                      PRODUCTION-USE MEANING
                    </span>
                    <span
                      className={`text-sm sm:text-[15px] font-medium leading-relaxed font-['Inter',sans-serif] ${def.productionColorClass}`}
                    >
                      {def.productionUse}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mixed States Guidance Card */}
            <div className="rounded-2xl bg-[#F3EDF7] p-6 sm:p-7 border border-[#D8CEDD]">
              <p className="text-sm sm:text-base text-[#665F69] leading-[1.55] font-['Inter',sans-serif]">
                Mixed capability states stay independent. A future-effective release is not current until the governed effective state changes. No lifecycle state promises a fixed activation deadline.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
