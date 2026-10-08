"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function DirectAnswerSection() {
  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-8">
        <div className="w-full max-w-7xl flex flex-col justify-start items-start gap-3.5">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Direct answer
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[47.52px]">
            What does ZoikoTax do for Wholesale Carriers &amp; <br/> Aggregators?
          </h2>
        </div>

        <div className="self-stretch p-6 sm:p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col md:flex-row justify-start items-start gap-6 sm:gap-8 shadow-sm">
          <div className="w-full md:w-32 shrink-0 justify-start text-orange-600 text-xs font-bold font-['Roboto_Mono'] tracking-wider">
            DEFINITION
          </div>
          <div className="flex-1 justify-start text-zinc-900 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            ZoikoTax for Wholesale Carriers &amp; Aggregators is a telecom fiscal-control solution experience for wholesale and inter-provider communications operations. It connects service and billing facts, provider/counterparty context, legal-entity separation, jurisdiction and responsibility, supported tax determination, regulatory obligations, compliance workflows, reconciliation and replayable evidence.
          </div>
        </div>
      </div>
    </section>
  );
}
