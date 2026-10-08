"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ConversionSection() {
  return (
    <section className="relative w-full bg-[#201334] overflow-hidden">
      {/* Background photo: Bookshelf and laptops with dark purple overlay */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/sandbox/1eeb06ec8895eb4e5cf732cdb0bdb698743c4a53.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#24133A]/90 via-[#201334]/85 to-[#1A0C2E]/95" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 py-20 lg:py-28 flex flex-col items-center text-center gap-7">
        <span className="inline-block px-3 py-1 bg-white/10 text-[#FFA785] text-[11px] font-bold rounded-full uppercase tracking-wider font-['Inter',sans-serif]">
          NON-PRODUCTION ONLY
        </span>

        <h2 className="max-w-[850px] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-['Inter',sans-serif] leading-tight">
          Start with the contract. Build with clarity.
        </h2>

        <p className="max-w-[720px] text-base sm:text-lg text-[#D8CEDD] font-normal leading-relaxed font-['Inter',sans-serif]">
          Read the authoritative docs first. For controlled implementation qualification, speak with ZoikoTax.
        </p>

        {/* 3 Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3.5 pt-2">
          <a
            href="/developers/api/"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#BF6735] px-6 py-3.5 text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,0.3)] font-['Inter',sans-serif]"
          >
            <span>Read API Reference</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/developers/integration-guides/"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-200 active:scale-[0.98] cursor-pointer font-['Inter',sans-serif]"
          >
            <span>Explore Integration Guides</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/demo/"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-200 active:scale-[0.98] cursor-pointer font-['Inter',sans-serif]"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Disclaimers */}
        <div className="flex flex-col items-center gap-1.5 pt-2">
          <p className="text-sm font-semibold text-[#FFA785] font-['Inter',sans-serif]">
            Non-production only. Production readiness is separately governed.
          </p>
          <p className="text-xs text-[#D8CEDD] font-normal font-['Inter',sans-serif]">
            Safe route or controlled topic context only. No payload or private data collection.
          </p>
        </div>
      </div>
    </section>
  );
}
