"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ConversionSection() {
  return (
    <section className="w-full relative min-h-[470px] bg-slate-950 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Graphic & Gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/MVNE&MVNA/Final conversion.png"
          alt="MVNE & MVNA Operations Center"
          fill
          sizes="100vw"
          className="object-cover object-center "
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-20 flex flex-col justify-center items-center gap-7 text-center">
        <div className="justify-start text-orange-300 text-xs sm:text-sm font-bold font-['Inter'] uppercase tracking-wider">
          Ready to map the control model?
        </div>

        <h2 className="w-full max-w-[980px] text-center justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50px]">
          See how ZoikoTax fits your MVNE/MVNA multi-tenant operating model.
        </h2>

        <p className="w-full max-w-[760px] text-center justify-start text-zinc-300 text-base sm:text-lg font-normal font-['Inter'] leading-6 sm:leading-7">
          Review attribution, legal-entity isolation, responsibility, supported capabilities, modernization paths and the evidence needed to govern each outcome.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
          <Link
            href="#book-demo"
            className="h-12 px-6 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center shadow-sm transition-colors"
          >
            <span className="justify-start text-white text-sm font-semibold font-['Inter']">
              Book a Demo
            </span>
          </Link>

          <Link
            href="#coverage"
            className="h-12 px-5 bg-transparent hover:bg-white/10 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/40 flex justify-center items-center shadow-sm transition-colors"
          >
            <span className="justify-start text-white text-sm font-semibold font-['Inter']">
              View Current Coverage
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
