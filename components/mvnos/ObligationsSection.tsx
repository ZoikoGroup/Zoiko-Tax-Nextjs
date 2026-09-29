import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";
import { FileText, AlertCircle, FileCheck2 } from "lucide-react";

export default function ObligationsSection() {
  const cards = [
    {
      num: "01",
      title: "Regulatory Obligations",
      description:
        "Connect governed classification, revenue bases, jurisdiction, authority and responsibility to supported obligation workflows.",
    },
    {
      num: "02",
      title: "Compliance & Filing",
      description:
        "Prepare reviewable returns, workpapers, approvals and submission-ready outputs where the activated capability supports them.",
    },
    {
      num: "03",
      title: "E-Invoicing & CTC",
      description:
        "Orchestrate supported document, clearance and reporting requirements through governed capability-specific workflows.",
    },
  ];

  return (
    <section className="w-full relative bg-[#FAF3FF] flex flex-col justify-start items-center overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Obligations + compliance
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Turn governed responsibility into controlled downstream work.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            Keep determination, obligations and compliance connected without treating a market-relevant capability as proof that it is live.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.num}
              className="flex-1 min-h-72 p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-4 shadow-sm transition-transform hover:-translate-y-1 duration-200"
            >
              <div className="self-stretch flex justify-between items-center">
                <span className="justify-start text-orange-600 text-xs font-normal font-['Roboto_Mono']">
                  {card.num}
                </span>
                <FileCheck2 className="w-5 h-5 text-orange-600" strokeWidth={1.75} />
              </div>

              <h3 className="self-stretch justify-start text-zinc-900 text-2xl font-bold font-['Inter']">
                {card.title}
              </h3>

              <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6 flex-1">
                {card.description}
              </p>

              <div className="self-stretch p-3 bg-purple-100 rounded-[10px] flex items-start gap-2 mt-auto">
                <AlertCircle className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" strokeWidth={2} />
                <span className="flex-1 justify-start text-zinc-900 text-xs font-normal font-['Inter'] leading-4">
                  Support is jurisdiction- and capability-specific. This card is not an availability badge.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
