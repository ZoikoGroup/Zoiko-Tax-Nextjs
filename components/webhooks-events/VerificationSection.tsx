"use client";

import React from "react";
import { BG, VERIFICATION_DATA } from "./webhooks-events-data";
import { SectionContainer, SectionHeader, Reveal, patternBg } from "./shared";

export default function VerificationSection() {
  return (
    <SectionContainer id="verification" className="bg-[#25024D] scroll-mt-24" style={patternBg(BG.verification)}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            dark
            eyebrow={VERIFICATION_DATA.eyebrow}
            title={VERIFICATION_DATA.title}
            description={VERIFICATION_DATA.description}
          />
        </Reveal>

        <Reveal delay={0.04}>
          <ol className="rounded-3xl border border-[#4C2470] bg-[#160B22]/95 px-5 py-3 sm:p-8">
            {VERIFICATION_DATA.steps.map((step, idx) => (
              <li
                key={step.title}
                className="grid grid-cols-[40px_1fr] gap-x-4 gap-y-2 lg:grid-cols-[40px_minmax(0,320px)_1fr] lg:gap-x-6 border-b border-[#3A3340] py-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6B6475] bg-[#301153] text-sm font-bold text-[#F4A261]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="self-center lg:self-start text-lg leading-7 text-white">{step.title}</p>
                <p className="col-start-2 lg:col-start-auto text-[15px] sm:text-base leading-6 text-[#D9D0DF]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-[#5C4E78] bg-[#301153] p-5 sm:p-6 flex flex-col gap-2">
            <p className="text-base font-bold text-[#F4A261]">{VERIFICATION_DATA.notice.title}</p>
            <p className="text-[15px] sm:text-base leading-6 text-[#D9D0DF]">{VERIFICATION_DATA.notice.description}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
