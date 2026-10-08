import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ComplexitySection() {
  const cards = [
    {
      num: "01",
      title: "Platform / tenant role",
      desc: "MVNE, MVNA, platform, tenant and commercial-role labels provide context; they do not by themselves decide tax, regulatory, filing or legal responsibility.",
    },
    {
      num: "02",
      title: "Service classification",
      desc: "Connectivity, enablement, bundles, fees and regulatory-revenue categories can require different governed treatment.",
    },
    {
      num: "03",
      title: "Downstream operator / tenant context",
      desc: "Operator, brand and tenant relationships affect which facts are available and which entity and agreement context must travel with them.",
    },
    {
      num: "04",
      title: "Downstream obligations",
      desc: "Duties follow governed jurisdiction, authority and responsibility outcomes—not a platform label or assumed commercial role.",
    },
    {
      num: "05",
      title: "Auditability",
      desc: "Historical outcomes need tenant, entity and relationship context together with sources, versions, approvals and lineage.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Why the work is complex
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            MVNE/MVNA fiscal responsibility is more than a platform or tenant label.
          </h2>
        </div>

        {/* 5 Cards Row */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {cards.map((card) => (
            <div
              key={card.num}
              className="flex-1 min-h-64 p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3.5 shadow-sm transition-transform hover:-translate-y-1 duration-200"
            >
              <div className="self-stretch flex justify-between items-center">
                <span className="justify-start text-orange-600 text-xs font-semibold font-['Roboto_Mono']">
                  {card.num}
                </span>
                <div className="size-2 bg-purple-100 rounded-full" />
              </div>
              <h3 className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">
                {card.title}
              </h3>
              <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
