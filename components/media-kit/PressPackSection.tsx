"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, Reveal, StatusPill, UnavailableButton, DarkPillButton } from "./shared";

const validationItems = [
  "Source-approved art and descriptions",
  "Current versions and review records",
  "Rights, credit and usage restrictions",
  "Verified files and accessible previews",
];

export default function PressPackSection() {
  return (
    <SectionContainer id="press-pack" dark={true} className="border-b border-[#D8CEDD]/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Press Pack Copy & Actions */}
        <Reveal className="lg:col-span-7">
          <div className="space-y-6 max-w-[650px]">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#F4A261]">
                Press pack
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-white font-['Inter',sans-serif]">
                A bundle is only as current as its contents.
              </h2>
            </div>

            <p className="text-base sm:text-lg leading-[1.6] text-[#D9D0DF]">
              No actual press pack has been supplied. Each logo, photograph, description and usage note must be independently governed and current before it can be included.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <UnavailableButton label="Press pack unavailable" />
              <DarkPillButton href="#contact">
                Contact Media
              </DarkPillButton>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Bundle Validation Card */}
        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="rounded-2xl bg-[#14091F] p-7 sm:p-8 space-y-6 border border-white/5 shadow-lg">
            <StatusPill text="UNAVAILABLE · NO BUNDLE" dark={true} />

            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Inter',sans-serif]">
              Before a pack can be released
            </h3>

            {/* Checklist Items */}
            <div className="space-y-3.5">
              {validationItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-4.5 h-4.5 relative shrink-0">
                    <Image
                      src="/media-kit/icons/circle-dashed.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="w-4.5 h-4.5 opacity-60 invert"
                    />
                  </div>
                  <span className="text-sm font-medium text-[#D9D0DF]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm leading-[1.6] text-[#D9D0DF]/80 pt-2 border-t border-white/10">
              A bundle does not extend the permission of any item. Ask for the approved pack through a governed media contact when its route is published.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
