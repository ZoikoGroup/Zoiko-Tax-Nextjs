"use client";

import React from "react";
import { BriefcaseBusiness, Files, Workflow } from "lucide-react";
import { BUYER_PATHWAYS_DATA as B } from "./industry-standards-data";
import { SectionContainer, Reveal } from "./shared";

const ICONS = [BriefcaseBusiness, Workflow, Files];

export default function BuyerPathwaysSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{B.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{B.title}</h2>
          <p className="text-base sm:text-lg leading-[1.55] text-[#665F69]">{B.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {B.scenarios.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <div key={s.title} className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
                <Icon className="h-6 w-6 text-[#301153]" aria-hidden="true" />
                <h3 className="text-xl font-bold leading-[1.1] text-[#18141B]">{s.title}</h3>
                <p className="text-sm leading-[1.55] text-[#665F69]">{s.description}</p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </SectionContainer>
  );
}
