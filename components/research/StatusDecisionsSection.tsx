import { Callout, SectionHeading, SectionShell } from "./shared";

const OUTCOMES = [
  { title: "Remain exploratory", description: "Continue only within the defined research boundaries." },
  { title: "Change scope", description: "Reassess the question and evidence when assumptions change." },
  { title: "Be withdrawn", description: "End the exploration without implying a supported alternative." },
  { title: "Validation candidate", description: "Only after separate approval; not Validation by default." },
];

const LINE = "absolute bg-zinc-300";

export default function StatusDecisionsSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Status decisions"
        title="No automatic advancement."
        description="Research may remain exploratory, change, be withdrawn, or become a Validation candidate after separate approval."
      />

      <div className="flex flex-col items-center">
        <div className="flex w-full max-w-[430px] flex-col gap-2.5 rounded-2xl bg-[#301153] p-6 text-center">
          <h3 className="text-xl font-bold text-white sm:text-2xl">Research review</h3>
          <p className="text-base leading-6 text-zinc-300">Evidence and accountable human decision</p>
        </div>

        {/* Tree connector: only drawn when the four outcomes sit in one row. */}
        <div aria-hidden="true" className="hidden w-full xl:block">
          <div className="mx-auto h-8 w-0.5 bg-zinc-300" />
          <div className="grid grid-cols-4 gap-4">
            {OUTCOMES.map((outcome, i) => (
              <div key={outcome.title} className="relative h-8">
                <span
                  className={`${LINE} top-0 h-0.5 ${i === 0 ? "left-1/2" : "-left-2"} ${
                    i === OUTCOMES.length - 1 ? "right-1/2" : "-right-2"
                  }`}
                />
                <span className={`${LINE} left-1/2 top-0 h-full w-0.5 -translate-x-1/2`} />
              </div>
            ))}
          </div>
        </div>

        <p className="py-4 text-sm font-semibold text-stone-500 xl:hidden">Possible outcomes</p>

        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {OUTCOMES.map((outcome) => (
            <li
              key={outcome.title}
              className="flex flex-col gap-3.5 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 xl:min-h-40"
            >
              <h3 className="text-xl leading-7 text-zinc-900 sm:text-2xl">{outcome.title}</h3>
              <p className="text-base leading-6 text-stone-500">{outcome.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <Callout bold lead="Pilot and Production have independent formal gates.">
        Neither follows automatically from Research or Validation. A decision to explore is not an invitation, a release
        commitment, or production readiness. Any public status requires its own approved scope and evidence.
      </Callout>
    </SectionShell>
  );
}
