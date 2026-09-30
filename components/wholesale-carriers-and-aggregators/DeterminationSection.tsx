"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function DeterminationSection() {
  const cards = [
    {
      num: "01",
      title: "Transaction intake",
      desc: "Accept supported event, invoice, usage and batch patterns at a family level; validate contracts and required context before evaluation.",
    },
    {
      num: "02",
      title: "Controlled classification",
      desc: "Resolve service and regulatory-revenue classes through versioned, approved mappings with explicit provenance.",
    },
    {
      num: "03",
      title: "Governed jurisdiction",
      desc: "Use approved place, nexus, authority and responsibility inputs—not model inference—to establish applicable scope.",
    },
    {
      num: "04",
      title: "Deterministic outcomes",
      desc: "Apply supported rules and content versions while preserving the responsible provider, counterparty and legal entity.",
    },
  ];

  const surfacePills = [
    { label: "UNSUPPORTED", bg: "bg-rose-100", text: "text-stone-700", border: "outline-stone-300" },
    { label: "AMBIGUOUS", bg: "bg-orange-100", text: "text-yellow-800", border: "outline-yellow-400" },
    { label: "STALE", bg: "bg-purple-100", text: "text-violet-950", border: "outline-violet-300" },
    { label: "CONFLICTED", bg: "bg-rose-100", text: "text-stone-700", border: "outline-stone-300" },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col lg:flex-row justify-start items-start gap-12 lg:gap-14">
        {/* Left Column */}
        <div className="w-full lg:w-[500px] xl:w-[520px] shrink-0 flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
            <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
              Counterparty-aware determination
            </div>
            <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[47.52px]">
              Determine supported outcomes without guessing through ambiguity.
            </h2>
            <p className="self-stretch justify-start text-zinc-600 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
              Bring transaction intake, service classification, jurisdiction and relationship context into a governed decision path.
            </p>
          </div>

          <p className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter'] leading-6">
            Wholesale-carrier, aggregator, provider or counterparty labels are context—not legal conclusions.
          </p>

          <div className="inline-flex justify-start items-center gap-3 flex-wrap pt-2">
            <Link
              href="#determination"
              className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 transition-colors shadow-sm"
            >
              <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
                Explore Tax Determination
              </span>
            </Link>

            <Link
              href="#developers"
              className="h-12 px-4 rounded-[999px] flex justify-center items-center gap-2 hover:bg-zinc-200/50 transition-colors group"
            >
              <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
                Explore Developers
              </span>
              <ArrowUpRight className="size-4 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: 4 Cards & Surface Badges */}
        <div className="flex-1 w-full flex flex-col justify-start items-start gap-3">
          {cards.map((card) => (
            <div
              key={card.num}
              className="self-stretch p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-start gap-4 shadow-sm"
            >
              <div className="size-8 bg-violet-950 rounded-xl flex justify-center items-center shrink-0">
                <span className="text-white text-xs font-bold font-['Roboto_Mono']">
                  {card.num}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
                <h3 className="justify-start text-zinc-900 text-base font-bold font-['Inter']">
                  {card.title}
                </h3>
                <p className="self-stretch justify-start text-zinc-600 text-sm font-normal font-['Inter'] leading-5">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Surface Row */}
          <div className="self-stretch pt-3 flex flex-wrap items-center gap-2.5">
            <span className="text-zinc-600 text-xs font-bold font-['Roboto_Mono'] tracking-wider">
              SURFACE, DO NOT GUESS:
            </span>
            {surfacePills.map((pill) => (
              <div
                key={pill.label}
                className={`px-3.5 py-1.5 ${pill.bg} rounded-[999px] outline outline-1 outline-offset-[-1px] ${pill.border} flex items-center justify-center`}
              >
                <span className={`${pill.text} text-xs font-bold font-['Roboto_Mono']`}>
                  {pill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
