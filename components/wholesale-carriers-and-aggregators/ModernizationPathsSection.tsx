"use client";

import React from "react";
import Link from "next/link";
import {  Cpu, ShieldCheck, ArrowRight, Workflow, ScanSearch, Blocks, Briefcase } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ModernizationPathsSection() {
  const paths = [
    {
      num: "01",
      title: "Native",
      desc: "Use ZoikoTax as the supported decision and control layer where jurisdiction and capability are production-ready.",
      icon: Cpu,
    },
    {
      num: "02",
      title: "Federated",
      desc: "Coexist with incumbent engines while preserving source, responsibility, comparison and evidence boundaries.",
      icon: Workflow,
    },
    {
      num: "03",
      title: "Shadow Assurance",
      desc: "Compare outcomes before governed review and cutover. Shadow results remain non-authoritative until approved.",
      icon: ScanSearch,
    },
    {
      num: "04",
      title: "OEM / Embedded",
      desc: "Embed governed fiscal controls into supported platform experiences without obscuring entity or provider context.",
      icon: Blocks,
    },
    {
      num: "05",
      title: "Managed Compliance",
      desc: "Coordinate supported compliance operations through explicit scope, approvals and evidence ownership.",
      icon: Briefcase,
    },
  ];

  const journeySteps = [
    { num: "01", label: "Profile" },
    { num: "02", label: "Map" },
    { num: "03", label: "Reconcile" },
    { num: "04", label: "Shadow-test" },
    { num: "05", label: "Approve", isHighlight: true },
    { num: "06", label: "Cut over" },
  ];

  return (
    <section className="w-full relative  flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="w-full max-w-7xlflex flex-col justify-start items-start gap-3.5">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Modernization paths
          </div>
          <h2 className="mt-3 self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[47.52px]">
            Modernize without forcing a big-bang cutover.
          </h2>
          <p className="mt-3 self-stretch justify-start text-zinc-600 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Adoption can fit the enabling and billing platforms already in place; it need not replace them.
          </p>
        </div>

        {/* 5 Modernization Cards */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.num}
                className="min-h-60 p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-between items-start gap-3.5 shadow-sm"
              >
                <div className="self-stretch flex justify-between items-center">
                  <span className="justify-start text-orange-600 text-xs font-semibold font-['Roboto_Mono']">
                    {path.num}
                  </span>
                  <div className="size-5 flex items-center justify-center text-violet-950">
                    <Icon className="size-4" />
                  </div>
                </div>

                <div className="self-stretch flex flex-col gap-2">
                  <h3 className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">
                    {path.title}
                  </h3>
                  <p className="self-stretch justify-start text-zinc-600 text-sm font-normal font-['Inter'] leading-5">
                    {path.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Governed Adoption Journey Banner */}
        <div className="self-stretch p-6 sm:p-8 bg-violet-950 rounded-3xl flex flex-col justify-start items-start gap-6 shadow-xl">
          <div className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono'] tracking-wider">
            GOVERNED ADOPTION JOURNEY
          </div>

          {/* 6 Steps */}
          <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {journeySteps.map((step, idx) => (
              <div key={step.num} className="flex items-center gap-2">
                <div
                  className={`flex-1 px-4 py-3.5 rounded-xl flex items-center gap-2.5 transition-all ${
                    step.isHighlight
                      ? "bg-purple-900 outline outline-1 outline-offset-[-1px] outline-orange-300 shadow-md"
                      : "bg-violet-900/60 outline outline-1 outline-offset-[-1px] outline-white/10"
                  }`}
                >
                  <span className="justify-start text-orange-300 text-xs font-semibold font-['Roboto_Mono']">
                    {step.num}
                  </span>
                  <span className="justify-start text-white text-sm font-medium font-['Inter']">
                    {step.label}
                  </span>
                </div>
                {idx < journeySteps.length - 1 && (
                  <ArrowRight className="hidden lg:block size-4 text-zinc-400 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="self-stretch pt-2 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-t border-white/10">
            <p className="max-w-[590px] justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-5">
              Shadow Assurance remains non-authoritative before governed review and cutover.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href="/shadow-assurance"
                className="h-11 px-5 bg-white hover:bg-zinc-100 rounded-[999px] flex justify-center items-center gap-2 transition-colors shadow-sm"
              >
                <span className="justify-start text-slate-900 text-sm font-semibold font-['Inter']">
                  Explore Shadow Assurance
                </span>
              </Link>
              <Link
                href="/migration-onboarding"
                className="h-11 px-5 bg-white hover:bg-zinc-100 rounded-[999px] flex justify-center items-center gap-2 transition-colors shadow-sm"
              >
                <span className="justify-start text-slate-900 text-sm font-semibold font-['Inter']">
                  Migration &amp; Onboarding
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
