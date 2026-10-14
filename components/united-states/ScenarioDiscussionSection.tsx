"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SCENARIO_DISCUSSION_DATA as S } from "./united-states-data";
import { Reveal, PrimaryButton } from "./shared";

export default function ScenarioDiscussionSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/united-states/scenario-discussion-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,3,39,0.78)] via-[45%] via-[rgba(18,3,39,0.84)] to-[rgba(18,3,39,0.6)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-40 py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-[930px] flex flex-col items-center gap-5">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{S.title}</h2>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="text-lg leading-[1.55] text-[#D9D0DF]">{S.description}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <PrimaryButton>
                <span className="inline-flex items-center gap-2">
                  {S.actions[0].label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </PrimaryButton>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.33] bg-white/5 px-[22px] h-[50px] text-sm font-semibold text-white">
                {S.actions[1].label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
              {S.links.map((link) => (
                <span key={link} className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#F4A261]">
                  {link}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
