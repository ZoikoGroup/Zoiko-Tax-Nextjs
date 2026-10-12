"use client";

import React from "react";
import { TRUST_BOUNDARIES_DATA as T } from "./certifications-data";
import { SectionContainer, Reveal } from "./shared";

export default function TrustBoundariesSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/certifications/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{T.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{T.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{T.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {T.destinations.map((d, i) => (
            <Reveal key={d.title} delay={0.03 * i}>
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4.5">
                <h3 className="text-xl sm:text-2xl font-bold leading-[1.15] text-[#18141B]">{d.title}</h3>
                <p className="text-base leading-[1.6] text-[#665F69]">{d.description}</p>
                <p className="text-sm text-[#665F69]">{T.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
