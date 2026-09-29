import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";
import { Shield } from "lucide-react";

export default function ResponsibilitySection() {
  const contextCarriers = [
    { title: "MVNE / MVNA platform", isDark: true, dotColor: "bg-orange-300" },
    { title: "Downstream operator", isDark: false, dotColor: "bg-orange-600" },
    { title: "Brand", isDark: false, dotColor: "bg-orange-600" },
    { title: "Tenant", isDark: false, dotColor: "bg-orange-600" },
    { title: "Enabler context", isDark: false, dotColor: "bg-orange-600" },
  ];

  const fieldCards = [
    { num: "FIELD 01", title: "Legal entity" },
    { num: "FIELD 02", title: "Operating / commercial role" },
    { num: "FIELD 03", title: "Jurisdiction" },
    { num: "FIELD 04", title: "Authority" },
    { num: "FIELD 05", title: "Responsible party" },
    { num: "FIELD 06", title: "Evidence" },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Responsibility architecture
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Keep downstream tenant, legal-entity and responsibility context intact.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            A conceptual contract links the MVNE/MVNA platform to downstream operator, brand, tenant and enabler context. Role names alone do not establish legal responsibility; governed facts, relationships, jurisdiction and authority determine the outcome.
          </p>
        </div>

        {/* Big White Card Container */}
        <div className="self-stretch min-h-96 p-6 sm:p-8 bg-white rounded-3xl shadow-[0px_4px_14px_0px_rgba(0,0,0,0.09)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col lg:flex-row justify-start items-start gap-8">
          {/* Left Column: Context carriers */}
          <div className="w-full lg:w-72 shrink-0 flex flex-col justify-start items-start gap-3">
            <span className="justify-start text-orange-600 text-xs font-bold font-['Roboto_Mono'] uppercase tracking-wider">
              Context carriers
            </span>

            {contextCarriers.map((carrier) => (
              <div
                key={carrier.title}
                className={`self-stretch p-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex items-center gap-3 transition-colors ${
                  carrier.isDark
                    ? "bg-violet-950 text-white"
                    : "bg-pink-50 text-zinc-900"
                }`}
              >
                <div className={`size-2.5 ${carrier.dotColor} rounded-full shrink-0`} />
                <span
                  className={`flex-1 justify-start text-sm font-bold font-['Inter'] ${
                    carrier.isDark ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {carrier.title}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Conceptual field contract */}
          <div className="flex-1 w-full flex flex-col justify-start items-start gap-4">
            {/* Header Box */}
            <div className="self-stretch p-4 bg-slate-900 rounded-2xl flex justify-between items-center shadow-sm">
              <div className="flex flex-col justify-start items-start gap-1">
                <span className="justify-start text-orange-300 text-[10px] font-bold font-['Roboto_Mono'] tracking-wider">
                  CONCEPTUAL FIELD CONTRACT
                </span>
                <span className="justify-start text-white text-lg sm:text-xl font-bold font-['Inter']">
                  Governed attribution resolver
                </span>
              </div>
              <Shield className="w-6 h-6 text-orange-300 shrink-0" strokeWidth={1.8} />
            </div>

            {/* 6 Field Cards */}
            <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {fieldCards.map((field) => (
                <div
                  key={field.num}
                  className="min-h-24 p-4 bg-pink-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-2 transition-transform hover:-translate-y-0.5 duration-150"
                >
                  <span className="justify-start text-orange-600 text-[10px] font-bold font-['Roboto_Mono']">
                    {field.num}
                  </span>
                  <span className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">
                    {field.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="self-stretch justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-5 pt-1">
              Illustrative, field-level conceptual contract only. It does not represent customer architecture, contractual allocation or a legal conclusion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
