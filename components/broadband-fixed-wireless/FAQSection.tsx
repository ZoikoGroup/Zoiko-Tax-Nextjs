import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { FAQ_DATA, IMAGES } from "./broadband-data";

export default function FAQSection() {
  return (
    <SectionContainer id="faq" className="bg-white" bgImage={IMAGES.faq}>
      <Reveal>
        <SectionHeader eyebrow={FAQ_DATA.eyebrow} title={FAQ_DATA.title} />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10 divide-y divide-[#D8CEDD] overflow-hidden rounded-2xl border border-[#D8CEDD] bg-white">
          {FAQ_DATA.items.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 px-5 py-5 transition-colors hover:bg-[#FAF3FF]/60 sm:px-5">
              <h3 className="text-base font-semibold text-[#18141B]">{item.title}</h3>
              <p className="text-sm leading-6 text-[#665F69]">{item.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionContainer>
  );
}
