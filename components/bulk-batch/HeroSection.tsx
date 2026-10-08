"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToFinder = () => {
    const el = document.getElementById("pattern-finder");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F3ED]">
      {/* Artwork supplied in public/bulk-batch — server corridor photo smoothly faded from the right */}
      <div
        className="absolute inset-y-0 right-0 hidden lg:block w-[65%] xl:w-[62%] pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/bulk-batch/0c256dea3091b04d7c7fc369fd1094ae543f06dc.png"
          alt=""
          className="h-full w-full object-cover object-right"
        />
        {/* Figma blends the photo into the warm cream #F7F3ED background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #F7F3ED 0%, rgba(247,243,237,0.95) 20%, rgba(247,243,237,0.55) 50%, rgba(247,243,237,0.15) 75%, rgba(247,243,237,0) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-10 lg:px-20 lg:py-20 lg:min-h-[740px] flex items-center">
        <div className="max-w-[850px] flex flex-col items-start gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
            DEVELOPERS · BULK &amp; BATCH
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[52px] lg:leading-[1.12] font-bold text-[#18141B] tracking-tight font-['Inter',sans-serif]">
            Handle high-volume<br className="hidden sm:inline" />
            ZoikoTax integration<br className="hidden sm:inline" />
            through governed<br className="hidden sm:inline" />
            asynchronous patterns.
          </h1>

          <p className="max-w-[850px] text-base leading-6 text-[#665F69] font-['Inter',sans-serif]">
            <span className="lg:whitespace-nowrap">Use public Bulk &amp; Batch guidance to understand high-volume ingestion/export lifecycles,</span><br className="hidden lg:inline" />
            <span className="lg:whitespace-nowrap">validation, partial outcomes, result retrieval and authority boundaries without assuming production</span><br className="hidden lg:inline" />
            <span>limits or SLAs.</span>
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={scrollToFinder}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#BF6735] px-5 py-3 text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer font-['Inter',sans-serif]"
            >
              <span>Explore Bulk &amp; Batch Patterns</span>
              <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} />
            </button>

            <a
              href="/developers/api/"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#18141B] outline outline-1 -outline-offset-1 outline-[#D8CEDD] hover:bg-[#FAF6FC] transition-all duration-200 active:scale-[0.98] font-['Inter',sans-serif]"
            >
              <span>Read API Reference</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-[#D65A2C]" strokeWidth={2} />
            </a>
          </div>

          <a
            href="/developers/integration-guides/"
            className="inline-flex items-center gap-1.5 text-base font-semibold text-[#D65A2C] hover:text-[#a9441d] transition-colors font-['Inter',sans-serif]"
          >
            Explore Integration Guides <span aria-hidden="true">→</span>
          </a>

          <p className="text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">
            High-volume pattern guidance is public. Exact job contracts, limits, credentials and
            entitlements remain separately governed.
          </p>
        </div>
      </div>
    </section>
  );
}
