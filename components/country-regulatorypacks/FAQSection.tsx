import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { FAQ_ITEMS } from "./country-regulatorypacks-data";

export default function FAQSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
      <Reveal>
        <div className="flex flex-col gap-10">
          {/* Section Heading */}
          <SectionHeader
            eyebrow="FAQ"
            title="Direct answers. No blanket support claims."
            className="mb-0"
          />

          {/* Questions and visible answers (Figma: EL-e9077466 flat list with bottom borders) */}
          <div className="flex flex-col w-full">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.id}
                className="border-b border-[#D8CEDD] py-6 flex flex-col gap-3"
              >
                <h3 className="text-lg sm:text-[20px] font-semibold text-[#18141B] leading-[1.4] font-['Inter',sans-serif]">
                  {item.question}
                </h3>
                <p className="text-base sm:text-[16px] text-[#665F69] leading-[1.55] font-['Inter',sans-serif]">
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
