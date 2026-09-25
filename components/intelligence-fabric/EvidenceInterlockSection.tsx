"use client";

import React from "react";
import { EVIDENCE_INTERLOCK_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function EvidenceInterlockSection() {
  return (
    <SectionContainer id="evidence-interlock" className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={EVIDENCE_INTERLOCK_DATA.eyebrow}
          title={EVIDENCE_INTERLOCK_DATA.title}
          description={EVIDENCE_INTERLOCK_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8 space-y-5">
          <p className="font-mono text-sm text-[#D65A2C]">{EVIDENCE_INTERLOCK_DATA.manifestId}</p>
          <ul className="space-y-2">
            {EVIDENCE_INTERLOCK_DATA.items.map((item, i) => (
              <li
                key={item}
                className={"text-sm leading-[1.5] " + (i === 0 ? "text-[#18141B]" : "text-[#665F69]")}
              >
                {"• "}
                {item}
              </li>
            ))}
          </ul>
          <div className="border-t border-[#D8CEDD] pt-4">
            <p className="text-sm leading-[1.5] text-[#665F69]">{EVIDENCE_INTERLOCK_DATA.auditNotice}</p>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
