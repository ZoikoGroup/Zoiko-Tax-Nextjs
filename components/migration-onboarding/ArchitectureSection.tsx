"use client";

import React from "react";
import { ReceiptText, Database, Calculator, Globe, Layers } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ArchitectureSection() {
  const systems = [
    { title: "Billing & BSS", icon: ReceiptText },
    { title: "ERP & General Ledger", icon: Database },
    { title: "Existing Tax Engines", icon: Calculator },
    { title: "E-Invoicing Networks", icon: Globe },
    { title: "Data & Batch Ingestion", icon: Layers },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            System Architecture
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Fits the Architecture You Operate
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Deploy natively, run in parallel federated loops, or utilize Shadow Assurance pathways without disrupting legacy billing lanes.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 items-stretch">
          {systems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3 shadow-sm"
              >
                <div className="size-8 bg-fuchsia-100 rounded-[10px] flex justify-center items-center shrink-0">
                  <img src="/migration-onboarding/Frame.png" className="size-4 " />
                </div>
                <div className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
