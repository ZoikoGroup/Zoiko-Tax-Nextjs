import React from "react";
import Image from "next/image";
import { Section, SectionHeading, PrimaryButton, SecondaryButton, Reveal } from "./shared";
import { filingInterlock } from "./regulatory-obligations-data";

/**
 * Figma 233:11933 (desktop): #100031 fill + server-room photo at 29% opacity, image frame extending
 * 140px below. Figma 233:12959 (mobile): rgba(16,0,49,0.92) fill with the same photo at 25% on top.
 * (Mobile Figma sets the description to #535055, which is unreadable on the dark fill; the desktop
 * #d9d0df is used at both sizes.)
 */
export default function FilingInterlockSection() {
  return (
    <Section
      className="bg-[#100031] py-12 lg:py-[104px]"
      innerClassName="flex flex-col gap-7 lg:gap-10"
      background={
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[rgba(16,0,49,0.92)] lg:hidden" />
          <div className="absolute inset-0 opacity-25 lg:bottom-[-140px] lg:opacity-[0.29]">
            <Image src="/regulatory-obligations/filing-interlock-bg.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
        </div>
      }
    >
      <Reveal>
        <SectionHeading
          eyebrow={filingInterlock.eyebrow}
          title={filingInterlock.title}
          description={filingInterlock.description}
          dark
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
        {filingInterlock.steps.map((step, idx) => (
          <Reveal key={step.step} delay={0.04 * idx} className="h-full">
            <div className="flex h-full flex-col items-start gap-2 rounded-[12px] bg-[rgba(255,255,255,0.1)] p-4 leading-[normal] lg:gap-3 lg:rounded-[16px] lg:p-6">
              <span className="font-mono text-[11px] font-normal text-[#f4a261] lg:text-[12px]">{step.step}</span>
              <h3 className="text-[15px] font-bold text-white lg:text-[16px]">{step.title}</h3>
              <p className="text-[13px] font-normal text-[#d9d0df] lg:text-[12px] lg:leading-[1.4]">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="flex w-full flex-col items-stretch gap-[10px] lg:w-auto lg:flex-row lg:items-center lg:gap-3">
          <PrimaryButton href={filingInterlock.ctas.primary.href}>{filingInterlock.ctas.primary.label}</PrimaryButton>
          {filingInterlock.ctas.secondary.map((cta) => (
            <SecondaryButton key={cta.label} href={cta.href}>
              {cta.label}
            </SecondaryButton>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
