"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function ConversionSection() {
  return (
    <section className="relative w-full min-h-[420px] overflow-hidden py-16 sm:py-20 flex flex-col justify-center items-center">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/tax-regulatory-compliance/Conversion band.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-28 flex flex-col justify-center items-center gap-7 text-center">
        {/* Eyebrow */}
        <div className="justify-start text-orange-300 text-xs sm:text-sm font-bold font-['Inter'] uppercase tracking-wider">
          SEE THE CONTROL CHAIN IN YOUR ARCHITECTURE
        </div>

        {/* Heading */}
        <h2 className="w-full max-w-[900px] text-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[51.84px]">
          Know what applies — and keep the evidence that explains why.
        </h2>

        {/* Subtitle */}
        <p className="w-full max-w-[800px] text-center text-zinc-300 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed sm:leading-6">
          Review your current policy, taxability, obligations, filing and evidence boundaries with a capability-specific ZoikoTax walkthrough.
        </p>

        {/* Primary CTA */}
        <div className="pt-2">
          <Link
            href="#book-demo"
            className="px-6 py-3.5 bg-amber-700 hover:bg-amber-800 text-white rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] outline outline-1 outline-offset-[-1px] outline-amber-700 inline-flex justify-center items-center gap-2.5 transition-colors group"
          >
            <span className="justify-start text-white text-sm font-bold font-['Inter']">
              Book a Demo
            </span>
            <ArrowUpRight className="size-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Secondary Links Row */}
        <div className="inline-flex justify-center items-center gap-6 flex-wrap pt-2">
          <Link
            href="/platform-overview"
            className="inline-flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-semibold font-['Inter'] transition-colors"
          >
            <span>Platform</span>
            <ArrowRight className="size-3.5 text-orange-400" />
          </Link>

          <Link
            href="/coverage-overview"
            className="inline-flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-semibold font-['Inter'] transition-colors"
          >
            <span>Coverage</span>
            <ArrowRight className="size-3.5 text-orange-400" />
          </Link>

          <Link
            href="/evidence-auditability"
            className="inline-flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-semibold font-['Inter'] transition-colors"
          >
            <span>Evidence &amp; Replay</span>
            <ArrowRight className="size-3.5 text-orange-400" />
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-semibold font-['Inter'] transition-colors"
          >
            <span>Trust Center</span>
            <ArrowRight className="size-3.5 text-orange-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
