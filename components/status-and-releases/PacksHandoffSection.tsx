"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "./shared";

export default function PacksHandoffSection() {
  return (
    <SectionContainer patternBg className="bg-[#FAF8FA]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
        {/* Left Pack Illustration */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="flex flex-col gap-4 rounded-[26px] bg-[#17052D] p-6 sm:p-7 text-white shadow-md border border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFF0E9]">
              Governed pack context
            </span>

            <div className="flex flex-col gap-2.5">
              {[
                { label: "Lifecycle", badge: "SEPARATE" },
                { label: "Version", badge: "GOVERNED" },
                { label: "Activation", badge: "SCOPED" },
              ].map((layer) => (
                <div
                  key={layer.label}
                  className="flex items-center justify-between rounded-xl bg-white/[0.08] px-4 py-3.5 border border-white/10"
                >
                  <span className="text-sm font-medium text-white">
                    {layer.label}
                  </span>
                  <span className="inline-flex items-center justify-center rounded-full border border-[#301153] bg-[#EEE2F5] px-3 py-1 text-xs font-bold uppercase tracking-tight text-[#301153]">
                    {layer.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Pack Copy */}
        <div className="flex-1 flex flex-col gap-5 max-w-xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.06em] text-[#D65A2C]">
            COUNTRY & REGULATORY PACKS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
            Pack releases provide context—not blanket capability change.
          </h2>

          <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5] text-[#665F69]">
            Packs own lifecycle, versions and governed activation context. A pack release does not imply that every capability, scope or current state changed.
          </p>

          <div className="pt-2">
            <Link
              href="/coverage-overview"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-[#FFFAFA] px-6 text-sm font-semibold text-[#18141B] transition hover:bg-[#F3EDF5]"
            >
              <span>View pack context</span>
              <ArrowRight className="h-4 w-4 text-[#665F69]" />
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
