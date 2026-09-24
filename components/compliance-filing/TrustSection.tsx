import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, SecondaryButton, Reveal } from "./shared";
import { trustSecurity } from "./compliance-filing-data";

/**
 * Figma 233:10070 (desktop): rgba(29,3,59,0.88) fill + server corridor photo at 29% opacity,
 * cropped (h 207.49%, top -26.27%) inside a frame that extends 140px below the section.
 * Figma 233:11050 (mobile): separate photo under rgba(29,3,59,0.81).
 */
export default function TrustSection() {
  return (
    <SectionContainer
      className="lg:bg-[rgba(29,3,59,0.88)]"
      innerClassName="flex flex-col gap-8 lg:gap-10"
      background={
        <>
          <div aria-hidden className="pointer-events-none absolute inset-0 lg:hidden">
            <Image src="/compliance-filing/trust-security-mobile-bg.webp" alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(29,3,59,0.81)]" />
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 bottom-[-140px] hidden overflow-hidden opacity-[0.29] lg:block">
            <Image
              src="/compliance-filing/trust-security-desktop-bg.webp"
              alt=""
              width={1024}
              height={1024}
              sizes="100vw"
              className="absolute top-[-26.27%] left-[0.01%] h-[207.49%] w-full max-w-none object-cover"
            />
          </div>
        </>
      }
    >
      <Reveal>
        <SectionHeader
          dark
          eyebrow={trustSecurity.eyebrow}
          title={trustSecurity.title}
          description={trustSecurity.description}
          descriptionClassName="leading-[normal] lg:leading-[normal]"
        />
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-3 leading-[normal] lg:grid-cols-3 lg:gap-6">
        {trustSecurity.cards.map((card, idx) => (
          <Reveal key={card.title} delay={0.05 * idx}>
            <div className="flex flex-col items-start gap-[6px] rounded-[12px] border border-white/10 bg-[#260047] p-4 lg:gap-3 lg:rounded-[16px] lg:p-6">
              <h3 className="font-sora text-[15px] font-bold whitespace-nowrap text-white lg:text-[16px]">{card.title}</h3>
              <p className="font-manrope text-[13px] font-normal text-[#d8cedd]">{card.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="flex w-full justify-center lg:pt-4">
        <SecondaryButton
          href="/trust-center"
          className="w-full px-5 text-[13px] shadow-none lg:w-auto lg:px-[22px] lg:text-[14px] lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]"
        >
          {trustSecurity.ctaLabel}
        </SecondaryButton>
      </div>
    </SectionContainer>
  );
}
