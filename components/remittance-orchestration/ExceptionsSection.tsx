"use client";

import React from "react";
import Image from "next/image";

export default function ExceptionsSection() {
  const cards = [
    {
      num: "01",
      title: "Validation Exceptions",
      desc: "Route blocked packets to reviewers with clear failure reasons and evidence.",
    },
    {
      num: "02",
      title: "Rejection Handling",
      desc: "Capture rejection reasons from treasury and preserve them in the instruction history.",
    },
    {
      num: "03",
      title: "Cancellation & Supersession",
      desc: "Support cancellation and supersession with immutable audit records and versioned evidence.",
    },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image - Full Opacity */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/remittance-orchestration/Exceptions Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col items-start gap-4 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#F4A261]">
              EXCEPTIONS, REJECTIONS, CANCELLATIONS &amp; SUPERSESSION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Exceptions are handled with governed workflows.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-zinc-300">
              When an instruction fails validation, is rejected by treasury, or needs cancellation, the platform routes it into a controlled exception flow that preserves auditability and prevents loss of context.
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((c) => (
              <div
                key={c.num}
                className="flex flex-col justify-start items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
              >
                <span className="text-xs sm:text-sm font-bold text-[#F4A261]">
                  {c.num}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {c.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
