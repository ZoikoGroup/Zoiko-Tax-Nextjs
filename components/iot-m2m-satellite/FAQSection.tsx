import React from "react";
import { SectionContainer, SectionHeader, Card, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { FAQ_DATA, IMAGES } from "./iot-m2m-satellite-data";

export default function FAQSection() {
  return (
    <SectionContainer id="faq" className="bg-white" bgImage={IMAGES.faq}>
      <Reveal>
        <SectionHeader eyebrow={FAQ_DATA.eyebrow} title={FAQ_DATA.title} description={FAQ_DATA.description} />
      </Reveal>
      <StaggerGroup className="mt-12 flex flex-col gap-5">
        {FAQ_DATA.items.map((item) => (
          <StaggerItem key={item.title}>
            <Card className="flex flex-col gap-3 p-6 hover:translate-y-0">
              <h3 className="text-lg font-bold text-[#18141B]">{item.title}</h3>
              <p className="text-sm leading-6 text-[#665F69]">{item.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
