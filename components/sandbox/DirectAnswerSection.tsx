"use client";

import React from "react";

export default function DirectAnswerSection() {
  return (
    <section className="relative w-full bg-[#FAF3FF] border-b border-[#D8CEDD] overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 py-12 lg:py-16 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
        {/* Left column: Eyebrow + Heading */}
        <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0 flex flex-col items-start gap-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
            DIRECT ANSWER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.15] font-bold text-[#18141B] tracking-tight font-['Inter',sans-serif]">
            What is<br className="hidden sm:inline" />
            Sandbox?
          </h2>
        </div>

        {/* Right column: Lead description & disclaimer */}
        <div className="flex-1 max-w-[850px] flex flex-col items-start gap-4 lg:gap-5">
          <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed text-[#18141B] font-['Inter',sans-serif]">
            <span className="lg:whitespace-nowrap">The Sandbox is the public non-production integration/testing experience for ZoikoTax. It</span><br className="hidden lg:inline" />
            <span className="lg:whitespace-nowrap">helps engineering teams understand and, where separately enabled, exercise approved</span><br className="hidden lg:inline" />
            <span>integration patterns with synthetic or approved test data.</span>
          </p>
          <p className="text-sm sm:text-[15px] font-normal leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
            <span className="lg:whitespace-nowrap">It is not evidence of production Coverage, customer entitlement, regulator readiness, certification, production</span><br className="hidden lg:inline" />
            <span>credentials or automatic promotion to a live environment.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
