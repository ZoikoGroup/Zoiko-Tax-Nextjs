"use client";

import React from "react";
import Image from "next/image";
import { PACK_CONTEXT_DATA } from "./united-kingdom-data";
import {
  SectionContainer,
  SectionHeading,
  DarkPillButton,
  Reveal,
} from "./shared";

export default function PackContextSection() {
  const p = PACK_CONTEXT_DATA;

  return (
    <SectionContainer className="relative bg-white overflow-hidden">
      {/* Background Editorial Texture */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/existing-tax-engines/0.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow={p.eyebrow}
            title={p.title}
            description={p.description}
          />
        </Reveal>

        {/* 2 Context Panels */}
        <Reveal delay={0.06}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Panel 1: Public pack record */}
            <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-6 sm:p-8 flex flex-col gap-7 justify-between shadow-xs">
              <h3 className="text-2xl font-bold text-[#18141B]">
                {p.publicPackRecord.title}
              </h3>

              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2.5">
                    <span className="text-xs font-semibold uppercase text-[#665F69]">
                      {p.publicPackRecord.fields[0].label}
                    </span>
                    <span className="text-base font-medium leading-[1.5em] text-[#18141B]">
                      {p.publicPackRecord.fields[0].value}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <span className="text-xs font-semibold uppercase text-[#665F69]">
                      {p.publicPackRecord.fields[1].label}
                    </span>
                    <span className="text-base font-medium leading-[1.5em] text-[#18141B]">
                      {p.publicPackRecord.fields[1].value}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2.5">
                    <span className="text-xs font-semibold uppercase text-[#665F69]">
                      {p.publicPackRecord.fields[2].label}
                    </span>
                    <span className="text-base font-medium leading-[1.5em] text-[#18141B]">
                      {p.publicPackRecord.fields[2].value}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <span className="text-xs font-semibold uppercase text-[#665F69]">
                      {p.publicPackRecord.fields[3].label}
                    </span>
                    <span className="text-base font-medium leading-[1.5em] text-[#18141B]">
                      {p.publicPackRecord.fields[3].value}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-semibold uppercase text-[#665F69]">
                    {p.publicPackRecord.fields[4].label}
                  </span>
                  <span className="text-base font-medium leading-[1.5em] text-[#18141B]">
                    {p.publicPackRecord.fields[4].value}
                  </span>
                </div>
              </div>
            </div>

            {/* Panel 2: Pack reading guidance */}
            <div className="rounded-[26px] bg-[#301153] p-7 sm:p-9 flex flex-col gap-6 justify-between text-white shadow-xs">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl sm:text-[32px] font-bold leading-[1.15em] text-white">
                  {p.readingGuidance.title}
                </h3>
                <p className="text-base sm:text-[17px] font-normal leading-[1.6em] text-[#D9D0DF]">
                  {p.readingGuidance.description}
                </p>
              </div>

              <div className="flex flex-col gap-3.5 pt-2">
                <span className="text-[13px] font-bold uppercase tracking-wider text-[#F4A261]">
                  {p.readingGuidance.actionEyebrow}
                </span>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  {p.readingGuidance.actions.map((act) => (
                    <DarkPillButton key={act.label} href={act.href} showIcon>
                      {act.label}
                    </DarkPillButton>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
