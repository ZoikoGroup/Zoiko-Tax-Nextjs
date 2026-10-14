"use client";

import React, { useState } from "react";
import { GENERAL_CONTACT_FAQ_DATA } from "./general-contact-data";
import {
  SectionContainer,
  EyebrowTag,
  SectionHeading,
  SectionDescription,
  Reveal,
} from "./shared";

export default function FAQSection() {
  const { eyebrow, heading, description, items } = GENERAL_CONTACT_FAQ_DATA;
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <SectionContainer className="py-16 sm:py-20 lg:py-[84px] bg-white">
      {/* Header */}
      <div className="max-w-[700px] mb-10 sm:mb-12">
        <Reveal>
          <EyebrowTag>{eyebrow}</EyebrowTag>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading>{heading}</SectionHeading>
        </Reveal>
        <Reveal delay={0.12}>
          <SectionDescription>{description}</SectionDescription>
        </Reveal>
      </div>

      {/* Accordion List */}
      <div className="max-w-[1144px] divide-y divide-[#E7E0F1] border-y border-[#E7E0F1]">
        {items.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <Reveal key={idx} delay={0.04 * (idx + 1)}>
              <div className="py-5 sm:py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] sm:text-[17.28px] font-bold text-[#1D1526] pr-4 group-hover:text-[#D9743E] transition-colors leading-[1.35]">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[#5A3CC6] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-8 sm:pr-12 animate-fadeIn">
                    <p className="text-[14px] sm:text-[15px] font-normal text-[#5C5468] leading-[24px]">
                      {item.answerParts.map((part, pIdx) =>
                        part.code ? (
                          <code
                            key={pIdx}
                            className="bg-[#F4F0F8] border border-[#E7E0F1] px-1.5 py-0.5 rounded text-[13px] font-bold text-[#1D1526] font-mono mx-1"
                          >
                            {part.text}
                          </code>
                        ) : (
                          <span key={pIdx}>{part.text}</span>
                        )
                      )}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionContainer>
  );
}
