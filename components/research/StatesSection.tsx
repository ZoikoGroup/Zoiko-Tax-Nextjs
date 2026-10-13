import { SectionHeading, SectionShell } from "./shared";

const STATES = [
  {
    name: "Production",
    summary: "Approved capability for stated scope",
    detail: "Not global or unconditional availability. The approved record defines the scope.",
  },
  {
    name: "Pilot",
    summary: "Controlled, limited deployment",
    detail: "Not general access. Participation and limits require separate authorization.",
  },
  {
    name: "Validation",
    summary: "Under formal validation",
    detail: "Not a pilot invitation or a promise of a production release.",
  },
  {
    name: "Research",
    summary: "Research stage, not marketed as production",
    detail: "Not market-ready, a supported rate, legal determination, or service promise.",
    current: true,
  },
];

export default function StatesSection() {
  return (
    <SectionShell className="bg-white" bgImage="states-bg.webp">
      <SectionHeading
        eyebrow="Coverage doctrine"
        title="Four states. Different meanings."
        description="These are independent categories—not a sequence, readiness score, or commitment to advance."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATES.map((state) => (
          <div
            key={state.name}
            className={`flex flex-col gap-4 rounded-2xl p-6 ${
              state.current
                ? "bg-[#301153] outline-2 -outline-offset-2 outline-orange-600"
                : "bg-white outline -outline-offset-1 outline-zinc-300"
            }`}
          >
            <span className={`text-xs font-bold uppercase ${state.current ? "text-orange-300" : "text-stone-500"}`}>
              {state.current ? "This page’s topic" : "Doctrine definition"}
            </span>
            <h3 className={`text-2xl font-bold sm:text-3xl ${state.current ? "text-white" : "text-zinc-900"}`}>
              {state.name}
            </h3>
            <p className={`text-lg font-semibold leading-6 ${state.current ? "text-white" : "text-zinc-900"}`}>
              {state.summary}
            </p>
            <p className={`text-base leading-6 ${state.current ? "text-zinc-300" : "text-stone-500"}`}>
              {state.detail}
            </p>
          </div>
        ))}
      </div>

      <p className="text-base leading-6 text-stone-500">
        A missing or unknown record is not Research and must not be treated as not supported. These definitions do not
        assert the status of any live capability.
      </p>
    </SectionShell>
  );
}
