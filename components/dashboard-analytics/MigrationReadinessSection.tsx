"use client";

import React from "react";
import { ClipboardCheck, ListChecks, Signpost } from "lucide-react";
import { MIGRATION_READINESS_DATA as M } from "./dashboard-analytics-data";
import { SectionContainer, Reveal, AuthorityNoticeBox } from "./shared";

const ICONS: Record<string, typeof ListChecks> = { "list-checks": ListChecks, "clipboard-check": ClipboardCheck, signpost: Signpost };

export default function MigrationReadinessSection() {
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {M.cards.map((c) => {
              const Icon = ICONS[c.icon];
              return (
                <div key={c.title} className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
                  <h3 className="text-xl font-normal leading-[1.2] text-[#18141B]">{c.title}</h3>
                  <p className="text-base leading-[1.6] text-[#665F69]">{c.description}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <AuthorityNoticeBox>{M.notice}</AuthorityNoticeBox>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-1.5">
            <span className="text-base text-[#D65A2C]">{M.destination.title}</span>
            <span className="text-[13px] leading-[1.4] text-[#665F69]">{M.destination.note}</span>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
