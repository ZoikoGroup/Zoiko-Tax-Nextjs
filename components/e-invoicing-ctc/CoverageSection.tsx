"use client";

import React from "react";
import { COVERAGE_DATA } from "./e-invoicing-data";
import { SectionHeader, StatusBadge, Reveal } from "./shared";

export default function CoverageSection() {
  return (
    <section id="coverage" className="relative w-full overflow-hidden bg-white py-14 sm:py-18 md:py-24 border-b border-[#D8CEDD]">
      {/* Pattern background overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/e-invoicing-ctc/pattern-bg.png')" }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <SectionHeader
          eyebrow="Market coverage"
          title="One global platform. Regional readiness verified."
          description="Confirm specific capabilities, adapter structures, and validation rules verified by local regulatory packs."
          className="mb-10 sm:mb-12"
        />

        <Reveal delay={0.05}>
          <div className="overflow-x-auto rounded-2xl border border-[#D8CEDD] bg-white shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-[#D8CEDD] bg-[#FAF8FA] text-xs font-bold uppercase tracking-wider text-[#18141B]">
                <tr>
                  <th className="py-4 px-5">Jurisdiction</th>
                  <th className="py-4 px-5">Profile Status</th>
                  <th className="py-4 px-5">Adapter Version</th>
                  <th className="py-4 px-5">Readiness Stage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8CEDD]/60 text-[#18141B]">
                {COVERAGE_DATA.map((row) => (
                  <tr
                    key={row.jurisdiction}
                    className="hover:bg-[#FAF8FA] transition-colors duration-150"
                  >
                    <td className="py-4 px-5 font-semibold text-[#18141B]">
                      {row.jurisdiction}
                    </td>
                    <td className="py-4 px-5 text-[#665F69]">
                      {row.profileStatus}
                    </td>
                    <td className="py-4 px-5 text-[#18141B]">
                      {row.adapterVersion}
                    </td>
                    <td className="py-4 px-5">
                      <StatusBadge status={row.stage} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
