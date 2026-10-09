"use client";

import React from "react";
import Link from "next/link";
import { Files, Search, ChevronDown } from "lucide-react";
import { NEWSROOM_ARCHIVE_DATA } from "./newsroom-data";
import { Reveal } from "./shared";

export default function ArchiveSection() {
  const { featuredRecord, searchBox } = NEWSROOM_ARCHIVE_DATA;

  return (
    <section id="official-archive" className="w-full bg-[#FAF3FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {NEWSROOM_ARCHIVE_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
              {NEWSROOM_ARCHIVE_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#605C66] max-w-4xl leading-relaxed mt-1">
              {NEWSROOM_ARCHIVE_DATA.description}
            </p>
          </Reveal>
        </div>

        {/* Featured Record Card */}
        <Reveal delay={0.12}>
          <div className="mt-8 sm:mt-10 rounded-2xl border border-[#E9E2EE] bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5 shadow-[0_2px_10px_rgba(40,10,60,0.02)]">
            <div className="w-12 h-12 rounded-xl bg-[#F3ECF7] flex items-center justify-center text-[#5B2A86] shrink-0">
              <Files className="w-6 h-6" aria-hidden="true" />
            </div>

            <div className="flex-1">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#C25E30] block">
                {featuredRecord.badge}
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-[#18141B] mt-1.5">
                {featuredRecord.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#605C66] leading-relaxed mt-2 max-w-4xl">
                {featuredRecord.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-4">
                {featuredRecord.actions.map((act, i) => (
                  <Link
                    key={i}
                    href={act.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-white border border-[#D8CEDD] hover:bg-gray-50 text-[#18141B] text-xs font-semibold transition-colors shadow-sm"
                  >
                    {act.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Discovery & Filter Box */}
        <Reveal delay={0.16}>
          <div className="mt-6 sm:mt-8 rounded-2xl border border-[#E5DFEA] bg-[#F7F2FA] p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-[#18141B]">
                {searchBox.title}
              </h3>
              <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#EADBEE] text-[#4A154B]">
                {searchBox.badge}
              </span>
            </div>

            {/* Search Input */}
            <div className="mt-5">
              <label className="block text-xs font-semibold text-[#18141B]">
                {searchBox.searchLabel}
              </label>
              <div className="relative mt-1.5 w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7582]" />
                <input
                  type="text"
                  disabled
                  placeholder={searchBox.searchPlaceholder}
                  className="w-full rounded-lg border border-[#D8CEDD] bg-white pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#18141B] placeholder-[#7A7582] cursor-not-allowed"
                />
              </div>
              <span className="block text-[11px] text-[#7A7582] mt-1.5">
                {searchBox.searchNote}
              </span>
            </div>

            {/* 4 Dropdowns Grid */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {searchBox.filters.map((flt, i) => (
                <div key={i}>
                  <label className="block text-xs font-semibold text-[#18141B]">
                    {flt.label}
                  </label>
                  <div className="mt-1 w-full rounded-lg border border-[#D8CEDD] bg-white px-3 py-2 text-xs text-[#605C66] flex items-center justify-between cursor-not-allowed">
                    <span className="truncate">{flt.value}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#7A7582] shrink-0" />
                  </div>
                  {flt.note && (
                    <span className="block text-[11px] text-[#7A7582] mt-1">
                      {flt.note}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Feed Status */}
            <div className="mt-6 pt-5 border-t border-[#E5DFEA]">
              <h4 className="text-xs font-bold text-[#18141B]">
                {searchBox.feedTitle}
              </h4>
              <p className="text-[11px] text-[#7A7582] mt-0.5 leading-normal">
                {searchBox.feedNote}
              </p>
            </div>

            {/* No-Matches Specimen Area */}
            <div className="mt-6 pt-5 border-t border-[#E5DFEA] flex flex-col md:flex-row md:items-start md:justify-between gap-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C25E30] block">
                  {searchBox.noMatches.tag}
                </span>
                <h4 className="text-base font-bold text-[#18141B] mt-1">
                  {searchBox.noMatches.title}
                </h4>
                <p className="text-xs text-[#605C66] mt-1 max-w-xl leading-relaxed">
                  {searchBox.noMatches.description}
                </p>
              </div>

              <div className="shrink-0 flex flex-col gap-2">
                <span className="text-xs font-semibold text-[#C25E30] cursor-not-allowed">
                  {searchBox.noMatches.resetLabel}
                </span>
                {searchBox.noMatches.routes.map((rt, i) => (
                  <div key={i}>
                    <Link
                      href={rt.href}
                      className="text-xs font-semibold text-[#18141B] hover:underline block"
                    >
                      {rt.label}
                    </Link>
                    <span className="text-[10px] text-[#7A7582] font-mono block">
                      {rt.path}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer note in box */}
            <p className="mt-6 pt-4 border-t border-[#E5DFEA] text-[11px] text-[#7A7582] leading-relaxed">
              {searchBox.footerNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
