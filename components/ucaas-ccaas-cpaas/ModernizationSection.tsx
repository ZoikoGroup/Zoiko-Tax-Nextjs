import React from "react";
import { ChevronRight } from "lucide-react";
import { ActionButtons, SectionContainer, Reveal, StaggerGrid, StaggerItem } from "./shared";
import { MODERNIZATION_DATA } from "./ucaas-data";

export default function ModernizationSection() {
  return (
    <SectionContainer className="bg-white lg:py-24">
      <div className="flex flex-col gap-9">
        <Reveal>
          <div className="flex max-w-[980px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{MODERNIZATION_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {MODERNIZATION_DATA.title}
            </h2>
            <p className="text-lg leading-7 text-[#78716C] sm:text-xl sm:leading-8">{MODERNIZATION_DATA.description}</p>
          </div>
        </Reveal>

        <StaggerGrid className="sm:grid-cols-2 lg:grid-cols-5">
          {MODERNIZATION_DATA.paths.map((path) => (
            <StaggerItem key={path.num}>
              <div className="flex h-full min-h-52 flex-col gap-3.5 rounded-2xl bg-white p-6 outline outline-1 -outline-offset-1 outline-zinc-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]">
                <span className="font-mono text-xs font-semibold text-[#D65A2C]">{path.num}</span>
                <h3 className="text-xl font-bold leading-6 text-[#18141B]">{path.title}</h3>
                <p className="text-sm leading-5 text-[#78716C]">{path.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Measured, governed journey stepper */}
        <Reveal delay={0.06}>
          <div className="flex flex-col items-start gap-4 rounded-3xl bg-violet-950 p-6 sm:flex-row sm:items-center sm:gap-4 sm:p-7">
            <h3 className="w-full shrink-0 text-lg font-bold text-white sm:w-56">{MODERNIZATION_DATA.journeyTitle}</h3>
            <div className="flex flex-1 flex-wrap items-center gap-x-6 gap-y-3">
              {MODERNIZATION_DATA.journeySteps.map((step, index) => (
                <div key={step} className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-orange-300">{`0${index + 1}`}</span>
                  <span className="text-xs font-bold text-white">{step}</span>
                  {index < MODERNIZATION_DATA.journeySteps.length - 1 && (
                    <ChevronRight className="size-3.5 text-gray-400" strokeWidth={1.8} aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-xs leading-5 text-[#78716C]">{MODERNIZATION_DATA.footnote}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <ActionButtons actions={MODERNIZATION_DATA.actions} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
