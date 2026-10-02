"use client";

import React, { useState } from "react";
import { ChevronDownIcon, SearchIcon } from "./icons";

const filters = [
  { label: "Integration surface", value: "All governed surfaces" },
  { label: "Scenario intent", value: "All recommended intents" },
  { label: "Data class", value: "Synthetic / approved fixtures" },
  { label: "Sort by", value: "Title / governed currentness" },
];

const walkthroughs = [
  {
    title: (
      <>
        Request / response<br className="hidden sm:inline" />
        walkthrough
      </>
    ),
    desc: "Understand how a safe input and its conceptual outcome relate to an authoritative contract.",
    surface: "API",
    route: "/developers/api/",
  },
  {
    title: "Event delivery walkthrough",
    desc: "Review conceptual delivery and failure paths without inventing event names or schemas.",
    surface: "Webhooks & Events",
    route: "/developers/webhooks-events/",
  },
  {
    title: "Async job walkthrough",
    desc: "Explore conceptual processing and partial outcomes with synthetic placeholders.",
    surface: "Bulk & Batch",
    route: "/developers/bulk-batch/",
  },
];

const emptyStates = [
  {
    badge: "ILLUSTRATIVE STATE · NO MATCHES",
    title: "No matching scenario",
    desc: "Clear filters or return to the authoritative docs. Zero results do not imply absent product capability or production Coverage.",
    link: "Reset public-safe filters ↗",
    href: "#scenario-finder",
  },
  {
    badge: "ILLUSTRATIVE STATE · REGISTRY UNAVAILABLE",
    title: "Continue with static documentation",
    desc: "Do not infer availability. Public contract guidance and conceptual walkthroughs remain the fallback.",
    link: "Read API Reference ↗",
    href: "/developers/api/",
  },
];

