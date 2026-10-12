"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

export default function SystemStatusHero() {
  return (
    <section
      className="relative w-full overflow-hidden border-b border-[#F3E8FF] min-h-[853px] lg:h-[853px] flex flex-col justify-center py-16 lg:py-0"
      style={{
        backgroundColor: "#F7F3ED",
        backgroundImage: `linear-gradient(90deg, rgba(247, 243, 237, 0.97) 0%, rgba(234, 223, 240, 0.85) 54%, rgba(234, 223, 240, 0.1) 100%), url('/images/system-status/hero-bg.png')`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "0 0, right top",
        backgroundSize: "100% 100%, auto 100%",
      }}
    >
      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        <div className="w-full max-w-[896px] flex flex-col">
          {/* Eyebrow / Kicker */}
          <Reveal delay={0}>
            <p className="text-[14px] font-bold leading-[20px] tracking-[0.1em] text-[#D97637] uppercase font-['Inter',sans-serif]">
              SUPPORT & STATUS · SYSTEM STATUS
            </p>
          </Reveal>

          {/* Heading 1 */}
          <Reveal delay={0.05}>
            <h1 className="pt-4 text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold leading-[1.0] text-[#1E1B4B] tracking-[-0.01em] font-['Inter',sans-serif]">
              Current ZoikoTax service status — with freshness and source visible.
            </h1>
          </Reveal>

          {/* Subheading paragraph */}
          <Reveal delay={0.1}>
            <p className="pt-6 text-[18px] font-normal leading-[29.25px] text-[#374151] max-w-[896px] font-['Inter',sans-serif]">
              See the current source-backed state of approved ZoikoTax services, active incidents and planned maintenance. Status is time-sensitive; live states should show when they were last verified and what scope they apply to.
            </p>
          </Reveal>

          {/* Live Incident Banner */}
          <Reveal delay={0.15}>
            <div className="pt-10 w-full max-w-[896px]">
              <div className="w-full flex items-start gap-4 p-6 bg-[#FFFBEB] border-l-4 border-[#B45309] rounded-r-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                {/* 32x32 Alert Triangle SVG */}
                <div className="shrink-0 pt-0.5">
                  <Image
                    src="/images/system-status/status-alert.svg"
                    alt="Alert"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>

                {/* Banner Content */}
                <div className="flex-1 w-full max-w-[796px]">
                  <h2 className="text-[24px] font-bold leading-[32px] text-[#78350F] font-['Inter',sans-serif]">
                    Partial Service Degradation
                  </h2>

                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-[14px] font-medium leading-[20px] text-[#92400E] font-['Inter',sans-serif]">
                      Last updated Oct 11, 2026, 22:25 IST ·
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#FDE68A] text-[12px] font-medium leading-[16px] text-[#78350F] font-['Inter',sans-serif]">
                      Current
                    </span>
                  </div>

                  <p className="pt-3 text-[16px] font-normal leading-[26px] text-[#92400E] font-['Inter',sans-serif]">
                    We are currently investigating elevated latency affecting API processing for North America scopes. Core dashboard services remain fully operational.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Action Buttons Row */}
          <Reveal delay={0.2}>
            <div className="pt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#active-incidents"
                style={{
                  backgroundColor: "rgba(191, 103, 53, 1)",
                  borderColor: "rgba(191, 103, 53, 1)",
                }}
                className="inline-flex items-center justify-center py-[15px] px-6 hover:opacity-95 active:opacity-90 border text-white font-bold text-[16px] leading-[24px] text-center rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1)] transition-all cursor-pointer font-['Inter',sans-serif]"
              >
                View active incidents
              </Link>
              <Link
                href="#service-health"
                className="inline-flex items-center justify-center py-[14px] px-8 bg-white hover:bg-[#FAF8FA] border-2 border-[#E5E7EB] text-[#2E1065] font-bold text-[16px] leading-[24px] rounded-full transition-colors cursor-pointer font-['Inter',sans-serif]"
              >
                Browse service health
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
