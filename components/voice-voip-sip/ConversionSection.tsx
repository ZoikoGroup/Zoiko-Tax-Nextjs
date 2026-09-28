import React from "react";
import Image from "next/image";
import { ActionButtons, Reveal } from "./shared";
import { CONVERSION_DATA, IMAGES } from "./voice-data";

export default function ConversionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#3D2A58] px-4 py-16 sm:px-8 sm:py-20 lg:py-[88px]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image src={IMAGES.conversion} alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="relative mx-auto flex max-w-[1060px] flex-col items-center gap-4 text-center">
        <Reveal>
          <span className="text-sm font-bold uppercase text-[#F4A261]">{CONVERSION_DATA.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-[30px] font-bold leading-tight tracking-tight text-white sm:text-5xl sm:leading-[1.1]">
            {CONVERSION_DATA.title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-base leading-7 text-[#F2E6F4] sm:text-lg">{CONVERSION_DATA.description}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <ActionButtons actions={CONVERSION_DATA.actions} className="w-full pt-6 sm:w-auto sm:justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
