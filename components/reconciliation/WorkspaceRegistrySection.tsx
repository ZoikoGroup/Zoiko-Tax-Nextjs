"use client";

import React from "react";
import { WORKSPACE_REGISTRY_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, StatusBadge, Reveal } from "./shared";

export default function WorkspaceRegistrySection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA] border-b border-[#D8CEDD]/60"
      style={{
        backgroundImage: "url('/reconciliation/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={WORKSPACE_REGISTRY_DATA.eyebrow}
          title={WORKSPACE_REGISTRY_DATA.title}
          description={WORKSPACE_REGISTRY_DATA.description}
        />
      </Reveal>

      {/* Table Container */}
      <Reveal delay={0.08} className="mt-10 sm:mt-12">
        <div className="rounded-2xl border border-[#D8CEDD] bg-white/95 backdrop-blur-md shadow-xs overflow-hidden">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-[#D8CEDD] bg-[#F7F3ED]/70 text-[12px] font-bold text-[#18141B] uppercase tracking-wider">
                  <th className="py-4 px-5">Scope / Run</th>
                  <th className="py-4 px-4">Source A/B</th>
                  <th className="py-4 px-4">Variance State</th>
                  <th className="py-4 px-4">Classification</th>
                  <th className="py-4 px-4">Materiality</th>
                  <th className="py-4 px-4">Owner</th>
                  <th className="py-4 px-5 text-right">Governance Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8CEDD]/60 text-sm">
                {WORKSPACE_REGISTRY_DATA.rows.map((row) => (
                  <tr key={row.scope} className="hover:bg-[#FAF8FA] transition-colors duration-150">
                    <td className="py-4 px-5 font-semibold text-[#18141B]">
                      {row.scope}
                    </td>
                    <td className="py-4 px-4 text-[#665F69]">
                      {row.sourceAB}
                    </td>
                    <td className="py-4 px-4">
                      <StatusBadge status={row.variance} />
                    </td>
                    <td className="py-4 px-4 text-[#18141B]">
                      {row.classification}
                    </td>
                    <td className="py-4 px-4">
                      <StatusBadge status={row.materiality} />
                    </td>
                    <td className="py-4 px-4 text-[#665F69]">
                      {row.owner}
                    </td>
                    <td className="py-4 px-5 text-right">
                      <StatusBadge status={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
