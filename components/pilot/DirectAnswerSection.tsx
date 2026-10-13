import { SectionHeading, SectionShell } from "./shared";

export default function DirectAnswerSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading eyebrow="Direct answer" title="What does Pilot mean in ZoikoTax coverage?" />
      <p className="text-base leading-7 text-stone-500 sm:text-lg lg:text-xl lg:leading-8">
        Pilot is a controlled, limited deployment classification. A Pilot statement is meaningful only when linked to
        the capability, scope, restrictions, effective dates and authoritative current coverage source. Pilot alone
        does not promise general availability, onboarding eligibility or Production status.
      </p>
      <div className="flex flex-col gap-2 border-t border-zinc-300 pt-6 text-sm sm:flex-row sm:gap-6">
        <p className="font-semibold text-zinc-900">A meaning, not an availability claim.</p>
        <p className="text-stone-500">This page explains the doctrine; it does not identify an active deployment.</p>
      </div>
    </SectionShell>
  );
}
