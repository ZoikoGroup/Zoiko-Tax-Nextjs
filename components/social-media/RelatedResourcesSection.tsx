"use client";

import React from "react";
import { SectionContainer, Reveal } from "./shared";
import { RELATED_RESOURCES_DATA as R } from "./social-media-data";

export default function RelatedResourcesSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{R.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{R.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{R.description}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {R.cards.map((card, i) => (
          <Reveal key={card.title} delay={0.02 * i}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-[18px]">
              <h3 className="text-xl font-bold leading-[1.2] text-[#18141B]">{card.title}</h3>
              <p className="text-[13px] leading-[1.6] text-[#665F69] flex-1">{card.description}</p>
              <span className="text-xs font-medium text-[#665F69]">Route unavailable</span>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
