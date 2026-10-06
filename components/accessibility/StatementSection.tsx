import { Card, Field, SectionHeading, SectionShell } from "./shared";

const FIELDS = [
  { label: "Website / product / module / document", value: "Exact evaluated scope · Source required" },
  { label: "Evaluation date / review date", value: "Source required" },
  { label: "Standard / version / level", value: "Approved wording · Not published" },
  { label: "Statement owner / contact", value: "Approved role and route · Not published" },
  { label: "Exclusions / not evaluated", value: "Explicit boundaries · Source required" },
  { label: "Commitment / limitations / evidence", value: "Approved source text · Not published" },
];

const AUTHORITIES = [
  {
    eyebrow: "TARGET →",
    title: "Design intention",
    description: "The standard and patterns a design is intended to meet.",
  },
  {
    eyebrow: "TESTED RESULT →",
    title: "Observed behavior",
    description: "A documented result for a specific task, build and test environment.",
  },
  {
    eyebrow: "APPROVED STATEMENT →",
    title: "Formal scope",
    description: "Authorized conformance wording supported by scoped evidence.",
  },
  {
    eyebrow: "LEGAL WORDING",
    title: "Separate review",
    description: "Legal-compliance wording requires its own authority and approval.",
  },
];

export default function StatementSection() {
  return (
    <SectionShell id="statement" className="bg-purple-50">
      <SectionHeading
        eyebrow="01 / STATEMENT & SCOPE"
        title="Begin with an approved statement."
        description="A useful accessibility statement identifies what it covers, what was evaluated and what remains outside its claims."
      />

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-6 rounded-3xl bg-violet-950 p-6 sm:p-8 lg:w-[460px] lg:shrink-0">
          <span className="text-xs font-bold text-orange-300">PUBLIC STATEMENT STATUS</span>
          <h3 className="text-xl font-semibold leading-8 text-white sm:text-2xl">
            Formal approved conformance statement and evaluated scope are not supplied in this view.
          </h3>
          <p className="text-base leading-7 text-zinc-300">
            Inclusive design means making information understandable and tasks usable. The approved organizational
            commitment, exact scope and responsible contact must come from the published statement—not from an
            inferred product-wide promise.
          </p>
          <p className="text-sm leading-5 text-zinc-300">
            WCAG 2.2 AA is this design’s target. It is not an assertion of attained product conformance or legal
            compliance.
          </p>
        </div>

        <div className="flex flex-1 flex-col rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8">
          <span className="text-xs font-bold text-amber-700">STATEMENT FIELD ANATOMY · NOT PUBLISHED</span>
          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {FIELDS.map((field) => (
              <Field key={field.label} {...field} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="text-xl text-zinc-900 sm:text-2xl">Four kinds of authority. No shortcuts between them.</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {AUTHORITIES.map((item) => (
            <Card key={item.title} eyebrow={item.eyebrow} title={item.title}>
              {item.description}
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
