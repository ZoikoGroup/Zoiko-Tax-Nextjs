"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldAlert } from "lucide-react";
import { Reveal } from "./shared";
import { heroData } from "./types";

export default function HeroSection() {
  const handleScrollToRelationships = () => {
    const el = document.getElementById("relationship-types");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(96deg,_rgba(250,243,255,0.96)_42%,_rgba(250,240,224,0.4)_100%)] border-b border-[#D8CEDD] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
      {/* Background Hero Image from Figma */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] pointer-events-none select-none opacity-60 sm:opacity-75 lg:opacity-85 [mask-image:linear-gradient(to_right,transparent_0%,black_30%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_30%)]"
        aria-hidden="true"
      >
        <Image
          src="/resources-partners/hero-bg.png"
          alt="ZoikoTax partner ecosystem architecture background"
          fill
          priority
          className="object-cover object-right-top"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <Reveal>
          <div className="max-w-[800px] space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
                {heroData.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.08] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
                {heroData.headline}
              </h1>
            </div>

            {/* Hero Introduction */}
            <div>
              <p className="text-base sm:text-lg lg:text-[19px] font-medium leading-[1.55] text-[#535055]">
                {heroData.introduction}
              </p>
            </div>

            {/* Publication Rule */}
            <div className="pt-1">
              <p className="text-sm sm:text-base font-semibold text-[#18141B] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D65A2C] shrink-0" />
                <span>{heroData.publicationRule}</span>
              </p>
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href={heroData.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#BF6735] px-6 py-3.5 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>{heroData.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={handleScrollToRelationships}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-white px-6 py-3.5 text-sm font-semibold text-[#18141B] shadow-2xs hover:bg-[#FAF6FC] hover:border-[#BF6735] transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>{heroData.secondaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#18141B]" />
              </button>

              <Link
                href={heroData.contextualLink.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D65A2C] hover:text-[#a9441d] transition-colors px-2 py-2 group"
              >
                <span className="group-hover:underline underline-offset-4">{heroData.contextualLink.label}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Registry Disclosure */}
            <div className="rounded-[16px] border border-[#E0D5E6] bg-white/80 backdrop-blur-xs p-4 sm:p-5 shadow-2xs max-w-[760px] space-y-1.5">
              <div className="flex items-center gap-2 text-[#18141B]">
                <ShieldAlert className="w-4 h-4 text-[#D65A2C] shrink-0" />
                <h2 className="text-sm sm:text-[15px] font-bold">
                  {heroData.disclosure.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-medium leading-[1.5] text-[#665F69] pl-6">
                {heroData.disclosure.explanation}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
