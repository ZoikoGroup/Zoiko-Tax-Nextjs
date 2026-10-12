import { SectionHeading, SectionShell, StepCard } from "./shared";

const CONTROLS = [
  {
    title: "Source / baseline versioning",
    description: "Preserve which source and baseline were compared.",
  },
  {
    title: "Content / rule effective dating",
    description: "Bind the effective content available at the time.",
  },
  {
    title: "Comparison context",
    description: "Retain entity, jurisdiction, position and operating mode.",
  },
  {
    title: "Review governance",
    description: "Record who reviewed, approved, blocked or documented.",
  },
  { title: "Replay", description: "Reconstruct the historical outcome in its original context." },
  {
    title: "Change comparison",
    description: "Show what changed between historical and current states.",
  },
];

export default function ContinuitySection() {
  return (
    <SectionShell className="bg-[#2a0b4d]" bgImage="continuity-bg.webp">
      <SectionHeading
        dark
        eyebrow="From discrepancy to replayable evidence"
        title="Historical continuity is a control, not an afterthought."
        description="Current rules must not silently rewrite historical evidence."
      />

      <ol className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {CONTROLS.map((control, i) => (
          <StepCard
            key={control.title}
            label={String(i + 1).padStart(2, "0")}
            title={control.title}
            description={control.description}
            variant="glass"
            className="xl:min-h-48 xl:p-4 xl:[&_h3]:text-base xl:[&_h3]:leading-5"
          />
        ))}
      </ol>
    </SectionShell>
  );
}
