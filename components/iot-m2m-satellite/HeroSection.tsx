import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";
import { HERO_DATA, IMAGES } from "./iot-m2m-satellite-data";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7ECFE] lg:min-h-[650px]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] opacity-40 lg:opacity-100"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,236,254,0.95)_0%,rgba(247,236,254,0.85)_35%,rgba(243,213,215,0.35)_60%,rgba(239,191,175,0.1)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-20 lg:px-20">
        <div className="flex max-w-[864px] flex-col gap-6">
          <Reveal>
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-[34px] font-normal leading-[1.12] tracking-tight text-[#18141B] sm:text-5xl lg:text-6xl">
              {HERO_DATA.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-base leading-7 text-[#665F69] sm:text-lg">{HERO_DATA.description}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {HERO_DATA.actions.map((action) =>
                action.variant === "primary" ? (
                  <PrimaryButton key={action.label} href={action.href}>
                    {action.label}
                  </PrimaryButton>
                ) : (
                  <SecondaryButton key={action.label} href={action.href}>
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
