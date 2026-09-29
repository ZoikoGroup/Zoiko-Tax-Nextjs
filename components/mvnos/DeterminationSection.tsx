"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function DeterminationSection() {
  const steps = [
    {
      num: "01",
      title: "Transaction intake",
      description:
        "Receive usage, billing, adjustments and event families through governed contracts.",
    },
    {
      num: "02",
      title: "Controlled classification",
      description:
        "Resolve service and regulatory-revenue classification with versioned decisions.",
    },
    {
      num: "03",
      title: "Jurisdiction inputs",
      description:
        "Apply governed location, authority, entity and responsibility inputs.",
    },
    {
      num: "04",
      title: "Deterministic outcomes",
      description:
        "Use approved rules for supported outcomes; preserve every version and source.",
    },
  ];

  const statePills = ["UNSUPPORTED", "AMBIGUOUS", "STALE", "CONFLICTED"];

  return (
    <section className="w-full relative bg-[#FAF3FF] flex flex-col justify-start items-center overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col lg:flex-row justify-start items-start gap-12 lg:gap-14">
        {/* Left Column: Heading and Description */}
        <div className="w-full lg:w-[490px] shrink-0 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
              Tax determination
            </div>
            <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
              Determine from governed facts—not an operating-model shortcut.
            </h2>
            <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
              Transaction intake patterns are handled at a family level, then connected to controlled service and regulatory-revenue classification, governed jurisdiction inputs and deterministic supported outcomes.
            </p>
          </div>

          <p className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter'] leading-6">
            The model label or host relationship is context, not a legal conclusion. Unsupported, ambiguous, stale or conflicted states are surfaced for governed action rather than guessed.
          </p>

          <div className="flex flex-wrap justify-start items-start gap-3 pt-2">
            <Link
              href="#determination"
              className="h-12 px-6 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-500 flex justify-center items-center shadow-sm transition-colors"
            >
              <span className="text-white text-sm font-semibold font-['Inter']">
                Explore Tax Determination
              </span>
            </Link>

            <Link
              href="#developers"
              className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2.5 shadow-sm transition-colors group"
            >
              <span className="text-zinc-900 text-sm font-semibold font-['Inter']">
                Explore Developers
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Governed Decision Profile Card */}
        <div className="flex-1 w-full p-6 sm:p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-4 shadow-sm">
          <div className="self-stretch flex justify-between items-center">
            <div className="justify-start text-zinc-900 text-lg font-bold font-['Inter']">
              Governed decision profile
            </div>
            <div className="px-3.5 py-1.5 bg-red-100 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-start">
              <span className="text-orange-600 text-xs font-semibold font-['Roboto_Mono']">
                CONCEPTUAL
              </span>
            </div>
          </div>

          {/* 4 Process Steps */}
          {steps.map((step) => (
            <div
              key={step.num}
              className="self-stretch p-4 bg-purple-100 rounded-xl flex items-center gap-4 transition-transform hover:scale-[1.01] duration-150"
            >
              <div className="size-10 bg-violet-950 rounded-xl flex justify-center items-center shrink-0">
                <span className="text-orange-300 text-xs font-normal font-['Roboto_Mono']">
                  {step.num}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-[5px]">
                <div className="justify-start text-zinc-900 text-base font-bold font-['Inter']">
                  {step.title}
                </div>
                <div className="self-stretch justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-5">
                  {step.description}
                </div>
              </div>
            </div>
          ))}

          {/* 4 State Indicators */}
          <div className="self-stretch flex flex-wrap justify-start items-start gap-2 pt-1">
            {statePills.map((pill) => (
              <div
                key={pill}
                className="px-3.5 py-2 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-start"
              >
                <span className="text-zinc-900 text-xs font-semibold font-['Roboto_Mono']">
                  {pill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
