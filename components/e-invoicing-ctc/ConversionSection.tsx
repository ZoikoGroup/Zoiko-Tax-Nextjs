"use client";

import React from "react";
import Image from "next/image";
import { CONVERSION_DATA } from "./e-invoicing-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function ConversionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1D033B] py-20 sm:py-24 text-white text-center">
      {/* Background banner image overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-34">
        <Image
          src="/e-invoicing-ctc/conversion-bg.png"
          alt="Conversion background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        <Reveal>
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#F4A261]">
            {CONVERSION_DATA.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.12] tracking-tight text-[#FFF8F5]">
            {CONVERSION_DATA.title}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-base sm:text-xl text-[#D8CEDD] leading-relaxed max-w-2xl mx-auto">
            {CONVERSION_DATA.description}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <PrimaryButton href="/contact">Book a Demo</PrimaryButton>
            <SecondaryButton href="#coverage">View Current Coverage</SecondaryButton>
            <SecondaryButton href="#developers">Explore Developer Integrations</SecondaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
