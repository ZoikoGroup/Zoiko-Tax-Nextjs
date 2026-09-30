"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { Reveal } from "./shared";

export default function FinalConversionBandSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0E011C] py-20 sm:py-24 lg:py-28 text-white">
      {/* Background Image from Figma */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/managed-compliance-coverage/final-conversion-bg.png"
          alt="Final conversion background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Exact Figma overlay: #0E011C with 67% opacity */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "rgba(14, 1, 28, 0.67)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16 text-center flex flex-col items-center space-y-7 sm:space-y-8">
        <Reveal>
          <div className="max-w-3xl space-y-4 sm:space-y-5 mx-auto">
            {/* Eyebrow */}
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#F4A261]">
              Verify your exact scope
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-bold leading-[1.1] tracking-tight text-white font-['Inter',sans-serif]">
              Move from public readiness to your implementation scenario.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-[19px] font-normal leading-[1.55] text-[#D9D0DF] max-w-2xl mx-auto">
              Book a Demo for exact implementation, contract and customer-scenario scope. Public readiness truth stays visible and ungated.
            </p>
          </div>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#BF6735] px-7 py-3.5 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98]"
            >
              <span>Book a Demo</span>
            </Link>

            <Link
              href="/coverage-overview"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#1D033B] shadow-sm hover:bg-[#FAF6FC] transition-all duration-200 active:scale-[0.98]"
            >
              <span>View Coverage</span>
              <ArrowRight className="w-4 h-4 text-[#1D033B]" />
            </Link>
          </div>
        </Reveal>

        {/* Truth Note */}
        <Reveal delay={0.2}>
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xs px-4 py-2.5 text-xs sm:text-[13px] font-medium text-[#D9D0DF] shadow-xs">
            <Eye className="w-4 h-4 text-[#F4A261] shrink-0" />
            <span>
              No form gate is required to inspect Coverage, status or scope qualifiers.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
