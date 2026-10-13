"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HERO_DATA } from "./united-states-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full overflow-hidden lg:h-[770px]">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/united-states/hero-bg.png" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,237,0.97)] via-[54%] via-[rgba(234,223,240,0.85)] to-[rgba(234,223,240,0.1)]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] h-full px-4 sm:px-8 lg:px-[80px] py-8 sm:py-12 lg:py-0 flex flex-col justify-center">
          <div className="max-w-[760px] flex flex-col gap-6">
            <Reveal>
              <span className="inline-block text-sm font-bold text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold leading-[1.02] tracking-tight text-[#18141B]">
                {HERO_DATA.title}
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-base sm:text-lg lg:text-[20px] leading-[1.55] text-[#665F69]">{HERO_DATA.description}</p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-3">
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
              <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#D65A2C]">
                {HERO_DATA.relatedLink}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-sm font-medium leading-[1.55] text-[#18141B]">{HERO_DATA.footnote}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#FAF3FF]">
        <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-8 lg:py-[104px] flex flex-col gap-4">
          <Reveal>
            <span className="text-sm font-bold text-[#D65A2C]">{HERO_DATA.answer.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{HERO_DATA.answer.title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{HERO_DATA.answer.lead}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-base leading-[1.55] text-[#18141B]">{HERO_DATA.answer.body}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
