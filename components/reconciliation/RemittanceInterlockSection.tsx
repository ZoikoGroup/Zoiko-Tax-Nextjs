"use client";

import React from "react";
import { REMITTANCE_INTERLOCK_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function RemittanceInterlockSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/60">
      <Reveal>
        <SectionHeader
          eyebrow={REMITTANCE_INTERLOCK_DATA.eyebrow}
          title={REMITTANCE_INTERLOCK_DATA.title}
          description={REMITTANCE_INTERLOCK_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-10 sm:mt-12">
        <div className="rounded-[20px] border border-[#D8CEDD] bg-white p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <h3 className="text-base sm:text-lg font-bold text-[#18141B]">
            {REMITTANCE_INTERLOCK_DATA.boxTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-1">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#18141B]">
                What It Tracks
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#665F69] leading-relaxed">
                {REMITTANCE_INTERLOCK_DATA.tracks.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-[#665F69] select-none">-</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#18141B]">
                What It Enforces
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#665F69] leading-relaxed">
                {REMITTANCE_INTERLOCK_DATA.enforces.map((e) => (
                  <li key={e} className="flex items-start gap-2">
                    <span className="text-[#665F69] select-none">-</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
