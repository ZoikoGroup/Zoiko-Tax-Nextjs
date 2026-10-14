"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CLOSING_CTA_DATA as C } from "./dashboard-analytics-data";
import { Reveal, PrimaryButton } from "./shared";

export default function ClosingCTASection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/dashboard-analytics/closing-cta-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,3,39,0.78)] via-[45%] via-[rgba(18,3,39,0.84)] to-[rgba(18,3,39,0.6)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-40 py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-[900px] flex flex-col items-center gap-5">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{C.title}</h2>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#D9D0DF]">{C.description}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
              <PrimaryButton>
                <span className="inline-flex items-center gap-2">
                  {C.action.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </PrimaryButton>
              <span className="text-base font-semibold text-white">{C.secondaryLink}</span>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[13px] text-[#D9D0DF]">{C.footnote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
