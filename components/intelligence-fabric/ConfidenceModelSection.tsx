"use client";

import React from "react";
import { CONFIDENCE_MODEL_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function ConfidenceModelSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={CONFIDENCE_MODEL_DATA.eyebrow}
          title={CONFIDENCE_MODEL_DATA.title}
          description={CONFIDENCE_MODEL_DATA.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CONFIDENCE_MODEL_DATA.metrics.map((metric, i) => (
          <Reveal key={metric.title} delay={0.05 * i}>
            <div className="h-full rounded-xl border border-[#D8CEDD] bg-white p-6 space-y-3">
              <span className="text-xs font-normal text-[#665F69]">{metric.title}</span>
              <p className="text-[28px] font-bold text-[#18141B]">{metric.value}</p>
              <p className="text-[13px] leading-[1.5] text-[#535055]">{metric.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
