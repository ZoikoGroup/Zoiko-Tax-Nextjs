import React from "react";
import { SectionContainer, SectionHeader, PrimaryButton, StatusBadge, Reveal } from "./shared";
import { coverageRows } from "./determination-data";

export default function CoverageSection() {
  return (
    <SectionContainer id="coverage" className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow="COMPLIANCE GEOGRAPHIES"
          title="Geographic Readiness & Coverage portals"
          description="Active packs determine system availability. ZoikoTax supports selective activation to align with your corporate footprint."
          className="max-w-3xl"
        />
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8 shadow-[0_4px_16px_0_rgba(0,0,0,0.02)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-[#535055]">
              <thead className="border-b border-[#D8CEDD] pb-3 text-xs font-bold uppercase tracking-wider text-[#18141B]">
                <tr>
                  <th scope="col" className="pb-4 font-bold">
                    JURISDICTION PACK
                  </th>
                  <th scope="col" className="pb-4 font-bold">
                    SUPPORTED CAPABILITY
                  </th>
                  <th scope="col" className="pb-4 font-bold text-center">
                    PACK STATE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8CEDD]/60">
                {coverageRows.map((row) => (
                  <tr key={row.pack} className="transition-colors hover:bg-slate-50/80">
                    <td className="py-4 font-semibold text-[#18141B]">
                      {row.pack}
                    </td>
                    <td className="py-4 text-xs sm:text-sm text-[#535055]">
                      {row.capability}
                    </td>
                    <td className="py-4 text-center">
                      <StatusBadge status={row.state} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Centered CTA Button */}
          <div className="mt-8 flex justify-center border-t border-[#D8CEDD]/60 pt-6">
            <PrimaryButton href="#map">
              View Live Geographic Coverage Map
            </PrimaryButton>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
