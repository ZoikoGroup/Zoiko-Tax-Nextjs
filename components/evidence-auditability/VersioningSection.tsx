"use client";

import React from "react";
import { VERSIONING_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function VersioningSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/evidence-auditability/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader eyebrow={VERSIONING_DATA.eyebrow} title={VERSIONING_DATA.title} />
      </Reveal>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 items-start">
        <Reveal delay={0.06}>
          <div className="flex flex-col gap-4">
            <p className="text-lg leading-[1.5] text-[#535055]">{VERSIONING_DATA.paragraph1}</p>
            <p className="text-sm leading-[1.5] text-[#665F69]">{VERSIONING_DATA.paragraph2}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-[#F5F2F9] p-5 space-y-3">
            <h3 className="text-sm font-bold text-[#18141B]">{VERSIONING_DATA.diagram.title}</h3>
            <div className="flex flex-col gap-2">
              <div className="rounded-lg border border-[#D8CEDD] bg-white p-3">
                <p className="text-[13px] text-[#665F69]">
                  <span className="font-bold text-[#18141B]">{VERSIONING_DATA.diagram.original.label}</span>{" "}
                  {VERSIONING_DATA.diagram.original.detail}
                </p>
              </div>
              <div className="rounded-lg border border-[#D65A2C] bg-white p-3">
                <p className="text-[13px] text-[#D65A2C]">
                  <span className="font-bold">{VERSIONING_DATA.diagram.correction.label}</span>{" "}
                  {VERSIONING_DATA.diagram.correction.detail}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
