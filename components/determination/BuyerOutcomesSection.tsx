import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { buyerOutcomes } from "./determination-data";

export default function BuyerOutcomesSection() {
  return (
    <SectionContainer className="bg-white">
      <Reveal>
        <SectionHeader
          eyebrow="STRATEGIC IMPACT"
          title="Outcomes built around audit assurance—not artificial ROI"
          description="Focusing on operational resilience and reducing structural compliance risks. We make no guaranteed financial savings claims."
          className="max-w-3xl"
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {buyerOutcomes.map((item, idx) => (
          <Reveal key={item.title} delay={0.1 * idx}>
            <div className="flex h-full flex-col rounded-2xl border border-[#D8CEDD] bg-[#FAF8FA] p-7 sm:p-8 shadow-[0_4px_12px_0_rgba(0,0,0,0.02)] transition-all hover:bg-white hover:border-[#D65A2C]/40 hover:shadow-md">
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
