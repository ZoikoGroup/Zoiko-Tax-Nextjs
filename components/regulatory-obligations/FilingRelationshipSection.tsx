import React from "react";
import { Section, SectionHeading, Reveal } from "./shared";
import { filingRelationship } from "./regulatory-obligations-data";

/** Figma 233:11861 (desktop, flat #faf3ff, no image) / 233:12883 (mobile, on page #faf3ff). */
export default function FilingRelationshipSection() {
  return (
    <Section className="bg-[#faf3ff] py-12 lg:py-[104px]" innerClassName="flex flex-col gap-7 lg:gap-10">
      <Reveal>
        <SectionHeading
          eyebrow={filingRelationship.eyebrow}
          title={filingRelationship.title}
          description={filingRelationship.description}
        />
      </Reveal>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-4">
        {filingRelationship.cards.map((card, idx) => (
          <Reveal key={card.title} delay={0.04 * idx} className="h-full">
            <div className="flex h-full flex-col items-start gap-2 rounded-[12px] border border-[#d8cedd] bg-[#fafbfd] p-4 lg:gap-3 lg:rounded-[16px] lg:p-6">
              <h3 className="text-[15px] font-bold leading-[normal] text-[#18141b] lg:text-[18px]">{card.title}</h3>
              <p className="text-[13px] font-normal leading-[1.4] text-[#535055] lg:leading-[1.5]">{card.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
