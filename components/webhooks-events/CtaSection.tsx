"use client";

import React from "react";
import Image from "next/image";
import { BG, CTA_DATA } from "./webhooks-events-data";
import { PrimaryButton, SecondaryButton, Reveal, ArrowLink } from "./shared";

export default function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#25024D]">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image src={BG.cta} alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-8 py-16 sm:py-20 lg:py-24 flex flex-col items-center gap-5 text-center">
        <Reveal>
          <span className="text-xs sm:text-sm font-bold uppercase text-[#F4A261]">{CTA_DATA.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.04}>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.12] text-white">{CTA_DATA.title}</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-[980px] text-base sm:text-lg lg:text-xl leading-[1.6] text-[#D9D0DF]">{CTA_DATA.description}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            {CTA_DATA.actions.map((action) =>
              action.variant === "primary" ? (
                <PrimaryButton key={action.label} href={action.href}>
                  {action.label}
                </PrimaryButton>
              ) : (
                <SecondaryButton
                  key={action.label}
                  href={action.href}
                  className="!bg-transparent !text-white !border-white/50 hover:!bg-white/10"
                >
                  {action.label}
                </SecondaryButton>
              )
            )}
            <ArrowLink dark href={CTA_DATA.link.href}>
              {CTA_DATA.link.label}
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
