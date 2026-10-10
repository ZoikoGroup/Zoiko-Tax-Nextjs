"use client";

import React from "react";
import Image from "next/image";
import { REGULATORY_CHANGE_DATA as R } from "./regulatory-compliance-data";
import { Reveal, ScopeDisclosure } from "./shared";

export default function RegulatoryChangeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#301153]">
      <div className="absolute inset-0 mix-blend-multiply" aria-hidden="true">
        <Image src="/regulatory-compliance/regulatory-change-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(48,17,83,0.72)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-20 lg:py-[104px] flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#F4A261]">{R.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{R.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.55] text-[#D9D0DF]">{R.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <ScopeDisclosure dark>{R.disclosure}</ScopeDisclosure>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">{R.schemaTitle}</h3>
            <div className="flex flex-wrap gap-3">
              {R.schemaFields.map((f) => (
                <div key={f} className="w-[296px] flex-shrink-0 rounded-xl border border-white/15 bg-white/[0.03] p-4 flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-white">{f}</span>
                  <span className="text-[13px] text-[#D9D0DF]">Not published · source required</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {R.versionCards.map((c) => (
              <div key={c.title} className="h-full rounded-2xl border border-white/15 bg-white/[0.04] p-6 flex flex-col gap-3">
                <h4 className="text-xl font-bold text-white">{c.title}</h4>
                <p className="text-base leading-[1.55] text-[#D9D0DF]">{c.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-2">{R.reviewStatesTitle}</h3>
            {R.reviewStates.map((s) => (
              <div key={s.title} className="border-b border-white/15 py-4 flex flex-col sm:flex-row gap-2 sm:gap-6">
                <span className="text-[15px] font-semibold text-white sm:w-[280px] shrink-0">{s.title}</span>
                <span className="flex-1 text-[15px] leading-[1.55] text-[#D9D0DF]">{s.description}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ScopeDisclosure dark>{R.aiDisclosure}</ScopeDisclosure>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-white">{R.destination.title}</span>
            <span className="text-[13px] text-[#D9D0DF]">{R.destination.note}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
