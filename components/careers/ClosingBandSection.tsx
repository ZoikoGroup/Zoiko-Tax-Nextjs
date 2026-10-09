"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CLOSING_BAND_DATA as C } from "./careers-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function ClosingBandSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/careers/closing-band-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.72)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-40 py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-[880px] flex flex-col items-center gap-5">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{C.title}</h2>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#D9D0DF]">{C.description}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <PrimaryButton>
                <span className="inline-flex items-center gap-2">
                  {C.actions[0].label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </PrimaryButton>
              <SecondaryButton className="!bg-[#190A36] !text-white !border-white/10 hover:!bg-[#241248]">
                <span className="inline-flex items-center gap-2">
                  {C.actions[1].label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </SecondaryButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
