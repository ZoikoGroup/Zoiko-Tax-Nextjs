"use client";

import React from "react";
import { FAQ_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function FAQSection() {
  return (
    <SectionContainer className="bg-[#F5F2F9]">
      <Reveal>
        <SectionHeader eyebrow={FAQ_DATA.eyebrow} title={FAQ_DATA.title} className="mb-6" />
      </Reveal>

      <div className="flex flex-col gap-4">
        {FAQ_DATA.items.map((item, idx) => (
          <Reveal key={item.question} delay={0.03 * idx}>
            <div className="rounded-xl border border-[#D8CEDD] bg-white p-5 space-y-2.5">
              <h3 className="text-base font-bold text-[#18141B]">{item.question}</h3>
              <p className="text-sm leading-[1.5] text-[#665F69]">{item.answer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
