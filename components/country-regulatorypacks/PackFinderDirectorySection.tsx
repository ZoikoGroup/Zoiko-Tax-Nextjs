"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, FileQuestion, Search, X } from "lucide-react";
import {
  SectionContainer,
  SectionHeader,
  PatternBackground,
  StatusChip,
  SecondaryButton,
  Reveal,
} from "./shared";
import {
  CAPABILITY_FILTER_CHOICES,
  STATUS_FILTER_CHOICES,
} from "./country-regulatorypacks-data";

export default function PackFinderDirectorySection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCapability, setSelectedCapability] = useState("All capabilities");
  const [selectedStatus, setSelectedStatus] = useState("All public states");
  const [selectedSort, setSelectedSort] = useState("Country/Jurisdiction A–Z");

  const [isCapabilityOpen, setIsCapabilityOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCapability("All capabilities");
    setSelectedStatus("All public states");
    setSelectedSort("Country/Jurisdiction A–Z");
    setIsCapabilityOpen(false);
    setIsStatusOpen(false);
    setIsSortOpen(false);
  };

  const isFiltered =
    searchQuery.trim().length > 0 ||
    selectedCapability !== "All capabilities" ||
    selectedStatus !== "All public states";

  return (
    <SectionContainer id="pack-finder" className="bg-[#FAF3FF] border-b border-[#D8CEDD] relative overflow-hidden">
      {/* Figma background pattern */}
      <PatternBackground />

      <div className="relative z-10">
        <Reveal>
          <div className="flex flex-col gap-10">
            {/* Section Heading */}
            <SectionHeader
              eyebrow="Pack finder"
              title="Find a jurisdiction. Check each capability."
              description="Discover governed packs by market, capability and public state. Public coverage information is not lead-gated."
              className="mb-0"
            />

            {/* Search and Filters Controls */}
            <div className="flex flex-col gap-5 w-full">
              {/* Controls Grid */}
              <div className="flex flex-col lg:flex-row lg:items-end gap-4 w-full">
                {/* Search Input */}
                <div className="flex flex-col gap-2.5 flex-1 lg:max-w-[480px]">
                  <label className="text-sm font-semibold text-[#18141B] font-['Inter',sans-serif]">
                    Search for country/jurisdiction/approved pack label
                  </label>
                  <div className="relative flex items-center h-12 w-full rounded-xl border border-[#D8CEDD] bg-white px-4 transition-focus focus-within:border-[#301153] shadow-sm">
                    <Search className="w-[18px] h-[18px] text-[#665F69] shrink-0 mr-3" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Enter a country, jurisdiction or pack label"
                      className="w-full bg-transparent text-[15px] text-[#18141B] placeholder-[#665F69] focus:outline-none font-['Inter',sans-serif]"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="text-[#665F69] hover:text-[#18141B]"
                        aria-label="Clear search"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Capability Dropdown */}
                <div className="relative flex flex-col gap-2.5 w-full sm:w-[240px]">
                  <label className="text-sm font-semibold text-[#18141B] font-['Inter',sans-serif]">
                    Capability
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsCapabilityOpen(!isCapabilityOpen);
                      setIsStatusOpen(false);
                      setIsSortOpen(false);
                    }}
                    className="flex h-12 w-full items-center justify-between rounded-xl border border-[#D8CEDD] bg-white px-4 text-[15px] text-[#665F69] shadow-sm transition hover:border-[#301153]"
                  >
                    <span className="truncate text-[#18141B]">{selectedCapability}</span>
                    <ChevronDown className="w-4 h-4 text-[#665F69] shrink-0 ml-2" />
                  </button>

                  {isCapabilityOpen && (
                    <div className="absolute top-[78px] left-0 z-50 w-full rounded-xl border border-[#D8CEDD] bg-white py-2 shadow-lg">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCapability("All capabilities");
                          setIsCapabilityOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-[#18141B] hover:bg-[#F3EDF7]"
                      >
                        All capabilities
                      </button>
                      {CAPABILITY_FILTER_CHOICES.map((cap) => (
                        <button
                          key={cap}
                          type="button"
                          onClick={() => {
                            setSelectedCapability(cap);
                            setIsCapabilityOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-[#18141B] hover:bg-[#F3EDF7]"
                        >
                          {cap}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Public Status Dropdown */}
                <div className="relative flex flex-col gap-2.5 w-full sm:w-[240px]">
                  <label className="text-sm font-semibold text-[#18141B] font-['Inter',sans-serif]">
                    Public status
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsStatusOpen(!isStatusOpen);
                      setIsCapabilityOpen(false);
                      setIsSortOpen(false);
                    }}
                    className="flex h-12 w-full items-center justify-between rounded-xl border border-[#D8CEDD] bg-white px-4 text-[15px] text-[#665F69] shadow-sm transition hover:border-[#301153]"
                  >
                    <span className="truncate text-[#18141B]">{selectedStatus}</span>
                    <ChevronDown className="w-4 h-4 text-[#665F69] shrink-0 ml-2" />
                  </button>

                  {isStatusOpen && (
                    <div className="absolute top-[78px] left-0 z-50 w-full rounded-xl border border-[#D8CEDD] bg-white py-2 shadow-lg">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedStatus("All public states");
                          setIsStatusOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-[#18141B] hover:bg-[#F3EDF7]"
                      >
                        All public states
                      </button>
                      {STATUS_FILTER_CHOICES.map((st) => (
                        <button
                          key={st.label}
                          type="button"
                          onClick={() => {
                            setSelectedStatus(st.label);
                            setIsStatusOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-[#18141B] hover:bg-[#F3EDF7]"
                        >
                          {st.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sort Dropdown */}
                <div className="relative flex flex-col gap-2.5 w-full sm:w-[240px]">
                  <label className="text-sm font-semibold text-[#18141B] font-['Inter',sans-serif]">
                    Sort
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSortOpen(!isSortOpen);
                      setIsCapabilityOpen(false);
                      setIsStatusOpen(false);
                    }}
                    className="flex h-12 w-full items-center justify-between rounded-xl border border-[#D8CEDD] bg-white px-4 text-[15px] text-[#665F69] shadow-sm transition hover:border-[#301153]"
                  >
                    <span className="truncate text-[#18141B]">{selectedSort}</span>
                    <ChevronDown className="w-4 h-4 text-[#665F69] shrink-0 ml-2" />
                  </button>

                  {isSortOpen && (
                    <div className="absolute top-[78px] left-0 z-50 w-full rounded-xl border border-[#D8CEDD] bg-white py-2 shadow-lg">
                      {["Country/Jurisdiction A–Z", "Country/Jurisdiction Z–A", "Recently Updated"].map((sortOption) => (
                        <button
                          key={sortOption}
                          type="button"
                          onClick={() => {
                            setSelectedSort(sortOption);
                            setIsSortOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-[#18141B] hover:bg-[#F3EDF7]"
                        >
                          {sortOption}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Filter Guidance & Reset Action */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <p className="text-sm text-[#665F69] leading-relaxed font-['Inter',sans-serif]">
                  Matches do not establish support. Counts, when supplied, are filtered records—not supported countries.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors shrink-0"
                >
                  <span>Clear / reset filters</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Available Filter Choices Card */}
              <div className="rounded-2xl bg-white/45 backdrop-blur-xs p-5 sm:p-6 border border-[#D8CEDD] flex flex-col gap-3">
                <span className="text-[13px] font-bold uppercase tracking-wider text-[#665F69] font-['Inter',sans-serif]">
                  FILTER CHOICES
                </span>

                {/* Capability Choices */}
                <div className="flex flex-wrap items-center gap-2">
                  {CAPABILITY_FILTER_CHOICES.map((choice) => (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => setSelectedCapability(selectedCapability === choice ? "All capabilities" : choice)}
                      className={`rounded-full px-3 py-1.5 text-[13px] font-bold border transition ${
                        selectedCapability === choice
                          ? "bg-[#301153] text-white border-[#301153]"
                          : "bg-[#F3EDF7] text-[#301153] border-transparent hover:border-[#301153]"
                      }`}
                    >
                      {choice}
                    </button>
                  ))}
                </div>

                {/* Public Status Choices */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {STATUS_FILTER_CHOICES.map((st) => (
                    <button
                      key={st.label}
                      type="button"
                      onClick={() => setSelectedStatus(selectedStatus === st.label ? "All public states" : st.label)}
                      className={`rounded-full px-3 py-1 text-[13px] font-bold transition border ${
                        selectedStatus === st.label
                          ? "ring-2 ring-[#301153] border-transparent"
                          : "border-transparent"
                      } ${st.bg} ${st.text}`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>

                <p className="text-sm text-[#665F69] pt-1">
                  Only source-supported states would appear in actual results. Controls are shown as a static presentation.
                </p>
              </div>
            </div>

            {/* Pack Directory Card */}
            <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col gap-6">
              {/* Directory Heading */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#D8CEDD]">
                <h3 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#18141B] font-['Inter',sans-serif]">
                  Pack directory
                </h3>
                <StatusChip label="Status unavailable" className="bg-[#F3EDF7] text-[#665F69]" />
              </div>

              {/* Source Unavailable State Container */}
              <div className="rounded-2xl bg-[#F3EDF7] p-6 sm:p-7 lg:p-8 flex flex-col sm:flex-row items-start gap-6 border border-[#D8CEDD]/60">
                {/* Source Indicator Icon Box */}
                <div className="w-[52px] h-[52px] rounded-[10px] bg-white flex items-center justify-center shrink-0 shadow-xs border border-[#D8CEDD]">
                  <FileQuestion className="w-[26px] h-[26px] text-[#301153]" />
                </div>

                {/* Source Message & Action */}
                <div className="flex flex-col gap-3 flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#18141B] font-['Inter',sans-serif]">
                    Current pack source is not available
                  </h4>
                  <p className="text-base sm:text-[16px] text-[#665F69] leading-[1.55] font-['Inter',sans-serif]">
                    An approved current pack source has not been supplied for this design. No market records or capability availability claims are shown. This is a source-unavailable state, not a “no matching packs” result.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <SecondaryButton href="/coverage-overview">
                      View Coverage Overview
                    </SecondaryButton>

                    <Link
                      href="/status-and-releases"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors"
                    >
                      <span>View Status & Releases</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Directory Records Rule */}
              <p className="text-sm text-[#665F69] leading-[1.55] font-['Inter',sans-serif]">
                When supplied, directory records show the approved market label, public pack identity, independent capability summaries, scope, updated/effective/release context and a View Pack Details action. No blanket overall market status is inferred.
              </p>

              {/* Directory State Examples */}
              <div className="flex flex-col lg:flex-row gap-4 pt-2">
                <div className="flex-1 rounded-[10px] border border-[#D8CEDD] p-5 flex flex-col gap-2 bg-[#FAF8FA]">
                  <span className="text-[13px] font-bold text-[#301153] uppercase tracking-wide">
                    STATE EXAMPLE · NO MATCHES
                  </span>
                  <p className="text-sm text-[#665F69] leading-relaxed">
                    No packs match the current search and filters. Reset filters or view Coverage Overview. This result does not by itself mean the market is unsupported.
                  </p>
                </div>

                <div className="w-full lg:w-[360px] rounded-[10px] border border-[#D8CEDD] p-5 flex flex-col gap-2 bg-[#FAF8FA]">
                  <span className="text-[13px] font-bold text-[#301153] uppercase tracking-wide">
                    STATE EXAMPLE · LOADING
                  </span>
                  <p className="text-sm text-[#665F69] leading-relaxed">
                    Retrieving governed pack records. No availability is inferred while the source is loading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
