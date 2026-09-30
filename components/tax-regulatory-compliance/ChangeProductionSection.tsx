"use client";

import React from "react";
import Image from "next/image";

export default function ChangeProductionSection() {
  const steps = [
    {
      num: "01",
      title: "Detect / research",
      desc: "Identify relevant change signals and candidate impact.",
    },
    {
      num: "02",
      title: "Verify source",
      desc: "Confirm provenance, authority and source integrity.",
    },
    {
      num: "03",
      title: "Interpret / classify",
      desc: "Propose policy meaning and affected capabilities.",
    },
    {
      num: "04",
      title: "Version / effective-date",
      desc: "Create controlled versions with temporal scope.",
    },
    {
      num: "05",
      title: "Test / approve / release",
      desc: "Validate and authorize production content.",
    },
    {
      num: "06",
      title: "Replay / explain",
      desc: "Reconstruct historical outcomes without rewriting them.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/tax-regulatory-compliance/Regulatory change band.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-8">
        {/* Top Header Row */}
        <div className="self-stretch flex flex-col lg:flex-row justify-between lg:items-end gap-4">
          <div className="w-full lg:max-w-[780px] flex flex-col justify-start items-start gap-4">
            <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
              From change to governed production
            </div>
            <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50.16px]">
              Controlled content moves through a visible release path.
            </h2>
          </div>

          <div className="w-full lg:w-80 text-left lg:text-right justify-start text-orange-300 text-base sm:text-lg font-bold font-['Inter'] leading-relaxed sm:leading-6">
            AI assists research and analysis. It is not autonomous legal authority.
          </div>
        </div>

        {/* 6 Step Cards */}
        <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="min-h-40 p-4 bg-white/5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-2 transition-colors hover:bg-white/10"
            >
              <div className="justify-start text-orange-300 text-xs font-bold font-['Inter']">
                {st.num}
              </div>
              <div className="self-stretch justify-start text-white text-base font-bold font-['Inter'] leading-5">
                {st.title}
              </div>
              <div className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-4">
                {st.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
