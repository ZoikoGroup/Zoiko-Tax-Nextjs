"use client";

import React from "react";
import Link from "next/link";
import WhiteBgPattern from "./WhiteBgPattern";
import { ArrowUpRight, Check } from "lucide-react";

export default function DeterminationSection() {
  const points = [
    "High-volume transaction intake with preserved source context",
    "Controlled service and regulatory-revenue classification",
    "Deterministic supported outcomes with replayable versions",
  ];

  const outcomeStates = [
    {
      state: "SUPPORTED",
      colorBar: "bg-teal-700",
      textColor: "text-teal-700",
      desc: "Approved content and inputs produce a deterministic supported outcome.",
    },
    {
      state: "AMBIGUOUS",
      colorBar: "bg-yellow-700",
      textColor: "text-yellow-700",
      desc: "More than one governed interpretation requires resolution.",
    },
    {
      state: "STALE",
      colorBar: "bg-yellow-700",
      textColor: "text-yellow-700",
      desc: "A source, input or content version requires review.",
    },
    {
      state: "CONFLICTED",
      colorBar: "bg-orange-600",
      textColor: "text-orange-600",
      desc: "Governed inputs disagree and the workflow stops rather than guesses.",
    },
    {
      state: "UNSUPPORTED",
      colorBar: "bg-stone-500",
      textColor: "text-stone-500",
      desc: "No approved capability applies to the requested case.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-14">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
              At-scale determination
            </div>
            <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
              Deterministic outcomes for carrier-scale fiscal workflows.
            </h2>
            <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-8">
              Ingest transaction context, apply controlled service and regulatory-revenue classification, and evaluate governed jurisdiction inputs against approved supported content.
            </p>
          </div>

          <p className="self-stretch justify-start text-zinc-900 text-base font-normal font-['Inter'] leading-6">
            Unsupported, ambiguous, stale or conflicted states are surfaced for governed action rather than silently guessed.
          </p>

          <div className="flex flex-col justify-start items-start gap-3">
            {points.map((pt, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="size-5 bg-violet-100 rounded-[999px] flex justify-center items-center shrink-0">
                  <Check className="w-3 h-3 text-orange-600" />
                </div>
                <span className="text-zinc-900 text-base font-normal font-['Inter']">
                  {pt}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-start items-start gap-3 pt-2">
            <Link
              href="/determination"
              className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 shadow-sm transition-colors group"
            >
              <span className="text-zinc-900 text-sm font-semibold font-['Inter']">Explore Tax Determination</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#developers"
              className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 shadow-sm transition-colors group"
            >
              <span className="text-zinc-900 text-sm font-semibold font-['Inter']">Explore Developers</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Governed Outcome State Box */}
        <div className="w-full lg:w-[520px] p-6 sm:p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-2.5 shadow-md">
          <div className="justify-start text-orange-600 text-xs font-bold font-['Roboto_Mono'] tracking-wider mb-1">
            GOVERNED OUTCOME STATE
          </div>

          {outcomeStates.map((st) => (
            <div
              key={st.state}
              className="self-stretch px-4 py-3.5 bg-neutral-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex items-center gap-4"
            >
              <div className={`w-2 h-10 ${st.colorBar} rounded-[999px] shrink-0`} />
              <div className="flex-1 flex flex-col justify-start items-start gap-1">
                <div className={`text-xs font-bold font-['Roboto_Mono'] ${st.textColor}`}>
                  {st.state}
                </div>
                <div className="self-stretch text-stone-500 text-xs font-normal font-['Inter'] leading-5">
                  {st.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
