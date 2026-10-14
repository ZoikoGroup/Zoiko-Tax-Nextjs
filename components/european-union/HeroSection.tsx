"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HERO_DATA } from "./european-union-data";
import { PrimaryPillButton, SecondaryWhitePillButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[640px] lg:h-[795px] flex items-center bg-[#F7F3ED]">
      {/* Background dual gradient & photo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(247, 243, 237, 1) 0%, rgba(234, 223, 240, 1) 100%)",
          }}
        />
        <div className="relative w-full h-full">
          <Image
            src="/european-union/hero-bg.png"
            alt=""
            fill
            priority
            className="object-cover object-right"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(247, 243, 237, 0.97) 0%, rgba(234, 223, 240, 0.85) 54%, rgba(234, 223, 240, 0.1) 100%)",
            }}
          />
        </div>
      </div>

      {/* Hero Copy */}
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-12 lg:py-0">
        <div className="w-full max-w-[760px] flex flex-col gap-6">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-wider text-[#D65A2C]">
              {HERO_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold leading-[1.02em] tracking-tight text-[#18141B]">
              European Union<br />
              coverage, capability by<br />
              capability.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-[740px] text-lg sm:text-[20px] font-medium leading-[1.5em] text-[#535055]">
              Review governed public readiness for ZoikoTax capabilities in the<br />
              European Union market context. Each capability carries its own state,<br />
              scope and currentness; a market label is not a blanket support claim.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-3 pt-1.5 pb-1.5">
              <PrimaryPillButton href={HERO_DATA.actions[0].href} showIcon>
                {HERO_DATA.actions[0].label}
              </PrimaryPillButton>
              <SecondaryWhitePillButton href={HERO_DATA.actions[1].href} showIcon>
                {HERO_DATA.actions[1].label}
              </SecondaryWhitePillButton>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-2">
              <Link
                href={HERO_DATA.demoLink.href}
                className="w-fit text-[14px] font-semibold text-[#D65A2C] hover:underline transition-all"
              >
                {HERO_DATA.demoLink.label}
              </Link>
              <p className="max-w-[690px] text-[15px] font-medium leading-[1.55em] text-[#18141B]">
                {HERO_DATA.footnote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
