"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ConversionSection() {
  return (
    <section className="w-full relative bg-slate-900 flex flex-col justify-start items-center overflow-hidden">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0  overflow-hidden">
        <Image
          src="/shadow-assurance/Conversion Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-20 flex flex-col justify-start items-center gap-10">
        <div className="self-stretch flex flex-col justify-start items-center gap-5 text-center">
          <div className="self-stretch text-center justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            READY TO MODERNIZE TELECOM FISCAL COMPLIANCE?
          </div>

          <h2 className="self-stretch text-center justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Inter'] leading-tight">
            See how ZoikoTax fits your telecom architecture.
          </h2>

          <p className="self-stretch opacity-80 text-center justify-start text-white text-base sm:text-lg font-normal font-['Inter'] max-w-3xl mx-auto">
            Explore parallel verification, trace metrics and guided cutover scenarios.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link
            href="#book-demo"
            className="px-6 py-3 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-500 flex justify-center items-center shadow-sm transition-colors"
          >
            <span className="text-white text-sm font-semibold font-['Inter']">Book a Demo</span>
          </Link>

          <Link
            href="#view-coverage"
            className="px-6 py-3 bg-white hover:bg-zinc-100 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center shadow-sm transition-colors"
          >
            <span className="text-zinc-900 text-sm font-semibold font-['Inter']">View Coverage</span>
          </Link>

          <Link
            href="#evidence-replay"
            className="px-6 py-3 bg-white hover:bg-zinc-100 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center shadow-sm transition-colors"
          >
            <span className="text-zinc-900 text-sm font-semibold font-['Inter']">Explore Evidence &amp; Replay</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
