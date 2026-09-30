"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ListChecks,
  CircleHelp,
  Library,
  GitCompareArrows,
  Waypoints,
  DatabaseZap,
  RadioTower,
  Briefcase,
  Ban,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeader, StatusBadge, Reveal } from "./shared";
import { SpecimenRecord } from "./types";

interface SelectedMarketDetailProps {
  record?: SpecimenRecord;
}

export default function SelectedMarketDetailSection({ record }: SelectedMarketDetailProps) {
  const currentRecord = record || {
    id: "specimen-a",
    market: "Specimen Market A",
    qualifier: "Synthetic jurisdiction record",
    capability: "Managed Compliance",
    underlyingState: "Production",
    operationalState: "Managed",
    publicState: "Managed",
    currentness: "Current",
    scopeText: "Controlled specimen scope A — illustrative label only.",
    packLink: "/coverage/packs",
    statusLink: "/status-and-releases",
    explanation:
      "Underlying capability and approved operations are shown as ready for controlled specimen scope A only.",
  };

  return (
    <section
      id="selected-market-detail"
      className="relative w-full overflow-hidden bg-[#FAF8FA] border-b border-[#E5D9EB] py-16 sm:py-20 lg:py-24"
    >
      {/* Network Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-20"
        aria-hidden="true"
      >
        <Image
          src="/managed-compliance-coverage/network-grid-pattern-bg.png"
          alt="Network grid pattern background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16 space-y-10 sm:space-y-12">
        <Reveal>
          <SectionHeader
            eyebrow="Selected Market / Jurisdiction Detail"
            title={currentRecord.market}
            description="A synthetic detail view demonstrating the governed evidence and boundary structure. Unknown scope is omitted rather than invented."
          />
        </Reveal>

        {/* Detail Summary Panel */}
        <Reveal delay={0.1}>
          <div className="rounded-[18px] border border-[#E5D9EB] bg-[#F7F1FA] p-6 sm:p-7 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Identity */}
              <div className="lg:col-span-4 flex flex-col gap-1.5">
                <span className="text-xs font-bold text-[#D65A2C] uppercase tracking-wider">
                  Identity
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#18141B]">
                  {currentRecord.market}
                </h3>
                <p className="text-xs sm:text-sm text-[#665F69]">
                  {currentRecord.qualifier}
                </p>
              </div>

              {/* State Summary */}
              <div className="lg:col-span-5 flex flex-col gap-2 lg:border-l lg:border-[#D8CEDD] lg:pl-6">
                <span className="text-xs font-bold text-[#8A818E] uppercase tracking-wider">
                  Current state
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={currentRecord.underlyingState} />
                  <StatusBadge status={currentRecord.operationalState} />
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-[#18141B]">
                  {currentRecord.explanation}
                </p>
              </div>

              {/* Currentness */}
              <div className="lg:col-span-3 flex flex-col gap-1.5 lg:border-l lg:border-[#D8CEDD] lg:pl-6">
                <span className="text-xs font-bold text-[#8A818E] uppercase tracking-wider">
                  Status currentness
                </span>
                <span className="text-base font-bold text-[#177245]">
                  {currentRecord.currentness === "Current"
                    ? "Current specimen"
                    : currentRecord.currentness}
                </span>
                <p className="text-xs text-[#665F69]">
                  No real date or market claim.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 9 Detail Cards Grid */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Card 1: Scope summary */}
            <div className="rounded-[16px] border border-[#E5D9EB] bg-white p-6 shadow-2xs hover:border-[#BF6735] transition-colors flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F7F1FA] text-[#D65A2C]">
                    <ListChecks className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                    Scope summary
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#18141B]">
                  Approved specimen scope only
                </h4>
                <p className="text-sm leading-relaxed text-[#665F69]">
                  {currentRecord.scopeText} Any unlisted filing, authority or service remains outside this record.
                </p>
              </div>
            </div>

            {/* Card 2: What current state means */}
            <div className="rounded-[16px] border border-[#E5D9EB] bg-white p-6 shadow-2xs hover:border-[#BF6735] transition-colors flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F7F1FA] text-[#D65A2C]">
                    <CircleHelp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                    What current state means
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#18141B]">
                  A bounded readiness statement
                </h4>
                <p className="text-sm leading-relaxed text-[#665F69]">
                  MANAGED reports readiness for this exact governed record. It is not a customer contract, legal conclusion or outcome guarantee.
                </p>
              </div>
            </div>

            {/* Card 3: Pack evidence */}
            <div className="rounded-[16px] border border-[#E5D9EB] bg-white p-6 shadow-2xs hover:border-[#BF6735] transition-colors flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F7F1FA] text-[#D65A2C]">
                    <Library className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                    Pack evidence
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#18141B]">
                  Trace to governed pack evidence
                </h4>
                <p className="text-sm leading-relaxed text-[#665F69]">
                  The relevant pack is the evidence path for jurisdictional content—not proof of managed operations by itself.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/coverage-overview"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D65A2C] hover:underline"
                >
                  <span>Country & Regulatory Packs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 4: Two-gate model (Dark Card) */}
            <div className="rounded-[16px] border border-[#481A7A] bg-[#301153] p-6 shadow-md flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/10 text-[#F4A261]">
                    <GitCompareArrows className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F4A261]">
                    Two-gate model
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  Production + approved operations
                </h4>
                <p className="text-sm leading-relaxed text-[#D9D0DF]">
                  Both gates must remain current. A failing, suspended or unavailable gate prevents a MANAGED public state.
                </p>
              </div>
            </div>

            {/* Card 5: Adjacent Coverage */}
            <div className="rounded-[16px] border border-[#E5D9EB] bg-white p-6 shadow-2xs hover:border-[#BF6735] transition-colors flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F7F1FA] text-[#D65A2C]">
                    <Waypoints className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                    Adjacent Coverage
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#18141B]">
                  Check capability-specific truth
                </h4>
                <p className="text-sm leading-relaxed text-[#665F69]">
                  Tax Determination, obligations, filing, remittance and e-invoicing retain their own governed states.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/coverage-overview"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D65A2C] hover:underline"
                >
                  <span>Related Coverage pages</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 6: Platform proof */}
            <div className="rounded-[16px] border border-[#E5D9EB] bg-white p-6 shadow-2xs hover:border-[#BF6735] transition-colors flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F7F1FA] text-[#D65A2C]">
                    <DatabaseZap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                    Platform proof
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#18141B]">
                  Evidence remains replayable
                </h4>
                <p className="text-sm leading-relaxed text-[#665F69]">
                  Inputs, classifications, authority versions, approvals and state changes support governed execution and review.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/compliance-filing"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D65A2C] hover:underline"
                >
                  <span>Platform Compliance & Filing</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 7: Status currentness */}
            <div className="rounded-[16px] border border-[#E5D9EB] bg-white p-6 shadow-2xs hover:border-[#BF6735] transition-colors flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F7F1FA] text-[#D65A2C]">
                    <RadioTower className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                    Status currentness
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#18141B]">
                  Releases control the latest truth
                </h4>
                <p className="text-sm leading-relaxed text-[#665F69]">
                  Status & Releases is subordinate evidence for changes, suspension, withdrawal, stale sources or conflicting records.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/status-and-releases"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D65A2C] hover:underline"
                >
                  <span>Status & Releases</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 8: Commercial handoff */}
            <div className="rounded-[16px] border border-[#E5D9EB] bg-white p-6 shadow-2xs hover:border-[#BF6735] transition-colors flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F7F1FA] text-[#D65A2C]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                    Commercial handoff
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#18141B]">
                  Verify implementation fit
                </h4>
                <p className="text-sm leading-relaxed text-[#665F69]">
                  Book a Demo can confirm customer-scenario scope, contract and implementation—but cannot replace public Coverage truth.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="#demo"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D65A2C] hover:underline"
                >
                  <span>Book a Demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 9: Omitted unknowns */}
            <div className="rounded-[16px] border border-[#E5D9EB] bg-white p-6 shadow-2xs hover:border-[#BF6735] transition-colors flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F7F1FA] text-[#D65A2C]">
                    <Ban className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                    Omitted unknowns
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#18141B]">
                  Silence is not support
                </h4>
                <p className="text-sm leading-relaxed text-[#665F69]">
                  Unknown scope, authority, staffing, service hours, responsibility, representation, SLA and pricing are not invented.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
