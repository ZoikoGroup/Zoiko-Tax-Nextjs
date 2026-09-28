import React from "react";
import Image from "next/image";
import { CONTAINER, PrimaryButton, SecondaryButton, Reveal } from "./shared";
import { conversionData } from "./compliance-filing-data";

/**
 * Figma 233:10133 (desktop): rgba(29,3,59,0.86) fill + cabling photo at 34% opacity (image frame
 * extends 132px below). Figma 233:11135 (mobile): separate photo under rgba(29,3,59,0.82).
 */
export default function ConversionSection() {
  return (
    <section id="demo" className="relative w-full overflow-hidden py-16 lg:bg-[rgba(29,3,59,0.86)] lg:py-[120px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 lg:hidden">
        <Image src="/compliance-filing/final-conversion-mobile-bg.webp" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.82)]" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 bottom-[-132px] hidden opacity-[0.34] lg:block">
        <Image src="/compliance-filing/final-conversion-desktop-bg.webp" alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className={CONTAINER}>
        <Reveal>
          <div className="flex w-full flex-col items-center justify-center gap-6 text-center leading-[normal] lg:gap-8">
            <p className="font-manrope text-[12px] font-bold whitespace-nowrap text-[#d97637] uppercase lg:text-[14px]">{conversionData.eyebrow}</p>
            <h2 className="w-full font-sora text-[26px] font-extrabold text-white lg:w-[800px] lg:text-[40px]">{conversionData.title}</h2>
            <p className="w-full font-manrope text-[14px] font-normal leading-[1.5] text-[#d8cedd] lg:w-[700px] lg:text-[16px] lg:leading-[normal]">
              {conversionData.description}
            </p>
            <div className="flex w-full flex-col items-stretch gap-3 pt-3 lg:w-auto lg:flex-row lg:items-start lg:pt-4">
              <PrimaryButton href="/book-demo" className="w-full shadow-none lg:w-auto lg:shadow-[inset_0px_-2px_4px_0px_#fdcfbe,inset_0px_3px_4px_0px_#ffdfd3]">
                Book a Demo
              </PrimaryButton>
              <SecondaryButton href="#coverage" className="w-full shadow-none lg:w-auto lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]">
                View Current Coverage
              </SecondaryButton>
              <SecondaryButton href="/regulatory-obligations" className="w-full shadow-none lg:w-auto lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]">
                Explore Obligations
              </SecondaryButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
