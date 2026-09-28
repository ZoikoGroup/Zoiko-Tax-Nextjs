import React from "react";
import Image from "next/image";
import { Check, TriangleAlert } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { COVERAGE_DATA, IMAGES } from "./broadband-data";

export default function CoverageSection() {
  return (
    <SectionContainer id="coverage" className="bg-white" bgImage={IMAGES.trust}>
      <Reveal>
        <SectionHeader eyebrow={COVERAGE_DATA.eyebrow} title={COVERAGE_DATA.title} />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,608px)] lg:gap-9">
        <Reveal delay={0.08}>
          <div className="flex flex-col gap-5">
            <p className="text-base leading-6 text-[#665F69]">{COVERAGE_DATA.description}</p>
            <ul className="flex flex-col gap-3">
              {COVERAGE_DATA.markets.map((market) => (
                <li key={market.label} className="flex items-start gap-3 text-sm font-medium text-[#18141B] sm:text-base">
                  {market.state === "ok" ? (
                    <Check className="mt-0.5 size-4 shrink-0 text-[#26735B]" strokeWidth={2.5} aria-hidden="true" />
                  ) : (
                    <TriangleAlert className="mt-0.5 size-4 shrink-0 text-[#9A5B12]" strokeWidth={2} aria-hidden="true" />
                  )}
                  {market.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="relative flex min-h-[220px] flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-[#3E235C] px-6 py-10 text-center sm:flex-row sm:justify-around sm:gap-8">
            <Image
              src={IMAGES.trustPanel}
              alt=""
              fill
              sizes="(min-width: 1024px) 608px, 100vw"
              className="pointer-events-none object-cover"
            />
            <span className="relative max-w-[200px] text-base font-bold text-white">{COVERAGE_DATA.panel.title}</span>
            <span className="relative max-w-[260px] font-mono text-xs text-[#D9D0DF]">{COVERAGE_DATA.panel.caption}</span>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
