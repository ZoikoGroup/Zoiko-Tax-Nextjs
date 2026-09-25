"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Database } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full relative bg-gradient-to-b from-rose-100/40 to-purple-50/95 flex flex-col justify-start items-center overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0  overflow-hidden">
        <Image
          src="/shadow-assurance/Hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 lg:py-24 flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Column */}
        <div className="w-full lg:w-[640px] flex flex-col justify-start items-start gap-6">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            SHADOW ASSURANCE
          </div>

          <h1 className="self-stretch justify-start text-zinc-900 text-4xl sm:text-5xl font-extrabold font-['Inter'] leading-[1.15]">
            Compare before you change production.
          </h1>

          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            ZoikoTax Shadow Assurance performs governed compliance comparison against incumbent or source outcomes without altering production billing or filing pipelines.
          </p>

          <p className="self-stretch justify-start text-zinc-900 text-sm font-medium font-['Inter'] leading-5">
            Deploy it natively where supported, coexist with incumbent tax engines, or use Shadow Assurance to compare outcomes before any governed cutover.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-start items-center gap-3">
            <Link
              href="#book-demo"
              className="px-6 py-3 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-500 flex justify-center items-center shadow-sm transition-colors"
            >
              <span className="text-white text-sm font-semibold font-['Inter']">Book a Demo</span>
            </Link>

            <Link
              href="#how-shadow-works"
              className="px-6 py-3 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center shadow-sm transition-colors"
            >
              <span className="text-zinc-900 text-sm font-semibold font-['Inter']">See How Shadow Works</span>
            </Link>

            <Link
              href="#evidence-replay"
              className="px-6 py-3 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center shadow-sm transition-colors"
            >
              <span className="text-zinc-900 text-sm font-semibold font-['Inter']">Explore Evidence &amp; Replay</span>
            </Link>
          </div>

          <div className="justify-start text-stone-500 text-xs font-medium font-['Inter']">
            Governed telecom fiscal operations • Capability varies by activated market pack.
          </div>
        </div>

        {/* Right Column: Assurance Simulation Card */}
        <div className="w-full lg:w-[640px] p-6 bg-slate-900 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-center items-start gap-5 shadow-2xl">
          <div className="justify-start text-orange-300 text-xs font-normal font-['JetBrains_Mono'] uppercase tracking-wider">
            Assurance Isolation Environment (NO PRODUCTION WRITE)
          </div>

          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            {/* Source Payload Header */}
            <div className="self-stretch p-4 bg-white/5 rounded-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="size-10 bg-orange-600 rounded-lg flex justify-center items-center shrink-0">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <div className="text-white text-sm font-semibold font-['Inter']">
                    Source Payload (Billing/BSS)
                  </div>
                  <div className="text-white/50 text-xs font-normal font-['Inter']">
                    Production transaction facts mirror
                  </div>
                </div>
              </div>

              <div className="px-3 py-1 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-teal-600 bg-teal-950/40 flex justify-start items-start shrink-0">
                <span className="text-teal-400 text-xs font-semibold font-['Inter'] uppercase">
                  Connected
                </span>
              </div>
            </div>

            {/* Separator / Ingress Stream */}
            <div className="self-stretch flex items-center justify-between gap-3">
              <div className="flex-1 h-0 border border-dashed border-white/20" />
              <div className="text-orange-300 text-xs font-normal font-['JetBrains_Mono'] whitespace-nowrap">
                READ-ONLY payload extraction
              </div>
              <div className="flex-1 h-0 border-dashed border border-white/20" />
            </div>

            {/* Outcome Comparison Columns */}
            <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Incumbent Engine */}
              <div className="p-4 bg-indigo-950/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-2">
                <div className="text-orange-300 text-xs font-normal font-['JetBrains_Mono']">
                  INCUMBENT OUTCOME
                </div>
                <div className="text-white text-xl font-bold font-['Inter']">
                  ILLUSTRATIVE RESULT
                </div>
                <div className="text-white/50 text-xs font-normal font-['Inter']">
                  Baseline tax engine determination
                </div>
              </div>

              {/* Shadow Engine */}
              <div className="p-4 bg-purple-900/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-2">
                <div className="text-purple-200 text-xs font-normal font-['JetBrains_Mono']">
                  SHADOW ASSURANCE
                </div>
                <div className="text-white text-xl font-bold font-['Inter']">
                  ILLUSTRATIVE RESULT
                </div>
                <div className="text-white/50 text-xs font-normal font-['Inter']">
                  Parallel ZoikoTax determination
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
