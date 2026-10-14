"use client";

import React from "react";
import { Activity, BookOpen, ChartLine, GitCompare, Landmark, Sparkles } from "lucide-react";
import { TRUTH_MODEL_DATA as T } from "./dashboard-analytics-data";
import { SectionContainer, Reveal, AuthorityNoticeBox } from "./shared";

const ICONS: Record<string, typeof Landmark> = {
  landmark: Landmark,
  "book-open": BookOpen,
  activity: Activity,
  "git-compare": GitCompare,
  "chart-line": ChartLine,
  sparkles: Sparkles,
};

export default function TruthModelSection() {
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
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{T.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{T.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{T.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {T.categories.map((c) => {
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
          <AuthorityNoticeBox>{T.notice}</AuthorityNoticeBox>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
