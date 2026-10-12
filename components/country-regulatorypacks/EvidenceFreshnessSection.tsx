"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  SectionContainer,
  SectionHeader,
  StatusChip,
  Reveal,
} from "./shared";

export default function EvidenceFreshnessSection() {
  const handleScrollToTopFilters = () => {
    const el = document.getElementById("pack-finder");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
      <Reveal>
        <div className="flex flex-col gap-10 sm:gap-12">
          {/* Section Heading */}
          <SectionHeader
            eyebrow="Evidence & freshness"
            title="Coverage truth comes from governed sources."
            description="Status semantics are sourced from governed Coverage, release and pack records—not marketing-authored claims."
            className="mb-0"
          />

          {/* Source and Recovery Guidance (2 Cards Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Public-safe provenance */}
            <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-9 flex flex-col justify-between gap-5 shadow-xs">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl sm:text-[28px] font-bold text-[#18141B] tracking-tight font-['Inter',sans-serif]">
                  Currentness, without invented certainty.
                </h3>

                <div>
                  <StatusChip label="Status unavailable" className="bg-[#F3EDF7] text-[#665F69]" />
                </div>

                <p className="text-base text-[#665F69] leading-[1.55] font-['Inter',sans-serif]">
                  Approved last-updated, effective and release metadata will be shown when provided. Currentness information is presently not supplied.
                </p>

                <p className="text-base text-[#665F69] leading-[1.55] font-['Inter',sans-serif]">
                  Missing, stale, conflicted or unreachable source information resolves to Status unavailable. There is no optimistic production fallback.
                </p>

                <p className="text-sm text-[#665F69] leading-[1.55] pt-1 border-t border-[#D8CEDD]/60 font-['Inter',sans-serif]">
                  Public-safe provenance does not expose raw licensed source text, tax rates, deadlines, private endpoints or credentials.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/status-and-releases"
                  className="inline-flex flex-col gap-0.5 group"
                >
                  <span className="text-[15px] font-semibold text-[#301153] group-hover:text-[#D65A2C] transition-colors font-['Inter',sans-serif]">
                    View Status & Releases →
                  </span>
                  <span className="text-xs text-[#665F69] font-mono">/coverage/status/</span>
                </Link>
              </div>
            </div>

            {/* Card 2: When information is unavailable (Dark Purple Card) */}
            <div className="rounded-[26px] bg-[#301153] text-white p-7 sm:p-9 flex flex-col justify-between gap-6 shadow-md">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight font-['Inter',sans-serif]">
                  When information is unavailable
                </h3>

                <p className="text-base text-[#D9D0DF] leading-[1.55] font-['Inter',sans-serif]">
                  Reset your filters or retry the source lookup. If information remains unavailable, consult Coverage Overview and Status & Releases.
                </p>

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={handleScrollToTopFilters}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#301153] shadow-sm transition hover:bg-[#FAF8FA] active:scale-[0.99] font-['Inter',sans-serif]"
                  >
                    <span>Reset filters / retry</span>
                  </button>
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  <Link
                    href="/coverage-overview"
                    className="text-[15px] font-semibold text-white hover:text-[#F4A261] transition-colors font-['Inter',sans-serif]"
                  >
                    View Coverage Overview →
                  </Link>

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

              <div className="pt-2 border-t border-white/20">
                <p className="text-sm text-[#D9D0DF] leading-[1.55] font-['Inter',sans-serif]">
                  No data does not mean unsupported. A missing capability is not a legal conclusion. AI may assist research but cannot create or authorize public coverage state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
