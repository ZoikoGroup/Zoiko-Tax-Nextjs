"use client";

import React from "react";
import { LockKeyhole } from "lucide-react";
import { ROLE_DECISION_DATA as R } from "./careers-data";
import { SectionContainer, Reveal } from "./shared";

export default function RoleDecisionSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/careers/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{R.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{R.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{R.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-9 flex flex-col gap-7">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex flex-col gap-2.5">
                <h3 className="text-2xl sm:text-[28px] font-semibold text-[#18141B]">{R.identity.title}</h3>
                <p className="text-base text-[#665F69]">{R.identity.subtitle}</p>
              </div>
              <span className="inline-flex items-center rounded-full border border-[#D8CEDD] bg-[#F3EDF7] px-3.5 py-2 text-xs font-mono text-[#665F69]">
                {R.identity.badge}
              </span>
            </div>

            <div className="rounded-2xl bg-[#FAF3FF] p-6 flex flex-col gap-6">
              {R.metadataRows.map((row, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {row.map((f) => (
                    <div key={f.label} className="flex flex-col gap-1.5">
                      <span className="text-[13px] font-semibold text-[#665F69]">{f.label}</span>
                      <span className="text-base text-[#18141B]">{f.value}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1 flex flex-col">
                {R.sections.map((s) => (
                  <div key={s.title} className="border-b border-[#D8CEDD] py-5 flex flex-col gap-2.5">
                    <h4 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{s.title}</h4>
                    <p className="text-base leading-[1.6] text-[#665F69]">{s.description}</p>
                  </div>
                ))}
              </div>

              <div className="w-full lg:w-[430px] shrink-0 flex flex-col gap-6">
                <div className="rounded-2xl bg-[#301153] p-7 flex flex-col gap-[18px]">
                  <h4 className="text-2xl font-semibold text-white">{R.eligibility.title}</h4>
                  <p className="text-base leading-[1.6] text-[#D9D0DF]">{R.eligibility.description}</p>
                  {R.eligibility.fields.map((f) => (
                    <div key={f.label} className="flex flex-col gap-1.5">
                      <span className="text-[13px] font-semibold text-[#D9D0DF]">{f.label}</span>
                      <span className="text-base text-white">{f.value}</span>
                    </div>
                  ))}
                </div>

                <div className="border-b border-[#D8CEDD] pb-5 flex flex-col gap-2.5">
                  <h4 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{R.processNotice.title}</h4>
                  <p className="text-base leading-[1.6] text-[#665F69]">{R.processNotice.description}</p>
                </div>

                <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#D8CEDD] bg-[#EEE7F2] px-6 h-[50px] text-sm font-semibold text-[#766B7D]">
                  {R.applyAction}
                  <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-sm leading-[1.6] text-[#665F69]">{R.applyNote}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
