"use client";

import React from "react";

export default function InspectionSection() {
  const metadata = [
    { label: "Instruction ID", value: "RO-2026-USF-0941", isOrange: false },
    { label: "Liability Source", value: "ZoikoTax Filing Pack #842", isOrange: true },
    { label: "Assigned Payer", value: "Telecom Americas Inc.", isOrange: false },
    { label: "Target Payee", value: "FCC Universal Service Fund", isOrange: false },
    { label: "Handoff Standard", value: "ISO 20022 XML Package", isOrange: false, isMedium: true },
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
    <section className="self-stretch px-4 sm:px-8 lg:px-20 py-16 sm:py-20 flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="justify-start text-orange-600 text-sm font-bold font-['Sora']">
          IN-DEPTH INSPECTION
        </div>
        <h2 className="justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
          Instruction Detail &amp; Evidence Drawer
        </h2>
        <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-medium  leading-8">
          Durable data tracking proves the &quot;Why&quot; and &quot;Under whose authority&quot; behind every external treasury transmission packet.
        </p>
      </div>

      <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left Card: Remittance Identity */}
        <div className="p-7 bg-neutral-50 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-between gap-5">
          <h3 className="justify-start text-zinc-900 text-xl font-semibold font-['Sora'] leading-6">
            Remittance Identity
          </h3>
          <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
            {metadata.map((item, idx) => (
              <div
                key={idx}
                className="self-stretch inline-flex justify-between items-start w-full border-b border-zinc-200/50 pb-2 last:border-b-0 last:pb-0"
              >
                <div className="justify-start text-neutral-600 text-xs font-normal">
                  {item.label}
                </div>
                <div
                  className={`justify-start text-xs ${
                    item.isOrange
                      ? "text-orange-600 font-semibold"
                      : item.isMedium
                      ? "text-zinc-900 font-medium"
                      : "text-zinc-900 font-semibold"
                  }`}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: System Readiness Gates */}
        <div className="p-7 bg-indigo-950 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-5">
          <h3 className="justify-start text-neutral-50 text-xl font-semibold font-['Sora'] leading-6">
            System Readiness Gates
          </h3>
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
            {gates.map((gate, idx) => (
              <div
                key={idx}
                className="justify-start text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed"
              >
                ✓ {gate}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
