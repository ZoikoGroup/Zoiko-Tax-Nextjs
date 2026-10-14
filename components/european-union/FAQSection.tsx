"use client";

import React from "react";
import { FAQ_DATA } from "./european-union-data";
import { SectionContainer, SectionHeading, Reveal } from "./shared";

export default function FAQSection() {
  const f = FAQ_DATA;

  return (
    <SectionContainer
      id="faq"
      className="bg-[#FAF3FF]"
      style={{ backgroundColor: "rgba(250, 243, 255, 1)" }}
    >
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow={f.eyebrow}
            title={f.title}
            description={f.description}
          />
        </Reveal>

        {/* Visible Questions and Answers */}
        <Reveal delay={0.06}>
          <div className="flex flex-col">
            {f.items.map((item, idx) => (
              <div
                key={idx}
                className="py-7 border-b border-[#D8CEDD] flex flex-col gap-3.5"
              >
                <h3 className="text-xl sm:text-[22px] font-bold leading-[1.25em] text-[#18141B]">
                  {item.question}
                </h3>
                <p className="text-base font-normal leading-[1.6em] text-[#665F69]">
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
