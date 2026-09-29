import React from "react";
import Image from "next/image";
import { ActionButtons, Reveal } from "./shared";
import { CONVERSION_DATA, IMAGES } from "./ucaas-data";

export default function ConversionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src={IMAGES.conversion}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-zinc-900/70" />
      </div>

      <div className="relative mx-auto flex min-h-[460px] w-full max-w-[1440px] flex-col items-center justify-center gap-6 px-4 py-20 text-center sm:px-8 lg:px-40">
        <Reveal>
          <span className="text-xs font-bold uppercase text-orange-300">{CONVERSION_DATA.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="max-w-[980px] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
            {CONVERSION_DATA.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-[760px] text-base leading-7 text-zinc-300">{CONVERSION_DATA.description}</p>
        </Reveal>
        <Reveal delay={0.14}>
          <ActionButtons actions={CONVERSION_DATA.actions} className="justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
