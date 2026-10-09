"use client";

import React from "react";
import { ArrowRight, Bookmark, CalendarDays, LockKeyhole, Search } from "lucide-react";
import { UPCOMING_EVENTS_DATA as U } from "./events-data";
import { SectionContainer, Reveal, SecondaryButton } from "./shared";

export default function UpcomingEventsSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/events/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{U.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{U.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{U.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2.5">
                <span className="text-[13px] font-semibold text-[#18141B]">{U.search.label}</span>
                <div className="flex items-center gap-3 rounded-[10px] border-2 border-[#6D3AA0] h-[52px] px-4">
                  <Search className="h-5 w-5 shrink-0 text-[#D65A2C]" aria-hidden="true" />
                  <span className="text-[15px] text-[#766B7D]">{U.search.placeholder}</span>
                </div>
              </div>
              <div className="lg:w-[210px] shrink-0 flex flex-col gap-2.5">
                <span className="text-[13px] font-semibold text-[#18141B]">{U.sort.label}</span>
                <div className="flex items-center justify-between rounded-[10px] bg-[#F8F5FA] border border-[#D8CEDD] h-[52px] px-4">
                  <span className="text-sm text-[#766B7D]">{U.sort.value}</span>
                  <LockKeyhole className="h-[15px] w-[15px] shrink-0 text-[#766B7D]" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {U.filters.map((f) => (
                <div key={f.label} className="flex flex-col gap-2.5">
                  <span className="text-[13px] font-semibold text-[#18141B]">{f.label}</span>
                  <div className="flex items-center justify-between rounded-[10px] bg-[#F8F5FA] border border-[#D8CEDD] h-[52px] px-4">
                    <span className="text-sm text-[#766B7D]">{f.value}</span>
                    <LockKeyhole className="h-[15px] w-[15px] shrink-0 text-[#766B7D]" aria-hidden="true" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <span className="text-sm text-[#665F69]">{U.status.text}</span>
              <span className="text-sm font-semibold text-[#766B7D]">{U.status.clear}</span>
            </div>

            <div className="rounded-2xl bg-[#FAF3FF] px-12 py-11 flex flex-col items-center gap-[18px] text-center">
              <span className="flex items-center justify-center rounded-2xl bg-[#F3EEF7] size-16">
                <CalendarDays className="h-8 w-8 text-[#D65A2C]" aria-hidden="true" />
              </span>
              <h3 className="text-2xl sm:text-[28px] font-semibold text-[#18141B]">{U.empty.title}</h3>
              <p className="text-base leading-[1.6] text-[#665F69] max-w-[720px]">{U.empty.description}</p>
              <span className="inline-flex items-center rounded-full border border-[#D8CEDD] bg-[#F3EDF7] px-3.5 py-2 text-xs font-mono text-[#665F69]">
                {U.empty.badge}
              </span>
            </div>

            <p className="text-sm leading-[1.6] text-[#665F69]">{U.footnote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[26px] bg-[#301153] p-7 sm:p-9 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Bookmark className="h-7 w-7 shrink-0 text-[#F4A261]" aria-hidden="true" />
                <span className="inline-flex w-fit items-center rounded-full bg-white/[0.07] border border-white/10 px-3.5 py-2 text-xs font-mono text-[#D9D0DF]">
                  {U.featured.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-[32px] font-bold leading-[1.1] text-white">{U.featured.title}</h3>
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{U.featured.description}</p>
            </div>
            <div className="shrink-0">
              <SecondaryButton className="!bg-[#190A36] !text-white !border-white/10 hover:!bg-[#241248]">
                <span className="inline-flex items-center gap-2">
                  {U.featured.action}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </SecondaryButton>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
