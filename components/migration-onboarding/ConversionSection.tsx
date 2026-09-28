"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ConversionSection() {
  return (
    <section className="w-full relative bg-indigo-950 flex flex-col justify-start items-center overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/migration-onboarding/Conversion Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center "
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-20 sm:py-24 flex flex-col justify-start items-center gap-8 text-center">
        <div className="justify-start text-orange-300 text-xs sm:text-sm font-bold font-['Inter'] uppercase tracking-wider">
          READY TO MODERNIZE TELECOM FISCAL COMPLIANCE?
        </div>

        <h2 className="w-full max-w-[1000px] text-center justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
          Plan your transition with governed <br/>evidence and explicit gates.
        </h2>

        <p className="w-full max-w-[800px] text-center justify-start text-zinc-300 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed">
          Use non-impact Shadow comparison to investigate alignment, preserve discrepancies, and evaluate readiness before any authorized cutover.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
          <Link
            href="#book-a-demo"
            className="h-12 px-6 py-3 bg-amber-700 hover:bg-amber-800 transition-colors rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center"
          >
            <span className="justify-start text-white text-sm font-semibold font-['Inter']">
              Book a Demo
            </span>
          </Link>

          <Link
            href="/coverage"
            className="h-12 px-6 py-3 bg-white hover:bg-neutral-50 transition-colors rounded-[999px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center"
          >
            <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
              View Current Coverage
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
