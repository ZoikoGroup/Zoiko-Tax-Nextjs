"use client";

import React from "react";
import { KeyRound } from "lucide-react";
import { BG, START_HERE_DATA } from "./developer-overview-data";
import { Reveal, SectionContainer, SectionHeader } from "./shared";

function Step({ index, title, description }: { index: number; title: string; description: string }) {
  return (
    <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3.5">
      <span className="size-9 rounded-full bg-[#FFF0E7] inline-flex items-center justify-center text-sm font-bold text-[#D65A2C]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-lg font-bold leading-6 text-[#18141B]">{title}</h3>
      <p className="text-sm leading-5 text-[#665F69]">{description}</p>
    </div>
  );
}

export default function StartHereSection() {
  const first = START_HERE_DATA.steps.slice(0, 4);
  const rest = START_HERE_DATA.steps.slice(4);

  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{ backgroundImage: `url('${BG.startHere}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={START_HERE_DATA.eyebrow} title={START_HERE_DATA.title} description={START_HERE_DATA.description} />
        </Reveal>

        <div className="flex flex-col gap-4">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {first.map((step, idx) => (
              <li key={step.title} className="h-full">
                <Reveal delay={0.03 * idx} className="h-full">
                  <Step index={idx} {...step} />
                </Reveal>
              </li>
            ))}
          </ol>
          <ol start={first.length + 1} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((step, idx) => (
              <li key={step.title} className="h-full">
                <Reveal delay={0.03 * (idx + 4)} className="h-full">
                  <Step index={idx + 4} {...step} />
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.08}>
          <div className="w-full rounded-2xl bg-[#F1E8F8] p-5 sm:p-6 flex items-start gap-4">
            <KeyRound className="h-6 w-6 shrink-0 text-[#D65A2C]" strokeWidth={1.7} aria-hidden="true" />
            <div className="flex-1 flex flex-col gap-1.5">
              <p className="text-base font-semibold text-[#301153]">{START_HERE_DATA.notice.title}</p>
              <p className="text-base leading-6 text-[#665F69]">{START_HERE_DATA.notice.description}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
