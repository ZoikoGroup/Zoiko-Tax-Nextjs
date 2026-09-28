"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader, Reveal } from "./shared";

const operatingModels = [
  {
    title: "Native Full-Stack",
    authorityLabel: "ZoikoTax-authoritative where supported",
    buyerValue: "Unified governed lifecycle.",
    description: "Run supported determination and downstream workflows natively where production-ready.",
  },
  {
    title: "Federated Coexistence",
    authorityLabel: "Incumbent authority retained",
    buyerValue: "Modernize selectively.",
    description: "Keep an incumbent engine while ZoikoTax runs supported downstream capabilities.",
  },
  {
    title: "Shadow Assurance",
    authorityLabel: "Non-impact comparison",
    buyerValue: "Evaluate differences before cutover.",
    description: "Compare copied or source outcomes without changing production billing or filing.",
  },
  {
    title: "OEM / Embedded",
    authorityLabel: "Partner / BSS integration",
    buyerValue: "Embed supported fiscal capability.",
    description:
      "Surface approved capabilities through partner, BSS, MVNE, or platform experiences with tenant and entity boundaries.",
  },
  {
    title: "Managed Compliance",
    authorityLabel: "Managed operating model",
    buyerValue: "Combine platform and approved services.",
    description: "Use approved operational compliance services where offered and within scope.",
  },
];

export default function OperatingModelsSection() {
  return (
    <section
      id="operating-models"
      className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/platform-overview/Platform and proof.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="DEPLOYMENT FLEXIBILITY"
            title="Architected to fit. Deployed as needed."
            description="Choose the operating model that matches your risk tolerance, technical legacy, and compliance priorities."
            eyebrowClassName="text-xs sm:text-sm font-bold"
            titleClassName="text-3xl sm:text-4xl lg:text-4xl font-bold"
            descriptionClassName="text-base sm:text-lg leading-relaxed"
          />
        </Reveal>

        {/* 5 Operating Model Cards Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {operatingModels.map((model, index) => (
            <Reveal key={model.title} delay={index * 0.05}>
              <div className="flex h-full min-h-[290px] flex-col justify-between rounded-2xl border border-[#D8CEDD] bg-white p-6 shadow-[0_2px_4px_0_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-[#D65A2C]/40 hover:shadow-md">
                <div className="flex flex-col gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-[#18141B]">
                    {model.title}
                  </h3>

                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#D65A2C]">
                      COEXISTENCE & AUTHORITY
                    </span>
                    <span className="text-xs text-[#18141B] font-medium">
                      {model.authorityLabel}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#D65A2C]">
                      PRIMARY BUYER VALUE
                    </span>
                    <span className="text-xs text-[#18141B] font-medium">
                      {model.buyerValue}
                    </span>
                  </div>
                </div>

                <div className="mt-4 border-t border-[#D8CEDD]/80 pt-3">
                  <p className="text-xs leading-relaxed text-[#535055]">
                    {model.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Disclaimer footnote */}
        <Reveal delay={0.3}>
          <p className="mt-6 text-xs text-[#535055]/90">
            Availability depends on jurisdiction, capability, and operational readiness.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
