import { SectionHeading, SectionShell } from "./shared";

const SITUATIONS = [
  {
    title: "While a source is loading",
    detail:
      "Only the coverage source is pending. The Validation definition remains readable; no availability is implied.",
  },
  {
    title: "If a current record is verified",
    detail:
      "Only an authorized, current source can establish the exact scope. No verified record is being shown here.",
  },
  {
    title: "If a search has no verified match",
    detail: "“No verified record matched this search.” This describes that search only—not global coverage.",
  },
  {
    title: "If status is unknown",
    detail: "“Status not available.” Unknown never becomes Validation or Pilot by default.",
  },
  {
    title: "If records are stale or conflicting",
    detail: "“Current coverage status cannot be verified.” Do not rely on an outdated or conflicting state.",
  },
  {
    title: "If a record is withdrawn or superseded",
    detail: "Treat it as historical, not current availability. Check the current approved scope record.",
  },
  {
    title: "If access is not authorized",
    detail:
      "Coverage information is unavailable through this view. Use an existing authorized account channel; no private record details are disclosed.",
  },
  {
    title: "If the source service is unavailable",
    detail: "The static definition remains available. Do not infer a state from a network or service failure.",
  },
  {
    title: "If search input cannot be understood",
    detail:
      "The search could not be understood. Check the input before trying again in an approved coverage service.",
  },
];

export default function UnavailableSection() {
  return (
    <SectionShell className="bg-white" bgImage="unavailable-bg.webp">
      <SectionHeading
        eyebrow="Clarity when a source is unavailable"
        title="An unavailable status is not a coverage state."
        description="How to interpret source messages if you encounter them in a governed coverage service. These are illustrative situations, not simultaneous live results."
      />

      <div className="rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8">
        <dl className="lg:columns-2 lg:gap-10">
          {SITUATIONS.map((item) => (
            <div key={item.title} className="flex break-inside-avoid flex-col gap-2.5 border-b border-zinc-300 py-5">
              <dt className="text-lg text-zinc-900">{item.title}</dt>
              <dd className="text-base leading-6 text-stone-500">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="text-base font-medium leading-7 text-violet-950 sm:text-lg">
        When the source is missing, stale, unknown or conflicting, do not assume availability. Keep the definition,
        verify through an approved channel, and pause scope-dependent commitments.
      </p>
    </SectionShell>
  );
}
