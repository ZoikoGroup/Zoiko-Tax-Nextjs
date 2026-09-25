"use client";

import React from "react";
import Image from "next/image";

export default function BuyerOutcomesSection() {
  const outcomes = [
    {
      num: "01",
      title: "Tax & Compliance",
      desc: "Defensible decisions and controlled obligations across telecom fiscal operations.",
    },
    {
      num: "02",
      title: "Finance",
      desc: "Close with reconciled fiscal truth and durable settlement evidence.",
    },
    {
      num: "03",
      title: "Revenue Assurance",
      desc: "Detect leakage and explain variance with governed fiscal evidence.",
    },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image - Full Opacity */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/remittance-orchestration/Buyer Outcomes Background Image.png"
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
              SALES / BUYER OUTCOMES / RETENTION LOGIC
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Buyer outcomes are aligned to telecom fiscal operations.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-zinc-300">
              The platform supports teams accountable for tax, compliance, finance, billing, revenue assurance, product launch, and technology leadership.
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((o) => (
              <div
                key={o.num}
                className="flex flex-col justify-start items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
              >
                <span className="text-xs sm:text-sm font-bold text-[#F4A261]">
                  {o.num}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {o.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
