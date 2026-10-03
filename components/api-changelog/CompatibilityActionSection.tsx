"use client";

import React from "react";
import Image from "next/image";
import { COMPATIBILITY_ACTION_DATA } from "./api-changelog-data";
import { SectionContainer, MetadataBadge, Reveal } from "./shared";

export default function CompatibilityActionSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#120327]">
      <div className="absolute inset-0 opacity-[0.16] pointer-events-none select-none" aria-hidden="true">
        <Image src="/api-changelog/compatibility-bg.png" alt="" fill className="object-cover" />
      </div>

      <SectionContainer className="relative">
        <Reveal>
          <div className="flex flex-col gap-3.5">
            <span className="text-xs font-bold text-[#F4A261]">{COMPATIBILITY_ACTION_DATA.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.12] text-white">
              {COMPATIBILITY_ACTION_DATA.title}
            </h2>
            <p className="text-base leading-[1.6] text-[#D9D0DF]">{COMPATIBILITY_ACTION_DATA.description}</p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {COMPATIBILITY_ACTION_DATA.dimensions.map((dim, i) => (
            <Reveal key={dim.title} delay={0.05 * i}>
              <div className="h-full rounded-2xl border border-[#644578] bg-[#230D3D] p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-white">{dim.title}</h3>
                <p className="text-base font-semibold leading-[1.4] text-white">{dim.question}</p>
                <p className="text-sm leading-[1.6] text-[#D9D0DF]">{dim.values}</p>
                <p className="text-base leading-[1.6] text-[#D9D0DF]">{dim.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16} className="w-full mt-6">
          <div className="rounded-2xl border border-[#705186] p-6 flex flex-col sm:flex-row gap-5 sm:items-start">
            <MetadataBadge tone="purpleDark">{COMPATIBILITY_ACTION_DATA.impactGuidance.badge}</MetadataBadge>
            <p className="flex-1 text-sm leading-[1.6] text-[#D9D0DF]">{COMPATIBILITY_ACTION_DATA.impactGuidance.text}</p>
          </div>
        </Reveal>
      </SectionContainer>
    </div>
  );
}
