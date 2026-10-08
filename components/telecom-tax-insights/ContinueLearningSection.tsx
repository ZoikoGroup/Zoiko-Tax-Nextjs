"use client";

import React from "react";
import { CONTINUE_LEARNING_DATA as C } from "./telecom-tax-insights-data";
import { SectionContainer, Reveal } from "./shared";

export default function ContinueLearningSection() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {C.destinations.map((dest, i) => (
            <Reveal key={dest.title} delay={0.03 * i}>
              <a href={dest.route.path} className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4 hover:border-[#BF6735]/40 transition-colors">
                <h3 className="text-xl sm:text-[22px] font-medium leading-[1.25] text-[#18141B]">{dest.title}</h3>
                <p className="text-sm leading-[1.6] text-[#665F69] flex-1">{dest.description}</p>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-semibold text-[#BF6735]">{dest.route.label}</span>
                  <span className="text-xs text-[#665F69]">{dest.route.path}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
