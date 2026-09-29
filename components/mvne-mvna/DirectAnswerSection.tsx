import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function DirectAnswerSection() {
  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-7">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Direct answer
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            What does ZoikoTax do for MVNEs &amp; MVNAs?
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            ZoikoTax for MVNEs &amp; MVNAs is a telecom fiscal-control solution experience for enablement and aggregation platforms supporting multiple operators, brands and tenants. It connects downstream attribution, service and billing facts, legal-entity isolation, jurisdiction and responsibility, supported tax determination, regulatory obligations, compliance workflows, reconciliation and replayable evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
