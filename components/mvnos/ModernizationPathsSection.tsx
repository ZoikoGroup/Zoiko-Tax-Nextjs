"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ModernizationPathsSection() {
  const paths = [
    {
      num: "01",
      title: "Native",
      desc: "Use ZoikoTax as the governed control layer where the required jurisdiction and capability are supported.",
      isDark: false,
    },
    {
      num: "02",
      title: "Federated",
      desc: "Coexist with incumbent engines while responsibilities, decisions and evidence remain explicit.",
      isDark: false,
    },
    {
      num: "03",
      title: "Shadow Assurance",
      desc: "Compare non-authoritative outcomes before governed review, approval and cutover.",
      isDark: true,
    },
    {
      num: "04",
      title: "OEM / Embedded",
      desc: "Embed supported capabilities through governed product and commercial arrangements.",
      isDark: false,
    },
    {
      num: "05",
      title: "Managed Compliance",
      desc: "Pair activated platform capabilities with controlled operational support where offered.",
      isDark: false,
    },
  ];

  const journeySteps = [
    { num: "01", label: "Profile" },
    { num: "02", label: "Map" },
    { num: "03", label: "Reconcile" },
    { num: "04", label: "Shadow-test" },
    { num: "05", label: "Approve" },
    { num: "06", label: "Cut over", isFinal: true },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Modernization paths
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Modernize without forcing a big-bang cutover.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            Choose a governed path that matches the operating estate, jurisdictional readiness and approval posture. Shadow Assurance remains non-authoritative until governed review and cutover.
          </p>
        </div>

        {/* 5 Modernization Cards */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {paths.map((p) => (
            <div
              key={p.num}
              className={`min-h-64 p-6 rounded-2xl flex flex-col justify-start items-start gap-3.5 transition-transform hover:-translate-y-1 duration-200 ${
                p.isDark
                  ? "bg-violet-950 outline outline-1 outline-offset-[-1px] outline-white/10 shadow-lg text-white"
                  : "bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline outline-1 outline-offset-[-1px] outline-zinc-200"
              }`}
            >
              <div
                className={`justify-start text-xs font-semibold font-['Roboto_Mono'] ${
                  p.isDark ? "text-orange-300" : "text-orange-600"
                }`}
              >
                {p.num}
              </div>
              <h3
                className={`self-stretch justify-start text-xl font-bold font-['Inter'] leading-6 ${
                  p.isDark ? "text-white" : "text-zinc-900"
                }`}
              >
                {p.title}
              </h3>
              <p
                className={`self-stretch justify-start text-base font-normal font-['Inter'] leading-6 ${
                  p.isDark ? "text-zinc-300" : "text-stone-500"
                }`}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stepper Container */}
        <div className="self-stretch p-6 sm:p-7 bg-purple-100 rounded-3xl flex flex-col justify-start items-start gap-6 shadow-sm">
          <div className="self-stretch flex flex-wrap justify-between items-center gap-2">
            <h3 className="justify-start text-zinc-900 text-lg sm:text-xl font-bold font-['Inter']">
              A measured journey to governed cutover
            </h3>
            <span className="justify-start text-stone-500 text-xs font-normal font-['Inter']">
              Approval—not comparison alone—changes authority.
            </span>
          </div>

          {/* Stepper Steps */}
          <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-center">
            {journeySteps.map((step) => (
              <div key={step.num} className="flex items-center gap-2">
                <div
                  className={`size-10 rounded-[20px] flex justify-center items-center shrink-0 ${
                    step.isFinal ? "bg-orange-600" : "bg-violet-950"
                  }`}
                >
                  <span className="text-white text-[10px] font-normal font-['Roboto_Mono']">
                    {step.num}
                  </span>
                </div>
                <span className="justify-start text-zinc-900 text-xs font-bold font-['Inter']">
                  {step.label}
                </span>
                {!step.isFinal && (
                  <ChevronRight className="w-4 h-4 text-orange-600 shrink-0 ml-auto mr-1 hidden sm:block" />
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-start items-start gap-3 pt-2">
            <Link
              href="#shadow-assurance"
              className="h-12 px-6 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-500 flex justify-center items-center shadow-sm transition-colors"
            >
              <span className="text-white text-sm font-semibold font-['Inter']">
                Explore Shadow Assurance
              </span>
            </Link>

            <Link
              href="/migration-onboarding"
              className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2.5 shadow-sm transition-colors group"
            >
              <span className="text-zinc-900 text-sm font-semibold font-['Inter']">
                Migration &amp; Onboarding
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
