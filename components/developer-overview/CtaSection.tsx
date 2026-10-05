"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BG, CTA_DATA } from "./developer-overview-data";
import { ArrowLink, PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#25024D]">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image src={BG.cta} alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-16 sm:py-20 lg:py-24 flex flex-col items-center gap-5 text-center">
        <Reveal>
          <span className="text-xs font-bold uppercase text-[#F4A261]">{CTA_DATA.eyebrow}</span>
        </Reveal>

        <Reveal delay={0.04}>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.12] text-white">{CTA_DATA.title}</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="max-w-[860px] text-base sm:text-lg lg:text-xl leading-[1.6] text-[#D9D0DF]">{CTA_DATA.description}</p>
        </Reveal>

        <Reveal delay={0.12} className="w-full">
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {CTA_DATA.actions.map((action) =>
              action.variant === "primary" ? (
                <PrimaryButton key={action.label} href={action.href} className="w-full sm:w-auto">
                  <span className="inline-flex items-center gap-2.5">
                    {action.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </PrimaryButton>
              ) : (
                <SecondaryButton
                  key={action.label}
                  href={action.href}
                  className="w-full sm:w-auto !bg-transparent !text-white !border-white/40 hover:!bg-white/10 !shadow-none"
                >
                  <span className="inline-flex items-center gap-2.5">
                    {action.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </SecondaryButton>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="pt-2">
            <ArrowLink dark href={CTA_DATA.demoLink.href}>
              {CTA_DATA.demoLink.label}
            </ArrowLink>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-sm text-[#D9D0DF]">{CTA_DATA.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
