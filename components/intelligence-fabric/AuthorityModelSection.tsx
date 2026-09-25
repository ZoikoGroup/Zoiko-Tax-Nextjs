"use client";

import React from "react";
import { AUTHORITY_MODEL_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function AuthorityModelSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={AUTHORITY_MODEL_DATA.eyebrow}
          title={AUTHORITY_MODEL_DATA.title}
          description={AUTHORITY_MODEL_DATA.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {AUTHORITY_MODEL_DATA.levels.map((level, i) => (
          <Reveal key={level.level} delay={0.05 * i}>
            <div className="h-full rounded-xl border border-[#D8CEDD] bg-white p-6 space-y-3">
              <span className="font-mono text-xs text-[#D65A2C]">{level.level}</span>
              <h3 className="text-lg font-bold text-[#18141B]">{level.title}</h3>
              <p className="text-sm leading-[1.5] text-[#665F69]">{level.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
