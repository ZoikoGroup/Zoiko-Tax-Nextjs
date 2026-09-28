import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, SecondaryButton, Reveal } from "./shared";
import { evidenceReplay } from "./compliance-filing-data";

/**
 * Figma 233:9925 (desktop): rgba(29,3,59,0.84) fill + server-room photo at 27% opacity (image frame
 * extends 140px below). Figma 233:10917 (mobile): separate photo under rgba(29,3,59,0.79).
 */
export default function EvidenceReplaySection() {
  return (
    <SectionContainer
      className="lg:bg-[rgba(29,3,59,0.84)]"
      innerClassName="flex flex-col gap-8 lg:gap-10"
      background={
        <>
          <div aria-hidden className="pointer-events-none absolute inset-0 lg:hidden">
            <Image src="/compliance-filing/evidence-replay-mobile-bg.webp" alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(29,3,59,0.79)]" />
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 bottom-[-140px] hidden opacity-[0.27] lg:block">
            <Image src="/compliance-filing/evidence-replay-desktop-bg.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
        </>
      }
    >
      <Reveal>
        <SectionHeader
          dark
          eyebrow={evidenceReplay.eyebrow}
          title={evidenceReplay.title}
          mobileTitle={evidenceReplay.mobileTitle}
          description={evidenceReplay.description}
          descriptionClassName="leading-[normal] lg:leading-[normal]"
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="flex w-full flex-col items-stretch gap-4 lg:flex-row lg:items-start lg:gap-6">
          <div className="flex min-w-px flex-1 flex-col items-start gap-3 rounded-[12px] border border-white/10 bg-[#260047] p-5 lg:gap-4 lg:rounded-[16px] lg:p-8">
            <h3 className="font-sora text-[15px] font-bold leading-[normal] whitespace-nowrap text-white lg:text-[18px]">
              {evidenceReplay.archiveTitle}
            </h3>
            <ul className="flex w-full flex-col gap-3 lg:gap-4">
              {evidenceReplay.items.map((item) => (
                <li key={item} className="flex w-full items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/compliance-filing/icon-check-amber.svg" alt="" aria-hidden className="size-[10px] shrink-0 lg:size-3" />
                  <span className="min-w-px flex-1 font-manrope text-[12px] font-normal leading-[normal] text-[#d8cedd] lg:flex-none lg:text-[13px] lg:whitespace-nowrap">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full shrink-0 flex-col items-center justify-center gap-4 rounded-[12px] bg-[#5b2a86] p-5 lg:w-[340px] lg:gap-5 lg:rounded-[16px] lg:p-8">
            <p className="w-full text-center font-sora text-[14px] font-bold leading-[normal] text-white lg:w-auto lg:text-[16px] lg:whitespace-nowrap">
              {evidenceReplay.ctaTitle}
            </p>
            <SecondaryButton
              href="/evidence-replay"
              className="w-full px-5 text-[13px] shadow-none lg:w-auto lg:px-[22px] lg:text-[14px] lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]"
            >
              {evidenceReplay.ctaLabel}
            </SecondaryButton>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
