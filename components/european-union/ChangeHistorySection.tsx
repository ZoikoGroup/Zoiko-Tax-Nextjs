"use client";

import React from "react";
import Image from "next/image";
import { CHANGE_HISTORY_DATA } from "./european-union-data";
import {
  SectionContainer,
  SectionHeading,
  StatusUnavailableBadge,
  PrimaryPillButton,
  Reveal,
} from "./shared";

export default function ChangeHistorySection() {
  const c = CHANGE_HISTORY_DATA;

  return (
    <SectionContainer className="relative bg-[#120327] overflow-hidden">
      {/* Background imagery & gradient */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/european-union/change-history-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(18, 3, 39, 0.94) 0%, rgba(18, 3, 39, 0.84) 50%, rgba(18, 3, 39, 0.61) 100%)",
          }}
        />
      </div>

      <div className="relative flex flex-col gap-10 text-white">
        <Reveal>
          <SectionHeading
            eyebrow={c.eyebrow}
            title={c.title}
            description={c.description}
            dark
          />
        </Reveal>

        {/* 2 Interpretation Panels */}
        <Reveal delay={0.06}>
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Panel 1: Latest public record */}
            <div className="w-full lg:w-[350px] shrink-0 rounded-2xl border border-white/15 bg-[#301153]/80 p-7 flex flex-col gap-5 shadow-xs">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl sm:text-[22px] font-bold text-white">
                  {c.latestRecord.title}
                </h3>
                <StatusUnavailableBadge dark className="self-start" />
              </div>
              <p className="text-sm font-normal leading-[1.55em] text-[#D9D0DF]">
                Release identifier, effective date and current<br className="hidden sm:inline" />
                source context are unavailable.
              </p>
            </div>

            {/* Panel 2: Currentness rules */}
            <div className="w-full lg:flex-1 rounded-2xl border border-white/15 bg-[#301153]/80 p-7 flex flex-col gap-4 shadow-xs">
              {c.currentnessRules.map((rule) => (
                <p
                  key={rule}
                  className="text-base font-normal leading-[1.55em] text-[#D9D0DF]"
                >
                  {rule}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Action Button */}
        <Reveal delay={0.1}>
          <div className="pt-2">
            <PrimaryPillButton href={c.action.href} showIcon>
              {c.action.label}
            </PrimaryPillButton>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
