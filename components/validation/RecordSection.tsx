import { SectionHeading, SectionShell } from "./shared";

const FIELDS = [
  { name: "Capability name / identifier", detail: "Identifies the capability; no internal record IDs are disclosed." },
  { name: "Country / jurisdiction / pack", detail: "Binds the record to its geographic and regulatory scope." },
  { name: "Feature scope", detail: "Defines exactly which functionality is included." },
  { name: "Status", detail: "Names the categorical state for that exact scope." },
  { name: "Effective / as-of timestamp", detail: "States when the approved scope record applies." },
  { name: "Version", detail: "Identifies the applicable capability or content version." },
  { name: "Currentness", detail: "Establishes whether the source is authorized and current." },
  { name: "Exclusions / limitations", detail: "Makes scope restrictions explicit." },
  { name: "Review / owning authority", detail: "Identifies authorized governance responsibility, where public." },
  { name: "Source / release reference", detail: "Connects the record to its approved source." },
  { name: "Approved related documents", detail: "Provides only documentation authorized for public access." },
];

export default function RecordSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Read the scope, not just the label"
        title="A status belongs to a defined record."
        description="These are the fields to look for when verifying a capability. The structure below is conceptual; it makes no availability assertion."
      />

      <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8">
        <p className="text-base font-semibold text-violet-950">Illustrative structure; not a live coverage record.</p>
        {/* Two columns that fill top-to-bottom on desktop, matching the reading order on mobile. */}
        <dl className="lg:columns-2 lg:gap-10">
          {FIELDS.map((field) => (
            <div key={field.name} className="flex break-inside-avoid flex-col gap-2 border-b border-zinc-300 py-4">
              <div className="flex items-start justify-between gap-4">
                <dt className="flex-1 text-base font-semibold text-zinc-900">{field.name}</dt>
                <dd className="shrink-0 text-sm text-stone-500">Not available</dd>
              </div>
              <dd className="text-sm leading-5 text-stone-500">{field.detail}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex flex-col gap-3 border-l-[3px] border-orange-600 py-2 pl-6">
        <span className="text-sm font-bold uppercase text-orange-600">Scope is the authority</span>
        <p className="text-base leading-7 text-zinc-900 sm:text-lg">
          Validation is not a public commitment of capability availability, country coverage, regulatory approval,
          service level or release date. Availability is determined by the current approved scope record.
        </p>
      </div>
    </SectionShell>
  );
}
