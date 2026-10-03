"use client";

import React from "react";
import { SURFACE_MATRIX_DATA } from "./api-changelog-data";
import { SectionContainer, MetadataBadge, Reveal } from "./shared";

export default function SurfaceMatrixSection() {
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
          <span className="text-xs font-bold text-[#D65A2C]">{SURFACE_MATRIX_DATA.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.12] text-[#18141B]">
            {SURFACE_MATRIX_DATA.title}
          </h2>
          <p className="text-base leading-[1.6] text-[#665F69]">{SURFACE_MATRIX_DATA.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="rounded-2xl border border-[#D8CEDD] overflow-hidden">
          <div className="hidden sm:flex bg-[#F2EAF8] gap-6 p-5">
            {SURFACE_MATRIX_DATA.columns.map((col, i) => (
              <span key={col} className={"text-xs font-bold text-[#301153] " + (i === 0 ? "w-[240px]" : i === 1 ? "flex-1" : "w-[260px]")}>
                {col}
              </span>
            ))}
          </div>
          {SURFACE_MATRIX_DATA.rows.map((row, i) => (
            <div key={row.surface} className={"flex flex-col sm:flex-row gap-2 sm:gap-6 p-5 bg-white" + (i > 0 ? " border-t border-[#D8CEDD]" : "")}>
              <span className="text-base font-semibold text-[#18141B] sm:w-[240px] shrink-0">{row.surface}</span>
              <span className="flex-1 text-sm leading-[1.5] text-[#665F69]">{row.purpose}</span>
              <span className="text-sm text-[#665F69] sm:w-[260px] shrink-0">{row.relationship}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 rounded-xl bg-[#FAF3FF] p-5 flex flex-col sm:flex-row gap-4 sm:items-start">
          <MetadataBadge>{SURFACE_MATRIX_DATA.stackedSpecimen.badge}</MetadataBadge>
          <div className="flex-1 flex flex-col gap-1.5">
            <h4 className="text-base font-semibold text-[#18141B]">{SURFACE_MATRIX_DATA.stackedSpecimen.title}</h4>
            <p className="text-sm leading-[1.6] text-[#665F69]">{SURFACE_MATRIX_DATA.stackedSpecimen.description}</p>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
