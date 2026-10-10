"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function ConversionBannerSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#21053E] py-20 lg:py-24 text-center">
      {/* Background Image & Purple Blend Overlay */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <picture>
          <source
            srcSet="/coverage-production/telecom-infrastructure-conversion.webp"
            type="image/webp"
          />
          <Image
            src="/coverage-production/telecom-infrastructure-conversion.png"
            alt="Telecom infrastructure deployment operations"
            fill
            className="object-cover"
          />
        </picture>
        {/* Institutional Purple Blend Overlay */}
        <div className="absolute inset-0 bg-[#160126]/75" />
      </div>

      <div className="relative mx-auto w-full max-w-[1120px] px-6 sm:px-12 z-10">
        <Reveal>
          <div className="flex flex-col items-center space-y-6">
            {/* Eyebrow */}
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.06em] text-[#F4A261] font-['Inter',sans-serif]">
              COVERAGE BEFORE COMMITMENT
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-white max-w-[1000px] font-['Inter',sans-serif]">
              Check the scope before you plan deployment.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-[1.55] text-[#D9D0DF] max-w-[880px] font-['Inter',sans-serif]">
              Verify the current capability, applicable scope and approved
              conditions. Discuss your specific requirements without assuming
              availability.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <PrimaryButton href="/coverage-overview">
                View Current Coverage
              </PrimaryButton>
              <SecondaryButton href="#demo" dark>
                Book a Demo
              </SecondaryButton>
            </div>

            {/* Contextual Destinations */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
              <div className="flex flex-col items-center gap-1">
                <Link
                  href="/developer-overview"
                  className="text-sm font-semibold text-[#D9D0DF] hover:text-white transition-colors font-['Inter',sans-serif]"
                >
                  Explore Developers
                </Link>
                <span className="text-xs font-normal text-[#D9D0DF]/70 font-['Inter',sans-serif]">
                  Information pending
                </span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <Link
                  href="/trust-center"
                  className="text-sm font-semibold text-[#D9D0DF] hover:text-white transition-colors font-['Inter',sans-serif]"
                >
                  Visit Trust Center
                </Link>
                <span className="text-xs font-normal text-[#D9D0DF]/70 font-['Inter',sans-serif]">
                  Information pending
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
