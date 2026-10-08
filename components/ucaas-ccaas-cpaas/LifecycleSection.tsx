import React from "react";
import Image from "next/image";
import { SectionContainer, Reveal } from "./shared";
import { LIFECYCLE_DATA } from "./ucaas-data";

export default function LifecycleSection() {
  return (
    <SectionContainer className="bg-[#08080A] py-[45px]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src="/UCaaS, CCaaS & CPaaS/uu.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-[#08080A]/75" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-9">
        <Reveal>
          <div className="flex max-w-[980px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{LIFECYCLE_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
              Connect the fiscal decision chain from<br className="hidden sm:inline" />
              service and bundle context to evidence.
            </h2>
          </div>
        </Reveal>

        {/* Eight governed chain steps */}
        <Reveal delay={0.06}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {LIFECYCLE_DATA.steps.map((step, index) => (
              <div
                key={step.num}
                className={`flex h-[150px] w-full max-w-[153px] flex-col justify-start gap-2 rounded-2xl p-4 border transition-all ${
                  index === 0
                    ? "bg-[#5C1D8C] border-[#892FD6]"
                    : "bg-[#331254] border-white/13"
                }`}
              >
                <span className="font-mono text-xs font-bold text-[#D65A2C]">{step.num}</span>
                <h3 className="whitespace-pre-line text-xs font-bold leading-4 tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="text-[11px] leading-3.5 tracking-tight text-[#D9D0DF] whitespace-nowrap">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Evidence throughline */}
        <Reveal delay={0.1}>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="shrink-0 font-mono text-xs font-bold uppercase text-[#D65A2C]">
              EVIDENCE THROUGHLINE
            </span>
            <div className="hidden h-px flex-1 bg-white/20 sm:block" />
            <div className="flex rounded-full bg-white/5 px-4 py-2 outline outline-1 -outline-offset-1 outline-white/20">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                {LIFECYCLE_DATA.throughline}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-xs font-normal leading-5 text-[#D9D0DF]">{LIFECYCLE_DATA.note}</p>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
