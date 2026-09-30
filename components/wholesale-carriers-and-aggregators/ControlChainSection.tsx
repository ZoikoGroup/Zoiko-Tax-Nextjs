"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function ControlChainSection() {
  const steps = [
    { num: "01", title: "Product / offer", isHighlighted: false },
    { num: "02", title: "Transaction facts", isHighlighted: false },
    { num: "03", title: "Classification", isHighlighted: false },
    { num: "04", title: "Jurisdiction / authority", isHighlighted: false },
    { num: "05", title: "Provider / entity attribution", isHighlighted: true },
    { num: "06", title: "Determination", isHighlighted: false },
    { num: "07", title: "Obligations / compliance", isHighlighted: false },
    { num: "08", title: "Reconciliation", isHighlighted: false },
    { num: "09", title: "Evidence / replay", isHighlighted: true },
  ];

  return (
    <section className="w-full relative min-h-[600px] flex flex-col justify-start items-center overflow-hidden">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/wholesale-carriers-and-aggregators/Fiscal-control chain.png"
          alt="Fiscal control chain background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="w-full max-w-[1160px] flex flex-col justify-start items-start gap-3.5">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Wholesale fiscal-control chain
          </div>
          <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[47.52px]">
            Connect the fiscal decision chain across the Wholesale/inter-provider operating estate.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Provider and counterparty attribution, legal-entity separation and isolation boundaries travel with the outcome—not beside it.
          </p>
        </div>

        {/* 9-Step Chain Container */}
        <div className="self-stretch p-5 sm:p-7 bg-indigo-950/90 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-5 shadow-2xl backdrop-blur-md">
          {/* Scrollable / Grid steps */}
          <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
            {steps.map((step) => (
              <div
                key={step.num}
                className={`h-36 sm:h-40 px-3 py-4 rounded-xl flex flex-col justify-between items-start transition-all ${
                  step.isHighlighted
                    ? "bg-purple-900 outline outline-1 outline-offset-[-1px] outline-orange-300 shadow-lg shadow-purple-950/50"
                    : "bg-violet-950/80 outline outline-1 outline-offset-[-1px] outline-white/10 hover:outline-white/20"
                }`}
              >
                <span className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono']">
                  {step.num}
                </span>
                <span className="self-stretch justify-start text-white text-xs font-bold font-['Inter'] leading-4">
                  {step.title}
                </span>
                <div className="size-4 rounded-full bg-white/10 flex items-center justify-center">
                  <Check className="size-2.5 text-zinc-300" strokeWidth={2.5} />
                </div>
              </div>
            ))}
          </div>

          {/* Boundaries labels */}
          <div className="self-stretch px-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-2">
            <span className="justify-start text-zinc-400 text-xs font-normal font-['Roboto_Mono'] tracking-wider">
              SOURCE BOUNDARY
            </span>
            <span className="justify-start text-orange-300 text-xs font-semibold font-['Roboto_Mono'] tracking-wider">
              ATTRIBUTION + ISOLATION BOUNDARY
            </span>
            <span className="justify-start text-zinc-400 text-xs font-normal font-['Roboto_Mono'] tracking-wider">
              EVIDENCE BOUNDARY
            </span>
          </div>

          {/* Gradient Divider */}
          <div className="self-stretch h-0.5 bg-gradient-to-r from-orange-600 via-purple-500 to-violet-400 rounded-full" />

          {/* Bottom Bar */}
          <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <span className="justify-start text-zinc-300 text-xs font-semibold font-['Inter']">
              Evidence throughline · facts → versions → approvals → replay manifest
            </span>
            <span className="justify-start text-white text-sm font-bold font-['Inter']">
              AI assists. Approved rules decide. Evidence proves.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
