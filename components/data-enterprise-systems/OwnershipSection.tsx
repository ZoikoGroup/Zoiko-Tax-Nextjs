"use client";

import React from "react";
import { BG, OWNERSHIP_DATA } from "./data-enterprise-systems-data";
import { DataTable, FlowRow, Notice, Reveal, SectionContainer, SectionHeader, patternBg } from "./shared";

export default function OwnershipSection() {
  return (
    <SectionContainer className="bg-[#FAF8FA]" style={patternBg(BG.ownership)}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={OWNERSHIP_DATA.eyebrow} title={OWNERSHIP_DATA.title} description={OWNERSHIP_DATA.description} />
        </Reveal>

        <Reveal delay={0.04}>
          <DataTable headers={OWNERSHIP_DATA.headers} rows={OWNERSHIP_DATA.rows} columns="md:grid-cols-[1fr_1.4fr_2.2fr]" />
        </Reveal>

        <Reveal delay={0.06}>
          <FlowRow steps={OWNERSHIP_DATA.flow} />
        </Reveal>

        <p className="text-sm leading-5 text-[#665F69]">{OWNERSHIP_DATA.diagram}</p>

        <Reveal delay={0.08}>
          <Notice title={OWNERSHIP_DATA.notice.title} description={OWNERSHIP_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
