import Image from "next/image";
import React from "react";

const lanes = [
  {
    owner: "Source transaction / billing",
    role: "SOURCE AUTHORITY",
    handoff: "Originating transaction",
    dark: false,
    desc: (
      <>
        <span className="lg:whitespace-nowrap">The source system owns the originating transaction or invoice. Preserve its identity, version</span>
        <br className="hidden lg:inline" />
        <span>and record history when connecting downstream fiscal and finance records.</span>
      </>
    ),
    arrow: true,
  },
  {
    owner: "ZoikoTax",
    role: "FISCAL AUTHORITY",
    handoff: "Fiscal outcome + evidence",
    dark: false,
    desc: (
      <>
        <span className="lg:whitespace-nowrap">ZoikoTax produces supported, governed fiscal outcomes and associated evidence. A fiscal</span>
        <br className="hidden lg:inline" />
        <span className="lg:whitespace-nowrap">outcome establishes fiscal context within its supported scope; it does not authorize an</span>
        <br className="hidden lg:inline" />
        <span>accounting posting.</span>
      </>
    ),
    arrow: true,
  },
  {
    owner: "Accounting bridge",
    role: "INTERFACE BOUNDARY",
    handoff: "Governed mapping + interface",
    dark: false,
    desc: (
      <>
        <span className="lg:whitespace-nowrap">The bridge maps supported fiscal concepts to approved finance interfaces. Actual mapping</span>
        <br className="hidden lg:inline" />
        <span>is customer-owned or governed configuration, not a universal accounting schema.</span>
      </>
    ),
    arrow: true,
  },
  {
    owner: "Enterprise ERP / GL",
    role: "ACCOUNTING AUTHORITY",
    handoff: "Accounting record + controls",
    dark: true,
    desc: (
      <>
        <span className="lg:whitespace-nowrap">The enterprise ERP or general ledger remains the accounting system of record. It owns</span>
        <br className="hidden lg:inline" />
        <span className="lg:whitespace-nowrap">ledger processing, record authority and posting controls under the customer&apos;s accounting</span>
        <br className="hidden lg:inline" />
        <span>process.</span>
      </>
    ),
    arrow: true,
  },
  {
    owner: "Reconciliation / evidence",
    role: "SCOPED RELATIONSHIPS",
    handoff: "Investigation + audit links",
    dark: false,
    desc: (
      <>
        <span className="lg:whitespace-nowrap">Defined record relationships connect source, fiscal and finance outcomes for investigation</span>
        <br className="hidden lg:inline" />
        <span className="lg:whitespace-nowrap">and audit. Evidence preserves context; a match does not establish legal or accounting</span>
        <br className="hidden lg:inline" />
        <span>correctness.</span>
      </>
    ),
    arrow: false,
  },
];

export default function SystemBoundariesSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-white py-20 lg:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/erp-general-ledger/tech-pattern.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            01 · SYSTEM BOUNDARIES
          </div>
        <h2 className="w-full max-w-[1050px] text-[#18141B] text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight">
          <span className="lg:whitespace-nowrap">One connected workflow. Distinct</span>
          <br className="hidden sm:inline" />
          <span>responsibilities.</span>
        </h2>
        <p className="w-full max-w-[1060px] text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
          Keep fiscal authority and accounting authority separate—even when the interfaces connect them.
        </p>
      </div>

      <div className="relative z-10 self-stretch grid grid-cols-1 lg:grid-cols-2 justify-start items-stretch gap-4">
        <div className="p-6 bg-[#F5EDFA] rounded-2xl border border-[#E7D6F0] flex flex-col justify-start items-start gap-2 shadow-sm">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            ZOIKOTAX · FISCAL SCOPE
          </div>
          <div className="text-[#3B125B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
            Supported outcomes and governed evidence
          </div>
        </div>
        <div className="p-6 bg-[#181424] rounded-2xl border border-[#2D243F] flex flex-col justify-start items-start gap-2 shadow-sm">
          <div className="text-[#FFA776] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            ENTERPRISE ERP / GL · FINANCE SCOPE
          </div>
          <div className="text-white text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
            Accounting system of record and posting controls
          </div>
        </div>
      </div>

      <div className="relative z-10 self-stretch p-6 sm:p-8 bg-white/95 backdrop-blur-[2px] rounded-3xl border border-[#D8CEDD] flex flex-col justify-start items-start shadow-sm">
        <div className="self-stretch pb-4 flex justify-start items-start gap-6 border-b border-transparent">
          <div className="w-56 shrink-0 text-[#665F69] text-xs font-bold uppercase tracking-[0.08em] font-['Inter',sans-serif]">
            RESPONSIBILITY OWNER
          </div>
          <div className="w-64 shrink-0 text-[#665F69] text-xs font-bold uppercase tracking-[0.08em] font-['Inter',sans-serif]">
            CONCEPTUAL HANDOFF ↓
          </div>
          <div className="flex-1 text-[#665F69] text-xs font-bold uppercase tracking-[0.08em] font-['Inter',sans-serif]">
            BOUNDARY &amp; TEXT EQUIVALENT
          </div>
        </div>

        {lanes.map((lane) => (
          <div
            key={lane.owner}
            className="self-stretch py-5 sm:py-6 border-t border-[#E5DFE8] flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-6"
          >
            <div className="w-56 shrink-0 flex flex-col justify-start items-start gap-1">
              <div className="text-[#18141B] text-base sm:text-lg font-bold font-['Inter',sans-serif] leading-6">
                {lane.owner}
              </div>
              <div className="text-[#D65A2C] text-[10px] font-bold font-['Inter',sans-serif] uppercase tracking-wider">
                {lane.role}
              </div>
            </div>

            <div className="w-64 shrink-0 flex flex-col items-center justify-start gap-2.5">
              <div
                className={`w-full p-4 rounded-2xl flex flex-col justify-start items-start ${
                  lane.dark ? "bg-[#181424]" : "bg-[#F5EDFA]"
                }`}
              >
                <div
                  className={`text-sm sm:text-base font-semibold font-['Inter',sans-serif] leading-6 ${
                    lane.dark ? "text-white" : "text-[#3B125B]"
                  }`}
                >
                  {lane.handoff}
                </div>
              </div>
              {lane.arrow && (
                <div className="text-center text-[#D65A2C] text-sm font-semibold leading-none">
                  ↓
                </div>
              )}
            </div>

            <div className="flex-1 text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-relaxed">
              {lane.desc}
            </div>
          </div>
        ))}

        <div className="self-stretch pt-5 border-t border-[#E5DFE8] text-[#665F69] text-xs font-normal font-['Inter',sans-serif] leading-5">
          Conceptual swimlanes only. Handoff arrows describe flow and responsibility—not a guarantee of synchronous behavior, processing order or posting success.
        </div>
      </div>
    </div>
  </section>
  );
}
