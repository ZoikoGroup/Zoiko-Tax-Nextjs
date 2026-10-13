import Image from "next/image";
import { IMAGE_BASE, SectionHeading, SectionShell } from "./shared";

const STATES = [
  {
    name: "Production",
    summary: "Approved capability for stated scope",
    detail: "Approval is limited to the scope stated in the current record.",
  },
  {
    name: "Pilot",
    summary: "Controlled, limited deployment",
    detail: "Separate authorization and limits govern a controlled deployment.",
  },
  {
    name: "Validation",
    summary: "Under formal validation",
    detail: "Formal assessment does not establish production availability.",
    current: true,
  },
  {
    name: "Research",
    summary: "Research stage, not marketed as production",
    detail: "Exploration is not a statement of deployable capability.",
  },
];

export default function DirectAnswerSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading eyebrow="Direct answer" title="What does Validation mean in ZoikoTax coverage?" />
      <p className="text-base leading-7 text-stone-500 sm:text-lg lg:text-xl lg:leading-8">
        Validation means a defined capability is under formal validation against governed readiness requirements. The
        status applies only to the exact capability and jurisdiction recorded, if any. It is not the same as Pilot
        deployment or Production approval, and it does not promise when either will become available.
      </p>

      <div id="coverage-states" className="flex scroll-mt-24 flex-col gap-6 pt-6">
        <h3 className="text-2xl font-bold text-zinc-900 sm:text-3xl">Different meanings. Not a progression.</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STATES.map((state) => (
            <div
              key={state.name}
              className={`relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6 outline -outline-offset-1 outline-zinc-300 ${
                state.current ? "bg-[#301153]" : "bg-neutral-50"
              }`}
            >
              {state.current ? null : (
                <Image
                  src={`${IMAGE_BASE}/state-card.webp`}
                  alt=""
                  aria-hidden="true"
                  fill
                  unoptimized
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              )}
              <span
                className={`relative text-xs font-semibold uppercase ${
                  state.current ? "text-orange-300" : "text-stone-500"
                }`}
              >
                {state.current ? "Page topic" : "Categorical definition"}
              </span>
              <h4 className={`relative text-2xl font-bold ${state.current ? "text-white" : "text-zinc-900"}`}>
                {state.name}
              </h4>
              <p className={`relative text-lg font-semibold leading-6 ${state.current ? "text-white" : "text-zinc-900"}`}>
                {state.summary}
              </p>
              <p className={`relative text-base leading-6 ${state.current ? "text-zinc-300" : "text-stone-500"}`}>
                {state.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="text-base leading-6 text-stone-500">
          A state applies to an exact capability, jurisdiction and version—not to the platform globally. No state
          automatically promotes to another.
        </p>
      </div>
    </SectionShell>
  );
}
