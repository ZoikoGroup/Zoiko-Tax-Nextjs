"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function DeterminationSection() {
  const steps = [
    {
      num: "01",
      title: "Transaction intake",
      desc: "Support governed intake patterns at a family level, without making throughput, latency or tenant-volume claims.",
    },
    {
      num: "02",
      title: "Service classification",
      desc: "Control telecom service and regulatory-revenue classifications with versioned sources and review states.",
    },
    {
      num: "03",
      title: "Jurisdiction inputs",
      desc: "Resolve supported jurisdiction and authority inputs from facts and governed content—not assumed tenant identity.",
    },
    {
      num: "04",
      title: "Deterministic outcomes",
      desc: "Apply approved rules for supported outcomes and retain the decision state that produced each result.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col lg:flex-row justify-start items-start gap-12">
        {/* Left Column: Heading and CTAs */}
        <div className="w-full lg:w-[490px] shrink-0 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
              Tenant-aware determination
            </div>
            <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
              Determine from governed facts—not role-name assumptions.
            </h2>
            <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
              Platform, operator, brand and tenant labels are context, not legal conclusions. Unsupported, ambiguous, stale or conflicted states are surfaced for governed handling rather than guessed.
            </p>
          </div>

          <div className="flex flex-wrap justify-start items-start gap-3 pt-2">
            <Link
              href="#determination"
              className="h-12 px-6 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center shadow-sm transition-colors"
            >
              <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                Explore Tax Determination
              </span>
            </Link>

            <Link
              href="#developers"
              className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 shadow-sm transition-colors"
            >
              <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
                Explore Developers
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: 4 Step Cards */}
        <div className="flex-1 w-full flex flex-col justify-start items-start gap-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="self-stretch p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex items-center gap-4 shadow-sm transition-transform hover:-translate-y-0.5 duration-150"
            >
              <span className="w-10 justify-start text-orange-600 text-xs sm:text-sm font-bold font-['Roboto_Mono'] shrink-0">
                {step.num}
              </span>
              <div className="flex-1 flex flex-col justify-start items-start gap-1">
                <span className="self-stretch justify-start text-zinc-900 text-base sm:text-lg font-bold font-['Inter']">
                  {step.title}
                </span>
                <span className="self-stretch justify-start text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] leading-5">
                  {step.desc}
                </span>
              </div>
              <CheckCircle2 className="size-5 text-orange-600 shrink-0" strokeWidth={2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
