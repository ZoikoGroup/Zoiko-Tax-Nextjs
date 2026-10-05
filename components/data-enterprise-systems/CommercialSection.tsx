"use client";

import React from "react";
import { BG, COMMERCIAL_DATA } from "./data-enterprise-systems-data";
import { ArrowLink, IconTile, Notice, Reveal, SectionContainer, SectionHeader, patternBg } from "./shared";

export default function CommercialSection() {
  return (
    <SectionContainer className="bg-[#FAF8FA]" style={patternBg(BG.commercial)}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={COMMERCIAL_DATA.eyebrow} title={COMMERCIAL_DATA.title} description={COMMERCIAL_DATA.description} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMMERCIAL_DATA.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.03 * idx} className="h-full">
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-6 flex flex-col gap-4">
                <IconTile icon={card.icon} />
                <span className="text-xs font-bold uppercase leading-4 text-[#B4561E]">{card.tag}</span>
                <h3 className="-mt-1 text-xl font-semibold leading-7 text-[#18141B]">{card.title}</h3>
                <p className="text-base leading-6 text-[#665F69]">{card.description}</p>
                {card.link && <ArrowLink href={card.link.href}>{card.link.label}</ArrowLink>}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <Notice title={COMMERCIAL_DATA.notice.title} description={COMMERCIAL_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
