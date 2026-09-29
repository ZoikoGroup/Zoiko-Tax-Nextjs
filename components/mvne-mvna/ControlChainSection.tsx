import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function ControlChainSection() {
  const contextPills = [
    { label: "MVNE / MVNA PLATFORM", bg: "bg-orange-50", text: "text-orange-600" },
    { label: "DOWNSTREAM OPERATOR", bg: "bg-purple-100", text: "text-violet-950" },
    { label: "BRAND / TENANT", bg: "bg-purple-100", text: "text-violet-950" },
    { label: "LEGAL-ENTITY BOUNDARY", bg: "bg-orange-50", text: "text-orange-600" },
    { label: "ATTRIBUTION + ISOLATION", bg: "bg-slate-200", text: "text-teal-700" },
  ];

  const topRowSteps = [
    { num: "01", title: "Product / offer" },
    { num: "02", title: "Transaction facts" },
    { num: "03", title: "Classification" },
    { num: "04", title: "Jurisdiction / authority" },
    { num: "05", title: "Tenant / entity attribution" },
  ];

  const bottomRowSteps = [
    { num: "06", title: "Determination" },
    { num: "07", title: "Obligations / compliance" },
    { num: "08", title: "Reconciliation" },
    { num: "09", title: "Evidence / replay" },
  ];

  return (
    <section className="w-full relative flex flex-col justify-start items-center overflow-hidden">
      {/* Background Operations Center Graphic */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/MVNE&MVNA/MVNA fiscal-control chain.png"
          alt="MVNA Fiscal Control Chain"
          fill
          sizes="100vw"
          className="object-cover object-center  mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90  to-slate-950/0" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Fiscal-control chain
          </div>
          <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Connect the fiscal decision chain across the MVNE/MVNA operating estate.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            Maintain platform, downstream operator, brand and tenant context while keeping legal entities, attribution decisions and isolation boundaries explicit.
          </p>
        </div>

        {/* Badges Row */}
        <div className="self-stretch flex flex-wrap justify-start items-start gap-2.5">
          {contextPills.map((pill) => (
            <div
              key={pill.label}
              className={`px-3 py-2 ${pill.bg} rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-start shadow-sm`}
            >
              <span className={`justify-start ${pill.text} text-xs font-bold font-['Roboto_Mono']`}>
                {pill.label}
              </span>
            </div>
          ))}
        </div>

        {/* 10 Steps Grid Container */}
        <div className="self-stretch p-6 sm:p-7 bg-indigo-950/80 backdrop-blur-md rounded-3xl outline outline-1 outline-offset-[-1px] outline-purple-900 flex flex-col justify-start items-start gap-3 shadow-2xl">
          {/* Top Row: Steps 01 to 05 */}
          <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {topRowSteps.map((step) => (
              <div
                key={step.num}
                className="flex-1 min-h-32 p-4 bg-purple-900/90 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-purple-800 flex flex-col justify-between items-start gap-2.5 transition-transform hover:-translate-y-0.5 duration-150"
              >
                <span className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono']">
                  {step.num}
                </span>
                <span className="self-stretch justify-start text-white text-base font-bold font-['Inter'] leading-5">
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Row: Steps 06 to 09 + Evidence Throughline Card */}
          <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {bottomRowSteps.map((step) => (
              <div
                key={step.num}
                className="flex-1 min-h-32 p-4 bg-purple-900/90 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-purple-800 flex flex-col justify-between items-start gap-2.5 transition-transform hover:-translate-y-0.5 duration-150"
              >
                <span className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono']">
                  {step.num}
                </span>
                <span className="self-stretch justify-start text-white text-base font-bold font-['Inter'] leading-5">
                  {step.title}
                </span>
              </div>
            ))}

            {/* Special Highlighted Card: Evidence throughline */}
            <div className="flex-1 min-h-32 p-4 bg-orange-600 rounded-[10px] flex flex-col justify-start items-start gap-2 shadow-lg transition-transform hover:-translate-y-0.5 duration-150">
              <ShieldCheck className="w-5 h-5 text-white shrink-0" strokeWidth={2.2} />
              <span className="self-stretch justify-start text-white text-base font-bold font-['Inter']">
                Evidence throughline
              </span>
              <p className="self-stretch justify-start text-white/90 text-xs font-normal font-['Inter'] leading-4">
                Sources, versions, approvals and tenant/entity context across every stage.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="self-stretch text-center justify-start text-white text-base sm:text-lg font-bold font-['Inter'] pt-1">
          AI assists. Approved rules decide. Evidence proves.
        </div>
      </div>
    </section>
  );
}
