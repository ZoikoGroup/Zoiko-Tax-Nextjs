"use client";

import React from "react";
import { COVERAGE_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function CoverageSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/intelligence-fabric/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={COVERAGE_DATA.eyebrow}
          title={COVERAGE_DATA.title}
          description={COVERAGE_DATA.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {COVERAGE_DATA.markets.map((market, i) => (
          <Reveal key={market.name} delay={0.05 * i}>
            <div className="h-full rounded-xl border border-[#D8CEDD] bg-white p-6 space-y-3">
              <h3 className="text-lg font-bold text-[#18141B]">{market.name}</h3>
              <span className="inline-flex items-center rounded-full bg-[#F7F3ED] px-3 py-1 text-xs font-semibold text-[#D65A2C]">
                {market.status}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
