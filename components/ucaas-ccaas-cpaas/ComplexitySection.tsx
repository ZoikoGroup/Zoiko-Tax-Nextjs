import React from "react";
import { TriangleAlert } from "lucide-react";
import { SectionContainer, Reveal, StaggerGrid, StaggerItem } from "./shared";
import { COMPLEXITY_DATA } from "./ucaas-data";

export default function ComplexitySection() {
  return (
    <SectionContainer className="bg-white lg:py-24">
      <div className="flex flex-col gap-10">
        <Reveal>
          <div className="flex max-w-[980px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{COMPLEXITY_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {COMPLEXITY_DATA.title}
            </h2>
          </div>
        </Reveal>

        <StaggerGrid className="sm:grid-cols-2 lg:grid-cols-4">
          {COMPLEXITY_DATA.cards.map((card) => (
            <StaggerItem key={card.num}>
              <div className="flex h-full min-h-64 flex-col gap-3.5 rounded-2xl bg-white p-6 outline outline-1 -outline-offset-1 outline-zinc-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]">
                <span className="font-mono text-xs font-semibold text-[#D65A2C]">{card.num}</span>
                <h3 className="text-xl font-bold leading-6 text-[#18141B]">{card.title}</h3>
                <p className="text-base leading-6 text-[#78716C]">{card.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal delay={0.08}>
          <div className="flex items-center gap-3 rounded-[10px] bg-[#FEF2F2] px-4 py-3.5 outline outline-1 -outline-offset-1 outline-[#FECACA]">
            <TriangleAlert className="size-4 shrink-0 text-[#D65A2C]" strokeWidth={1.8} aria-hidden="true" />
            <p className="text-xs font-semibold leading-5 text-[#18141B]">{COMPLEXITY_DATA.guardrail}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
