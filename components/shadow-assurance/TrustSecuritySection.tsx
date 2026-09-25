"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function TrustSecuritySection() {
  const trustItems = [
    {
      title: "Tenant Isolation",
      desc: "Tenant boundaries and permissions are designed to isolate scoped comparison data.",
    },
    {
      title: "Attributable Audit History",
      desc: "Material comparison actions retain actor, time, state, and evidence references where governed.",
    },
    {
      title: "Strict Least Privilege",
      desc: "Access remains permission-scoped; consequence-bearing decisions require authorized roles.",
    },
    {
      title: "Data Minimization",
      desc: "Only approved data needed for the comparison scope should be ingested and exposed.",
    },
  ];

  return (
    <section className="w-full relative bg-[#FAF3FF] flex flex-col justify-start items-start overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            TRUST &amp; SECURITY
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
            Security, privacy &amp; non-impact controls
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Strict tenant isolation, data minimization, and attributable evidence history.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-neutral-50/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3 shadow-xs min-h-40"
            >
              <div className="justify-start text-zinc-900 text-base font-bold font-['Inter']">
                {item.title}
              </div>
              <div className="self-stretch justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-5">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
