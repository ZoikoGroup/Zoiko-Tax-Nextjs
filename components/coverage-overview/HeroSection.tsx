"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  const handleScrollToExplorer = () => {
    const el = document.getElementById("coverage-explorer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(96deg,_rgba(234,223,240,1)_45%,_rgba(250,240,224,0.22)_100%)] border-b border-[#D8CEDD] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
      {/* Background Hero Image */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] pointer-events-none select-none opacity-60 sm:opacity-75 lg:opacity-85 [mask-image:linear-gradient(to_right,transparent_0%,black_30%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_30%)]"
        aria-hidden="true"
      >
        <Image
          src="/coverage-overview/hero-bg.png"
          alt="Global network and telecom infrastructure operations"
          fill
          priority
          className="object-cover object-right-top"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <Reveal>
          <div className="max-w-[650px] space-y-6">
            {/* Eyebrow */}
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
                GLOBAL COVERAGE
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-[58px] xl:text-[60px] font-bold leading-[1.02] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
                Global by design.
                <br />
                Local by law.
              </h1>
            </div>

            {/* Description */}
            <div>
              <p className="text-base sm:text-lg lg:text-[18px] font-medium leading-[1.55] text-[#4E4852]">
                Check current ZoikoTax availability by market and capability. Coverage is governed at the capability level, so a market may be production-ready for one fiscal workflow and still be in research, validation, pilot, suspended or unavailable state for another.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleScrollToExplorer}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#BF6735] px-6 py-3 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search Coverage</span>
              </button>

              <SecondaryButton href="#demo">Book a Demo</SecondaryButton>
            </div>

            {/* Supporting Links */}
            <div className="flex flex-wrap items-center gap-6 pt-1">
              <Link
                href="/coverage/packs"
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#5A2388] hover:text-[#431868] transition-colors"
              >
                <span>Country & Regulatory Packs</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/coverage/status"
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#5A2388] hover:text-[#431868] transition-colors"
              >
                <span>Status & Releases</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Truth Qualifier Box */}
            <div className="rounded-[16px] border border-[#DDD2E2] bg-white/70 backdrop-blur-xs p-4 sm:p-4.5 shadow-2xs flex items-start sm:items-center gap-3">
              <div className="shrink-0 p-1 rounded-lg bg-[#EEE3F6] text-[#5A2388]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-[13px] font-semibold leading-[1.5] text-[#18141B]">
                Global architecture does not mean universal live support. Production availability varies by market, capability and governed pack/release state.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
