import React from "react";
import Image from "next/image";
import { ActionButtons, Reveal } from "./shared";
import { CONVERSION_DATA, IMAGES } from "./broadband-data";

export default function ConversionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#2A1450] py-16 sm:py-20 lg:min-h-[419px]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image src={IMAGES.conversion} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#3A1C6B]/55" />
      </div>

      <div className="relative mx-auto flex max-w-[1120px] flex-col gap-4 px-4 sm:px-8">
        <Reveal>
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{CONVERSION_DATA.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-white sm:text-center sm:text-4xl">
            {CONVERSION_DATA.title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-base text-[#E5E1EA] sm:text-lg">{CONVERSION_DATA.description}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <ActionButtons actions={CONVERSION_DATA.actions} className="pt-6 sm:justify-center sm:gap-4" />
        </Reveal>
      </div>
    </section>
  );
}
