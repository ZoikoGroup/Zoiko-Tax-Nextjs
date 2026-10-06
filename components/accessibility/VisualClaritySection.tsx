import { Clock, Contrast, Pause, Type, type LucideIcon } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";

const CARDS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Contrast,
    title: "Contrast & text",
    description:
      "Normal text, controls and focus indicators need readable contrast. Text should scale and accept spacing changes without clipping.",
  },
  {
    icon: Type,
    title: "More than color",
    description:
      "Use explicit state text, labels and symbols. A status must remain understandable without its color or an image.",
  },
  {
    icon: Pause,
    title: "Motion & media",
    description:
      "Respect reduced-motion preferences, avoid flashing and never depend on essential animation. Provide captions or transcripts for relevant, approved media.",
  },
];

export default function VisualClaritySection() {
  return (
    <SectionShell className="bg-violet-950" bgImage="visual-bg.webp">
      <SectionHeading
        dark
        eyebrow="05 / VISUAL CLARITY"
        title="Meaning should survive a change in presentation."
        description="Design requirements for readable contrast, scalable text and non-color cues—not a published contrast measurement or media audit."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {CARDS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-2xl bg-purple-950/80 p-6 outline -outline-offset-1 outline-purple-900 sm:p-7"
          >
            <Icon aria-hidden="true" className="size-7 text-orange-300" strokeWidth={1.7} />
            <h3 className="text-lg font-semibold leading-7 text-white sm:text-xl">{title}</h3>
            <p className="text-base leading-6 text-zinc-300">{description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-5 rounded-2xl bg-indigo-950/90 p-6 sm:flex-row sm:items-center sm:gap-7">
        <span className="inline-flex shrink-0 items-center gap-2.5 rounded-lg bg-white px-4 py-3 text-base font-semibold text-violet-950">
          <Clock aria-hidden="true" className="size-4" strokeWidth={2} />
          Pending review
        </span>
        <p className="flex-1 text-base leading-6 text-zinc-300">
          Example: the words “Pending review” communicate the state even when color is unavailable. This is a visual
          pattern, not the current status of a product review.
        </p>
      </div>
    </SectionShell>
  );
}
