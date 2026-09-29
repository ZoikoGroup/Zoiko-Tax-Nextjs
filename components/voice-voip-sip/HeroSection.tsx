import React from "react";
import Image from "next/image";
import { ActionButtons, Reveal } from "./shared";
import { HERO_DATA, IMAGES } from "./voice-data";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(41deg,#E9DEF0_41%,rgba(252,235,221,0.6)_100%)] xl:min-h-[771px]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image src={IMAGES.hero} alt="" fill priority sizes="100vw" className="object-cover object-right" />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] px-4 py-14 sm:px-8 sm:py-20 lg:px-20 xl:min-h-[771px] xl:items-center">
        <div className="flex max-w-[874px] flex-col gap-6">
          <Reveal>
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-[36px] font-extrabold leading-[1.12] tracking-tight text-[#18141B] sm:text-5xl sm:leading-[1.14]">
              {HERO_DATA.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-base leading-7 text-[#5F5862] sm:text-lg">{HERO_DATA.description}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-sm leading-5 text-[#6E6772]">{HERO_DATA.note}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <ActionButtons actions={HERO_DATA.actions} className="py-1.5" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
