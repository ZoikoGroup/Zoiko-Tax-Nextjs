"use client";

import React from "react";
import Image from "next/image";
import { CONVERSION_DATA } from "./intelligence-fabric-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function ConversionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1D033B] py-16 sm:py-20 lg:py-[104px] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/intelligence-fabric/conversion-bg.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px]">
        <div className="w-full space-y-6">
          <Reveal>
            <span className="inline-block text-[14px] font-bold uppercase tracking-[0.14em] text-[#F4A261]">
              {CONVERSION_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] lg:leading-[47.52px] tracking-tight lg:tracking-[-1.5px] text-white">
              {CONVERSION_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-base sm:text-lg font-normal leading-relaxed lg:leading-7 text-[#F7D7CB]">
              {CONVERSION_DATA.description}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex flex-wrap items-center justify-start gap-3 pt-4">
              {CONVERSION_DATA.actions.map((action) =>
                action.variant === "primary" ? (
                  <PrimaryButton key={action.label} href={action.href}>
                    {action.label}
                  </PrimaryButton>
                ) : (
                  <SecondaryButton key={action.label} href={action.href}>
                    {action.label}
                  </SecondaryButton>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
