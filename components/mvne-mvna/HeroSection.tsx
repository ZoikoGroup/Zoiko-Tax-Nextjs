"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full relative min-h-[720px] lg:min-h-[850px] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Hero Graphic */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/MVNE&MVNA/Hero (3).png"
          alt="MVNE & MVNA Operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Soft Pink / Gray Gradient Overlay matching snippet */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/95 via-pink-50/85 via-50% to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-20 flex flex-col justify-start items-start">
        <div className="w-full lg:w-[800px] flex flex-col justify-start items-start gap-5">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            MVNES &amp; MVNAS
          </div>

          <h1 className="self-stretch justify-start text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-bold font-['Inter'] leading-[1.08] tracking-tight">
            Keep multi-tenant fiscal decisions attributable from transaction to evidence.
          </h1>

          <p className="w-full max-w-[760px] justify-start text-stone-500 text-base sm:text-lg font-medium font-['Inter'] leading-6 sm:leading-7">
            ZoikoTax is designed for enablement and aggregation platforms supporting multiple operators, brands and tenants where attribution, legal-entity isolation and downstream fiscal responsibility must remain explicit. Connect supported tax determination, regulatory obligations, compliance, reconciliation and evidence through one governed telecom-specific control layer.
          </p>

          <p className="w-full max-w-[760px] justify-start text-zinc-900 text-base font-medium font-['Inter'] leading-6">
            Deploy natively where supported, coexist with incumbent tax engines in a federated model, or use Shadow Assurance to compare outcomes before governed cutover.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-start items-start gap-3 pt-2">
            <Link
              href="#book-demo"
              className="h-12 px-6 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center shadow-sm transition-colors"
            >
              <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                Book a Demo
              </span>
            </Link>

            <Link
              href="#explore-platform"
              className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 shadow-sm transition-colors group"
            >
              <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
                Explore the Platform
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#coverage"
              className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 shadow-sm transition-colors group"
            >
              <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
                View Current Coverage
              </span>
            </Link>
          </div>

          {/* Footnote */}
          <div className="flex items-center gap-2.5 pt-2">
            <div className="size-1.5 bg-orange-600 rounded-full shrink-0" />
            <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
              Global architecture; production availability varies by jurisdiction and capability.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
