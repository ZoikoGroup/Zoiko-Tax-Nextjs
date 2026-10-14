"use client";

import React from "react";
import Image from "next/image";
import { HERO_DATA } from "./customer-support-data";
import { PrimaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#F3E8FF]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/customer-support/hero-bg.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,237,0.97)] via-[54%] via-[rgba(234,223,240,0.85)] to-[rgba(234,223,240,0.1)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[690px] flex flex-col">
          <Reveal>
            <span className="inline-block text-sm font-bold text-[#D65A2C] uppercase">{HERO_DATA.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="pt-3 text-4xl sm:text-5xl lg:text-[60px] font-extrabold leading-[1.0] text-[#1E1B4B]">
              {HERO_DATA.title}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="pt-6 text-lg leading-[1.625] text-[#374151] max-w-[672px]">{HERO_DATA.description}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center gap-4 pt-8">
              <PrimaryButton>{HERO_DATA.actions[0].label}</PrimaryButton>
              <span className="inline-flex items-center justify-center rounded-full border-2 border-[#E5E7EB] bg-white px-8 py-3.5 text-base font-semibold text-[#2E1065] cursor-pointer hover:bg-[#FAF8FA] transition-colors">
                {HERO_DATA.actions[1].label}
              </span>
              <span className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold text-[#2E1065] cursor-pointer hover:bg-black/[0.03] transition-colors">
                {HERO_DATA.actions[2].label}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="pt-8 text-xs leading-[1.33] text-[#6B7280] max-w-[576px]">{HERO_DATA.footnote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
