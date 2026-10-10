"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  const handleScrollToFinder = () => {
    const el = document.getElementById("pack-finder");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,_rgba(247,243,237,1)_0%,_rgba(234,223,240,1)_100%)] border-b border-[#D8CEDD] pt-16 sm:pt-20 lg:pt-[88px] pb-16 sm:pb-20 lg:pb-[88px]">
      {/* Hero background image with server technician infrastructure */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/country-regulatorypacks/hero-bg.png"
          alt="Data center operations technician and server rack infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 z-10">
        <Reveal>
          <div className="max-w-[760px] flex flex-col gap-6">
            {/* Eyebrow */}
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
                COUNTRY & REGULATORY PACKS
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold leading-[1.02] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
                Governed market packs.
                <br className="hidden sm:inline" />
                Capability-specific
                <br className="hidden sm:inline" />
                readiness.
              </h1>
            </div>

            {/* Introduction */}
            <div className="max-w-[700px]">
              <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-[1.55] text-[#535055] font-['Inter',sans-serif]">
                See how ZoikoTax organizes jurisdiction-specific fiscal content and activates supported capabilities market by market. A pack is not a blanket “country supported” claim: each capability retains its own readiness state and scope.
              </p>
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <PrimaryButton onClick={handleScrollToFinder}>
                Explore Packs
              </PrimaryButton>

              <SecondaryButton href="/coverage-overview">
                View Current Coverage
              </SecondaryButton>

              <Link
                href="/about-us"
                className="inline-flex h-12 items-center gap-2 px-4 text-sm font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors font-['Inter',sans-serif]"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Footnote */}
            <div className="pt-1">
              <p className="text-xs sm:text-sm font-medium text-[#18141B] font-['Inter',sans-serif]">
                Global architecture does not imply universal live support.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
