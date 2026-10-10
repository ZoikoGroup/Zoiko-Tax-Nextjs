"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CLOSING_CTA_DATA as C } from "./industry-standards-data";
import { Reveal, PrimaryButton, SecondaryButton } from "./shared";

export default function ClosingCTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1D033B]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/industry-standards/closing-cta-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(29,3,59,0.96)] via-[60%] via-[rgba(29,3,59,0.91)] to-[rgba(29,3,59,0.53)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-40 py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-[900px] flex flex-col items-center gap-5">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-white">{C.title}</h2>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="text-base sm:text-lg leading-[1.55] text-[#D9D0DF]">{C.description}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <PrimaryButton>
                <span className="inline-flex items-center gap-2">
                  {C.actions[0].label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </PrimaryButton>
              <SecondaryButton>
                <span className="inline-flex items-center gap-2">
                  {C.actions[1].label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </SecondaryButton>
              <div className="flex flex-col gap-0.5 text-left">
                <span className="text-sm font-semibold text-white">{C.destination.title}</span>
                <span className="text-xs text-[#D9D0DF]">{C.destination.note}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
