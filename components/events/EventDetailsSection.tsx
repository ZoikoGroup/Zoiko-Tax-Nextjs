"use client";

import React from "react";
import { LockKeyhole } from "lucide-react";
import { EVENT_DETAILS_DATA as E } from "./events-data";
import { SectionContainer, Reveal } from "./shared";

export default function EventDetailsSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{E.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{E.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{E.description}</p>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row gap-6">
        <Reveal className="flex-1" delay={0.04}>
          <div className="h-full rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-9 flex flex-col gap-7">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex flex-col gap-2.5">
                <h3 className="text-2xl sm:text-[28px] font-semibold text-[#18141B]">{E.identity.title}</h3>
                <p className="text-base text-[#665F69]">{E.identity.subtitle}</p>
              </div>
              <span className="inline-flex items-center rounded-full border border-[#D8CEDD] bg-[#F3EDF7] px-3.5 py-2 text-xs font-mono text-[#665F69]">
                {E.identity.badge}
              </span>
            </div>

            {E.fieldGroups.map((group) => (
              <div key={group.title} className="border-b border-[#D8CEDD] pb-6 flex flex-col gap-4">
                <h4 className="text-lg font-semibold text-[#18141B]">{group.title}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {group.fields.map((f) => (
                    <div key={f.label} className="flex flex-col gap-1.5">
                      <span className="text-[13px] font-semibold text-[#665F69]">{f.label}</span>
                      <span className="text-base text-[#18141B]">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl bg-[#F3EEF7] p-6 flex flex-col gap-4">
              <h4 className="text-base font-bold text-[#301153]">{E.sourceContext.title}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {E.sourceContext.fields.map((f) => (
                  <div key={f.label} className="flex flex-col gap-1.5">
                    <span className="text-[13px] font-semibold text-[#665F69]">{f.label}</span>
                    <span className="text-base text-[#18141B]">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="w-full lg:w-[430px] shrink-0" delay={0.08}>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-[#301153] p-7 flex flex-col gap-4">
              <span className="inline-flex w-fit items-center rounded-full bg-white/[0.07] border border-white/10 px-3.5 py-2 text-xs font-mono text-[#D9D0DF]">
                {E.registration.badge}
              </span>
              <h4 className="text-2xl font-semibold text-white">{E.registration.title}</h4>
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{E.registration.description}</p>
              <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-[#190A36] px-6 h-[50px] text-sm font-semibold text-white">
                Register
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>

            <div className="rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
              <h4 className="text-lg font-semibold text-[#18141B]">{E.statusGuidance.title}</h4>
              {E.statusGuidance.rows.map((row) => (
                <div key={row.status} className="border-b border-[#D8CEDD] last:border-b-0 py-2.5 flex flex-col gap-1">
                  <span className="text-sm font-semibold text-[#18141B]">{row.status}</span>
                  <span className="text-sm leading-[1.6] text-[#665F69]">{row.description}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3">
              <h4 className="text-lg font-semibold text-[#18141B]">{E.contact.title}</h4>
              <p className="text-sm leading-[1.6] text-[#665F69]">{E.contact.description}</p>
              <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#D8CEDD] bg-[#EEE7F2] px-6 h-[50px] text-sm font-semibold text-[#766B7D]">
                {E.contact.action}
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
