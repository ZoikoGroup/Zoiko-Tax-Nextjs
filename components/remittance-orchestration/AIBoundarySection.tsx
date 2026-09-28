"use client";

import React from "react";
import Image from "next/image";

export default function AIBoundarySection() {
  const assists = [
    "Flag anomalous liabilities and potential variance errors before preparers build packets.",
    "Automatically suggest localized regulatory tax code categorizations for review.",
    "Parse external bank confirmation files and summarize reconciliation mismatches.",
  ];

  const cannotDo = [
    "Never auto-approve or sign off on remittance instructions under any scope.",
    "Never bypass system validation checklist overrides or credentials gates.",
    "Never autonomously direct payment executions outside of human verification loops.",
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-16 sm:py-20 relative bg-indigo-950 flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/remittance-orchestration/AI Boundary Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Sora']">
            GOVERNED COGNITION BOUNDARY
          </div>
          <h2 className="self-stretch justify-start text-neutral-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
            AI assists. Approved rules decide. Evidence proves.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-medium  leading-8">
            To maintain strict corporate governance, autonomous models cannot execute payments or overwrite compliance configurations.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div className="p-7 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-4">
            <h3 className="justify-start text-orange-300 text-xl font-semibold font-['Sora'] leading-6">
              How AI Assists Your Teams
            </h3>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {assists.map((item, idx) => (
                <div
                  key={idx}
                  className="self-stretch justify-start text-zinc-300 text-sm font-normal leading-relaxed"
                >
                  • {item}
                </div>
              ))}
            </div>
          </div>

          <div className="p-7 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-4">
            <h3 className="justify-start text-neutral-50 text-xl font-semibold font-['Sora'] leading-6">
              What AI Cannot &amp; Will Not Do
            </h3>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {cannotDo.map((item, idx) => (
                <div
                  key={idx}
                  className="self-stretch justify-start text-zinc-300 text-sm font-normal leading-relaxed"
                >
                  • {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
