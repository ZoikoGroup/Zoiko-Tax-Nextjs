"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function DecisionPathsSection() {
  const paths = [
    {
      title: "Retain Path",
      dotColor: "bg-blue-800",
      desc: "Keep operational fiscal computations committed to legacy systems safely while using ZoikoTax exclusively for analytics.",
    },
    {
      title: "Federate Path",
      dotColor: "bg-indigo-950",
      desc: "Direct specialized country rules through local tax engines while relying on ZoikoTax for primary obligations and evidence logs.",
    },
    {
      title: "Plan Cutover",
      dotColor: "bg-teal-800",
      desc: "Establish pre-approved dates, freeze transaction systems, and execute contractually-signed transition checklists safely.",
    },
    {
      title: "Defer & Investigate",
      dotColor: "bg-yellow-700",
      desc: "Pause transition execution when unexpected discrepancies emerge during parallel Shadow runs.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Parallel Paths
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Four Governed Decision Paths
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Understand your options based on active evidence packages, integration tolerances, and active program goals.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {paths.map((path) => (
            <div
              key={path.title}
              className="p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4 shadow-sm"
            >
              <div className={`size-3 ${path.dotColor} rounded-[999px] shrink-0`} />
              <h3 className="justify-start text-zinc-900 text-xl font-bold font-['Inter']">
                {path.title}
              </h3>
              <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
                {path.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
