"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionContainer, SectionHeader, Reveal, StatusPill, SecondaryButton } from "./shared";

const assetClasses = [
  "Logo",
  "Icon/mark",
  "Color",
  "Typography",
  "Photography",
  "Boilerplate",
  "Press pack",
];

const filtersConfig = [
  { label: "Class", defaultValue: "All classes", options: ["All classes", "Logo", "Icon/mark", "Color", "Typography", "Photography", "Boilerplate", "Press pack"] },
  { label: "Use case", defaultValue: "All use cases", options: ["All use cases", "Editorial", "Press", "Event", "Co-marketing", "Internal"] },
  { label: "Format", defaultValue: "All formats", options: ["All formats", "SVG", "PNG", "PDF", "EPS"] },
  { label: "Status", defaultValue: "All statuses", options: ["All statuses", "Current", "Superseded", "Withdrawn", "Unavailable"] },
  { label: "Current version", defaultValue: "Current only", options: ["Current only", "All versions"] },
  { label: "Sort", defaultValue: "Unavailable", options: ["Unavailable", "Name", "Date"] },
];

export default function AssetFinderSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [filterValues, setFilterValues] = useState<Record<string, string>>({
    Class: "All classes",
    "Use case": "All use cases",
    Format: "All formats",
    Status: "All statuses",
    "Current version": "Current only",
    Sort: "Unavailable",
  });

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedClass(null);
    setFilterValues({
      Class: "All classes",
      "Use case": "All use cases",
      Format: "All formats",
      Status: "All statuses",
      "Current version": "Current only",
      Sort: "Unavailable",
    });
  };

  return (
    <SectionContainer id="asset-finder" className="border-b border-[#D8CEDD]">
      <Reveal>
        <SectionHeader
          eyebrow="Browse approved assets"
          title="Find an asset by its source—not its popularity."
          description="Search public asset metadata. Availability depends on approval, currentness and the rights attached to each asset."
        />
      </Reveal>

      {/* Main Asset Discovery Box */}
      <Reveal delay={0.1}>
        <div className="w-full rounded-[26px] bg-white border border-[#D8CEDD] p-6 sm:p-8 lg:p-9 space-y-6 sm:space-y-7 shadow-xs">
          {/* Search input field */}
          <div className="space-y-2">
            <label htmlFor="asset-search" className="block text-sm font-semibold text-[#18141B]">
              Search assets
            </label>
            <div className="relative w-full flex items-center h-14 rounded-lg border border-[#D8CEDD] bg-white px-4.5 gap-3 focus-within:border-[#BF6735] focus-within:ring-2 focus-within:ring-[#BF6735]/15 transition-all">
              <div className="w-5 h-5 shrink-0 relative">
                <Image
                  src="/media-kit/icons/search.svg"
                  alt="Search icon"
                  width={20}
                  height={20}
                  className="w-5 h-5 opacity-60"
                />
              </div>
              <input
                id="asset-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by asset name, approved use or version"
                className="w-full h-full bg-transparent text-base text-[#18141B] placeholder-[#665F69] focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs font-semibold text-[#665F69] hover:text-[#18141B] px-2 py-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* 6 Filter Dropdowns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {filtersConfig.map((filter) => (
              <div key={filter.label} className="space-y-1.5">
                <span className="block text-xs font-semibold text-[#18141B]">
                  {filter.label}
                </span>
                <div className="relative">
                  <select
                    value={filterValues[filter.label]}
                    onChange={(e) =>
                      setFilterValues((prev) => ({
                        ...prev,
                        [filter.label]: e.target.value,
                      }))
                    }
                    className="w-full h-11 appearance-none rounded-lg border border-[#D8CEDD] bg-white pl-3.5 pr-8 text-sm text-[#665F69] font-normal focus:border-[#BF6735] focus:outline-none cursor-pointer"
                  >
                    {filter.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4">
                    <Image
                      src="/media-kit/icons/chevron-down.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4 opacity-50"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Asset Class Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {assetClasses.map((cls) => {
              const isSelected = selectedClass === cls;
              return (
                <button
                  key={cls}
                  type="button"
                  onClick={() => setSelectedClass(isSelected ? null : cls)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150 border ${
                    isSelected
                      ? "bg-[#301153] text-white border-[#301153]"
                      : "bg-[#FAF3FF] text-[#301153] border-[#D8CEDD] hover:bg-[#F3EEF7]"
                  }`}
                >
                  {cls}
                </button>
              );
            })}
          </div>

          {/* No Approved Registry Empty State */}
          <div className="w-full rounded-2xl bg-[#FAF3FF] p-8 sm:p-10 flex flex-col items-center text-center space-y-4 border border-[#D8CEDD]/60">
            <div className="w-9 h-9 relative">
              <Image
                src="/media-kit/icons/folder-search.svg"
                alt="Registry missing"
                width={36}
                height={36}
                className="w-9 h-9"
              />
            </div>

            <StatusPill text="UNAVAILABLE · REGISTRY MISSING" />

            <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] max-w-xl font-['Inter',sans-serif]">
              No current approved assets are available.
            </h3>

            <p className="text-sm sm:text-base leading-[1.6] text-[#665F69] max-w-3xl">
              A governed asset registry has not been supplied. Reference previews below are not search results or downloadable files. Approval, version and rights must be established before an asset can appear as current.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleClearFilters}
                className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#18141B] border-2 border-[#301153] hover:bg-[#F3EEF7] transition-all cursor-pointer shadow-2xs"
              >
                Clear filters
              </button>
              <SecondaryButton href="#usage-principles">
                Read Brand Guidance
              </SecondaryButton>
              <SecondaryButton href="#contact">
                Contact Media
              </SecondaryButton>
            </div>
          </div>

          {/* Footer Guidance Notes */}
          <div className="pt-2 space-y-2 border-t border-[#D8CEDD]/60">
            <p className="text-xs sm:text-sm leading-[1.6] text-[#665F69]">
              Source-backed sorting is unavailable until a registry is supplied. While metadata loads or its source is unavailable, downloads remain withheld—not treated as available. Guidance and FAQ remain readable without scripts.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#301153]">
              Adjacent resources: Newsroom · About ZoikoTax · Contact — destinations require an approved route.
            </p>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
