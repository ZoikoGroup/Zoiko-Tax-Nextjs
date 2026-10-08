"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full relative min-h-[750px] lg:min-h-[850px] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Hero Graphic */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/wholesale-carriers-and-aggregators/Hero (4).png"
          alt="Wholesale Carriers & Aggregators Operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Soft gradient from left for responsive text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100/95 via-gray-100/80 to-transparent lg:via-stone-100/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-20 flex flex-col justify-start items-start">
        <div className="w-full max-w-[740px] flex flex-col justify-start items-start gap-5">
          {/* Eyebrow */}
          <div className="self-stretch justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            WHOLESALE CARRIERS &amp; AGGREGATORS
          </div>

          {/* Heading */}
          <h1 className="self-stretch justify-start text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-bold font-['Inter'] leading-tight lg:leading-[60.60px]">
            Keep inter-provider fiscal decisions attributable from transaction to evidence.
          </h1>

          {/* Paragraph 1 */}
          <p className="self-stretch justify-start text-zinc-600 text-base sm:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-7">
            ZoikoTax is designed for wholesale carriers and aggregators operating across inter-provider communications relationships where provider/counterparty context, legal-entity separation and fiscal responsibility must remain explicit. Connect supported tax determination, regulatory obligations, compliance, reconciliation and evidence through one governed telecom-specific control layer.
          </p>

          {/* Paragraph 2 */}
          <p className="self-stretch justify-start text-zinc-900 text-sm sm:text-base font-normal font-['Inter'] leading-6">
            Deploy natively where supported, coexist with incumbent tax engines in a federated model, or use Shadow Assurance to compare outcomes before governed cutover.
          </p>

          {/* CTAs */}
          <div className="inline-flex justify-start items-center gap-3 flex-wrap pt-2">
            <Link
              href="#book-demo"
              className="h-12 px-5 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center gap-2 transition-colors group shadow-sm"
            >
              <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                Book a Demo
              </span>
              <ArrowUpRight className="size-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#platform"
              className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 transition-colors shadow-sm"
            >
              <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
                Explore the Platform
              </span>
            </Link>

            <Link
              href="#coverage"
              className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 transition-colors shadow-sm"
            >
              <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
                View Current Coverage
              </span>
            </Link>
          </div>

          {/* Status Note */}
          <div className="inline-flex justify-start items-center gap-2 pt-2">
            <div className="size-1.5 bg-orange-600 rounded-full shrink-0" />
            <span className="justify-start text-zinc-900 text-xs font-normal font-['Inter']">
              Global architecture; production availability varies by jurisdiction and capability.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
