"use client";

import React from "react";
import { Search, Check } from "lucide-react";
import { LOOKUP_DATA, INDEX_DATA, REGISTRY_EMPTY_STATE, FEATURED_EMPTY_STATE } from "./glossary-data";
import { SectionContainer, PrimaryButton, Reveal } from "./shared";

export default function SearchAndIndexSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/glossary/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-[#AC4F25]">{LOOKUP_DATA.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{LOOKUP_DATA.title}</h2>
            <p className="text-base leading-[1.6] text-[#665F69]">{LOOKUP_DATA.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-6 sm:p-8 flex flex-col gap-6">
            <p className="text-[15px] font-semibold text-[#18141B]">{LOOKUP_DATA.searchLabel}</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex-1 flex items-center gap-3 h-[58px] rounded-xl border-2 border-[#301153] px-5">
                <Search className="h-5 w-5 shrink-0 text-[#665F69]" aria-hidden="true" />
                <span className="flex-1 text-base text-[#665F69]">{LOOKUP_DATA.searchPlaceholder}</span>
                <span className="text-xs text-[#665F69]">{LOOKUP_DATA.focusPreview}</span>
              </div>
              <PrimaryButton className="shrink-0">Search</PrimaryButton>
            </div>
            <p className="text-sm leading-[1.6] text-[#665F69]">{LOOKUP_DATA.searchHelper}</p>

            <div className="flex flex-wrap gap-2.5">
              {LOOKUP_DATA.categories.map((cat, i) => (
                <span
                  key={cat}
                  className={
                    i === 0
                      ? "inline-flex items-center gap-1.5 rounded-full bg-[#301153] text-white px-4 py-2.5 text-sm font-semibold"
                      : "inline-flex items-center gap-1.5 rounded-full bg-white border border-[#D8CEDD] text-[#18141B] px-4 py-2.5 text-sm font-semibold"
                  }
                >
                  {i === 0 && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                  {cat}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-[#665F69]">Sort by</span>
                <span className="font-semibold text-[#301153]">{LOOKUP_DATA.sortBy.selected}</span>
                <span className="text-[#665F69]">{LOOKUP_DATA.sortBy.other}</span>
              </div>
              <span className="font-semibold text-[#AC4F25] cursor-pointer">{LOOKUP_DATA.clearLabel}</span>
            </div>

            <p className="text-[13px] leading-[1.5] text-[#665F69]">{LOOKUP_DATA.taxonomyNote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#18141B]">{INDEX_DATA.title}</h3>
              <span className="text-sm text-[#665F69]">{INDEX_DATA.subtitle}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {INDEX_DATA.letters.map((letter) => (
                <span
                  key={letter}
                  className="flex h-11 w-10 items-center justify-center rounded-lg border border-[#D8CEDD] bg-[#EEE8F2] text-base font-semibold text-[#756C7C]"
                >
                  {letter}
                </span>
              ))}
            </div>
            <p className="text-sm leading-[1.6] text-[#665F69]">{INDEX_DATA.footnote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-1 flex flex-col gap-3">
              <span className="text-xs font-bold text-[#AC4F25]">{REGISTRY_EMPTY_STATE.eyebrow}</span>
              <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold leading-[1.15] text-[#18141B]">{REGISTRY_EMPTY_STATE.title}</h3>
              <p className="text-base leading-[1.6] text-[#665F69]">{REGISTRY_EMPTY_STATE.description}</p>
            </div>
            <div className="flex flex-col gap-3.5 sm:w-[270px] shrink-0">
              {REGISTRY_EMPTY_STATE.routes.map((r) => (
                <span key={r} className="text-sm font-semibold text-[#AC4F25]">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-2xl bg-[#F3EBF8] p-6 sm:p-7 flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex flex-col gap-2.5 lg:w-[260px] shrink-0">
              <span className="text-xs font-bold text-[#AC4F25]">{FEATURED_EMPTY_STATE.eyebrow}</span>
              <h3 className="text-xl sm:text-2xl font-bold leading-[1.15] text-[#18141B]">{FEATURED_EMPTY_STATE.title}</h3>
            </div>
            <div className="flex-1 flex flex-col gap-2.5">
              <p className="text-lg sm:text-xl font-semibold text-[#18141B]">{FEATURED_EMPTY_STATE.heading}</p>
              <p className="text-base leading-[1.6] text-[#665F69]">{FEATURED_EMPTY_STATE.description}</p>
              <span className="text-sm font-semibold text-[#AC4F25]">{FEATURED_EMPTY_STATE.cta}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
