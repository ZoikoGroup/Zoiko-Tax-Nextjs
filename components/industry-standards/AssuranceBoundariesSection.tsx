"use client";

import React from "react";
import { Info } from "lucide-react";
import { ASSURANCE_BOUNDARIES_DATA as A } from "./industry-standards-data";
import { SectionContainer, Reveal } from "./shared";

export default function AssuranceBoundariesSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{A.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{A.title}</h2>
          <p className="text-base sm:text-lg leading-[1.55] text-[#665F69]">{A.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="rounded-[26px] border border-[#D8CEDD] overflow-hidden mb-6">
          <div className="bg-[#301153] flex gap-8 p-6">
            {A.tableColumns.map((col, i) => (
              <p key={col} className={i === 0 ? "w-[250px] shrink-0 text-sm font-bold text-white" : "flex-1 text-sm font-bold text-white"}>
                {col}
              </p>
            ))}
          </div>
          {A.tableRows.map((row, ri) => (
            <div key={ri} className="border-t border-[#D8CEDD] flex gap-8 p-6">
              <p className="w-[250px] shrink-0 text-lg font-semibold leading-[1.4] text-[#301153]">{row[0]}</p>
              <p className="flex-1 text-base leading-[1.55] text-[#665F69]">{row[1]}</p>
              <p className="flex-1 text-base leading-[1.55] text-[#665F69]">{row[2]}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="rounded-2xl bg-white border border-[#D8CEDD] p-5 flex gap-3.5 mb-8">
          <Info className="h-6 w-6 shrink-0 text-[#301153]" aria-hidden="true" />
          <p className="text-sm leading-[1.55] text-[#665F69]">{A.scopeNote}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-col gap-5">
          <p className="text-sm leading-[1.55] text-[#665F69]">{A.destinationsLabel}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {A.destinations.map((d) => (
              <div key={d} className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-[#301153]">{d}</span>
                <span className="text-xs text-[#665F69]">{A.destinationsNote}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
