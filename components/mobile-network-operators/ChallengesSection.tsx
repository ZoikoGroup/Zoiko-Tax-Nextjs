"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ChallengesSection() {
  const challenges = [
    {
      num: "01",
      title: "Portfolio complexity",
      desc: "Mobile, voice, messaging, broadband and bundles create overlapping service and regulatory-revenue classification questions.",
    },
    {
      num: "02",
      title: "Entity complexity",
      desc: "Legal-entity responsibility must stay explicit across operating companies, shared services and commercial roles.",
    },
    {
      num: "03",
      title: "Authority complexity",
      desc: "Tax and telecom authorities can attach different obligations to the same commercial activity.",
    },
    {
      num: "04",
      title: "Operational fragmentation",
      desc: "Billing, tax, filing, finance and evidence systems often distribute one fiscal outcome across separate teams.",
    },
    {
      num: "05",
      title: "Auditability",
      desc: "Facts, sources, versions, approvals and lineage must remain connected to the decision they support.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Telecom-native by design
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
            Carrier tax is more than high-volume calculation.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-8">
            The hard work is connecting commercial facts, responsibility, authority and evidence across the carrier estate.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-stretch">
          {challenges.map((item) => (
            <div
              key={item.num}
              className="p-6 bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3.5 min-h-48"
            >
              <div className="justify-start text-orange-600 text-xs font-semibold font-['Roboto_Mono']">
                {item.num}
              </div>
              <h3 className="self-stretch justify-start text-zinc-900 text-2xl font-bold font-['Inter'] leading-7">
                {item.title}
              </h3>
              <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
