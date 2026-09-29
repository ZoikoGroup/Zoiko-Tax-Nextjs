"use client";

import React, { useState, useMemo } from "react";
import { Search, ChevronDown, Info, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionContainer, SectionHeader, StatusBadge } from "./shared";
import { eventsData, EventRecord } from "./status-data";

export default function LatestChangesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCapability, setSelectedCapability] = useState("all");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedEventType, setSelectedEventType] = useState("all");
  const [selectedMarket, setSelectedMarket] = useState("all");
  const [dateBasis, setDateBasis] = useState("Published");
  const [sortOrder, setSortOrder] = useState("latest");

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCapability("all");
    setSelectedState("all");
    setSelectedEventType("all");
    setSelectedMarket("all");
    setDateBasis("Published");
    setSortOrder("latest");
  };

  const filteredEvents = useMemo(() => {
    let result = [...eventsData];

    // Search query
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (e) =>
          e.id.toLowerCase().includes(q) ||
          e.market.toLowerCase().includes(q) ||
          e.capability.toLowerCase().includes(q) ||
          e.scope.toLowerCase().includes(q) ||
          e.summary.toLowerCase().includes(q)
      );
    }

    // Capability filter
    if (selectedCapability !== "all") {
      result = result.filter((e) => e.capability === selectedCapability);
    }

    // State filter
    if (selectedState !== "all") {
      result = result.filter((e) =>
        e.transition.toLowerCase().includes(selectedState.toLowerCase())
      );
    }

    // Market filter
    if (selectedMarket !== "all") {
      result = result.filter((e) => e.market === selectedMarket);
    }

    // Date basis filter: "Published" is the primary chronology view displaying all governed events
    if (dateBasis === "Effective") {
      result = result.filter((e) => e.timeType === "Effective");
    } else if (dateBasis === "Verified") {
      result = result.filter((e) => e.timeType === "Verified");
    }

    // Sort order
    if (sortOrder === "oldest") {
      result.reverse();
    }

    return result;
  }, [
    searchTerm,
    selectedCapability,
    selectedState,
    selectedMarket,
    dateBasis,
    sortOrder,
  ]);

  return (
    <SectionContainer id="latest-changes" patternBg className="bg-[#FAF8FA]">
      <div className="flex flex-col gap-9">
        <SectionHeader
          eyebrow="Public chronology"
          title="Latest governed changes"
          description="Filter by the dimensions that define an event. The examples below demonstrate the pattern only and do not represent live Coverage."
        />

        {/* Notice Banner */}
        <div className="flex items-start gap-3 rounded-xl bg-[#EEE2F5] p-4 text-[#18141B] border border-[#301153]/15">
          <Info className="h-5 w-5 shrink-0 text-[#301153] mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-bold text-[#301153]">
              Illustrative synthetic data
            </span>
            <p className="text-sm font-normal leading-[1.5] text-[#18141B]">
              All four populated records use fictional markets, IDs, scopes and non-real date labels. They are interface specimens, not live ZoikoTax Coverage data.
            </p>
          </div>
        </div>

        {/* Filter Panel */}
        <div className="flex flex-col gap-5 rounded-2xl border border-[#D8CEDD] bg-[#F7F3ED] p-5 sm:p-6 shadow-sm">
          {/* Row 1: Search, Capability, State, Event Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* Search */}
            <div className="lg:col-span-4 flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#665F69]">
                Search
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search event, market or capability"
                  className="h-12 w-full rounded-xl border border-[#D8CEDD] bg-white pl-4 pr-10 text-sm text-[#18141B] placeholder:text-[#665F69] focus:border-[#301153] focus:outline-none focus:ring-1 focus:ring-[#301153]"
                />
                <Search className="pointer-events-none absolute right-3.5 h-4 w-4 text-[#665F69]" />
              </div>
            </div>

            {/* Capability */}
            <div className="lg:col-span-3 flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#665F69]">
                Capability
              </label>
              <div className="relative">
                <select
                  value={selectedCapability}
                  onChange={(e) => setSelectedCapability(e.target.value)}
                  className="h-12 w-full appearance-none rounded-xl border border-[#D8CEDD] bg-white px-4 text-sm text-[#18141B] focus:border-[#301153] focus:outline-none focus:ring-1 focus:ring-[#301153]"
                >
                  <option value="all">All capabilities</option>
                  <option value="Tax Determination">Tax Determination</option>
                  <option value="Compliance & Filing">Compliance & Filing</option>
                  <option value="E-Invoicing & CTC">E-Invoicing & CTC</option>
                  <option value="Managed Compliance">Managed Compliance</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#665F69]" />
              </div>
            </div>

            {/* State */}
            <div className="lg:col-span-3 flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#665F69]">
                State
              </label>
              <div className="relative">
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="h-12 w-full appearance-none rounded-xl border border-[#D8CEDD] bg-white px-4 text-sm text-[#18141B] focus:border-[#301153] focus:outline-none focus:ring-1 focus:ring-[#301153]"
                >
                  <option value="all">All states</option>
                  <option value="pilot">PILOT</option>
                  <option value="suspended">SUSPENDED</option>
                  <option value="scope changed">SCOPE CHANGED</option>
                  <option value="managed">MANAGED</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#665F69]" />
              </div>
            </div>

            {/* Event Type */}
            <div className="lg:col-span-2 flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#665F69]">
                Event type
              </label>
              <div className="relative">
                <select
                  value={selectedEventType}
                  onChange={(e) => setSelectedEventType(e.target.value)}
                  className="h-12 w-full appearance-none rounded-xl border border-[#D8CEDD] bg-white px-4 text-sm text-[#18141B] focus:border-[#301153] focus:outline-none focus:ring-1 focus:ring-[#301153]"
                >
                  <option value="all">All event types</option>
                  <option value="transition">Transition</option>
                  <option value="scope">Scope update</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#665F69]" />
              </div>
            </div>
          </div>

          {/* Row 2: Market, Date Basis, Sort, Clear */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
            {/* Market */}
            <div className="lg:col-span-4 flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#665F69]">
                Market
              </label>
              <div className="relative">
                <select
                  value={selectedMarket}
                  onChange={(e) => setSelectedMarket(e.target.value)}
                  className="h-12 w-full appearance-none rounded-xl border border-[#D8CEDD] bg-white px-4 text-sm text-[#18141B] focus:border-[#301153] focus:outline-none focus:ring-1 focus:ring-[#301153]"
                >
                  <option value="all">All markets</option>
                  <option value="Illustrative Market A">Illustrative Market A</option>
                  <option value="Illustrative Market B">Illustrative Market B</option>
                  <option value="Illustrative Market C">Illustrative Market C</option>
                  <option value="Illustrative Market D">Illustrative Market D</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#665F69]" />
              </div>
            </div>

            {/* Date Basis */}
            <div className="lg:col-span-3 flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#665F69]">
                Date basis
              </label>
              <div className="relative">
                <select
                  value={dateBasis}
                  onChange={(e) => setDateBasis(e.target.value)}
                  className="h-12 w-full appearance-none rounded-xl border border-[#D8CEDD] bg-white px-4 text-sm text-[#18141B] focus:border-[#301153] focus:outline-none focus:ring-1 focus:ring-[#301153]"
                >
                  <option value="Published">Published</option>
                  <option value="Effective">Effective</option>
                  <option value="Verified">Verified</option>
                  <option value="all">All date bases</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#665F69]" />
              </div>
            </div>

            {/* Sort */}
            <div className="lg:col-span-3 flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#665F69]">
                Sort
              </label>
              <div className="relative">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="h-12 w-full appearance-none rounded-xl border border-[#D8CEDD] bg-white px-4 text-sm text-[#18141B] focus:border-[#301153] focus:outline-none focus:ring-1 focus:ring-[#301153]"
                >
                  <option value="latest">Latest illustrative label</option>
                  <option value="oldest">Oldest illustrative label</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#665F69]" />
              </div>
            </div>

            {/* Clear filters button */}
            <div className="lg:col-span-2 flex items-center h-12">
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-semibold text-[#301153] underline transition hover:text-[#D65A2C]"
              >
                Clear filters
              </button>
            </div>
          </div>
        </div>

        {/* Results summary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D8CEDD] pb-3">
          <span className="text-base font-semibold text-[#18141B]">
            {filteredEvents.length} illustrative events
          </span>
          <span className="text-sm text-[#665F69]">
            Showing chronology by published label · not current-state ranking
          </span>
        </div>

        {/* Event timeline */}
        <div className="relative flex flex-col gap-[14px]">
          {/* Continuous vertical timeline rail line */}
          {filteredEvents.length > 0 && (
            <div
              className="absolute left-[13px] top-0 bottom-0 w-[2px] bg-[#D8CEDD] pointer-events-none"
              aria-hidden="true"
            />
          )}

          {filteredEvents.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-[#D8CEDD] bg-white">
              <p className="text-base font-semibold text-[#18141B]">
                No events match the selected filters
              </p>
              <p className="text-sm text-[#665F69] mt-1">
                Try clearing your search term or filter criteria.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-sm font-semibold text-[#301153] underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            filteredEvents.map((evt) => (
              <div key={evt.id} className="relative flex items-start gap-[22px]">
                {/* Timeline rail marker */}
                <div className="relative z-10 flex items-center justify-center shrink-0 w-[28px] pt-[26px]">
                  <div
                    className="h-5 w-5 rounded-full bg-white border-[5px] transition-all shadow-sm"
                    style={{ borderColor: evt.markerColor }}
                  />
                </div>

                {/* Event card */}
                <div className="flex-1 flex flex-col gap-[18px] rounded-2xl border border-[#D8CEDD] bg-white p-6 shadow-[0px_6px_18px_0px_rgba(0,0,0,0.06)]">
                  {/* Event header */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-sm font-bold text-[#301153]">
                        {evt.id}
                      </span>
                      <StatusBadge label={evt.badge} />
                      {evt.subBadge && <StatusBadge label={evt.subBadge} />}
                    </div>
                    <StatusBadge label={evt.transition} />
                  </div>

                  {/* Facts row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8A818F]">
                        Market
                      </span>
                      <span className="text-base font-semibold text-[#18141B]">
                        {evt.market}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8A818F]">
                        Capability
                      </span>
                      <span className="text-base font-semibold text-[#18141B]">
                        {evt.capability}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8A818F]">
                        Time context
                      </span>
                      <span className="text-base font-semibold text-[#18141B]">
                        {evt.timeContext}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] w-full bg-[#EAE2ED]" />

                  {/* Scope & Summary */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                        Exact illustrative scope
                      </span>
                      <p className="text-sm font-normal leading-[1.5] text-[#18141B]">
                        {evt.scope}
                      </p>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                        Summary
                      </span>
                      <p className="text-sm font-normal leading-[1.5] text-[#665F69]">
                        {evt.summary}
                      </p>
                    </div>
                  </div>

                  {/* Event actions */}
                  <div className="flex flex-wrap items-center gap-[22px] pt-1">
                    {evt.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="inline-flex items-center gap-[7px] text-sm font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors group"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
