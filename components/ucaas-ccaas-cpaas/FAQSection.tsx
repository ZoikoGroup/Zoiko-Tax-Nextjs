import React from "react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { FAQ_DATA, IMAGES } from "./ucaas-data";

export default function FAQSection() {
  return (
    <SectionContainer id="faq" className="border-b border-[#D8CEDD] bg-white sm:py-24" bgImage={IMAGES.faq}>
      <Reveal>
        <SectionHeader eyebrow={FAQ_DATA.eyebrow} title={FAQ_DATA.title} />
      </Reveal>
      <StaggerGroup className="mt-6 flex flex-col sm:mt-10">
        {FAQ_DATA.items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex flex-col gap-2.5 border-b border-[#D8CEDD] py-5">
              <h3 className="text-base font-semibold text-[#18141B] sm:text-lg">{item.title}</h3>
              <p className="text-sm leading-5 text-[#5F5862]">{item.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
