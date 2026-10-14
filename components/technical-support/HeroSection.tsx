"use client";

import React from "react";
import Image from "next/image";
import { HERO_DATA } from "./technical-support-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[720px] lg:min-h-[779px] flex items-center">
      {/* Background Datacenter Image + Gradient Overlay */}
      <div className="absolute inset-0 select-none pointer-events-none" aria-hidden="true">
        <picture>
          <source srcSet="/technical-support/hero-datacenter-bg.webp" type="image/webp" />
          <Image
            src="/technical-support/hero-datacenter-bg.png"
            alt="Technical infrastructure background"
            fill
            priority
            className="object-cover object-right"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,237,0.97)] via-[54%] via-[rgba(234,223,240,0.85)] to-[rgba(234,223,240,0.10)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-16 sm:py-20 lg:py-[80px]">
        <div className="max-w-[896px] flex flex-col">
          <Reveal>
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D97637] mb-3">
              {HERO_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold leading-[1.05] tracking-tight text-[#1E1B4B] mb-5">
              {HERO_DATA.title}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-[1.625] text-[#374151] max-w-[768px] mb-8">
              {HERO_DATA.description}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <PrimaryButton href={HERO_DATA.primaryAction.href}>
                {HERO_DATA.primaryAction.label}
              </PrimaryButton>
              <SecondaryButton href={HERO_DATA.secondaryAction.href}>
                {HERO_DATA.secondaryAction.label}
              </SecondaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="max-w-[768px] border-t border-[#E5E7EB] pt-6 flex flex-col gap-2">
              <p className="text-sm font-normal leading-5 text-[#4B5563]">
                {HERO_DATA.disclaimer}
              </p>
              <p className="text-sm italic font-normal leading-5 text-[#6B7280]">
                {HERO_DATA.footnote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
