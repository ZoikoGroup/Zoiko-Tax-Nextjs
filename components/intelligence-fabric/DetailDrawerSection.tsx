"use client";

import React from "react";
import { DETAIL_DRAWER_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function DetailDrawerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader eyebrow={DETAIL_DRAWER_DATA.eyebrow} title={DETAIL_DRAWER_DATA.title} />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Reveal delay={0.06}>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8 space-y-3">
            <h3 className="text-base font-bold text-[#18141B]">{DETAIL_DRAWER_DATA.analysis.title}</h3>
            <ul className="space-y-2.5">
              {DETAIL_DRAWER_DATA.analysis.items.map((item) => (
                <li key={item} className="text-sm leading-[1.5] text-[#665F69]">
                  {"• "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8 space-y-3">
            <h3 className="text-base font-bold text-[#18141B]">{DETAIL_DRAWER_DATA.actions.title}</h3>
            <p className="text-sm leading-[1.5] text-[#665F69]">{DETAIL_DRAWER_DATA.actions.description}</p>
            <p className="text-sm font-semibold text-[#D65A2C]">{DETAIL_DRAWER_DATA.actions.note}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
