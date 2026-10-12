"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

export default function DocumentationRecentlyUpdated() {
  return (
    <section className="w-full bg-[#F9FAFB] border-b border-[#E5E7EB] py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        <Reveal>
          <h2 className="text-[30px] font-bold leading-[36px] text-[#1E1B4B] font-['Inter',sans-serif]">
            Recently Updated Documentation
          </h2>
        </Reveal>

        <div className="pt-8 w-full max-w-[896px] flex flex-col gap-4">
          {/* Card 1: Active Guide */}
          <Reveal delay={0.05}>
            <div className="w-full bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center px-[10px] py-[4px] rounded-full bg-[#F3E8FF] text-[#6B21A8] text-[12px] font-bold leading-[16px] font-['Inter',sans-serif]">
                  Guide
                </span>
                <span className="text-[14px] font-medium leading-[20px] text-[#6B7280] font-['Inter',sans-serif]">
                  Workflows & operations
                </span>
                <span className="ml-auto text-[14px] font-medium leading-[20px] text-[#6B7280] font-['Inter',sans-serif]">
                  Updated: Oct 09, 2026
                </span>
              </div>

              {/* Title link */}
              <div className="pt-3">
                <Link
                  href="/reconciliation"
                  className="text-[20px] font-bold leading-[28px] text-[#2E1065] hover:text-[#BF6735] transition-colors font-['Inter',sans-serif]"
                >
                  Configuring End-to-End Reconciliation Procedures
                </Link>
              </div>

              {/* Description */}
              <p className="pt-2 text-[14px] font-normal leading-[20px] text-[#4B5563] font-['Inter',sans-serif]">
                Learn the approved end-to-end user and operator procedures for handling reconciliation evidence.
              </p>

              {/* Version badge */}
              <div className="pt-4 flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-1 rounded bg-[#F3F4F6] text-[#374151] text-[12px] font-medium leading-[16px] font-['Inter',sans-serif]">
                  Version: 2.1
                </span>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Superseded Article */}
          <Reveal delay={0.1}>
            <div className="w-full bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] opacity-75">
              {/* Alert Banner */}
              <div className="p-3 bg-[#FFFBEB] border-l-4 border-[#F59E0B] rounded-r-md">
                <p className="text-[14px] font-semibold leading-[20px] text-[#78350F] font-['Inter',sans-serif]">
                  This article has been superseded. Use the current replacement before relying on these instructions.
                </p>
              </div>

              {/* Meta row */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center px-[10px] py-[4px] rounded-full bg-[#E5E7EB] text-[#374151] text-[12px] font-bold leading-[16px] font-['Inter',sans-serif]">
                  Concept
                </span>
                <span className="text-[14px] font-medium leading-[20px] text-[#6B7280] font-['Inter',sans-serif]">
                  Legacy Auth
                </span>
                <span className="ml-auto text-[14px] font-medium leading-[20px] text-[#6B7280] font-['Inter',sans-serif]">
                  Superseded
                </span>
              </div>

              {/* Strikethrough title */}
              <div className="pt-3 pb-2">
                <h3 className="text-[20px] font-bold leading-[28px] text-[#6B7280] line-through font-['Inter',sans-serif]">
                  Legacy Authentication Workflows
                </h3>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
