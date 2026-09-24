import React from "react";
import Image from "next/image";
import { CONTAINER, PrimaryButton, SecondaryButton, Reveal } from "./shared";
import { heroData } from "./regulatory-obligations-data";

/**
 * Figma 233:11443 (desktop): pink→lilac gradient with the data-centre photo at 20% opacity, image
 * frame extending 108px below the section. Figma 233:12502 (mobile): flat #f7ecfe with the same
 * photo at 15% opacity. Single-column hero, no breadcrumb row in the Figma header.
 */
export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7ecfe] pt-10 pb-[50px] lg:bg-[linear-gradient(-86.08deg,rgba(239,191,175,0.19)_37.214%,rgba(243,213,215,0.595)_47.262%,rgb(247,236,254)_57.309%)] lg:pt-[80px] lg:pb-[100px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.15] lg:bottom-[-108px] lg:opacity-20">
        <Image src="/regulatory-obligations/hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
      </div>

      <div className={CONTAINER}>
        <Reveal>
          <div className="flex w-full flex-col items-start gap-6 lg:w-[1167px] lg:max-w-full">
            <p className="text-[12px] font-bold uppercase leading-[normal] text-[#d65a2c] lg:text-[14px]">{heroData.eyebrow}</p>

            <h1 className="text-[32px] font-bold leading-[1.1] text-[#18141b] lg:text-[48px] lg:leading-[1.05]">{heroData.title}</h1>

            <p className="text-[15px] font-normal leading-[1.4] text-[#535055] lg:text-[18px] lg:leading-[1.5]">{heroData.description}</p>

            <p className="text-[13px] font-medium leading-[1.4] text-[#18141b] lg:text-[14px] lg:leading-[1.5]">{heroData.secondary}</p>

            <div className="flex w-full flex-col items-stretch gap-[10px] lg:w-auto lg:flex-row lg:items-center lg:gap-3">
              <PrimaryButton href="/book-demo">{heroData.primaryCta}</PrimaryButton>
              <SecondaryButton href="#coverage">{heroData.secondaryCtas[0]}</SecondaryButton>
              <SecondaryButton href="/compliance-filing">{heroData.secondaryCtas[1]}</SecondaryButton>
            </div>

            <p className="text-[11px] font-medium leading-[normal] text-[#665f69] lg:text-[12px]">{heroData.disclosure}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
