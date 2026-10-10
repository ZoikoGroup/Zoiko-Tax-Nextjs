"use client";

import React from "react";
import Image from "next/image";
import {
  SectionContainer,
  PrimaryButton,
  SecondaryButton,
  Reveal,
} from "./shared";

export default function CurrentCoverageHandoffSection() {
  return (
    <SectionContainer
      id="coverage-handoff"
      className="bg-[#301153] py-20 lg:py-[88px]"
    >
      <Reveal>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Discovery Copy */}
          <div className="flex flex-col gap-7 max-w-[736px] w-full">
            <div className="flex flex-col gap-4">
              {/* Eyebrow */}
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.06em] text-[#F4A261] font-['Inter',sans-serif]">
                Verify the current record
              </span>

              {/* Title */}
              <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-white font-['Inter',sans-serif]">
                The definition stays here. The facts live in Coverage.
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.55] text-[#D9D0DF] font-['Inter',sans-serif]">
                Use the approved coverage overview to find the relevant
                capability and market. Definition and discovery are not
                lead-gated.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <PrimaryButton href="/coverage-overview">
                View Current Coverage
              </PrimaryButton>
              <SecondaryButton href="#demo" dark>
                Book a Demo
              </SecondaryButton>
            </div>
          </div>

          {/* Right Unconfirmed Status Card */}
          <div className="w-full lg:max-w-[480px] rounded-[26px] border border-[#62467B] bg-[#14091F] p-8 flex flex-col gap-5.5 shadow-xl">
            {/* Status Header Badge */}
            <div className="flex items-center gap-2.5">
              <Image
                src="/coverage-production/icons/circle-help.svg"
                alt="Help"
                width={20}
                height={20}
                className="w-5 h-5 flex-shrink-0"
              />
              <span className="text-[15px] font-semibold text-[#F4A261] font-['Inter',sans-serif]">
                Status not confirmed
              </span>
            </div>

            {/* Degraded Message Title */}
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white leading-tight font-['Inter',sans-serif]">
              Current coverage could not be confirmed
            </h3>

            {/* Reason */}
            <p className="text-[15px] font-normal leading-relaxed text-[#D9D0DF] font-['Inter',sans-serif]">
              No matching current authoritative record has been supplied for this
              page. Currentness is pending; no live Production status is
              asserted.
            </p>

            {/* Inquiry Guidance Footer */}
            <div className="flex flex-col gap-3 pt-5 border-t border-[#62467B]">
              <p className="text-sm font-normal text-[#D9D0DF] font-['Inter',sans-serif]">
                View Current Coverage, or Book a Demo to discuss a scoped
                capability query.
              </p>
              <span className="text-xs font-normal text-[#D9D0DF]/80 font-['Inter',sans-serif]">
                Controlled status inquiry · Information pending
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
