"use client";

import React from "react";
import Image from "next/image";
import { Link2 } from "lucide-react";

export default function ControlChainSection() {
  const steps = [
    { num: "01", title: "Product / offer" },
    { num: "02", title: "Transaction facts" },
    { num: "03", title: "Classification" },
    { num: "04", title: "Jurisdiction / authority" },
    { num: "05", title: "Legal entity / responsibility" },
    { num: "06", title: "Determination" },
    { num: "07", title: "Obligations / compliance" },
    { num: "08", title: "Reconciliation" },
    { num: "09", title: "Evidence / replay", highlight: true },
  ];

  return (
    <section className="w-full relative flex flex-col justify-start items-center overflow-hidden">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0  overflow-hidden">
        <Image
          src="/mobile-network-operators/Carrier.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-9">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Governed control chain
          </div>
          <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
            Connect the fiscal decision chain across the carrier estate.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-normal font-['Inter'] leading-8">
            Keep context, authority, outcomes and proof connected from the first commercial fact to historical replay.
          </p>
        </div>

        {/* 9 Step Cards */}
        <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`min-h-28 p-4 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-3 transition-transform hover:-translate-y-0.5 ${
                step.highlight ? "bg-orange-600" : "bg-purple-950/90 backdrop-blur-xs"
              }`}
            >
              <div
                className={`text-xs font-bold font-['Roboto_Mono'] ${
                  step.highlight ? "text-white" : "text-orange-300"
                }`}
              >
                {step.num}
              </div>
              <div className="self-stretch text-white text-base font-bold font-['Inter'] leading-5">
                {step.title}
              </div>
            </div>
          ))}
        </div>

        {/* Throughline Bar */}
        <div className="self-stretch px-6 py-4 bg-white/5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 backdrop-blur-xs">
          <div className="flex items-center gap-3">
            <Link2 className="w-5 h-5 text-orange-300 shrink-0" />
            <span className="text-white text-sm sm:text-base font-bold font-['Inter']">
              Evidence throughline • facts, sources, versions, approvals and lineage
            </span>
          </div>
          <div className="text-orange-300 text-sm sm:text-base font-bold font-['Inter']">
            AI assists. Approved rules decide. Evidence proves.
          </div>
        </div>
      </div>
    </section>
  );
}
