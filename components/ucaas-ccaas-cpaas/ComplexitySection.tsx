import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { SectionContainer, Reveal, StaggerGrid, StaggerItem } from "./shared";
import { COMPLEXITY_DATA } from "./ucaas-data";

const COMPLEXITY_CARDS = [
  {
    num: "01",
    title: (
      <>
        Does a UCaaS,<br />
        CCaaS or CPaaS<br />
        label determine tax<br />
        treatment?
      </>
    ),
    description: (
      <>
        No. Service-model, component<br />
        and bundle labels are input context&nbsp;—&nbsp;not<br />
        automatic legal or tax<br />
        classifications. Governed facts<br />
        and approved rules determine<br />
        supported outcomes.
      </>
    ),
  },
  {
    num: "02",
    title: (
      <>
        Does geography<br />
        matter?
      </>
    ),
    description: (
      <>
        Yes, but relevant location, situs and<br />
        jurisdiction logic vary by supported<br />
        context. Keep location facts<br />
        separate from the authority and<br />
        decision they inform.
      </>
    ),
  },
  {
    num: "03",
    title: <>Who is responsible?</>,
    description: (
      <>
        Responsibility comes from governed<br />
        legal-entity, provider, customer,<br />
        partner, relationship and contractual<br />
        facts—not from a product label alone.
      </>
    ),
  },
  {
    num: "04",
    title: (
      <>
        Is tax the only<br />
        obligation?
      </>
    ),
    description: (
      <>
        No. Supported outcomes may<br />
        extend to registrations, reporting,<br />
        filing, invoicing, remittance<br />
        orchestration, reconciliation and<br />
        evidence where capability is ready.
      </>
    ),
  },
];

export default function ComplexitySection() {
  return (
    <SectionContainer className="bg-white py-[45px]">
      <div className="pointer-events-none absolute inset-0 select-none opacity-40 mix-blend-multiply" aria-hidden="true">
        <Image
          src="/ucaas-ccaas-cpaas/tech-pattern.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{COMPLEXITY_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
              Cloud communications bundles can be simple to buy<br className="hidden sm:inline" />
              and complex to classify, attribute and govern fiscally.
            </h2>
          </div>
        </Reveal>

        <StaggerGrid className="sm:grid-cols-2 lg:grid-cols-4">
          {COMPLEXITY_CARDS.map((card) => (
            <StaggerItem key={card.num}>
              <div className="flex h-full min-h-[310px] flex-col gap-3.5 rounded-2xl bg-white p-5 outline outline-1 -outline-offset-1 outline-zinc-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]">
                <span className="font-mono text-xs font-semibold text-[#D65A2C]">{card.num}</span>
                <h3 className="text-lg sm:text-xl font-bold leading-[1.25] tracking-tight text-[#18141B]">{card.title}</h3>
                <p className="text-[14px] sm:text-[15px] leading-[1.45] text-[#78716C]">{card.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal delay={0.08}>
          <div className="flex items-center gap-3 rounded-[10px] bg-[#F7E9DF] px-4 py-3.5 border border-[#E9CABB]">
            <ShieldCheck className="size-4 shrink-0 text-[#D65A2C]" strokeWidth={1.8} aria-hidden="true" />
            <p className="text-xs font-semibold leading-5 text-[#18141B]">{COMPLEXITY_DATA.guardrail}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
