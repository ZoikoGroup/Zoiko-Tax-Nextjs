"use client";

import React from "react";
import Image from "next/image";
import { Building2, Boxes, Activity, ScanText, CalendarCheck, FileKey2 } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

const DIMENSIONS = [
  {
    number: "01 · MARKET",
    title: "Named operating context",
    description:
      "The market record anchors jurisdiction-specific content without implying a universal country status.",
    icon: Building2,
  },
  {
    number: "02 · CAPABILITY",
    title: "One fiscal workflow",
    description:
      "Determination, filing and other capabilities are evaluated independently.",
    icon: Boxes,
  },
  {
    number: "03 · STATE",
    title: "Current operational truth",
    description:
      "A visible text state communicates readiness without relying on color.",
    icon: Activity,
  },
  {
    number: "04 · SCOPE",
    title: "Exact published boundary",
    description:
      "Products, workflows, adapters, networks and limitations remain explicit.",
    icon: ScanText,
  },
];

export default function HowToReadCoverageSection() {
  return (
    <SectionContainer className="relative overflow-hidden bg-[#FAF7FC] border-b border-[#DDD2E2]/60">
      {/* Subtle Pattern Background from Figma */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply" aria-hidden="true">
        <Image
          src="/coverage-overview/section-pattern-bg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative">
        <Reveal>
          <div className="space-y-10 sm:space-y-12">
            {/* Header */}
            <SectionHeader
              eyebrow="REGISTRY ANATOMY"
              title="How to read Coverage"
              description="Read each published record as MARKET × CAPABILITY × STATE × SCOPE, then verify the effective context and governed evidence source."
            />

            {/* 4 Dimension Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DIMENSIONS.map((dim) => {
                const IconComponent = dim.icon;
                return (
                  <div
                    key={dim.number}
                    className="rounded-[16px] border border-[#DDD2E2] bg-white p-6 shadow-xs flex flex-col gap-3.5 hover:border-[#BF6735]/40 transition-colors"
                  >
                    <div className="w-[42px] h-[42px] rounded-lg bg-[#EEE3F6] flex items-center justify-center text-[#5A2388] shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#D65A2C]">
                      {dim.number}
                    </span>

                    <h3 className="text-base sm:text-[17px] font-bold text-[#18141B] leading-snug">
                      {dim.title}
                    </h3>

                    <p className="text-sm sm:text-[14px] font-normal leading-[1.5] text-[#4E4852]">
                      {dim.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Verification Context & Governed Evidence Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-[16px] border border-[#DDD2E2] bg-white p-6 shadow-xs flex flex-col sm:flex-row items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EEE3F6] flex items-center justify-center text-[#5A2388] shrink-0">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base sm:text-[18px] font-bold text-[#18141B]">
                    Effective and verification context
                  </h4>
                  <p className="text-sm sm:text-[14px] font-normal leading-[1.5] text-[#4E4852]">
                    Keep effective and last verified labels distinct. This page never invents dates when no governed date can be published.
                  </p>
                </div>
              </div>

              <div className="rounded-[16px] border border-[#DDD2E2] bg-white p-6 shadow-xs flex flex-col sm:flex-row items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EEE3F6] flex items-center justify-center text-[#5A2388] shrink-0">
                  <FileKey2 className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base sm:text-[18px] font-bold text-[#18141B]">
                    Governed evidence and source
                  </h4>
                  <p className="text-sm sm:text-[14px] font-normal leading-[1.5] text-[#4E4852]">
                    Every state should route to a source reference, pack and approved release context that can support the published claim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
