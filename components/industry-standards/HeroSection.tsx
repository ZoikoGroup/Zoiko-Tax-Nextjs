"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HERO_DATA } from "./industry-standards-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/industry-standards/hero-bg.png" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,237,0.97)] via-[54%] via-[rgba(234,223,240,0.85)] to-[rgba(234,223,240,0.1)]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-12 sm:py-16 lg:py-[88px]">
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
              <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5] text-[#665F69]">{HERO_DATA.description}</p>
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
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-[#301153]">{HERO_DATA.destination.title}</span>
                  <span className="text-xs text-[#665F69]">{HERO_DATA.destination.note}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-sm leading-[1.55] text-[#665F69] max-w-[500px]">{HERO_DATA.footnote}</p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-8 lg:py-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
        <Reveal className="w-full lg:w-[310px] shrink-0">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{HERO_DATA.answer.eyebrow}</span>
            <h2 className="text-xl sm:text-2xl font-bold leading-[1.1] text-[#18141B]">{HERO_DATA.answer.title}</h2>
          </div>
        </Reveal>
        <Reveal className="flex-1" delay={0.04}>
          <div className="rounded-2xl bg-[#FBFBFB] p-6">
            <p className="text-base leading-[1.55] text-[#665F69]">{HERO_DATA.answer.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
