"use client";

import React from "react";
import { SectionContainer, SectionHeader, CoverageStateBadge, Reveal } from "./shared";
import { STATE_DEFINITIONS } from "./coverage-data";

export default function StateVocabularySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#DDD2E2]/60">
      <Reveal>
        <div className="space-y-10 sm:space-y-12">
          {/* Header */}
          <SectionHeader
            eyebrow="OPERATIONAL TRUTH"
            title="State vocabulary"
            description="States describe governed operational truth—not a marketing maturity gradient. Color is supplemental; the complete state text remains visible."
          />

          {/* 8 State Definition Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STATE_DEFINITIONS.map((item) => (
              <div
                key={item.state}
                className="rounded-[16px] border border-[#DDD2E2] bg-white p-5 sm:p-5.5 shadow-xs flex flex-col justify-between gap-3.5 hover:border-[#BF6735]/40 transition-colors"
              >
                <div>
                  <CoverageStateBadge state={item.state} />
                </div>
                <p className="text-sm sm:text-[14px] font-normal leading-[1.5] text-[#4E4852]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
