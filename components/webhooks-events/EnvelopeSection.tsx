"use client";

import React from "react";
import clsx from "clsx";
import { ENVELOPE_DATA } from "./webhooks-events-data";
import { SectionContainer, SectionHeader, Reveal, GuideTable, LAVENDER } from "./shared";

export default function EnvelopeSection() {
  const { example } = ENVELOPE_DATA;

  return (
    <SectionContainer id="envelope" className={clsx(LAVENDER, "scroll-mt-24")}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={ENVELOPE_DATA.eyebrow} title={ENVELOPE_DATA.title} description={ENVELOPE_DATA.description} />
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-3xl border border-[#D8CEDD] bg-white p-5 sm:p-8 flex flex-col gap-4">
            <p className="text-sm font-bold text-[#D65A2C]">{example.label}</p>
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {example.tiles.map((tile) => (
                <div key={tile.label} className="rounded-2xl bg-[#F3EBF7] p-5 flex flex-col gap-3 min-w-0">
                  <dt className="text-sm text-[#301153]">{tile.label}</dt>
                  <dd className="font-mono text-[15px] text-[#18141B] break-words">{tile.value}</dd>
                </div>
              ))}
            </dl>
            <p className="text-[15px] sm:text-base leading-6 text-[#665F69]">{example.footnote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <GuideTable headers={ENVELOPE_DATA.headers} rows={ENVELOPE_DATA.rows} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
