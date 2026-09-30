import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Guardrail, SectionContainer, MonoPill, Reveal } from "./shared";
import { COVERAGE_DATA } from "./ucaas-data";

export default function CoverageSection() {
  return (
    <SectionContainer id="coverage" className="relative bg-white py-[45px]">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 select-none opacity-[0.15] mix-blend-multiply" aria-hidden="true">
        <Image
          src="/ucaas-ccaas-cpaas/tech-pattern.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-10">
        <Reveal>
          <div className="flex w-full flex-col gap-4">
            <span className="text-sm font-bold uppercase tracking-wider text-[#D65A2C]">{COVERAGE_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
              Relevant to UCaaS, CCaaS & CPaaS.<br className="hidden lg:inline" />
              Explicit about what is currently live.
            </h2>
            <p className="w-full text-base leading-[1.6] text-[#78716C] sm:text-lg lg:text-[1.125rem] lg:leading-[1.75rem]">
              Coverage answers where and for which capabilities—not a global yes/no support claim. Readiness is evaluated by jurisdiction,<br className="hidden lg:inline" />
              capability, operating mode and governed pack state.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="flex flex-col gap-8 rounded-3xl bg-white p-6 outline outline-1 -outline-offset-1 outline-zinc-300 shadow-sm sm:p-8 lg:p-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-bold tracking-tight text-[#18141B]">{COVERAGE_DATA.legendTitle}</h3>
                <p className="text-[13px] text-[#78716C]">{COVERAGE_DATA.legendNote}</p>
              </div>
              <Link
                href={COVERAGE_DATA.action.href}
                className="inline-flex h-[42px] shrink-0 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-5 text-[13px] font-bold text-[#18141B] shadow-sm transition-all hover:bg-zinc-50 active:scale-95"
              >
                {COVERAGE_DATA.action.label} <span className="text-[15px] leading-none">↗</span>
              </Link>
            </div>

            <div className="flex flex-wrap content-start items-start gap-x-3 gap-y-3">
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
