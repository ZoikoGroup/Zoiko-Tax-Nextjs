"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function JurisdictionEntitySection() {
  const rows = [
    {
      num: "1",
      title: "Location facts",
      desc: "Supplied service, customer, usage, network or transaction facts.",
    },
    {
      num: "2",
      title: "Situs / jurisdiction",
      desc: "The governed conclusion about where a supported rule applies.",
    },
    {
      num: "3",
      title: "Authority",
      desc: "The relevant taxing or regulatory body represented in approved content.",
    },
    {
      num: "4",
      title: "Legal entity",
      desc: "The entity whose facts, obligations or records are in scope.",
    },
    {
      num: "5",
      title: "Commercial relationship",
      desc: "The governed role between provider, customer, reseller or partner.",
    },
    {
      num: "6",
      title: "Responsibility",
      desc: "Who must review, act, file, remit or retain evidence in the supported workflow.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-9">
        {/* Section Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Jurisdiction, authority, entity and responsibility
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50.16px]">
            Six distinct conclusions. Never one generic compliance status.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            ZoikoTax preserves the facts and governed reasoning for each conclusion so teams can see where uncertainty or responsibility actually sits.
          </p>
        </div>

        {/* 6 Conclusions List Card */}
        <div className="self-stretch p-6 sm:p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start shadow-sm">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className={`self-stretch py-4 flex flex-col sm:flex-row justify-start sm:items-center gap-3 sm:gap-4 ${
                idx < rows.length - 1 ? "border-b border-zinc-200" : ""
              }`}
            >
              <div className="size-8 bg-violet-100 rounded-full flex justify-center items-center shrink-0">
                <span className="justify-start text-violet-950 text-xs font-bold font-['Inter']">
                  {row.num}
                </span>
              </div>
              <div className="w-full sm:w-64 justify-start text-zinc-900 text-base font-bold font-['Inter'] shrink-0">
                {row.title}
              </div>
              <div className="flex-1 justify-start text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-6">
                {row.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
