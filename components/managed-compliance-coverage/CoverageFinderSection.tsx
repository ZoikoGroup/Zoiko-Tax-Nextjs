"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  RotateCcw,
  FlaskConical,
  Loader2,
  SearchX,
  CircleHelp,
  Clock,
  Split,
  Lock,
} from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

interface CoverageFinderProps {
  onSearchChange?: (val: string) => void;
  onStatusChange?: (val: string) => void;
  onScopeChange?: (val: string) => void;
  onSortChange?: (val: string) => void;
  onReset?: () => void;
}

const FINDER_STATES = [
  {
    icon: Loader2,
    title: "Loading",
    description: "Keep prior context visible; do not imply a result.",
    spin: true,
  },
  {
    icon: SearchX,
    title: "No matching result",
    description: "No governed record matches the selected filters.",
  },
  {
    icon: CircleHelp,
    title: "Status unavailable",
    description: "Show unavailable—not a positive or negative support claim.",
  },
  {
    icon: Clock,
    title: "Stale source",
    description: "Suppress MANAGED until currentness is restored.",
  },
  {
    icon: Split,
    title: "Conflicting records",
    description: "Stop the decision and route to Status & Releases.",
  },
];

export default function CoverageFinderSection({
  onSearchChange,
  onStatusChange,
  onScopeChange,
  onSortChange,
  onReset,
}: CoverageFinderProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All public states");
  const [scopeFilter, setScopeFilter] = useState("Any stated scope");
  const [sortBy, setSortBy] = useState("Market / jurisdiction");

  const handleReset = () => {
    setSearchTerm("");
    setStatusFilter("All public states");
    setScopeFilter("Any stated scope");
    setSortBy("Market / jurisdiction");
    if (onReset) onReset();
  };

  return (
    <section
      id="coverage-finder"
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
            eyebrow="Coverage finder"
            title="Find governed readiness by market and exact scope."
            description="Search locates conceptual records only. Free-text matching never infers support, readiness or managed availability."
          />
        </Reveal>

        {/* Finder Panel */}
        <Reveal delay={0.1}>
          <div className="rounded-[18px] border border-[#E5D9EB] bg-white p-6 sm:p-7 shadow-xs space-y-6">
            {/* Illustrative Notice Banner */}
            <div className="rounded-[10px] border border-[#FAD6C5] bg-[#FFF0E9] px-3.5 py-2.5 flex items-center gap-2.5">
              <FlaskConical className="w-4 h-4 text-[#D65A2C] shrink-0" />
              <span className="text-xs sm:text-[13px] font-bold text-[#18141B]">
                Illustrative status structure — not live Coverage.
              </span>
            </div>

            {/* Primary Filters Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4">
              {/* Market Search */}
              <div className="lg:col-span-8 flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#665F69] uppercase tracking-wider">
                  Market / jurisdiction
                </label>
                <div className="relative flex items-center rounded-xl border border-[#D8CEDD] bg-white px-3.5 py-2.5 focus-within:border-[#BF6735] focus-within:ring-2 focus-within:ring-[#BF6735]/15 transition-all">
                  <Search className="w-4 h-4 text-[#665F69] shrink-0 mr-2.5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      if (onSearchChange) onSearchChange(e.target.value);
                    }}
                    placeholder="Search governed market records"
                    className="w-full bg-transparent text-sm text-[#18141B] placeholder-[#8A818E] outline-none"
                  />
                </div>
              </div>

              {/* Locked Capability */}
              <div className="lg:col-span-4 flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#665F69] uppercase tracking-wider flex items-center justify-between">
                  <span>Capability</span>
                  <span className="text-[11px] font-normal text-[#8A818E] flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Locked
                  </span>
                </label>
                <div className="flex items-center justify-between rounded-xl border border-[#D8CEDD] bg-[#F9F6FA] px-3.5 py-2.5 text-sm font-medium text-[#18141B] select-none">
                  <span>Managed Compliance — locked</span>
                  <ChevronDown className="w-4 h-4 text-[#665F69]" />
                </div>
              </div>
            </div>

            {/* Secondary Filters Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 items-end">
              {/* Governed status */}
              <div className="lg:col-span-4 flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#665F69] uppercase tracking-wider">
                  Governed status
                </label>
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => {
                      setStatusFilter(e.target.value);
                      if (onStatusChange) onStatusChange(e.target.value);
                    }}
                    className="w-full appearance-none rounded-xl border border-[#D8CEDD] bg-white px-3.5 py-2.5 text-sm text-[#18141B] outline-none focus:border-[#BF6735] cursor-pointer pr-9"
                  >
                    <option value="All public states">All public states</option>
                    <option value="Managed">Managed</option>
                    <option value="Production only">Production only</option>
                    <option value="Status unavailable">Status unavailable</option>
                    <option value="Validation">Validation</option>
                    <option value="Pilot">Pilot</option>
                    <option value="Suspended">Suspended</option>
                    <option value="Withdrawn">Withdrawn</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#665F69] absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              {/* Controlled scope */}
              <div className="lg:col-span-4 flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#665F69] uppercase tracking-wider">
                  Controlled scope
                </label>
                <div className="relative">
                  <select
                    value={scopeFilter}
                    onChange={(e) => {
                      setScopeFilter(e.target.value);
                      if (onScopeChange) onScopeChange(e.target.value);
                    }}
                    className="w-full appearance-none rounded-xl border border-[#D8CEDD] bg-white px-3.5 py-2.5 text-sm text-[#18141B] outline-none focus:border-[#BF6735] cursor-pointer pr-9"
                  >
                    <option value="Any stated scope">Any stated scope</option>
                    <option value="Controlled specimen scope A">Controlled specimen scope A</option>
                    <option value="No managed scope published">No managed scope published</option>
                    <option value="Scope unavailable">Scope unavailable</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#665F69] absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              {/* Sort */}
              <div className="lg:col-span-3 flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#665F69] uppercase tracking-wider">
                  Sort
                </label>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      if (onSortChange) onSortChange(e.target.value);
                    }}
                    className="w-full appearance-none rounded-xl border border-[#D8CEDD] bg-white px-3.5 py-2.5 text-sm text-[#18141B] outline-none focus:border-[#BF6735] cursor-pointer pr-9"
                  >
                    <option value="Market / jurisdiction">Market / jurisdiction</option>
                    <option value="Governed status">Governed status</option>
                    <option value="Scope">Controlled scope</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#665F69] absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              {/* Reset Button */}
              <div className="lg:col-span-1">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#D8CEDD] bg-white px-3 py-2.5 text-sm font-semibold text-[#18141B] hover:bg-[#FAF6FC] hover:border-[#BF6735] transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-[#665F69]" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Search Policy Notice */}
            <div className="pt-1 border-t border-[#F0E8F5]">
              <p className="text-xs leading-relaxed text-[#665F69]">
                A matching name only locates a governed record. The record’s capability state, operational-readiness state, approved scope and currentness determine what may be shown.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 5 Finder States Cards from Figma */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5">
            {FINDER_STATES.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col gap-2 rounded-[14px] border border-[#E5D9EB] bg-white p-4 shadow-2xs hover:border-[#BF6735] transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-[#FAF3FF] text-[#301153] w-fit">
                    <Icon className={`w-5 h-5 ${st.spin ? "animate-spin text-[#BF6735]" : ""}`} />
                  </div>
                  <h4 className="text-sm font-bold text-[#18141B]">{st.title}</h4>
                  <p className="text-xs leading-relaxed text-[#665F69]">
                    {st.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
