import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, PatternBackground, Reveal } from "./shared";
import { whyHardChallenges, whyHardSectionHeader } from "./compliance-filing-data";

/**
 * Figma 233:9625 (desktop): white section with the diamond line pattern, cards filled with the
 * lilac diagonal artwork. Figma 233:10550 (mobile): dark photo with rgba(29,3,59,0.95) overlay and
 * plain white cards.
 */
export default function WhyHardSection() {
  return (
    <SectionContainer
      className="lg:bg-white"
      innerClassName="flex flex-col gap-8 lg:gap-10"
      background={
        <>
          <div aria-hidden className="pointer-events-none absolute inset-0 lg:hidden">
            <Image src="/compliance-filing/why-hard-mobile-bg.webp" alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(29,3,59,0.95)]" />
          </div>
          <PatternBackground className="hidden lg:block" />
        </>
      }
    >
      <Reveal>
        {/* Figma desktop sets this heading in white/#d8cedd over the white pattern (unreadable);
            desktop uses the page's standard dark heading colours so the copy stays legible. */}
        <SectionHeader
          dark
          eyebrow={whyHardSectionHeader.eyebrow}
          title={whyHardSectionHeader.title}
          mobileTitle={whyHardSectionHeader.mobileTitle}
          description={whyHardSectionHeader.description}
          titleClassName="lg:text-[#18141b]"
          descriptionClassName="lg:text-[#665f69] lg:leading-[normal]"
        />
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-[14px] lg:grid-cols-3 lg:gap-4">
        {whyHardChallenges.map((card, idx) => (
          <Reveal key={card.number} delay={0.04 * idx}>
            <div className="relative flex flex-col items-start gap-2 overflow-hidden rounded-[12px] border border-white/10 bg-white p-4 lg:gap-3 lg:rounded-[16px] lg:bg-transparent lg:p-6">
              <Image
                src="/compliance-filing/card-bg-lilac-diagonal.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 416px, 0px"
                className="pointer-events-none hidden object-cover lg:block"
              />
              <span className="relative font-jetbrains text-[11px] font-bold leading-[normal] text-[#d97637] lg:text-[12px]">
                {card.number}
              </span>
              <h3 className="relative font-sora text-[15px] font-bold leading-[normal] text-[#18141b] lg:text-[18px] lg:text-[#0a2029]">
                {card.title}
              </h3>
              <p className="relative font-manrope text-[12px] font-normal leading-[1.4] text-[#665f69] lg:text-[13px] lg:leading-[1.5] lg:text-[#504e51]">
                {card.challenge}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
