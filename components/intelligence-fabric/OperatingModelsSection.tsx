"use client";

import React from "react";
import { OPERATING_MODELS_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, PrimaryButton, Reveal } from "./shared";

export default function OperatingModelsSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={OPERATING_MODELS_DATA.eyebrow}
          title={OPERATING_MODELS_DATA.title}
          description={OPERATING_MODELS_DATA.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <Reveal delay={0.06}>
          <div className="h-full rounded-xl border border-[#D8CEDD] bg-white p-6 space-y-3">
            <h3 className="text-lg font-bold text-[#18141B]">{OPERATING_MODELS_DATA.shadow.title}</h3>
            <p className="text-sm leading-[1.5] text-[#665F69]">{OPERATING_MODELS_DATA.shadow.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-xl bg-[#301153] p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">{OPERATING_MODELS_DATA.developer.title}</h3>
            <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-[1.6] text-[#F7D7CB]">
              {OPERATING_MODELS_DATA.developer.code}
            </pre>
            <PrimaryButton href="#">{OPERATING_MODELS_DATA.developer.action}</PrimaryButton>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
