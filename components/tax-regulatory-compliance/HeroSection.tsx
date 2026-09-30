"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full relative min-h-[750px] lg:min-h-[860px] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/tax-regulatory-compliance/Solution hero.png"
          alt="Tax & Regulatory Compliance Solution"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Responsive gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100/95 via-gray-200/90 to-gray-200/20 lg:via-stone-100/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-20 flex flex-col justify-start items-start">
        <div className="w-full max-w-[730px] flex flex-col justify-start items-start gap-5">
          {/* Eyebrow */}
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            TAX &amp; REGULATORY COMPLIANCE
          </div>

          {/* Heading */}
          <h1 className="self-stretch justify-start text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-bold font-['Inter'] leading-tight lg:leading-[61.48px]">
            Know what applies. Manage what is due. Preserve why.
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="w-full max-w-[710px] justify-start text-stone-600 text-base sm:text-lg font-medium font-['Inter'] leading-relaxed sm:leading-7">
            ZoikoTax connects telecom policy and service classification with jurisdiction, responsibility, supported tax determination, regulatory obligations, filing, reconciliation and evidence — so tax and compliance teams can see what needs action and explain the result later.
          </p>

          {/* CTAs */}
          <div className="inline-flex justify-start items-center gap-3 flex-wrap pt-2">
            <Link
              href="#book-demo"
              className="px-6 py-3.5 bg-amber-700 hover:bg-amber-800 text-white rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] outline outline-1 outline-offset-[-1px] outline-amber-700 flex justify-center items-center gap-2.5 transition-colors group"
            >
              <span className="justify-start text-white text-sm font-bold font-['Inter']">
                Book a Demo
              </span>
              <ArrowUpRight className="size-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#platform"
              className="px-6 py-3.5 bg-white hover:bg-stone-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2.5 transition-colors group"
            >
              <span className="justify-start text-zinc-900 text-sm font-bold font-['Inter']">
                Explore the Platform
              </span>
              <ArrowUpRight className="size-3.5 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/coverage-overview"
              className="inline-flex items-center gap-1.5 text-orange-600 hover:text-orange-700 text-sm font-semibold font-['Inter'] transition-colors"
            >
              <span>View Current Coverage</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Evidence by design card */}
          <div className="self-stretch px-4 py-3 bg-white/60 backdrop-blur-sm rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-start items-start gap-2.5">
            <ShieldCheck className="size-4 text-orange-600 shrink-0 mt-0.5" />
            <div className="flex-1 justify-start text-zinc-900 text-xs font-semibold font-['Inter'] leading-5">
              Evidence by design: preserve the source, version, facts and approval context behind consequential outcomes.
            </div>
          </div>

          {/* Availability note */}
          <div className="self-stretch justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-4">
            Availability varies by jurisdiction and capability; current production scope is governed through approved country and regulatory packs.
          </div>
        </div>
      </div>
    </section>
  );
}
