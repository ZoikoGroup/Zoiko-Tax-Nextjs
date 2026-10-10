"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, Reveal, StatusPill, UnavailableButton } from "./shared";

export default function LogoLibrarySection() {
  return (
    <SectionContainer id="logo-library" hasPattern={true} className="border-b border-[#D8CEDD]">
      <Reveal>
        <SectionHeader
          eyebrow="Logo library"
          title="Start with the approved original."
          description="Primary, reversed and monochrome artwork are separate governed assets. A visual match alone does not establish the current version or permission."
        />
      </Reveal>

      {/* 3 Logo Variant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Primary Wordmark */}
        <Reveal delay={0.05}>
          <div className="h-full rounded-2xl bg-white border border-[#D8CEDD] overflow-hidden flex flex-col justify-between hover:border-[#BF6735] hover:shadow-xs transition-all duration-200">
            {/* Logo Preview Box */}
            <div className="w-full h-[210px] bg-[#FFFAFA] border-b border-[#D8CEDD] flex items-center justify-center p-6">
              <div className="relative w-[306px] h-[50px] max-w-full">
                <Image
                  src="/media-kit/zoikotax-logo.png"
                  alt="ZoikoTax Primary Wordmark"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Metadata and Details */}
            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                  Primary wordmark
                </h3>
                <StatusPill text="REFERENCE PREVIEW · NOT APPROVED DOWNLOAD" />
                <p className="text-sm leading-[1.6] text-[#665F69]">
                  Reference preview · approval required. Artwork is shown as it appears on the homepage; it is not certified current.
                </p>
                <p className="text-xs font-medium text-[#A9421F]">
                  Approval, version and rights are missing.
                </p>
              </div>

              <div className="pt-2">
                <UnavailableButton />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Card 2: Reversed Wordmark */}
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl bg-white border border-[#D8CEDD] overflow-hidden flex flex-col justify-between hover:border-[#BF6735] hover:shadow-xs transition-all duration-200">
            {/* Logo Preview Box - Dark Purple */}
            <div className="w-full h-[210px] bg-[#301153] border-b border-[#D8CEDD] flex flex-col items-center justify-center gap-3 p-6 text-center">
              <div className="w-6 h-6 relative opacity-70">
                <Image
                  src="/media-kit/icons/lock-keyhole.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 invert"
                />
              </div>
              <span className="text-sm font-medium text-[#D9D0DF]">
                Approved artwork not supplied
              </span>
            </div>

            {/* Metadata and Details */}
            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                  Reversed wordmark
                </h3>
                <StatusPill text="UNAVAILABLE · NOT SUPPLIED" />
                <p className="text-sm leading-[1.6] text-[#665F69]">
                  Approved artwork not supplied
                </p>
                <p className="text-xs font-medium text-[#A9421F]">
                  Approval, version and rights are missing.
                </p>
              </div>

              <div className="pt-2">
                <UnavailableButton />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Card 3: Monochrome Wordmark */}
        <Reveal delay={0.15}>
          <div className="h-full rounded-2xl bg-white border border-[#D8CEDD] overflow-hidden flex flex-col justify-between hover:border-[#BF6735] hover:shadow-xs transition-all duration-200">
            {/* Logo Preview Box - Light Purple */}
            <div className="w-full h-[210px] bg-[#FAF3FF] border-b border-[#D8CEDD] flex flex-col items-center justify-center gap-3 p-6 text-center">
              <div className="w-6 h-6 relative opacity-50">
                <Image
                  src="/media-kit/icons/lock-keyhole.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <span className="text-sm font-medium text-[#665F69]">
                Approved artwork not supplied
              </span>
            </div>

            {/* Metadata and Details */}
            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                  Monochrome wordmark
                </h3>
                <StatusPill text="UNAVAILABLE · NOT SUPPLIED" />
                <p className="text-sm leading-[1.6] text-[#665F69]">
                  Approved artwork not supplied
                </p>
                <p className="text-xs font-medium text-[#A9421F]">
                  Approval, version and rights are missing.
                </p>
              </div>

              <div className="pt-2">
                <UnavailableButton />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom Explanatory Notice */}
      <div className="mt-8">
        <p className="text-sm leading-[1.6] text-[#665F69]">
          No downloadable formats have been supplied. Do not trace this preview, create alternate artwork or assume SVG, EPS or PNG files are available.
        </p>
      </div>
    </SectionContainer>
  );
}
