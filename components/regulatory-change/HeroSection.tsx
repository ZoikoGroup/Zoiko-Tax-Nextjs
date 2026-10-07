"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HERO_DATA, AUTHORITY_NOTICE } from "./regulatory-change-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/regulatory-change/hero-bg.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,237,0.97)] via-[54%] via-[rgba(234,223,240,0.85)] to-[rgba(234,223,240,0.1)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-10 sm:py-14 lg:py-16 flex flex-col gap-6">
        <div className="max-w-[775px] flex flex-col gap-5 sm:gap-6">
          <Reveal>
            <span className="inline-block text-xs sm:text-sm font-bold text-[#B65326]">{HERO_DATA.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-bold leading-[1.05] tracking-tight text-[#18141B]">
              {HERO_DATA.title}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base sm:text-lg lg:text-[20px] leading-[1.5] text-[#665F69]">{HERO_DATA.description}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center gap-3 py-2">
              <PrimaryButton>
                <span className="inline-flex items-center gap-2">
                  {HERO_DATA.actions[0].label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </PrimaryButton>
              <SecondaryButton>
                <span className="inline-flex items-center gap-2">
                  {HERO_DATA.actions[1].label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </SecondaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <span className="text-sm font-semibold text-[#B65326]">{HERO_DATA.contextualRoute}</span>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-sm text-[#665F69] max-w-[720px]">{HERO_DATA.footnote}</p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="hidden sm:flex flex-col gap-0.5 text-xs text-[#301153] max-w-[340px] absolute bottom-10 right-4 sm:bottom-14 sm:right-8 lg:bottom-16 lg:right-[80px] text-right">
            <span>{HERO_DATA.caption[0]}</span>
            <span>{HERO_DATA.caption[1]}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AuthorityNoticeSection() {
  return (
    <section className="relative w-full bg-[#FAF3FF]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-8 sm:py-10 flex flex-col gap-4">
        <Reveal>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="text-xs font-bold text-[#F4A261]">{AUTHORITY_NOTICE.eyebrow}</span>
            <span className="inline-flex items-center rounded-full bg-[#4D2E65] border border-[#72518A] px-3 py-1.5 text-xs font-semibold text-white">
              {AUTHORITY_NOTICE.badge}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.04}>
          <p className="text-base leading-[1.65] text-[#18141B]">{AUTHORITY_NOTICE.body}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="text-sm leading-[1.6] text-[#665F69]">{AUTHORITY_NOTICE.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}
