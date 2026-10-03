"use client";

import React from "react";
import { BG, JOURNEYS_DATA } from "./webhooks-events-data";
import { SectionContainer, SectionHeader, Reveal, Card, NoticeBox, GuideTable, patternBg } from "./shared";

export default function JourneysSection() {
  return (
    <SectionContainer className="bg-white" style={patternBg(BG.journeys)}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={JOURNEYS_DATA.eyebrow} title={JOURNEYS_DATA.title} description={JOURNEYS_DATA.description} />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {JOURNEYS_DATA.roles.map((r, idx) => (
            <Reveal key={r.title} delay={0.05 * idx} className="h-full">
              <Card>
                <span className="text-xs font-bold uppercase text-[#D65A2C]">{r.role}</span>
                <h3 className="text-xl sm:text-2xl font-semibold leading-7 text-[#18141B]">{r.title}</h3>
                <p className="text-base leading-6 text-[#665F69]">{r.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <GuideTable headers={JOURNEYS_DATA.headers} rows={JOURNEYS_DATA.rows} />
        </Reveal>

        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            {/* Static specimen of the focus ring — intentionally not interactive */}
            <span
              aria-hidden="true"
              className="self-start inline-flex min-h-12 items-center rounded-full border-2 border-[#6B21A8] bg-white px-6 text-sm font-semibold text-[#18141B] ring-2 ring-[#6B21A8]/20"
            >
              Reset
            </span>
            <p className="text-sm leading-5 text-[#665F69]">{JOURNEYS_DATA.focusNote}</p>
          </div>
        </Reveal>

        <Reveal>
          <NoticeBox title={JOURNEYS_DATA.notice.title} description={JOURNEYS_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
