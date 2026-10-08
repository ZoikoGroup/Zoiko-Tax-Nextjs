"use client";

import React from "react";
import { PATTERNS_DATA } from "./data-enterprise-systems-data";
import { ArrowLink, ICONS, Notice, Reveal, SectionContainer, SectionHeader } from "./shared";

export default function PatternsSection() {
  const { labels } = PATTERNS_DATA;

  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={PATTERNS_DATA.eyebrow} title={PATTERNS_DATA.title} description={PATTERNS_DATA.description} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PATTERNS_DATA.cards.map((card, idx) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.title} delay={0.03 * idx} className="h-full">
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-7 flex flex-col gap-3">
                  <Icon className="h-6 w-6 text-[#301153]" strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="mt-2 text-xl sm:text-2xl font-semibold leading-tight text-[#18141B]">{card.title}</h3>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase text-[#B4561E]">{labels.when}</span>
                    <p className="text-base leading-6 text-[#665F69]">{card.when}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase text-[#B4561E]">{labels.owner}</span>
                    <p className="text-base leading-6 text-[#665F69]">{card.owner}</p>
                  </div>
                  <div className="mt-auto pt-2 flex flex-col gap-1.5">
                    <span className="text-xs font-bold uppercase text-[#665F69]">{labels.next}</span>
                    <ArrowLink href={card.link.href}>{card.link.label}</ArrowLink>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08}>
          <Notice title={PATTERNS_DATA.notice.title} description={PATTERNS_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
