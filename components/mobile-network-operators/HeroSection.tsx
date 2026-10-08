"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full relative min-h-[790px] bg-gradient-to-b from-orange-200/20 via-rose-200/60 to-fuchsia-100/60 flex flex-col justify-start items-center overflow-hidden">
      {/* Background Image / Hero Veil */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/mobile-network-operators/Hero (1).png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-top"
        />
        {/* Soft Left Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100/95 via-gray-200/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-20 flex flex-col justify-start items-start">
        <div className="w-full lg:w-[785px] flex flex-col justify-start items-start gap-5">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            MOBILE NETWORK OPERATORS
          </div>

          <h1 className="self-stretch justify-start text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-bold font-['Inter'] leading-[1.08] tracking-tight">
            Connect carrier-scale <br/>fiscal decisions from<br/> transaction to evidence.
          </h1>

          <p className="w-full max-w-[745px] justify-start text-stone-500 text-base sm:text-lg font-medium font-['Inter'] leading-7">
            ZoikoTax is designed for national and multinational mobile operators managing high transaction volumes, complex service portfolios, multiple legal entities and multiple fiscal authorities. Connect supported tax determination, regulatory obligations, compliance, reconciliation and evidence through one governed telecom-specific control layer.
          </p>

          <p className="w-full max-w-[745px] justify-start text-zinc-900 text-base font-semibold font-['Inter'] leading-6">
            Deploy natively where supported, coexist with incumbent tax engines in a federated model, or use Shadow Assurance to compare outcomes before governed cutover.
          </p>

          {/* Action Buttons */}
          <div className="w-full max-w-[745px] flex flex-wrap justify-start items-start gap-3 pt-2">
            <Link
              href="#book-demo"
              className="h-12 px-6 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center shadow-sm transition-colors"
            >
              <span className="text-white text-sm font-semibold font-['Inter']">Book a Demo</span>
            </Link>

            <Link
              href="#explore-platform"
              className="h-12 px-6 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 shadow-sm transition-colors group"
            >
              <span className="text-zinc-900 text-sm font-semibold font-['Inter']">Explore the Platform</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#coverage"
              className="h-12 px-6 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 shadow-sm transition-colors group"
            >
              <span className="text-zinc-900 text-sm font-semibold font-['Inter']">View Current Coverage</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Bottom Footnote */}
          <div className="flex items-center gap-2.5 pt-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
            <span className="text-zinc-900 text-sm font-semibold font-['Inter']">
              Global architecture; production availability varies by jurisdiction and capability.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
