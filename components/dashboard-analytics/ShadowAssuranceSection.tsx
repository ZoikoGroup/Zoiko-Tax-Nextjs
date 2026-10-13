"use client";

import React from "react";
import { SHADOW_ASSURANCE_DATA as S } from "./dashboard-analytics-data";
import { SectionContainer, Reveal, AuthorityNoticeBox } from "./shared";

export default function ShadowAssuranceSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col lg:flex-row gap-14 mb-6">
        <Reveal className="w-full lg:w-[550px] shrink-0">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold uppercase text-[#D65A2C]">{S.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{S.title}</h2>
            </div>
            <p className="text-base leading-[1.6] text-[#665F69]">{S.description}</p>
            <div className="flex flex-col gap-1.5">
              <span className="text-base text-[#D65A2C]">{S.destination.title}</span>
              <span className="text-[13px] leading-[1.4] text-[#665F69]">{S.destination.note}</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="flex-1" delay={0.04}>
          <div className="h-full rounded-[26px] bg-[#301153] p-8 flex flex-col gap-5">
            <p className="text-sm text-[#D9D0DF]">{S.panel.label}</p>
            <p className="text-2xl text-white">{S.panel.title}</p>
            {S.panel.concepts.map((c) => (
              <div key={c.label} className="flex gap-5">
                <span className="w-[180px] shrink-0 text-base text-[#F4A261]">{c.label}</span>
                <span className="flex-1 text-[15px] leading-[1.5] text-[#D9D0DF]">{c.description}</span>
              </div>
            ))}
            <p className="text-base leading-[1.6] text-[#D9D0DF]">{S.panel.footnote}</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.08}>
        <AuthorityNoticeBox>{S.notice}</AuthorityNoticeBox>
      </Reveal>
    </SectionContainer>
  );
}
