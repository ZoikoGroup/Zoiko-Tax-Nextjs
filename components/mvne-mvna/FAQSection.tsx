import React from "react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { FAQ_DATA, IMAGES } from "./mvne-mvna-data";

export default function FAQSection() {
  return (
    <SectionContainer id="faq" className="bg-white" bgImage={IMAGES.faq}>
      <Reveal>
        <SectionHeader title={FAQ_DATA.title} />
      </Reveal>
      <StaggerGroup className="mt-8 flex flex-col gap-6 sm:mt-10">
        {FAQ_DATA.items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex flex-col gap-2 border-b border-[#D8CEDD] pb-5">
              <h3 className="text-base font-bold text-[#18141B] sm:text-lg">{item.title}</h3>
              <p className="text-sm leading-5 text-[#665F69]">{item.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
