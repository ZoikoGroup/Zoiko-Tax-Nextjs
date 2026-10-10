"use client";

import React from "react";
import { Network, ShieldCheck, Files } from "lucide-react";
import { WORK_CONTEXT_DATA as W } from "./careers-data";
import { SectionContainer, Reveal } from "./shared";

const ICONS = [Network, ShieldCheck, Files];

export default function WorkContextSection() {
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
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{W.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{W.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{W.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {W.domains.map((d, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={d.title} delay={0.03 * i}>
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
                  <h3 className="text-xl sm:text-[22px] font-semibold leading-[1.25] text-[#18141B]">{d.title}</h3>
                  <p className="text-base leading-[1.6] text-[#665F69]">{d.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[26px] bg-[#301153] p-7 sm:p-9 flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div className="sm:w-[470px] shrink-0 flex flex-col gap-3.5">
              <h3 className="text-2xl sm:text-[32px] font-bold leading-[1.1] text-white">{W.assistance.title}</h3>
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{W.assistance.description}</p>
            </div>
            <div className="flex-1 flex flex-col gap-3.5">
              <span className="text-xs font-bold text-[#F4A261]">{W.assistance.aiMay.label}</span>
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{W.assistance.aiMay.description}</p>
              <span className="text-xs font-bold text-[#F4A261]">{W.assistance.authorityStays.label}</span>
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{W.assistance.authorityStays.description}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-sm leading-[1.5] text-[#665F69]">{W.footnote}</p>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
