import { SectionHeading, SectionShell } from "./shared";

const SOURCE_FIELDS = ["Source owner", "Source-registry version", "Last verified date"];

export default function FreshnessSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Freshness & corrections"
        title="If the source is uncertain, the assertion is withheld."
        description="A definition can stay clear even when current coverage cannot be verified."
      />

      <div className="flex flex-col items-start gap-6 lg:flex-row">
        <div className="flex w-full flex-col gap-5 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8 lg:w-[430px] lg:shrink-0">
          <h3 className="text-2xl font-bold text-zinc-900">Current source context</h3>
          <dl className="flex flex-col gap-5">
            {SOURCE_FIELDS.map((field) => (
              <div key={field} className="flex flex-col gap-1.5">
                <dt className="text-sm text-stone-500">{field}</dt>
                <dd className="text-base font-semibold text-violet-950">Unavailable</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-1 flex-col gap-6 rounded-3xl bg-[#EEE5F4] p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-zinc-900">Review, do not infer</h3>
          <p className="text-base leading-6 text-stone-500">
            Missing, stale, partial, or conflicting sources withhold an affirmative availability assertion. Do not favor
            the most optimistic state, silently rewrite historic evidence, or assign Research to an unknown record.
          </p>
          <p className="text-base leading-6 text-stone-500">
            Corrections require review by accountable coverage owners, preservation of source lineage, and authorized
            publication. Use an approved escalation or existing support channel; an approved correction destination is
            not available here.
          </p>
          <p className="text-sm leading-5 text-stone-500">
            No source owner, source version, verification date, or response timeframe is asserted on this page.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
