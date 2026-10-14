"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { EXCEPTIONS_DATA as E } from "./regulatory-compliance-data";
import { SectionContainer, Reveal, ScopeDisclosure, WorkflowStages, ReferenceTable, PrimaryButton } from "./shared";

export default function ExceptionsSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{E.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{E.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{E.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {E.categories.map((c) => (
            <div key={c.title} className="min-h-[140px] rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-[#18141B]">{c.title}</h3>
              <p className="text-sm leading-[1.55] text-[#665F69]">{c.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <ReferenceTable columns={E.tableColumns} rows={E.tableRows} />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8">
          <WorkflowStages stages={E.stages} />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6">
          <ScopeDisclosure>{E.disclosure}</ScopeDisclosure>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-6">
          <PrimaryButton>
            <span className="inline-flex items-center gap-2">
              {E.action.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </PrimaryButton>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
