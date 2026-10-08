"use client";

import React from "react";
import { CURRENTNESS_DATA as C } from "./glossary-data";
import { SectionContainer, Reveal } from "./shared";

export default function CurrentnessGovernanceSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/glossary/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-[#AC4F25]">{C.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{C.title}</h2>
            <p className="text-base leading-[1.6] text-[#665F69]">{C.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-[26px] border border-[#D8CEDD] bg-[#FDF9FF] p-6 sm:p-7 flex flex-col gap-5">
            <span className="text-xs font-bold text-[#AC4F25]">{C.lifecycleLabel}</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-5">
              {C.lifecycleStates.map((state) => (
                <div key={state.title} className="border-t border-[#D8CEDD] pt-4 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-[#301153]">{state.title}</h3>
                  <p className="text-sm leading-[1.6] text-[#665F69]">{state.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {C.governance.map((g, i) => (
            <Reveal key={g.title} delay={0.04 * i}>
              <div className="flex flex-col gap-3.5">
                <h3 className="text-xl sm:text-[22px] font-bold leading-[1.15] text-[#18141B]">{g.title}</h3>
                <p className="text-base leading-[1.6] text-[#665F69]">{g.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-[#301153] p-7 flex flex-col sm:flex-row gap-7 sm:gap-9">
            <div className="sm:w-[320px] shrink-0 flex flex-col gap-3">
              <span className="text-xs font-bold text-[#F4A261]">{C.gate.eyebrow}</span>
              <h3 className="text-2xl font-bold leading-[1.15] text-white">{C.gate.title}</h3>
            </div>
            <div className="flex-1 flex flex-col gap-3.5">
              {C.gate.paragraphs.map((p, i) => (
                <p key={p} className={i === 0 ? "text-base leading-[1.6] text-[#D9D0DF]" : "text-sm leading-[1.6] text-[#D9D0DF]"}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
