"use client";

import React from "react";
import Image from "next/image";
import { DISCUSSION_DATA } from "./united-kingdom-data";
import { PrimaryPillButton, DarkPillButton, Reveal } from "./shared";

export default function CapabilityDiscussionSection() {
  const d = DISCUSSION_DATA;

  return (
    <section className="relative w-full bg-[#1D033B] overflow-hidden py-16 sm:py-20 lg:py-[88px]">
      {/* Background Photograph and Exact Linear Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/united-kingdom/scenario-discussion-bg.png"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(29, 3, 59, 0.94) 0%, rgba(29, 3, 59, 0.83) 45%, rgba(29, 3, 59, 0.57) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[160px] flex flex-col items-center text-center gap-8 text-white">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-3.5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F4A261]">
              {d.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-bold leading-[1.08em] tracking-tight text-white max-w-[900px]">
              {d.title}
            </h2>
            <p className="max-w-[980px] text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5em] text-[#D9D0DF]">
              {d.description}
            </p>
          </div>
        </Reveal>

        {/* 4 Contextual Actions */}
        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
            <PrimaryPillButton href={d.actions[0].href}>
              {d.actions[0].label}
            </PrimaryPillButton>
            <DarkPillButton href={d.actions[1].href}>
              {d.actions[1].label}
            </DarkPillButton>
            <DarkPillButton href={d.actions[2].href}>
              {d.actions[2].label}
            </DarkPillButton>
            <DarkPillButton href={d.actions[3].href}>
              {d.actions[3].label}
            </DarkPillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
