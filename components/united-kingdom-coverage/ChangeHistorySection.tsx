"use client";

import React from "react";
import Image from "next/image";
import { CHANGE_HISTORY_DATA } from "./united-kingdom-data";
import {
  SectionContainer,
  SectionHeading,
  DarkPillButton,
  Reveal,
} from "./shared";

export default function ChangeHistorySection() {
  const c = CHANGE_HISTORY_DATA;

  return (
    <SectionContainer className="relative bg-[#1D033B] overflow-hidden">
      {/* Background image & exact linear gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/united-kingdom/change-history-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(29, 3, 59, 0.94) 0%, rgba(29, 3, 59, 0.83) 50%, rgba(29, 3, 59, 0.57) 100%)",
          }}
        />
      </div>

      <div className="relative flex flex-col gap-8 text-white">
        <Reveal>
          <SectionHeading
            eyebrow={c.eyebrow}
            title={c.title}
            description={c.description}
            dark
          />
        </Reveal>

        <Reveal delay={0.04}>
          <span className="text-sm font-normal text-[#F4A261]">
            {c.note}
          </span>
        </Reveal>

        {/* 6 Currentness Conditions Cards in 2 rows of 3 */}
        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.conditions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-[#301153]/90 backdrop-blur-xs p-6 flex flex-col gap-3 shadow-xs"
              >
                <h3 className="text-lg font-bold leading-[1.3em] text-white">
                  {item.title}
                </h3>
                <p className="text-[15px] font-normal leading-[1.6em] text-[#D9D0DF]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Action row */}
        <Reveal delay={0.12}>
          <div className="pt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="max-w-[820px] text-[15px] font-normal leading-[1.5em] text-[#D9D0DF]">
              {c.actionText}
            </p>
            <DarkPillButton href={c.actionHref} showIcon>
              {c.actionLabel}
            </DarkPillButton>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
