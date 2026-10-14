import { SOURCES } from "./data";
import { PillButton, SectionHeading, SectionShell } from "./shared";

const OWNERS = [
  { title: "API contracts", detail: "The API owner governs contract versions." },
  { title: "Supported clients", detail: "The SDK owner governs supported versions." },
  { title: "Implementation context", detail: "The guide source governs reviewed context." },
];

const CONDITIONS = [
  {
    title: "If a source moves",
    detail: "Follow its confirmed canonical destination. Do not treat an old route as a second source.",
  },
  {
    title: "If unavailable or withdrawn",
    detail: "Keep the purpose visible. Explain the condition and offer a governed adjacent resource.",
  },
  {
    title: "If authority conflicts or is unknown",
    detail: "Do not guess which contract is current. Return to the owning source for resolution.",
  },
];

const NOTES = [
  {
    title: "No search match?",
    detail:
      "Clear filters, browse the public route list above, or try an adjacent resource. Task definitions remain visible if a result is absent.",
  },
  {
    title: "A source has not loaded?",
    detail:
      "Keep the resource space and its purpose visible while loading. A broken canonical link needs correction before publication—not a healthy-status badge.",
  },
];

export default function VersionSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Version & change"
        title="Check the change. Not a copied release note."
        description="Compatibility decisions belong to the source that owns the contract, client or implementation guidance."
      />

      <div className="flex flex-col gap-6 rounded-3xl bg-[#301153] p-6 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">API Changelog is the change authority.</h3>
          <p className="text-base leading-6 text-zinc-300">
            Review version and compatibility changes at the canonical source. No latest version, release date or
            deprecation deadline is reproduced here.
          </p>
          <span className="font-mono text-sm text-zinc-300">{SOURCES.changelog.path}</span>
        </div>
        <div className="shrink-0">
          <PillButton label="View API Changelog" href={SOURCES.changelog.href} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {OWNERS.map((item) => (
          <div key={item.title} className="flex flex-col gap-3 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300">
            <h3 className="text-xl font-bold text-zinc-900">{item.title}</h3>
            <p className="text-base leading-6 text-stone-500">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 rounded-2xl bg-[#EEE5F4] p-6 md:flex-row md:items-start md:gap-10">
        <p className="text-base font-bold text-violet-950 md:w-52 md:shrink-0">Currentness is not assumed.</p>
        <p className="flex-1 text-base leading-6 text-stone-500">
          Owner and reviewed-date metadata have not been supplied for this portal. Resource review metadata is not
          provided here; verify at the owning source. A public link is not proof of current production availability.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-zinc-900 sm:text-3xl">When a resource cannot answer your question</h3>
          <p className="text-sm leading-5 text-stone-500">
            Conditional guidance only. These examples do not declare the listed canonical resources unavailable,
            withdrawn or in conflict.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CONDITIONS.map((item) => (
            <div key={item.title} className="flex flex-col gap-3 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300">
              <h4 className="text-lg font-bold text-violet-950">{item.title}</h4>
              <p className="text-sm leading-6 text-stone-500">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 px-0 md:grid-cols-2 md:gap-24 md:px-6">
          {NOTES.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <h4 className="text-base font-bold text-zinc-900">{item.title}</h4>
              <p className="text-sm leading-6 text-stone-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
