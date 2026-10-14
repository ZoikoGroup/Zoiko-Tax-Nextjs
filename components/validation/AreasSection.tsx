import { BookOpen, Files, ListChecks, Plug, Shield } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";

const AREAS = [
  {
    icon: ListChecks,
    title: "Functional test review",
    description: "How behavior might be assessed against a defined feature scope.",
  },
  {
    icon: BookOpen,
    title: "Regulatory / content review",
    description: "How applicable requirements and governed content might be reviewed.",
  },
  {
    icon: Plug,
    title: "Integration / reliability",
    description: "How interfaces, dependencies and reliability might be evaluated.",
  },
  {
    icon: Files,
    title: "Evidence / provenance",
    description: "How traceability and the basis for a determination might be examined.",
  },
  {
    icon: Shield,
    title: "Security / operational checks",
    description: "How security controls and operational handling might be assessed.",
  },
];

export default function AreasSection() {
  return (
    <SectionShell className="bg-white" bgImage="areas-bg.webp">
      <SectionHeading
        eyebrow="What validation may cover"
        title="Areas that may be evaluated"
        description="Conceptual areas of review—not a published methodology or a report of completed tests."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:lg:col-span-1">
        {AREAS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 xl:min-h-64"
          >
            <Icon aria-hidden="true" className="size-7 text-orange-600" strokeWidth={1.5} />
            <h3 className="text-xl leading-7 text-zinc-900">{title}</h3>
            <p className="text-base leading-6 text-stone-500">{description}</p>
          </div>
        ))}
      </div>

      <p className="text-base leading-6 text-stone-500">
        The applicable review requirements must come from the governed source for the exact scope. No test results,
        assessors or readiness scores are presented here.
      </p>
    </SectionShell>
  );
}
