"use client";

import React from "react";
import Link from "next/link";
import {
  SectionContainer,
  SectionHeader,
  PatternBackground,
  Reveal,
} from "./shared";
import { RELATED_CAPABILITY_DESTINATIONS } from "./country-regulatorypacks-data";

export default function RelatedCoverageSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD] relative overflow-hidden">
      {/* Pattern background */}
      <PatternBackground />

      <div className="relative z-10">
        <Reveal>
          <div className="flex flex-col gap-10 sm:gap-12">
            {/* Section Heading */}
            <SectionHeader
              eyebrow="Related coverage"
              title="Continue with capability-specific coverage."
              description="Use coverage destinations for availability. Use platform explanations for functionality."
              className="mb-0"
            />

            {/* Coverage Authority Destinations (2 Dark Purple Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Coverage Overview */}
              <div className="rounded-2xl bg-[#301153] p-7 flex flex-col justify-between gap-4 text-white shadow-sm hover:bg-[#280d46] transition-colors">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold tracking-tight text-white font-['Inter',sans-serif]">
                    Coverage Overview
                  </h3>
                  <p className="text-base text-[#D9D0DF] leading-normal font-['Inter',sans-serif]">
                    The wider view of capability-specific readiness.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/coverage-overview"
                    className="inline-flex items-center text-[15px] font-semibold text-white hover:text-[#F4A261] transition-colors font-['Inter',sans-serif]"
                  >
                    <span>View Coverage Overview →</span>
                  </Link>
                </div>
              </div>

              {/* Status & Releases */}
              <div className="rounded-2xl bg-[#301153] p-7 flex flex-col justify-between gap-4 text-white shadow-sm hover:bg-[#280d46] transition-colors">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold tracking-tight text-white font-['Inter',sans-serif]">
                    Status & Releases
                  </h3>
                  <p className="text-base text-[#D9D0DF] leading-normal font-['Inter',sans-serif]">
                    Public state definitions and governed currentness.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/status-and-releases"
                    className="inline-flex flex-col gap-0.5 group"
                  >
                    <span className="text-[15px] font-semibold text-white group-hover:text-[#F4A261] transition-colors font-['Inter',sans-serif]">
                      View Status & Releases →
                    </span>
                    <span className="text-xs text-[#D9D0DF] font-mono">/coverage/status/</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Capability Destinations (6 Cards in 2 Rows of 3) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {RELATED_CAPABILITY_DESTINATIONS.map((dest) => (
                <div
                  key={dest.id}
                  className="rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-7 flex flex-col justify-between gap-4 shadow-xs hover:border-[#301153] hover:shadow-sm transition"
                >
                  <h4 className="text-lg sm:text-[20px] font-semibold text-[#18141B] font-['Inter',sans-serif]">
                    {dest.title}
                  </h4>

                  <div>
                    <Link
                      href={dest.href}
                      className="inline-flex items-center text-[15px] font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors font-['Inter',sans-serif]"
                    >
                      <span>{dest.actionText}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Sub-Footnote */}
            <p className="text-sm text-[#665F69] leading-relaxed font-['Inter',sans-serif]">
              Country & Regulatory Packs · /coverage/packs/ · Public coverage information is available without booking a demo.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
