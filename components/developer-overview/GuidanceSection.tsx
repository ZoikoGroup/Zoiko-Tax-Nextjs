"use client";

import React from "react";
import { BG, GUIDANCE_DATA } from "./developer-overview-data";
import { Reveal, ResourceCardView, SectionContainer, SectionHeader } from "./shared";

export default function GuidanceSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{ backgroundImage: `url('${BG.guidance}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={GUIDANCE_DATA.eyebrow} title={GUIDANCE_DATA.title} />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {GUIDANCE_DATA.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.04 * idx} className="h-full">
              <ResourceCardView card={card} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
