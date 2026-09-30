"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Reveal, SectionHeader, renderLucideIcon } from "./shared";
import { LIFECYCLE_STAGES } from "./types";

export default function HowRemittanceFitsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#100031] border-b border-[#2C1945] py-16 sm:py-20 lg:py-24">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/remittance-coverage/how-remittance-fits-bg.png"
          alt="Fiscal lifecycle background"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#0E011C]/75" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16 space-y-12">
        <Reveal>
          {/* Section Heading */}
          <SectionHeader
            dark
            eyebrow="How Remittance fits"
            title="One governed stage in a wider fiscal lifecycle."
            description="This page reports only Remittance readiness. Every upstream, adjacent and downstream capability retains its own state and scope."
          />
        </Reveal>

        {/* Fiscal Lifecycle Flow */}
        <Reveal delay={0.1}>
          <div className="w-full overflow-x-auto pb-4 pt-2">
            <div className="flex items-center min-w-[1080px] gap-2">
              {LIFECYCLE_STAGES.map((stage, idx) => {
                const isCurrent = stage.isCurrent;

                return (
                  <React.Fragment key={stage.id}>
                    {/* Stage Card */}
                    <div
                      className={`flex-1 rounded-xl p-3 sm:p-3.5 flex flex-col items-center text-center justify-center gap-2 transition-all ${
                        isCurrent
                          ? "bg-[#D65A2C] border border-[#F7B38E] shadow-lg shadow-[#D65A2C]/25 ring-2 ring-[#F7B38E]/50"
                          : "bg-[#2B1146] border border-[#4C2F65] hover:border-[#6F4E90]"
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white">
                        {renderLucideIcon(stage.iconName, "w-4 h-4 text-white")}
                      </div>
                      <span className="text-xs font-semibold text-white whitespace-pre-line leading-tight">
                        {stage.name}
                      </span>
                      {isCurrent && (
                        <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-white bg-black/25 px-2 py-0.5 rounded-full mt-0.5">
                          Reported here
                        </span>
                      )}
                    </div>

                    {/* Chevron Connector */}
                    {idx < LIFECYCLE_STAGES.length - 1 && (
                      <div className="shrink-0 text-[#6F4E90]">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Capability Separations (2 Cards) */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-[#4C2F65] bg-[#2B1146]/90 backdrop-blur-xs p-6 space-y-3">
              <h3 className="text-lg font-bold text-white font-['Inter',sans-serif]">
                Separate capability states
              </h3>
              <p className="text-sm leading-relaxed text-[#D9D0DF]">
                Upstream determination and obligations, E-Invoicing/CTC, managed operations, reconciliation and evidence are not inherited from a Remittance state. Review their own Coverage pages and governed packs.
              </p>
            </div>

            <div className="rounded-2xl border border-[#4C2F65] bg-[#2B1146]/90 backdrop-blur-xs p-6 space-y-3">
              <h3 className="text-lg font-bold text-white font-['Inter',sans-serif]">
                Advisory AI, never remittance authority
              </h3>
              <p className="text-sm leading-relaxed text-[#D9D0DF]">
                AI may assist research, extraction, investigation and explanation. It is never autonomous remittance authority, a source of law or a monetary decision-maker.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
