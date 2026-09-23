import React from "react";
import Link from "next/link";
import { SectionContainer, Reveal } from "./shared";

export default function EvidenceReplaySection() {
  return (
    <SectionContainer id="replay" className="bg-[#FAF3FF] py-20 sm:py-24">
      {/* Section Header */}
      <Reveal>
        <div className="flex flex-col gap-3.5 max-w-5xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
            HISTORICAL AUDIT REPLAY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
            Do not just determine outcomes. Preserve exactly why they occurred.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#535055]">
            If rules or tax tables evolve, you must retain the exact historic capability parameters to replay, defend, and verify historical outcomes during multi-year state audits.
          </p>
        </div>
      </Reveal>

      {/* Main Replay Manifest Card */}
      <Reveal delay={0.15}>
        <div className="mt-12 rounded-2xl border border-[#D8CEDD] bg-white p-7 sm:p-9 shadow-[0_4px_20px_0_rgba(0,0,0,0.03)]">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D8CEDD]/80 pb-4">
            <span className="font-sans text-sm sm:text-base font-bold uppercase tracking-wide text-[#18141B]">
              REPLAY MANIFEST ID: RPLAY-884-2024
            </span>
            <span className="inline-flex items-center rounded-full border border-[#26735B]/30 bg-[#EEFDF6] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#26735B]">
              VERIFIED IMMUTABLE
            </span>
          </div>

          {/* 3 Plain Columns (No inner boxed cards) */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#665F69]">
                ORIGIN FACTS PAYLOAD
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-[#535055]">
                Immutable billing records frozen inside secure transaction vault.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#665F69]">
                JURISDICTIONAL RULES
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-[#535055]">
                Execution paths lock back to historic regulations of June 2024.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#665F69]">
                TEMPORAL SETTINGS
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-[#535055]">
                Determinations lock down dates, rules, and exceptions to exact event timezone.
              </p>
            </div>
          </div>

          {/* Centered Pill Button */}
          <div className="mt-10 mb-1 flex justify-center">
            <Link
              href="#evidence-portal"
              className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full border border-[#D8CEDD] bg-white px-7 text-sm font-semibold text-[#18141B] shadow-[0_2px_6px_0_rgba(0,0,0,0.06)] transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-95"
            >
              Explore Evidence & Replay Portal
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
