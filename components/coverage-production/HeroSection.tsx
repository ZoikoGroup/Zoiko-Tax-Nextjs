"use client";

import React from "react";
import Image from "next/image";
import { Reveal, PrimaryButton, SecondaryButton } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[640px] lg:min-h-[770px] flex items-center">
      {/* Background Hero Surface Image */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <picture>
          <source
            srcSet="/coverage-production/hero-surface.webp"
            type="image/webp"
          />
          <Image
            src="/coverage-production/hero-surface.png"
            alt="ZoikoTax Coverage Architecture Surface"
            fill
            priority
            className="object-cover object-center lg:object-right"
            sizes="100vw"
          />
        </picture>

        {/* Exact Figma Gradient Linear Overlay (1302:20555) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(247, 243, 237, 0.97) 0%, rgba(234, 223, 240, 0.85) 54%, rgba(234, 223, 240, 0.10) 100%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 py-20 lg:py-24 z-10">
        <div className="max-w-[700px]">
          <Reveal>
            <div className="flex flex-col gap-6">
              {/* Eyebrow */}
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.06em] text-[#D65A2C] font-['Inter',sans-serif]">
                COVERAGE DOCTRINE · PRODUCTION
              </span>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold leading-[1.08] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
                What Production means
                <br className="hidden sm:inline" /> for ZoikoTax coverage.
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.55] text-[#665F69] font-['Inter',sans-serif]">
                Production identifies a capability approved for a stated scope.
                Confirm the relevant market, capability, conditions and latest
                status in the current coverage record before relying on its
                availability.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <PrimaryButton href="/coverage-overview">
                  View Current Coverage
                </PrimaryButton>
                <SecondaryButton href="#demo">Book a Demo</SecondaryButton>
              </div>

              {/* Boundary notice */}
              <p className="text-sm font-normal leading-relaxed text-[#18141B] pt-2 font-['Inter',sans-serif]">
                Global architecture is not universal live coverage. This page
                explains a label; it does not confirm a deployment.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
