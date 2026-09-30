"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Lock } from "lucide-react";
import { Reveal } from "./shared";

export default function HeroSection() {
  const handleScrollToFinder = () => {
    const el = document.getElementById("coverage-finder");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(96deg,_rgba(250,243,255,0.95)_45%,_rgba(250,240,224,0.35)_100%)] border-b border-[#D8CEDD] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
      {/* Background Hero Image from Figma */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] pointer-events-none select-none opacity-60 sm:opacity-75 lg:opacity-85 [mask-image:linear-gradient(to_right,transparent_0%,black_35%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_35%)]"
        aria-hidden="true"
      >
        <Image
          src="/managed-compliance-coverage/hero-bg.png"
          alt="Managed compliance coverage operations and readiness network"
          fill
          priority
          className="object-cover object-right-top"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <Reveal>
          <div className="max-w-[780px] space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
                MANAGED COMPLIANCE COVERAGE
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.08] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
                See where Managed Compliance is ready by market and approved managed scope.
              </h1>
            </div>

            {/* Description */}
            <div>
              <p className="text-base sm:text-lg lg:text-[19px] font-medium leading-[1.55] text-[#665F69]">
                Check current ZoikoTax Managed Compliance readiness by market and scope. Managed Compliance is available only where the required underlying capability is production-ready and approved operations are ready for the stated scope.
              </p>
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={handleScrollToFinder}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#BF6735] px-6 py-3.5 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Find Managed Compliance Coverage</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <Link
                href="/coverage-overview"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-white px-6 py-3.5 text-sm font-semibold text-[#18141B] shadow-2xs hover:bg-[#FAF6FC] hover:border-[#BF6735] transition-all duration-200 active:scale-[0.98]"
              >
                <span>View Country & Regulatory Packs</span>
              </Link>

              <Link
                href="/status-and-releases"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D65A2C] hover:text-[#a9441d] transition-colors px-2 py-2"
              >
                <span>Status & Releases →</span>
              </Link>
            </div>

            {/* Trust statement */}
            <div className="rounded-[14px] border border-[#E0D5E6] bg-white/70 backdrop-blur-xs p-3.5 sm:p-4 shadow-2xs flex items-center gap-3 max-w-[720px]">
              <div className="shrink-0 p-1.5 rounded-lg bg-[#EEE4F6] text-[#301153]">
                <Lock className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-[14px] font-semibold leading-[1.45] text-[#18141B]">
                Two gates: production capability + operational readiness. Unknown never becomes MANAGED.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
