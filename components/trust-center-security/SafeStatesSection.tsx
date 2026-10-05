import { SectionHeading, SectionShell } from "./shared";

const STATES = [
  {
    title: "Source unavailable",
    description: "No control claim can be confirmed. Keep the source requirement visible.",
    footer: "Illustrative · No assurance substituted",
  },
  {
    title: "Controlled artifact",
    description: "Explain the access boundary; do not expose report contents or a public download.",
    footer: "Illustrative · Review required",
  },
  {
    title: "Retired claim",
    description: "Withdrawn or superseded material must not appear as current assurance.",
    footer: "Illustrative · Not current",
  },
  {
    title: "Stale review",
    description: "Without a current required review, withhold the affected statement.",
    footer: "Illustrative · Publication blocked",
  },
  {
    title: "Eligibility pending",
    description: "A request is not approved while eligibility, NDA or scope review is unresolved.",
    footer: "Illustrative · No access granted",
  },
  {
    title: "Route failure",
    description: "Show the destination and preserve core Trust routes. Do not invent a replacement endpoint.",
    footer: "Illustrative · Route not confirmed",
  },
  {
    title: "Restricted detail",
    description: "Keep a safe public boundary statement; sensitive detail remains controlled.",
    footer: "Illustrative · Detail withheld",
  },
  {
    title: "No-JS fallback",
    description: "Core public doctrine and canonical routes remain readable without expanded panels.",
    footer: "Illustrative · Public text retained",
  },
];

export default function SafeStatesSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="13 / SAFE STATES"
          title="When evidence stops, assurance stops."
          description="Illustrative public states below keep the boundary explicit. They are not live portal conditions, request decisions or substitutes for missing evidence."
        />

        <div className="grid grid-cols-1 gap-4 self-stretch md:grid-cols-2 xl:grid-cols-4">
          {STATES.map((state) => (
            <div
              key={state.title}
              className="flex flex-col gap-3.5 self-stretch rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-zinc-300"
            >
              <h3 className="text-xl font-semibold leading-6 text-zinc-900">{state.title}</h3>
              <p className="text-base leading-6 text-stone-500">{state.description}</p>
              <div className="inline-flex items-start border-t border-zinc-300 pt-3">
                <p className="flex-1 text-xs font-semibold leading-5 text-violet-950">{state.footer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="inline-flex w-full flex-col items-start gap-8 rounded-2xl bg-purple-100 p-6 sm:p-7 lg:flex-row">
          <div className="inline-flex w-full flex-col items-start gap-3 lg:w-[460px] lg:shrink-0">
            <h3 className="self-stretch text-xl text-zinc-900">Core routes stay in the public text.</h3>
            <p className="self-stretch text-base leading-6 text-stone-500">
              Assurance and disclosure do not depend on a hidden menu, hover or an automatically approved
              request. All FAQ answers below are expanded.
            </p>
          </div>
          <div className="inline-flex w-full flex-1 flex-col items-start gap-1.5 rounded-xl outline outline-2 outline-offset-[-2px] outline-violet-950 p-3">
            <p className="text-xs font-semibold text-violet-950">ILLUSTRATIVE KEYBOARD FOCUS</p>
            <div className="flex flex-col items-start gap-1.5 self-stretch py-3.5">
              <span className="self-stretch text-base font-semibold leading-6 text-orange-600">
                Trust Center →
              </span>
              <span className="self-stretch text-xs leading-5 text-stone-500">/trust/</span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
