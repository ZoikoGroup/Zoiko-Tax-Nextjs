"use client";

import React from "react";
import { SCOPE_EXCLUSIONS_DATA } from "./united-kingdom-data";
import {
  SectionContainer,
  SectionHeading,
  SecondaryWhitePillButton,
  IconLayers,
  IconFileSearch,
  IconUsersRound,
  Reveal,
} from "./shared";

const SCOPE_ICONS = [IconLayers, IconFileSearch, IconUsersRound];

export default function ScopeExclusionsSection() {
  const s = SCOPE_EXCLUSIONS_DATA;

  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow={s.eyebrow}
            title={s.title}
            description={s.description}
          />
        </Reveal>

        {/* 3 Scope Dimension Cards */}
        <Reveal delay={0.06}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {s.cards.map((card, idx) => {
              const IconComponent = SCOPE_ICONS[idx];
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4.5 shadow-xs"
                >
                  <div
                    style={{ backgroundColor: "rgba(241, 233, 247, 1)" }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-[#301153]"
                  >
                    <IconComponent className="w-[22px] h-[22px] shrink-0" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[23px] font-bold leading-[1.25em] text-[#18141B]">
                      {card.title}
                    </h3>
                    <span className="text-sm font-medium leading-[1.5em] text-[#301153]">
                      {card.subtitle}
                    </span>
                  </div>
                  <p className="text-base font-normal leading-[1.6em] text-[#665F69]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Scope Interpretation Card with exact rgba(241, 233, 247, 1) background */}
        <Reveal delay={0.1}>
          <div
            style={{ backgroundColor: "rgba(241, 233, 247, 1)" }}
            className="rounded-[26px] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          >
            <div className="flex flex-col gap-3.5">
              <h4 className="text-[22px] font-bold text-[#18141B]">
                {s.interpretation.card1.title}
              </h4>
              <p className="text-base font-normal leading-[1.6em] text-[#665F69]">
                {s.interpretation.card1.description}
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              <h4 className="text-[22px] font-bold text-[#18141B]">
                {s.interpretation.card2.title}
              </h4>
              <p className="text-base font-normal leading-[1.6em] text-[#665F69]">
                {s.interpretation.card2.description}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Scope Next Step */}
        <Reveal delay={0.14}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="max-w-[790px] text-base font-normal leading-[1.6em] text-[#665F69]">
              {s.nextStep.text}
            </p>
            <SecondaryWhitePillButton href={s.nextStep.actionHref} showIcon>
              {s.nextStep.actionLabel}
            </SecondaryWhitePillButton>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
