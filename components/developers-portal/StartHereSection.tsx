import { SOURCES, START_TASKS } from "./data";
import { SectionHeading, SectionShell, SourceLink } from "./shared";

const JOURNEY = [
  "Choose integration path",
  "Review contracts",
  "Understand governed authentication",
  "Distinguish environment",
  "Test safely",
  "Monitor changelog",
  "Verify Coverage",
];

export default function StartHereSection() {
  return (
    <SectionShell className="bg-white" bgImage="start-bg.webp">
      <SectionHeading
        eyebrow="Start here"
        title="Choose the task. Follow the source."
        description="Eight entry points to the right technical authority—without an account or a sales gate."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {START_TASKS.map(({ task, icon: Icon, description, source }) => (
          <div
            key={task}
            className="flex flex-col items-start gap-4 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 xl:min-h-60"
          >
            <Icon aria-hidden="true" className="size-5 text-orange-600" strokeWidth={1.6} />
            <h3 className="text-xl font-bold leading-6 text-zinc-900">{task}</h3>
            <p className="flex-1 text-sm leading-5 text-stone-500">{description}</p>
            <SourceLink label="View source" href={SOURCES[source].href} path={SOURCES[source].path} />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 rounded-3xl bg-[#301153] p-6 sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-xl font-bold text-white sm:text-2xl">Orient before you implement.</h3>
          <span className="text-xs font-semibold uppercase text-orange-300">Conceptual journey · Not provisioning</span>
        </div>
        <ol className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {JOURNEY.map((step, i) => (
            <li
              key={step}
              className="flex flex-col gap-4 rounded-xl bg-white/5 p-3.5 outline -outline-offset-1 outline-white/10 xl:min-h-32"
            >
              <span className="font-mono text-xs text-orange-300">
                {String(i + 1).padStart(2, "0")} {i < JOURNEY.length - 1 ? "→" : ""}
              </span>
              <span className="text-sm font-medium leading-5 text-white">{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm leading-5 text-zinc-300">
          An implementation-orientation sequence, not an approved onboarding, credential or environment-creation
          workflow.
        </p>
      </div>
    </SectionShell>
  );
}
