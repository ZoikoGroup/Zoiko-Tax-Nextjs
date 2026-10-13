import { SectionHeading, SectionShell } from "./shared";

const TRANSITIONS = [
  {
    to: "Production",
    description: "Only an approved source can establish Production for its stated scope.",
    action: "Verify the new scope and effective period.",
  },
  {
    to: "Validation",
    description: "A source-approved change may place the capability under formal validation.",
    action: "Do not infer external-live availability.",
  },
  {
    to: "Restricted / withdrawn",
    description: "An approved source may restrict use or withdraw the stated deployment.",
    action: "Stop assuming access; follow authorized guidance.",
  },
  {
    to: "Unknown / expired",
    description: "Current status may no longer be established or the effective period may expire.",
    action: "Do not plan on positive current availability.",
  },
];

const UNCONFIRMED = [
  {
    title: "Status not confirmed",
    description:
      "Stale, incomplete, conflicting or timed-out information cannot establish positive current availability.",
  },
  {
    title: "Restricted information",
    description:
      "Access-restricted information remains non-disclosing. No private scope or customer details are shown.",
  },
  {
    title: "Historical only",
    description:
      "Past evidence is not current scope. Reconfirm through a current approved source before relying on it.",
  },
];

export default function TransitionsSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Transitions & currentness"
        title="Status can change. Never assume promotion."
        description="Independent, source-approved possible changes—not a success ladder or a promise of progression."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {TRANSITIONS.map((transition) => (
          <div
            key={transition.to}
            className="flex flex-col gap-3 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-7"
          >
            <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">
              Pilot <span aria-hidden="true">→</span>
              <span className="sr-only">to</span> {transition.to}
            </h3>
            <p className="text-base leading-6 text-stone-500">{transition.description}</p>
            <p className="text-sm font-semibold text-orange-800">{transition.action}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 rounded-3xl bg-[#EEE5F4] p-6 sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">When the source cannot confirm</h3>
          <span className="text-xs font-semibold uppercase text-stone-500">Illustrative states · not live records</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {UNCONFIRMED.map((state) => (
            <div key={state.title} className="flex flex-col gap-2">
              <h4 className="text-base font-bold text-zinc-900">{state.title}</h4>
              <p className="text-sm leading-6 text-stone-500">{state.description}</p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-5 text-stone-500">
          Unknown is not Pilot by default. Invalid routes stay disabled. If lookup fails, read the doctrine without
          treating cached or partial information as confirmed availability.
        </p>
      </div>
    </SectionShell>
  );
}
