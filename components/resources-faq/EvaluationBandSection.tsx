"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { EVALUATION_DATA } from "./resources-faq-data";
import { PrimaryButton, Reveal } from "./shared";

export default function EvaluationBandSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/resources-faq/evaluation-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.84)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-16 sm:py-20 lg:py-[88px] text-center">
        <div className="mx-auto max-w-[680px] flex flex-col items-center gap-5">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold leading-[1.15] text-white">
              {EVALUATION_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-base sm:text-[17px] leading-[1.6] text-[#D9D0DF]">{EVALUATION_DATA.description}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <PrimaryButton href={EVALUATION_DATA.href}>
              <span className="inline-flex items-center gap-2">
                {EVALUATION_DATA.cta}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </PrimaryButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
