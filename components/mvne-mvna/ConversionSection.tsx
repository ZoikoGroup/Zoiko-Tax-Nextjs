import React from "react";
import Image from "next/image";
import { ActionButtons, Reveal } from "./shared";
import { CONVERSION_DATA, IMAGES } from "./mvne-mvna-data";

export default function ConversionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1D033B] px-4 py-16 sm:px-8 sm:py-20">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image src={IMAGES.conversion} alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="relative mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center">
        <Reveal>
          <span className="text-xs font-bold uppercase text-[#D65A2C]">{CONVERSION_DATA.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-white sm:text-5xl sm:leading-[1.1]">
            {CONVERSION_DATA.title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-base leading-7 text-[#D8CEDD] sm:text-lg">{CONVERSION_DATA.description}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <ActionButtons actions={CONVERSION_DATA.actions} dark className="w-full sm:w-auto sm:justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
