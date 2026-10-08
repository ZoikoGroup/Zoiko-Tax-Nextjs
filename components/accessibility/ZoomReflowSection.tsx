import { ArrowRight } from "lucide-react";
import { Card, SectionHeading, SectionShell } from "./shared";

const SCOPE_FIELDS = [
  { label: "Category", value: "Public website" },
  { label: "Evidence", value: "Source required" },
  { label: "Approved scope", value: "Not supplied" },
];

const CARDS = [
  {
    title: "Zoom & spacing",
    description:
      "No hidden functions or clipped text. Keep matrices readable as labeled cards, including when text spacing increases.",
  },
  {
    title: "Mobile & orientation",
    description:
      "Use practical 44px targets and flexible orientation. Specify drawer focus, dismissal and return-to-trigger behavior.",
  },
  {
    title: "Language & direction",
    description:
      "Externalize copy, allow text expansion and use logical reading order for right-to-left layouts. Localization support needs its own approved scope.",
  },
];

export default function ZoomReflowSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="07 / ZOOM, REFLOW & LOCALIZATION"
        title="More room to read. No less room to act."
        description="Intended behavior: preserve content and functions at 200% and 400% zoom, with a single-column reading path at 320px. These are design targets, not verified product results."
      />

      <div className="flex flex-col gap-8 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-5">
          <span className="text-xs font-bold text-amber-700">WIDE VIEW · CONCEPTUAL</span>
          <div className="flex flex-col gap-4 rounded-xl bg-purple-100 p-6">
            <p className="text-xl text-zinc-900">Statement scope</p>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              {SCOPE_FIELDS.map((field) => (
                <div key={field.label} className="flex flex-col gap-1.5">
                  <dt className="text-xs font-semibold text-stone-500">{field.label}</dt>
                  <dd className="text-sm leading-5 text-zinc-900">{field.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="text-sm leading-5 text-stone-500">
            Text equivalent: the same category, evidence and scope fields move from a horizontal row to a labeled
            vertical card. Information is retained rather than clipped.
          </p>
        </div>

        <ArrowRight
          aria-hidden="true"
          className="size-6 shrink-0 rotate-90 self-center text-amber-700 lg:rotate-0"
          strokeWidth={1.7}
        />

        <div className="flex w-full max-w-80 shrink-0 flex-col gap-4 self-center rounded-3xl bg-orange-50/40 p-5 outline-2 -outline-offset-2 outline-violet-950">
          <span className="text-xs font-bold text-amber-700">320px · INTENDED READING PATH</span>
          <p className="text-xl text-zinc-900">Statement scope</p>
          <dl className="flex flex-col gap-4">
            {SCOPE_FIELDS.map((field) => (
              <div key={field.label} className="flex flex-col gap-1.5">
                <dt className="text-xs font-semibold text-stone-500">{field.label}</dt>
                <dd className="text-sm text-zinc-900">{field.value}</dd>
              </div>
            ))}
          </dl>
          <span className="rounded-lg bg-purple-100 px-4 py-3 text-center text-sm font-semibold text-violet-950">
            Read scope guidance
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {CARDS.map((card) => (
          <Card key={card.title} title={card.title}>
            {card.description}
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
