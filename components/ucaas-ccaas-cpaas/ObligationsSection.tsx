import React from "react";
import Image from "next/image";
import { ArrowLink, SectionContainer, Reveal, StaggerGrid, StaggerItem } from "./shared";
import { OBLIGATIONS_CARDS, OBLIGATIONS_DATA } from "./ucaas-data";

export default function ObligationsSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] py-[45px]">
      <div className="pointer-events-none absolute inset-0 select-none opacity-20 mix-blend-multiply" aria-hidden="true">
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
          <div className="flex w-full max-w-[1280px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{OBLIGATIONS_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
              Connect supported obligation<br />
              states to controlled workflows.
            </h2>
            <p className="w-full max-w-[1280px] text-base leading-6 text-[#78716C] sm:text-lg sm:leading-7 lg:text-[1.125rem] lg:leading-[1.75rem]">
              Readiness is explicit. Registrations, reporting and submission workflows are available only where the current capability and governed<br />
              market pack support them.
            </p>
          </div>
        </Reveal>

        <StaggerGrid className="sm:grid-cols-2">
          {OBLIGATIONS_CARDS.map((card, index) => (
            <StaggerItem key={card.title}>
              <div className="flex h-full min-h-64 flex-col justify-between gap-4 rounded-3xl bg-white p-6 border border-[#E8E4EC] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)] sm:p-7">
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center justify-between">
                    <card.icon className="size-6 shrink-0 text-[#D65A2C]" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#18141B]">{card.title}</h3>
                  <p className="text-[14px] sm:text-[14.5px] leading-6 tracking-tight text-[#78716C]">
                    {index === 0 ? (
                      <>
                        Represent supported registration, reporting and obligation states with effective<br className="hidden sm:inline" />
                        dates, ownership, authority context, review state and evidence references. No<br className="hidden sm:inline" />
                        automatic liability conclusion.
                      </>
                    ) : (
                      <>
                        Prepare, review and submit supported workflows only where the current<br className="hidden sm:inline" />
                        capability and pack are ready. Every transition remains controlled and<br className="hidden sm:inline" />
                        evidenced; filing is not assumed universally.
                      </>
                    )}
                  </p>
                </div>
                <ArrowLink label={card.link.endsWith("→") ? card.link : `${card.link} →`} href={card.href} />
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </SectionContainer>
  );
}
