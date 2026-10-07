"use client";

import React from "react";
import Image from "next/image";
import { Search, Info } from "lucide-react";
import { HERO_DATA, CANONICAL_NOTICE } from "./glossary-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/glossary/hero-bg.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,237,0.97)] via-[54%] via-[rgba(234,223,240,0.85)] to-[rgba(234,223,240,0.1)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-10 sm:py-14 lg:py-16 flex flex-col gap-6">
        <div className="max-w-[830px] flex flex-col gap-5 sm:gap-6">
          <Reveal>
            <span className="inline-block text-xs sm:text-sm font-bold text-[#AC4F25]">{HERO_DATA.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold leading-[1.02] tracking-tight text-[#18141B]">
              {HERO_DATA.title}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base sm:text-lg lg:text-[20px] leading-[1.5] text-[#535055] font-medium">{HERO_DATA.description}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center gap-3 py-2">
              <PrimaryButton>
                <span className="inline-flex items-center gap-2">
                  <Search className="h-[18px] w-[18px]" aria-hidden="true" />
                  {HERO_DATA.actions[0].label}
                </span>
              </PrimaryButton>
              <SecondaryButton>{HERO_DATA.actions[1].label}</SecondaryButton>
              <span className="text-sm font-semibold text-[#AC4F25]">{HERO_DATA.exploreLink}</span>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-sm text-[#18141B] font-medium max-w-[760px]">{HERO_DATA.footnote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CanonicalNoticeSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-8 flex flex-col gap-5">
        <Reveal>
          <p className="text-base leading-[1.6] text-[#665F69]">{CANONICAL_NOTICE.body}</p>
        </Reveal>
        <Reveal delay={0.04}>
          <div className="rounded-xl bg-[#FFF2E9] border border-[#E4C4AD] p-5 flex items-start gap-4">
            <Info className="h-[22px] w-[22px] shrink-0 text-[#AC4F25]" aria-hidden="true" />
            <div className="flex flex-col gap-1.5">
              <p className="text-[15px] font-bold text-[#18141B]">{CANONICAL_NOTICE.title}</p>
              <p className="text-sm leading-[1.55] text-[#665F69]">{CANONICAL_NOTICE.description}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
