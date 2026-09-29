import React from "react";
import { SectionContainer, Reveal } from "./shared";
import { FAQ_DATA } from "./ucaas-data";

export default function FAQSection() {
  return (
    <SectionContainer className="bg-white lg:py-24">
      <div className="flex flex-col gap-11">
        <Reveal>
          <div className="flex max-w-[980px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{FAQ_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {FAQ_DATA.title}
            </h2>
            <p className="text-lg leading-7 text-[#78716C] sm:text-xl sm:leading-8">{FAQ_DATA.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="flex flex-col">
            {FAQ_DATA.items.map((item, index) => (
              <div
                key={item.num}
                className={`flex flex-col gap-4 border-b border-zinc-300 py-6 lg:flex-row lg:items-start lg:gap-8 ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <span className="w-11 shrink-0 font-mono text-xs font-bold text-[#D65A2C]">{item.num}</span>
                <h3 className="w-full shrink-0 text-lg font-bold leading-6 text-[#18141B] lg:w-96">{item.title}</h3>
                <p className="flex-1 text-base leading-6 text-[#78716C]">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
