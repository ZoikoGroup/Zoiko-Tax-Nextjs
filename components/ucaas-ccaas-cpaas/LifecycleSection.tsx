import React from "react";
import Image from "next/image";
import { SectionContainer, Reveal } from "./shared";
import { IMAGES, LIFECYCLE_DATA } from "./ucaas-data";

export default function LifecycleSection() {
  return (
    <SectionContainer className="bg-zinc-900 lg:py-24">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src={IMAGES.evidence}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-zinc-900/80" />
      </div>

      <div className="relative flex flex-col gap-9">
        <Reveal>
          <div className="flex max-w-[980px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-orange-300">{LIFECYCLE_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {LIFECYCLE_DATA.title}
            </h2>
          </div>
        </Reveal>

        {/* Eight governed chain steps */}
        <Reveal delay={0.06}>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-8">
            {LIFECYCLE_DATA.steps.map((step, index) => (
              <div
                key={step.num}
                className={`flex min-h-36 flex-col gap-3 rounded-xl p-4 outline outline-1 -outline-offset-1 outline-white/10 ${
                  index === 0 ? "bg-purple-900" : "bg-violet-950"
                }`}
              >
                <span className="font-mono text-xs font-bold text-orange-300">{step.num}</span>
                <span className="whitespace-pre-line text-xs font-bold leading-4 text-white">{step.title}</span>
                <p className="text-xs leading-4 text-zinc-300">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Evidence throughline */}
        <Reveal delay={0.1}>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="shrink-0 font-mono text-xs font-bold text-orange-300">EVIDENCE THROUGHLINE</span>
            <div className="hidden h-px flex-1 bg-white/25 sm:block" />
            <div className="flex rounded-full bg-white/5 px-3.5 py-2 outline outline-1 -outline-offset-1 outline-white/20">
              <span className="font-mono text-xs font-semibold uppercase text-white">{LIFECYCLE_DATA.throughline}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-xs font-medium text-zinc-300">{LIFECYCLE_DATA.note}</p>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
