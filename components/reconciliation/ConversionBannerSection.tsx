"use client";

import React from "react";
import Image from "next/image";
import { CONVERSION_DATA } from "./reconciliation-data";
import { SectionContainer, PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function ConversionBannerSection() {
  return (
    <SectionContainer className="bg-[#100031] text-white overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-30"
        aria-hidden="true"
      >
        <Image
          src="/reconciliation/conversion-bg.png"
          alt="Fiscal compliance conversion background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <Reveal>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-[#F4A261] block">
            {CONVERSION_DATA.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.04}>
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold leading-[1.12] tracking-tight text-white font-['Inter',sans-serif]">
            {CONVERSION_DATA.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-base sm:text-lg text-[#D9D0DF] leading-relaxed max-w-2xl mx-auto">
            {CONVERSION_DATA.description}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            {CONVERSION_DATA.buttons.map((b) =>
              b.primary ? (
                <PrimaryButton key={b.label} href={b.href}>
                  {b.label}
                </PrimaryButton>
              ) : (
                <SecondaryButton key={b.label} href={b.href} dark>
                  {b.label}
                </SecondaryButton>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="text-xs sm:text-[13px] text-[#D9D0DF]/80 pt-2">
            {CONVERSION_DATA.note}
          </p>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
