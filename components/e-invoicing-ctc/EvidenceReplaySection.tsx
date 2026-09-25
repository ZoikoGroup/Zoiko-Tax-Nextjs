"use client";

import React from "react";
import { EVIDENCE_REPLAY_STEPS } from "./e-invoicing-data";
import { SectionHeader, PrimaryButton, Reveal } from "./shared";

export default function EvidenceReplaySection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-18 md:py-24 border-b border-[#D8CEDD]">
      {/* Pattern background overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/e-invoicing-ctc/pattern-bg.png')" }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <SectionHeader
          eyebrow="Durable Auditing"
          title="Evidence & Historical Replay"
          description="Re-run transactional events under past content states and system configurations to substantiate audit trials."
          className="mb-12 sm:mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {EVIDENCE_REPLAY_STEPS.map((step, idx) => (
            <Reveal key={step.title} delay={0.06 * idx}>
              <div className="h-full rounded-xl border border-[#D8CEDD] bg-white p-6 shadow-xs flex flex-col justify-between hover:border-[#D65A2C]/40 transition-all duration-150">
                <div>
                  <h3 className="text-base font-bold text-[#18141B] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#665F69] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div>
            <PrimaryButton href="#evidence-replay">
              Explore Evidence & Replay
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
