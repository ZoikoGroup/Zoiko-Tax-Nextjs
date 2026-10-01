"use client";

import React from "react";
import { SectionHeader, PrimaryButton, DarkGhostButton } from "./shared";

export default function ConversionBandSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#120327]">
      {/* Full-bleed artwork exported from Figma (public/bulk-batch) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/bulk-batch/Documentation continuation.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-10 lg:px-20 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-7">
          <div className="flex flex-col items-center gap-3.5 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#D97637] font-['Inter',sans-serif]">
              CONTINUE WITH CONFIDENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.15] font-bold text-white font-['Inter',sans-serif]">
              Take the next step through governed documentation.
            </h2>
            <p className="max-w-[1080px] text-base leading-6 text-[#D9D0DF] font-['Inter',sans-serif]">
              <span className="lg:whitespace-nowrap">Read the versioned contracts and integration guidance first. Exact contracts, limits and access remain separately governed. For exact customer</span><br className="hidden lg:inline" />
              <span>scope, continue to qualified engagement—without sending sensitive datasets.</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton href="/developers/api/">Read API Reference</PrimaryButton>
            <DarkGhostButton href="/developers/integration-guides/">
              Explore Integration Guides
            </DarkGhostButton>
            <DarkGhostButton href="/demo/">Book a Demo</DarkGhostButton>
          </div>
        </div>
      </div>
    </section>
  );
}
