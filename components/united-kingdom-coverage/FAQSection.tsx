"use client";

import React from "react";
import { FAQ_DATA } from "./united-kingdom-data";
import { SectionContainer, SectionHeading, Reveal } from "./shared";

export default function FAQSection() {
  return (
    <SectionContainer
      style={{ backgroundColor: "rgba(250, 243, 255, 1)" }}
      className="bg-[#FAF3FF]"
    >
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeading
            eyebrow={FAQ_DATA.eyebrow}
            title={FAQ_DATA.title}
            description={FAQ_DATA.description}
          />
        </Reveal>

        {/* Visible Questions and Answers (all visible without hidden accordions, matching Figma specification) */}
        <Reveal delay={0.06}>
          <div className="border-t border-[#D8CEDD] divide-y divide-[#D8CEDD]">
            {FAQ_DATA.items.map((item) => (
              <div key={item.question} className="py-7 flex flex-col gap-3.5">
                <h3 className="text-xl sm:text-[22px] font-semibold leading-[1.35em] text-[#18141B]">
                  {item.question}
                </h3>
                <p className="text-base sm:text-[17px] font-normal leading-[1.65em] text-[#665F69]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
