"use client";

import React from "react";
import { BG, SURFACE_DATA } from "./webhooks-events-data";
import { SectionContainer, SectionHeader, Reveal, Card, NoticeBox, ICONS, patternBg } from "./shared";

export default function SurfaceSection() {
  return (
    <SectionContainer className="bg-white" style={patternBg(BG.surface)}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={SURFACE_DATA.eyebrow} title={SURFACE_DATA.title} description={SURFACE_DATA.description} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SURFACE_DATA.cards.map((card, idx) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.title} delay={0.05 * idx} className="h-full">
                <Card>
                  <Icon className="h-6 w-6 text-[#D65A2C]" strokeWidth={1.6} aria-hidden="true" />
                  <span className="text-xs font-bold uppercase text-[#D65A2C]">{card.tag}</span>
                  <h3 className="text-xl sm:text-2xl font-semibold leading-7 text-[#18141B]">{card.title}</h3>
                  <p className="text-base leading-6 text-[#665F69]">{card.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <NoticeBox title={SURFACE_DATA.notice.title} description={SURFACE_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
