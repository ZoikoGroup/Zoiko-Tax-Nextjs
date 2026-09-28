import React from "react";
import clsx from "clsx";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { CONTEXT_MODEL_DATA } from "./voice-data";

type Panel = (typeof CONTEXT_MODEL_DATA)["technical"];

function ContextPanel({ panel, dark }: { panel: Panel; dark: boolean }) {
  return (
    <div
      className={clsx(
        "flex h-full flex-col gap-4 rounded-2xl p-6 sm:p-7",
        dark ? "bg-[#1D033B]" : "border border-[#D8CEDD] bg-white"
      )}
    >
      <h3 className={clsx("text-lg font-bold", dark ? "text-white" : "text-[#18141B]")}>{panel.title}</h3>
      <dl className="flex flex-col gap-2.5">
        {panel.rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-0.5 py-1 sm:flex-row sm:gap-4">
            <dt className={clsx("shrink-0 text-xs sm:w-40", dark ? "text-[#D8CEDD]" : "text-[#B8AFBD]")}>
              {row.label}
            </dt>
            <dd className={clsx("font-mono text-xs", dark ? "text-white" : "text-[#B8AFBD]")}>{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function ContextModelSection() {
  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader data={CONTEXT_MODEL_DATA} />
      </Reveal>
      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <StaggerItem>
          <ContextPanel panel={CONTEXT_MODEL_DATA.technical} dark={false} />
        </StaggerItem>
        <StaggerItem>
          <ContextPanel panel={CONTEXT_MODEL_DATA.governed} dark />
        </StaggerItem>
      </StaggerGroup>
    </SectionContainer>
  );
}
