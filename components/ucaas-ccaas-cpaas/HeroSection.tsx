import React from "react";
import Image from "next/image";
import { ActionButtons, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { HERO_DATA, IMAGES } from "./ucaas-data";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(6deg,#EAE3EE_41%,#FCEBDD_100%)]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image src={IMAGES.hero} alt="" fill priority sizes="100vw" className="object-cover object-right" />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-4 py-14 sm:px-8 sm:py-20 lg:px-20">
        <div className="flex max-w-[820px] flex-col gap-6">
          <Reveal>
            <span className="text-xs font-extrabold uppercase text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-[34px] font-bold leading-[1.15] tracking-tight text-[#18141B] sm:text-5xl sm:leading-[1.19]">
              {HERO_DATA.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-base leading-7 text-[#5F5862] sm:text-lg">{HERO_DATA.description}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <ActionButtons actions={HERO_DATA.actions} />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-6">
            <h2 className="text-sm font-bold uppercase text-[#D65A2C]">{HERO_DATA.matrix.title}</h2>
            <StaggerGroup className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {HERO_DATA.matrix.steps.map((step) => (
                <StaggerItem key={step.title}>
                  <div className="flex h-full flex-col gap-2 rounded-lg border border-[#D8CEDD] bg-[#F5F2EC] p-4 transition-colors hover:border-[#D65A2C]/40">
                    <h3 className="text-sm font-bold text-[#18141B]">{step.title}</h3>
                    <p className="text-xs leading-4 text-[#5F5862]">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
