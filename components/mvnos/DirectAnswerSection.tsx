import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";
import { Cpu, Network } from "lucide-react";

export default function DirectAnswerSection() {
  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-8">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Direct answer
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            What does ZoikoTax do for MVNOs?
          </h2>
        </div>

        <div className="self-stretch p-6 sm:p-9 bg-white rounded-3xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.07)] outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-9">
          <div className="size-14 bg-violet-950 rounded-2xl flex justify-center items-center shrink-0">
            <Network className="w-7 h-7 text-orange-300" strokeWidth={1.75} />
          </div>
          <div className="flex-1 justify-start text-zinc-900 text-lg sm:text-xl lg:text-xl font-semibold font-['Inter'] leading-7 sm:leading-8">
            ZoikoTax for MVNOs is a telecom fiscal-control solution experience for full, light and hybrid virtual-operator models. It connects service and billing facts, commercial-chain and host/operator context, jurisdiction and responsibility, supported tax determination, regulatory obligations, compliance workflows, reconciliation and replayable evidence.
          </div>
        </div>
      </div>
    </section>
  );
}
