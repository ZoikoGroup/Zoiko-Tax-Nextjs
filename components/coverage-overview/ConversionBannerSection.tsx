"use client";

import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function ConversionBannerSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#21053E] py-20 lg:py-24 text-center">
      {/* Background Image from Figma */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/coverage-overview/global-operations-bg.png"
          alt="Global network operations and telecommunications control center"
          fill
          className="object-cover"
        />
        {/* Dark Plum Overlay */}
        <div className="absolute inset-0 bg-[#160126]/65" />
      </div>

      <div className="relative mx-auto w-full max-w-[1040px] px-4 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center space-y-6">
            {/* Eyebrow */}
            <span className="inline-block text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#F4A261]">
              INSPECT BEFORE THE CONVERSATION
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-white max-w-[960px] font-['Inter',sans-serif]">
              Inspect exact scope before the sales conversation.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-[1.55] text-[#E2D8E9] max-w-[840px]">
              Public Coverage facts are not gated behind a lead form. Review the current capability state, governed scope, pack and release context first—then bring the precise questions to ZoikoTax.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
              <PrimaryButton href="#demo">Book a Demo</PrimaryButton>
              <SecondaryButton href="/coverage/packs">
                Country & Regulatory Packs
              </SecondaryButton>
              <SecondaryButton href="/coverage/status">
                Status & Releases
              </SecondaryButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
