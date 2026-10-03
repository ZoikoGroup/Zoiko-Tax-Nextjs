import { Container, Notice, SectionHeader } from "./shared";

const states = [
  {
    title: "Pending / setup",
    body: "Context is being prepared; permission is not implied.",
  },
  {
    title: "Validation",
    body: "Readiness is under review against approved gates.",
  },
  {
    title: "Active",
    body: "Only the exact approved scope is active.",
  },
  {
    title: "Restricted",
    body: "A limitation applies only as defined by its source.",
  },
  {
    title: "Suspended",
    body: "The approved policy defines suspension semantics.",
  },
  {
    title: "Migrating · optional",
    body: "Only applicable where a governed migration model exists.",
  },
  {
    title: "Offboarded / deprovisioned",
    body: "Lifecycle handling follows the approved contract.",
  },
  {
    title: "Historical · per policy",
    body: "Review and availability are policy-defined, not indefinite.",
  },
];

export default function LifecycleSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="08 / GOVERNED LIFECYCLE"
          title="State changes need authority, not assumptions."
          description="Illustrative state meanings — production taxonomy source-controlled"
        />

        <div className="self-stretch p-6 sm:p-8 bg-violet-950 rounded-3xl flex flex-col justify-start items-start gap-5">
          <span className="text-orange-300 text-xs font-bold leading-5 font-['Inter',sans-serif]">
            CONCEPTUAL TRANSITION BOUNDARY
          </span>
          <div className="self-stretch text-white text-2xl font-normal leading-9 font-['Inter',sans-serif]">
            Current source-defined state → Approved decision + evidence →
            Permitted next state
          </div>
          <p className="self-stretch text-zinc-300 text-base font-normal leading-6 font-['Inter',sans-serif]">
            Every transition depends on the actual policy, contract and
            operating model. The states below are explanatory categories, not a
            fixed progression, event contract or live organization status.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {states.map((state) => (
            <div
              key={state.title}
              className="self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4"
            >
              <div className="self-stretch text-violet-950 text-xl font-normal font-['Inter',sans-serif]">
                {state.title}
              </div>
              <div className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {state.body}
              </div>
            </div>
          ))}
        </div>

        <Notice
          title="Unknown / needs source is a safe boundary"
          body="If the governing state or procedure is missing, do not infer activation, restoration or offboarding behavior. Confirm the approved source. No trigger, notice period, retention duration, restoration promise or right to service is established here; there are no live suspend or deprovision controls."
        />
      </Container>
    </section>
  );
}
