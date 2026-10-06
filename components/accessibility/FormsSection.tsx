import { CircleAlert } from "lucide-react";
import { Requirement, SectionHeading, SectionShell } from "./shared";

export default function FormsSection() {
  return (
    <SectionShell className="bg-white" bgImage="forms-bg.webp">
      <SectionHeading
        eyebrow="04 / FORMS & FEEDBACK"
        title="Help people understand—and recover."
        description="Clear labels, useful corrections and announced updates are implementation requirements. A color change alone is not an explanation."
      />

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
        {/* Static illustration: no real input, so nothing can be typed or submitted. */}
        <div className="flex flex-col gap-5 rounded-3xl bg-purple-50 p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8 lg:w-[600px] lg:shrink-0">
          <span className="text-xs font-bold text-amber-700">DESIGN PATTERN · INACTIVE ILLUSTRATION</span>
          <h3 className="text-xl font-semibold leading-8 text-zinc-900 sm:text-2xl">A correction you can act on.</h3>

          <div className="flex flex-col gap-2 rounded-lg bg-orange-50 p-4 outline -outline-offset-1 outline-amber-700">
            <p className="text-base text-zinc-900">One field needs your attention</p>
            <p className="text-sm text-amber-700 underline">Reference code: use at least 4 characters.</p>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-base font-semibold text-zinc-900">Reference code (required)</p>
            <p className="text-sm text-stone-500">Use 4–12 letters or numbers. Example: SAMPLE01.</p>
            <div className="flex items-center justify-between rounded-lg bg-white p-4 outline-2 -outline-offset-2 outline-amber-700">
              <span className="text-base text-zinc-900">AB</span>
              <CircleAlert aria-hidden="true" className="size-5 text-amber-700" strokeWidth={2} />
            </div>
            <p className="text-sm text-amber-700">Error: enter at least 4 characters, such as SAMPLE01.</p>
          </div>

          <p className="text-sm leading-5 text-stone-500">
            Design pattern, not an issue-report service. No information is submitted.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-7 lg:pt-2">
          <Requirement title="Labels stay visible">
            Keep labels, instructions and required-field text visible. Associate them with their fields rather than
            relying on placeholder text.
          </Requirement>
          <Requirement title="Errors point to a correction">
            Provide a field-level message and an error summary with a meaningful path back to the affected field.
            Preserve valid input.
          </Requirement>
          <Requirement title="Status is communicated">
            Async progress, success and error updates need appropriate announcements without unnecessary focus
            movement.
          </Requirement>
          <Requirement title="Session and challenge rules need sources">
            Publish timeout controls, session-extension behavior or accessible challenge alternatives only when those
            features and their approved scope are established.
          </Requirement>
        </div>
      </div>
    </SectionShell>
  );
}
