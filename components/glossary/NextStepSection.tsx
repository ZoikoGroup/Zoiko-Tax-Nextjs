"use client";

import React from "react";
import Image from "next/image";
import { NEXT_STEP_DATA } from "./glossary-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function NextStepSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/glossary/evaluation-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.84)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-16 text-center">
        <div className="mx-auto max-w-[840px] flex flex-col items-center gap-5">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold leading-[1.15] text-white">
              {NEXT_STEP_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-base sm:text-lg leading-[1.5] text-[#D9D0DF]">{NEXT_STEP_DATA.description}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {NEXT_STEP_DATA.actions.map((action) =>
                action.variant === "primary" ? (
                  <PrimaryButton key={action.label} href={action.href}>
                    {action.label}
                  </PrimaryButton>
                ) : (
                  <SecondaryButton
                    key={action.label}
                    href={action.href}
                    className="!bg-white/[0.05] !text-white !border-white/[0.33] hover:!bg-white/10"
                  >
                    {action.label}
                  </SecondaryButton>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
