import React from "react";
import Image from "next/image";
import { ArrowLink, SectionContainer, Reveal, StaggerGrid, StaggerItem } from "./shared";
import { DETERMINATION_CARDS, DETERMINATION_DATA } from "./ucaas-data";

export default function DeterminationSection() {
  return (
    <SectionContainer className="bg-white py-[45px]">
      <div className="pointer-events-none absolute inset-0 select-none opacity-20 mix-blend-multiply" aria-hidden="true">
        <Image
          src="/UCaaS, CCaaS & CPaaS/oo.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{DETERMINATION_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
              Determine from governed facts.<br />
              Apply supported evidence controls.
            </h2>
            <p className="max-w-[1180px] text-base leading-6 text-[#78716C] sm:text-lg sm:leading-7">
              Supported deterministic taxes, fees, levies and fiscal charges are determined from governed facts and approved rules. Exemption<br />
              evidence and applicability controls are capability-specific—never a universal taxability, rate or exemption claim.
            </p>
          </div>
        </Reveal>

        <StaggerGrid className="sm:grid-cols-2">
          {DETERMINATION_CARDS.map((card, index) => (
            <StaggerItem key={card.num}>
              <div className="flex h-full min-h-52 flex-col gap-3.5 rounded-2xl bg-white p-6 sm:p-7 border border-zinc-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs font-semibold text-[#D65A2C]">{card.num}</span>
                  <card.icon className="size-5 shrink-0 text-[#63189E]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold leading-7 text-[#18141B]">{card.title}</h3>
                <p className="text-[14px] sm:text-[14.5px] leading-6 tracking-tight text-[#78716C]">
                  {index === 0 ? (
                    <>
                      Connect classified service and bundle context, relevant jurisdiction and<br />
                      responsibility facts to supported deterministic outcomes and preserved rule<br />
                      versions.
                    </>
                  ) : (
                    <>
                      Evaluate supported evidence, scope, dates and applicability controls without<br />
                      treating a certificate or label as a universal conclusion.
                    </>
                  )}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center gap-7">
            <ArrowLink label="Tax Determination →" href="/determination" />
            <ArrowLink label="Exemptions & Certificates →" href="/exemptions-certificates" />
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
