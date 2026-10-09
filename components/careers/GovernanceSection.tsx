"use client";

import React from "react";
import Image from "next/image";
import { GOVERNANCE_DATA as G } from "./careers-data";
import { SectionContainer, Reveal } from "./shared";

export default function GovernanceSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#120327]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/careers/governance-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(18,3,39,0.72)]" />
      </div>

      <SectionContainer className="relative">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-sm font-bold uppercase text-[#F4A261]">{G.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{G.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#D9D0DF]">{G.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {G.roles.map((r, i) => (
            <Reveal key={r.title} delay={0.02 * i}>
              <div className="h-full rounded-2xl bg-[#301153] border border-white/10 p-6 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-white">{r.title}</h3>
                <p className="text-base leading-[1.6] text-[#D9D0DF]">{r.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-[#190A36] border border-white/10 p-7 sm:p-8 flex flex-col gap-5">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-2xl font-semibold text-white">{G.readiness.title}</h3>
              <span className="inline-flex items-center rounded-full bg-white/[0.07] border border-white/10 px-3.5 py-2 text-xs font-mono text-[#D9D0DF]">
                {G.readiness.badge}
              </span>
            </div>
            {G.readiness.paragraphs.map((p) => (
              <p key={p} className="text-base leading-[1.6] text-[#D9D0DF]">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
