import React from "react";
import { Check } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { EVIDENCE_DATA, IMAGES } from "./iot-m2m-satellite-data";

export default function EvidenceSection() {
  return (
    <SectionContainer className="bg-[#1D033B]" bgImage={IMAGES.evidence}>
      <Reveal>
        <SectionHeader
          dark
          eyebrow={EVIDENCE_DATA.eyebrow}
          title={EVIDENCE_DATA.title}
          description={EVIDENCE_DATA.description}
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_500px] lg:gap-10">
        <Reveal delay={0.08}>
          <div className="flex flex-col gap-6">
            {EVIDENCE_DATA.points.map((point) => (
              <div key={point.title} className="flex flex-col gap-4">
                <h3 className="text-lg font-bold text-white">{point.title}</h3>
                <p className="text-sm leading-6 text-[#E5E1EA]">{point.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="text-base font-bold uppercase text-white">{EVIDENCE_DATA.record.title}</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {EVIDENCE_DATA.record.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#E5E1EA]">
                  <Check className="size-4 shrink-0 text-[#D65A2C]" strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
