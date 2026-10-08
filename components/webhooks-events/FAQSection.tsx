"use client";

import React from "react";
import { FAQ_DATA } from "./webhooks-events-data";
import { SectionContainer, SectionHeader, Reveal, LAVENDER } from "./shared";

export default function FAQSection() {
  return (
    <SectionContainer className={LAVENDER}>
      <Reveal>
        <SectionHeader eyebrow={FAQ_DATA.eyebrow} title={FAQ_DATA.title} description={FAQ_DATA.description} />
      </Reveal>

      <dl className="mt-10 sm:mt-14 flex flex-col">
        {FAQ_DATA.items.map((item, idx) => (
          <Reveal key={item.question} delay={0.03 * idx}>
            <div className="border-b border-[#D8CEDD] py-6 flex flex-col gap-3">
              <dt className="text-lg sm:text-xl font-semibold text-[#18141B]">{item.question}</dt>
              <dd className="text-[15px] leading-6 text-[#665F69]">{item.answer}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </SectionContainer>
  );
}
