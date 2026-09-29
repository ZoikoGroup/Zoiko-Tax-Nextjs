"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ObligationsSection() {
  const cards = [
    {
      num: "01",
      title: "Regulatory Obligations",
      desc: "Translate governed service and regulatory-revenue context into supported obligation tasks, ownership and evidence.",
      note: "Support is jurisdiction- and capability-specific.",
    },
    {
      num: "02",
      title: "Compliance & Filing",
      desc: "Prepare controlled data, approvals and filing-ready work products with traceable versions and exceptions.",
      note: "Filing support is jurisdiction- and capability-specific.",
    },
    {
      num: "03",
      title: "E-Invoicing & CTC",
      desc: "Coordinate supported invoice and continuous-transaction-control requirements with explicit state and evidence.",
      note: "Network and mandate support is jurisdiction- and capability-specific.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Obligations and compliance
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-4xl font-bold font-['Inter'] leading-tight">
            Carry supported outcomes into governed compliance work.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-8">
            Connect determination to obligation calendars, review, filing preparation and transaction controls without obscuring capability boundaries.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {cards.map((c) => (
            <div
              key={c.num}
              className="p-6 bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3.5 min-h-48"
            >
              <div className="justify-start text-orange-600 text-xs font-semibold font-['Roboto_Mono']">
                {c.num}
              </div>
              <h3 className="self-stretch justify-start text-zinc-900 text-2xl font-bold font-['Inter'] leading-7">
                {c.title}
              </h3>
              <p className="flex-1 self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">
                {c.desc}
              </p>
              <div className="self-stretch justify-start text-orange-600 text-xs font-semibold font-['Inter'] leading-5 pt-2">
                {c.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
