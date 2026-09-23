import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { trustPrinciples } from "./determination-data";

export default function TrustSection() {
  return (
    <SectionContainer className="bg-[#FAF8FA]">
      <Reveal>
        <SectionHeader
          eyebrow="OPERATIONAL CONTROLS"
          title="Core Trust Principles"
          description="Our baseline infrastructure controls are verified through rigid architectural constraints, not generic badges."
          className="max-w-3xl"
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {trustPrinciples.map((item, idx) => (
          <Reveal key={item.title} delay={0.08 * idx}>
            <div className="flex h-full flex-col rounded-2xl border border-[#EEF1F6] bg-white p-7 sm:p-8 shadow-[0_4px_12px_0_rgba(0,0,0,0.03)] transition-all hover:border-[#D65A2C]/30 hover:shadow-md">
              <h3 className="text-lg font-bold text-[#18141B]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#535055]">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
