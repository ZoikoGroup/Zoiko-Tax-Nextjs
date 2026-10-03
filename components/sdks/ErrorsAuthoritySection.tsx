"use client";

import React from "react";
import { BG, ERRORS_DATA } from "./sdks-data";
import { SectionContainer, SectionHeader, Reveal, TextLink, ICONS } from "./shared";

export default function ErrorsAuthoritySection() {
  const { authority, correlation } = ERRORS_DATA;

  return (
    <SectionContainer
      className="bg-white"
      style={{ backgroundImage: `url('${BG.errors}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeader eyebrow={ERRORS_DATA.eyebrow} title={ERRORS_DATA.title} description={ERRORS_DATA.description} />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {ERRORS_DATA.cards.map((card, idx) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.title} delay={0.05 * idx} className="h-full">
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
                  <Icon className="h-7 w-7 text-[#D65A2C]" strokeWidth={1.7} aria-hidden="true" />
                  <h3 className="text-xl font-semibold leading-7 text-[#18141B]">{card.title}</h3>
                  <p className="text-base leading-6 text-[#665F69]">{card.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-7 flex flex-col md:flex-row gap-8 md:gap-10">
            <div className="flex-1 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[#18141B]">{authority.title}</h3>
              <p className="text-base leading-6 text-[#665F69]">{authority.description}</p>
            </div>
            <div className="flex-1 flex flex-col items-start gap-3">
              <h3 className="text-xl font-semibold text-[#18141B]">{correlation.title}</h3>
              <p className="text-base leading-6 text-[#665F69]">{correlation.description}</p>
              <TextLink href={correlation.link.href}>{correlation.link.label}</TextLink>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
