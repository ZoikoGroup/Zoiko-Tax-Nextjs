import React from "react";
import Image from "next/image";
import { SectionContainer, Reveal } from "./shared";
import { FAQ_DATA } from "./ucaas-data";

export default function FAQSection() {
  return (
    <SectionContainer className="relative bg-white py-[45px]">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 select-none opacity-[0.1] mix-blend-multiply" aria-hidden="true">
        <Image src="/ucaas-ccaas-cpaas/tech-pattern.png" alt="" fill className="object-cover object-top" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-12">
        <Reveal>
          <div className="flex w-full flex-col gap-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D65A2C]">
              {FAQ_DATA.eyebrow}
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
              {FAQ_DATA.title}
            </h2>
            <p className="w-full max-w-[980px] text-base leading-[1.6] text-[#78716C] sm:text-lg lg:text-[1.125rem] lg:leading-[1.75rem]">
              {FAQ_DATA.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="flex flex-col">
            {FAQ_DATA.items.map((item, index) => (
              <div
                key={item.num}
                className={`flex flex-col gap-4 border-b border-[#E8E4EC] py-7 lg:flex-row lg:items-start lg:gap-8 ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <span className="w-10 shrink-0 font-mono text-[11px] font-bold text-[#D65A2C]">{item.num}</span>
                <h3 className="w-full shrink-0 text-[15px] font-bold leading-[1.5] text-[#18141B] lg:w-80">
                  {item.title}
                </h3>
                <p className="flex-1 text-[14px] leading-[1.6] text-[#78716C]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
