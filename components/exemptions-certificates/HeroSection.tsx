"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./shared";
import { heroData } from "./exemptions-data";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(263deg,rgba(255,238,228,1)_22%,rgba(250,243,255,1)_95%)] py-12 sm:py-16 lg:py-[100px]">
      {/* Background Image overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] sm:opacity-[0.28]">
        <Image
          src="/exemptions-certificates/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-right"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-20">
        <div className="max-w-[845px]">
          <Reveal>
            <div className="flex flex-col gap-5 sm:gap-7">
              {/* Eyebrow */}
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.06em] text-[#D65A2C]">
                {heroData.eyebrow}
              </span>

              {/* Headline */}
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.1] sm:leading-[1.05] tracking-tight text-[#18141B] font-['Tiro_Gurmukhi',serif] break-words">
                Govern exemption evidence before
                <br className="hidden sm:inline" /> it changes the tax outcome.
              </h1>

              {/* Subtitle Description */}
              <p className="text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[1.5] text-[#535055] max-w-[760px]">
                {heroData.subtitle}
              </p>

              {/* Callout Line - Plain text with lightbulb icon */}
              <div className="flex items-start gap-2.5 pt-1 text-xs sm:text-sm font-medium text-[#18141B] leading-relaxed max-w-[780px]">
                <span className="text-base leading-none select-none shrink-0 mt-0.5">💡</span>
                <span>{heroData.callout}</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2">
                <Link
                  href={heroData.primaryCta.href}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#BF6735] px-7 py-3 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] text-center"
                >
                  {heroData.primaryCta.label}
                </Link>

                <Link
                  href={heroData.secondaryCta.href}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-[#D8CEDD] bg-white px-6 py-3 text-sm font-medium text-[#18141B] hover:bg-[#FAF8FA] hover:border-[#BF6735]/40 transition-all duration-200 active:scale-[0.98] shadow-xs text-center"
                >
                  {heroData.secondaryCta.label}
                </Link>
              </div>

              {/* Hero Disclaimers */}
              <div className="flex flex-col gap-1 pt-3 text-[11px] leading-[1.4] text-[#665F69] opacity-80 break-words">
                {heroData.disclosures.map((disclosure, index) => (
                  <span key={index}>{disclosure}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
