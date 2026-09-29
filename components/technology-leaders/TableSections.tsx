import React from "react";
import { SectionContainer, SectionHeader, Badge, Reveal } from "./shared";
import { COMPARISON_DATA, IMAGES, PROOF_DATA } from "./tech-data";

export function ComparisonSection() {
  return (
    <SectionContainer className="bg-[#1D033B]" bgImage={IMAGES.comparison}>
      <Reveal>
        <SectionHeader data={COMPARISON_DATA} dark />
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="mt-10 flex flex-col gap-px overflow-hidden rounded-xl bg-white/10 lg:rounded-none">
          {COMPARISON_DATA.rows.map((row) => (
            <li
              key={row.layer}
              className="grid grid-cols-1 gap-2 bg-[#1D033B] p-5 transition-colors hover:bg-[#25084A] md:grid-cols-2 md:gap-x-6 lg:grid-cols-[12rem_minmax(0,1fr)_11rem_minmax(0,1fr)] lg:items-center"
            >
              <span className="text-base font-bold text-[#F4A261]">{row.layer}</span>
              <span className="text-sm text-[#D8CEDD]">{row.event}</span>
              <span className="inline-flex justify-self-start whitespace-nowrap rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase text-[#D8CEDD]">
                {row.state}
              </span>
              <span className="text-sm text-white">{row.meaning}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </SectionContainer>
  );
}

export function ProofSection() {
  const { row, columns } = PROOF_DATA;
  const values = [row.id, row.mode, row.domain];

  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader data={PROOF_DATA} />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10 rounded-[20px] border border-[#D8CEDD] bg-white p-5 sm:p-8">
          <span className="font-mono text-xs uppercase text-[#D65A2C]">{PROOF_DATA.caption}</span>
          <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
            {columns.map((column, idx) => (
              <div key={column} className="flex flex-col gap-2 md:gap-0">
                <dt className="text-xs font-semibold uppercase text-[#5F5862] md:border-b md:border-[#D8CEDD] md:pb-3">
                  {column}
                </dt>
                <dd className="text-sm text-[#18141B] md:pt-6">
                  {idx === 3 ? (
                    <Badge text={row.status} tone="warning" />
                  ) : (
                    <span className={idx === 0 ? "font-mono" : undefined}>{values[idx]}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
