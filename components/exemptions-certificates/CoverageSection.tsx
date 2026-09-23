"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeader, StatusBadge, Reveal } from "./shared";
import { coverageData } from "./exemptions-data";
import { Search, Globe, AlertTriangle } from "lucide-react";

export default function CoverageSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = coverageData.items.filter((item) =>
    item.jurisdiction.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.scope.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="coverage" className="relative overflow-hidden bg-[#1D033B] py-12 sm:py-16 lg:py-28 text-white">
      {/* Background Image overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.25]">
        <Image
          src="/exemptions-certificates/coverage-bg.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            dark
            eyebrow={coverageData.eyebrow}
            title={coverageData.title}
            description={coverageData.description}
          />
        </Reveal>

        {/* Specimen Availability Directory Mockup Card */}
        <Reveal delay={0.15}>
          <div className="mt-8 sm:mt-12 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#260047]/90 p-4 sm:p-6 md:p-8 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-4 sm:pb-5">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Globe className="h-5 w-5 text-[#D65A2C]" />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {coverageData.directoryTitle}
                </h3>
              </div>
              <span className="self-start sm:self-auto rounded-full bg-[#9A5B12]/20 px-3 py-1 text-xs font-semibold text-[#FF9A52] border border-[#9A5B12]/30">
                {coverageData.directoryBadge}
              </span>
            </div>

            {/* Filter and Search Bar */}
            <div className="mt-5 sm:mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <input
                  type="text"
                  placeholder="Search territory..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#301153] py-2.5 pl-10 pr-4 text-xs sm:text-sm text-white placeholder:text-white/40 focus:border-[#D65A2C] focus:outline-none"
                />
              </div>
              <div className="rounded-xl border border-white/10 bg-[#301153] px-4 py-2.5 text-xs sm:text-sm text-white/80 text-center sm:text-left">
                <span>All Categories</span>
              </div>
            </div>

            {/* Directory Rows */}
            <div className="mt-5 sm:mt-6 divide-y divide-white/10 border-t border-white/10">
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-2 py-3.5 sm:py-4 sm:flex-row sm:items-center sm:justify-between hover:bg-white/5 px-2 rounded-lg transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                    <span className="text-xs sm:text-sm font-semibold text-white sm:w-44">
                      {item.jurisdiction}
                    </span>
                    <span className="text-xs text-white/70">
                      {item.scope}
                    </span>
                  </div>
                  <div className="mt-1 sm:mt-0 self-start sm:self-auto">
                    <StatusBadge status={item.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Warning Realism Callout */}
        <Reveal delay={0.25}>
          <div className="mt-6 sm:mt-8 flex items-start sm:items-center justify-center gap-2.5 sm:gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-4 text-center backdrop-blur-sm">
            <AlertTriangle className="h-4 w-4 shrink-0 text-[#FF9A52] mt-0.5 sm:mt-0" />
            <p className="text-xs sm:text-sm text-white/80 font-medium text-left sm:text-center">
              {coverageData.warning}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
