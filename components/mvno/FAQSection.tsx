import React from "react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { FAQ_DATA, IMAGES } from "./mvno-data";

export default function FAQSection() {
  return (
    <SectionContainer id="faq" className="bg-white" bgImage={IMAGES.faq}>
      <Reveal>
        <SectionHeader eyebrow={FAQ_DATA.eyebrow} title={FAQ_DATA.title} />
      </Reveal>
      <StaggerGroup className="mt-10 flex flex-col gap-4">
        {FAQ_DATA.items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex flex-col gap-2 rounded-xl border border-[#D8CEDD] bg-white p-5 transition-colors hover:bg-[#FAF3FF]/60">
              <h3 className="text-base font-bold text-[#18141B]">{item.title}</h3>
              <p className="text-sm leading-6 text-[#665F69]">{item.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
