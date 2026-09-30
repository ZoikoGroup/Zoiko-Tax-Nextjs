"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Reveal, BoundaryNotice } from "./shared";

export default function HeroSection() {
  const handleScrollToFinder = () => {
    const el = document.getElementById("coverage-finder");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(90deg,_rgba(247,243,237,0.97)_0%,_rgba(234,223,240,0.85)_54%,_rgba(234,223,240,0.1)_100%)] border-b border-[#D8CEDD] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
      {/* Background Hero Image from Figma */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] pointer-events-none select-none opacity-65 sm:opacity-75 lg:opacity-85 [mask-image:linear-gradient(to_right,transparent_0%,black_35%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_35%)]"
        aria-hidden="true"
      >
        <Image
          src="/remittance-coverage/hero-bg.png"
          alt="Remittance coverage governance and orchestration network"
          fill
          priority
          className="object-cover object-right-top"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <Reveal>
          <div className="max-w-[850px] space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
                REMITTANCE COVERAGE
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-bold leading-[1.02] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
                See where Remittance is ready for governed use.
              </h1>
            </div>

            {/* Description */}
            <div>
              <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-[1.5] text-[#665F69]">
                Check current ZoikoTax Remittance readiness by market and capability scope. Availability is governed by current country/regulatory pack and Coverage state; global architecture does not mean universal live support.
              </p>
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={handleScrollToFinder}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#BF6735] px-6 py-3.5 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Find Remittance Coverage</span>
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

            {/* Microcopy */}
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#18141B]">
                Capability-specific readiness. Unknown never becomes PRODUCTION.
              </p>
            </div>

            {/* Boundary notice */}
            <BoundaryNotice
              title="Governed orchestration — never fund custody"
              description="Remittance readiness covers governed orchestration, not ZoikoTax holding, moving or settling customer funds."
              iconName="shield-alert"
              className="max-w-[760px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
