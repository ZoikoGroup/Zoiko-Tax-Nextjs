"use client";

import React from "react";
import { FAQ_DATA } from "./developer-overview-data";
import { Reveal, SectionContainer, SectionHeader } from "./shared";

export default function FAQSection() {
  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <Reveal>
        <SectionHeader eyebrow={FAQ_DATA.eyebrow} title={FAQ_DATA.title} description={FAQ_DATA.description} />
      </Reveal>

      <dl className="mt-10 flex flex-col">
        {FAQ_DATA.items.map((item, idx) => (
          <Reveal key={item.question} delay={0.02 * idx}>
            <div className="border-t border-[#D8CEDD] py-6 flex flex-col md:flex-row gap-2 md:gap-10">
              <dt className="md:w-64 lg:w-[420px] shrink-0 text-base sm:text-lg text-[#18141B]">{item.question}</dt>
              <dd className="flex-1 text-[15px] leading-6 text-[#665F69]">{item.answer}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </SectionContainer>
  );
}
