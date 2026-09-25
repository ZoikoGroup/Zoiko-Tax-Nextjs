"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ReconciliationSection() {
  const cards = [
    {
      title: "MATCHED POSITIONS",
      number: "240,119",
      color: "text-teal-800",
      desc: "Transactions generating identical computational results to cent level.",
    },
    {
      title: "ALLOWED VARIANCE",
      number: "1,204",
      color: "text-yellow-700",
      desc: "Minor rounding differences classified within safe parameter margins.",
    },
    {
      title: "UNRESOLVED POSITION GAPS",
      number: "14",
      color: "text-red-600",
      desc: "Discrepancies marked for human intervention and rule adjustment.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Variance Engine
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Legacy Baseline Comparison Reconciliation
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            A detailed baseline analysis comparing historical transaction execution with parallel execution output from ZoikoTax.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4 shadow-sm"
            >
              <div className="justify-start text-stone-500 text-sm font-bold font-['Inter']">
                {card.title}
              </div>
              <div className={`justify-start text-4xl font-bold font-['Inter'] ${card.color}`}>
                {card.number}
              </div>
              <p className="self-stretch justify-start text-neutral-600 text-sm font-normal font-['Inter'] leading-5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
