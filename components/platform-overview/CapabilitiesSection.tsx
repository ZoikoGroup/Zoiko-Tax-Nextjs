"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

const capabilitiesData = [
  {
    number: "01",
    title: "Tax Determination",
    description: "Deterministic tax computation with absolute rule and version locks.",
    href: "/determination",
  },
  {
    number: "02",
    title: "Exemptions & Certificates",
    description: "Validate customer certificates and exemptions at transactional ingestion.",
    href: "/exemptions-certificates",
  },
  {
    number: "03",
    title: "Regulatory Obligations",
    description: "Identify, assign and trace non-tax telecom-specific duties.",
    href: "#",
  },
  {
    number: "04",
    title: "Compliance & Filing",
    description: "Govern preparation, review, approval and final submission states.",
    href: "#",
  },
  {
    number: "05",
    title: "Remittance Orchestration",
    description: "Verify and coordinate money flows to respective authorities.",
    href: "#",
  },
  {
    number: "06",
    title: "E-Invoicing & CTC",
    description: "Coordinate document clearance workflows under local country mandates.",
    href: "#",
  },
  {
    number: "07",
    title: "Reconciliation",
    description: "Continuously match transaction facts, tax liability and general ledger outcomes.",
    href: "#",
  },
  {
    number: "08",
    title: "Evidence & Replay",
    description: "Reconstruct historical decisions from preserved context payloads.",
    href: "#",
  },
];

export default function CapabilitiesSection() {
  return (
    <SectionContainer id="capabilities" className="bg-[#FAF3FF]/40 border-t border-[#D8CEDD]/40">
      <Reveal>
        <SectionHeader
          eyebrow="CAPABILITY DISCOVERY"
          title="Governed platform capabilities"
          description="Activate country-specific or functional packs to map obligations and secure compliance."
        />
      </Reveal>

      {/* 8 Capabilities Grid (4 cols x 2 rows on desktop) */}
      <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {capabilitiesData.map((capability, index) => (
          <Reveal key={capability.number} delay={index * 0.05}>
            <div className="group flex h-full min-h-[220px] flex-col justify-between rounded-2xl border border-[#D8CEDD] bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#D65A2C]/40 hover:shadow-md">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                  CAPABILITY {capability.number}
                </span>
                <h3 className="text-lg sm:text-xl font-bold leading-snug text-[#18141B]">
                  {capability.title}
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#535055]">
                  {capability.description}
                </p>
              </div>

              <div className="pt-4 ">
                <Link
                  href={capability.href}
                  className="inline-flex items-center gap-29 text-xs font-semibold text-[#BF6735] transition-colors group-hover:text-[#DD7235] group-hover:underline"
                >
                  <span>Explore Capability</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 " />

                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
