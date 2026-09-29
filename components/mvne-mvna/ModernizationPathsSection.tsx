"use client";

import React from "react";
import Link from "next/link";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ModernizationPathsSection() {
  const paths = [
    {
      num: "01",
      title: "Native",
      desc: "Use ZoikoTax determination and supported lifecycle capabilities directly where production availability is confirmed.",
    },
    {
      num: "02",
      title: "Federated",
      desc: "Coexist with incumbent engines and route supported scope through a governed control model.",
    },
    {
      num: "03",
      title: "Shadow Assurance",
      desc: "Compare incumbent and candidate outcomes before governed review and cutover; shadow results remain non-authoritative.",
    },
    {
      num: "04",
      title: "OEM / Embedded",
      desc: "Embed supported experiences into an enabling platform while preserving explicit attribution and responsibility context.",
    },
    {
      num: "05",
      title: "Managed Compliance",
      desc: "Coordinate supported operational workflows with clear approvals, evidence and responsibility boundaries.",
    },
  ];

  const steps = [
    { num: "01", title: "Profile" },
    { num: "02", title: "Map" },
    { num: "03", title: "Reconcile" },
    { num: "04", title: "Shadow-test" },
    { num: "05", title: "Approve" },
    { num: "06", title: "Cut over" },
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
            Adoption can preserve the enabling or billing platform already in place. Choose a supported path that keeps attribution, controls and evidence explicit as scope changes.
          </p>
        </div>

        {/* 5 White Cards */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {paths.map((card) => (
            <div
              key={card.num}
              className="flex-1 min-h-64 p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3.5 shadow-sm transition-transform hover:-translate-y-1 duration-200"
            >
              <div className="self-stretch flex justify-between items-center">
                <span className="justify-start text-orange-600 text-xs font-semibold font-['Roboto_Mono']">
                  {card.num}
                </span>
                <div className="size-2 bg-purple-100 rounded-full" />
              </div>
              <h3 className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">
                {card.title}
              </h3>
              <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dark Journey Stepper Container */}
        <div className="self-stretch p-6 sm:p-7 bg-slate-900 rounded-3xl flex flex-col justify-start items-start gap-5 shadow-xl">
          <div className="self-stretch flex flex-wrap justify-between items-center gap-2">
            <h3 className="justify-start text-white text-lg sm:text-xl font-bold font-['Inter']">
              A measured, governed journey
            </h3>
            <span className="justify-start text-zinc-300 text-xs font-normal font-['Inter']">
              Shadow Assurance is non-authoritative before review and approved cutover.
            </span>
          </div>

          <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {steps.map((s) => (
              <div
                key={s.num}
                className="flex-1 min-h-32 p-4 bg-purple-900 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-purple-800 flex flex-col justify-between items-start gap-2.5 transition-transform hover:-translate-y-0.5 duration-150"
              >
                <span className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono']">
                  {s.num}
                </span>
                <span className="self-stretch justify-start text-white text-base font-bold font-['Inter'] leading-5">
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-start items-start gap-3 pt-2">
          <Link
            href="#shadow-assurance"
            className="h-12 px-6 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center shadow-sm transition-colors"
          >
            <span className="justify-start text-white text-sm font-semibold font-['Inter']">
              Explore Shadow Assurance
            </span>
          </Link>

          <Link
            href="/migration-onboarding"
            className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 shadow-sm transition-colors"
          >
            <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
              Migration &amp; Onboarding
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
