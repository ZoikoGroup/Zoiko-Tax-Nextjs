import React from "react";
import { SectionContainer, SectionHeader, Badge, Reveal } from "./shared";
import { COVERAGE_DATA, IMAGES } from "./mvno-data";

export default function CoverageSection() {
  return (
    <SectionContainer id="coverage" className="bg-[#3B2256]" bgImage={IMAGES.coverage}>
      <Reveal>
        <SectionHeader
          eyebrow={COVERAGE_DATA.eyebrow}
          title={COVERAGE_DATA.title}
          description={COVERAGE_DATA.description}
          dark
        />
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="mt-8 rounded-2xl border border-white/15 bg-[#2A0650] px-5 py-2 sm:px-6">
          {COVERAGE_DATA.markets.map((row) => (
            <li
              key={row.market}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 border-b border-white/10 py-3.5 sm:grid-cols-3"
            >
              <span className="text-sm font-semibold text-white">{row.market}</span>
              <span className="order-last col-span-2 text-sm text-[#D8CEDD] sm:order-none sm:col-span-1 sm:text-center">
                {row.scope}
              </span>
              <Badge label={row.badge} tone={row.tone} dark className="justify-self-end" />
            </li>
          ))}
        </ul>
      </Reveal>
    </SectionContainer>
  );
}
