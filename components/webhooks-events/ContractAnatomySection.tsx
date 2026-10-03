"use client";

import React from "react";
import { ANATOMY_DATA, BG } from "./webhooks-events-data";
import { SectionContainer, SectionHeader, Reveal, NoticeBox, GuideTable, patternBg } from "./shared";

export default function ContractAnatomySection() {
  return (
    <SectionContainer className="bg-white" style={patternBg(BG.anatomy)}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={ANATOMY_DATA.eyebrow} title={ANATOMY_DATA.title} description={ANATOMY_DATA.description} />
        </Reveal>
        <Reveal delay={0.04}>
          <NoticeBox title={ANATOMY_DATA.notice.title} description={ANATOMY_DATA.notice.description} />
        </Reveal>
        <Reveal delay={0.08}>
          <GuideTable headers={ANATOMY_DATA.headers} rows={ANATOMY_DATA.rows} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
