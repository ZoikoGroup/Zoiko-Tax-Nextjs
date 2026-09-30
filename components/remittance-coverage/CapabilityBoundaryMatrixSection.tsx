"use client";

import React from "react";
import { CheckCircle2, CircleSlash2 } from "lucide-react";
import { Reveal, SectionContainer, SectionHeader, BoundaryNotice, renderLucideIcon } from "./shared";
import { BOUNDARY_ROWS } from "./types";

export default function CapabilityBoundaryMatrixSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
      <Reveal>
        <div className="space-y-10 sm:space-y-12">
          {/* Section Heading */}
          <SectionHeader
            eyebrow="Capability boundary matrix"
            title="Say exactly what this page proves—and nothing more."
            description="Remittance readiness remains bounded by capability, market identity, current public state and governed scope."
          />

          {/* Boundary Table */}
          <div className="w-full overflow-x-auto rounded-2xl border border-[#D8CEDD] bg-white shadow-xs">
            <table className="w-full text-left border-collapse min-w-[900px]">
              {/* Header */}
              <thead>
                <tr className="bg-[#100031] text-[#D9D0DF] text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 w-[280px]">Capability / source</th>
                  <th className="py-4 px-6">What this page may say</th>
                  <th className="py-4 px-6">What it must not imply</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-[#E9E1EC] text-sm">
                {BOUNDARY_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-[#FAF8FA] ${
                      idx % 2 === 1 ? "bg-[#FCF9FD]" : "bg-white"
                    }`}
                  >
                    {/* Capability / Source */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#FAF3FF] border border-[#E9E1EC] flex items-center justify-center text-[#301153] shrink-0">
                          {renderLucideIcon(row.iconName, "w-4 h-4 text-[#301153]")}
                        </div>
                        <span className="font-bold text-[#18141B] text-sm">
                          {row.capability}
                        </span>
                      </div>
                    </td>

                    {/* What this page may say */}
                    <td className="py-4 px-6">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#276749] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#18141B] leading-relaxed">
                          {row.permitted}
                        </span>
                      </div>
                    </td>

                    {/* What it must not imply */}
                    <td className="py-4 px-6">
                      <div className="flex items-start gap-2.5">
                        <CircleSlash2 className="w-4 h-4 text-[#9B2C2C] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#665F69] leading-relaxed">
                          {row.prohibited}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Boundary Notice */}
          <BoundaryNotice
            title="The non-custody boundary is absolute"
            description="ZoikoTax does not hold, transfer or settle customer funds. No state on this page implies payment execution, bank or rail support, customer compliance, every filing artifact or managed-service availability."
            iconName="landmark"
          />
        </div>
      </Reveal>
    </SectionContainer>
  );
}
