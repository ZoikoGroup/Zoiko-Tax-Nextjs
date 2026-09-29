import React from "react";
import { Button, Guardrail, SectionContainer, MonoPill, Reveal } from "./shared";
import { COVERAGE_DATA } from "./ucaas-data";

export default function CoverageSection() {
  return (
    <SectionContainer id="coverage" className="bg-white lg:py-24">
      <div className="flex flex-col gap-9">
        <Reveal>
          <div className="flex max-w-[980px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{COVERAGE_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {COVERAGE_DATA.title}
            </h2>
            <p className="text-lg leading-7 text-[#78716C] sm:text-xl sm:leading-8">{COVERAGE_DATA.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 outline outline-1 -outline-offset-1 outline-zinc-300 shadow-sm sm:p-7">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-bold text-[#18141B]">{COVERAGE_DATA.legendTitle}</h3>
                <p className="text-xs text-[#78716C]">{COVERAGE_DATA.legendNote}</p>
              </div>
              <Button action={COVERAGE_DATA.action} className="shrink-0" />
            </div>

            <div className="flex flex-wrap content-start items-start gap-2.5">
              {COVERAGE_DATA.states.map((state) => (
                <MonoPill key={state.label} label={state.label} highlight={state.highlight} />
              ))}
            </div>

            <Guardrail>{COVERAGE_DATA.guardrail}</Guardrail>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
