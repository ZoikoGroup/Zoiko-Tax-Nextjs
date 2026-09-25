"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./shared";

export default function ConversionSection() {
  return (
    <section className="relative isolate w-full overflow-hidden  py-20 sm:py-24 lg:py-20 text-white">
      {/* Background Image overlay at full clarity */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/platform-overview/Conversion Background Image.png"
          alt=""
          fill
          priority
          className="object-cover "
        />
      </div>

      {/* Dark overlay for text contrast */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[#100030]/65"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-4 sm:gap-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#F4A261]">
              BUILD THE NEXT FISCAL OPERATING MODEL
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-bold leading-[1.1] tracking-tight text-white">
              See how ZoikoTax fits your telecom architecture
            </h2>

            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-[#F7D7CB]/90">
              Connect determination, regulatory obligations, compliance, reconciliation, and evidence without forcing a one-size-fits-all migration path.
            </p>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="#demo"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#BF6735] px-7 text-xs sm:text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-[#DD7235] shadow-[inset_0_3px_4px_0_rgba(255,223,211,1),inset_0_-2px_4px_0_rgba(253,207,190,1)] transition-all hover:bg-[#DD7235] hover:shadow-md active:scale-95"
              >
                Book a Demo
              </Link>
              <Link
                href="#coverage"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-white px-7 text-xs sm:text-sm font-semibold text-[#18141B] shadow-sm transition-all hover:bg-slate-100 active:scale-95"
              >
                View Current Coverage
              </Link>
              <Link
                href="#developers"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-white px-7 text-xs sm:text-sm font-semibold text-[#18141B] shadow-sm transition-all hover:bg-slate-100 active:scale-95"
              >
                Explore Developers
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
