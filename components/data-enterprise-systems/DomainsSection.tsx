"use client";

import React from "react";
import { DOMAINS_DATA } from "./data-enterprise-systems-data";
import { FlowRow, IconTile, Notice, Reveal, SectionContainer, SectionHeader } from "./shared";

export default function DomainsSection() {
  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={DOMAINS_DATA.eyebrow} title={DOMAINS_DATA.title} description={DOMAINS_DATA.description} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINS_DATA.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.03 * idx} className="h-full">
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-6 shadow-[0px_5px_18px_0px_rgba(48,17,83,0.04)] flex flex-col gap-4">
                <IconTile icon={card.icon} />
                <span className="text-xs font-bold uppercase leading-4 text-[#B4561E]">{card.tag}</span>
                <h3 className="-mt-1 text-xl font-semibold leading-7 text-[#18141B]">{card.title}</h3>
                <p className="text-base leading-7 text-[#665F69]">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.06}>
          <figure className="w-full rounded-3xl border border-[#D8CEDD] bg-white p-5 sm:p-7 flex flex-col gap-5">
            <h3 className="text-lg sm:text-xl font-semibold text-[#18141B]">{DOMAINS_DATA.anatomy.title}</h3>
            <FlowRow steps={DOMAINS_DATA.anatomy.steps} />
            <figcaption className="text-sm leading-5 text-[#665F69]">{DOMAINS_DATA.anatomy.note}</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.08}>
          <Notice description={DOMAINS_DATA.notice} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
