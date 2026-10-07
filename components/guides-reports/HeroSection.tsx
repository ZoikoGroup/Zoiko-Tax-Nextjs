"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Info } from "lucide-react";
import { HERO_DATA, APPROVAL_NOTICE } from "./guides-reports-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/guides-reports/hero-bg.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,237,0.97)] via-[54%] via-[rgba(234,223,240,0.85)] to-[rgba(234,223,240,0.1)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-10 sm:py-14 lg:py-16 flex flex-col gap-6">
        <div className="max-w-[780px] flex flex-col gap-5 sm:gap-6">
          <Reveal>
            <span className="inline-block text-xs sm:text-sm font-bold text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold leading-[1.04] tracking-tight text-[#18141B]">
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
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </PrimaryButton>
              <SecondaryButton>
                <span className="inline-flex items-center gap-2">
                  {HERO_DATA.actions[1].label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </SecondaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <span className="inline-flex items-center gap-2 text-base font-semibold text-[#A64B22]">
              {HERO_DATA.contextualRoute}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-sm text-[#18141B] font-medium max-w-[720px]">{HERO_DATA.footnote}</p>
          </Reveal>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] pb-10 sm:pb-12">
        <Reveal>
          <div className="rounded-2xl bg-[#FAEEE6] p-5 sm:p-6 flex items-start gap-4">
            <Info className="h-[22px] w-[22px] shrink-0 text-[#A64B22]" aria-hidden="true" />
            <div className="flex flex-col gap-2">
              <p className="text-base text-[#18141B]">{APPROVAL_NOTICE.title}</p>
              <p className="text-sm leading-[1.65] text-[#665F69]">{APPROVAL_NOTICE.description}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
