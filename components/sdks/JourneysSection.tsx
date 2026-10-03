"use client";

import React from "react";
import { Info, Workflow } from "lucide-react";
import { BG, JOURNEYS_DATA } from "./sdks-data";
import { SectionContainer, SectionHeader, Reveal, TextLink, IllustrativeBanner } from "./shared";

export default function JourneysSection() {
  return (
    <SectionContainer
      className="bg-white"
      style={{ backgroundImage: `url('${BG.related}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeader
            eyebrow={JOURNEYS_DATA.eyebrow}
            title={JOURNEYS_DATA.title}
            description={JOURNEYS_DATA.description}
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {JOURNEYS_DATA.journeys.map((j, idx) => (
            <Reveal key={j.title} delay={0.05 * idx} className="h-full">
              <div className="h-full rounded-2xl bg-[#F1E8F8] p-6 flex flex-col gap-4">
                <Workflow className="h-7 w-7 text-[#D65A2C]" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{j.title}</h3>
                <p className="text-[15px] leading-6 text-[#665F69]">{j.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-3xl border border-[#D8CEDD] bg-[#F1E8F8] p-5 sm:p-7 flex flex-col gap-4">
            <IllustrativeBanner />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#18141B]">{JOURNEYS_DATA.statesTitle}</h3>
            <p className="text-sm leading-5 text-[#665F69]">{JOURNEYS_DATA.statesDescription}</p>
            <div className="grid gap-4 md:grid-cols-2 pt-2">
              {JOURNEYS_DATA.states.map((s) => (
                <div key={s.title} className="rounded-xl border border-[#D8CEDD] bg-white p-5 flex items-start gap-3.5">
                  <Info className="h-5 w-5 shrink-0 text-[#D65A2C] mt-0.5" aria-hidden="true" />
                  <div className="flex flex-col gap-2">
                    <p className="text-base font-semibold text-[#18141B]">{s.title}</p>
                    <p className="text-sm leading-[1.6] text-[#665F69]">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {JOURNEYS_DATA.links.map((l) => (
              <TextLink key={l.label} href={l.href}>
                {l.label}
              </TextLink>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
