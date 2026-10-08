import { ArrowRight } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const SEQUENCE_STEPS = [
  {
    step: "01",
    stage: "Purpose",
    meaning: "What the approved assistance is intended to support.",
    hasArrow: true,
  },
  {
    step: "02",
    stage: "Scope",
    meaning: "The exact capability, use case and environment boundary.",
    hasArrow: true,
  },
  {
    step: "03",
    stage: "Authority",
    meaning: "Who or what has approved decision rights; AI is assistive.",
    hasArrow: true,
  },
  {
    step: "04",
    stage: "Source / evidence",
    meaning: "The governed source, review or version and proof route.",
    hasArrow: false,
  },
];

const DISCLOSURE_CARDS = [
  {
    title: "Explanation is not internal reasoning",
    description:
      "An explanation should be grounded in approved outcomes and sources. It must keep authority visible and acknowledge source limitations without exposing prompts, sensitive output or internal model reasoning.",
  },
  {
    title: "Traceability is not a correctness guarantee",
    description:
      "Source, review and version details can support examination only where governed records exist. Public or controlled proof routes do not themselves guarantee compliance or legal correctness.",
  },
];

export default function TransparencyExplainabilitySection() {
  return (
    <SectionShell id="transparency" className="bg-[rgba(48,17,83,1)]" imageSrc="/about-us/Transparency explainability and evidence.png">
      <div className="flex flex-col gap-9">
        <SectionHeading
          dark
          eyebrow="11 · TRANSPARENCY & EXPLAINABILITY"
          title="Explain the role. Preserve the boundary."
          description="Material AI involvement should be identifiable where required by the approved scope. Transparency means purpose, scope, authority and supporting evidence—not internal chain-of-thought disclosure or fabricated legal rationale."
        />

        {/* Conceptual sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SEQUENCE_STEPS.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-3.5 rounded-2xl bg-white/5 border border-[rgba(98,71,121,1)] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold text-[rgba(244,162,97,1)]">
                  {s.step}
                </span>
                {s.hasArrow && (
                  <ArrowRight className="h-4.5 w-4.5 text-[rgba(217,208,223,1)]" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-white">{s.stage}</h3>
              <p className="text-[15px] font-normal leading-relaxed text-[rgba(217,208,223,1)]">
                {s.meaning}
              </p>
            </div>
          ))}
        </div>

        {/* Model note */}
        <p className="text-sm font-normal leading-relaxed text-[rgba(217,208,223,1)]">
          Text equivalent: purpose describes intended assistance; scope limits where it applies; authority identifies approved decision rights; source and evidence support the disclosure. This is a transparency model, not a deployed system diagram.
        </p>

        {/* 2 Disclosure cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DISCLOSURE_CARDS.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-4.5 rounded-2xl bg-white/5 border border-[rgba(98,71,121,1)] p-7"
            >
              <h3 className="text-[22px] font-semibold text-white">{card.title}</h3>
              <p className="text-base font-normal leading-relaxed text-[rgba(217,208,223,1)]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
