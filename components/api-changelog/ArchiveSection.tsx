"use client";

import React from "react";
import { Archive } from "lucide-react";
import { ARCHIVE_DATA } from "./api-changelog-data";
import { SectionContainer, MetadataBadge, Reveal } from "./shared";

export default function ArchiveSection() {
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
          <span className="text-xs font-bold text-[#D65A2C]">{ARCHIVE_DATA.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.12] text-[#18141B]">
            {ARCHIVE_DATA.title}
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-7 flex flex-col sm:flex-row gap-5 sm:items-start">
          <Archive className="h-7 w-7 shrink-0 text-[#D65A2C]" aria-hidden="true" />
          <div className="flex-1 flex flex-col gap-1.5">
            <h3 className="text-base font-semibold text-[#18141B]">{ARCHIVE_DATA.emptyState.title}</h3>
            <p className="text-sm leading-[1.6] text-[#665F69]">{ARCHIVE_DATA.emptyState.description}</p>
          </div>
          <span className="text-sm font-semibold text-[#D65A2C] whitespace-nowrap">{ARCHIVE_DATA.emptyState.action}</span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 rounded-2xl border border-[#D8CEDD] bg-[#FAF3FF] p-6 sm:p-7 flex flex-col gap-5">
          <div>
            <MetadataBadge>{ARCHIVE_DATA.specimen.badge}</MetadataBadge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ARCHIVE_DATA.specimen.fields.map((field) => (
              <div key={field.label} className="flex flex-col gap-1.5">
                <span className="text-xs text-[#665F69]">{field.label}</span>
                <span className="text-sm font-medium text-[#18141B]">{field.value}</span>
              </div>
            ))}
          </div>
          <p className="text-sm leading-[1.6] text-[#665F69]">{ARCHIVE_DATA.specimen.note}</p>
          <div className="border-t border-[#D8CEDD] pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[#665F69]">
            <span className="text-sm">{ARCHIVE_DATA.specimen.pagination.prev}</span>
            <span className="text-[13px]">{ARCHIVE_DATA.specimen.pagination.middle}</span>
            <span className="text-sm">{ARCHIVE_DATA.specimen.pagination.next}</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <p className="mt-6 text-sm leading-[1.6] text-[#665F69]">{ARCHIVE_DATA.footnote}</p>
      </Reveal>
    </SectionContainer>
  );
}
