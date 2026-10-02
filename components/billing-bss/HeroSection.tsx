"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HERO_DATA } from "./billing-bss-data";
import { PrimaryButton, SecondaryButton, AuthorityNotice, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/billing-bss/hero-bg.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,237,0.97)] via-[54%] via-[rgba(234,223,240,0.85)] to-[rgba(234,223,240,0.1)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-16 lg:py-[64px] flex flex-col gap-8 sm:gap-9">
        <div className="max-w-[730px] flex flex-col gap-5 sm:gap-6">
          <Reveal>
            <span className="inline-block text-xs sm:text-[13px] font-bold text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold leading-[1.02] tracking-tight text-[#18141B]">
              {HERO_DATA.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base sm:text-lg lg:text-[20px] leading-[1.55] text-[#665F69]">
              {HERO_DATA.description}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center gap-3">
              {HERO_DATA.actions.map((action) =>
                action.variant === "primary" ? (
                  <PrimaryButton key={action.label} href={action.href}>
                    <span className="inline-flex items-center gap-2">
                      {action.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </PrimaryButton>
                ) : (
                  <SecondaryButton key={action.label} href={action.href}>
                    <span className="inline-flex items-center gap-2">
                      {action.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </SecondaryButton>
                )
              )}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <span className="text-[15px] font-semibold text-[#D65A2C]">{HERO_DATA.sandboxLink}</span>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <AuthorityNotice title={HERO_DATA.notice.title} description={HERO_DATA.notice.description} />
        </Reveal>
      </div>
    </section>
  );
}
