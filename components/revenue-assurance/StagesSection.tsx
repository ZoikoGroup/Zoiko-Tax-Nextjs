import { SectionHeading, SectionShell, StepCard } from "./shared";

const STAGES = [
  {
    title: "Connect",
    description: "Bring agreed source, incumbent and downstream observations into governed context.",
  },
  {
    title: "Compare",
    description: "Evaluate like-for-like positions without changing production billing or filing.",
  },
  {
    title: "Classify discrepancy",
    description: "Name the observed difference while preserving its domain and uncertainty.",
  },
  {
    title: "Investigate",
    description: "Inspect source, entity, jurisdiction, content, version and stage context.",
  },
  {
    title: "Review",
    description: "Route findings through accountable human and deterministic-system governance.",
  },
  {
    title: "Reconcile",
    description: "Tie fiscal and downstream positions across stages and control points.",
  },
  {
    title: "Resolve / document",
    description: "Correct through governed systems or document the accepted explanation.",
  },
  {
    title: "Prove",
    description: "Preserve replayable evidence of what existed, changed and was reviewed.",
  },
];

export default function StagesSection() {
  return (
    <SectionShell className="bg-[#2a0b4d]" bgImage="stages-bg.webp">
      <SectionHeading
        dark
        eyebrow="Discrepancy-to-evidence"
        title="Eight readable stages from signal to proof."
        description="A discrepancy moves through explicit control stages. It does not jump from difference to blame, correction or legal conclusion."
      />

      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((stage, i) => (
          <StepCard
            key={stage.title}
            label={String(i + 1).padStart(2, "0")}
            title={stage.title}
            description={stage.description}
            variant="glass"
            className="lg:min-h-40"
          />
        ))}
      </ol>
    </SectionShell>
  );
}
