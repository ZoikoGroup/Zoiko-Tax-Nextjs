"use client";

import React from "react";
import { MATCHING_TOLERANCES_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function MatchingTolerancesSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/60">
      <Reveal>
        <SectionHeader
          eyebrow={MATCHING_TOLERANCES_DATA.eyebrow}
          title={MATCHING_TOLERANCES_DATA.title}
          description={MATCHING_TOLERANCES_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-10 sm:mt-12">
        <div className="rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-[#D8CEDD]/60 pb-4">
            <h3 className="text-base sm:text-lg font-bold text-[#18141B]">
              {MATCHING_TOLERANCES_DATA.boxTitle}
            </h3>
            <span className="text-xs font-semibold text-[#26735B] bg-[#26735B]/10 rounded-full px-3 py-1">
              Active v2026.3 Policy
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MATCHING_TOLERANCES_DATA.policies.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-[#D8CEDD] bg-[#F7F3ED]/60 p-5 flex flex-col justify-between"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#665F69]">
                  {p.title}
                </span>
                <span className="text-base sm:text-lg font-bold text-[#18141B] mt-3">
                  {p.metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