export default function ScenarioFinderSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleReset = () => {
    setSearchTerm("");
  };

  return (
    <section id="scenario-finder" className="relative w-full bg-[#FAF3FF] overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col items-start gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 max-w-[900px]">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
            SCENARIO FINDER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.15] font-bold text-[#18141B] tracking-tight font-['Inter',sans-serif]">
            Find a pattern. Keep its source in view.
          </h2>
          <p className="text-base sm:text-lg text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
            No approved registry inventory was supplied. The cards below are illustrative walkthroughs, not proof of released scenarios or live sandbox availability.
          </p>
        </div>

        {/* Search & Filter Container Box */}
        <div className="w-full p-6 sm:p-8 bg-white rounded-3xl border border-[#D8CEDD] flex flex-col items-start gap-6 shadow-sm">
          <span className="inline-block px-3 py-1 bg-[#FFF0E7] text-[#D65A2C] text-[11px] font-bold rounded-full uppercase tracking-wider font-['Inter',sans-serif]">
            RECOMMENDED PATTERN — NOT A LIVE ENVIRONMENT
          </span>

          {/* Search Input Box */}
          <div className="w-full flex flex-col items-start gap-2">
            <label className="text-xs font-bold text-[#18141B] font-['Inter',sans-serif]">
              Search public-safe scenario metadata
            </label>
            <div className="w-full h-12 px-4 rounded-xl border-2 border-[#3D2C4D] flex items-center gap-3 bg-white">
              <SearchIcon className="w-5 h-5 text-[#D65A2C] shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search titles, purpose, surface or controlled aliases"
                className="w-full bg-transparent text-sm sm:text-base text-[#18141B] placeholder-[#665F69] outline-none font-['Inter',sans-serif]"
              />
            </div>
          </div>

          {/* Filters Row */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[repeat(4,1fr)_auto] items-end gap-4">
            {filters.map((filter) => (
              <div key={filter.label} className="flex flex-col items-start gap-1.5 w-full">
                <span className="text-xs font-semibold text-[#18141B] font-['Inter',sans-serif]">{filter.label}</span>
                <div className="w-full h-12 px-4 bg-white rounded-lg border border-[#D8CEDD] flex justify-between items-center cursor-pointer hover:border-[#BF6735] transition-colors">
                  <span className="text-sm text-[#665F69] font-['Inter',sans-serif] truncate">{filter.value}</span>
                  <ChevronDownIcon className="w-4 h-4 text-[#665F69] shrink-0 ml-2" />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleReset}
              className="h-12 px-5 bg-white rounded-full border border-[#D8CEDD] flex items-center justify-center gap-2 hover:bg-[#FAF6FC] transition-colors cursor-pointer shrink-0 font-['Inter',sans-serif]"
            >
              <span className="text-sm font-semibold text-[#18141B]">Clear filters</span>
              <span className="text-[#D65A2C] text-sm font-bold">→</span>
            </button>
          </div>

          {/* Disclaimer Note */}
          <p className="text-xs sm:text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
            Result-state note: this is an illustrative display, not a live query. Search, URL state and analytics must not contain credentials, payloads, raw errors or customer, subscriber, tax, tenant or private operational data.
          </p>
        </div>

        {/* Illustrative Walkthroughs Header */}
        <div className="flex flex-col items-start gap-2 max-w-[900px] pt-4">
          <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
            Illustrative walkthroughs
          </h3>
          <p className="text-xs sm:text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
            Recommended example intents: request/response · async job · event delivery · error handling · migration/coexistence · reconciliation/evidence. These are not assertions of released scenarios.
          </p>
        </div>

        {/* 3 Walkthrough Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {walkthroughs.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-start gap-3">
                <span className="inline-block px-3 py-1 bg-[#FFF0E7] text-[#D65A2C] text-[11px] font-bold rounded-full uppercase tracking-wider font-['Inter',sans-serif]">
                  ILLUSTRATIVE EXAMPLE
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif] min-h-[56px] flex items-start">
                  {card.title}
                </h4>
                <p className="text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
                  {card.desc}
                </p>
              </div>

              {/* Card Metadata Details */}
              <div className="flex flex-col gap-3 py-3 border-t border-b border-[#F0EBF4]">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-[#665F69]">Integration surface</span>
                  <span className="text-sm font-medium text-[#18141B]">{card.surface}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-[#665F69]">Data requirement</span>
                  <span className="text-sm font-medium text-[#18141B]">Synthetic fixtures only in this walkthrough</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-[#665F69]">Authoritative contract route</span>
                  <span className="text-sm font-medium text-[#18141B] font-mono">{card.route}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-[#665F69]">Currentness</span>
                    <span className="text-sm font-medium text-[#18141B]">Not published</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-[#665F69]">Access</span>
                    <span className="text-sm font-medium text-[#18141B]">Separately governed</span>
                  </div>
                </div>
              </div>

              {/* Production Implication & Link */}
              <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-[#18141B]">Production implication: None</span>
                <a
                  href={card.route}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#D65A2C] hover:underline font-['Inter',sans-serif]"
                >
                  Read conceptual walkthrough ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Empty State Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {emptyStates.map((state, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-[#FAF3FF] rounded-2xl border border-[#D8CEDD] flex flex-col items-start gap-3.5"
            >
              <span className="inline-block px-3 py-1 bg-[#FFF0E7] text-[#D65A2C] text-[11px] font-bold rounded-full uppercase tracking-wider font-['Inter',sans-serif]">
                {state.badge}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                {state.title}
              </h4>
              <p className="text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
                {state.desc}
              </p>
              <a
                href={state.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#D65A2C] hover:underline font-['Inter',sans-serif] pt-1"
              >
                {state.link}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <p className="text-xs sm:text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
          Registry metadata is published only from governed sources, with owner, effective state and rollback controls. Ordinary editorial updates cannot establish technical truth, access, Trust or Coverage.
        </p>
      </div>
    </section>
  );
}
