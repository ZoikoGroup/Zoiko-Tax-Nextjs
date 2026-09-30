import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { SectionContainer, Reveal, StaggerGrid, StaggerItem } from "./shared";
import { CONTEXT_AUTHORITY, CONTEXT_MODEL_DATA, ICONS } from "./ucaas-data";

export default function ContextModelSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] py-[45px]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-9">
        <Reveal>
          <div className="flex w-full flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{CONTEXT_MODEL_DATA.eyebrow}</span>
            <h2 className="w-full text-2xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-3xl lg:text-[2.5rem] whitespace-nowrap">
              Model the context before governing the conclusion.
            </h2>
            <p className="w-full max-w-[1280px] text-base leading-6 text-[#665F69] sm:text-lg sm:leading-7">
              Conceptual design vocabulary—not an exact production schema. Neutral labels illustrate the categories<br />
              of facts that may inform a supported decision.
            </p>
          </div>
        </Reveal>

        {/* Big white wrapper card around all 8 cards */}
        <Reveal delay={0.06}>
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#E8E4EC] shadow-sm">
            <StaggerGrid className="grid-flow-dense sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ICONS.contextCards.map((card) => (
                <StaggerItem key={card.num} className="h-full">
                  <div className="flex h-full min-h-[140px] flex-col justify-start gap-1.5 rounded-xl bg-[#FAF3FF] p-5 border border-[#E8E4EC] transition-all hover:shadow-sm">
                    <span className="font-mono text-xs font-bold text-[#D65A2C]">{card.num}</span>
                    <h3 className="mt-1 text-sm sm:text-base font-bold leading-5 tracking-tight text-[#18141B]">{card.title}</h3>
                    <p className="text-[11.5px] sm:text-xs leading-4 tracking-tight text-[#665F69]">{card.description}</p>
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem className="h-full">
                <div className="flex h-full min-h-[140px] flex-col justify-start gap-1.5 rounded-xl bg-[#210245] p-5 shadow-lg">
                  <Image
                    src="/UCaaS, CCaaS & CPaaS/o.png"
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 shrink-0"
                  />
                  <h3 className="mt-1 text-sm sm:text-base font-bold leading-5 tracking-tight text-white">{CONTEXT_AUTHORITY.title}</h3>
                  <p className="text-[11.5px] sm:text-xs leading-4 tracking-tight text-zinc-300">{CONTEXT_AUTHORITY.description}</p>
                </div>
              </StaggerItem>
            </StaggerGrid>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex items-center gap-3 rounded-[10px] bg-[#F7E9DF] px-4 py-3.5 border border-[#E9CABB]">
            <ShieldCheck className="size-4 shrink-0 text-[#D65A2C]" strokeWidth={1.8} aria-hidden="true" />
            <p className="text-xs font-semibold leading-5 text-[#18141B]">AI assists. Approved rules decide. Evidence proves.</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
