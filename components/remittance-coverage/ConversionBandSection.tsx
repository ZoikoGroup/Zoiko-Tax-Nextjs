"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./shared";

export default function ConversionBandSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#100031] py-20 sm:py-24 lg:py-28">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/remittance-coverage/conversion-band-bg.png"
          alt="Scope the implementation background"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#0E011C]/75" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16 text-center">
        <Reveal>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Eyebrow */}
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#F4A261]">
                SCOPE THE IMPLEMENTATION
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-white font-['Inter',sans-serif] max-w-[920px] mx-auto">
                Verify exact implementation, contract and customer-scenario scope.
              </h2>
            </div>

            {/* Subhead */}
            <div>
              <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-[1.5] text-[#D9D0DF] max-w-[850px] mx-auto">
                Public Remittance readiness truth stays visible and ungated. A scoped conversation can clarify fit, but it never replaces current Coverage evidence.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
              <Link
                href="/agreement-review-signing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#BF6735] px-7 py-3.5 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/coverage-overview"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1D033B] shadow-2xs hover:bg-[#FAF6FC] transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>View Coverage</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
