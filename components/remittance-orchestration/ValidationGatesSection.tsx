"use client";

import React from "react";
import Image from "next/image";

export default function ValidationGatesSection() {
  const gates = [
    {
      num: "01",
      title: "Scope / Coverage",
      desc: "Verify the instruction is supported by the active market pack and regulatory rules.",
    },
    {
      num: "02",
      title: "Source Integrity",
      desc: "Confirm the amount and liability source match the approved filing return.",
    },
    {
      num: "03",
      title: "Payee Details",
      desc: "Validate destination addresses, bank references, and regulatory identifiers.",
    },
    {
      num: "04",
      title: "Segregation",
      desc: "Confirm the packet is ready for dual-signature review before approval is requested.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-16 sm:py-20 relative bg-indigo-950 flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/remittance-orchestration/Validation Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Sora']">
            VALIDATION &amp; READINESS GATES
          </div>
          <h2 className="self-stretch justify-start text-neutral-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
            Readiness is checked before approval is requested.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-medium  leading-8">
            Validation gates verify the instruction packet is complete, compliant, and ready for sign-off. This prevents incomplete or unsupported packets from entering the approval flow.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gates.map((g) => (
            <div
              key={g.num}
              className="p-6 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-3"
            >
              <div className="justify-start text-orange-300 text-xs font-bold">
                {g.num}
              </div>
              <div className="self-stretch justify-start text-neutral-50 text-xl font-semibold font-['Sora'] leading-6">
                {g.title}
              </div>
              <div className="self-stretch justify-start text-zinc-300 text-xs font-normal leading-relaxed">
                {g.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
