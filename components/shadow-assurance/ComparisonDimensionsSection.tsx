"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ComparisonDimensionsSection() {
  const dimensions = [
    {
      title: "Input transaction facts",
      desc: "Payload attributes map identically across pipelines.",
      badge: "Exact Match",
      badgeColor: "outline-teal-800 text-teal-800 bg-teal-50",
    },
    {
      title: "Service Classification",
      desc: "Legacy and native telecom codes represent same tax rules.",
      badge: "Semantically Equivalent",
      badgeColor: "outline-blue-800 text-blue-800 bg-blue-50",
    },
    {
      title: "Authority Jurisdiction",
      desc: "Physical and virtual authority routing aligns perfectly.",
      badge: "Exact Match",
      badgeColor: "outline-teal-800 text-teal-800 bg-teal-50",
    },
    {
      title: "Tax & Fees Calculation",
      desc: "Rounding differences within allowed range of < $0.01.",
      badge: "Within Tolerance",
      badgeColor: "outline-teal-800 text-teal-800 bg-teal-50",
    },
    {
      title: "Non-Tax Fiscal Obligations",
      desc: "Incumbent missed local service surcharge requirements.",
      badge: "Material Difference",
      badgeColor: "outline-orange-600 text-orange-600 bg-orange-50",
    },
    {
      title: "Compliance & Reconciliation",
      desc: "Requires custom discovery for missing historical ledger facts.",
      badge: "Not Comparable",
      badgeColor: "outline-yellow-700 text-yellow-700 bg-yellow-50",
    },
  ];

  return (
    <section className="w-full relative bg-[#FAF3FF] flex flex-col justify-start items-start overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            COMPARISON DIMENSIONS
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
            Multi-Tier Discrepancy Breakdown
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Observe how calculations reconcile across multiple transaction axes.
          </p>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-3">
          {dimensions.map((dim, idx) => (
            <div
              key={idx}
              className="self-stretch p-5 bg-neutral-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-2xs"
            >
              <div className="w-full md:w-72 justify-start text-zinc-900 text-base font-bold font-['Inter']">
                {dim.title}
              </div>
              <div className="flex-1 justify-start text-stone-500 text-sm font-normal font-['Inter']">
                {dim.desc}
              </div>
              <div
                className={`px-3 py-1 rounded-[999px] outline outline-1 outline-offset-[-1px] flex justify-start items-start shrink-0 ${dim.badgeColor}`}
              >
                <span className="text-xs font-semibold font-['Inter'] uppercase">
                  {dim.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
