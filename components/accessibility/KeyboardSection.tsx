import { ArrowRight, PanelTop } from "lucide-react";
import { Requirement, SectionHeading, SectionShell } from "./shared";

const KEYS = ["Tab", "Shift + Tab", "Enter", "Escape"];

function SpecimenButton({ focused = false }: { focused?: boolean }) {
  return (
    <span
      className={`inline-flex min-h-12 items-center gap-3 rounded-[999px] bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 ${
        focused ? "outline-3 -outline-offset-3 outline-violet-950" : "outline -outline-offset-1 outline-zinc-300"
      }`}
    >
      Read statement
      <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
    </span>
  );
}

export default function KeyboardSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="03 / KEYBOARD, FOCUS & SEMANTICS"
        title="Every task needs a clear path."
        description="Implementation requirements for predictable navigation. These design-contract patterns are not claims that the live product has been tested."
      />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="flex flex-col gap-7 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8 lg:w-[600px] lg:shrink-0">
          <span className="text-xs font-bold text-amber-700">VISIBLE FOCUS · SPECIMEN</span>
          <div aria-hidden="true" className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex flex-1 flex-col items-start gap-3">
              <span className="text-xs text-stone-500">Default</span>
              <SpecimenButton />
            </div>
            <div className="flex flex-1 flex-col items-start gap-3">
              <span className="text-xs text-stone-500">Keyboard focus</span>
              <SpecimenButton focused />
            </div>
          </div>
          <div aria-hidden="true" className="flex flex-wrap gap-3">
            {KEYS.map((key) => (
              <kbd
                key={key}
                className="rounded-lg bg-purple-100 px-3.5 py-3 font-sans text-xs font-semibold text-violet-950 outline -outline-offset-1 outline-zinc-300"
              >
                {key}
              </kbd>
            ))}
          </div>
          <p className="text-sm leading-5 text-stone-500">
            Text equivalent: Tab moves forward, Shift + Tab moves back, Enter activates a control. Escape closes a
            dialog and restores its trigger where implemented.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-6 lg:py-3">
          <Requirement title="Reachable, logical, visible">
            All task controls should be keyboard and touch compatible, follow a logical order and show a
            high-contrast focus indicator. No keyboard traps.
          </Requirement>
          <Requirement title="Predictable transitions">
            Dialogs, disclosures and route changes need explicit focus behavior. A mobile drawer should return focus
            to its trigger when dismissed.
          </Requirement>
          <Requirement title="Structure before styling">
            Use native controls, logical headings and landmarks. Provide a skip-to-main path and text that identifies
            the current page. Site navigation disclosures are not application-menu roles.
          </Requirement>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl bg-violet-950 p-6 lg:flex-row lg:items-center lg:gap-6">
        <PanelTop aria-hidden="true" className="size-7 shrink-0 text-orange-300" strokeWidth={1.7} />
        <p className="text-base leading-7 text-white sm:text-lg lg:w-[650px] lg:shrink-0">
          Header → Navigation → Main content → Footer
        </p>
        <p className="flex-1 text-sm leading-5 text-zinc-300">
          Intended landmarks, one H1 and a logical heading hierarchy—not a runtime verification.
        </p>
      </div>
    </SectionShell>
  );
}
