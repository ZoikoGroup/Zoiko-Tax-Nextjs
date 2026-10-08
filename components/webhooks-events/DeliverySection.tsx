"use client";

import React from "react";
import { BG, DELIVERY_DATA } from "./webhooks-events-data";
import { SectionContainer, SectionHeader, Reveal, NoticeBox, GuideTable, patternBg } from "./shared";

export default function DeliverySection() {
  return (
    <SectionContainer id="delivery" className="bg-white scroll-mt-24" style={patternBg(BG.delivery)}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={DELIVERY_DATA.eyebrow} title={DELIVERY_DATA.title} description={DELIVERY_DATA.description} />
        </Reveal>

        <Reveal delay={0.04}>
          <ul className="rounded-2xl bg-[#F1E8F8] p-5 sm:p-6 grid gap-3 md:grid-cols-3 md:gap-6">
            {DELIVERY_DATA.distinctions.map((d) => (
              <li key={d} className="text-base sm:text-lg leading-6 text-[#301153]">
                {d}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <GuideTable headers={DELIVERY_DATA.headers} rows={DELIVERY_DATA.rows} />
        </Reveal>

        <Reveal>
          <NoticeBox title={DELIVERY_DATA.notice.title} description={DELIVERY_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
