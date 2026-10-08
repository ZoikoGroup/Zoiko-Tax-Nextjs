"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Compass, CodeXml, Shield, ArrowUpRight } from "lucide-react";
import { NEXT_JOURNEYS_DATA as N } from "./guides-reports-data";
import { SectionContainer, Reveal } from "./shared";

const JOURNEY_ICONS = [BookOpen, Compass, CodeXml, Shield];

export default function NextJourneysSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/guides-reports/journeys-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.84)]" />
      </div>

      <SectionContainer className="relative">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-xs font-bold text-[#F4A261]">{N.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.12] text-white">{N.title}</h2>
            <p className="text-base sm:text-lg leading-[1.5] text-[#D9D0DF]">{N.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {N.journeys.map((journey, i) => {
            const Icon = JOURNEY_ICONS[i];
            return (
              <Reveal key={journey.title} delay={0.04 * i}>
                <div className="h-full rounded-2xl bg-[#301153] border border-white/15 p-6 flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#F4A261]" aria-hidden="true" />
                  <h3 className="text-xl sm:text-2xl text-white">{journey.title}</h3>
                  <p className="text-sm leading-[1.65] text-[#D9D0DF]">{journey.description}</p>
                  <div className="flex flex-col gap-2.5 mt-auto">
                    {journey.routes.map((r) => (
                      <div key={r.label} className="flex flex-col gap-0.5">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F4A261]">
                          {r.label}
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="text-[11px] leading-[1.45] text-[#D9D0DF]">{r.path}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="border-t border-white/15 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[#D9D0DF]">{N.demoNote}</p>
            <span className="inline-flex items-center gap-2 text-base font-semibold text-[#F4A261]">
              {N.demoCta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
