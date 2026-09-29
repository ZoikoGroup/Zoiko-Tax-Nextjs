"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, ChevronDown, RotateCcw, Info } from "lucide-react";
import { SectionContainer, SectionHeader, CoverageStateBadge, SyntheticBadge, Reveal } from "./shared";
import { ILLUSTRATIVE_MARKETS, CoverageState } from "./coverage-data";

export default function ExploreCoverageSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCapability, setSelectedCapability] = useState("all");
  const [selectedState, setSelectedState] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredMarkets = useMemo(() => {
    return ILLUSTRATIVE_MARKETS.filter((item) => {
      // Search filter
      const matchesSearch = item.market
        .toLowerCase()
        .includes(searchQuery.toLowerCase().trim());
      if (!matchesSearch) return false;

      // Capability filter
      if (selectedCapability !== "all" && selectedState !== "all") {
        const stateKey = selectedCapability as keyof typeof item.capabilities;
        if (item.capabilities[stateKey] !== selectedState) return false;
      } else if (selectedState !== "all") {
        // Any capability has this state
        const hasState = Object.values(item.capabilities).includes(
          selectedState as CoverageState
        );
        if (!hasState) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortOrder === "asc") {
        return a.market.localeCompare(b.market);
      }
      return b.market.localeCompare(a.market);
    });
  }, [searchQuery, selectedCapability, selectedState, sortOrder]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCapability("all");
    setSelectedState("all");
    setSortOrder("asc");
  };

  const totalRecords = filteredMarkets.length * 6;

  return (
    <SectionContainer id="coverage-explorer" className="relative overflow-hidden bg-[#FAF7FC] border-b border-[#DDD2E2]/60">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply" aria-hidden="true">
        <Image
          src="/coverage-overview/section-pattern-bg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative">
        <Reveal>
          <div className="space-y-10 sm:space-y-12">
            {/* Header */}
            <SectionHeader
              eyebrow="PUBLIC PRODUCT PROOF"
              title="Explore current Coverage"
              description="Search the public registry by market and capability. The specimen below demonstrates the interface with clearly labeled synthetic data; it does not represent live ZoikoTax availability."
            />

            {/* Registry Card */}
            <div className="rounded-[26px] border border-[#DDD2E2] bg-white p-5 sm:p-7 shadow-[0px_8px_24px_0px_rgba(34,11,51,0.08)] space-y-6">
              {/* Evidence Note Banner */}
              <div className="rounded-[10px] border border-[#F1CDBD] bg-[#FFF0E8] p-4 flex items-center gap-3">
                <Info className="w-5 h-5 text-[#D65A2C] shrink-0" />
                <p className="text-xs sm:text-[13px] font-semibold text-[#18141B] leading-snug">
                  Illustrative synthetic data · Illustrative Market A/B/C/D only · Not live Coverage data
                </p>
              </div>

              {/* Search and Filters Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
                {/* Search */}
                <div className="lg:col-span-1 space-y-1.5">
                  <label htmlFor="search-input" className="block text-xs font-bold text-[#18141B]">
                    Search Coverage
                  </label>
                  <div className="relative flex items-center">
                    <Search className="absolute left-3.5 w-4 h-4 text-[#706876] pointer-events-none" />
                    <input
                      id="search-input"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search illustrative market"
                      className="w-full h-12 rounded-[10px] border border-[#DDD2E2] bg-white pl-10 pr-3 text-sm text-[#18141B] placeholder-[#706876] focus:outline-none focus:border-[#5A2388] transition-colors"
                    />
                  </div>
                </div>

                {/* Capability Filter */}
                <div className="space-y-1.5">
                  <label htmlFor="capability-select" className="block text-xs font-bold text-[#18141B]">
                    Capability
                  </label>
                  <div className="relative flex items-center">
                    <select
                      id="capability-select"
                      value={selectedCapability}
                      onChange={(e) => setSelectedCapability(e.target.value)}
                      className="w-full h-12 rounded-[10px] border border-[#DDD2E2] bg-white px-3.5 pr-8 text-sm text-[#4E4852] appearance-none focus:outline-none focus:border-[#5A2388] transition-colors cursor-pointer"
                    >
                      <option value="all">All capabilities</option>
                      <option value="determination">Tax Determination</option>
                      <option value="obligations">Regulatory Obligations</option>
                      <option value="filing">Compliance & Filing</option>
                      <option value="remittance">Remittance</option>
                      <option value="eInvoicing">E-Invoicing/CTC</option>
                      <option value="managed">Managed Compliance</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 w-4 h-4 text-[#706876] pointer-events-none" />
                  </div>
                </div>

                {/* State Filter */}
                <div className="space-y-1.5">
                  <label htmlFor="state-select" className="block text-xs font-bold text-[#18141B]">
                    State
                  </label>
                  <div className="relative flex items-center">
                    <select
                      id="state-select"
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full h-12 rounded-[10px] border border-[#DDD2E2] bg-white px-3.5 pr-8 text-sm text-[#4E4852] appearance-none focus:outline-none focus:border-[#5A2388] transition-colors cursor-pointer"
                    >
                      <option value="all">All states</option>
                      <option value="PRODUCTION">PRODUCTION</option>
                      <option value="MANAGED">MANAGED</option>
                      <option value="PILOT">PILOT</option>
                      <option value="VALIDATION">VALIDATION</option>
                      <option value="RESEARCH">RESEARCH</option>
                      <option value="SUSPENDED">SUSPENDED</option>
                      <option value="WITHDRAWN">WITHDRAWN</option>
                      <option value="STATUS UNAVAILABLE">STATUS UNAVAILABLE</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 w-4 h-4 text-[#706876] pointer-events-none" />
                  </div>
                </div>

                {/* Region Filter (Disabled in spec) */}
                <div className="space-y-1.5 opacity-50">
                  <span className="block text-xs font-bold text-[#18141B]">
                    Region
                  </span>
                  <div className="w-full h-12 rounded-[10px] border border-[#DDD2E2] bg-[#F3F1F4] px-3.5 flex items-center justify-between text-sm text-[#706876] cursor-not-allowed">
                    <span className="truncate">Available with live data</span>
                    <ChevronDown className="w-4 h-4 text-[#706876] shrink-0" />
                  </div>
                </div>

                {/* Sort Order */}
                <div className="space-y-1.5">
                  <label htmlFor="sort-select" className="block text-xs font-bold text-[#18141B]">
                    Sort
                  </label>
                  <div className="relative flex items-center">
                    <select
                      id="sort-select"
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
                      className="w-full h-12 rounded-[10px] border border-[#DDD2E2] bg-white px-3.5 pr-8 text-sm text-[#4E4852] appearance-none focus:outline-none focus:border-[#5A2388] transition-colors cursor-pointer"
                    >
                      <option value="asc">Market A–Z</option>
                      <option value="desc">Market Z–A</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 w-4 h-4 text-[#706876] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Result Summary and Clear Filters */}
              <div className="flex items-center justify-between border-t border-[#F0EDF3] pt-4">
                <span className="text-xs sm:text-sm font-bold text-[#18141B]">
                  {filteredMarkets.length} illustrative {filteredMarkets.length === 1 ? "market" : "markets"} · {totalRecords} capability records
                </span>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#5A2388] hover:text-[#431868] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Clear filters</span>
                </button>
              </div>

              {/* Capability Matrix Table */}
              <div className="rounded-[16px] border border-[#DDD2E2] overflow-hidden overflow-x-auto shadow-2xs">
                <table className="w-full min-w-[860px] border-collapse text-left">
                  <thead>
                    <tr className="bg-[#21053E] text-white">
                      <th className="py-4 px-5 text-xs font-extrabold uppercase tracking-wider w-[220px]">
                        MARKET
                      </th>
                      <th className="py-4 px-3 text-[11px] font-bold text-center tracking-tight">
                        Determination
                      </th>
                      <th className="py-4 px-3 text-[11px] font-bold text-center tracking-tight">
                        Obligations
                      </th>
                      <th className="py-4 px-3 text-[11px] font-bold text-center tracking-tight">
                        Filing
                      </th>
                      <th className="py-4 px-3 text-[11px] font-bold text-center tracking-tight">
                        Remittance
                      </th>
                      <th className="py-4 px-3 text-[11px] font-bold text-center tracking-tight">
                        E-Invoicing/CTC
                      </th>
                      <th className="py-4 px-3 text-[11px] font-bold text-center tracking-tight">
                        Managed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMarkets.length > 0 ? (
                      filteredMarkets.map((row, idx) => (
                        <tr
                          key={row.market}
                          className={`border-b border-[#ECE4EF] ${
                            idx % 2 === 0 ? "bg-white" : "bg-[#FBF8FC]"
                          } hover:bg-[#FAF3FF] transition-colors`}
                        >
                          <td className="py-4 px-5 align-middle">
                            <div className="flex flex-col gap-0.5">
                              <span className="text-sm font-bold text-[#18141B]">
                                {row.market}
                              </span>
                              {row.isSynthetic && <SyntheticBadge />}
                            </div>
                          </td>
                          <td className="py-4 px-2 text-center align-middle">
                            <CoverageStateBadge state={row.capabilities.determination} size="sm" />
                          </td>
                          <td className="py-4 px-2 text-center align-middle">
                            <CoverageStateBadge state={row.capabilities.obligations} size="sm" />
                          </td>
                          <td className="py-4 px-2 text-center align-middle">
                            <CoverageStateBadge state={row.capabilities.filing} size="sm" />
                          </td>
                          <td className="py-4 px-2 text-center align-middle">
                            <CoverageStateBadge state={row.capabilities.remittance} size="sm" />
                          </td>
                          <td className="py-4 px-2 text-center align-middle">
                            <CoverageStateBadge state={row.capabilities.eInvoicing} size="sm" />
                          </td>
                          <td className="py-4 px-2 text-center align-middle">
                            <CoverageStateBadge state={row.capabilities.managed} size="sm" />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-sm text-[#706876]">
                          No markets match your current filter selection. Try clearing filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Disclaimer Note */}
              <p className="text-xs sm:text-[13px] font-normal leading-[1.5] text-[#706876] pt-1">
                No overall supported-country badge is shown because readiness is capability-specific. Open a market record to inspect scope, limitations, verification context and governed source.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
