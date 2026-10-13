"use client";

import React from "react";
import { METRIC_REGISTRY_DATA as M } from "./dashboard-analytics-data";
import { SectionContainer, Reveal, AuthorityNoticeBox } from "./shared";

export default function MetricRegistrySection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/dashboard-analytics/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{M.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{M.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{M.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="grid grid-cols-1 lg:grid-cols-[720px_1fr] gap-8">
            <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4">
              <p className="text-sm font-semibold text-[#D65A2C]">{M.cardLabel}</p>
              <p className="text-2xl text-black">{M.cardTitle}</p>
              {M.fields.map((f) => (
                <div key={f.label} className="border-b border-[#D8CEDD] py-2.5 flex gap-6 text-[15px]">
                  <span className="w-[156px] shrink-0 font-semibold text-[#18141B]">{f.label}</span>
                  <span className="flex-1 text-[#665F69]">{f.value}</span>
                </div>
              ))}
            </div>

            <div className="rounded-[26px] bg-[#301153] p-8 flex flex-col gap-6">
              <p className="text-[32px] leading-[1.1] text-white">{M.guidance.title}</p>
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{M.guidance.description}</p>
              <AuthorityNoticeBox dark>{M.guidance.notice}</AuthorityNoticeBox>
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{M.guidance.footnote}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-4">
            <p className="text-2xl text-[#18141B]">{M.statesTitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {M.states.map((s) => (
                <div key={s.title} className="rounded-2xl border border-[#D8CEDD] bg-white p-5 flex flex-col gap-2.5">
                  <p className="text-[17px] text-[#301153]">{s.title}</p>
                  <p className="text-base leading-[1.6] text-[#665F69]">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
