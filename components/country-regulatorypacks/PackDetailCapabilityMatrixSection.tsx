"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  SectionContainer,
  SectionHeader,
  StatusChip,
  SecondaryButton,
  Reveal,
} from "./shared";
import { CAPABILITY_MATRIX_ITEMS } from "./country-regulatorypacks-data";

export default function PackDetailCapabilityMatrixSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
      <Reveal>
        <div className="flex flex-col gap-10">
          {/* Section Heading */}
          <SectionHeader
            eyebrow="Pack detail"
            title="One pack. Six independent readiness states."
            description="Read the capability, its scope and its currentness together—not a single market-wide badge."
            className="mb-0"
          />

          {/* Illustrative Pack Detail Card */}
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white shadow-sm overflow-hidden flex flex-col">
            {/* Specimen Disclosure Banner */}
            <div className="bg-[#F3EDF7] px-6 sm:px-8 py-4 sm:py-4.5 border-b border-[#D8CEDD]">
              <span className="text-sm sm:text-base font-bold text-[#301153] font-['Inter',sans-serif]">
                Illustrative pack detail — governed market data required
              </span>
            </div>

            {/* Pack Identity Row */}
            <div className="p-6 sm:p-7 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 border-b border-[#D8CEDD]">
              <div className="flex flex-col gap-1.5">
                <span className="text-sm text-[#665F69] font-['Inter',sans-serif]">
                  Approved market label
                </span>
                <span className="text-lg sm:text-xl font-semibold text-[#18141B] font-['Inter',sans-serif]">
                  Not supplied
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-sm text-[#665F69] font-['Inter',sans-serif]">
                  Public pack identity
                </span>
                <span className="text-lg sm:text-xl font-semibold text-[#18141B] font-['Inter',sans-serif]">
                  Not supplied
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-sm text-[#665F69] font-['Inter',sans-serif]">
                  Updated / effective / release
                </span>
                <span className="text-lg sm:text-xl font-semibold text-[#18141B] font-['Inter',sans-serif]">
                  Not supplied
                </span>
              </div>
            </div>

            {/* Capability Matrix Table (Responsive Scroll) */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[880px] w-full">
                {/* Table Header */}
                <div className="grid grid-cols-12 bg-[#301153] px-6 sm:px-8 py-4 text-[#D9D0DF] text-[13px] font-bold uppercase tracking-wider font-['Inter',sans-serif]">
                  <div className="col-span-3">Capability</div>
                  <div className="col-span-2">Public state</div>
                  <div className="col-span-2">Scope</div>
                  <div className="col-span-2">Currentness</div>
                  <div className="col-span-3 text-right sm:text-left">Action</div>
                </div>

                {/* Table Body Rows */}
                <div className="divide-y divide-[#D8CEDD]">
                  {CAPABILITY_MATRIX_ITEMS.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-12 items-center px-6 sm:px-8 py-5 hover:bg-[#FAF8FA] transition-colors"
                    >
                      {/* Capability Name */}
                      <div className="col-span-3 pr-4">
                        <span className="text-sm sm:text-base font-semibold text-[#18141B] font-['Inter',sans-serif]">
                          {item.name}
                        </span>
                      </div>

                      {/* Public State Chip */}
                      <div className="col-span-2">
                        <StatusChip label={item.state} className={item.stateClass} />
                      </div>

                      {/* Scope */}
                      <div className="col-span-2 pr-2">
                        <span className="text-sm sm:text-[15px] text-[#665F69] font-['Inter',sans-serif]">
                          {item.scope}
                        </span>
                      </div>

                      {/* Currentness */}
                      <div className="col-span-2 pr-2">
                        <span className="text-sm sm:text-[15px] text-[#665F69] font-['Inter',sans-serif]">
                          {item.currentness}
                        </span>
                      </div>

                      {/* Action Link */}
                      <div className="col-span-3 text-right sm:text-left">
                        <Link
                          href={item.href}
                          className="inline-flex items-center text-sm sm:text-[15px] font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors font-['Inter',sans-serif]"
                        >
                          <span>{item.actionText}</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Evidence Note Footer */}
            <div className="p-6 sm:p-7 lg:p-8 bg-white border-t border-[#D8CEDD] flex flex-col gap-5">
              <p className="text-sm text-[#665F69] leading-relaxed font-['Inter',sans-serif]">
                Status comes from governed Coverage, release and pack data. This presentation does not provide tax or legal advice for a specific transaction. Currentness: Status unavailable.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                {/* Status Authority Route */}
                <div className="flex flex-col gap-0.5">
                  <Link
                    href="/status-and-releases"
                    className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors font-['Inter',sans-serif]"
                  >
                    <span>View Status & Releases →</span>
                  </Link>
                  <span className="text-xs text-[#665F69] font-mono">/coverage/status/</span>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <SecondaryButton href="/about-us">
                    Book a Demo
                  </SecondaryButton>
                  <span className="text-sm text-[#665F69] font-['Inter',sans-serif]">
                    Confirm exact contractual and implementation scope.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Card Guidance Text */}
          <p className="text-sm sm:text-[15px] text-[#665F69] leading-relaxed max-w-4xl font-['Inter',sans-serif]">
            Platform pages explain what a capability does. Coverage pages explain where, in which state and within what scope it is available. Neither a pack nor platform functionality implies live support.
          </p>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
