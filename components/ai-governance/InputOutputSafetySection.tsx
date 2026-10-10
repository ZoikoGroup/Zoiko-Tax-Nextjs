import { FileInput, FileOutput, OctagonAlert, Info } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const CARDS = [
  {
    icon: FileInput,
    tag: "PROVENANCE & MINIMIZATION",
    title: "Approved input classes",
    description:
      "Identify authorized sources, necessary data classes and applicable minimization requirements. Prompt and instruction posture belongs in an approved high-level disclosure—not a public prompt specimen.",
  },
  {
    icon: FileOutput,
    tag: "ASSISTIVE, NOT AUTHORITATIVE",
    title: "Material output context",
    description:
      "Describe AI-output indicators and confidence or uncertainty signals only where governed records support them. Include required human confirmation and the applicable authority notice.",
  },
  {
    icon: OctagonAlert,
    tag: "ACTUAL CONTROLS ONLY",
    title: "Unsafe or out-of-scope requests",
    description:
      "Refusal or escalation behavior may be described only if it exists in the approved scope. Do not infer a safety filter, a universal refusal policy or guaranteed protection.",
  },
];

export default function InputOutputSafetySection() {
  return (
    <SectionShell id="safety" imageSrc="/existing-tax-engines/0.png">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="05 · INPUT, OUTPUT & SAFETY"
          title="Control descriptions need provenance, too."
          description="Public disclosure should explain approved input classes and output handling at a high level. It must not expose prompts or imply safety mechanisms, uncertainty signals or model guarantees that are not supported by a governed source."
        />

        {/* 3 Disclosure cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-4.5 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-7"
            >
              <card.icon className="h-6.5 w-6.5 text-[rgba(214,90,44,1)]" strokeWidth={1.5} />
              <span className="text-xs font-bold uppercase tracking-wider text-[rgba(214,90,44,1)]">
                {card.tag}
              </span>
              <h3 className="text-[22px] font-semibold text-[rgba(24,20,27,1)]">{card.title}</h3>
              <p className="text-base font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Source notice */}
        <div className="w-full rounded-2xl bg-[rgba(255,240,231,1)] border border-[rgba(234,204,185,1)] p-6 flex items-start gap-4">
          <Info className="w-5.5 h-5.5 text-[rgba(214,90,44,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="text-base font-semibold text-[rgba(24,20,27,1)]">
              An output never supplies its own authority
            </h4>
            <p className="text-[15px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              Confidence, fluency and an explanation are not permission to set fiscal outcomes. Approved review and authority boundaries still apply; exact handling requires authorized documentation.&quot;
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
