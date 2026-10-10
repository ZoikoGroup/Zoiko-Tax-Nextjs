"use client";

import React from "react";
import { ArrowRight, BookOpen, Calculator, Database, Network, RadioTower, Users } from "lucide-react";
import { INTEGRATIONS_DATA as I } from "./regulatory-compliance-data";
import { SectionContainer, Reveal, ScopeDisclosure, WorkflowStages, PrimaryButton } from "./shared";

const ICONS = [RadioTower, Calculator, BookOpen, Network, Database, Users];

export default function IntegrationsSection() {
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
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{I.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{I.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{I.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {I.systems.map((s, idx) => {
              const Icon = ICONS[idx];
              return (
                <div key={s.title} className="rounded-2xl border border-[#D8CEDD] bg-white p-5 flex flex-col gap-3.5">
                  <Icon className="h-6 w-6 text-[#301153]" aria-hidden="true" />
                  <h3 className="text-base font-bold leading-[1.4] text-[#18141B]">{s.title}</h3>
                  <p className="text-sm leading-[1.55] text-[#665F69]">{s.description}</p>
                  <p className="text-[13px] text-[#665F69]">{I.systemStatus}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[26px] bg-[#301153] p-7 sm:p-9 flex flex-col gap-6">
            <span className="text-sm font-semibold text-[#F4A261]">{I.handoff.label}</span>
            <WorkflowStages stages={I.handoff.stages} dark />
            <p className="text-base leading-[1.55] text-[#D9D0DF]">{I.handoff.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ScopeDisclosure>{I.disclosure}</ScopeDisclosure>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-[#18141B]">{I.destination.title}</span>
              <span className="text-[13px] text-[#665F69]">{I.destination.note}</span>
            </div>
            <PrimaryButton>
              <span className="inline-flex items-center gap-2">
                {I.action.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
