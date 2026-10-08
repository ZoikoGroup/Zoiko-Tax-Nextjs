"use client";

import React from "react";
import { BG, CODE_SAMPLES_DATA } from "./api-reference-data";
import { ICONS, Reveal, SectionContainer, SectionHeader } from "./shared";

export default function CodeSamplesSection() {
  const { specimen } = CODE_SAMPLES_DATA;

  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{ backgroundImage: `url('${BG.codeSamples}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            eyebrow={CODE_SAMPLES_DATA.eyebrow}
            title={CODE_SAMPLES_DATA.title}
            description={CODE_SAMPLES_DATA.description}
          />
        </Reveal>

        <Reveal delay={0.04}>
          <figure className="w-full rounded-3xl bg-[#160427] p-6 sm:p-8 flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <figcaption className="text-xs font-bold uppercase text-[#F4A261]">{specimen.label}</figcaption>
              <span className="rounded-lg bg-[#301153] px-3 py-1.5 text-xs font-semibold text-[#D9D0DF]">
                {specimen.badge}
              </span>
            </div>
            <div className="grid gap-x-10 md:grid-cols-2">
              {specimen.columns.map((col, i) => (
                <dl key={i} className="flex flex-col">
                  {col.map((f) => (
                    <div key={f.label} className="py-4 border-b border-[#4A3A5C] flex flex-col gap-2">
                      <dt className="text-sm font-semibold text-[#F4A261]">{f.label}</dt>
                      <dd className="text-base leading-6 text-[#D9D0DF]">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              ))}
            </div>
            <p className="text-sm leading-6 text-[#D9D0DF]">{specimen.note}</p>
          </figure>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {CODE_SAMPLES_DATA.cards.map((card, idx) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.title} delay={0.04 * idx} className="h-full">
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#D65A2C]" strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="text-xl leading-7 text-[#18141B]">{card.title}</h3>
                  <p className="text-base leading-6 text-[#665F69]">{card.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
