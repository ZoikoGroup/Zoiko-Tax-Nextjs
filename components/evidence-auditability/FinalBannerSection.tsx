"use client";

import React from "react";
import Image from "next/image";
import { FINAL_BANNER_DATA } from "./evidence-auditability-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function FinalBannerSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1D033B] py-16 sm:py-20 lg:py-[100px] text-center">
      <div className="absolute inset-0 opacity-34 pointer-events-none select-none" aria-hidden="true">
        <Image src="/evidence-auditability/final-banner-bg.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto max-w-[800px] px-4 sm:px-8 flex flex-col items-center gap-6">
        <Reveal>
          <span className="text-[13px] font-bold uppercase text-[#F4A261]">{FINAL_BANNER_DATA.eyebrow}</span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] text-white">
            {FINAL_BANNER_DATA.title}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-base sm:text-lg leading-[1.5] text-[#D9D0DF] max-w-[700px]">
            {FINAL_BANNER_DATA.description}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {FINAL_BANNER_DATA.actions.map((action) =>
              action.variant === "primary" ? (
                <PrimaryButton key={action.label} href={action.href}>
                  {action.label}
                </PrimaryButton>
              ) : action.variant === "secondary" ? (
                <SecondaryButton key={action.label} href={action.href}>
                  {action.label}
                </SecondaryButton>
              ) : (
                <SecondaryButton
                  key={action.label}
                  href={action.href}
                  className="!bg-transparent !text-white !border-white/25 hover:!bg-white/10"
                >
                  {action.label}
                </SecondaryButton>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
