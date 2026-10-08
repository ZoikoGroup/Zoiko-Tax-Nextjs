"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HERO_DATA, AUTHORITY_DATA } from "./telecom-tax-insights-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/telecom-tax-insights/hero-bg.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,237,0.97)] via-[54%] via-[rgba(234,223,240,0.85)] to-[rgba(234,223,240,0.1)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-10 sm:py-14 lg:py-16">
        <div className="max-w-[860px] flex flex-col gap-5 sm:gap-6">
          <Reveal>
            <span className="inline-block text-xs sm:text-sm font-bold uppercase text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold leading-[1.06] tracking-tight text-[#18141B]">
              {HERO_DATA.title}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base sm:text-lg lg:text-[20px] leading-[1.5] text-[#535055]">{HERO_DATA.description}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm leading-[1.6] text-[#665F69] max-w-[730px]">{HERO_DATA.standard}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center gap-3 py-1.5">
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
            <div className="flex flex-col gap-0.5">
              <span className="text-[15px] font-semibold text-[#BF6735]">{HERO_DATA.route.label}</span>
              <span className="text-xs text-[#665F69]">{HERO_DATA.route.path}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function AuthoritySection() {
  return (
    <section className="relative w-full bg-[#FAF3FF]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-8 sm:py-10 flex flex-col lg:flex-row gap-7">
        <Reveal className="w-full lg:w-[265px] shrink-0">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase text-[#F4A261]">{AUTHORITY_DATA.eyebrow}</span>
            <h2 className="text-xl sm:text-2xl leading-[1.25] text-[#18141B]">{AUTHORITY_DATA.title}</h2>
          </div>
        </Reveal>
        <Reveal delay={0.04} className="flex-1 min-w-0">
          <div className="flex flex-col gap-3.5">
            <p className="text-base leading-[1.55] text-[#18141B]">{AUTHORITY_DATA.body}</p>
            <div className="rounded-[10px] bg-white/60 p-3.5">
              <p className="text-sm leading-[1.6] text-[#665F69]">{AUTHORITY_DATA.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
