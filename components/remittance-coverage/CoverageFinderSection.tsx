"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, ChevronDown, RotateCcw, Lock } from "lucide-react";
import { Reveal, SectionHeader, StatusTag } from "./shared";

interface CoverageFinderSectionProps {
  onSearchChange?: (val: string) => void;
  onStatusChange?: (val: string) => void;
  onScopeChange?: (val: string) => void;
  onSortChange?: (val: string) => void;
  onReset?: () => void;
}

export default function CoverageFinderSection({
  onSearchChange,
  onStatusChange,
  onScopeChange,
  onSortChange,
  onReset,
}: CoverageFinderSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Governed status");
  const [scopeFilter, setScopeFilter] = useState("Controlled scope");
  const [sortOrder, setSortOrder] = useState("Sort: Identity A–Z");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    if (onSearchChange) onSearchChange(val);
  };

  const handleStatusSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setStatusFilter(val);
    if (onStatusChange) onStatusChange(val);
  };

  const handleScopeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setScopeFilter(val);
    if (onScopeChange) onScopeChange(val);
  };

  const handleSortSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSortOrder(val);
    if (onSortChange) onSortChange(val);
  };

  const handleResetClick = () => {
    setSearchTerm("");
    setStatusFilter("Governed status");
    setScopeFilter("Controlled scope");
    setSortOrder("Sort: Identity A–Z");
    if (onReset) onReset();
  };

  return (
    <section
      id="coverage-finder"
      className="relative w-full overflow-hidden bg-[#FAF8FA] border-b border-[#E5D9EB] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-25"
        aria-hidden="true"
      >
        <Image
          src="/remittance-coverage/pattern-bg.png"
          alt="Remittance pattern background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16 space-y-10 sm:space-y-12">
        <Reveal>
          {/* Section Heading */}
          <SectionHeader
            eyebrow="Capability readiness finder"
            title="Find governed Remittance readiness."
            description="Select a market or jurisdiction explicitly, then review capability-specific state, scope and source currentness. Search suggestions do not establish identity or readiness."
          />
        </Reveal>

        <Reveal delay={0.1}>
          {/* Coverage Finder Card */}
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-6 sm:p-7 lg:p-8 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] space-y-6">
            {/* Finder Title Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-[22px] font-bold text-[#18141B] font-['Inter',sans-serif]">
                  Remittance Coverage Finder
                </h3>
                <p className="text-xs sm:text-[13px] font-semibold text-[#D65A2C] mt-1">
                  Illustrative status structure — not live Coverage.
                </p>
              </div>

              {/* Status Tag: Capability locked · Remittance */}
              <div className="self-start sm:self-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EEE7F7] text-[#301153] text-xs font-bold border border-[#D8CEDD]">
                  <Lock className="w-3.5 h-3.5 text-[#301153]" />
                  <span>Capability locked · Remittance</span>
                </span>
              </div>
            </div>

            {/* Finder Controls Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 pt-2">
              {/* Market search input */}
              <div className="lg:col-span-4 relative flex items-center">
                <Search className="w-4 h-4 text-[#665F69] absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search exact country or jurisdiction identity"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#D8CEDD] bg-white text-sm text-[#18141B] placeholder-[#665F69] focus:outline-hidden focus:ring-2 focus:ring-[#BF6735] focus:border-transparent transition-all"
                />
              </div>

              {/* Capability locked indicator */}
              <div className="lg:col-span-2 flex items-center gap-2.5 px-4 py-3.5 rounded-xl border border-[#D8CEDD] bg-[#F7F0F8] text-[#18141B] text-sm font-semibold select-none">
                <Lock className="w-4 h-4 text-[#665F69] shrink-0" />
                <span className="truncate">Remittance</span>
              </div>

              {/* Governed status dropdown */}
              <div className="lg:col-span-2 relative">
                <select
                  value={statusFilter}
                  onChange={handleStatusSelect}
                  className="w-full appearance-none px-4 py-3.5 pr-10 rounded-xl border border-[#D8CEDD] bg-white text-sm font-medium text-[#18141B] focus:outline-hidden focus:ring-2 focus:ring-[#BF6735] cursor-pointer"
                >
                  <option value="Governed status">Governed status</option>
                  <option value="Research">Research</option>
                  <option value="Validation">Validation</option>
                  <option value="Pilot">Pilot</option>
                  <option value="Production">Production</option>
                  <option value="Managed">Managed</option>
                  <option value="Suspended">Suspended</option>
                  <option value="Withdrawn">Withdrawn</option>
                  <option value="Status unavailable">Status unavailable</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#665F69] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Controlled scope dropdown */}
              <div className="lg:col-span-2 relative">
                <select
                  value={scopeFilter}
                  onChange={handleScopeSelect}
                  className="w-full appearance-none px-4 py-3.5 pr-10 rounded-xl border border-[#D8CEDD] bg-white text-sm font-medium text-[#18141B] focus:outline-hidden focus:ring-2 focus:ring-[#BF6735] cursor-pointer"
                >
                  <option value="Controlled scope">Controlled scope</option>
                  <option value="stated">Stated scope</option>
                  <option value="unknown">Unknown scope</option>
                  <option value="conflict">Conflicting scope</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#665F69] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Sort dropdown */}
              <div className="lg:col-span-2 relative">
                <select
                  value={sortOrder}
                  onChange={handleSortSelect}
                  className="w-full appearance-none px-4 py-3.5 pr-10 rounded-xl border border-[#D8CEDD] bg-white text-sm font-medium text-[#18141B] focus:outline-hidden focus:ring-2 focus:ring-[#BF6735] cursor-pointer"
                >
                  <option value="Sort: Identity A–Z">Sort: Identity A–Z</option>
                  <option value="Sort: Identity Z–A">Sort: Identity Z–A</option>
                  <option value="Sort: Status">Sort: Status</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#665F69] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Finder Guidance & Reset */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1 border-t border-[#F2EBF5]">
              <p className="text-xs sm:text-[13px] leading-[1.45] text-[#665F69] max-w-[890px]">
                Free-text may offer candidate identities only. A user must select an exact governed identity; partial matching never infers a market, jurisdiction or Production state.
              </p>

              <button
                type="button"
                onClick={handleResetClick}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#D65A2C] hover:text-[#a9441d] transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
              >
                <span>Reset</span>
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Finder States Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <StatusTag status="Loading" iconName="loader-circle" />
              <StatusTag status="No matching result" iconName="search-x" />
              <StatusTag status="Status unavailable" iconName="circle-help" />
              <StatusTag status="Stale source" iconName="clock-alert" />
              <StatusTag status="Conflicting records" iconName="git-compare-arrows" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
