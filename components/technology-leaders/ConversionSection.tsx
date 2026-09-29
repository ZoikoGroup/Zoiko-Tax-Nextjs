import React from "react";
import Image from "next/image";
import { ActionButtons, Reveal } from "./shared";
import { CONVERSION_DATA, IMAGES } from "./tech-data";

export default function ConversionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1D1443] px-4 py-16 sm:px-8 sm:py-[88px]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image src={IMAGES.conversion} alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center gap-5 text-center">
        <Reveal>
          <span className="text-sm font-bold uppercase text-[#F4A261]">{CONVERSION_DATA.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-white sm:text-4xl">
            {CONVERSION_DATA.title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-base leading-7 text-[#D8CEDD] sm:text-lg">{CONVERSION_DATA.description}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <ActionButtons actions={CONVERSION_DATA.actions} className="w-full pt-3 sm:w-auto sm:justify-center sm:gap-4" />
        </Reveal>
      </div>
    </section>
  );
}
