"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { NEXT_STEPS_DATA } from "./billing-bss-data";
import { SectionContainer, PrimaryButton, DocRef, Reveal } from "./shared";

export default function NextStepsSection() {
  const { contextualRoutes } = NEXT_STEPS_DATA;

  return (
    <div className="relative w-full overflow-hidden bg-[#120327]">
      <div className="absolute inset-0 opacity-25 pointer-events-none select-none" aria-hidden="true">
        <Image src="/billing-bss/next-steps-bg.png" alt="" fill className="object-cover" />
      </div>

      <SectionContainer className="relative">
        <Reveal>
          <div className="flex flex-col gap-3.5">
            <span className="text-xs sm:text-[13px] font-bold uppercase text-[#F4A261]">{NEXT_STEPS_DATA.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] tracking-tight text-white">
              {NEXT_STEPS_DATA.title}
            </h2>
            <p className="text-base sm:text-lg md:text-[20px] leading-[1.55] text-[#D9D0DF]">
              {NEXT_STEPS_DATA.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {NEXT_STEPS_DATA.primarySteps.map((step, i) => (
            <Reveal key={step.title} delay={0.05 * i}>
              <div className="h-full rounded-2xl bg-[#301153] p-6 flex flex-col gap-3.5">
                <span className="text-[11px] font-bold text-[#F4A261]">{step.tag}</span>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-[15px] leading-[1.55] text-[#D9D0DF]">{step.description}</p>
                <DocRef label={step.action} path={step.path} dark />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#D9D0DF]">{contextualRoutes.pattern.title}</span>
              {contextualRoutes.pattern.links.map((link) => (
                <DocRef key={link.label} label={link.label} path={link.path} dark />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#D9D0DF]">{contextualRoutes.assurance.title}</span>
              {contextualRoutes.assurance.links.map((link) => (
                <DocRef key={link.label} label={link.label} path={link.path} dark />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#D9D0DF]">{contextualRoutes.demo.title}</span>
              <p className="text-[15px] leading-[1.55] text-[#D9D0DF]">{contextualRoutes.demo.description}</p>
              <DocRef label={contextualRoutes.demo.action} path={contextualRoutes.demo.path} dark />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22} className="w-full">
          <div className="mt-8 pt-6 border-t border-[#4B305E] flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <PrimaryButton href={NEXT_STEPS_DATA.footerCta.href}>
              <span className="inline-flex items-center gap-2">
                {NEXT_STEPS_DATA.footerCta.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </PrimaryButton>
            <p className="text-sm leading-[1.5] text-[#D9D0DF]">{NEXT_STEPS_DATA.footerCta.note}</p>
          </div>
        </Reveal>
      </SectionContainer>
    </div>
  );
}
