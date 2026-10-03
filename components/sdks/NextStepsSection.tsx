"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BG, CTA_DATA } from "./sdks-data";
import { PrimaryButton, SecondaryButton, Reveal, TextLink } from "./shared";

export default function NextStepsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#25024D]">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image src={BG.cta} alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-16 sm:py-20 flex flex-col items-center gap-5 text-center">
        <Reveal className="self-start">
          <span className="text-xs font-bold uppercase text-[#F4A261]">{CTA_DATA.eyebrow}</span>
        </Reveal>

        <Reveal delay={0.04}>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.12] text-white">{CTA_DATA.title}</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="max-w-[940px] text-base sm:text-lg leading-[1.6] text-[#D9D0DF]">{CTA_DATA.description}</p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {CTA_DATA.actions.map((action) =>
              action.variant === "primary" ? (
                <PrimaryButton key={action.label} href={action.href}>
                  <span className="inline-flex items-center gap-2.5">
                    {action.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </PrimaryButton>
              ) : (
                <SecondaryButton
                  key={action.label}
                  href={action.href}
                  className="!bg-[#301153] !text-white !border-[#705186] hover:!bg-[#3a1763]"
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
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {CTA_DATA.links.map((l) => (
              <TextLink key={l.label} dark href={l.href}>
                {l.label}
              </TextLink>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="w-full">
          <div className="mt-4 border-t border-white/15 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-left">
            <p className="text-sm text-[#D9D0DF]">{CTA_DATA.demoNote}</p>
            <TextLink dark href={CTA_DATA.demoLink.href} className="shrink-0">
              {CTA_DATA.demoLink.label}
            </TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
