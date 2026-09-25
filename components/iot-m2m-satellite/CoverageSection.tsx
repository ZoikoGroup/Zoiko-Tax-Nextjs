import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { COVERAGE_DATA, IMAGES } from "./iot-m2m-satellite-data";

export default function CoverageSection() {
  return (
    <SectionContainer id="coverage" className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader
          eyebrow={COVERAGE_DATA.eyebrow}
          title={COVERAGE_DATA.title}
          description={COVERAGE_DATA.description}
          className="[&>h2]:max-w-[480px]"
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_500px] lg:gap-16">
        <Reveal delay={0.08}>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-[#18141B]">{COVERAGE_DATA.boundaryTitle}</h3>
            <p className="text-sm leading-6 text-[#665F69]">{COVERAGE_DATA.boundaryDescription}</p>
            <div className="mt-2 flex flex-wrap gap-6">
              {COVERAGE_DATA.markets.map((market) => (
                <div key={market.name} className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-[#D65A2C] sm:text-4xl">{market.name}</span>
                  <span className="text-xs font-semibold uppercase text-[#665F69]">{market.status}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="relative aspect-[500/280] w-full overflow-hidden rounded-3xl">
            <Image
              src={IMAGES.coverageCard}
              alt="Server room illustrating the trust context"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1D033B]/70" aria-hidden="true" />
            <span className="absolute bottom-4 left-4 rounded-lg bg-white/20 px-4 py-2 sm:bottom-6 sm:left-6 sm:px-7 sm:py-2.5 text-sm font-semibold text-white backdrop-blur-sm">
              {COVERAGE_DATA.imageCaption}
            </span>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
