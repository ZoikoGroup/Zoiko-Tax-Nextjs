"use client";

import React from "react";
import { ArrowRight, FileInput, Layers, Network } from "lucide-react";
import { INTEROPERABILITY_DATA as I } from "./industry-standards-data";
import { SectionContainer, Reveal } from "./shared";

const ICONS = [Network, Layers, FileInput];

export default function InteroperabilitySection() {
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
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{I.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{I.title}</h2>
            <p className="text-base sm:text-lg leading-[1.55] text-[#665F69]">{I.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-7">
            <p className="text-[13px] font-bold text-[#301153]">{I.diagramLabel}</p>

            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              {I.flow.map((node, i) => (
                <div key={node} className="flex-1 flex items-center gap-4">
                  <div className="flex-1 rounded-2xl bg-[#EEE5F5] p-6 flex items-center">
                    <p className="text-[19px] font-semibold leading-[1.35] text-[#301153]">{node}</p>
                  </div>
                  {i < I.flow.length - 1 && (
                    <ArrowRight className="h-5 w-5 shrink-0 text-[#301153] hidden sm:block" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {I.boundaries.map((b, idx) => {
                const Icon = ICONS[idx];
                return (
                  <div key={b.title} className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
                    <Icon className="h-6 w-6 text-[#301153]" aria-hidden="true" />
                    <h3 className="text-xl font-bold leading-[1.1] text-[#18141B]">{b.title}</h3>
                    <p className="text-sm leading-[1.55] text-[#665F69]">{b.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[26px] bg-[#301153] p-7 sm:p-8 flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-1 flex flex-col gap-3.5">
              <h3 className="text-2xl font-bold text-white">{I.handoff.title}</h3>
              <p className="text-base leading-[1.55] text-[#D9D0DF]">{I.handoff.description}</p>
            </div>
            <div className="flex flex-col gap-0.5 shrink-0">
              <span className="text-sm font-semibold text-white">{I.handoff.destination.title}</span>
              <span className="text-xs text-[#D9D0DF]">{I.handoff.destination.note}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
