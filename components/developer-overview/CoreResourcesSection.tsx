"use client";

import React from "react";
import { CORE_RESOURCES_DATA } from "./developer-overview-data";
import { Reveal, ResourceCardView, SectionContainer, SectionHeader } from "./shared";

export default function CoreResourcesSection() {
  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            eyebrow={CORE_RESOURCES_DATA.eyebrow}
            title={CORE_RESOURCES_DATA.title}
            description={CORE_RESOURCES_DATA.description}
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {CORE_RESOURCES_DATA.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.04 * idx} className="h-full">
              <ResourceCardView card={card} />
            </Reveal>
          ))}
        </div>

        <p className="text-sm leading-5 text-[#665F69]">{CORE_RESOURCES_DATA.footnote}</p>
      </div>
    </SectionContainer>
  );
}
