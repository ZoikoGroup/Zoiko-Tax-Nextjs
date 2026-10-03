"use client";

import React from "react";
import Image from "next/image";
import { QUOTE_COMMIT_DATA } from "./billing-bss-data";
import { SectionContainer, SequenceStage, AuthorityNotice, Reveal } from "./shared";

export default function QuoteCommitSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#120327]">
      <div className="absolute inset-0 opacity-[0.26] pointer-events-none select-none" aria-hidden="true">
        <Image src="/billing-bss/quote-commit-bg.png" alt="" fill className="object-cover" />
      </div>

      <SectionContainer className="relative">
        <Reveal>
          <div className="flex flex-col gap-3.5">
            <span className="text-xs sm:text-[13px] font-bold uppercase text-[#F4A261]">{QUOTE_COMMIT_DATA.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] tracking-tight text-white">
              {QUOTE_COMMIT_DATA.title}
            </h2>
            <p className="text-base sm:text-lg md:text-[20px] leading-[1.55] text-[#D9D0DF]">
              {QUOTE_COMMIT_DATA.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-6 text-[#F4A261] text-[15px] sm:text-base">{QUOTE_COMMIT_DATA.sequenceNote}</p>
        </Reveal>

        <div className="mt-4 flex flex-col sm:flex-row gap-2.5 items-stretch">
          {QUOTE_COMMIT_DATA.stages.map((stage, i) => (
            <Reveal key={stage.step} delay={0.04 * i} className="flex-1 flex">
              <div className="w-full flex">
                <SequenceStage
                  step={stage.step}
                  title={stage.title}
                  description={stage.description}
                  showArrow={i < QUOTE_COMMIT_DATA.stages.length - 1}
                  dark
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3.5">
          {QUOTE_COMMIT_DATA.orderedList.map((item, i) => (
            <Reveal key={item} delay={0.03 * i}>
              <div className="flex gap-4">
                <span className="text-sm font-bold text-[#F4A261] w-7 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="flex-1 text-[15px] leading-[1.55] text-[#D9D0DF]">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="w-full mt-8">
          <AuthorityNotice title={QUOTE_COMMIT_DATA.notice.title} description={QUOTE_COMMIT_DATA.notice.description} dark />
        </Reveal>
      </SectionContainer>
    </div>
  );
}
