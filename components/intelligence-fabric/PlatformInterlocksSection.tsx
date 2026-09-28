"use client";

import React from "react";
import { PLATFORM_INTERLOCKS_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function PlatformInterlocksSection() {
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
          eyebrow={PLATFORM_INTERLOCKS_DATA.eyebrow}
          title={PLATFORM_INTERLOCKS_DATA.title}
          description={PLATFORM_INTERLOCKS_DATA.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PLATFORM_INTERLOCKS_DATA.cards.map((card, i) => (
          <Reveal key={card.title} delay={0.05 * i}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 space-y-3">
              <h3 className="text-lg font-bold text-[#18141B]">{card.title}</h3>
              <p className="text-[13px] leading-[1.5] text-[#665F69]">{card.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
