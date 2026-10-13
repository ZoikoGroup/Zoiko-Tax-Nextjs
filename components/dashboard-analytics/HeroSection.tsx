"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HERO_DATA } from "./dashboard-analytics-data";
import { PrimaryButton, Reveal, AuthorityNoticeBox } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/dashboard-analytics/hero-bg.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,237,0.97)] via-[54%] via-[rgba(234,223,240,0.85)] to-[rgba(234,223,240,0.1)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-8 sm:py-12 lg:pt-8 lg:pb-[88px]">
        <div className="max-w-[704px] flex flex-col gap-6">
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

          <Reveal delay={0.1}>
            <AuthorityNoticeBox>{HERO_DATA.notice}</AuthorityNoticeBox>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center gap-4">
              <PrimaryButton>
                <span className="inline-flex items-center gap-2">
                  {HERO_DATA.actions[0].label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </PrimaryButton>
              <span className="text-[15px] text-[#301153]">{HERO_DATA.secondaryLink}</span>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex flex-col gap-1.5">
              <span className="text-base text-[#D65A2C]">{HERO_DATA.destination.title}</span>
              <span className="text-[13px] leading-[1.4] text-[#665F69]">{HERO_DATA.destination.note}</span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-sm leading-[1.55] text-[#665F69]">{HERO_DATA.footnote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
