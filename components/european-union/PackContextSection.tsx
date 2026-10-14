"use client";

import React from "react";
import { PACK_CONTEXT_DATA } from "./european-union-data";
import {
  SectionContainer,
  SectionHeading,
  PrimaryPillButton,
  SecondaryWhitePillButton,
  Reveal,
} from "./shared";

export default function PackContextSection() {
  const p = PACK_CONTEXT_DATA;

  return (
    <SectionContainer className="bg-white">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow={p.eyebrow}
            title={p.title}
            description={p.description}
          />
        </Reveal>

        {/* Pack context split cards */}
        <Reveal delay={0.06}>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Card: Pack interpretation */}
            <div className="w-full lg:w-[400px] shrink-0 rounded-[26px] bg-[#301153] p-8 flex flex-col gap-6 text-white shadow-xs">
              <h3 className="text-2xl sm:text-[28px] font-bold leading-[1.2em] text-white">
                Pack lifecycle ≠<br className="hidden sm:inline" />
                capability readiness
              </h3>
              <p className="text-base font-normal leading-[1.55em] text-[#D9D0DF]">
                {p.interpretation.body1}
              </p>
              <p className="text-sm font-normal leading-[1.55em] text-[#D9D0DF]">
                {p.interpretation.body2}
              </p>
            </div>

            {/* Right Card: Public pack record */}
            <div className="w-full lg:flex-1 rounded-[26px] border border-[#D8CEDD] bg-[#FAF3FF] p-8 flex flex-col gap-7 shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                {p.publicPackRecord.fields.map((f) => (
                  <div key={f.label} className="flex flex-col gap-2">
                    <span className="text-[13px] font-semibold text-[#665F69]">
                      {f.label}
                    </span>
                    <span className="text-base font-normal text-[#18141B]">
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Pack Handoffs */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-3">
            <PrimaryPillButton href={p.handoffs[0].href} showIcon>
              {p.handoffs[0].label}
            </PrimaryPillButton>
            <SecondaryWhitePillButton href={p.handoffs[1].href} showIcon>
              {p.handoffs[1].label}
            </SecondaryWhitePillButton>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
