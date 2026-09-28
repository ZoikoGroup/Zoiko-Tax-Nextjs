"use client";

import React from "react";
import { FAQ_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function FAQSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader eyebrow={FAQ_DATA.eyebrow} title={FAQ_DATA.title} className="mb-8" />
      </Reveal>

      <div className="w-full flex flex-col gap-6">
        {FAQ_DATA.items.map((item, idx) => (
          <Reveal key={item.question} delay={0.03 * idx}>
            <div className="border-b border-[#D8CEDD] pb-5">
              <h3 className="text-lg font-bold text-[#18141B] mb-2.5">{item.question}</h3>
              <p className="text-sm leading-[1.5] text-[#665F69]">{item.answer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
