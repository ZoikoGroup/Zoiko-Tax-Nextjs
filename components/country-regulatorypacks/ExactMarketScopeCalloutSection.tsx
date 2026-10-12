"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function ExactMarketScopeCalloutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1D033B] py-16 sm:py-20 lg:py-[88px] px-6 sm:px-12 lg:px-20">
      {/* Background Photograph at 0.25 opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/country-regulatorypacks/telecom-scope-bg.png"
          alt=""
          fill
          unoptimized
          sizes="100vw"
          className="object-cover opacity-25"
        />
        {/* Institutional Tint: rgba(29, 3, 59, 0.6) */}
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.6)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] z-10 flex flex-col items-center text-center gap-6 sm:gap-8">
        <Reveal>
          <div className="flex flex-col items-center gap-6 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-white font-['Inter',sans-serif]">
              Need exact scope for a market?
            </h2>

            <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-[1.5] text-[#D9D0DF] font-['Inter',sans-serif] whitespace-pre-line">
              Confirm the market, capability and contractual implementation scope.{"\n"}
              Public coverage truth remains available without booking a demo.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <PrimaryButton href="/about-us">
                Book a Demo
              </PrimaryButton>

              <Link
                href="/coverage-overview"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-white px-6 text-sm font-semibold text-[#18141B] shadow-sm transition hover:bg-[#FAF8FA] active:scale-[0.99] font-['Inter',sans-serif]"
              >
                View Current Coverage
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
