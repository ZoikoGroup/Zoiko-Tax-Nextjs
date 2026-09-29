"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TrustSection() {
  const cards = [
    {
      num: "01",
      title: "Tenant / entity isolation",
      desc: "Keep downstream data, decisions and evidence associated with the correct governed tenant and legal entity.",
    },
    {
      num: "02",
      title: "Sensitive telecom / tax data",
      desc: "Apply disciplined handling to consequential operational, billing and fiscal information.",
    },
    {
      num: "03",
      title: "Residency",
      desc: "Evaluate supported deployment and data-handling requirements by jurisdiction and capability.",
    },
    {
      num: "04",
      title: "Business continuity",
      desc: "Design recovery, change and operational controls around consequential fiscal workloads.",
    },
    {
      num: "05",
      title: "Evidence integrity",
      desc: "Retain attributable inputs, versions, sources, approvals, state and replay manifests.",
    },
    {
      num: "06",
      title: "AI governance",
      desc: "AI assists research and review; approved rules and governed decisions remain authoritative.",
    },
    {
      num: "07",
      title: "Responsible disclosure",
      desc: "Provide a defined path for reporting potential security issues and concerns.",
    },
    {
      num: "08",
      title: "Claims governance",
      desc: "Keep availability, capability and assurance statements scoped, supportable and reviewable.",
    },
  ];

  return (
    <section className="w-full relative bg-slate-900 flex flex-col justify-start items-center overflow-hidden">
      {/* Background Graphic & Dark Gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/MVNE&MVNA/Proof image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center mix-blend-screen"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Trust + procurement
          </div>
          <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Built for consequential fiscal work.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            A disciplined control foundation for sensitive multi-tenant telecom fiscal operations—evaluated by capability, operating mode and jurisdiction rather than implied by a badge.
          </p>
        </div>

        {/* 8 Cards in 2 rows of 4 */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map((card) => (
            <div
              key={card.num}
              className="flex-1 min-h-44 p-5 bg-indigo-950/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-purple-900 flex flex-col justify-start items-start gap-3 backdrop-blur-sm transition-transform hover:-translate-y-0.5 duration-150"
            >
              <span className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono']">
                {card.num}
              </span>
              <h3 className="self-stretch justify-start text-white text-base font-bold font-['Inter']">
                {card.title}
              </h3>
              <p className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-start items-start gap-3 pt-2">
          <Link
            href="#trust-center"
            className="h-12 px-5 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center shadow-sm transition-colors"
          >
            <span className="justify-start text-white text-sm font-semibold font-['Inter']">
              Visit Trust Center
            </span>
          </Link>

          <Link
            href="#evidence-replay"
            className="h-12 px-5 bg-transparent hover:bg-white/10 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/40 flex justify-center items-center shadow-sm transition-colors"
          >
            <span className="justify-start text-white text-sm font-semibold font-['Inter']">
              Explore Evidence &amp; Replay
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
