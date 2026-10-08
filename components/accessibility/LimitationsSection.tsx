import { Field, NoticeCard, SectionHeading, SectionShell } from "./shared";

const RECORD_FIELDS = [
  { label: "Issue / affected task / scope", value: "Source required" },
  { label: "Governed status / approved target", value: "Not published" },
  { label: "Validation evidence / source", value: "Not published" },
  { label: "User impact / verified workaround", value: "Source required · No workaround supplied" },
  { label: "Fix date / version", value: "Approved source required" },
  { label: "Statement scope alignment", value: "Review required before any claim" },
];

export default function LimitationsSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="09 / KNOWN LIMITATIONS"
        title="Missing information is not “no issues.”"
        description="Limitations should describe the affected task, the practical impact and any verified workaround. Material issues must align with the scope of a formal claim."
      />

      <NoticeCard title="Approved limitations inventory is not supplied">
        This does not mean that there are no accessibility issues. No actual issue, workaround, remediation deadline or
        resolved result is established in this view.
      </NoticeCard>

      <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8">
        <span className="text-xs font-bold text-amber-700">ILLUSTRATIVE RECORD ANATOMY · NO ISSUE INVENTORY</span>
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {RECORD_FIELDS.map((field) => (
            <Field key={field.label} {...field} />
          ))}
        </div>
        <p className="text-sm leading-5 text-stone-500">
          Allowed record states: Known / Planned / In remediation / Resolved / Not applicable. These are governed
          labels, not product statuses. “Resolved” requires verified validation evidence.
        </p>
      </div>
    </SectionShell>
  );
}
