"use client";

import React from "react";
import Image from "next/image";
import { ChartNoAxesCombined, FileCheck, History } from "lucide-react";
import { EVIDENCE_REPLAY_DATA as E } from "./dashboard-analytics-data";
import { Reveal, AuthorityNoticeBox } from "./shared";

const ICONS: Record<string, typeof FileCheck> = { "chart-no-axes-combined": ChartNoAxesCombined, "file-check": FileCheck, history: History };

export default function EvidenceReplaySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#120327]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/dashboard-analytics/evidence-replay-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,3,39,0.94)] via-50% via-[rgba(18,3,39,0.82)] to-[rgba(18,3,39,0.6)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-20 lg:py-[104px] flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#F4A261]">{E.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{E.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#D9D0DF]">{E.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {E.cards.map((c) => {
              const Icon = ICONS[c.icon];
              return (
                <div key={c.title} className="h-full rounded-2xl border border-[#64497B] bg-[#301153] p-6 flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#F4A261]" aria-hidden="true" />
                  <h3 className="text-xl font-normal leading-[1.2] text-white">{c.title}</h3>
                  <p className="text-base leading-[1.6] text-[#D9D0DF]">{c.description}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <AuthorityNoticeBox dark>{E.notice}</AuthorityNoticeBox>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-1.5">
            <span className="text-base text-[#F4A261]">{E.destination.title}</span>
            <span className="text-[13px] leading-[1.4] text-[#D9D0DF]">{E.destination.note}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
