"use client";

import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF3FF]">
      {/* Branded hero background matching Figma node #1484:15951 (full height of hero) */}
      {/* Branded hero background - Full width across entire screen */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(247, 243, 237, 1) 0%, rgba(234, 223, 240, 1) 100%)",
        }}
        aria-hidden="true"
      >
        <Image
          src="/pricing-plan/Hero-Background-Image.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Smooth left-to-right fade from cream #F7F3ED over the background image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3ED] via-[#F7F3ED] via-[45%] to-transparent" />
      </div>

      {/* Main container matching Figma node #1484:15951: padding 40px 80px 88px, gap 32px */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-4 pt-10 pb-16 sm:px-8 sm:pb-20 lg:px-[80px] lg:pb-[88px] lg:pt-[40px]">
        {/* Hero content (Figma node #1484:15954, items-center, gap 56px) */}
        <div className="flex w-full items-center">
          {/* Hero copy (Figma node #1484:15955, fixed width 744px, gap 24px) */}
          <div className="flex w-full max-w-[744px] flex-col gap-6">
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-[0.04em] text-[#D65A2C]">
                PRICING PLAN
              </span>
            </Reveal>

            <Reveal delay={0.03}>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.04] text-[#18141B]">
                Understand how ZoikoTax<br />
                pricing is structured —<br />
                without hidden<br />
                assumptions.
              </h1>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="text-base sm:text-[17px] font-normal leading-[1.55] text-[#665F69]">
                Explore the commercial dimensions that may shape a ZoikoTax quote, including platform access, usage, capabilities, implementation, support, regional/currency context and approved commercial terms. Exact amounts and entitlements are shown only when current pricing authority supports them.
              </p>
            </Reveal>

            {/* Pricing status banner (Figma node #1484:15959, padding 20px, gap 8px, rounded 16px, border #D8CEDD) */}
            <Reveal delay={0.09}>
              <div className="flex flex-col gap-2 rounded-[16px] border border-[#D8CEDD] bg-white p-5 shadow-sm">
                <span className="text-[13px] font-bold uppercase tracking-[0.02em] text-[#301153]">
                  PUBLIC AMOUNTS NOT ESTABLISHED
                </span>
                <p className="text-sm leading-[1.55] text-[#665F69]">
                  Exact public pricing is not established for this scope. Review the pricing drivers and request an approved quote for your requirements.
                </p>
              </div>
            </Reveal>

            {/* Hero actions (Figma node #1484:15962, gap 12px) */}
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-3">
                <PrimaryButton href="#model-at-a-glance">
                  Explore pricing components
                </PrimaryButton>
                <SecondaryButton href="#evaluation">
                  Book a Demo
                </SecondaryButton>
              </div>
            </Reveal>

            {/* Disclaimers (Figma nodes #1484:15971 and #1484:15972) */}
            <div className="flex flex-col gap-2 pt-1">
              <Reveal delay={0.15}>
                <p className="text-sm font-normal text-[#665F69]">
                  View Current Coverage — destination unavailable; pricing does not confirm Coverage.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="text-sm font-normal leading-[1.55] text-[#665F69]">
                  A public pricing page is not a quote, contract, tax/legal advice, product-availability guarantee or support entitlement.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Direct answer (Figma node #1484:15973, padding 24px 0 0, gap 12px, border-top #D8CEDD) */}
      <div className="relative w-full border-t border-[#D8CEDD] bg-[#FAF3FF]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-4 py-8 sm:px-8 lg:px-[80px] lg:py-8">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[0.04em] text-[#D65A2C]">
              DIRECT ANSWER
            </span>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="w-full text-lg sm:text-xl lg:text-[20px] font-normal leading-[1.5] text-[#18141B]">
              ZoikoTax pricing should be explained through current commercial sources. Where public amounts are not approved, the page explains
              <br className="hidden lg:inline" />
              what drives price and how to obtain an authoritative quote instead of fabricating a range.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

