import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, SecondaryButton, Reveal } from "./shared";
import { coverageTruth } from "./compliance-filing-data";

/**
 * Figma 233:9983 (desktop): dashboard screenshot under rgba(29,3,59,0.9).
 * Figma 233:10969 (mobile): tower photo under rgba(29,3,59,0.76).
 */
export default function CoverageSection() {
  return (
    <SectionContainer
      id="coverage"
      innerClassName="flex flex-col gap-8 lg:gap-10"
      background={
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image src="/compliance-filing/coverage-truth-mobile-bg.webp" alt="" fill sizes="100vw" className="object-cover lg:hidden" />
          <Image src="/compliance-filing/coverage-truth-desktop-bg.webp" alt="" fill sizes="100vw" className="hidden object-cover lg:block" />
          <div className="absolute inset-0 bg-[rgba(29,3,59,0.76)] lg:bg-[rgba(29,3,59,0.9)]" />
        </div>
      }
    >
      <Reveal>
        <SectionHeader
          dark
          eyebrow={coverageTruth.eyebrow}
          title={coverageTruth.title}
          mobileTitle={coverageTruth.mobileTitle}
          description={coverageTruth.description}
          descriptionClassName="leading-[normal] lg:leading-[normal]"
        />
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-4 leading-[normal] lg:grid-cols-2 lg:gap-6">
        <Reveal delay={0.05}>
          <div className="flex flex-col items-start gap-3 rounded-[12px] border border-white/10 bg-[#260047] p-5 lg:gap-4 lg:rounded-[16px] lg:p-8">
            <h3 className="font-sora text-[15px] font-bold whitespace-nowrap text-white lg:text-[18px]">{coverageTruth.classificationsTitle}</h3>
            {coverageTruth.classifications.map((c) => (
              <div key={c.label} className="flex w-full flex-col items-start gap-[2px] lg:flex-row lg:items-center lg:gap-3">
                <span className="font-jetbrains text-[11px] font-bold whitespace-nowrap text-[#d97637] lg:w-[140px] lg:shrink-0 lg:text-[12px]">{c.label}</span>
                <span className="font-manrope text-[12px] font-normal text-[#d8cedd] lg:text-[13px] lg:whitespace-nowrap">{c.detail}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col items-start gap-3 rounded-[12px] border border-white/10 bg-[#260047] p-5 lg:gap-4 lg:rounded-[16px] lg:p-8">
            <h3 className="font-sora text-[15px] font-bold whitespace-nowrap text-white lg:text-[18px]">{coverageTruth.marketsTitle}</h3>
            {coverageTruth.markets.map((m) => (
              <div
                key={m.name}
                className="flex w-full flex-col items-start gap-1 border-b border-white/10 pb-2 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:border lg:pb-3 lg:whitespace-nowrap"
              >
                <div className="flex w-full items-center justify-between whitespace-nowrap lg:contents">
                  <span className="font-manrope text-[13px] font-semibold text-white lg:text-[14px]">{m.name}</span>
                  <span className="font-jetbrains text-[11px] font-normal text-[#d97637] lg:order-3 lg:text-[12px]">{m.status}</span>
                </div>
                <span className="w-full font-manrope text-[11px] font-normal text-[#d8cedd] lg:order-2 lg:w-auto lg:text-[13px]">{m.scope}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="flex w-full justify-center lg:pt-4">
        <SecondaryButton
          href="/coverage"
          className="w-full px-5 text-[13px] shadow-none lg:w-auto lg:px-[22px] lg:text-[14px] lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]"
        >
          {coverageTruth.ctaLabel}
        </SecondaryButton>
      </div>
    </SectionContainer>
  );
}
