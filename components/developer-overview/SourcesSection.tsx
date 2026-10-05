"use client";

import React from "react";
import { SOURCES_DATA } from "./developer-overview-data";
import { Reveal, ResourceCardView, SectionContainer, SectionHeader } from "./shared";

export default function SourcesSection() {
  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={SOURCES_DATA.eyebrow} title={SOURCES_DATA.title} description={SOURCES_DATA.description} />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOURCES_DATA.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.03 * idx} className="h-full">
              <ResourceCardView card={card} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
