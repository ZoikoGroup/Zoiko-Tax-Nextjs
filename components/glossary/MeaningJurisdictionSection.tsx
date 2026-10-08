"use client";

import React from "react";
import Image from "next/image";
import { MEANING_COMPARISON_DATA as M, JURISDICTION_DATA as J } from "./glossary-data";
import { SectionContainer, Reveal } from "./shared";

export default function MeaningJurisdictionSection() {
  return (
    <>
      <SectionContainer className="bg-white relative">
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: "url(/glossary/pattern-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-[#AC4F25]">{M.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{M.title}</h2>
              <p className="text-base leading-[1.6] text-[#665F69]">{M.description}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {M.cards.map((card, i) => (
              <Reveal key={card.title} delay={0.04 * i}>
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4">
                  <span className="text-xs font-bold text-[#AC4F25]">{card.eyebrow}</span>
                  <h3 className="text-xl sm:text-2xl font-bold leading-[1.15] text-[#18141B]">{card.title}</h3>
                  <p className="text-base leading-[1.6] text-[#665F69]">{card.description}</p>
                  <p className="text-[13px] font-medium text-[#AC4F25]">{card.requirement}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#18141B]">{M.ambiguity.title}</h3>
              <p className="text-base leading-[1.6] text-[#665F69]">{M.ambiguity.description}</p>
            </div>
          </Reveal>
        </div>
      </SectionContainer>

      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/glossary/jurisdiction-bg.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[rgba(48,17,83,0.84)]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-18 md:py-24 flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-[#F4A261]">{J.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-white">{J.title}</h2>
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{J.description}</p>
            </div>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            <Reveal delay={0.06} className="w-full lg:w-[420px] shrink-0">
              <div className="flex flex-col gap-5">
                <h3 className="text-2xl sm:text-[28px] font-bold leading-[1.15] text-white">{J.boundary.title}</h3>
                {J.boundary.paragraphs.map((p) => (
                  <p key={p} className="text-base leading-[1.6] text-[#D9D0DF]">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex-1 min-w-0">
              <div className="rounded-[26px] border border-white/20 bg-white/[0.03] p-7 sm:p-8 flex flex-col gap-6">
                <span className="text-xs font-bold text-[#F4A261]">{J.specimen.label}</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {J.specimen.fields.map((f) => (
                    <div key={f.label} className="flex flex-col gap-1.5">
                      <span className="text-[13px] font-semibold text-[#F4A261]">{f.label}</span>
                      <span className="text-base leading-[1.6] text-[#D9D0DF]">{f.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-[1.6] text-[#D9D0DF]">{J.specimen.footnote}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
