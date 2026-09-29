"use client";

import React from "react";
import Link from "next/link";
import WhiteBgPattern from "./WhiteBgPattern";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ModernizationPathsSection() {
  const paths = [
    {
      num: "01",
      title: "Native",
      desc: "Use supported ZoikoTax determination and compliance capabilities directly.",
    },
    {
      num: "02",
      title: "Federated",
      desc: "Coexist with incumbent tax engines while adding governed control and evidence.",
    },
    {
      num: "03",
      title: "Shadow Assurance",
      desc: "Compare outcomes non-authoritatively before governed review and cutover.",
    },
    {
      num: "04",
      title: "OEM / Embedded",
      desc: "Embed supported fiscal-control capabilities within an approved product experience.",
    },
    {
      num: "05",
      title: "Managed Compliance",
      desc: "Combine governed workflows with capability-specific managed operating support.",
    },
  ];

  const steps = [
    { num: "01", label: "Profile" },
    { num: "02", label: "Map" },
    { num: "03", label: "Reconcile" },
    { num: "04", label: "Shadow-test" },
    { num: "05", label: "Approve" },
    { num: "06", label: "Cut over", highlight: true },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-9">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Modernization paths
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
            Modernize without forcing a big-bang cutover.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-8">
            Choose the operating path that fits current engines, jurisdictional readiness and governance maturity.
          </p>
        </div>

        {/* 5 Cards */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-stretch">
          {paths.map((p) => (
            <div
              key={p.num}
              className="p-6 bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3.5 min-h-48"
            >
              <div className="justify-start text-orange-600 text-xs font-semibold font-['Roboto_Mono']">
                {p.num}
              </div>
              <h3 className="self-stretch justify-start text-zinc-900 text-2xl font-bold font-['Inter'] leading-7">
                {p.title}
              </h3>
              <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stepper Bar in Violet 950 */}
        <div className="self-stretch p-4 sm:p-6 bg-violet-950 rounded-3xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-center">
          {steps.map((st, idx) => (
            <div key={st.num} className="flex items-center gap-2">
              <div
                className={`flex-1 p-3.5 rounded-[10px] flex flex-col justify-start items-start gap-1 transition-transform hover:-translate-y-0.5 ${
                  st.highlight ? "bg-orange-600" : "bg-white/5"
                }`}
              >
                <div
                  className={`text-[10px] font-normal font-['Roboto_Mono'] ${
                    st.highlight ? "text-white" : "text-orange-300"
                  }`}
                >
                  {st.num}
                </div>
                <div className="text-white text-sm font-bold font-['Inter']">
                  {st.label}
                </div>
              </div>
              {idx < steps.length - 1 && (
                <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-orange-300 shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-start items-start gap-3">
          <Link
            href="/shadow-assurance"
            className="h-12 px-6 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 shadow-sm transition-colors group"
          >
            <span className="text-zinc-900 text-sm font-semibold font-['Inter']">
              Explore Shadow Assurance
            </span>
            <ArrowUpRight className="w-4 h-4 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/migration-onboarding"
            className="h-12 px-6 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 shadow-sm transition-colors group"
          >
            <span className="text-zinc-900 text-sm font-semibold font-['Inter']">
              Migration &amp; Onboarding
            </span>
            <ArrowUpRight className="w-4 h-4 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
