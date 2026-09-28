"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader, SecondaryButton, Reveal } from "./shared";

const coverageColumns = ["Region", "Tax Determination", "E-Invoicing", "Obligations"];

const coverageRows = [
  {
    region: "Region Alpha",
    taxDetermination: { status: "Active", active: true },
    eInvoicing: { status: "Active", active: true },
    obligations: { status: "Unavailable", active: false },
  },
  {
    region: "Region Beta",
    taxDetermination: { status: "Unavailable", active: false },
    eInvoicing: { status: "Active", active: true },
    obligations: { status: "Active", active: true },
  },
];

export default function CoverageSection() {
  return (
    <section
      id="coverage"
      className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Background Image per user instructions (Platform and proof.png for section 9) */}
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
            eyebrow="GLOBAL PLATFORM PACKS"
            title="Availability is capability-specific"
            description="Global architecture provides unified pipelines, but local live production depends strictly on activated country and regulatory packs."
          />
        </Reveal>

        {/* Regulatory Readiness Preview Table */}
        <div className="mt-10 sm:mt-12">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-7 shadow-[0_2px_4px_0_rgba(0,0,0,0.03)]">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                REGULATORY READINESS PREVIEW (SAMPLE)
              </span>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[#D8CEDD] pb-3 text-xs sm:text-sm font-bold text-[#18141B]">
                      {coverageColumns.map((col, idx) => (
                        <th key={idx} className="pb-3.5 pr-4 font-bold first:pl-1">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D8CEDD]/60 text-xs sm:text-sm">
                    {coverageRows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/70">
                        <td className="py-4 pr-4 font-semibold text-[#18141B] first:pl-1">
                          {row.region}
                        </td>
                        <td className="py-4 pr-4">
                          <span
                            className={
                              row.taxDetermination.active
                                ? "font-medium text-[#D65A2C]"
                                : "text-[#665F69]"
                            }
                          >
                            {row.taxDetermination.active ? "✓ Active" : "— Unavailable"}
                          </span>
                        </td>
                        <td className="py-4 pr-4">
                          <span
                            className={
                              row.eInvoicing.active
                                ? "font-medium text-[#D65A2C]"
                                : "text-[#665F69]"
                            }
                          >
                            {row.eInvoicing.active ? "✓ Active" : "— Unavailable"}
                          </span>
                        </td>
                        <td className="py-4 pr-4">
                          <span
                            className={
                              row.obligations.active
                                ? "font-medium text-[#D65A2C]"
                                : "text-[#665F69]"
                            }
                          >
                            {row.obligations.active ? "✓ Active" : "— Unavailable"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Coverage Button */}
          <div className="mt-6">
            <Reveal delay={0.2}>
              <SecondaryButton href="#coverage">View Current Coverage Portal</SecondaryButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
