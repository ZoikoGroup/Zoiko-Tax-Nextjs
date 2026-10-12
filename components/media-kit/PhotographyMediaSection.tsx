"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, Reveal, StatusPill, UnavailableButton } from "./shared";

export default function PhotographyMediaSection() {
  return (
    <SectionContainer id="photography-media" hasPattern={true} className="border-b border-[#D8CEDD]">
      <Reveal>
        <SectionHeader
          eyebrow="Photography / media"
          title="An image is more than a file."
          description="Company, product and event media may be published only with approved rights, attribution and usage metadata."
        />
      </Reveal>

      {/* Media Context 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left: Reference Imagery */}
        <Reveal delay={0.05} className="lg:col-span-6">
          <div className="space-y-4">
            <div className="relative w-full h-[320px] sm:h-[356px] rounded-[26px] overflow-hidden border border-[#D8CEDD] shadow-2xs">
              <Image
                src="/media-kit/homepage-resource-illustration.png"
                alt="Homepage resource illustration reference"
                fill
                className="object-cover object-center"
              />
            </div>
            <p className="text-xs sm:text-sm leading-[1.5] text-[#665F69]">
              Reference illustration from Resources navigation. Visual style context only—not an official company photograph or a download-ready media asset.
            </p>
          </div>
        </Reveal>

        {/* Right: Media Availability & Context Requirements */}
        <Reveal delay={0.1} className="lg:col-span-6">
          <div className="space-y-6">
            <StatusPill text="UNAVAILABLE · RIGHTS NOT SUPPLIED" />

            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-[1.1] text-[#18141B] font-['Inter',sans-serif]">
              No approved media library has been supplied.
            </h3>

            <p className="text-base sm:text-lg leading-[1.6] text-[#665F69]">
              Do not extract homepage imagery for press or partner use. A visual reference does not establish the copyright owner, permission or official subject.
            </p>

            {/* Required Context Checklist Card */}
            <div className="rounded-2xl bg-white border border-[#D8CEDD] p-6 space-y-2.5 shadow-2xs">
              <span className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#301153]">
                BEFORE A MEDIA FILE CAN BE RELEASED
              </span>
              <p className="text-sm leading-[1.6] text-[#665F69]">
                Rights / owner · required credit · approved use · expiry · territory · accessible alt text · current version · last review
              </p>
            </div>

            <div>
              <UnavailableButton label="Media download unavailable" />
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
