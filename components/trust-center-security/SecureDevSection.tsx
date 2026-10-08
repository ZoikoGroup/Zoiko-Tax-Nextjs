import { ControlCard, NoticeCard, SectionHeading, SectionShell } from "./shared";

const WORKFLOW = ["Source & scope", "Factual review", "Approval & visibility", "Publish or withhold"];

const CARDS = [
  {
    title: "Design & code review",
    description:
      "Required evidence: approved design-review scope, code-review criteria and accountable approval. No threat-modeling or review practice is inferred.",
  },
  {
    title: "Automated & manual testing",
    description:
      "Required evidence: test types, scope, cadence where approved, and current result provenance. Neither continuous scanning nor regular penetration testing is asserted.",
  },
  {
    title: "Dependencies",
    description:
      "Required evidence: approved dependency-review and change scope. Tooling, scanning coverage and results are not supplied.",
  },
  {
    title: "Release, change & recovery",
    description:
      "Required evidence: change authorization, release boundaries and recovery scope. No rollback capability or recovery performance is asserted.",
  },
];

export default function SecureDevSection() {
  return (
    <SectionShell className="bg-[url('/existing-tax-engines/0.png')] bg-cover bg-center">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="06 / SECURE DEVELOPMENT"
          title="Review the source. Then review the statement."
          description="Development and change-control topics are evidence-gated. The publication workflow below is conceptual—not confirmation that every test or control is implemented."
        />

        <div className="flex flex-col gap-4 self-stretch rounded-3xl bg-[rgba(242,234,248,1)] p-6 sm:p-7">
          <p className="self-stretch text-xs font-bold text-violet-950">
            CONCEPTUAL REVIEWED PUBLICATION WORKFLOW
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {WORKFLOW.map((step) => (
              <div key={step} className="inline-flex flex-1 flex-col items-start gap-2.5 rounded-xl bg-white p-4">
                <p className="self-stretch text-base text-zinc-900">{step}</p>
                <p className="self-stretch text-xs text-[rgba(102,95,105,1)]">Source not provided</p>
              </div>
            ))}
          </div>
          <p className="self-stretch text-sm leading-5 text-stone-500">
            Text equivalent: define the source and scope, review the facts, approve visibility, then publish
            only if evidence permits; otherwise withhold the claim.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 self-stretch md:grid-cols-2">
          {CARDS.map((card) => (
            <ControlCard
              key={card.title}
              title={card.title}
              description={card.description}
              footer="Control detail not supplied"
            />
          ))}
        </div>

        <NoticeCard
          title="Cadence and results are separate claims"
          description={
            <div className="max-w-[1100px]">
              A testing topic does not establish a testing program. Published cadence, assessment results and remediation statements each require an approved, current and scoped source.
            </div>
          }
        />
      </div>
    </SectionShell>
  );
}
