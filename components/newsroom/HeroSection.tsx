"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { NEWSROOM_HERO_DATA } from "./newsroom-data";
import { Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative isolate w-full overflow-hidden min-h-[580px] lg:min-h-[660px] flex items-center bg-white">
      {/* Background newsroom image */}
      <div className="absolute inset-0 -z-20 pointer-events-none select-none" aria-hidden="true">
        <Image
          src={NEWSROOM_HERO_DATA.backgroundImage}
          alt="Official ZoikoTax Corporate Announcements"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      {/* Gradient overlay for text readability on left while keeping photo natural and clear */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 via-[36%] to-transparent to-[55%] lg:from-white lg:via-white/85 lg:via-[28%] lg:to-transparent lg:to-[46%] pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[540px] flex flex-col">
          <Reveal>
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {NEWSROOM_HERO_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.08] tracking-[-0.02em] text-[#18141B] mt-3 sm:mt-4 whitespace-pre-line">
              {NEWSROOM_HERO_DATA.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-[#55505C] leading-relaxed mt-4 sm:mt-5">
              {NEWSROOM_HERO_DATA.description}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mt-6 sm:mt-7">
              <a
                href={NEWSROOM_HERO_DATA.primaryCta.href}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-md bg-[#BF6735] hover:bg-[#A85324] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                {NEWSROOM_HERO_DATA.primaryCta.label}
              </a>
              <Link
                href={NEWSROOM_HERO_DATA.secondaryCta.href}
                className="inline-flex items-center gap-1 px-4 sm:px-5 py-2.5 rounded-md bg-white border border-[#D8CEDD] hover:bg-gray-50 text-[#18141B] text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                {NEWSROOM_HERO_DATA.secondaryCta.label}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-5 sm:mt-6">
              <Link
                href={NEWSROOM_HERO_DATA.blogLink.href}
                className="inline-flex items-center gap-1 text-xs sm:text-[13px] font-semibold text-[#BF6735] hover:text-[#A85324] transition-colors"
              >
                <span>{NEWSROOM_HERO_DATA.blogLink.label}</span>
              </Link>
              <span className="text-[11px] text-[#7A7582] font-mono block mt-0.5">
                {NEWSROOM_HERO_DATA.blogLink.path}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-4 sm:mt-5 max-w-[490px] rounded-xl bg-white/95 backdrop-blur-sm border border-[#E2DBE7] p-3.5 sm:p-4 shadow-sm flex flex-col gap-1.5">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#F3ECF7] text-[#4A154B] w-fit">
                {NEWSROOM_HERO_DATA.notice.badge}
              </span>
              <p className="text-[11px] sm:text-xs leading-[1.45] text-[#4A4550]">
                {NEWSROOM_HERO_DATA.notice.text}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
