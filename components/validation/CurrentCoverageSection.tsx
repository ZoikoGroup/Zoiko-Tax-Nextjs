import { FileQuestion } from "lucide-react";
import { PillButton, ROUTES, SectionHeading, SectionShell } from "./shared";

export default function CurrentCoverageSection() {
  return (
    <SectionShell id="verify-coverage" className="bg-[#1f0a3a]" bgImage="coverage-bg.webp">
      <SectionHeading
        dark
        eyebrow="Current coverage"
        title="Verify the exact capability and jurisdiction."
        description="Use the governed Coverage Overview and capability-pack records to establish current supported scope—not this doctrine page."
      />

      <div className="flex flex-col gap-5 rounded-3xl bg-[#301153] p-6 sm:flex-row sm:gap-8 sm:p-9">
        <FileQuestion aria-hidden="true" className="size-10 shrink-0 text-orange-300" strokeWidth={1.5} />
        <div className="flex flex-1 flex-col gap-4">
          <h3 className="text-2xl leading-8 text-white sm:text-3xl">Current coverage status cannot be verified.</h3>
          <p className="text-base leading-6 text-zinc-300">
            An authorized current coverage source is not available on this page. This does not mean there is no
            coverage, and it does not assign Validation or Pilot to any capability.
          </p>
          <div className="flex flex-col gap-2 pt-4">
            <p className="text-base font-semibold text-white">Coverage Overview / capability packs — unavailable</p>
            <p className="text-sm leading-5 text-zinc-300">
              The approved destination is not configured here. No coverage search, filters or results are shown. Verify
              the current scope through an approved channel before relying on availability.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
        <PillButton label="Book a Demo" href={ROUTES.demo} variant="secondary" />
        <p className="text-sm text-zinc-300">Discuss fit. A discussion is not deployment authorization.</p>
      </div>
    </SectionShell>
  );
}
