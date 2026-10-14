"use client";

import React from "react";
import { FileText, Lock, RadioTower, Shield, Workflow } from "lucide-react";
import { FAMILY_OVERVIEW_DATA as F } from "./industry-standards-data";
import { SectionContainer, Reveal } from "./shared";

const ICONS = [RadioTower, FileText, Shield, Lock, Workflow];

export default function FamilyOverviewSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/industry-standards/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{F.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{F.title}</h2>
            <p className="text-base sm:text-lg leading-[1.55] text-[#665F69]">{F.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {F.families.map((f, i) => {
              const Icon = ICONS[i];
              return (
                <div key={f.title} className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#301153]" aria-hidden="true" />
                  <h3 className="text-xl font-bold leading-[1.1] text-[#18141B]">{f.title}</h3>
                  <p className="text-sm leading-[1.55] text-[#665F69]">{f.description}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-sm leading-[1.55] text-[#665F69]">{F.footnote}</p>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
