"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, ContextualLink, Reveal } from "./shared";
import { inquiryBoundaryData } from "./types";

export default function InquiryBoundarySection() {
  const { eyebrow, title, inquiryExplanation, contactLink, programBoundary } = inquiryBoundaryData;

  return (
    <SectionContainer className="relative overflow-hidden bg-[#FAF3FF] border-b border-[#D8CEDD]">
      {/* Pattern Background matching Figma asset 6f3d71f3... */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-40"
        aria-hidden="true"
      >
        <Image
          src="/resources-partners/pattern-bg.png"
          alt="Inquiry and program boundary pattern background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
            {/* General Inquiry Context */}
            <div className="flex-1 space-y-5">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
                {eyebrow}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
                {title}
              </h2>
              <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-[1.55] text-[#665F69] max-w-2xl">
                {inquiryExplanation}
              </p>
              <div className="pt-2">
                <ContextualLink label={contactLink.label} href={contactLink.href} />
              </div>
            </div>

            {/* Program Source Boundary Card (540px in Figma) */}
            <div className="w-full lg:w-[540px] shrink-0 rounded-[26px] bg-[#F4EDF8] p-8 space-y-5 shadow-2xs">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image
                  src="/resources-partners/signpost.svg"
                  alt="No recruitment offer or form icon"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl sm:text-[24px] font-bold text-[#18141B] leading-tight">
                  {programBoundary.title}
                </h3>
                <p className="text-[16px] font-normal leading-[1.55] text-[#665F69]">
                  {programBoundary.requirements}
                </p>
              </div>

              <p className="text-[14px] font-medium leading-[1.55] text-[#301153]">
                {programBoundary.limitation}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

