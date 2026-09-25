"use client";

import React from "react";
import { LIFECYCLE_DATA } from "./intelligence-fabric-data";
import { SectionContainer, Reveal } from "./shared";

export default function LifecycleSection() {
  return (
    <SectionContainer className="bg-[#1D033B]">
      <Reveal>
        <div className="flex flex-col gap-3.5">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#F4A261]">
            {LIFECYCLE_DATA.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold leading-[1.12] tracking-tight text-white">
            {LIFECYCLE_DATA.title}
          </h2>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
        {LIFECYCLE_DATA.stages.map((stage, i) => (
          <Reveal key={stage.step} delay={0.03 * i}>
            <div className="h-full rounded-xl border border-white/10 bg-white/[0.07] p-4">
              <span className="font-mono text-xs text-[#F4A261]">{stage.step}</span>
              <h3 className="mt-2 text-[15px] font-bold text-white">{stage.name}</h3>
              <p className="mt-1.5 text-xs leading-[1.4] text-[#F7D7CB]">{stage.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
