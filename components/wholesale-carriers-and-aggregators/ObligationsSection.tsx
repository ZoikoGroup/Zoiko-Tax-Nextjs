"use client";

import React from "react";
import { ShieldCheck, FileSpreadsheet, Receipt, Scale, ClipboardCheck, FileOutput } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ObligationsSection() {
  const cards = [
    {
      num: "01",
      title: "Regulatory Obligations",
      desc: "Connect classified service and regulatory-revenue facts to supported jurisdiction- and capability-specific obligation logic. The card describes an outcome area, not a production-availability badge.",
      icon: Scale,
    },
    {
      num: "02",
      title: "Compliance & Filing",
      desc: "Prepare governed workflows, validations, approvals and supported filing outputs. Availability and operating responsibility remain explicit for each jurisdiction and capability.",
      icon: ClipboardCheck,
    },
    {
      num: "03",
      title: "E-Invoicing & CTC",
      desc: "Coordinate supported invoice controls and continuous transaction reporting through governed packs. Network access and production scope are capability- and jurisdiction-specific.",
      icon: FileOutput,
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-9">
        <div className="w-full max-w-[1080px] flex flex-col justify-start items-start gap-3.5">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Obligations + compliance
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[47.52px]">
            Carry supported responsibility outcomes into downstream work.
          </h2>
          <p className="self-stretch justify-start text-zinc-600 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Concise control surfaces for obligation management—always bounded by activated jurisdiction and capability.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="min-h-56 p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-between items-start gap-3.5 shadow-sm"
              >
                <div className="self-stretch flex justify-between items-center">
                  <span className="justify-start text-orange-600 text-xs font-semibold font-['Roboto_Mono']">
                    {card.num}
                  </span>
                  <div className="size-5 flex items-center justify-center text-violet-950">
                    <Icon className="size-4" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <h3 className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">
                    {card.title}
                  </h3>
                  <p className="self-stretch justify-start text-zinc-600 text-sm font-normal font-['Inter'] leading-5">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
