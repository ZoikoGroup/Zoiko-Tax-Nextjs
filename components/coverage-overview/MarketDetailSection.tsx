"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Info } from "lucide-react";
import { SectionContainer, CoverageStateBadge, PrimaryButton, Reveal } from "./shared";
import { MARKET_A_DETAILS } from "./coverage-data";

export default function MarketDetailSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#DDD2E2]/60">
      <Reveal>
        <div className="space-y-8 sm:space-y-10">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-[850px] space-y-3">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
                EXPANDED RECORD SPECIMEN
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
                Illustrative Market A
              </h2>

              <p className="text-base sm:text-lg font-normal leading-[1.5] text-[#706876]">
                This expanded specimen shows capability-specific scope and routing. It is illustrative synthetic data—not live data and not a representation of any real market.
              </p>
            </div>

            <div className="shrink-0">
              <PrimaryButton href="#demo">Book a Demo</PrimaryButton>
            </div>
          </div>

          {/* Evidence Note Banner */}
          <div className="rounded-[10px] border border-[#F1CDBD] bg-[#FFF0E8] p-4 flex items-center gap-3">
            <Info className="w-5 h-5 text-[#D65A2C] shrink-0" />
            <p className="text-xs sm:text-[13px] font-semibold text-[#18141B]">
              Not live data · States, scope labels and verification context below are illustrative only.
            </p>
          </div>

          {/* 6 Capability Detail Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MARKET_A_DETAILS.map((cap) => (
              <div
                key={cap.name}
                className="rounded-[16px] border border-[#DDD2E2] bg-white p-6 shadow-xs flex flex-col justify-between gap-4 hover:border-[#BF6735]/40 transition-colors"
              >
                <div className="space-y-3">
                  {/* Title and State Badge */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#F0EDF3] pb-3">
                    <h3 className="text-base sm:text-[17px] font-bold text-[#18141B]">
                      {cap.name}
                    </h3>
                    <CoverageStateBadge state={cap.state} size="sm" />
                  </div>

                  {/* Scope Label */}
                  <p className="text-xs sm:text-[13px] font-semibold text-[#5A2388] leading-snug">
                    {cap.scope}
                  </p>

                  {/* Verification Context */}
                  <div className="flex items-center gap-2 text-[#706876]">
                    <ClipboardCheck className="w-4 h-4 text-[#706876] shrink-0" />
                    <span className="text-xs text-[#706876]">
                      {cap.verificationText}
                    </span>
                  </div>

                  {/* Limitation Note */}
                  <p className="text-xs sm:text-[13px] font-normal leading-[1.5] text-[#4E4852]">
                    {cap.limitation}
                  </p>
                </div>

                {/* Routing Links */}
                <div className="flex items-center gap-4 pt-3 border-t border-[#F0EDF3]">
                  <Link
                    href={cap.packHref}
                    className="group inline-flex items-center gap-1 text-xs sm:text-[13px] font-bold text-[#5A2388] hover:text-[#431868] transition-colors"
                  >
                    <span>Pack</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href={cap.statusHref}
                    className="group inline-flex items-center gap-1 text-xs sm:text-[13px] font-bold text-[#5A2388] hover:text-[#431868] transition-colors"
                  >
                    <span>Status & Releases</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Proof Boundary Navigation Banner */}
          <div className="rounded-[26px] bg-[#21053E] p-6 sm:p-7 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm">
            <div className="max-w-[480px] space-y-1.5">
              <h3 className="text-xl sm:text-[22px] font-bold text-white">
                Inspect the proof boundary
              </h3>
              <p className="text-xs sm:text-sm font-normal text-[#D9D0DF] leading-[1.5]">
                Route from readiness status to the platform, developer, trust and evidence surfaces that prove different facts.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {[
                { name: "Platform", href: "/determination" },
                { name: "Developers", href: "#developers" },
                { name: "Trust", href: "#trust" },
                { name: "Evidence & Replay", href: "/reconciliation" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-[#F4A261] transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
