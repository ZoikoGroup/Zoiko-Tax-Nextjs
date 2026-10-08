import React from "react";
import Image from "next/image";
import { ArrowLink, Guardrail, SectionContainer, Reveal, StaggerGrid, StaggerItem } from "./shared";
import { CONTINUATION_DATA } from "./ucaas-data";

export default function ContinuationSection() {
  return (
    <SectionContainer className="bg-white py-[45px]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-10">
        <Reveal>
          <div className="flex w-full max-w-[1280px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{CONTINUATION_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
              Carry governed outcomes into invoicing,<br />
              remittance orchestration and reconciliation.
            </h2>
          </div>
        </Reveal>

        <StaggerGrid className="sm:grid-cols-2 lg:grid-cols-3">
          {CONTINUATION_DATA.cards.map((card, index) => (
            <StaggerItem key={card.num}>
              <div className="flex h-full min-h-64 flex-col gap-4 rounded-3xl bg-white p-6 border border-[#E8E4EC] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)] sm:p-7">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs font-semibold text-[#D65A2C]">{card.num}</span>
                  <card.icon className="size-5 shrink-0 text-[#331254]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold leading-7 text-[#18141B]">{card.title}</h3>
                <p className="text-[14px] sm:text-[14.5px] leading-6 tracking-tight text-[#78716C]">
                  {index === 0 && (
                    <>
                      Connect supported invoice and clearance<br className="hidden sm:inline" />
                      workflows where required and capability-ready. Not<br className="hidden sm:inline" />
                      every UCaaS, CCaaS or CPaaS market requires<br className="hidden sm:inline" />
                      CTC.
                    </>
                  )}
                  {index === 1 && (
                    <>
                      Coordinate supported approvals, instructions and<br className="hidden sm:inline" />
                      evidence. Remittance does not imply fund custody.
                    </>
                  )}
                  {index === 2 && (
                    <>
                      Link transaction, tax, invoice, filing, remittance and<br className="hidden sm:inline" />
                      accounting outcomes. A match does not prove legal<br className="hidden sm:inline" />
                      correctness.
                    </>
                  )}
                </p>
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
