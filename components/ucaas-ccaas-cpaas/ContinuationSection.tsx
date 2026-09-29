import React from "react";
import { ArrowLink, Guardrail, SectionContainer, Reveal, StaggerGrid, StaggerItem } from "./shared";
import { CONTINUATION_DATA } from "./ucaas-data";

export default function ContinuationSection() {
  return (
    <SectionContainer className="bg-white lg:py-24">
      <div className="flex flex-col gap-10">
        <Reveal>
          <div className="flex max-w-[980px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{CONTINUATION_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {CONTINUATION_DATA.title}
            </h2>
          </div>
        </Reveal>

        <StaggerGrid className="sm:grid-cols-2 lg:grid-cols-3">
          {CONTINUATION_DATA.cards.map((card) => (
            <StaggerItem key={card.num}>
              <div className="flex h-full min-h-48 flex-col gap-3.5 rounded-2xl bg-white p-6 outline outline-1 -outline-offset-1 outline-zinc-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs font-semibold text-[#D65A2C]">{card.num}</span>
                  <card.icon className="size-5 shrink-0 text-violet-950" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold leading-7 text-[#18141B]">{card.title}</h3>
                <p className="text-base leading-6 text-[#78716C]">{card.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal delay={0.08}>
          <Guardrail>{CONTINUATION_DATA.guardrail}</Guardrail>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-7">
            <ArrowLink label="Explore Platform →" href="/platform-overview" />
            <ArrowLink label="View Current Coverage →" href="#coverage" />
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
