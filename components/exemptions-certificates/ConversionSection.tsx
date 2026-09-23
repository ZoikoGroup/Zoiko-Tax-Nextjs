"use client";

import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";
import { conversionData } from "./exemptions-data";

export default function ConversionSection() {
  return (
    <section className="relative overflow-hidden bg-[#1D033B] py-14 sm:py-20 lg:py-32 text-white">
      {/* Background Image overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.32]">
        <Image
          src="/exemptions-certificates/conversion-bg.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
              {conversionData.eyebrow}
            </span>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight text-white font-serif max-w-3xl break-words">
              {conversionData.title}
            </h2>

            <p className="text-xs sm:text-base md:text-lg leading-relaxed text-white/75 max-w-2xl">
              {conversionData.description}
            </p>

            {/* CTAs */}
            <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
              <PrimaryButton href={conversionData.primaryCta.href} className="w-full sm:w-auto">
                {conversionData.primaryCta.label}
              </PrimaryButton>
              <SecondaryButton
                href={conversionData.secondaryCta.href}
                className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                {conversionData.secondaryCta.label}
              </SecondaryButton>
            </div>

            {/* Sub-disclaimer */}
            <p className="mt-3 sm:mt-4 text-[11px] sm:text-xs text-white/60">
              {conversionData.disclaimer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
