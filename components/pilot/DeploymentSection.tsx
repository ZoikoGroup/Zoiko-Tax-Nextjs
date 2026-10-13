import { SectionHeading, SectionShell } from "./shared";

const PHASES = [
  { title: "Proposal", description: "Define the question and proposed boundaries." },
  { title: "Scoped evaluation", description: "Assess the specific capability and conditions." },
  { title: "Controlled authorization", description: "Establish permitted use, only if approved." },
  { title: "Limited operation", description: "Operate solely within authorized limits." },
  { title: "Review / change", description: "Review evidence and any proposed scope change." },
];

export default function DeploymentSection() {
  return (
    <SectionShell className="bg-[#1f0a3a]" bgImage="deployment-bg.webp">
      <SectionHeading
        dark
        eyebrow="Bounded deployment"
        title="Control comes before operation."
        description="A conceptual, conditional model—not a guaranteed operational workflow."
      />

      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:lg:col-span-1">
        {PHASES.map((phase, i) => (
          <li
            key={phase.title}
            className="flex flex-col gap-4 rounded-2xl bg-[#301153] p-6 outline -outline-offset-1 outline-zinc-600 xl:min-h-48"
          >
            <span className="font-mono text-sm text-orange-300">
              CONDITIONAL{i < PHASES.length - 1 ? " →" : ""}
            </span>
            <h3 className="text-xl font-bold leading-7 text-white">{phase.title}</h3>
            <p className="text-base leading-6 text-zinc-300">{phase.description}</p>
          </li>
        ))}
      </ol>

      <p className="text-sm leading-5 text-zinc-300">
        Every phase is subject to product governance. This model is distinct from the Coverage Doctrine categories and
        does not promise a move from Pilot to Production or invite unrestricted participation.
      </p>
    </SectionShell>
  );
}
