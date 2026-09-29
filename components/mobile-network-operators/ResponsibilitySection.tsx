"use client";

import React from "react";
import Image from "next/image";
import { Shield } from "lucide-react";

export default function ResponsibilitySection() {
  const cards = [
    {
      num: "01",
      title: "Legal entity",
      desc: "Which company carries the fiscal position",
    },
    {
      num: "02",
      title: "Operating role",
      desc: "Operator, seller, intermediary or shared service role",
    },
    {
      num: "03",
      title: "Jurisdiction",
      desc: "Which governed geographic context applies",
    },
    {
      num: "04",
      title: "Authority",
      desc: "Which tax or telecom body defines the obligation",
    },
    {
      num: "05",
      title: "Responsible party",
      desc: "Who owns review, approval and execution",
    },
    {
      num: "06",
      title: "Evidence",
      desc: "What facts and lineage prove that responsibility",
      highlight: true,
    },
  ];

  return (
    <section className="w-full relative  flex flex-col justify-start items-center overflow-hidden">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0  overflow-hidden">
        <Image
          src="/mobile-network-operators/Entity.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Column */}
        <div className="w-full lg:w-96 flex flex-col justify-start items-start gap-5">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
              Responsibility architecture
            </div>
            <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
              Make entity, authority and responsibility explicit.
            </h2>
            <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-normal font-['Inter'] leading-8">
              A conceptual operating model connects who acted, under which role, in which jurisdiction, for which authority—and who owns the next governed action.
            </p>
          </div>
          <div className="self-stretch justify-start text-orange-300 text-xs font-normal font-['Inter'] leading-5">
            Conceptual architecture only. No real customer entity names are shown.
          </div>
        </div>

        {/* Right Column: 6 Cards Grid */}
        <div className="flex-1 w-full p-6 sm:p-7 bg-white/5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-3.5 backdrop-blur-xs">
          <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3.5 items-stretch">
            {cards.map((card) => (
              <div
                key={card.num}
                className={`p-5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-between items-start gap-2.5 min-h-32 transition-transform hover:-translate-y-0.5 ${
                  card.highlight ? "bg-orange-600" : "bg-purple-950/90"
                }`}
              >
                <div className="self-stretch flex justify-between items-start">
                  <span
                    className={`text-xs font-normal font-['Roboto_Mono'] ${
                      card.highlight ? "text-white" : "text-orange-300"
                    }`}
                  >
                    {card.num}
                  </span>
                  <Shield className="w-4 h-4 text-white/80" />
                </div>
                <div className="justify-start text-white text-lg font-bold font-['Inter']">
                  {card.title}
                </div>
                <div
                  className={`self-stretch text-xs font-normal font-['Inter'] leading-5 ${
                    card.highlight ? "text-white" : "text-zinc-300"
                  }`}
                >
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
