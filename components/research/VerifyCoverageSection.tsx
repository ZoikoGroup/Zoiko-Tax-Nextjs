import { FileQuestion } from "lucide-react";
import { SectionHeading, SectionShell, UnavailableButton } from "./shared";

export default function VerifyCoverageSection() {
  return (
    <SectionShell id="verify-coverage" className="bg-white" bgImage="verify-bg.webp">
      <SectionHeading
        eyebrow="Verify coverage"
        title="Need to know what is available now?"
        description="Coverage is determined for a specific capability, geography, and state from the current authoritative coverage source."
      />

      <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-9 md:flex-row md:gap-8">
        <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[#EEE5F4]">
          <FileQuestion aria-hidden="true" className="size-7 text-violet-950" strokeWidth={1.6} />
        </span>
        <div className="flex flex-1 flex-col gap-5">
          <h3 className="text-2xl font-bold leading-8 text-zinc-900 sm:text-3xl">
            Current availability cannot be confirmed here.
          </h3>
          <p className="text-base leading-6 text-stone-500">
            A current authoritative coverage source and approved Coverage Overview destination are not available here.
            No capability status, geographic availability, or entitlement is inferred. The Research definition remains
            readable.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <UnavailableButton label="View Current Coverage" />
            <span className="text-sm text-stone-500">Approved destination unavailable</span>
          </div>
          <p className="text-base leading-6 text-stone-500">
            Before relying on availability, obtain the current capability-specific record through an approved Coverage
            or customer support channel. Unknown does not mean Research or not supported.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
