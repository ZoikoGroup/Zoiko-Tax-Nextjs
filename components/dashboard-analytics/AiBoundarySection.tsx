"use client";

import React from "react";
import Image from "next/image";
import { AI_BOUNDARY_DATA as A } from "./dashboard-analytics-data";
import { Reveal, AuthorityNoticeBox } from "./shared";

export default function AiBoundarySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#120327]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/dashboard-analytics/ai-boundary-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,3,39,0.94)] via-50% via-[rgba(18,3,39,0.82)] to-[rgba(18,3,39,0.6)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-20 lg:py-[104px] flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-14">
          <Reveal className="w-full lg:w-[560px] shrink-0">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold uppercase text-[#F4A261]">{A.eyebrow}</span>
                <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{A.title}</h2>
              </div>
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{A.description}</p>
              <div className="flex flex-col gap-1.5">
                <span className="text-base text-[#F4A261]">{A.destination.title}</span>
                <span className="text-[13px] leading-[1.4] text-[#D9D0DF]">{A.destination.note}</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="flex-1" delay={0.04}>
            <div className="h-full rounded-[26px] bg-[#301153] p-8 flex flex-col gap-5">
              <p className="text-[28px] text-white">{A.panel.title}</p>
              {A.panel.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-[1.6] text-[#D9D0DF]">{p}</p>
              ))}
              <div className="flex flex-col gap-1.5">
                <span className="text-base text-[#F4A261]">{A.panel.destination.title}</span>
                <span className="text-[13px] leading-[1.4] text-[#D9D0DF]">{A.panel.destination.note}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <AuthorityNoticeBox dark>{A.notice}</AuthorityNoticeBox>
        </Reveal>
      </div>
    </section>
  );
}
