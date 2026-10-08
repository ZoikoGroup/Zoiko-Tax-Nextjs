"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";
import { Check, Network } from "lucide-react";

export default function DirectAnswerSection() {
  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Direct answer
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-4xl font-bold font-['Inter'] leading-tight">
            What does ZoikoTax do for Mobile Network Operators?
          </h2>
        </div>

        <div className="self-stretch p-6 sm:p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col sm:flex-row justify-start items-start gap-6 shadow-sm">
          <div className="size-12 bg-violet-100 rounded-[999px] flex justify-center items-center shrink-0">
            <Network className="w-6 h-6 text-orange-600" />
          </div>
          <p className="flex-1 justify-start text-zinc-900 text-lg sm:text-xl font-normal font-['Inter'] leading-8">
            ZoikoTax for Mobile Network Operators is a telecom fiscal-control solution experience for connecting high-volume transaction context, complex service classification, jurisdiction and responsibility, supported tax determination, regulatory obligations, compliance workflows, reconciliation and replayable evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
