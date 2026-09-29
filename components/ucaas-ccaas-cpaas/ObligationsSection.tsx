import React from "react";
import { ArrowLink, SectionContainer, Reveal, StaggerGrid, StaggerItem } from "./shared";
import { OBLIGATIONS_CARDS, OBLIGATIONS_DATA } from "./ucaas-data";

export default function ObligationsSection() {
  return (
    <SectionContainer className="bg-white lg:py-24">
      <div className="flex flex-col gap-10">
        <Reveal>
          <div className="flex max-w-[980px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{OBLIGATIONS_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {OBLIGATIONS_DATA.title}
            </h2>
            <p className="text-lg leading-7 text-[#78716C] sm:text-xl sm:leading-8">{OBLIGATIONS_DATA.description}</p>
          </div>
        </Reveal>

        <StaggerGrid className="sm:grid-cols-2">
          {OBLIGATIONS_CARDS.map((card) => (
            <StaggerItem key={card.title}>
              <div className="flex h-full min-h-64 flex-col gap-4 rounded-3xl bg-white p-6 outline outline-1 -outline-offset-1 outline-zinc-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)] sm:p-7">
                <card.icon className="size-6 shrink-0 text-[#D65A2C]" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-2xl font-bold text-[#18141B]">{card.title}</h3>
                <p className="flex-1 text-base leading-6 text-[#78716C]">{card.description}</p>
                <ArrowLink label={card.link} href={card.href} />
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </SectionContainer>
  );
}
