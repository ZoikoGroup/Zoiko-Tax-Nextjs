"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { REQUIREMENT_SOURCE_DATA as R } from "./regulatory-compliance-data";
import { SectionContainer, Reveal, ScopeDisclosure, WorkflowStages, ReferenceTable, PrimaryButton, SecondaryButton } from "./shared";

export default function RequirementSourceSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/regulatory-compliance/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{R.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{R.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{R.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <p className="text-sm font-semibold text-[#301153]">{R.conceptualNote}</p>
        </Reveal>

        <Reveal delay={0.06}>
          <WorkflowStages stages={R.stages} />
        </Reveal>

        <Reveal delay={0.08}>
          <ReferenceTable columns={R.tableColumns} rows={R.tableRows} />
        </Reveal>

        <Reveal delay={0.1}>
          <ScopeDisclosure>{R.disclosure}</ScopeDisclosure>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex flex-wrap items-center gap-3">
            <SecondaryButton>
              <span className="inline-flex items-center gap-2">
                {R.actions[0].label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </SecondaryButton>
            <PrimaryButton>
              <span className="inline-flex items-center gap-2">
                {R.actions[1].label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
