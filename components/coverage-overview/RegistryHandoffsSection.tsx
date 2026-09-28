"use client";

import React from "react";
import Link from "next/link";
import { PackageSearch, History, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionContainer, Reveal } from "./shared";

const PACK_RULES = [
  "Capabilities activate independently within a pack.",
  "Version and release context remains explicit.",
  "Historical context routes to the approved chronology.",
  "A pack never makes every capability production-ready.",
];

const STATUS_RULES = [
  "Current state remains on Coverage Overview.",
  "Transitions and approved release context remain in Status & Releases.",
  "Effective, last verified and historical labels stay distinct.",
  "No date is invented when governed timing is unavailable.",
];

export default function RegistryHandoffsSection() {
  return (
    <SectionContainer className="bg-[#F4ECF8] border-b border-[#DDD2E2]/60 py-20 lg:py-24">
      <Reveal>
        <div className="space-y-6 sm:space-y-8">
          {/* Card 1: Country & Regulatory Packs */}
          <div className="rounded-[26px] border border-[#DDD2E2] bg-white p-7 sm:p-10 lg:p-12 shadow-xs flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left Column */}
            <div className="lg:w-[46%] w-full space-y-4">
              <div className="w-12 h-12 rounded-[12px] bg-[#EEE3F6] flex items-center justify-center text-[#5A2388] shrink-0">
                <PackageSearch className="w-6 h-6" />
              </div>

              <span className="block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
                Governed jurisdiction content
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#18141B] leading-tight">
                Country & Regulatory Packs
              </h2>

              <p className="text-sm sm:text-base font-normal leading-[1.55] text-[#4E4852]">
                Packs connect jurisdiction content to governed versions and releases. They provide the content boundary for activation—but do not declare every capability production-ready.
              </p>

              <div className="pt-2">
                <Link
                  href="/coverage/packs"
                  className="inline-flex items-center gap-2 rounded-full border border-[#DDD2E2] bg-white px-5 py-3 text-sm font-bold text-[#18141B] hover:bg-[#FAF8FA] hover:border-[#BF6735]/40 transition-colors shadow-2xs"
                >
                  <ArrowRight className="w-4 h-4 text-[#18141B]" />
                  <span>Open /coverage/packs/</span>
                </Link>
              </div>
            </div>

            {/* Right Column: 4 Stacked Horizontal Rows */}
            <div className="lg:w-[54%] w-full flex flex-col gap-3">
              {PACK_RULES.map((rule) => (
                <div
                  key={rule}
                  className="rounded-[16px] bg-[#FAF7FC] px-5 py-4 sm:py-[18px] flex items-center gap-3.5 border border-[#DDD2E2]/30"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#5A2388] shrink-0" />
                  <span className="text-sm font-medium text-[#18141B] leading-snug">
                    {rule}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Status & Releases */}
          <div className="rounded-[26px] border border-[#DDD2E2] bg-white p-7 sm:p-10 lg:p-12 shadow-xs flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left Column */}
            <div className="lg:w-[46%] w-full space-y-4">
              <div className="w-12 h-12 rounded-[12px] bg-[#EEE3F6] flex items-center justify-center text-[#5A2388] shrink-0">
                <History className="w-6 h-6" />
              </div>

              <span className="block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
                Authoritative chronology
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#18141B] leading-tight">
                Status & Releases
              </h2>

              <p className="text-sm sm:text-base font-normal leading-[1.55] text-[#4E4852]">
                Coverage owns the current state. /coverage/status/ owns authoritative public chronology, approved transitions and the release context behind that state.
              </p>

              <div className="pt-2">
                <Link
                  href="/coverage/status"
                  className="inline-flex items-center gap-2 rounded-full border border-[#DDD2E2] bg-white px-5 py-3 text-sm font-bold text-[#18141B] hover:bg-[#FAF8FA] hover:border-[#BF6735]/40 transition-colors shadow-2xs"
                >
                  <ArrowRight className="w-4 h-4 text-[#18141B]" />
                  <span>Open /coverage/status/</span>
                </Link>
              </div>
            </div>

            {/* Right Column: 4 Stacked Horizontal Rows */}
            <div className="lg:w-[54%] w-full flex flex-col gap-3">
              {STATUS_RULES.map((rule) => (
                <div
                  key={rule}
                  className="rounded-[16px] bg-[#FAF7FC] px-5 py-4 sm:py-[18px] flex items-center gap-3.5 border border-[#DDD2E2]/30"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#5A2388] shrink-0" />
                  <span className="text-sm font-medium text-[#18141B] leading-snug">
                    {rule}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
