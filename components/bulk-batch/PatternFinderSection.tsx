"use client";

import React, { useState } from "react";
import { Search, ChevronDown, BookOpen, ArrowRight } from "lucide-react";
import { SectionContainer, SectionHeader, SecondaryButton } from "./shared";
import { FINDER_SELECTS, FINDER_NOTE, RECOVERY_CARDS } from "./types";

export default function PatternFinderSection() {
  const [query, setQuery] = useState("");

  return (
    <SectionContainer className="bg-[#FAF3FF]" id="pattern-finder">
      <div className="flex flex-col items-start gap-8">
        <SectionHeader
          eyebrow="02 / FINDER & PATTERN REGISTRY"
          title="Start with a verified pattern."
          description="Search by verified label, integration family or domain. Only a governed registry can publish pattern names, versions and supported taxonomy."
        />

        {/* Finder panel */}
        <div className="w-full rounded-3xl bg-white p-7 flex flex-col items-start gap-5">
          <div className="w-full flex flex-col items-start gap-2">
            <label
              htmlFor="bulk-pattern-search"
              className="text-xs font-semibold text-[#18141B] font-['Inter',sans-serif]"
            >
              Search verified label, family or domain
            </label>
            <div className="w-full flex items-center gap-3 rounded-lg bg-white p-4 outline outline-2 -outline-offset-2 outline-[#301153]">
              <Search className="w-4 h-4 shrink-0 text-[#665F69]" strokeWidth={1.5} />
              <input
                id="bulk-pattern-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search governed public patterns"
                className="w-full bg-transparent text-base text-[#18141B] placeholder:text-[#665F69] outline-none font-['Inter',sans-serif]"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FINDER_SELECTS.map((sel) => (
              <div key={sel.label} className="flex flex-col items-start gap-2">
                <span className="text-xs font-semibold text-[#665F69] font-['Inter',sans-serif]">{sel.label}</span>
                <button
                  type="button"
                  className="w-full flex items-center justify-between rounded-lg bg-white p-3.5 outline outline-1 -outline-offset-1 outline-[#D8CEDD] text-left"
                >
                  <span className="text-sm text-[#665F69] font-['Inter',sans-serif]">{sel.value}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 text-[#665F69]" strokeWidth={1.5} />
                </button>
              </div>
            ))}
          </div>

          <p className="text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">{FINDER_NOTE}</p>

          {/* Empty-state panel */}
          <div className="w-full rounded-2xl bg-white p-8 outline outline-1 -outline-offset-1 outline-[#D8CEDD] flex flex-col items-center gap-3.5 text-center">
            <BookOpen className="w-7 h-7 text-[#D65A2C]" strokeWidth={1.5} />
            <h3 className="text-2xl text-[#18141B] font-['Inter',sans-serif]">
              No governed public pattern entries supplied in this view
            </h3>
            <p className="max-w-[820px] text-base leading-6 text-[#665F69] font-['Inter',sans-serif]">
              Use the conceptual guidance below and the API Reference or Integration Guides. An empty view
              does not establish unsupported capability or production availability.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <SecondaryButton href="/developers/api/">Read API Reference</SecondaryButton>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#18141B] outline outline-1 -outline-offset-1 outline-[#D8CEDD] hover:bg-[#FAF6FC] transition-all duration-200 active:scale-[0.98] cursor-pointer font-['Inter',sans-serif]"
              >
                <span>Reset filters</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-[#D65A2C]" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Illustrative recovery cards */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {RECOVERY_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex-1 rounded-2xl bg-white p-6 outline outline-1 -outline-offset-1 outline-[#D8CEDD] flex flex-col items-start gap-3.5"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
                ILLUSTRATIVE RECOVERY · NOT SERVICE STATUS
              </span>
              <h3 className="text-xl leading-7 text-[#18141B] font-['Inter',sans-serif]">{card.title}</h3>
              <p className="text-base leading-6 text-[#665F69] font-['Inter',sans-serif]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
