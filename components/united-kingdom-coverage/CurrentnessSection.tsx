"use client";

import React from "react";
import { CURRENTNESS_DATA } from "./united-kingdom-data";
import {
  SectionContainer,
  SectionHeading,
  StatusUnavailableBadge,
  IconInfo,
  Reveal,
} from "./shared";

export default function CurrentnessSection() {
  return (
    <SectionContainer className="bg-white">
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeading
            eyebrow={CURRENTNESS_DATA.eyebrow}
            title={CURRENTNESS_DATA.title}
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-[26px] border border-[#D8CEDD] bg-[#FAF3FF] p-6 sm:p-8 flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Left: Market and source state */}
            <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-[#18141B]">
                {CURRENTNESS_DATA.marketName}
              </h3>
              <span className="text-xs font-semibold uppercase text-[#665F69]">
                {CURRENTNESS_DATA.marketStatusLabel}
              </span>
              <StatusUnavailableBadge className="self-start" />
            </div>

            {/* Right: Currentness fields in 2 rows of 2 */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-semibold uppercase text-[#665F69]">
                    {CURRENTNESS_DATA.fields[0].label}
                  </span>
                  <span className="text-base font-medium leading-[1.5em] text-[#18141B]">
                    {CURRENTNESS_DATA.fields[0].value}
                  </span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-semibold uppercase text-[#665F69]">
                    {CURRENTNESS_DATA.fields[1].label}
                  </span>
                  <span className="text-base font-medium leading-[1.5em] text-[#18141B]">
                    {CURRENTNESS_DATA.fields[1].value}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-semibold uppercase text-[#665F69]">
                    {CURRENTNESS_DATA.fields[2].label}
                  </span>
                  <span className="text-base font-medium leading-[1.5em] text-[#18141B]">
                    {CURRENTNESS_DATA.fields[2].value}
                  </span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-semibold uppercase text-[#665F69]">
                    {CURRENTNESS_DATA.fields[3].label}
                  </span>
                  <span className="text-base font-medium leading-[1.5em] text-[#18141B]">
                    {CURRENTNESS_DATA.fields[3].value}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Unavailable explanation */}
        <Reveal delay={0.1}>
          <div className="flex items-start gap-3.5">
            <IconInfo className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="flex-1 text-base font-normal leading-[1.6em] text-[#665F69]">
              {CURRENTNESS_DATA.explanation}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
