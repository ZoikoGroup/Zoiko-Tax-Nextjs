import { CircleHelp } from "lucide-react";
import { OUTBOUND_NOTE, SectionHeading, SectionShell, UnavailableButton } from "./shared";

export default function VerifyCoverageSection() {
  return (
    <SectionShell id="verify-coverage" className="bg-white" bgImage="verify-bg.webp">
      <SectionHeading
        eyebrow="Verify coverage"
        title="Check the source before planning adoption."
        description="Current availability belongs to the approved capability-specific coverage source—not to this doctrine page."
      />

      <div className="flex flex-col gap-8 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-10 lg:flex-row lg:gap-12">
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex items-center gap-4">
            <CircleHelp aria-hidden="true" className="size-8 shrink-0 text-orange-600" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-zinc-900 sm:text-3xl">Coverage status not confirmed here</h3>
          </div>
          <p className="text-base leading-7 text-stone-500">
            An approved Coverage Overview or capability destination is required to verify the exact scope. Missing
            information does not mean Pilot by default, and does not mean that no pilots exist.
          </p>
          <p className="text-sm leading-5 text-stone-500">
            Lookup unavailable · No backend source connected. The doctrine remains readable.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 lg:w-72 lg:shrink-0">
          <UnavailableButton label="View Current Coverage" />
          <p className="text-sm leading-5 text-stone-500">{OUTBOUND_NOTE}</p>
          <p className="text-sm leading-5 text-stone-500">
            Verify capability, relevant jurisdiction, service, restrictions and currentness together.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
