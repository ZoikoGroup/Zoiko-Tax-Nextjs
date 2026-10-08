"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { directAnswersData } from "./types";

export default function DirectAnswersSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
      <Reveal>
        <div className="space-y-10">
          {/* Section Heading */}
          <SectionHeader
            eyebrow={directAnswersData.eyebrow}
            title={directAnswersData.title}
            description={directAnswersData.introduction}
          />

          {/* Partner Questions List - Exact Figma node 1222:6611 */}
          <div className="w-full flex flex-col">
            {directAnswersData.questions.map((item, idx) => (
              <div
                key={idx}
                className="w-full py-6 flex flex-col gap-3 border-b border-[#D8CEDD]"
              >
                <h3 className="text-[18px] font-bold text-[#18141B] leading-[1.4] font-['Inter',sans-serif]">
                  {item.question}
                </h3>
                <p className="text-[16px] font-normal text-[#665F69] leading-[1.6] font-['Inter',sans-serif]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

