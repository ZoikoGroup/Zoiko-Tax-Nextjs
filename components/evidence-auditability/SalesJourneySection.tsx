"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { SALES_JOURNEY_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function SalesJourneySection() {
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
        <SectionHeader eyebrow={SALES_JOURNEY_DATA.eyebrow} title={SALES_JOURNEY_DATA.title} />
      </Reveal>

      <div className="mt-6 flex flex-col sm:flex-row items-stretch gap-3">
        {SALES_JOURNEY_DATA.steps.map((step, i) => (
          <React.Fragment key={step.step}>
            <Reveal delay={0.05 * i} className="flex-1">
              <div className="h-full min-h-[120px] rounded-xl border border-[#D8CEDD] bg-white p-4 space-y-2">
                <h3 className="text-sm font-bold text-[#18141B]">{step.step}</h3>
                <p className="text-xs leading-[1.4] text-[#665F69]">{step.description}</p>
              </div>
            </Reveal>
            {i < SALES_JOURNEY_DATA.steps.length - 1 && (
              <ChevronRight className="hidden sm:block h-4 w-4 shrink-0 self-center text-[#D65A2C]" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
