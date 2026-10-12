import { Info, Landmark, ReceiptText, ShieldCheck } from "lucide-react";
import { IconCard, SectionHeading, SectionShell } from "./shared";

const SOURCES = [
  {
    icon: ReceiptText,
    title: "Agreed source billing",
    description:
      "The billing position selected for a governed comparison, with time, entity and source context intact.",
  },
  {
    icon: Landmark,
    title: "Incumbent tax outputs",
    description: "Outputs from an existing engine remain attributed to that engine and comparison context.",
  },
  {
    icon: ShieldCheck,
    title: "Governed fiscal positions",
    description: "Approved classifications, content and responsibility context used for controlled comparison.",
  },
];

export default function BaselineSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Source and baseline context"
        title="Compare agreed observations without turning ingestion into authority."
        description="Source billing, incumbent tax outputs and governed fiscal positions can establish an agreed baseline for comparison. Ingested source data does not automatically become ZoikoTax legal truth."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {SOURCES.map((source) => (
          <IconCard key={source.title} {...source} />
        ))}
      </div>

      <div className="flex items-start gap-4 rounded-2xl bg-purple-100 p-5 outline -outline-offset-1 outline-zinc-300 sm:items-center sm:p-6">
        <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-orange-600 sm:mt-0" strokeWidth={1.5} />
        <p className="flex-1 text-sm font-medium leading-6 text-zinc-900 sm:text-base">
          A baseline is an agreed point of comparison—not an independent declaration that the baseline, a match or a
          variance is legally correct.
        </p>
      </div>
    </SectionShell>
  );
}
