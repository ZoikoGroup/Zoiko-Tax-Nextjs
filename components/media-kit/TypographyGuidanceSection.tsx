"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, Reveal, StatusPill, UnavailableButton } from "./shared";

export default function TypographyGuidanceSection() {
  return (
    <SectionContainer id="typography-guidance" className="border-b border-[#D8CEDD]">
      <Reveal>
        <SectionHeader
          eyebrow="Typography guidance"
          title="A clear hierarchy. A consistent voice."
          description="Inter and Roboto Mono are observed in the homepage reference. This illustration is not an approved font specification or a font distribution service."
        />
      </Reveal>

      {/* Type Guidance 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Reference Type Specimen Box (8 cols) */}
        <Reveal delay={0.05} className="lg:col-span-7 xl:col-span-8">
          <div className="h-full rounded-[26px] bg-white border border-[#D8CEDD] p-7 sm:p-9 space-y-7 shadow-xs">
            <StatusPill text="REFERENCE · APPROVAL REQUIRED" />

            {/* Heading Specimen */}
            <div className="space-y-2 border-b border-[#D8CEDD]/60 pb-6">
              <span className="block text-xs font-mono font-medium tracking-wider uppercase text-[#665F69]">
                INTER / EDITORIAL HEADING
              </span>
              <p className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] text-[#18141B] font-['Inter',sans-serif]">
                Clarity in every detail.
              </p>
            </div>

            {/* Body Specimen */}
            <div className="space-y-2 border-b border-[#D8CEDD]/60 pb-6">
              <span className="block text-xs font-mono font-medium tracking-wider uppercase text-[#665F69]">
                INTER / SUPPORTING COPY
              </span>
              <p className="text-lg sm:text-[20px] font-normal leading-[1.5] text-[#665F69]">
                Use readable supporting copy, spacious layouts and explicit labels to keep the source and next step clear.
              </p>
            </div>

            {/* Metadata Specimen */}
            <div className="space-y-2">
              <span className="block text-xs font-mono font-medium tracking-wider uppercase text-[#665F69]">
                ROBOTO MONO / METADATA
              </span>
              <p className="text-sm sm:text-base font-mono font-normal tracking-wide text-[#301153]">
                VERSION: SOURCE REQUIRED · STATUS: UNAVAILABLE
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right: Guidance Card (4-5 cols) */}
        <Reveal delay={0.1} className="lg:col-span-5 xl:col-span-4">
          <div className="h-full rounded-2xl bg-white border border-[#D8CEDD] p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#BF6735] hover:shadow-xs transition-all duration-200">
            <div className="space-y-4">
              <div className="w-6 h-6 relative shrink-0">
                <Image
                  src="/media-kit/icons/type.svg"
                  alt="Typography icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                Font files are not included
              </h3>

              <p className="text-sm sm:text-base leading-[1.6] text-[#665F69]">
                Obtain fonts through their legitimate distributor and follow the applicable licence. Observing a font on this page does not grant redistribution, embedding or other usage rights.
              </p>

              <p className="text-xs sm:text-sm leading-[1.6] text-[#665F69]">
                Approved type specifications, weights and usage rules require the governed brand source.
              </p>
            </div>

            <div className="pt-2">
              <UnavailableButton label="No font downloads" />
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
