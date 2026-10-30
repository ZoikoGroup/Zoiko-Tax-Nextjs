"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FAQ_DATA } from "./partnerships-data";
import { SectionContainer, EyebrowTag, SectionHeading, SectionDescription, Reveal } from "./shared";

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <SectionContainer id="faq" className="relative py-[90px] bg-[#FAFAFC] overflow-hidden">
      {/* Background Subtle Geometric Diamond Pattern */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-40" aria-hidden="true">
        <picture>
          <source srcSet="/partnerships/pattern-grid-bg.webp" type="image/webp" />
          <Image
            src="/partnerships/pattern-grid-bg.png"
            alt=""
            fill
            className="object-cover"
          />
        </picture>
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className="max-w-[720px] mb-12 sm:mb-16">
          <Reveal delay={0.05}>
            <EyebrowTag>{FAQ_DATA.eyebrow}</EyebrowTag>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading>{FAQ_DATA.title}</SectionHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionDescription>{FAQ_DATA.description}</SectionDescription>
          </Reveal>
        </div>

        {/* Q&A Rows Container */}
        <div className="bg-white/80 backdrop-blur-sm border border-[#E7E0F1] rounded-[16px] divide-y divide-[#E7E0F1] shadow-sm">
          {FAQ_DATA.items.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <Reveal key={idx} delay={0.05 * (idx + 1)}>
                <div className="p-6 sm:p-8 lg:py-7 lg:px-8 transition-colors hover:bg-white/90">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                    {/* Left: Question */}
                    <div className="lg:col-span-5">
                      <h3
                        onClick={() => toggleIndex(idx)}
                        className="text-base sm:text-[17.28px] font-bold text-[#1D1526] leading-[26px] sm:leading-[29px] cursor-pointer lg:cursor-default"
                      >
                        {item.question}
                      </h3>
                    </div>

                    {/* Right: Answer */}
                    <div className="lg:col-span-7">
                      <p className="text-sm sm:text-[15px] leading-[24px] text-[#5C5468]">
                        {item.fullAnswer ? (
                          item.fullAnswer
                        ) : (
                          <>
                            {item.answerPrefix}
                            {item.codeHighlight && (
                              <Link
                                href={item.codeHighlight}
                                className="inline-block text-[13px] font-mono font-bold text-[#C35D29] bg-[#F7EDE4] px-2 py-0.5 rounded-[5px] mx-1 hover:underline"
                              >
                                {item.codeHighlight}
                              </Link>
                            )}
                            {item.answerSuffix}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
