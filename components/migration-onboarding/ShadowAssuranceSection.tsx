"use client";

import React from "react";
import Image from "next/image";

export default function ShadowAssuranceSection() {
  const points = [
    "Parallel lane execution preserves legacy billing integrity.",
    "Explains computational variance down to localized factors.",
    "Creates a replayable ledger log of all parallel simulations.",
  ];

  return (
    <section id="shadow-assurance" className="w-full relative bg-gradient-to-r from-slate-900/90 via-indigo-950/80 to-indigo-950/70 flex flex-col justify-start items-start overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/migration-onboarding/Shadow Assurance.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center  mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase">
            Parallel Security
          </div>
          <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Shadow Assurance Pipeline Interlock
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Execute your transactions in real-time, non-impact fashion to safely pinpoint variance before transferring operational tax authorities.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Description & Points */}
          <div className="flex flex-col justify-start items-start gap-5">
            <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-relaxed">
              Shadow Assurance acts as a silent mirror of your transaction stream. It calculates, records, and compiles evidence blocks daily without affecting active billing systems. This gives you empirical proof of system alignment.
            </p>

            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {points.map((point) => (
                <div key={point} className="self-stretch justify-start text-white text-sm font-normal font-['Inter'] flex items-start gap-2">
                  <span className="text-orange-300 font-bold shrink-0">✓</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Comparator Widget */}
          <div className="p-6 sm:p-8 bg-violet-950/90 border border-violet-900/50 rounded-2xl flex flex-col justify-start items-start gap-4 backdrop-blur-sm shadow-md">
            <div className="justify-start text-orange-300 text-xs font-normal font-['Roboto_Mono'] tracking-wider uppercase">
              COMPARATOR ENGINE ACTIVE
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch flex justify-between items-center">
                <span className="justify-start text-white text-sm font-normal font-['Inter']">
                  Matched Rate
                </span>
                <span className="justify-start text-teal-300 text-sm font-bold font-['Roboto_Mono']">
                  99.992%
                </span>
              </div>

              <div className="self-stretch h-2.5 bg-indigo-950 rounded-[999px] overflow-hidden flex justify-start items-start">
                <div className="w-[50.9%] h-full bg-orange-300 rounded-[999px]" />
              </div>

              <div className="justify-start text-stone-300 text-xs font-normal font-['Inter'] mt-1">
                Comparator agreement is not a certification of legal correctness.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
