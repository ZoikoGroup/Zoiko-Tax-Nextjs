"use client";

import React from "react";
import { FileSearch, Info } from "lucide-react";
import { DETAIL_STRUCTURE_DATA as D } from "./industry-standards-data";
import { SectionContainer, Reveal } from "./shared";

export default function DetailStructureSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/industry-standards/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{D.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{D.title}</h2>
            <p className="text-base sm:text-lg leading-[1.55] text-[#665F69]">{D.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-6">
            <div className="flex gap-6 items-center">
              <FileSearch className="h-6 w-6 shrink-0 text-[#301153]" aria-hidden="true" />
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl font-bold leading-[1.1] text-[#18141B]">{D.summaryTitle}</h3>
                <p className="text-base leading-[1.55] text-[#665F69]">{D.summaryDescription}</p>
              </div>
              <span className="hidden sm:inline text-sm font-semibold text-[#665F69] shrink-0">{D.summaryBadge}</span>
            </div>

            <div className="flex flex-col">
              {Array.from({ length: Math.ceil(D.fields.length / 2) }).map((_, row) => {
                const pair = D.fields.slice(row * 2, row * 2 + 2);
                return (
                  <div key={row} className="border-t border-[#D8CEDD] py-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {pair.map((f) => (
                      <div key={f.label} className="flex flex-col gap-2">
                        <h4 className="text-[17px] font-bold text-[#301153]">{f.label}</h4>
                        <p className="text-base leading-[1.55] text-[#665F69]">{f.description}</p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl bg-[#EEE5F5] p-5 flex gap-3.5">
              <Info className="h-6 w-6 shrink-0 text-[#301153]" aria-hidden="true" />
              <p className="text-sm leading-[1.55] text-[#665F69]">{D.scopeNote}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
