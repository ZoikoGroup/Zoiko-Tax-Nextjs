import React from "react";
import Image from "next/image";
import { ActionButtons, Notice, Reveal } from "./shared";
import { HERO_DATA, IMAGES } from "./mvne-mvna-data";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F4F5] xl:min-h-[793px]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] opacity-35 xl:opacity-100"
        />
        <div className="absolute inset-0 bg-[linear-gradient(26deg,rgba(233,213,255,0.14),rgba(254,226,226,0.14))]" />
        <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,#F4F4F5_0%,rgba(244,244,245,0.95)_68%,rgba(244,244,245,0)_100%)] xl:w-[60%]" />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] px-4 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-20 xl:min-h-[793px] xl:items-start">
        <div className="flex max-w-[680px] flex-col gap-6">
          <Reveal>
            <span className="text-xs font-bold uppercase text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-[36px] font-semibold leading-[1.08] tracking-tight text-[#18141B] sm:text-5xl lg:text-6xl lg:leading-none">
              {HERO_DATA.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-base leading-7 text-[#665F69] sm:text-lg">{HERO_DATA.description}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <Notice>{HERO_DATA.notice}</Notice>
          </Reveal>
          <Reveal delay={0.2}>
            <ActionButtons actions={HERO_DATA.actions} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
