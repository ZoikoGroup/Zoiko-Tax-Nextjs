import React from "react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { FAQ_DATA, IMAGES } from "./voice-data";

export default function FAQSection() {
  return (
    <SectionContainer id="faq" className="bg-white" bgImage={IMAGES.faq}>
      <Reveal>
        <SectionHeader data={FAQ_DATA} />
      </Reveal>
      <StaggerGroup className="mt-8 flex flex-col sm:mt-12">
        {FAQ_DATA.items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex flex-col gap-2 border-b border-[#D8CEDD] py-5">
              <h3 className="text-base font-bold text-[#18141B] sm:text-lg">{item.title}</h3>
              <p className="text-sm leading-5 text-[#5F5862]">{item.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
