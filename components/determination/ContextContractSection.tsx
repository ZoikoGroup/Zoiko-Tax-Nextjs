import React from "react";
import Image from "next/image";
import { SectionHeader, StatusBadge, Reveal } from "./shared";
import { contractRows } from "./determination-data";

export default function ContextContractSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#FAF8FA]">
      {/* Background Image overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
        <Image
          src="/determination/contract-bg.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="IMMUTABLE SCHEMA CONTRACT"
            title="Payload Specifications & Contracts"
            description="Outlines the expected input schema. Arbitrary fields are rejected to prevent un-auditable side-effects."
            className="max-w-3xl"
          />
        </Reveal>

        {/* Schema Table Container */}
        <Reveal delay={0.15}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-[#D8CEDD] bg-white shadow-[0_8px_24px_0_rgba(0,0,0,0.03)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-[#535055]">
                {/* Table Header */}
                <thead className="border-b-2 border-[#D8CEDD] bg-[#F9F7FA] text-xs font-bold uppercase tracking-wider text-[#18141B]">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      FIELD PATH
                    </th>
                    <th scope="col" className="px-6 py-4">
                      DATA TYPE
                    </th>
                    <th scope="col" className="px-6 py-4">
                      DESCRIPTION & PURPOSE
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      TEST STATUS
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-[#D8CEDD]/60 font-sans">
                  {contractRows.map((row) => (
                    <tr
                      key={row.field}
                      className="transition-colors hover:bg-[#FAF8FA]/80"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-mono text-xs font-semibold text-[#18141B]">
                        {row.field}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-[#665F69]">
                        {row.type}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-[#535055]">
                        {row.description}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-center">
                        <StatusBadge status={row.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
