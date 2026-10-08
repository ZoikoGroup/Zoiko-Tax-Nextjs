"use client";

import React from "react";
import { BG, OBSERVABILITY_DATA } from "./webhooks-events-data";
import { SectionContainer, SectionHeader, Reveal, Card, GuideTable, patternBg } from "./shared";

export default function ObservabilitySection() {
  return (
    <SectionContainer id="observability" className="bg-white scroll-mt-24" style={patternBg(BG.observability)}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            eyebrow={OBSERVABILITY_DATA.eyebrow}
            title={OBSERVABILITY_DATA.title}
            description={OBSERVABILITY_DATA.description}
          />
        </Reveal>

        <Reveal delay={0.04}>
          <GuideTable headers={OBSERVABILITY_DATA.headers} rows={OBSERVABILITY_DATA.rows} />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {OBSERVABILITY_DATA.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.05 * idx} className="h-full">
              <Card>
                <h3 className="text-xl sm:text-2xl font-semibold leading-7 text-[#18141B]">{card.title}</h3>
                <p className="text-base leading-6 text-[#665F69]">{card.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
