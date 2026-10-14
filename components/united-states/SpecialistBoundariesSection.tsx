"use client";

import React from "react";
import { Activity, ArrowRight, Building2, Bug, CodeXml, MessagesSquare, Presentation, ShieldCheck } from "lucide-react";
import { SPECIALIST_BOUNDARIES_DATA as S } from "./united-states-data";
import { SectionContainer, Reveal } from "./shared";

const ICONS: Record<string, typeof CodeXml> = {
  "code-xml": CodeXml,
  "shield-check": ShieldCheck,
  activity: Activity,
  "messages-square": MessagesSquare,
  bug: Bug,
  presentation: Presentation,
};

export default function SpecialistBoundariesSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/united-states/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold text-[#D65A2C]">{S.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{S.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{S.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {S.boundaries.map((b) => {
              const Icon = ICONS[b.icon];
              return (
                <div key={b.title} className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
                  <h3 className="text-[21px] font-bold leading-[1.3] text-[#18141B]">{b.title}</h3>
                  <p className="text-[15px] leading-[1.55] text-[#665F69]">{b.description}</p>
                  {b.link && (
                    <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#D65A2C]">
                      {b.link}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-2xl bg-[#F1E8F5] p-6 flex gap-4">
            <Building2 className="h-6 w-6 shrink-0 text-[#301153]" aria-hidden="true" />
            <div className="flex-1 flex flex-col gap-2">
              <h4 className="text-lg font-bold text-[#18141B]">{S.presenceNotice.title}</h4>
              <p className="text-[15px] leading-[1.55] text-[#665F69]">{S.presenceNotice.description}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
