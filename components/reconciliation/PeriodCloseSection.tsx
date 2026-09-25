"use client";

import React from "react";
import { PERIOD_CLOSE_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, PrimaryButton, StatusBadge, Reveal } from "./shared";

export default function PeriodCloseSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/60">
      <Reveal>
        <SectionHeader
          eyebrow={PERIOD_CLOSE_DATA.eyebrow}
          title={PERIOD_CLOSE_DATA.title}
          description={PERIOD_CLOSE_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-10 sm:mt-12">
        <div className="rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8 md:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#26735B]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#18141B]">
                {PERIOD_CLOSE_DATA.cycleTitle}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#665F69] leading-relaxed">
              {PERIOD_CLOSE_DATA.cycleState}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {PERIOD_CLOSE_DATA.roles.map((r) => (
                <div key={r.role} className="flex items-center gap-2 text-xs sm:text-sm text-[#18141B]">
                  <span className="font-semibold">{r.role}:</span>
                  <StatusBadge status={r.status} />
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <PrimaryButton onClick={() => alert("Period successfully approved and locked.")}>
              {PERIOD_CLOSE_DATA.cta}
            </PrimaryButton>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
