"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HERO_DATA } from "./partnerships-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[720px] lg:min-h-[771px] flex items-center bg-[#F7F3ED]">
      {/* Background Image: Office Team Discussion */}
      <div className="absolute inset-0 select-none pointer-events-none" aria-hidden="true">
        <picture>
          <source srcSet="/partnerships/hero-partnerships-bg.webp" type="image/webp" />
          <Image
            src="/partnerships/hero-partnerships-bg.png"
            alt="ZoikoTax Partnerships"
            fill
            priority
            className="object-cover object-right"
          />
        </picture>
        {/* Figma Linear Gradient: left-to-right white/cream overlay for high legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(247, 243, 237, 0.97) 0%, rgba(234, 223, 240, 0.85) 54%, rgba(234, 223, 240, 0.10) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[120px] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[720px]">
          {/* Eyebrow */}
          <Reveal delay={0.05}>
            <p className="text-[12.5px] font-bold text-[#D9743E] tracking-[1.875px] uppercase leading-[21px] mb-3">
              {HERO_DATA.eyebrow}
            </p>
          </Reveal>

          {/* Heading 1 */}
          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1D1526] leading-[1.12] tracking-tight mb-4 sm:mb-6">
              {HERO_DATA.title}
            </h1>
          </Reveal>

          {/* Paragraph */}
          <Reveal delay={0.15}>
            <p className="text-base sm:text-[17.92px] leading-[1.6] text-[#5C5468] mb-6 sm:mb-8">
              {HERO_DATA.description}
            </p>
          </Reveal>

          {/* Actions */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3">
              <PrimaryButton href={HERO_DATA.primaryCta.href}>
                {HERO_DATA.primaryCta.label}
              </PrimaryButton>
              <SecondaryButton href={HERO_DATA.secondaryCta.href}>
                {HERO_DATA.secondaryCta.label}
              </SecondaryButton>
            </div>
            <p className="text-[12.5px] font-semibold text-[#5C5468] mb-6 sm:mb-8">
              {HERO_DATA.ctaNote}
            </p>
          </Reveal>

          {/* Specific Routing Quick Links */}
          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm mb-8 sm:mb-10">
              <span className="text-[#8A8198] text-[14px]">
                {HERO_DATA.quickLinksIntro}
              </span>
              {HERO_DATA.quickLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="font-semibold text-[14px] text-[#C35D29] hover:underline underline-offset-4 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Disclaimer Card */}
          <Reveal delay={0.3}>
            <div className="inline-flex items-start gap-3 bg-white border border-[#E7E0F1] rounded-xl p-4 sm:p-5 max-w-[520px] shadow-sm">
              <div className="flex-shrink-0 mt-0.5">
                <Image
                  src="/partnerships/icon-disclaimer-shield.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px]"
                />
              </div>
              <p className="text-[13.5px] leading-[22px] text-[#5C5468]">
                {HERO_DATA.disclaimer}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
