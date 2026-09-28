"use client";

import React from "react";
import { INTERLOCK_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function InterlockSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader eyebrow={INTERLOCK_DATA.eyebrow} title={INTERLOCK_DATA.title} />
      </Reveal>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Reveal delay={0.06}>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-[#FAF5F0] p-6 space-y-3">
            <h3 className="text-lg font-bold text-[#18141B]">{INTERLOCK_DATA.publicTrust.title}</h3>
            <p className="text-sm leading-[1.5] text-[#665F69]">{INTERLOCK_DATA.publicTrust.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-[#D65A2C] bg-white p-6 space-y-3">
            <h3 className="text-lg font-bold text-[#D65A2C]">{INTERLOCK_DATA.operational.title}</h3>
            <p className="text-sm leading-[1.5] text-[#665F69]">{INTERLOCK_DATA.operational.description}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
