import { CircleAlert, CircleCheck, CircleHelp, MapPinned, type LucideIcon } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";

const STATES: { label: string; icon: LucideIcon }[] = [
  { label: "Research", icon: CircleCheck },
  { label: "Validation", icon: CircleCheck },
  { label: "Pilot", icon: CircleCheck },
  { label: "Production", icon: CircleCheck },
  { label: "Managed", icon: CircleCheck },
  { label: "Suspended", icon: CircleAlert },
  { label: "Withdrawn", icon: CircleAlert },
  { label: "Status unavailable", icon: CircleHelp },
];

export default function CoverageSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Coverage"
        title="Capability readiness is explicit—and independent of a finding."
        description="Coverage describes the readiness of a jurisdiction and capability. Assurance findings do not create Coverage facts, promote a status or imply universal availability."
      />

      <ul className="flex flex-wrap gap-3">
        {STATES.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="inline-flex items-center gap-2 rounded-[999px] bg-white px-3.5 py-2 text-sm font-medium text-zinc-900 outline -outline-offset-1 outline-zinc-300"
          >
            <Icon aria-hidden="true" className="size-3.5 text-orange-600" strokeWidth={1.8} />
            {label}
          </li>
        ))}
      </ul>

      <div className="flex items-start gap-4 rounded-2xl bg-purple-100 p-5 outline -outline-offset-1 outline-zinc-300 sm:items-center sm:p-6">
        <MapPinned aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-orange-600 sm:mt-0" strokeWidth={1.5} />
        <p className="flex-1 text-sm font-medium leading-6 text-zinc-900 sm:text-base">
          Use “Status unavailable” when the state is unknown. Never infer market, jurisdiction or capability support
          from the presence of a discrepancy.
        </p>
      </div>
    </SectionShell>
  );
}
