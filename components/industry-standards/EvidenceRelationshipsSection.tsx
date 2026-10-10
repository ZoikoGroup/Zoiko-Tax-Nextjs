"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, CircleX, DraftingCompass, FileCheck2, Info, Settings2 } from "lucide-react";
import { EVIDENCE_RELATIONSHIPS_DATA as E } from "./industry-standards-data";
import { Reveal } from "./shared";

const ICONS = [BookOpen, DraftingCompass, Settings2, CircleX, FileCheck2];

export default function EvidenceRelationshipsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#301153]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/industry-standards/evidence-relationships-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(48,17,83,0.82)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-20 lg:py-[104px] flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D9D0DF]">{E.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-white">{E.title}</h2>
            <p className="text-base sm:text-lg leading-[1.55] text-[#D9D0DF]">{E.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {E.relationships.map((r, i) => {
              const Icon = ICONS[i];
              return (
                <div key={r.title} className="h-full rounded-2xl border border-white/[0.13] bg-[#210B39] p-6 flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#D9D0DF]" aria-hidden="true" />
                  <h3 className="text-xl font-bold leading-[1.1] text-white">{r.title}</h3>
                  <p className="text-sm leading-[1.55] text-[#D9D0DF]">{r.description}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-2xl bg-[#210B39] p-5 flex gap-3.5">
            <Info className="h-6 w-6 shrink-0 text-[#D9D0DF]" aria-hidden="true" />
            <p className="text-sm leading-[1.55] text-[#D9D0DF]">{E.scopeNote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-white">{E.destination.title}</span>
            <span className="text-xs text-[#D9D0DF]">{E.destination.note}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
