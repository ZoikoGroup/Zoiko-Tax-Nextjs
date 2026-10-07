"use client";

import React from "react";
import Image from "next/image";
import { Search, ArrowUpRight } from "lucide-react";
import { HERO_DATA } from "./resources-faq-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/resources-faq/hero-bg.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,237,0.97)] via-[54%] via-[rgba(234,223,240,0.85)] to-[rgba(234,223,240,0.1)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-10 sm:py-14 lg:py-16 flex flex-col gap-8">
        <div className="max-w-[760px] flex flex-col gap-5 sm:gap-6">
          <Reveal>
            <span className="inline-block text-xs sm:text-sm font-bold text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold leading-[1.02] tracking-tight text-[#18141B]">
              {HERO_DATA.title}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base sm:text-lg lg:text-[20px] leading-[1.5] text-[#18141B]">{HERO_DATA.description}</p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="w-full max-w-[720px] rounded-full border border-[#D8CEDD] bg-white p-1.5 sm:p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="flex-1 flex items-center gap-2.5 px-4 py-2.5">
              <Search className="h-5 w-5 shrink-0 text-[#665F69]" aria-hidden="true" />
              <span className="text-sm sm:text-base text-[#665F69] truncate">{HERO_DATA.searchPlaceholder}</span>
            </div>
            <PrimaryButton className="shrink-0">
              <span className="inline-flex items-center gap-2">
                {HERO_DATA.searchCta}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </PrimaryButton>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="flex flex-wrap items-center gap-4">
            {HERO_DATA.routes.map((route) =>
              route.variant === "secondary" ? (
                <SecondaryButton key={route.label} href={route.href}>
                  <span className="inline-flex items-center gap-2">
                    {route.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </SecondaryButton>
              ) : (
                <a
                  key={route.label}
                  href={route.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#BF6735] hover:underline"
                >
                  {route.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
