"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle, Calculator, CheckSquare, FileSearch, Globe2, ArrowRight, Compass, ListCheck, MapPinCheck } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function OutcomeModelSection() {
  const questions = [
    {
      icon: Compass,
      title: "What applies?",
      description:
        "Policy, classification, taxability, location and authority are connected into a governed applicability view.",
    },
    {
      icon: Calculator,
      title: "What is due?",
      description:
        "Supported deterministic determination and obligation logic produce scoped monetary and non-monetary outcomes.",
    },
    {
      icon: ListCheck,
      title: "What needs action?",
      description:
        "Explicit workflow states distinguish information, review, action, blocked and unsupported work.",
    },
    {
      icon: FileSearch,
      title: "Why?",
      description:
        "Evidence preserves sources, facts, versions, responsibility and approval context for later replay.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
        {/* Section Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Outcome model
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50.16px]">
            Four questions every consequential outcome should answer.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            The model keeps applicability, monetary outcomes, operational action and evidence connected without collapsing them into one generic compliance status.
          </p>
        </div>

        {/* 4 Questions Grid */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {questions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="min-h-44 p-6 bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3.5 transition-all hover:translate-y-[-2px]"
              >
                <div className="size-9 bg-violet-100 rounded-[10px] flex justify-center items-center shrink-0">
                  <Icon className="size-5 text-orange-600" />
                </div>
                <div className="self-stretch justify-start text-zinc-900 text-lg font-bold font-['Inter'] leading-6">
                  {item.title}
                </div>
                <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Coverage Answer Banner */}
        <div className="self-stretch p-6 sm:p-7 bg-violet-950 rounded-3xl flex flex-col lg:flex-row justify-start lg:items-center gap-5">
          <div className="size-12 bg-white/10 rounded-2xl flex justify-center items-center shrink-0">
            <MapPinCheck className="size-6 text-orange-300" />
          </div>

          <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
            <div className="justify-start text-white text-xl font-bold font-['Inter']">
              Coverage answer
            </div>
            <p className="self-stretch justify-start text-zinc-300 text-sm sm:text-base font-normal font-['Inter'] leading-6">
              Readiness is answered by capability, jurisdiction, operating mode and approved pack status. “Production” for one capability never implies every capability is available.
            </p>
          </div>

          <Link
            href="/coverage-overview"
            className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 text-sm font-bold font-['Inter'] shrink-0 group transition-colors"
          >
            <span>View Current Coverage</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
