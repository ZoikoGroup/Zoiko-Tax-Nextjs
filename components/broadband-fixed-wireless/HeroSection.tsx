import React from "react";
import Image from "next/image";
import { ActionButtons, Badge, Reveal } from "./shared";
import { HERO_DATA, IMAGES } from "./broadband-data";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F3ED] xl:min-h-[770px]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] opacity-50 xl:opacity-100"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F7F3ED_0%,rgba(247,243,237,0.4)_55%,rgba(247,243,237,0)_100%)]" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 py-14 sm:px-8 sm:py-20 lg:gap-12 xl:min-h-[770px] xl:grid-cols-[minmax(0,760px)_minmax(0,600px)] xl:gap-8 xl:px-20">
        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-[34px] font-bold leading-[1.17] tracking-tight text-[#18141B] sm:text-5xl">
              {HERO_DATA.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-base font-medium leading-7 text-[#18141B] sm:text-lg">{HERO_DATA.description}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <ActionButtons actions={HERO_DATA.actions} />
          </Reveal>
          <Reveal delay={0.24}>
            <p className="text-xs font-medium text-[#18141B]">{HERO_DATA.footnote}</p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="w-full max-w-[600px]">
          <div className="relative overflow-hidden rounded-3xl border-[2.5px] border-white bg-white/25 p-5 shadow-[0_4px_4px_0_rgba(0,0,0,0.09),inset_-5px_5px_4px_0_#fff,inset_5px_-5px_4px_0_#FEFCFF] backdrop-blur-sm sm:p-7">
            <Image
              src={IMAGES.heroPanel}
              alt=""
              fill
              sizes="(min-width: 640px) 600px, 100vw"
              className="pointer-events-none object-cover"
            />
            <div className="relative flex flex-col gap-5">
              <span className="font-mono text-sm font-semibold uppercase text-[#D65A2C]">{HERO_DATA.chain.title}</span>
              {HERO_DATA.chain.steps.map((step) => (
                <div
                  key={step.tag}
                  className="flex flex-col gap-3 rounded-xl border border-[#D8CEDD] bg-white p-4 transition-transform duration-300 hover:translate-x-1 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-[#D65A2C]">{step.tag}</span>
                    <span className="text-base font-semibold text-[#18141B]">{step.title}</span>
                  </div>
                  <Badge label={step.badge} tone={step.tone} className="self-start sm:self-auto" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
