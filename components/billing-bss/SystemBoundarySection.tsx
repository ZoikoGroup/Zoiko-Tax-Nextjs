"use client";

import React from "react";
import clsx from "clsx";
import { Layers, GitBranch, BookOpen, Network, Fingerprint } from "lucide-react";
import { SYSTEM_BOUNDARY_DATA } from "./billing-bss-data";
import { SectionContainer, SectionHeader, AuthorityNotice, Reveal } from "./shared";

const ICONS = [Layers, GitBranch, BookOpen, Network, Fingerprint];

export default function SystemBoundarySection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/billing-bss/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={SYSTEM_BOUNDARY_DATA.eyebrow}
          title={SYSTEM_BOUNDARY_DATA.title}
          description={SYSTEM_BOUNDARY_DATA.description}
        />
      </Reveal>

      <div className="mt-8 hidden md:flex gap-8 text-xs font-bold text-[#665F69] pb-3">
        <span className="w-[380px]">{SYSTEM_BOUNDARY_DATA.legendLeft}</span>
        <span className="flex-1">{SYSTEM_BOUNDARY_DATA.legendRight}</span>
      </div>

      <div className="flex flex-col gap-4">
        {SYSTEM_BOUNDARY_DATA.lanes.map((lane, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={lane.lane} delay={0.04 * i}>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border-b border-[#D8CEDD] pb-4">
                <div
                  className={clsx(
                    "flex items-center gap-4 rounded-2xl p-4 md:w-[380px] shrink-0",
                    lane.dark ? "bg-[#301153]" : "bg-[#F1E8F8]"
                  )}
                >
                  <Icon className="h-6 w-6 shrink-0 text-[#D65A2C]" aria-hidden="true" />
                  <div>
                    <p className={clsx("text-lg font-bold", lane.dark ? "text-white" : "text-[#18141B]")}>{lane.lane}</p>
                    <p className={clsx("text-[13px]", lane.dark ? "text-[#D9D0DF]" : "text-[#665F69]")}>{lane.subtitle}</p>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold text-[#D65A2C]">{lane.tag}</span>
                  <p className="text-[15px] leading-[1.55] text-[#665F69]">{lane.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} className="w-full mt-8">
        <AuthorityNotice title={SYSTEM_BOUNDARY_DATA.notice.title} description={SYSTEM_BOUNDARY_DATA.notice.description} />
      </Reveal>
    </SectionContainer>
  );
}
