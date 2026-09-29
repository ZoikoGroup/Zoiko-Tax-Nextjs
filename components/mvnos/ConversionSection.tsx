"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ConversionSection() {
  return (
    <section className="w-full relative min-h-[460px] bg-slate-900 flex justify-center items-center overflow-hidden">
      {/* Background Graphic on Right */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full ">
          <Image
            src="/MVNO/Telecom image.png"
            alt="Telecom Network Operations"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center"
          />
        </div>
        {/* Dark Gradient Overlay for text prominence */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-950/90 via-50% to-indigo-950/30" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-20 flex flex-col justify-center items-center">
        <div className="w-full max-w-[760px] flex flex-col justify-start items-center gap-5 text-center">
          <div className="self-stretch text-center justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            MVNO FISCAL CONTROL
          </div>

          <h2 className="self-stretch text-center justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50.40px]">
            See how ZoikoTax fits your MVNO operating model.
          </h2>

          <p className="self-stretch text-center justify-start text-zinc-300 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Map service, billing, commercial-chain, operator-dependency and responsibility facts to the supported capabilities and governed evidence your teams need.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 pt-3">
            <Link
              href="#book-demo"
              className="h-12 px-6 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-500 flex justify-center items-center shadow-sm transition-colors"
            >
              <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                Book a Demo
              </span>
            </Link>

            <Link
              href="#coverage"
              className="h-12 px-5 bg-white/10 hover:bg-white/20 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/30 flex justify-center items-center gap-2.5 transition-colors group"
            >
              <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                View Current Coverage
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
