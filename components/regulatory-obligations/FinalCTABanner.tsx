import React from "react";
import Image from "next/image";
import { CONTAINER, PrimaryButton, SecondaryButton, Reveal } from "./shared";
import { finalCta } from "./regulatory-obligations-data";

/**
 * Figma 233:12157 (desktop): full-bleed data-centre photo at 100% (the photo itself is dark), 1px
 * rgba(255,255,255,0.1) top/bottom rules, 112px side padding (80px container + 32px inset), 120px
 * vertical, centred copy. Figma 233:13167 (mobile): rgba(16,0,49,0.95) fill with the same photo at
 * 30% on top, left-aligned, 64px vertical.
 */
export default function FinalCTABanner() {
  return (
    <section id="demo" className="relative w-full overflow-hidden bg-[#100031] py-16 lg:border-y lg:border-[rgba(255,255,255,0.1)] lg:py-[120px]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[rgba(16,0,49,0.95)] lg:hidden" />
        <div className="absolute inset-0 opacity-30 lg:opacity-100">
          <Image src="/regulatory-obligations/final-cta-bg.webp" alt="" fill sizes="100vw" className="object-cover" />
        </div>
      </div>

      <div className={CONTAINER}>
        <Reveal>
          <div className="flex w-full flex-col items-start gap-8 lg:gap-12 lg:px-8">
            <div className="flex w-full flex-col items-start gap-3 lg:items-center lg:gap-5 lg:text-center">
              <p className="w-full text-[12px] font-bold uppercase leading-[normal] text-[#f4a261] lg:text-[14px]">{finalCta.eyebrow}</p>
              <h2 className="w-full text-[26px] font-bold leading-[1.15] text-white lg:text-[44px] lg:leading-[1.08]">{finalCta.title}</h2>
              <p className="w-full text-[14px] font-normal leading-[1.4] text-[#d9d0df] lg:text-[18px] lg:leading-[1.5]">{finalCta.description}</p>
            </div>
            <div className="flex w-full flex-col items-stretch gap-[10px] lg:flex-row lg:items-center lg:justify-center lg:gap-3">
              <PrimaryButton href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</PrimaryButton>
              {finalCta.secondaryCtas.map((cta) => (
                <SecondaryButton key={cta.label} href={cta.href}>
                  {cta.label}
                </SecondaryButton>
              ))}
            </div>
            <p className="w-full text-[12px] font-normal leading-[normal] text-[#d9d0df] lg:text-center lg:text-[13px] lg:font-medium">{finalCta.footnote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
