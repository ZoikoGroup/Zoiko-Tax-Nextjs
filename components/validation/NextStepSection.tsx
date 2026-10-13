import { PillButton, ROUTES, SectionHeading, SectionShell } from "./shared";

const AUDIENCES = [
  {
    title: "For tax leads",
    path: "Understand → Verify → Discuss",
    description:
      "Start with the definition, compare the four states, then verify the exact country and capability record before discussing fit.",
    note: "A coverage label alone does not establish regulatory approval.",
    demo: true,
  },
  {
    title: "For engineers",
    path: "Integration → Docs → Scope",
    description:
      "Identify the integration topic, use approved documentation, and confirm the exact scope record before planning an implementation.",
    note: "Approved documentation destination is not available here. No sandbox, API or test access is offered.",
  },
  {
    title: "For existing customers",
    path: "Missing source → Account channels",
    description:
      "If a source is missing, use your existing authorized account channels to resolve the scope. Being a customer does not imply Production status.",
    note: "No account destination is configured on this page. Use your established channel.",
  },
];

export default function NextStepSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Choose your next step"
        title="Build decisions around verified scope."
        description="Different teams need the same foundation: a clear definition and an exact, authorized coverage record."
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {AUDIENCES.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-start gap-5 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-7"
          >
            <h3 className="text-xl text-zinc-900 sm:text-2xl">{item.title}</h3>
            <p className="text-xs font-semibold uppercase leading-4 text-orange-600">{item.path}</p>
            <p className="text-base leading-6 text-stone-500">{item.description}</p>
            <p className="text-sm leading-5 text-stone-500">{item.note}</p>
            {item.demo ? <PillButton label="Book a Demo" href={ROUTES.demo} variant="secondary" /> : null}
          </div>
        ))}
      </div>

      <p className="text-sm leading-5 text-stone-500">
        Keep public interactions free of customer, tax and personal data. Use existing authorized systems for sensitive
        implementation or account information.
      </p>
    </SectionShell>
  );
}
