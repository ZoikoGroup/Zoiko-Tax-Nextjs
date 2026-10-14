import { SectionHeading, SectionShell } from "./shared";

const CATEGORIES = [
  { name: "Production", summary: "Approved capability for stated scope", detail: "Not all markets or users." },
  {
    name: "Managed",
    summary: "Production plus approved managed service",
    detail: "Not every Production capability.",
  },
  {
    name: "Pilot",
    summary: "Controlled, limited deployment",
    detail: "Not open beta or regulator signoff.",
    current: true,
  },
  { name: "Validation", summary: "Under formal validation", detail: "Not external-live availability." },
  {
    name: "Research",
    summary: "Research stage; not marketed as production",
    detail: "Not an ETA or customer eligibility.",
  },
];

export default function DoctrineSection() {
  return (
    <SectionShell id="coverage-stages" className="bg-white" bgImage="doctrine-bg.webp">
      <SectionHeading
        eyebrow="Coverage doctrine"
        title="Different classifications. Different meanings."
        description="Read each category independently. These are definitions, not a progression or a list of live offerings."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:lg:col-span-1">
        {CATEGORIES.map((category) => (
          <div
            key={category.name}
            className={`flex flex-col gap-5 rounded-2xl p-6 outline -outline-offset-1 xl:min-h-64 ${
              category.current ? "bg-[#301153] outline-[#301153]" : "bg-white outline-zinc-300"
            }`}
          >
            <span
              className={`text-xs font-semibold uppercase ${category.current ? "text-orange-300" : "text-stone-500"}`}
            >
              {category.current ? "Current topic" : "Doctrine category"}
            </span>
            <h3 className={`text-2xl font-bold ${category.current ? "text-white" : "text-zinc-900"}`}>
              {category.name}
            </h3>
            <p className={`text-base font-semibold leading-6 ${category.current ? "text-white" : "text-zinc-900"}`}>
              {category.summary}
            </p>
            <p className={`text-base leading-6 ${category.current ? "text-zinc-300" : "text-stone-500"}`}>
              {category.detail}
            </p>
          </div>
        ))}
      </div>

      <p className="text-sm leading-5 text-stone-500">
        Pilot is highlighted as the subject of this page, not as a confirmed coverage record. Managed is an
        informational category only; no automatic advancement is implied.
      </p>
    </SectionShell>
  );
}
