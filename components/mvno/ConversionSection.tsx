import React from "react";
import Image from "next/image";
import { ActionButtons, Reveal } from "./shared";
import { CONVERSION_DATA, IMAGES } from "./mvno-data";

export default function ConversionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1D033B] px-4 py-20 sm:px-8 sm:py-24">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image src={IMAGES.conversion} alt="" fill sizes="100vw" className="object-cover opacity-30" />
      </div>

      <div className="relative mx-auto flex max-w-[800px] flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="text-sm font-bold uppercase text-[#F4A261]">{CONVERSION_DATA.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-white sm:text-4xl sm:leading-10">
            {CONVERSION_DATA.title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-base leading-6 text-[#D8CEDD]">{CONVERSION_DATA.description}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <ActionButtons actions={CONVERSION_DATA.actions} className="w-full sm:w-auto sm:justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
