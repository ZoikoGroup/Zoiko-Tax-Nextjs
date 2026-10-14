"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SCOPED_EVALUATION_DATA as S } from "./regulatory-compliance-data";
import { Reveal, PrimaryButton } from "./shared";

export default function ScopedEvaluationSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1D033B]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/regulatory-compliance/scoped-evaluation-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.85)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-40 py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-[920px] flex flex-col items-center gap-5">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{S.title}</h2>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="text-lg sm:text-[18px] leading-[1.55] text-[#D9D0DF]">{S.description}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <PrimaryButton>
                <span className="inline-flex items-center gap-2">
                  {S.actions[0].label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </PrimaryButton>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#D9D0DF] bg-[#301153] px-6 h-12 text-sm font-semibold text-white">
                {S.actions[1].label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
