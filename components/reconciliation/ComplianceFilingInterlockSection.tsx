"use client";

import React from "react";
import { COMPLIANCE_FILING_INTERLOCK_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, StatusBadge, Reveal } from "./shared";

export default function ComplianceFilingInterlockSection() {
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
          eyebrow={COMPLIANCE_FILING_INTERLOCK_DATA.eyebrow}
          title={COMPLIANCE_FILING_INTERLOCK_DATA.title}
          description={COMPLIANCE_FILING_INTERLOCK_DATA.description}
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mt-10 sm:mt-12">
        {COMPLIANCE_FILING_INTERLOCK_DATA.cards.map((card, idx) => (
          <Reveal key={card.title} delay={0.04 * (idx + 1)}>
            <div className="h-full rounded-xl border border-[#D8CEDD] bg-white p-6 shadow-xs flex flex-col justify-between hover:border-[#D65A2C]/40 hover:shadow-sm transition-all duration-200">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#18141B] leading-snug">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-semibold text-[#18141B]">
                  {card.metric}
                </p>
              </div>
              <div className="mt-5 pt-3">
                <StatusBadge status={card.badge} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
