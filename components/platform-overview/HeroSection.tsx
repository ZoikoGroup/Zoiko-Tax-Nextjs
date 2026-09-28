"use client";

import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[680px] lg:min-h-[770px] overflow-hidden bg-gradient-to-br from-stone-100 via-rose-50/40 to-purple-50/60 py-16 sm:py-20 lg:py-24 flex items-center">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/platform-overview/Hero Background Image.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      {/* Gentle gradient mask to keep copy ultra readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#FAF8FA] via-[#FAF8FA]/90 via-50% to-transparent lg:via-[#FAF8FA]/70"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex flex-col gap-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
                PLATFORM OVERVIEW
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold leading-[1.05] tracking-tight text-[#18141B]">
                One governed platform for the telecom fiscal lifecycle.
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#535055]">
                ZoikoTax connects telecom tax determination, regulatory obligations, compliance, reconciliation, and evidence in one telecom-specific fiscal platform designed to integrate with enterprise systems.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <PrimaryButton href="#demo">Book a Demo</PrimaryButton>
                <SecondaryButton href="#capabilities">Explore Capabilities</SecondaryButton>
                <SecondaryButton href="#coverage">View Current Coverage →</SecondaryButton>
              </div>

              {/* Disclaimer footnote */}
              <p className="pt-2 text-xs font-medium text-[#665F69]/90">
                Built for governed telecom fiscal operations • Global architecture does not equal universal production support.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
