"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { NEXT_STEPS_DATA } from "./api-changelog-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function NextStepsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#25024D] py-16 sm:py-20 lg:py-[88px] text-center">
      <div className="absolute inset-0 opacity-15 pointer-events-none select-none" aria-hidden="true">
        <Image src="/api-changelog/next-steps-bg.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-8 flex flex-col items-center gap-5">
        <Reveal>
          <span className="text-xs font-bold uppercase text-[#F4A261]">{NEXT_STEPS_DATA.eyebrow}</span>
        </Reveal>

        <Reveal delay={0.06} className="w-full">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.12] text-white">
            {NEXT_STEPS_DATA.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="w-full">
          <p className="text-base leading-[1.6] text-[#D9D0DF] w-full">{NEXT_STEPS_DATA.description}</p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {NEXT_STEPS_DATA.actions.map((action) =>
              action.variant === "primary" ? (
                <PrimaryButton key={action.label} href={action.href}>
                  <span className="inline-flex items-center gap-2">
                    {action.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </PrimaryButton>
              ) : (
                <SecondaryButton
                  key={action.label}
                  href={action.href}
                  className="!bg-[#301153] !text-white !border-[#705186] hover:!bg-[#3a1763]"
                >
                  <span className="inline-flex items-center gap-2">
                    {action.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </SecondaryButton>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="text-sm text-[#D9D0DF]">{NEXT_STEPS_DATA.demoNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
