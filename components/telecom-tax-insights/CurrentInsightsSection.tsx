"use client";

import React from "react";
import { FileText } from "lucide-react";
import { CURRENT_INSIGHTS_DATA as C } from "./telecom-tax-insights-data";
import { SectionContainer, Reveal } from "./shared";

export default function CurrentInsightsSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/telecom-tax-insights/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase text-[#D65A2C]">{C.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{C.title}</h2>
            <p className="text-base sm:text-lg leading-[1.5] text-[#665F69] max-w-[960px]">{C.description}</p>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-6">
          <Reveal className="w-full lg:w-[760px] shrink-0">
            <div className="h-full rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-9 flex flex-col gap-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase text-[#D65A2C]">{C.featured.eyebrow}</span>
                <FileText className="h-7 w-7 text-[#18141B]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl sm:text-[32px] font-bold leading-[1.2] text-[#18141B]">{C.featured.title}</h3>
              <p className="text-base sm:text-[17px] leading-[1.6] text-[#665F69]">{C.featured.description}</p>
              <div className="h-px bg-[#D8CEDD]" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-[#BF6735]">{C.featured.route.label}</span>
                <span className="text-xs text-[#665F69]">{C.featured.route.path}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.04} className="flex-1 min-w-0">
            <div className="h-full rounded-[26px] border border-[#D8CEDD] bg-[#F2EAF7] p-7 sm:p-9 flex flex-col gap-5">
              <span className="text-xs font-bold uppercase text-[#D65A2C]">{C.latest.eyebrow}</span>
              <h3 className="text-xl sm:text-[22px] font-medium leading-[1.25] text-[#18141B]">{C.latest.title}</h3>
              <p className="text-base sm:text-[17px] leading-[1.6] text-[#665F69]">{C.latest.description}</p>
              <p className="text-sm font-semibold text-[#301153]">{C.latest.note}</p>
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-[#BF6735]">{C.latest.route.label}</span>
                <span className="text-xs text-[#665F69]">{C.latest.route.path}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {C.alternatives.map((alt, i) => (
            <Reveal key={alt.title} delay={0.03 * i}>
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4">
                <h4 className="text-xl sm:text-[22px] font-medium leading-[1.25] text-[#18141B]">{alt.title}</h4>
                <p className="text-sm leading-[1.6] text-[#665F69] flex-1">{alt.description}</p>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-semibold text-[#BF6735]">{alt.route.label}</span>
                  <span className="text-xs text-[#665F69]">{alt.route.path}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
