"use client";

import React from "react";
import { Activity, Code, Globe, LifeBuoy, ShieldAlert, ShieldCheck } from "lucide-react";
import { TRUST_BOUNDARIES_DATA as T } from "./dashboard-analytics-data";
import { SectionContainer, Reveal, AuthorityNoticeBox } from "./shared";

const ICONS: Record<string, typeof Globe> = {
  globe: Globe,
  "shield-check": ShieldCheck,
  activity: Activity,
  "life-buoy": LifeBuoy,
  code: Code,
  "shield-alert": ShieldAlert,
};

export default function TrustBoundariesSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{T.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{T.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{T.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {T.destinations.map((d) => {
            const Icon = ICONS[d.icon];
            return (
              <div key={d.title} className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4.5">
                <Icon className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
                <h3 className="text-[22px] font-normal text-[#18141B]">{d.title}</h3>
                <p className="text-base leading-[1.6] text-[#665F69]">{d.description}</p>
                <div className="flex flex-col gap-1.5">
                  <span className="text-base text-[#D65A2C]">{d.title}</span>
                  <span className="text-[13px] leading-[1.4] text-[#665F69]">Destination route required · not linked in this preview</span>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="flex flex-col gap-4 mb-10">
          {T.notices.map((n, i) => (
            <AuthorityNoticeBox key={i}>{n}</AuthorityNoticeBox>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-2xl text-black">{T.publicNotice.title}</p>
            {T.publicNotice.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-[1.6] text-[#665F69]">{p}</p>
            ))}
          </div>
          <div className="rounded-2xl bg-[#F0E6F7] p-7 flex flex-col gap-4">
            <p className="text-2xl text-black">{T.commercial.title}</p>
            <p className="text-base leading-[1.6] text-[#665F69]">{T.commercial.description}</p>
            <div className="flex flex-col gap-1.5">
              <span className="text-base text-[#D65A2C]">{T.commercial.destination.title}</span>
              <span className="text-[13px] leading-[1.4] text-[#665F69]">{T.commercial.destination.note}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
