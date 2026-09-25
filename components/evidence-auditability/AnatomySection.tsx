"use client";

import React from "react";
import { ANATOMY_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function AnatomySection() {
  return (
    <SectionContainer className="bg-[#F5F2F9]">
      <Reveal>
        <SectionHeader
          eyebrow={ANATOMY_DATA.eyebrow}
          title={ANATOMY_DATA.title}
          description={ANATOMY_DATA.description}
        />
      </Reveal>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
        {ANATOMY_DATA.columns.map((col, i) => (
          <Reveal key={col.title} delay={0.03 * i}>
            <div className="h-full min-h-[190px] rounded-xl border border-[#D8CEDD] bg-white p-4 flex flex-col gap-3">
              <h3 className="text-sm font-bold text-[#18141B]">{col.title}</h3>
              <span className="inline-block w-fit rounded bg-[#F5F2F9] px-1.5 py-0.5 font-mono text-[10px] text-[#D65A2C]">
                {col.code}
              </span>
              <p className="text-xs leading-[1.4] text-[#665F69]">{col.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-6 text-xs italic text-[#665F69]">{ANATOMY_DATA.note}</p>
      </Reveal>
    </SectionContainer>
  );
}
