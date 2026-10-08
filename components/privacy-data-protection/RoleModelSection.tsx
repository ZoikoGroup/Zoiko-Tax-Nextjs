import { InfoCard, NoticeCard, SectionHeading, SectionShell } from "./shared";

const ROLES = [
  {
    title: "Controller",
    description:
      "The operative source must establish any controller role and the service or context to which it applies.",
  },
  {
    title: "Processor",
    description:
      "The operative source must establish any processor role, including the scope of the relationship.",
  },
  {
    title: "Customer instruction",
    description: "Any instruction relationship and DPA connection must come from the actual approved source.",
  },
];

const COLUMNS = ["Service / context", "Operative source", "Approved role wording", "Scope", "Currentness"];

export default function RoleModelSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="04 / ROLE MODEL"
          title="Controller or processor? The context controls."
          description="Controller, Processor and Customer instruction are relationship concepts to be defined by the applicable approved legal source. They are not universal ZoikoTax status labels."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {ROLES.map((role) => (
            <InfoCard key={role.title} {...role} badge="Approved wording required" />
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300">
          <div className="hidden gap-5 bg-purple-100 p-5 text-xs text-violet-950 md:grid md:grid-cols-5">
            {COLUMNS.map((column) => (
              <span key={column}>{column}</span>
            ))}
          </div>
          <dl className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-5 md:gap-5">
            {COLUMNS.map((column) => (
              <div key={column} className="flex flex-col gap-1">
                <dt className="text-xs text-violet-950 md:sr-only">{column}</dt>
                <dd className="text-sm text-stone-500">Not supplied</dd>
              </div>
            ))}
          </dl>
        </div>

        <NoticeCard
          title="Do not infer a role from product architecture."
          description="No DPA terms, legal-approved relationship wording or universal controller / processor designation is supplied. The table is a disclosure structure, not a contract or legal advice."
        />
      </div>
    </SectionShell>
  );
}
