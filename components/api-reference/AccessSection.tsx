"use client";

import React from "react";
import { ACCESS_DATA } from "./api-reference-data";
import { ICONS, InfoNotice, Reveal, SectionContainer, SectionHeader, TextLink } from "./shared";

export default function AccessSection() {
  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={ACCESS_DATA.eyebrow} title={ACCESS_DATA.title} description={ACCESS_DATA.description} />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {ACCESS_DATA.cards.map((card, idx) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.title} delay={0.04 * idx} className="h-full">
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#D65A2C]" strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="text-xl leading-7 text-[#18141B]">{card.title}</h3>
                  <p className="text-base leading-6 text-[#665F69]">{card.description}</p>
                  <TextLink href={card.link.href} className="mt-auto">
                    {card.link.label}
                  </TextLink>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08}>
          <InfoNotice title={ACCESS_DATA.notice.title} description={ACCESS_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
