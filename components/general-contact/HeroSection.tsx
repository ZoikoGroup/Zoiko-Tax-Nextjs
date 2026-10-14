"use client";

import React from "react";
import Image from "next/image";
import { GENERAL_CONTACT_HERO_DATA } from "./general-contact-data";
import { EyebrowTag, PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  const { eyebrow, heading, description, primaryCta, secondaryCta, notice, bgImage } =
    GENERAL_CONTACT_HERO_DATA;

  return (
    <section className="relative w-full overflow-hidden min-h-[580px] lg:min-h-[724px] flex items-center bg-[#FAF7FC]">
      {/* Background Graphic from Figma */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Exact Figma linear gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(247, 243, 237, 0.97) 0%, rgba(234, 223, 240, 0.85) 54%, rgba(234, 223, 240, 0.10) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[120px] py-16 sm:py-20 lg:py-[70px]">
        <div className="max-w-[950px] flex flex-col">
          <Reveal>
            <EyebrowTag>{eyebrow}</EyebrowTag>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.08] sm:leading-[1.1] tracking-[-1.12px] text-[#1D1526] mt-1 sm:mt-2">
              {heading}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-[16px] sm:text-[17.92px] font-normal leading-[26px] sm:leading-[28.67px] text-[#5C5468] mt-4 sm:mt-5 max-w-[934px]">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mt-6 sm:mt-7">
              <PrimaryButton href={primaryCta.href}>
                {primaryCta.label}
              </PrimaryButton>
              <SecondaryButton href={secondaryCta.href}>
                {secondaryCta.label}
              </SecondaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-6 sm:mt-8 max-w-[477px] rounded-xl bg-white border border-[#E7E0F1] p-3.5 sm:p-4 shadow-sm flex items-start gap-3">
              <div className="w-[18px] h-[18px] shrink-0 mt-0.5 flex items-center justify-center">
                <Image
                  src="/general-contact/hero-chevron-down.svg"
                  alt=""
                  width={14}
                  height={17}
                  className="w-3.5 h-[17px] object-contain"
                />
              </div>
              <p className="text-[13.5px] leading-[22.27px] text-[#5C5468]">
                {notice}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
