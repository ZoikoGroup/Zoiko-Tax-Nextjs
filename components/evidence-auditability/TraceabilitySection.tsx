"use client";

import React from "react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { TRACEABILITY_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function TraceabilitySection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/evidence-auditability/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={TRACEABILITY_DATA.eyebrow}
          title={TRACEABILITY_DATA.title}
          description={TRACEABILITY_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 rounded-3xl bg-[#1D033B] p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-base font-bold text-white">{TRACEABILITY_DATA.trackerTitle}</h3>
            <div className="flex flex-wrap gap-2">
              {TRACEABILITY_DATA.tabs.map((tab, i) => (
                <span
                  key={tab}
                  className={clsx(
                    "rounded-md border border-white/15 px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap",
                    i === 0 ? "bg-[#D65A2C]" : "bg-white/10"
                  )}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-4">
            {TRACEABILITY_DATA.nodes.map((node, i) => (
              <React.Fragment key={node.label}>
                <div className="flex-1 rounded-xl border border-white/[0.16] bg-[#260047] p-4 space-y-2">
                  <span className="text-[11px] font-bold uppercase text-[#F4A261]">{node.label}</span>
                  <p className="text-sm font-semibold text-white">{node.value}</p>
                  <span className="inline-block rounded-full bg-[#301153] px-2 py-1 text-[10px] text-[#D9D0DF]">
                    {node.tag}
                  </span>
                </div>
                {i < TRACEABILITY_DATA.nodes.length - 1 && (
                  <ArrowRight className="hidden lg:block h-4 w-4 shrink-0 self-center text-white/60" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
