"use client";

import React from "react";
import { PROCUREMENT_CLAIMS_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function ProcurementClaimsSection() {
  return (
    <SectionContainer className="bg-[#F5F2F9]">
      <Reveal>
        <SectionHeader
          eyebrow={PROCUREMENT_CLAIMS_DATA.eyebrow}
          title={PROCUREMENT_CLAIMS_DATA.title}
          description={PROCUREMENT_CLAIMS_DATA.description}
        />
      </Reveal>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        <Reveal delay={0.06}>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 space-y-3">
            <h3 className="text-base font-bold text-[#26735B]">{PROCUREMENT_CLAIMS_DATA.approved.title}</h3>
            <ul className="flex flex-col gap-2">
              {PROCUREMENT_CLAIMS_DATA.approved.items.map((item) => (
                <li key={item} className="text-[13px] text-[#665F69]">
                  {"✓ "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-[#D65A2C] bg-white p-6 space-y-3">
            <h3 className="text-base font-bold text-[#D65A2C]">{PROCUREMENT_CLAIMS_DATA.restricted.title}</h3>
            <ul className="flex flex-col gap-2">
              {PROCUREMENT_CLAIMS_DATA.restricted.items.map((item) => (
                <li key={item} className="text-[13px] text-[#665F69]">
                  {"✗ "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
