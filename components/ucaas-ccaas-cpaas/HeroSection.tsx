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
          className="object-cover object-[75%_center] opacity-90 xl:opacity-100"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F4F4F5_0%,rgba(244,244,245,0.92)_48%,rgba(244,244,245,0.15)_100%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-4 py-[45px] sm:px-8 lg:px-20 xl:min-h-[820px] xl:justify-center">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-wider text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="max-w-[760px] text-4xl font-bold leading-[1.08] tracking-tight text-[#18141B] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.02]">
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
              label: action.label.endsWith("↗") ? action.label : `${action.label} ↗`,
              variant: action.variant === "primary" ? "primary" : "secondary",
            }))}
            className="pt-1"
          />
        </Reveal>
        <Reveal delay={0.24}>
          <p className="text-xs font-semibold text-[#18141B]">
            {HERO_DATA.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
