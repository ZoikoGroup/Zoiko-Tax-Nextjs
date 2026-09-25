"use client";

import React from "react";
import Image from "next/image";

export default function AIBoundarySection() {
  const mayAssist = [
    "Summarizing tax rule discrepancies",
    "Explaining rounding variance logic",
    "Suggesting potential classification matches",
    "Anomalous run pattern alerts",
  ];

  const cannotAdjudicate = [
    "Override human cutover approvals",
    "Authoritatively decide final tax liability",
    "Bypass or alter trace evidence manifests",
    "Execute legally binding filings",
  ];

  return (
    <section className="w-full relative bg-slate-900 flex flex-col justify-start items-start overflow-hidden">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0  overflow-hidden">
        <Image
          src="/shadow-assurance/AI Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            RESPONSIBLE AI POLICY
          </div>
          <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
            Governed AI Boundary
          </h2>
          <p className="self-stretch justify-start text-white/70 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            AI advisory functions remain separate from authoritative computational tax decisions.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* AI MAY ASSIST */}
          <div className="p-8 bg-indigo-950/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-5 shadow-lg backdrop-blur-xs">
            <div className="justify-start text-white text-lg font-bold font-['Inter']">
              AI MAY ASSIST
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {mayAssist.map((item, idx) => (
                <div
                  key={idx}
                  className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-relaxed flex items-start gap-2"
                >
                  <span>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI CANNOT ADJUDICATE */}
          <div className="p-8 bg-indigo-950/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-5 shadow-lg backdrop-blur-xs">
            <div className="justify-start text-white text-lg font-bold font-['Inter']">
              AI CANNOT ADJUDICATE
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {cannotAdjudicate.map((item, idx) => (
                <div
                  key={idx}
                  className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-relaxed flex items-start gap-2"
                >
                  <span>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
