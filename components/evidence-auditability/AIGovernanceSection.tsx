"use client";

import React from "react";
import Image from "next/image";
import { AI_GOVERNANCE_DATA } from "./evidence-auditability-data";
import { SectionContainer, Reveal } from "./shared";

export default function AIGovernanceSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#1D033B]">
      <div className="absolute inset-0 opacity-27 pointer-events-none select-none" aria-hidden="true">
        <Image src="/evidence-auditability/ai-governance-bg.png" alt="" fill className="object-cover" />
      </div>

      <SectionContainer className="relative">
        <Reveal>
          <span className="block text-[13px] font-bold uppercase text-[#F4A261]">{AI_GOVERNANCE_DATA.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.04}>
          <h2 className="mt-3 text-center text-2xl sm:text-4xl md:text-[44px] font-extrabold leading-[1.15] text-white">
            {AI_GOVERNANCE_DATA.quote}
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-white/15 bg-[#260047] p-6 space-y-3">
              <h3 className="text-lg font-bold text-[#F4A261]">{AI_GOVERNANCE_DATA.support.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {AI_GOVERNANCE_DATA.support.items.map((item) => (
                  <li key={item} className="text-sm text-[#D9D0DF]">
                    {"• "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border border-white/15 bg-[#260047] p-6 space-y-3">
              <h3 className="text-lg font-bold text-[#F4A261]">{AI_GOVERNANCE_DATA.restricted.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {AI_GOVERNANCE_DATA.restricted.items.map((item) => (
                  <li key={item} className="text-sm text-[#D9D0DF]">
                    {"• "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </div>
  );
}
