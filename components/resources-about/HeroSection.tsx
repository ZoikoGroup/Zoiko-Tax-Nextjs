"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, PrimaryButton, SecondaryButton } from "./shared";
import { heroData } from "./types";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF3FF] border-b border-[#D8CEDD] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
      {/* Background Hero Image with exact Figma gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/resources-about/hero-bg.png"
          alt="Telecom infrastructure background"
          fill
          priority
          className="object-cover object-right"
        />
        {/* Figma Linear Gradient Fill: 90deg, rgba(247, 243, 237, 0.97) 0%, rgba(234, 223, 240, 0.85) 54%, rgba(234, 223, 240, 0.1) 100% */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(247,243,237,0.97)_0%,_rgba(234,223,240,0.85)_54%,_rgba(234,223,240,0.1)_100%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <Reveal>
          <div className="max-w-[760px] space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
                {heroData.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-bold leading-[1.04] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
                {heroData.headline}
              </h1>
            </div>

            {/* Hero Introduction */}
            <div>
              <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-[1.5] text-[#535055]">
                {heroData.introduction}
              </p>
            </div>

            {/* Integration subtext */}
            <div>
              <p className="text-sm sm:text-base text-[#18141B] leading-[1.55]">
                {heroData.subtext}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <PrimaryButton href={heroData.primaryCta.href}>
                {heroData.primaryCta.label}
              </PrimaryButton>
              <SecondaryButton href={heroData.secondaryCta.href}>
                {heroData.secondaryCta.label}
              </SecondaryButton>
            </div>

            {/* Trust route link */}
            <div className="pt-2 flex items-center">
              <Link
                href={heroData.trustLink.href}
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#A64B25] hover:text-[#843719] transition-colors"
              >
                <span className="group-hover:underline underline-offset-4">
                  {heroData.trustLink.label}
                </span>
                <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Coverage disclaimer note */}
            <div className="pt-2 max-w-[670px]">
              <p className="text-[13px] sm:text-[14px] font-medium leading-[1.5] text-[#18141B]/80">
                {heroData.coverageNote}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
