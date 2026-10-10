"use client";

import React from "react";
import Image from "next/image";
import { TEAM_EVIDENCE_DATA as T } from "./certifications-data";
import { Reveal, PrimaryButton } from "./shared";

export default function TeamEvidenceSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1D033B]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/certifications/team-evidence-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.87)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-40 py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-[880px] flex flex-col items-center gap-5">
          <Reveal>
            <span className="text-sm font-bold text-[#F4A261]">{T.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{T.title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#D9D0DF]">{T.description}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <PrimaryButton>{T.actions[0].label}</PrimaryButton>
              <span className="inline-flex items-center rounded-full border border-[#9B82B0] bg-[#281540] px-6 h-12 text-sm font-semibold text-white">
                {T.actions[1].label}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-sm font-semibold text-white">{T.requestLink}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm leading-[1.6] text-[#D9D0DF]">{T.footnote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
