"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BG, HERO_DATA } from "./data-enterprise-systems-data";
import { ArrowLink, Notice, PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F3ED]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src={BG.hero} alt="" fill priority className="object-cover object-right" />
        {/* Extra wash on small screens where text overlaps the busier right side of the image */}
        <div className="absolute inset-0 bg-[rgba(247,243,237,0.6)] lg:bg-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-16 sm:py-20 lg:min-h-[770px] flex flex-col justify-center gap-10">
        <div className="max-w-[744px] flex flex-col gap-5 sm:gap-6">
          <Reveal>
            <span className="text-xs font-bold text-[#B4561E]">{HERO_DATA.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="text-[34px] sm:text-5xl lg:text-[60px] font-bold leading-[1.04] tracking-tight text-[#18141B]">
              {HERO_DATA.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-[1.6] text-[#665F69]">{HERO_DATA.description}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center gap-3">
              {HERO_DATA.actions.map((action) =>
                action.variant === "primary" ? (
                  <PrimaryButton key={action.label} href={action.href} className="w-full sm:w-auto">
                    <span className="inline-flex items-center gap-2.5">
                      {action.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </PrimaryButton>
                ) : (
                  <SecondaryButton key={action.label} href={action.href} className="w-full sm:w-auto">
                    <span className="inline-flex items-center gap-2.5">
                      {action.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </SecondaryButton>
                )
              )}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <ArrowLink href={HERO_DATA.link.href}>{HERO_DATA.link.label}</ArrowLink>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <Notice description={HERO_DATA.notice} />
        </Reveal>
      </div>
    </section>
  );
}
