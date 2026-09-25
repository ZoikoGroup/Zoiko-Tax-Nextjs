"use client";

import React from "react";
import { DRAWER_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function DrawerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader eyebrow={DRAWER_DATA.eyebrow} title={DRAWER_DATA.title} />
      </Reveal>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-6">
        <Reveal delay={0.06}>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 space-y-3">
            <h3 className="text-lg font-bold text-[#18141B]">{DRAWER_DATA.metadata.title}</h3>
            <div className="flex flex-col gap-2.5 text-[13px]">
              {DRAWER_DATA.metadata.rows.map((row) => (
                <div key={row.label} className="flex flex-col sm:flex-row sm:gap-6">
                  <span className="font-semibold text-[#665F69] sm:w-[200px] shrink-0">{row.label}</span>
                  <span className="text-[#18141B]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl bg-[#1D033B] p-6 space-y-4">
            <h3 className="text-base font-bold text-white">{DRAWER_DATA.limitations.title}</h3>
            <p className="text-[13px] leading-[1.5] text-[#D9D0DF]">{DRAWER_DATA.limitations.description}</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="rounded-md bg-[#F4A261] px-3 py-2 text-xs font-bold text-[#18141B]">
                {DRAWER_DATA.limitations.actions[0]}
              </span>
              <span className="rounded-md border border-white/15 px-3 py-2 text-xs font-semibold text-white">
                {DRAWER_DATA.limitations.actions[1]}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
