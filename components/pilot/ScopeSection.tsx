import { SectionHeading, SectionShell } from "./shared";

const FIELDS = [
  { field: "Capability", definition: "Exact capability label and record identity" },
  { field: "Jurisdiction / market", definition: "Relevant geographic and regulatory scope, if applicable" },
  { field: "Service / billing scenario", definition: "The scenario the classification covers" },
  {
    field: "Deployment environment / condition",
    definition: "Where and under which conditions it may operate",
  },
  { field: "Time window", definition: "Effective period and currentness" },
  { field: "Restrictions", definition: "Limits on use and reliance" },
  { field: "Authoritative status", definition: "Approved stage and its current source" },
];

export default function ScopeSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex flex-col gap-7 lg:w-[440px] lg:shrink-0">
          <SectionHeading
            eyebrow="Scope definition"
            title="Scope to confirm"
            description="The label is only the beginning. The approved record must define the boundary."
          />
          <p className="text-base leading-7 text-stone-500 sm:text-lg">
            Confirm the exact capability and the conditions that apply before relying on a Pilot statement.
          </p>
          <div className="flex flex-col gap-3 rounded-2xl bg-[#EEE5F4] p-6">
            <p className="text-lg font-semibold text-zinc-900">Eligibility is record-specific.</p>
            <p className="text-base leading-6 text-stone-500">
              Customer or tenant eligibility belongs only in an approved record. No eligibility or cohort is
              established here.
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8">
          <div className="flex flex-col gap-2 pb-6">
            <h3 className="text-xl font-bold text-zinc-900">Example fields (illustrative)</h3>
            <p className="text-sm leading-5 text-stone-500">Field definitions only · not a real Pilot record</p>
          </div>
          <dl>
            {FIELDS.map((row) => (
              <div
                key={row.field}
                className="flex flex-col gap-1 border-t border-zinc-300 py-4 sm:flex-row sm:items-start sm:gap-6"
              >
                <dt className="text-base font-semibold leading-5 text-zinc-900 sm:w-56 sm:shrink-0">{row.field}</dt>
                <dd className="flex-1 text-base leading-6 text-stone-500">{row.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionShell>
  );
}
