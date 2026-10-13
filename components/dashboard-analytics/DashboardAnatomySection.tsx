"use client";

import React from "react";
import Image from "next/image";
import { DASHBOARD_ANATOMY_DATA as D } from "./dashboard-analytics-data";
import { SectionContainer, Reveal, AuthorityNoticeBox } from "./shared";

export default function DashboardAnatomySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{D.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{D.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{D.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#D65A2C]">{D.specimenLabel}</p>
            <p className="text-2xl text-[#18141B]">{D.specimenTitle}</p>
          </div>

          <div className="rounded-xl bg-[#F0E6F7] p-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {D.scopeFields.map((f) => (
              <div key={f.label} className="flex flex-col gap-1.5">
                <span className="text-[13px] font-semibold text-[#665F69]">{f.label}</span>
                <span className="text-base text-[#18141B]">{f.value}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {D.signalCards.map((c) => (
              <div key={c.title} className="rounded-xl border border-[#D8CEDD] p-5 flex flex-col gap-3.5">
                <h4 className="text-base font-semibold text-[#18141B]">{c.title}</h4>
                <p className="text-lg text-[#301153]">{c.status}</p>
                <p className="text-base leading-[1.6] text-[#665F69]">{D.signalFootnote}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-[#D8CEDD] bg-[#FCF9FE] p-6 flex flex-col gap-4.5">
                <p className="text-xl text-[#18141B]">{D.trend.title}</p>
                <div className="relative h-[130px] w-full overflow-x-auto">
                  <div className="relative h-[130px] min-w-[630px] p-3">
                    <div className="absolute left-3 top-10 h-px w-[calc(100%-24px)] bg-[#D8CEDD]" />
                    <div className="absolute left-3 top-[100px] h-px w-[calc(100%-24px)] bg-[#D8CEDD]" />
                    <div className="absolute left-3 top-0 h-[88px] w-[300px]">
                      <Image src="/dashboard-analytics/comparable-window.svg" alt="" fill className="object-contain" />
                    </div>
                    <div className="absolute left-[440px] top-6 h-[88px] w-[170px]">
                      <Image src="/dashboard-analytics/separate-window.svg" alt="" fill className="object-contain" />
                    </div>
                  </div>
                </div>
                <p className="text-base leading-[1.6] text-[#665F69]">{D.trend.summary}</p>
                <div className="flex flex-col">
                  {D.trend.table.map((row, i) => (
                    <div key={row.segment} className={`flex gap-5 py-2.5 text-sm ${i === 0 ? "border-b border-[#D8CEDD] font-bold text-[#18141B]" : "border-b border-[#D8CEDD] text-[#665F69]"}`}>
                      <span className="w-[180px] shrink-0 text-[#18141B]">{row.segment}</span>
                      <span className="flex-1">{row.equivalent}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#D8CEDD] p-6 flex flex-col gap-4">
                <p className="text-xl text-black">{D.exceptionQueue.title}</p>
                {D.exceptionQueue.rows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between text-[15px]">
                    <span className="text-[#18141B]">{row.label}</span>
                    <span className="text-sm text-[#665F69]">{row.status}</span>
                  </div>
                ))}
                <p className="text-base leading-[1.6] text-[#665F69]">{D.exceptionQueue.footnote}</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl bg-[#301153] p-6 flex flex-col gap-5">
                <p className="text-[22px] text-white">{D.evidencePanel.title}</p>
                {D.evidencePanel.fields.map((f) => (
                  <div key={f.label} className="flex flex-col gap-1.5">
                    <span className="text-[13px] font-semibold text-[#F4A261]">{f.label}</span>
                    <span className="text-base text-white">{f.value}</span>
                  </div>
                ))}
                <p className="text-base leading-[1.6] text-[#D9D0DF]">{D.evidencePanel.footnote}</p>
              </div>

              <div className="rounded-2xl bg-[#F0E6F7] p-6 flex flex-col gap-5">
                <p className="text-xl text-black">{D.nextContext.title}</p>
                {D.nextContext.destinations.map((dest) => (
                  <div key={dest} className="flex flex-col gap-1.5">
                    <span className="text-base text-[#D65A2C]">{dest}</span>
                    <span className="text-[13px] leading-[1.4] text-[#665F69]">Destination route required · not linked in this preview</span>
                  </div>
                ))}
                <p className="text-base leading-[1.6] text-[#665F69]">{D.nextContext.footnote}</p>
              </div>
            </div>
          </div>

          <AuthorityNoticeBox>{D.notice}</AuthorityNoticeBox>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
