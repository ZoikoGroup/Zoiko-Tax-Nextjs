"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { COEXISTENCE_DATA } from "./billing-bss-data";
import { SectionContainer, SequenceStage, AuthorityNotice, Reveal } from "./shared";

export default function CoexistenceSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#120327]">
      <div className="absolute inset-0 opacity-[0.14] pointer-events-none select-none" aria-hidden="true">
        <Image src="/billing-bss/coexistence-bg.png" alt="" fill className="object-cover" />
      </div>

      <SectionContainer className="relative">
        <Reveal>
          <div className="flex flex-col gap-3.5">
            <span className="text-xs sm:text-[13px] font-bold uppercase text-[#F4A261]">{COEXISTENCE_DATA.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] tracking-tight text-white">
              {COEXISTENCE_DATA.title}
            </h2>
            <p className="text-base sm:text-lg md:text-[20px] leading-[1.55] text-[#D9D0DF]">
              {COEXISTENCE_DATA.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-2.5 items-stretch">
            {COEXISTENCE_DATA.stages.slice(0, 4).map((stage, i) => (
              <Reveal key={stage.step} delay={0.03 * i} className="flex-1 flex">
                <div className="w-full flex">
                  <SequenceStage
                    step={stage.step}
                    title={stage.title}
                    description={stage.description}
                    showArrow={i < 3}
                    dark
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 items-stretch">
            {COEXISTENCE_DATA.stages.slice(4, 8).map((stage, i) => (
              <Reveal key={stage.step} delay={0.03 * i} className="flex-1 flex">
                <div className="w-full flex">
                  <SequenceStage
                    step={stage.step}
                    title={stage.title}
                    description={stage.description}
                    showArrow={i < 3}
                    dark
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              <p className="text-[17px] text-white">Ordered text equivalent</p>
              <p className="text-[15px] leading-[1.55] text-[#D9D0DF]">{COEXISTENCE_DATA.orderedTextEquivalent}</p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="flex flex-col gap-3">
              <p className="text-[17px] text-[#F4A261]">{COEXISTENCE_DATA.shadowBoundary.title}</p>
              <p className="text-[15px] leading-[1.55] text-[#D9D0DF]">{COEXISTENCE_DATA.shadowBoundary.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-semibold text-[#F4A261]">{COEXISTENCE_DATA.shadowBoundary.reference}</span>
                <ArrowUpRight className="h-4 w-4 text-[#F4A261]" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="w-full mt-8">
          <AuthorityNotice title={COEXISTENCE_DATA.notice.title} description={COEXISTENCE_DATA.notice.description} dark />
        </Reveal>
      </SectionContainer>
    </div>
  );
}
