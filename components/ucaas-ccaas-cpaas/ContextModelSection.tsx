import React from "react";
import { Sun } from "lucide-react";
import { SectionContainer, Guardrail, Reveal, StaggerGrid, StaggerItem } from "./shared";
import { CONTEXT_AUTHORITY, CONTEXT_MODEL_DATA, ICONS } from "./ucaas-data";

export default function ContextModelSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] lg:py-24">
      <div className="flex flex-col gap-9">
        <Reveal>
          <div className="flex max-w-[980px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{CONTEXT_MODEL_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {CONTEXT_MODEL_DATA.title}
            </h2>
            <p className="text-lg leading-7 text-[#78716C] sm:text-xl sm:leading-8">{CONTEXT_MODEL_DATA.description}</p>
          </div>
        </Reveal>

        {/* Seven fact cards + the approved decision authority card */}
        <StaggerGrid className="grid-flow-dense sm:grid-cols-2 lg:grid-cols-4">
          {ICONS.contextCards.map((card) => (
            <StaggerItem key={card.num} className="h-full">
              <div className="flex h-full min-h-32 flex-col gap-2.5 rounded-[10px] bg-[#FDF2F8] p-4 outline outline-1 -outline-offset-1 outline-gray-200">
                <span className="font-mono text-xs font-bold text-[#D65A2C]">{card.num}</span>
                <h3 className="text-base font-bold text-[#18141B]">{card.title}</h3>
                <p className="text-xs leading-4 text-[#78716C]">{card.description}</p>
              </div>
            </StaggerItem>
          ))}
          <StaggerItem className="h-full">
            <div className="flex h-full min-h-32 flex-col gap-2.5 rounded-[10px] bg-violet-950 p-4 shadow-lg">
              <Sun className="size-5 shrink-0 text-orange-300" strokeWidth={1.8} aria-hidden="true" />
              <h3 className="text-base font-bold text-white">{CONTEXT_AUTHORITY.title}</h3>
              <p className="text-xs leading-4 text-zinc-300">{CONTEXT_AUTHORITY.description}</p>
            </div>
          </StaggerItem>
        </StaggerGrid>

        <Reveal delay={0.08}>
          <Guardrail>AI assists. Approved rules decide. Evidence proves.</Guardrail>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
