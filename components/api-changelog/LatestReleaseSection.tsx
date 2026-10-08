"use client";

import React from "react";
import { FileClock, Info } from "lucide-react";
import { LATEST_RELEASE_DATA } from "./api-changelog-data";
import { SectionContainer, MetadataBadge, Reveal } from "./shared";

export default function LatestReleaseSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/api-changelog/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <div className="flex flex-col gap-3.5 mb-6">
          <span className="text-xs font-bold text-[#D65A2C]">{LATEST_RELEASE_DATA.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.12] text-[#18141B]">
            {LATEST_RELEASE_DATA.title}
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-6 sm:p-8 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <FileClock className="h-7 w-7 shrink-0 text-[#D65A2C]" aria-hidden="true" />
            <p className="text-lg sm:text-[23px] font-semibold leading-[1.35] text-[#18141B]">
              {LATEST_RELEASE_DATA.unavailableTitle}
            </p>
          </div>
          <p className="text-base leading-[1.6] text-[#665F69]">{LATEST_RELEASE_DATA.unavailableDescription}</p>
          <div>
            <MetadataBadge>{LATEST_RELEASE_DATA.badge}</MetadataBadge>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {LATEST_RELEASE_DATA.fields.map((field) => (
              <div key={field.label} className="flex flex-col gap-1.5">
                <span className="text-xs text-[#665F69]">{field.label}</span>
                <span className="text-sm font-medium text-[#18141B]">{field.value}</span>
              </div>
            ))}
          </div>
          <p className="text-sm leading-[1.6] text-[#665F69]">{LATEST_RELEASE_DATA.footnote}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 flex items-start gap-3">
          <Info className="h-[18px] w-[18px] shrink-0 text-[#665F69] mt-0.5" aria-hidden="true" />
          <p className="text-sm leading-[1.6] text-[#665F69]">{LATEST_RELEASE_DATA.doctrine}</p>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
