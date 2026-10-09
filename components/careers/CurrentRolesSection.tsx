"use client";

import React from "react";
import { Search, LockKeyhole, BriefcaseBusiness } from "lucide-react";
import { CURRENT_ROLES_DATA as C } from "./careers-data";
import { SectionContainer, Reveal } from "./shared";

export default function CurrentRolesSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{C.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{C.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{C.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2.5">
              <span className="text-[13px] font-semibold text-[#18141B]">{C.search.label}</span>
              <div className="flex items-center gap-3 rounded-[10px] border-2 border-[#6D3AA0] h-[52px] px-4">
                <Search className="h-5 w-5 shrink-0 text-[#766B7D]" aria-hidden="true" />
                <span className="text-[15px] text-[#766B7D]">{C.search.placeholder}</span>
              </div>
            </div>
            <div className="lg:w-[210px] shrink-0 flex flex-col gap-2.5">
              <span className="text-[13px] font-semibold text-[#18141B]">{C.sort.label}</span>
              <div className="flex items-center justify-between rounded-[10px] bg-[#F8F5FA] border border-[#D8CEDD] h-[52px] px-4">
                <span className="text-sm text-[#766B7D]">{C.sort.value}</span>
                <LockKeyhole className="h-[15px] w-[15px] shrink-0 text-[#766B7D]" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {C.filters.map((f) => (
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
            <span className="text-sm text-[#665F69]">{C.status.text}</span>
            <span className="text-sm font-semibold text-[#766B7D]">{C.status.clear}</span>
          </div>

          <div className="rounded-2xl bg-[#FAF3FF] px-12 py-11 flex flex-col items-center gap-[18px] text-center">
            <BriefcaseBusiness className="h-8 w-8 text-[#301153]" aria-hidden="true" />
            <h3 className="text-2xl sm:text-[28px] font-semibold text-[#18141B]">{C.empty.title}</h3>
            <p className="text-base leading-[1.6] text-[#665F69] max-w-[720px]">{C.empty.description}</p>
            <span className="inline-flex items-center rounded-full border border-[#D8CEDD] bg-[#F3EDF7] px-3.5 py-2 text-xs font-mono text-[#665F69]">
              {C.empty.badge}
            </span>
          </div>

          <p className="text-sm leading-[1.6] text-[#665F69]">{C.footnote}</p>
        </div>
      </Reveal>

      <div className="flex flex-col gap-5">
        <Reveal>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h3 className="text-2xl font-semibold text-[#18141B]">{C.listing.heading}</h3>
            <span className="inline-flex items-center rounded-full border border-[#D8CEDD] bg-[#F3EDF7] px-3.5 py-2 text-xs font-mono text-[#665F69]">
              {C.listing.badge}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-6">
            <p className="text-sm leading-[1.6] text-[#665F69]">{C.listing.note}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {C.listing.primaryFields.map((f) => (
                <div key={f.label} className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-semibold text-[#665F69]">{f.label}</span>
                  <span className="text-base text-[#18141B]">{f.value}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {C.listing.additionalFields.map((f) => (
                <div key={f.label} className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-semibold text-[#665F69]">{f.label}</span>
                  <span className="text-base text-[#18141B]">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
