import { ArrowRight } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const STEPS = [
  {
    step: "01",
    stage: "Identify impact",
    meaning: "Model, provider, configuration, instructions, data source or use-case change.",
    hasArrow: true,
  },
  {
    step: "02",
    stage: "Review scope",
    meaning: "Source-defined assessment of capability, policy and authority effects.",
    hasArrow: true,
  },
  {
    step: "03",
    stage: "Govern approval",
    meaning: "Approved policy versions, controlled metric thresholds and claim gates.",
    hasArrow: true,
  },
  {
    step: "04",
    stage: "Publish or retire",
    meaning: "Current evidence only; retirement history remains clearly non-current.",
    hasArrow: false,
  },
];

const DISCLOSURE_CARDS = [
  {
    title: "Capability expansion needs a source",
    description:
      "New capability must not be inferred from a model update. Product behavior and release statements need governed scope and claim approval.",
  },
  {
    title: "History is not present authority",
    description:
      "Retired or superseded records should remain separate from current claims. A historical evaluation cannot establish a current system’s approval.",
  },
];

export default function ChangeReleaseSection() {
  return (
    <SectionShell id="change-governance" imageSrc="/existing-tax-engines/0.png">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="08 · CHANGE, RELEASE & VERSION GOVERNANCE"
          title="Governed changes. No silent expansion of authority."
          description="Model or provider updates, material configuration or instruction changes and new data sources can affect an approved use case. Publication of a change needs the relevant impact review, approval and claim gates."
        />

        {/* Conceptual sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-3.5 rounded-2xl bg-[rgba(243,237,248,1)] border border-[rgba(216,206,221,1)] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold text-[rgba(214,90,44,1)]">
                  {s.step}
                </span>
                {s.hasArrow && (
                  <ArrowRight className="h-4.5 w-4.5 text-[rgba(102,95,105,1)]" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-[rgba(24,20,27,1)]">{s.stage}</h3>
              <p className="text-[15px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                {s.meaning}
              </p>
            </div>
          ))}
        </div>

        {/* Lifecycle note */}
        <p className="text-sm font-normal text-[rgba(102,95,105,1)]">
          Conceptual change lifecycle only. No release activation, model version, approval date or provider change is represented here.
        </p>

        {/* 2 Disclosure cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DISCLOSURE_CARDS.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-4.5 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-7"
            >
              <h3 className="text-[22px] font-semibold text-[rgba(24,20,27,1)]">{card.title}</h3>
              <p className="text-base font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
