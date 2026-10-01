"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, BoundaryNotice } from "./shared";
import { ITEM_OUTCOMES, ANTI_PATTERNS } from "./types";

export default function IdempotencySection() {
  return (
    <SectionContainer className="relative bg-white">
      {/* Subtle tech background pattern */}
      <div className="pointer-events-none absolute inset-0 select-none opacity-[0.04] mix-blend-multiply" aria-hidden="true">
        <Image src="/ucaas-ccaas-cpaas/tech-pattern.png" alt="" fill className="object-cover object-top" />
      </div>

      <div className="relative z-10 flex flex-col items-start gap-8">
        <SectionHeader
          eyebrow="08 / IDEMPOTENCY & PARTIAL FAILURE"
          title="Reprocess deliberately. Preserve what succeeded."
          description="Idempotent authoritative writes matter where applicable. Exact identity, deduplication, retry and retention semantics remain governed."
        />

        {/* Conceptual item outcomes panel */}
        <div className="w-full rounded-3xl bg-[#301153] p-7 flex flex-col items-start gap-6 outline outline-1 -outline-offset-1 outline-white/10">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#F4A261] font-['Inter',sans-serif]">
            CONCEPTUAL ITEM OUTCOMES · NO PRODUCTION COUNTS
          </span>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ITEM_OUTCOMES.map((item) => (
              <div
                key={item.title}
                className="flex-1 rounded-2xl bg-white/5 p-6 outline outline-1 -outline-offset-1 outline-white/10 flex flex-col items-start gap-2.5 transition-colors hover:bg-white/10"
              >
                <h3 className="text-lg font-bold text-white font-['Inter',sans-serif]">{item.title}</h3>
                <p className="text-sm leading-5 text-[#D8CEDD] font-['Inter',sans-serif]">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-base leading-6 text-[#D8CEDD] font-['Inter',sans-serif]">
            Item diagnosis → approved current-state verification → governed reprocessing → result and
            authority verification. Do not collapse this into a whole-job retry.
          </p>
        </div>

        <BoundaryNotice
          title="Investigate before you write again"
          description="Unknown identity, result integrity or version means investigation. Verify authoritative current state through an approved API or downstream workflow. No “exactly once” behavior, retry schedule, retry count or deduplication retention is promised here."
          className="w-full"
        />

        <h3 className="text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
          Six unsafe shortcuts to avoid
        </h3>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {ANTI_PATTERNS.map((card) => (
            <div
              key={card.title}
              className="flex-1 rounded-2xl bg-white p-6 outline outline-1 -outline-offset-1 outline-[#D8CEDD] flex flex-col items-start gap-3.5 transition-shadow hover:shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
                ANTI-PATTERN
              </span>
              <h4 className="text-lg font-bold leading-6 text-[#18141B] font-['Inter',sans-serif]">{card.title}</h4>
              <p className="text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
