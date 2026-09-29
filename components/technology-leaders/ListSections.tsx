import React from "react";
import Link from "next/link";
import { SectionContainer, SectionHeader, CheckList, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { COVERAGE_DATA, EVIDENCE_DATA, IMAGES, OBSERVABILITY_DATA } from "./tech-data";

export function ObservabilitySection() {
  const { specimen } = OBSERVABILITY_DATA;

  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader data={OBSERVABILITY_DATA} />
      </Reveal>
      <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,500px)] lg:gap-16">
        <Reveal delay={0.08}>
          <CheckList items={OBSERVABILITY_DATA.items} className="gap-5" />
        </Reveal>
        <Reveal delay={0.16}>
          <div className="overflow-x-auto rounded-[20px] bg-[#11042D] p-6 font-mono text-xs leading-5 sm:p-8">
            <p className="uppercase text-[#F4A261]">{specimen.title}</p>
            <pre className="mt-4 text-[#D8CEDD]">
              {"{\n"}
              {specimen.lines.map(([key, value], idx) => (
                <React.Fragment key={key}>
                  {"  "}
                  <span className="text-[#7FD1B9]">&quot;{key}&quot;</span>: {value}
                  {idx < specimen.lines.length - 1 ? ",\n" : "\n"}
                </React.Fragment>
              ))}
              {"}"}
            </pre>
            <p className="mt-3 text-[#D8CEDD]">{specimen.note}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

export function CoverageSection() {
  return (
    <SectionContainer id="coverage" className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader data={COVERAGE_DATA} />
      </Reveal>
      <StaggerGroup className="mt-10 flex flex-wrap gap-3 lg:justify-between">
        {COVERAGE_DATA.states.map((state) => (
          <StaggerItem key={state}>
            <span className="inline-flex rounded-lg border border-[#D8CEDD] bg-white px-6 py-2.5 font-mono text-xs font-bold uppercase text-[#D65A2C] sm:px-10">
              {state}
            </span>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <Reveal delay={0.1}>
        <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5F5862]">
          {COVERAGE_DATA.note}
          <Link
            href={COVERAGE_DATA.link.href}
            className="text-sm font-semibold text-[#D65A2C] underline underline-offset-4 hover:text-[#DD7235]"
          >
            {COVERAGE_DATA.link.label}
          </Link>
        </p>
      </Reveal>
    </SectionContainer>
  );
}

export function EvidenceSection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.evidence}>
      <Reveal>
        <SectionHeader data={EVIDENCE_DATA} />
      </Reveal>
      <Reveal delay={0.1}>
        <CheckList items={EVIDENCE_DATA.items} className="mt-8 grid gap-x-10 gap-y-4 md:grid-cols-2" />
      </Reveal>
    </SectionContainer>
  );
}
