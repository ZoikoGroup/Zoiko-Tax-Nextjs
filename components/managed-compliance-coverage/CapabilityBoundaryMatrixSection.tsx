"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Ban, ShieldAlert, X } from "lucide-react";
import { SectionHeader, Reveal } from "./shared";

const MATRIX_ROWS = [
  {
    capability: "Managed Compliance",
    permitted:
      "Report the market × underlying state × operational-readiness state × exact approved managed scope.",
    prohibited:
      "Create customer-specific filing responsibility, representation authority, staffing, hours, SLA, pricing or outcomes.",
  },
  {
    capability: "Country & Regulatory Packs",
    permitted:
      "Link pack evidence and identify governed market content relevant to the selected record.",
    prohibited:
      "Treat pack existence, office presence or content breadth as proof of Managed Compliance availability.",
  },
  {
    capability: "Tax Determination",
    permitted:
      "Show the independent underlying capability state where it is a required gate.",
    prohibited:
      "Imply determination Production means approved managed operations or legal advice.",
  },
  {
    capability: "Regulatory Obligations",
    permitted:
      "Cross-link capability-specific obligation Coverage and its current state.",
    prohibited:
      "Imply universal obligations coverage, customer responsibility allocation or guaranteed compliance.",
  },
  {
    capability: "Compliance & Filing",
    permitted:
      "Link platform workflow and evidence proof relevant to governed execution.",
    prohibited:
      "Promise filing responsibility, authority representation, service hours, staffing model or acceptance.",
  },
  {
    capability: "Remittance",
    permitted:
      "Identify remittance as an adjacent capability with its own governed status.",
    prohibited:
      "Imply fund custody, payment execution or remittance availability from this page.",
  },
  {
    capability: "E-Invoicing & CTC",
    permitted:
      "Cross-link exact network, mandate or schema Coverage where separately governed.",
    prohibited:
      "Imply blanket network, schema, endpoint, authority or market coverage.",
  },
];

const EXPLICIT_NON_IMPLICATIONS = [
  "Customer-specific legal compliance",
  "Filing responsibility",
  "Representation authority",
  "Staffing model",
  "Service hours",
  "SLA",
  "Pricing",
  "Guaranteed outcome",
  "Universal managed service",
  "Fund custody",
  "Blanket network coverage",
  "Blanket schema coverage",
];

export default function CapabilityBoundaryMatrixSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8FA] border-b border-[#E5D9EB] py-16 sm:py-20 lg:py-24">
      {/* Network Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-20"
        aria-hidden="true"
      >
        <Image
          src="/managed-compliance-coverage/network-grid-pattern-bg.png"
          alt="Network grid pattern background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16 space-y-10 sm:space-y-12">
        <Reveal>
          <SectionHeader
            eyebrow="Capability Boundary Matrix"
            title="Keep capability truth separate and explicit."
            description="This page can explain relationships and evidence paths. It must never collapse adjacent capability states into a universal managed-service promise."
          />
        </Reveal>

        {/* Boundary Matrix Table */}
        <Reveal delay={0.1}>
          <div className="rounded-[18px] border border-[#E5D9EB] bg-white overflow-hidden shadow-xs">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-[#301153] text-white font-bold text-xs sm:text-[13px] uppercase tracking-wider">
              <div className="md:col-span-3 p-4 sm:p-5 border-b md:border-b-0 md:border-r border-[#481A7A]">
                Capability
              </div>
              <div className="md:col-span-4 lg:col-span-5 p-4 sm:p-5 border-b md:border-b-0 md:border-r border-[#481A7A]">
                What this page may say
              </div>
              <div className="md:col-span-5 lg:col-span-4 p-4 sm:p-5">
                What it must not imply
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#F0E8F5]">
              {MATRIX_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm hover:bg-[#FAF6FC]/60 transition-colors"
                >
                  {/* Capability Name */}
                  <div className="md:col-span-3 p-4 sm:p-5 font-bold text-[#18141B] flex items-center md:border-r border-[#F0E8F5]">
                    {row.capability}
                  </div>

                  {/* Permitted Statement */}
                  <div className="md:col-span-4 lg:col-span-5 p-4 sm:p-5 flex items-start gap-2.5 md:border-r border-[#F0E8F5] text-[#18141B]">
                    <CheckCircle2 className="w-4 h-4 text-[#177245] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{row.permitted}</span>
                  </div>

                  {/* Prohibited Implication */}
                  <div className="md:col-span-5 lg:col-span-4 p-4 sm:p-5 bg-[#FFF8F6] flex items-start gap-2.5 text-[#18141B]">
                    <Ban className="w-4 h-4 text-[#9B2C2C] shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-[#665F69]">{row.prohibited}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Explicit Non-Implications Card */}
        <Reveal delay={0.2}>
          <div className="rounded-[18px] border border-[#E5D9EB] bg-white p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#FFF0E9] text-[#D65A2C]">
                <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#18141B]">
                Explicit non-implications
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#665F69] leading-relaxed">
              No result, pack, status, office, architecture statement or software Production state creates any of the following promises:
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {EXPLICIT_NON_IMPLICATIONS.map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#F0E4F5] bg-[#FAF8FA] px-3.5 py-2 text-xs sm:text-[13px] font-semibold text-[#18141B] shadow-2xs hover:border-[#BF6735] transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-[#9B2C2C] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
