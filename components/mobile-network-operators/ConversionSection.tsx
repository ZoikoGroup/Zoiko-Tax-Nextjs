"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ConversionSection() {
  return (
    <section className="w-full relative min-h-96 bg-indigo-950 flex flex-col justify-start items-center overflow-hidden">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0  overflow-hidden">
        <Image
          src="/mobile-network-operators/Conversion image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-20 flex flex-col justify-start items-center gap-6 text-center">
        <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
          MOBILE NETWORK OPERATORS
        </div>

        <h2 className="w-full max-w-4xl text-center justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
          See how ZoikoTax fits your mobile-network operating model.
        </h2>

        <p className="w-full max-w-3xl text-center justify-start text-zinc-300 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Review your carrier estate, current engines, entity model, priority jurisdictions and evidence requirements with a solution specialist.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
          <Link
            href="#book-demo"
            className="h-12 px-6 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center shadow-sm transition-colors"
          >
            <span className="text-white text-sm font-semibold font-['Inter']">Book a Demo</span>
          </Link>

          <Link
            href="#coverage"
            className="h-12 px-6 bg-white/5 hover:bg-white/10 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/40 flex justify-center items-center gap-2 shadow-sm transition-colors group"
          >
            <span className="text-white text-sm font-semibold font-['Inter']">View Current Coverage</span>
            <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
