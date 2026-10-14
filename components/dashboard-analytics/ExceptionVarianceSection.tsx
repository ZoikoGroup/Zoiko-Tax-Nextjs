"use client";

import React from "react";
import { EXCEPTION_VARIANCE_DATA as E } from "./dashboard-analytics-data";
import { SectionContainer, Reveal, AuthorityNoticeBox } from "./shared";

export default function ExceptionVarianceSection() {
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
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{E.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{E.title}</h2>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <AuthorityNoticeBox>{E.notice}</AuthorityNoticeBox>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-[720px_1fr] gap-8">
            <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 flex flex-col gap-5">
              <p className="text-sm text-[#D65A2C]">{E.exampleLabel}</p>
              <p className="text-2xl text-black">{E.exampleTitle}</p>
              {E.fields.map((f) => (
                <div key={f.label} className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-semibold text-[#665F69]">{f.label}</span>
                  <span className="text-base text-[#18141B]">{f.value}</span>
                </div>
              ))}
              <p className="text-base leading-[1.6] text-[#665F69]">{E.exampleFootnote}</p>
            </div>

            <div className="rounded-[26px] bg-[#301153] p-8 flex flex-col gap-6">
              <p className="text-[28px] leading-[1.2] text-white">{E.boundaries.title}</p>
              {E.boundaries.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-[1.6] text-[#D9D0DF]">{p}</p>
              ))}
              <AuthorityNoticeBox dark>{E.boundaries.notice}</AuthorityNoticeBox>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex flex-col gap-3">
            <p className="text-sm text-[#D65A2C]">{E.partialStateLabel}</p>
            <AuthorityNoticeBox>{E.partialStateNotice}</AuthorityNoticeBox>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
