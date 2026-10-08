"use client";

import React from "react";
import Image from "next/image";
import { CURRENTNESS_DATA } from "./resources-faq-data";
import { SectionContainer, Reveal } from "./shared";

export default function CurrentnessOwnershipSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/resources-faq/currentness-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(48,17,83,0.9)]" />
      </div>

      <SectionContainer className="relative">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <Reveal className="w-full lg:w-[440px] shrink-0">
            <div className="flex flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#F4A261]">{CURRENTNESS_DATA.eyebrow}</span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-[1.1] text-white">{CURRENTNESS_DATA.title}</h2>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex-1 min-w-0">
            <div className="flex flex-col gap-4">
              <p className="text-base sm:text-[17px] leading-[1.6] text-white">{CURRENTNESS_DATA.paragraphs[0]}</p>
              <p className="text-sm sm:text-[15px] leading-[1.6] text-[#D9D0DF]">{CURRENTNESS_DATA.paragraphs[1]}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <span className="mt-12 block text-xs font-bold uppercase tracking-[0.08em] text-[#F4A261]">
            {CURRENTNESS_DATA.statesLabel}
          </span>
        </Reveal>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CURRENTNESS_DATA.states.map((state, i) => (
            <Reveal key={state.title} delay={0.03 * i}>
              <div className="h-full rounded-2xl bg-[#432465] border border-[#765789] p-5 flex flex-col gap-2">
                <h3 className="text-base font-semibold text-white">{state.title}</h3>
                <p className="text-sm leading-[1.55] text-[#D9D0DF]">{state.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16} className="w-full mt-8">
          <p className="text-sm leading-[1.6] text-[#D9D0DF] max-w-[900px]">{CURRENTNESS_DATA.footer}</p>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
