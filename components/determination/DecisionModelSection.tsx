import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { decisionSteps } from "./determination-data";

export default function DecisionModelSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow="DECISION ENGINE WORKFLOW"
          title="The Governed Decision Pipeline"
          description="ZoikoTax uses deterministic, code-enforced steps to determine fiscal outcomes. AI never computes tax liability."
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {decisionSteps.map((step, idx) => (
          <Reveal key={step.number} delay={0.05 * idx}>
            <div
              className={`flex h-full flex-col rounded-2xl border p-6 transition-all hover:shadow-md ${
                step.highlight
                  ? "border-[#D65A2C]/50 bg-white shadow-[0_4px_12px_0_rgba(214,90,44,0.06)]"
                  : "border-[#D8CEDD] bg-white/80"
              }`}
            >
              {/* Step Header with Circle Number */}
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    step.highlight
                      ? "bg-[#D65A2C] text-white"
                      : "bg-[#F3EEF7] text-[#535055]"
                  }`}
                >
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-[#18141B]">{step.title}</h3>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#535055]">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
