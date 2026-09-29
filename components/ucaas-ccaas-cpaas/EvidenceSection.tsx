import React from "react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { Button, Guardrail, SectionContainer, StaggerGrid, StaggerItem } from "./shared";
import { EVIDENCE_DATA, IMAGES } from "./ucaas-data";

export default function EvidenceSection() {
  return (
    <SectionContainer className="bg-white lg:py-24">
      <StaggerGrid className="gap-6 lg:grid-cols-2">
        {/* Light evidence checklist panel */}
        <StaggerItem>
          <div className="flex h-full flex-col gap-6 rounded-3xl bg-white p-6 shadow-[0_6px_18px_0_rgba(0,0,0,0.08)] outline outline-1 -outline-offset-1 outline-gray-200 sm:p-9">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold uppercase text-[#D65A2C]">{EVIDENCE_DATA.eyebrow}</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
                {EVIDENCE_DATA.title}
              </h2>
            </div>

            <div className="flex flex-1 flex-wrap content-start gap-x-2.5 gap-y-0">
              {EVIDENCE_DATA.checklist.map((item) => (
                <div key={item} className="flex w-64 items-center gap-2.5 py-2.5">
                  <CircleCheck className="size-4 shrink-0 text-[#D65A2C]" strokeWidth={1.6} aria-hidden="true" />
                  <span className="text-sm font-semibold text-[#18141B]">{item}</span>
                </div>
              ))}
            </div>

            <div>
              <Button action={EVIDENCE_DATA.action} />
            </div>
          </div>
        </StaggerItem>

        {/* Dark historical replay panel */}
        <StaggerItem>
          <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl bg-violet-950 p-6 shadow-[0_6px_18px_0_rgba(0,0,0,0.08)] sm:p-9">
            <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
              <Image
                src={IMAGES.evidence}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center opacity-15 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-violet-950/70" />
            </div>

            <div className="relative flex flex-col gap-6">
              <h3 className="text-3xl font-bold leading-9 text-white sm:text-4xl">{EVIDENCE_DATA.panel.title}</h3>
              <p className="text-base leading-6 text-zinc-300">{EVIDENCE_DATA.panel.description}</p>

              <div className="flex flex-col gap-2.5">
                {EVIDENCE_DATA.panel.rows.map((row) => (
                  <div
                    key={row.num}
                    className="flex items-center gap-3.5 rounded-[10px] bg-white/5 p-3.5 outline outline-1 -outline-offset-1 outline-white/10 transition-colors hover:bg-white/10"
                  >
                    <span className="shrink-0 font-mono text-xs font-bold text-orange-300">{row.num}</span>
                    <span className="text-sm font-semibold text-white">{row.title}</span>
                  </div>
                ))}
              </div>

              <Guardrail dark>{EVIDENCE_DATA.panel.guardrail}</Guardrail>
            </div>
          </div>
        </StaggerItem>
      </StaggerGrid>
    </SectionContainer>
  );
}
