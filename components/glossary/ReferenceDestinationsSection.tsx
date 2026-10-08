"use client";

import React from "react";
import { REFERENCE_DESTINATIONS_DATA as R } from "./glossary-data";
import { SectionContainer, Reveal } from "./shared";

export default function ReferenceDestinationsSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/glossary/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-[#AC4F25]">{R.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{R.title}</h2>
            <p className="text-base leading-[1.6] text-[#665F69]">{R.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {R.cards.map((card, i) => (
            <Reveal key={card.title} delay={0.03 * i}>
              <a
                href={card.path}
                className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3 hover:border-[#BF6735]/40 transition-colors"
              >
                <span className="text-[13px] font-semibold text-[#AC4F25]">{card.tag}</span>
                <h3 className="text-2xl font-bold leading-[1.15] text-[#18141B]">{card.title}</h3>
                <p className="text-sm leading-[1.6] text-[#665F69] flex-1">{card.description}</p>
                <span className="text-[13px] font-medium text-[#665F69]">{card.path}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#AC4F25]">
                  {card.cta}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="w-full">
          <p className="text-sm leading-[1.6] text-[#665F69]">{R.footnote}</p>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
