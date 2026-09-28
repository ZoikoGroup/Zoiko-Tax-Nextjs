import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ActionButtons, Reveal } from "./shared";
import { HERO_DATA, IMAGES } from "./mvno-data";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F3EAFB] xl:min-h-[779px]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-40 xl:opacity-100"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F3EAFB_0%,rgba(243,234,251,0.85)_40%,rgba(243,234,251,0)_70%)]" />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-4 py-14 sm:px-8 sm:py-20 lg:px-20 xl:min-h-[779px] xl:justify-center">
        <div className="flex max-w-[1240px] flex-col gap-6">
          <Reveal>
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-[34px] font-bold leading-[1.15] tracking-tight text-[#18141B] sm:text-5xl lg:text-[56px]">
              {HERO_DATA.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-[720px] text-base leading-7 text-[#665F69] sm:text-lg">{HERO_DATA.description}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <ActionButtons actions={HERO_DATA.actions} />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="rounded-2xl border border-[#D8CEDD] bg-white p-5 shadow-[0_8px_24px_0_rgba(29,3,59,0.06)] sm:p-6">
            <span className="text-xs font-bold uppercase text-[#D65A2C] sm:text-sm">{HERO_DATA.topology.title}</span>
            <ol className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-2">
              {HERO_DATA.topology.steps.map((step, idx) => (
                <li key={step.tag} className="flex items-center gap-3">
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="text-xs font-semibold uppercase text-[#665F69]">{step.tag}</span>
                    <span className="text-sm font-bold text-[#18141B] sm:text-base">{step.title}</span>
                  </div>
                  {idx < HERO_DATA.topology.steps.length - 1 && (
                    <ArrowRight className="hidden size-4 shrink-0 text-[#B6ABBC] xl:block" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
