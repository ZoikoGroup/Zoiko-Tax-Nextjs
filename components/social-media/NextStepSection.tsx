"use client";

import React from "react";
import Image from "next/image";
import { LockKeyhole } from "lucide-react";
import { NEXT_STEP_DATA as N } from "./social-media-data";
import { Reveal } from "./shared";

export default function NextStepSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/social-media/next-step-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.78)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-40 py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-[900px] flex flex-col items-center gap-5">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{N.title}</h2>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="text-base sm:text-lg leading-[1.5] text-[#D9D0DF]">{N.description}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-[#BF6735] border border-[#DD7235] px-[22px] h-12 text-sm font-semibold text-white shadow-[inset_0px_-2px_4px_0px_#fdcfbe,inset_0px_3px_4px_0px_#ffdfd3]">
              {N.action}
              <LockKeyhole className="h-4 w-4" aria-hidden="true" />
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[13px] text-[#D9D0DF]">{N.actionNote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
