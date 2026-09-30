"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ConversionSection() {
  return (
    <section className="w-full relative min-h-[480px] lg:min-h-[520px] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/wholesale-carriers-and-aggregators/Final conversion (1).png"
          alt="Final Conversion Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-20 flex flex-col justify-center items-center">
        <div className="w-full max-w-[780px] flex flex-col justify-start items-center gap-6 text-center">
          {/* Eyebrow */}
          <div className="self-stretch text-center justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            WHOLESALE CARRIERS &amp; AGGREGATORS
          </div>

          {/* Heading */}
          <h2 className="self-stretch text-center justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[50.88px]">
            See how ZoikoTax fits your Wholesale/inter-provider operating model.
          </h2>

          {/* Subtitle */}
          <p className="self-stretch text-center justify-start text-zinc-300 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
            Map provider and counterparty context, legal entities, responsibility boundaries and supported capabilities before committing to a modernization path.
          </p>

          {/* Action Buttons */}
          <div className="inline-flex justify-center items-center gap-3.5 flex-wrap pt-2">
            <Link
              href="#book-demo"
              className="h-12 px-6 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center gap-2 transition-colors group shadow-lg"
            >
              <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                Book a Demo
              </span>
              <ArrowUpRight className="size-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#coverage"
              className="h-12 px-6 bg-white hover:bg-zinc-100 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white flex justify-center items-center gap-2 transition-colors shadow-lg"
            >
              <span className="justify-start text-slate-900 text-sm font-semibold font-['Inter']">
                View Current Coverage
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
