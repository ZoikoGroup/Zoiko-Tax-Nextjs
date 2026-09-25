"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function ComplianceInterlockSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
      <SectionHeader
        eyebrow="Workflow Connection"
        title="The Compliance & Filing Interlock"
        description="How CTC transactions flow directly into periodic tax filings, ensuring consistent totals and traceable audit trails."
        className="mb-10 sm:mb-12"
      />

      <Reveal delay={0.05}>
        <div className="flex flex-col md:flex-row items-center gap-6 w-full">
          {/* Card 1: Transaction Ledger (CTC) */}
          <div className="flex-1 w-full rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-7 shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-[#18141B] mb-2.5">
              Transaction Ledger (CTC)
            </h3>
            <p className="text-sm sm:text-base text-[#665F69] leading-relaxed">
              Continuous validation of individual invoice records against regional schemas and validation rules.
            </p>
          </div>

          {/* Central Directional Arrow */}
          <div className="text-2xl text-[#D65A2C] font-normal shrink-0 select-none hidden md:block">
            →
          </div>
          <div className="text-2xl text-[#D65A2C] font-normal shrink-0 select-none block md:hidden">
            ↓
          </div>

          {/* Card 2: Filing Engine */}
          <div className="flex-1 w-full rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-7 shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-[#18141B] mb-2.5">
              Filing Engine
            </h3>
            <p className="text-sm sm:text-base text-[#665F69] leading-relaxed">
              Consolidates validated transaction ledgers into monthly, quarterly, or annual local tax submissions.
            </p>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
