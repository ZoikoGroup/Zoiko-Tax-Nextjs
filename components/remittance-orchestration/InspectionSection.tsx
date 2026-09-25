"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function InspectionSection() {
  const metadata = [
    { label: "Instruction ID", value: "RO-2026-USF-0941", isOrange: false },
    { label: "Liability Source", value: "ZoikoTax Filing Pack #842", isOrange: true },
    { label: "Assigned Payer", value: "Telecom Americas Inc.", isOrange: false },
    { label: "Target Payee", value: "FCC Universal Service Fund", isOrange: false },
    { label: "Handoff Standard", value: "ISO 20022 XML Package", isOrange: false },
  ];

  const gates = [
    "Scope/coverage verification check: USA Federal active",
    "Source integrity signature check: Match (SHA-256 Lock)",
    "Entity/responsibility profile: Linked to Corporate Payer 04",
    "Amount and Currency balance validation: Exact ($412,850.00)",
    "Payee details check: Destination addresses mask verified",
    "Segregated dual approval: Completed (Controller & VP Treasury)",
  ];

  return (
    <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image - Full Opacity */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/remittance-orchestration/Operational Challenges Section.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col items-start gap-4 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
              IN-DEPTH INSPECTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18141B]">
              Instruction Detail &amp; Evidence Drawer
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#535055]">
              Durable data tracking proves the &quot;Why&quot; and &quot;Under whose authority&quot; behind every external treasury transmission packet.
            </p>
          </div>

          {/* 2 Column Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left Card: Remittance Identity */}
            <div className="flex flex-col justify-between gap-6 rounded-2xl border border-[#D8CEDD] bg-white/95 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#18141B]">
                Remittance Identity
              </h3>
              <div className="flex flex-col gap-4">
                {metadata.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-4 border-b border-[#F0EBF2] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-xs sm:text-sm text-[#535055]">
                      {item.label}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-semibold text-right ${
                        item.isOrange ? "text-[#D65A2C]" : "text-[#18141B]"
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: System Readiness Gates */}
            <div className="flex flex-col justify-start gap-5 rounded-2xl border border-white/10 bg-[#1E112A] p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-white">
                System Readiness Gates
              </h3>
              <div className="flex flex-col gap-3.5">
                {gates.map((gate, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-normal text-zinc-300 leading-snug">
                      {gate}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
