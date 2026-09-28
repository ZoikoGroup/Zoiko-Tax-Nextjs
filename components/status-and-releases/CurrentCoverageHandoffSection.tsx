"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown, History, CheckCircle2 } from "lucide-react";
import { SectionContainer } from "./shared";

export default function CurrentCoverageHandoffSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
        {/* Left Copy */}
        <div className="flex-1 flex flex-col gap-5 max-w-xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.06em] text-[#D65A2C]">
            CURRENT TRUTH
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
            Current Coverage is the source of truth
          </h2>

          <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5] text-[#665F69]">
            Chronology explains how Coverage changed. It never overrides the current market × capability × state × scope truth published in Coverage Overview.
          </p>

          <div className="pt-2">
            <Link
              href="/coverage-overview"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#D65A2C] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c04d22]"
            >
              <span>View Current Coverage</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right Truth Handoff Diagram */}
        <div className="w-full lg:w-[500px] shrink-0">
          <div className="flex flex-col items-center gap-4 rounded-[26px] border border-[#D8CEDD] bg-white p-6 sm:p-7 shadow-[0px_6px_18px_0px_rgba(0,0,0,0.06)]">
            {/* History Node */}
            <div className="w-full flex items-center gap-3.5 rounded-2xl bg-[#F6F4F4] p-4 sm:p-5 border border-black/5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEE2F5] text-[#301153]">
                <History className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-[#18141B]">
                  Status & Releases
                </span>
                <span className="text-sm text-[#665F69]">
                  What changed, within what scope
                </span>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF3FF] text-[#D65A2C]">
              <ArrowDown className="h-5 w-5" />
            </div>

            {/* Current Node */}
            <div className="w-full flex items-center gap-3.5 rounded-2xl bg-[#301153] p-4 sm:p-5 text-white border border-purple-900/30">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white">
                  Coverage Overview
                </span>
                <span className="text-sm text-[#D9D0DF]">
                  What is current now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
