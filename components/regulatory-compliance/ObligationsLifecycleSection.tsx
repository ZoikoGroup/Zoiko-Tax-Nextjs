"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { OBLIGATIONS_LIFECYCLE_DATA as O } from "./regulatory-compliance-data";
import { SectionContainer, Reveal, ScopeDisclosure, WorkflowStages, PrimaryButton } from "./shared";

export default function ObligationsLifecycleSection() {
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
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{O.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{O.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{O.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <p className="text-sm font-semibold text-[#301153]">{O.conceptualNote}</p>
        </Reveal>

        <Reveal delay={0.06}>
          <WorkflowStages stages={O.stages} />
        </Reveal>

        <Reveal delay={0.08}>
          <ScopeDisclosure>{O.disclosure}</ScopeDisclosure>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-[#18141B]">{O.schemaTitle}</h3>
            <div className="flex flex-wrap gap-3">
              {O.schemaFields.map((f) => (
                <div key={f} className="w-[296px] flex-shrink-0 rounded-xl border border-[#D8CEDD] bg-white p-4 flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-[#18141B]">{f}</span>
                  <span className="text-[13px] text-[#665F69]">Not published · source required</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {O.states.map((s) => (
              <div key={s.title} className="border-t border-[#D8CEDD] pt-4 flex flex-col gap-2.5">
                <h4 className="text-[15px] font-bold text-[#301153]">{s.title}</h4>
                <p className="text-sm leading-[1.55] text-[#665F69]">{s.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-[13px] leading-[1.55] text-[#665F69]">{O.statesFootnote}</p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-[#18141B]">{O.destination.title}</span>
              <span className="text-[13px] text-[#665F69]">{O.destination.note}</span>
            </div>
            <PrimaryButton>
              <span className="inline-flex items-center gap-2">
                {O.action.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
