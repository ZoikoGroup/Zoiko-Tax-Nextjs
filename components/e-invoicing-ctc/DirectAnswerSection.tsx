"use client";

import React from "react";
import { DIRECT_ANSWER_DATA } from "./e-invoicing-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/50">
      <SectionHeader
        eyebrow={DIRECT_ANSWER_DATA.eyebrow}
        title={DIRECT_ANSWER_DATA.title}
        description={DIRECT_ANSWER_DATA.description}
        className="mb-12 sm:mb-14"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Included Capabilities */}
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-[#26735B] bg-[#F9FBE7]/30 p-6 sm:p-8 backdrop-blur-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#26735B] mb-5">
                Included Capabilities
              </h3>
              <ul className="space-y-3.5">
                {DIRECT_ANSWER_DATA.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm sm:text-[15px] text-[#18141B] leading-relaxed"
                  >
                    <span className="text-[#26735B] font-bold text-base select-none shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Does Not Claim / Exclude */}
        <Reveal delay={0.2}>
          <div className="h-full rounded-2xl border border-[#D65A2C] bg-[#FFEbee]/30 p-6 sm:p-8 backdrop-blur-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#D65A2C] mb-5">
                Does Not Claim / Exclude
              </h3>
              <ul className="space-y-3.5">
                {DIRECT_ANSWER_DATA.excluded.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm sm:text-[15px] text-[#18141B] leading-relaxed"
                  >
                    <span className="text-[#D65A2C] font-bold text-base select-none shrink-0">
                      ✗
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
