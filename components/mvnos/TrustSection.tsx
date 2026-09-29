"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function TrustSection() {
  const trustCards = [
    {
      num: "01",
      title: "Tenant / entity isolation",
      desc: "Separate governed context across tenants, entities, roles and responsibility domains.",
    },
    {
      num: "02",
      title: "Sensitive telecom / tax data",
      desc: "Control access to usage, billing, identity and fiscal information.",
    },
    {
      num: "03",
      title: "Residency",
      desc: "Make location and processing boundaries explicit for supported deployments.",
    },
    {
      num: "04",
      title: "Business continuity",
      desc: "Design recovery, dependency and operating procedures for consequential work.",
    },
    {
      num: "05",
      title: "Evidence integrity",
      desc: "Preserve provenance, versions, approvals, lineage and replay state.",
    },
    {
      num: "06",
      title: "AI governance",
      desc: "Keep assistance advisory; approved rules and controlled action retain authority.",
    },
    {
      num: "07",
      title: "Responsible disclosure",
      desc: "Provide a governed path to report and coordinate security findings.",
    },
    {
      num: "08",
      title: "Claims governance",
      desc: "Tie public capability claims to reviewed, current evidence and state.",
    },
  ];

  return (
    <section className="w-full relative bg-slate-900 flex flex-col justify-start items-center overflow-hidden">
      {/* Background Graphic & Gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/MVNO/Trust image.png"
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
            Security, continuity, evidence and claims discipline are designed into the operating model—not added as procurement decoration.
          </p>
        </div>

        {/* 8 Cards in 2 rows of 4 */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {trustCards.map((card) => (
            <div
              key={card.num}
              className="min-h-44 p-5 bg-slate-900/60 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-3 backdrop-blur-sm transition-transform hover:-translate-y-0.5 duration-150"
            >
              <div className="self-stretch flex justify-between items-center">
                <span className="justify-start text-orange-300 text-[10px] font-normal font-['Roboto_Mono']">
                  {card.num}
                </span>
                <ShieldCheck className="w-4 h-4 text-orange-300" strokeWidth={1.8} />
              </div>
              <h3 className="self-stretch justify-start text-white text-base font-bold font-['Inter']">
                {card.title}
              </h3>
              <p className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-4">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-start items-start gap-3 pt-2">
          <Link
            href="#trust-center"
            className="h-12 px-5 bg-white/10 hover:bg-white/20 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/30 flex justify-center items-center gap-2.5 transition-colors group"
          >
            <span className="justify-start text-white text-sm font-semibold font-['Inter']">
              Visit Trust Center
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="#evidence-replay"
            className="h-12 px-5 bg-white/10 hover:bg-white/20 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/30 flex justify-center items-center gap-2.5 transition-colors group"
          >
            <span className="justify-start text-white text-sm font-semibold font-['Inter']">
              Explore Evidence &amp; Replay
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
