import React from "react";
import Link from "next/link";
import { SectionContainer, Reveal, StaggerGrid, StaggerItem } from "./shared";
import { MODERNIZATION_DATA } from "./ucaas-data";

export default function ModernizationSection() {
  return (
    <SectionContainer className="bg-white py-[45px]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-10">
        <Reveal>
          <div className="flex w-full max-w-[1280px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{MODERNIZATION_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
              {MODERNIZATION_DATA.title}
            </h2>
            <p className="w-full text-base leading-6 text-[#78716C] sm:text-lg sm:leading-7 lg:text-[1.125rem] lg:leading-[1.75rem]">
              {MODERNIZATION_DATA.description}
            </p>
          </div>
        </Reveal>

        <StaggerGrid className="sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {MODERNIZATION_DATA.paths.map((path) => (
            <StaggerItem key={path.num}>
              <div className="flex h-full min-h-[220px] flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm border border-[#E8E4EC] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]">
                <span className="font-mono text-[11px] font-bold text-[#F4A261]">{path.num}</span>
                <h3 className="text-xl font-bold leading-tight text-[#18141B]">{path.title}</h3>
                <p className="text-[13px] leading-[1.45] text-[#78716C]">
                  {path.num === "01" && (
                    <>Use ZoikoTax as the<br />governed decision and<br />evidence path where<br />supported.</>
                  )}
                  {path.num === "02" && (
                    <>Coordinate ZoikoTax with<br />incumbent tax engines and<br />explicit authority<br />boundaries.</>
                  )}
                  {path.num === "03" && (
                    <>Compare non-authoritative<br />shadow outcomes before<br />review and governed<br />cutover.</>
                  )}
                  {path.num === "04" && (
                    <>Embed supported fiscal<br />control into a provider<br />experience with governed<br />contracts.</>
                  )}
                  {path.num === "05" && (
                    <>Combine platform control<br />with supported managed<br />workflows where available.</>
                  )}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Measured, governed journey stepper */}
        <Reveal delay={0.06}>
          <div className="flex flex-col items-center justify-between gap-6 rounded-full bg-[#210245] px-10 py-7 sm:flex-row w-full max-w-[1280px]">
            <h3 className="shrink-0 text-[18px] font-bold leading-[1.3] text-white">
              A measured, governed<br className="hidden sm:inline" />journey
            </h3>
            
            {MODERNIZATION_DATA.journeySteps.map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] font-bold text-[#F4A261]">{`0${index + 1}`}</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white">{step}</span>
                </div>
                {index < MODERNIZATION_DATA.journeySteps.length - 1 && (
                  <span className="text-sm font-light text-white" aria-hidden="true">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="w-full text-[13px] leading-5 text-[#78716C]">
            {MODERNIZATION_DATA.footnote}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/shadow-assurance"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#210245] px-6 text-sm font-semibold text-white transition-all hover:bg-[#310464] hover:shadow-md active:scale-95"
            >
              Explore Shadow Assurance <span className="text-base leading-none">↗</span>
            </Link>
            <Link
              href="/migration-onboarding"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#E8E4EC] bg-white px-6 text-sm font-semibold text-[#18141B] shadow-sm transition-all hover:bg-zinc-50 active:scale-95"
            >
              Migration & Onboarding <span className="text-base leading-none">↗</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
