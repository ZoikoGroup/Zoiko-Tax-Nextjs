import React from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { CONTEXT_MODEL_DATA } from "./mvno-data";

export default function ContextModelSection() {
  const { setup, flow } = CONTEXT_MODEL_DATA;

  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader
          eyebrow={CONTEXT_MODEL_DATA.eyebrow}
          title={CONTEXT_MODEL_DATA.title}
          description={CONTEXT_MODEL_DATA.description}
        />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,776px)_minmax(0,1fr)]">
        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#18141B]">{setup.title}</h3>
            <dl className="mt-4">
              {setup.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 border-b border-[#D8CEDD] py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <dt className="text-sm text-[#665F69]">{row.label}</dt>
                  <dd className="text-sm font-semibold text-[#18141B] sm:text-right">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-[#11042D] p-6 sm:p-8">
            <h3 className="mb-3 text-sm font-bold uppercase text-white">{flow.title}</h3>
            {flow.steps.map((step, idx) => (
              <React.Fragment key={step}>
                {idx > 0 && <ChevronDown className="size-4 text-[#D8CEDD]" aria-hidden="true" />}
                <div
                  className={clsx(
                    "w-full rounded-lg border bg-[#1D033B] px-4 py-3 text-center text-sm font-semibold text-white",
                    idx === 0 ? "border-[#D65A2C]" : "border-[#D8CEDD]/60"
                  )}
                >
                  {step}
                </div>
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
