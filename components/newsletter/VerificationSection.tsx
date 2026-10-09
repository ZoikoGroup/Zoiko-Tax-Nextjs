"use client";

import React from "react";
import Image from "next/image";
import { VERIFICATION_DATA } from "./newsletter-data";
import { Reveal } from "./shared";

export default function VerificationSection() {
  const {
    eyebrow,
    title,
    description,
    backgroundImage,
    leftColumn,
    rightCards,
    bottomBanner,
  } = VERIFICATION_DATA;

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#100122] py-16 sm:py-20 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20 pointer-events-none select-none" aria-hidden="true">
        <Image
          src={backgroundImage}
          alt="Verification process"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark plum tint overlay preserving photo visibility */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#120224]/92 via-[#190432]/85 to-[#100122]/94 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#F4A261]">
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.15] tracking-tight text-white">
              {title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#D8CEDD] max-w-3xl leading-relaxed mt-1">
              {description}
            </p>
          </Reveal>
        </div>

        {/* Two-Column Layout */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Clear Text */}
          <Reveal delay={0.1}>
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {leftColumn.title}
              </h3>

              <p className="text-xs sm:text-[13px] text-[#D8CEDD] leading-relaxed mt-3 max-w-md">
                {leftColumn.description}
              </p>

              <div className="mt-5">
                <span className="bg-white/10 text-[#C4B7D4] border border-white/20 text-[10.5px] sm:text-[11px] font-medium px-2.5 py-1 rounded-md inline-block">
                  {leftColumn.badge}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: 2 State Cards */}
          <div className="flex flex-col gap-4">
            {rightCards.map((card, idx) => (
              <Reveal key={idx} delay={0.12 * (idx + 1)}>
                <div className="bg-[#1C0638]/90 border border-white/15 rounded-2xl p-5 sm:p-6 backdrop-blur-xs shadow-lg">
                  <span className="text-[10px] font-bold text-[#F4A261] tracking-wider uppercase block">
                    {card.tag}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight mt-1.5">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#C4B7D4] leading-relaxed mt-2">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom Banner: Already Subscribed */}
        <Reveal delay={0.2}>
          <div className="mt-8 sm:mt-10 rounded-2xl bg-[#230944]/90 border border-white/15 p-6 sm:p-7 backdrop-blur-xs flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 shadow-xl">
            <div className="shrink-0">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {bottomBanner.title}
              </h3>
              <span className="text-[10px] font-bold text-[#F4A261] tracking-wider uppercase block mt-1">
                {bottomBanner.tag}
              </span>
            </div>

            <p className="text-xs sm:text-[13px] text-[#D8CEDD] leading-relaxed max-w-2xl">
              {bottomBanner.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
