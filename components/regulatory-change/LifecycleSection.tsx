"use client";

import React from "react";
import Image from "next/image";
import { LIFECYCLE_DATA as L, DATE_HIERARCHY_DATA as D } from "./regulatory-change-data";
import { SectionContainer, Reveal } from "./shared";

export default function LifecycleSection() {
  return (
    <>
      <SectionContainer className="bg-white relative">
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: "url(/regulatory-change/pattern-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-9">
          <Reveal>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-[#B65326]">{L.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold leading-[1.15] text-[#18141B]">{L.title}</h2>
              <p className="text-base sm:text-lg leading-[1.5] text-[#665F69] max-w-[1040px]">{L.description}</p>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-5 sm:p-7 overflow-x-auto">
              <div className="hidden lg:grid grid-cols-[265px_370px_1fr] gap-8 py-4 text-xs font-bold text-[#665F69]">
                {L.tableHeadings.map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </div>
              {L.rows.map((row) => (
                <div key={row.status} className="border-t border-[#D8CEDD] py-5 grid grid-cols-1 lg:grid-cols-[265px_370px_1fr] gap-3 lg:gap-8 items-center">
                  <span className="inline-flex w-fit items-center rounded-full border border-[#D8CEDD] bg-[#F3EBF8] px-3 py-1.5 text-xs font-semibold text-[#301153]">
                    {row.status}
                  </span>
                  <span className="text-base font-semibold text-[#18141B]">{row.title}</span>
                  <span className="text-sm leading-[1.6] text-[#665F69]">{row.description}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionContainer>

      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/regulatory-change/timeline-bg.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[rgba(48,17,83,0.84)]" />
        </div>

        <SectionContainer className="relative">
          <Reveal>
            <div className="flex flex-col gap-4 mb-10">
              <span className="text-xs font-bold text-[#F4A261]">{D.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold leading-[1.15] text-white">{D.title}</h2>
            </div>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <Reveal delay={0.04} className="w-full lg:w-[570px] shrink-0">
              <div className="flex flex-col gap-5">
                {D.definitions.map((def) => (
                  <div key={def.label} className="border-b border-[#72518A] pb-4 flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <span className="text-[15px] font-semibold text-white sm:w-[184px] shrink-0">{def.label}</span>
                    <span className="flex-1 text-sm leading-[1.6] text-[#D9D0DF]">{def.description}</span>
                  </div>
                ))}
                <p className="text-sm leading-[1.6] text-[#D9D0DF]">{D.footnote}</p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="flex-1 min-w-0">
              <div className="rounded-2xl bg-[#1D0832] p-7 flex flex-col gap-5">
                <span className="inline-flex w-fit items-center rounded-full bg-[#4D2E65] border border-[#72518A] px-3 py-1.5 text-xs font-semibold text-white">
                  {D.specimen.badge}
                </span>
                {D.specimen.events.map((e) => (
                  <div key={e.marker} className="flex gap-4">
                    <div className="h-8 w-8 shrink-0 rounded-full bg-[#4D2E65] flex items-center justify-center">
                      <span className="text-[13px] font-bold text-white">{e.marker}</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <span className="text-base font-semibold text-white">{e.title}</span>
                      <span className="text-sm leading-[1.6] text-[#D9D0DF]">{e.description}</span>
                    </div>
                  </div>
                ))}
                <p className="text-sm leading-[1.6] text-[#D9D0DF]">{D.specimen.footnote}</p>
              </div>
            </Reveal>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
