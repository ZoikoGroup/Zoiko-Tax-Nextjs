"use client";

import React from "react";
import { Info, GitCommitHorizontal } from "lucide-react";
import { DEPRECATIONS_DATA } from "./api-changelog-data";
import { SectionContainer, MetadataBadge, Reveal } from "./shared";

export default function DeprecationsSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-3.5 mb-6">
          <span className="text-xs font-bold text-[#D65A2C]">{DEPRECATIONS_DATA.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.12] text-[#18141B]">
            {DEPRECATIONS_DATA.title}
          </h2>
          <p className="text-base leading-[1.6] text-[#665F69]">{DEPRECATIONS_DATA.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="rounded-2xl bg-[#FFF0E7] p-6 flex items-start gap-4">
          <Info className="h-6 w-6 shrink-0 text-[#D65A2C]" aria-hidden="true" />
          <p className="text-lg sm:text-[21px] font-semibold leading-[1.4] text-[#18141B]">{DEPRECATIONS_DATA.warning}</p>
        </div>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DEPRECATIONS_DATA.cards.map((card, i) => (
          <Reveal key={card.title} delay={0.04 * i}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
              <GitCommitHorizontal className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
              <h3 className="text-base font-semibold text-[#18141B]">{card.title}</h3>
              <p className="text-sm leading-[1.6] text-[#665F69]">{card.description}</p>
              <div>
                <MetadataBadge>{card.badge}</MetadataBadge>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DEPRECATIONS_DATA.states.map((state) => (
          <div key={state.title} className="flex flex-col gap-2">
            <h4 className="text-base font-semibold text-[#18141B]">{state.title}</h4>
            <p className="text-sm leading-[1.6] text-[#665F69]">{state.description}</p>
          </div>
        ))}
      </div>

      <Reveal delay={0.1} className="w-full mt-6">
        <p className="text-sm leading-[1.6] text-[#665F69]">{DEPRECATIONS_DATA.footnote}</p>
      </Reveal>
    </SectionContainer>
  );
}
