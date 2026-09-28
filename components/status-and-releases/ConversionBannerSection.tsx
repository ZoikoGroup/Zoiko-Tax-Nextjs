"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function ConversionBannerSection() {
  return (
    <section
      className="relative w-full overflow-hidden text-center text-white py-[88px] px-6 sm:px-12 lg:px-[158px]"
      style={{
        backgroundImage: `linear-gradient(rgba(19, 0, 33, 0.56), rgba(19, 0, 33, 0.56)), url('/status-and-releases/conversion-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto w-full max-w-[1440px] z-10 flex flex-col items-center gap-6">
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-white max-w-4xl font-['Inter',sans-serif]">
          Inspect the truth before the meeting.
        </h2>

        <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5] text-[#D9D0DF] max-w-[860px]">
          Review current Coverage, governed chronology and public evidence routes first. Evidence is not gated behind lead capture.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/about-us"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#D65A2C] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c04d22]"
          >
            <span>Book a Demo</span>
            <Calendar className="h-4 w-4" />
          </Link>

          <Link
            href="/coverage-overview"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-white px-6 text-sm font-semibold text-[#18141B] transition hover:bg-[#FAF8FA]"
          >
            <span>View Current Coverage</span>
            <ArrowRight className="h-4 w-4 text-[#18141B]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
