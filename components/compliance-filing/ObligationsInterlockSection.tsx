import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, SecondaryButton, Reveal } from "./shared";
import { obligationsInterlock } from "./compliance-filing-data";

/**
 * Figma 233:9887 (desktop): rgba(29,3,59,0.84) fill + office photo at 28% opacity (image frame
 * extends 140px below the section). Figma 233:10880 (mobile): separate artwork under an
 * rgba(29,3,59,0.8) overlay.
 */
export default function ObligationsInterlockSection() {
  return (
    <SectionContainer
      className="lg:bg-[rgba(29,3,59,0.84)]"
      innerClassName="flex flex-col gap-8 lg:gap-10"
      background={
        <>
          <div aria-hidden className="pointer-events-none absolute inset-0 lg:hidden">
            <Image src="/compliance-filing/obligations-interlock-mobile-bg.webp" alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(29,3,59,0.8)]" />
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 bottom-[-140px] hidden opacity-[0.28] lg:block">
            <Image src="/compliance-filing/obligations-interlock-desktop-bg.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
        </>
      }
    >
      <Reveal>
        <SectionHeader
          dark
          eyebrow={obligationsInterlock.eyebrow}
          title={obligationsInterlock.title}
          description={obligationsInterlock.description}
          descriptionClassName="leading-[normal] lg:leading-[normal]"
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="flex w-full flex-col items-stretch gap-4 lg:flex-row lg:items-start lg:gap-6">
          <div className="flex min-w-px flex-1 flex-col items-start gap-[10px] rounded-[12px] border border-white/10 bg-[#260047] p-5 leading-[normal] lg:gap-3 lg:rounded-[16px] lg:p-6">
            <h3 className="font-sora text-[15px] font-bold whitespace-nowrap text-white lg:text-[18px]">
              <span className="lg:hidden">{obligationsInterlock.flowTitleMobile}</span>
              <span className="hidden lg:inline">{obligationsInterlock.flowTitle}</span>
            </h3>
            <div className="font-manrope text-[13px] font-normal text-[#d8cedd] lg:text-[14px]">
              <div className="lg:hidden">
                {obligationsInterlock.flowSteps.map((step) => (
                  <p key={step} className="leading-[1.5]">
                    {step}
                  </p>
                ))}
              </div>
              <p className="hidden leading-[normal] lg:block">{obligationsInterlock.flowSteps.join(" ")}</p>
            </div>
          </div>
          <div className="flex w-full shrink-0 flex-col items-center justify-center gap-4 rounded-[12px] bg-[#5b2a86] p-5 lg:w-[340px] lg:gap-5 lg:rounded-[16px] lg:p-6">
            <p className="w-full text-center font-sora text-[14px] font-bold leading-[normal] text-white lg:w-auto lg:text-[16px] lg:whitespace-nowrap">
              {obligationsInterlock.ctaTitle}
            </p>
            <SecondaryButton
              href="/regulatory-obligations"
              className="w-full px-5 text-[13px] shadow-none lg:w-auto lg:px-[22px] lg:text-[14px] lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]"
            >
              {obligationsInterlock.ctaLabel}
            </SecondaryButton>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
