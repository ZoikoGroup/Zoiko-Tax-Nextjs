import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ActionButtons, Reveal } from "./shared";
import { HERO_DATA, IMAGES } from "./ucaas-data";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F4F5] xl:min-h-[820px]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] opacity-30 xl:opacity-100"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F4F4F5_0%,rgba(244,244,245,0.95)_52%,rgba(228,228,231,0.5)_100%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-4 py-16 sm:px-8 sm:py-20 lg:px-20 xl:min-h-[820px] xl:justify-center">
        <Reveal>
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="max-w-[760px] text-4xl font-bold leading-[1.1] tracking-tight text-[#18141B] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.02]">
            {HERO_DATA.title}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-[720px] text-lg font-medium leading-7 text-[#78716C]">{HERO_DATA.description}</p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-[710px] text-base font-medium leading-6 text-[#18141B]">{HERO_DATA.note}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <ActionButtons
            actions={HERO_DATA.actions.map((action) => ({
              ...action,
              variant: action.variant === "primary" ? "primary" : "secondary",
            }))}
            className="pt-1"
          />
        </Reveal>
        <Reveal delay={0.24}>
          <p className="flex items-center gap-2 text-xs font-semibold text-[#18141B]">
            <ArrowUpRight className="size-3.5 shrink-0 text-[#D65A2C]" strokeWidth={2} aria-hidden="true" />
            {HERO_DATA.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
