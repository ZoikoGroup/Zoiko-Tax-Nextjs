"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToFinder = () => {
    const el = document.getElementById("scenario-finder");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F3ED]">
      {/* Hero artwork from public/sandbox/Sandbox hero.png - smoothly blended from the right */}
      <div
        className="absolute inset-y-0 right-0 hidden lg:block w-[68%] xl:w-[64%] pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/sandbox/Sandbox hero.png"
          alt=""
          className="h-full w-full object-cover object-right"
        />
        {/* Figma gradient overlay blending photo into warm cream #F7F3ED background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #F7F3ED 0%, rgba(247,243,237,0.85) 15%, rgba(247,243,237,0.3) 40%, rgba(247,243,237,0) 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 lg:min-h-[760px] flex items-center">
        <div className="max-w-[780px] flex flex-col items-start gap-6">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
            DEVELOPERS · SANDBOX
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.12] font-bold text-[#18141B] tracking-tight font-['Inter',sans-serif]">
            Test ZoikoTax integration<br className="hidden sm:inline" />
            patterns in a governed<br className="hidden sm:inline" />
            non-production context.
          </h1>

          <p className="max-w-[760px] text-base lg:text-[17px] leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
            <span className="lg:whitespace-nowrap">Use safe test data and source-grounded scenarios to understand approved</span><br className="hidden lg:inline" />
            <span className="lg:whitespace-nowrap">integration concepts before production. Sandbox does not prove production</span><br className="hidden lg:inline" />
            <span className="lg:whitespace-nowrap">Coverage, contractual entitlement, regulator readiness or automatic go-live</span><br className="hidden lg:inline" />
            <span>eligibility.</span>
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={scrollToFinder}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#BF6735] px-5 py-3 text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,0.3)] font-['Inter',sans-serif]"
            >
              <span>Explore Sandbox Scenarios</span>
              <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} />
            </button>

            <a
              href="/developers/api/"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#18141B] outline outline-1 -outline-offset-1 outline-[#D8CEDD] hover:bg-[#FAF6FC] transition-all duration-200 active:scale-[0.98] cursor-pointer font-['Inter',sans-serif]"
            >
              <span>Read API Reference</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-[#D65A2C]" strokeWidth={2} />
            </a>
          </div>

          <a
            href="/developers/integration-guides/"
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#D65A2C] hover:text-[#a9441d] transition-colors font-['Inter',sans-serif]"
          >
            Explore Integration Guides <span aria-hidden="true">↗</span>
          </a>

          <p className="text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">
            Non-production only. Exact access, credentials, URLs, limits and promotion requirements remain governed.
          </p>
        </div>
      </div>
    </section>
  );
}
