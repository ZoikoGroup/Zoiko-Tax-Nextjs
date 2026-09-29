import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";
import { FileCheck2, FileText } from "lucide-react";

export default function ObligationsSection() {
  const cards = [
    {
      num: "01",
      title: "Regulatory Obligations",
      desc: "Connect governed responsibility outcomes to supported telecom regulatory obligations, calendars, ownership and evidence.",
      footer: "Jurisdiction- and capability-specific.",
    },
    {
      num: "02",
      title: "Compliance & Filing",
      desc: "Prepare supported workflows, approvals, filing artifacts and evidence without assuming every tenant or market is live.",
      footer: "Not an availability badge.",
    },
    {
      num: "03",
      title: "E-Invoicing & CTC",
      desc: "Relate supported invoice controls and continuous-transaction-control requirements to the correct entity and authority context.",
      footer: "Activation depends on governed capability.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Obligations + compliance
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-4xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Carry responsibility outcomes<br/> into supported compliance work.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            Connect accountable entity, jurisdiction and authority context to governed obligations and workflows. Each capability remains specific to the activated jurisdiction and operating mode.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.num}
              className="flex-1 min-h-72 p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4 shadow-sm transition-transform hover:-translate-y-1 duration-200"
            >
              <div className="self-stretch flex justify-between items-start">
                <span className="justify-start text-orange-600 text-xs font-bold font-['Roboto_Mono']">
                  {card.num}
                </span>
                <FileCheck2 className="w-5 h-5 text-orange-600" strokeWidth={1.8} />
              </div>

              <h3 className="self-stretch justify-start text-zinc-900 text-2xl font-bold font-['Inter']">
                {card.title}
              </h3>

              <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6 flex-1">
                {card.desc}
              </p>

              <div className="self-stretch pt-4 border-t border-zinc-200 flex items-center gap-2.5 mt-auto">
                <div className="size-1.5 bg-orange-600 rounded-full shrink-0" />
                <span className="flex-1 justify-start text-zinc-900 text-xs font-bold font-['Inter']">
                  {card.footer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
