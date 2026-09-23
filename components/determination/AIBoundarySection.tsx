import React from "react";
import { SectionContainer, Reveal } from "./shared";

export default function AIBoundarySection() {
  const allowed = [
    "✔ Suggest products-to-category associations based on natural language keywords.",
    "✔ Summarize changes between state and municipal tax rules for expert human preview.",
    "✔ Investigate system transaction volume anomalies and surface suspicious outliers.",
    "✔ Assist and speed up general regulatory compliance research.",
  ];

  const notAllowed = [
    "✖ Calculate or decide final tax liabilities autonomously.",
    "✖ Silently override verified state exempt certificate statuses.",
    "✖ Substitute legal advice, formal interpretations, or definitive accounting rules.",
    "✖ Commit calculations to ledger systems without strict rule-set validation.",
  ];

  return (
    <SectionContainer className="bg-[#FAF3FF] py-20 sm:py-24">
      <Reveal>
        <div className="flex flex-col gap-3.5 max-w-5xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
            AI ETHICS & GOVERNANCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
            AI assists. Approved rules decide. Evidence proves.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#535055]">
            A definitive guardrail ensures AI output is never executed autonomously without rigorous deterministic rule checks.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {/* AI MAY */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col p-7 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-[#18141B]">
              AI MAY
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5 text-xs sm:text-sm leading-relaxed text-[#535055]">
              {allowed.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* AI MAY NOT */}
        <Reveal delay={0.2}>
          <div className="flex h-full flex-col rounded-2xl bg-[#FBF0EC] p-7 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-[#D65A2C]">
              AI MAY NOT
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5 text-xs sm:text-sm leading-relaxed text-[#535055]">
              {notAllowed.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
