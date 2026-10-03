"use client";

import React from "react";
import { BG, COMPATIBILITY_DATA } from "./sdks-data";
import { SectionContainer, SectionHeader, Reveal, TextLink, ICONS } from "./shared";

export default function CompatibilitySection() {
  const { generated, notice } = COMPATIBILITY_DATA;

  return (
    <SectionContainer
      className="bg-[#25024D]"
      style={{ backgroundImage: `url('${BG.compatibility}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeader
            dark
            eyebrow={COMPATIBILITY_DATA.eyebrow}
            title={COMPATIBILITY_DATA.title}
            description={COMPATIBILITY_DATA.description}
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {COMPATIBILITY_DATA.cards.map((card, idx) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.title} delay={0.05 * idx} className="h-full">
                <div className="h-full rounded-2xl border border-[#705186] bg-[#301153]/90 p-6 sm:p-7 flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <Icon className="h-7 w-7 text-[#F4A261]" strokeWidth={1.5} aria-hidden="true" />
                    <span className="text-xs font-semibold text-[#D9D0DF]">{card.tag}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold leading-7 text-white">{card.title}</h3>
                  <p className="text-base leading-6 text-[#D9D0DF]">{card.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <Reveal className="flex-1">
            <div className="flex flex-col items-start gap-3">
              <h3 className="text-xl font-semibold text-white">{generated.title}</h3>
              <p className="text-base leading-6 text-[#D9D0DF]">{generated.description}</p>
              <TextLink dark href={generated.link.href}>
                {generated.link.label}
              </TextLink>
            </div>
          </Reveal>
          <Reveal delay={0.06} className="flex-1">
            <div className="flex flex-col items-start gap-3.5">
              <div className="w-full rounded-xl border border-[#705186] bg-[#241039]/90 p-5 flex flex-col gap-2">
                <p className="text-base font-semibold text-white">{notice.title}</p>
                <p className="text-sm leading-5 text-[#D9D0DF]">{notice.description}</p>
              </div>
              <TextLink dark href={notice.link.href}>
                {notice.link.label}
              </TextLink>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}
