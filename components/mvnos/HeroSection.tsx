"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full relative min-h-[720px] lg:min-h-[800px] flex flex-col justify-start items-center overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/MVNO/Hero (2).png"
          alt="MVNO Fiscal Control"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Responsive Gradient Overlay to ensure high contrast for typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100/95 via-gray-200/90 to-gray-200/10" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-20 flex flex-col justify-start items-start">
        <div className="w-full lg:w-[720px] flex flex-col justify-start items-start gap-5">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            MVNOS
          </div>

          <h1 className="self-stretch justify-start text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-bold font-['Inter'] leading-[1.08] tracking-tight">
            Connect MVNO operating-model fiscal decisions from transaction to evidence.
          </h1>

          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-medium font-['Inter'] leading-6 sm:leading-7">
            ZoikoTax is designed for virtual operators operating across full, light and hybrid models where service classification, commercial-chain relationships, operator dependencies and downstream fiscal responsibility must remain explicit. Connect supported tax determination, regulatory obligations, compliance, reconciliation and evidence through one governed telecom-specific control layer.
          </p>

          <p className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter'] leading-6">
            Deploy natively where supported, coexist with incumbent tax engines in a federated model, or use Shadow Assurance to compare outcomes before governed cutover.
          </p>

          {/* Action Buttons */}
          <div className="self-stretch flex flex-wrap justify-start items-start gap-3 pt-2">
            <Link
              href="#book-demo"
              className="h-12 px-6 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-500 flex justify-center items-center shadow-sm transition-colors"
            >
              <span className="text-white text-sm font-semibold font-['Inter']">Book a Demo</span>
            </Link>

            <Link
              href="#explore-platform"
              className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2.5 shadow-sm transition-colors group"
            >
              <span className="text-zinc-900 text-sm font-semibold font-['Inter']">Explore the Platform</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#coverage"
              className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2.5 shadow-sm transition-colors group"
            >
              <span className="text-zinc-900 text-sm font-semibold font-['Inter']">View Current Coverage</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Bottom Architecture Note */}
          <div className="inline-flex justify-start items-center gap-2 pt-2">
            <div className="size-1.5 bg-orange-600 rounded-full shrink-0" />
            <span className="text-zinc-900 text-xs font-semibold font-['Inter']">
              Global architecture; production availability varies by jurisdiction and capability.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
