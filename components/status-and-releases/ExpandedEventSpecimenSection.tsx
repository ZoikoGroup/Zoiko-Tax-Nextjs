"use client";

import React from "react";
import Link from "next/link";
import { Info, ArrowRight, ShieldCheck } from "lucide-react";
import { SectionContainer, SectionHeader, StatusBadge } from "./shared";

export default function ExpandedEventSpecimenSection() {
  return (
    <SectionContainer id="evt-1002-specimen" className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-9">
        <SectionHeader
          eyebrow="Expanded event detail specimen"
          title="EVT-1002 · historical public status"
          description="A complete synthetic specimen showing how a governed event can explain chronology without pretending to be current truth."
        />

        {/* Notice Banner */}
        <div className="flex items-start gap-3 rounded-xl bg-[#FFF4D6] p-4 text-[#18141B] border border-[#8A5A00]/25">
          <Info className="h-5 w-5 shrink-0 text-[#8A5A00] mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-bold text-[#8A5A00]">
              Not live data
            </span>
            <p className="text-sm font-normal leading-[1.5] text-[#18141B]">
              EVT-1002, Illustrative Market B, all scopes and all date labels below are illustrative synthetic data. This specimen is not a production record.
            </p>
          </div>
        </div>

        {/* Event Detail Panel */}
        <div className="overflow-hidden rounded-[26px] border border-[#D8CEDD] bg-white shadow-[0px_6px_18px_0px_rgba(0,0,0,0.08)]">
          {/* Detail Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-[#17052D] p-6 sm:p-7 text-white">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <StatusBadge label="ILLUSTRATIVE SYNTHETIC DATA" />
                <StatusBadge label="HISTORICAL / PUBLIC" variant="amber" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                EVT-1002 · Compliance & Filing
              </h3>
            </div>

            {/* Transition indicators */}
            <div className="flex items-center gap-3">
              <StatusBadge label="PRODUCTION" variant="production" />
              <ArrowRight className="h-5 w-5 text-white/70" />
              <StatusBadge label="SUSPENDED" variant="suspended" />
            </div>
          </div>

          {/* Detail Body */}
          <div className="flex flex-col gap-7 p-6 sm:p-8">
            {/* Primary facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A818F]">
                  Market
                </span>
                <span className="text-base font-semibold leading-snug text-[#18141B]">
                  Illustrative Market B
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A818F]">
                  Related capability
                </span>
                <span className="text-base font-semibold leading-snug text-[#18141B]">
                  Compliance & Filing
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A818F]">
                  Exact scope
                </span>
                <span className="text-base font-semibold leading-snug text-[#18141B]">
                  Illustrative filing scope
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-[#EAE2ED]" />

            {/* Time context */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A818F]">
                  Effective
                </span>
                <span className="text-base font-semibold leading-snug text-[#18141B]">
                  Illustrative effective date
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A818F]">
                  Published
                </span>
                <span className="text-base font-semibold leading-snug text-[#18141B]">
                  Illustrative published date
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A818F]">
                  Current verification
                </span>
                <span className="text-base font-semibold leading-snug text-[#18141B]">
                  Use Current Coverage handoff
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-[#EAE2ED]" />

            {/* Summary and boundary row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Neutral summary */}
              <div className="flex flex-col gap-3 rounded-2xl bg-[#F7F3ED] p-6 border border-[#EAE2ED]">
                <h4 className="text-xl font-bold text-[#18141B]">
                  Neutral summary
                </h4>
                <p className="text-base font-normal leading-[1.55] text-[#665F69]">
                  For the stated illustrative filing scope, the public chronology records a historical transition from PRODUCTION to SUSPENDED. No cause is asserted by this synthetic specimen.
                </p>
              </div>

              {/* What this does not mean */}
              <div className="flex flex-col gap-3 rounded-2xl bg-[#FBEAEA] p-6 border border-[#9E3434]/20">
                <h4 className="text-xl font-bold text-[#9E3434]">
                  What this does not mean
                </h4>
                <p className="text-base font-normal leading-[1.55] text-[#18141B]">
                  It does not establish current country-wide status, incident cause, customer impact, legal correctness, uptime or the state of another capability or scope.
                </p>
              </div>
            </div>

            {/* Context row */}
            <div id="packs-context" className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Pack and release context */}
              <div className="flex flex-col gap-3 rounded-2xl bg-[#EEE2F5] p-6 border border-[#301153]/15">
                <h4 className="text-xl font-bold text-[#301153]">
                  Pack / release context
                </h4>
                <p className="text-sm font-normal leading-[1.55] text-[#18141B]">
                  A fictional pack context may accompany this event. Pack lifecycle and activation remain separate; a pack release does not imply every capability changed.
                </p>
                <div className="pt-2">
                  <Link
                    href="/coverage-overview"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors group"
                  >
                    <span>View pack context</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              {/* Current state handoff */}
              <div className="flex flex-col gap-3 rounded-2xl bg-[#E8F4EF] p-6 border border-[#236C55]/20">
                <h4 className="text-xl font-bold text-[#236C55]">
                  Current-state handoff
                </h4>
                <p className="text-sm font-normal leading-[1.55] text-[#18141B]">
                  Chronology does not determine what applies now. Resolve current market × capability × state × scope in Coverage Overview.
                </p>
                <div className="pt-2">
                  <Link
                    href="/coverage-overview"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors group"
                  >
                    <span>View Current Coverage</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Evidence & Provenance Card */}
            <div className="flex flex-col gap-4.5 rounded-2xl bg-[#14091F] p-6 sm:p-7 text-white border border-white/10">
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-bold text-white">
                    Public-safe evidence & provenance
                  </h4>
                  <p className="text-sm text-[#D9D0DF]">
                    Bounded metadata demonstrates governance without exposing restricted sources.
                  </p>
                </div>
                <ShieldCheck className="h-7 w-7 shrink-0 text-[#FFF0E9]" />
              </div>

              {/* Provenance Pills */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {[
                  "AUTHORITATIVE SOURCE CLASS",
                  "APPROVAL STATE RECORDED",
                  "PUBLICATION ROUTE RECORDED",
                  "SCOPE BOUND",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center justify-center rounded-full border border-[#301153] bg-[#EEE2F5] px-3 py-1.5 text-xs font-bold uppercase tracking-tight text-[#301153]"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <p className="text-sm font-normal leading-[1.5] text-white/80 pt-1">
                This public event record is not transaction-level replay proof and does not disclose restricted authority material.
              </p>
            </div>

            {/* Related routes */}
            <div className="flex flex-wrap items-center gap-6 pt-1">
              <Link
                href="/coverage-overview"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors group"
              >
                <span>Related capability: Compliance & Filing</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/about-us"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors group"
              >
                <span>Trust</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/about-us"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors group"
              >
                <span>Developers</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/about-us"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors group"
              >
                <span>Support</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
