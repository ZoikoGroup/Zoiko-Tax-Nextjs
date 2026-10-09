"use client";

import React from "react";
import { CURRENTNESS_DATA as C } from "./social-media-data";
import { SectionContainer, Reveal } from "./shared";

export default function CurrentnessSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/social-media/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{C.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{C.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{C.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-8">
            <div className="hidden lg:grid grid-cols-[300px_1fr_380px] gap-6 pb-4 text-[13px] font-bold text-[#D65A2C]">
              {C.headings.map((h) => (
                <span key={h}>{h}</span>
              ))}
            </div>
            {C.rows.map((row) => (
              <div key={row.status} className="border-t border-[#D8CEDD] py-6 grid grid-cols-1 lg:grid-cols-[300px_1fr_380px] gap-3 lg:gap-6 items-center">
                <span className="font-mono text-sm font-medium text-[#301153]">{row.status}</span>
                <span className="text-[15px] leading-[1.5] text-[#18141B]">{row.meaning}</span>
                <span className="text-[15px] leading-[1.5] text-[#665F69]">{row.next}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-base leading-[1.6] text-[#665F69]">{C.footnote}</p>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
