"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { HERO_DATA } from "./social-media-data";
import { PrimaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/social-media/hero-bg.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,237,0.97)] via-[54%] via-[rgba(234,223,240,0.85)] to-[rgba(234,223,240,0.1)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-12 sm:py-16 lg:py-[88px]">
        <div className="max-w-[820px] flex flex-col gap-6">
          <Reveal>
            <span className="inline-block text-sm font-bold text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold leading-[1.02] tracking-tight text-[#18141B]">
              {HERO_DATA.title}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-[1.5] text-[#535055]">{HERO_DATA.description}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-start gap-3">
              <PrimaryButton>
                <span className="inline-flex items-center gap-2">
                  {HERO_DATA.primaryAction}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </PrimaryButton>
              {HERO_DATA.unavailableActions.map((a) => (
                <div key={a.label} className="flex flex-col gap-2">
                  <span className="inline-flex items-center gap-2.5 rounded-full border border-[#D8CEDD] bg-[#F3EEF7] px-[22px] h-12 text-sm font-semibold text-[#665F69]">
                    {a.label}
                    <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs text-[#665F69]">{a.note}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-[15px] font-medium leading-[1.55] text-[#18141B] max-w-[720px]">{HERO_DATA.disclaimer}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-sm font-medium text-[#18141B]">{HERO_DATA.footnote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
