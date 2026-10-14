import { Callout, SectionHeading, SectionShell, UnavailableButton } from "./shared";

const AUDIENCES = [
  {
    audience: "Engineer",
    title: "Understand the architecture",
    description:
      "Use approved architecture and documentation to assess design constraints. Global architecture does not establish live market coverage.",
    button: "View approved architecture/docs",
    note: "Approved docs destination unavailable. Use your authorized documentation channel.",
  },
  {
    audience: "Buyer",
    title: "Qualify supported scope",
    description:
      "A demo conversation must concern currently supported scope that is separately confirmed. It does not grant Research access or customer entitlement.",
    button: "Book a Demo",
    note: "Approved demo destination unavailable. Confirm supported scope before arranging a conversation.",
  },
  {
    audience: "Compliance",
    title: "Verify the source and scope",
    description:
      "Review the governed capability-specific Coverage record and approved Trust sources. Research is not a tax or regulatory determination.",
    button: "View coverage",
    note: "Approved Coverage and Trust destinations unavailable. Request governed sources through an authorized channel.",
  },
];

export default function NextStepSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading eyebrow="Your next step" title="Different questions. The same coverage discipline." />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {AUDIENCES.map((item) => (
          <div
            key={item.audience}
            className="flex flex-col items-start gap-5 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-7"
          >
            <span className="text-xs font-bold uppercase text-orange-600">{item.audience}</span>
            <h3 className="text-xl font-bold leading-8 text-zinc-900 sm:text-2xl">{item.title}</h3>
            <p className="text-base leading-6 text-stone-500">{item.description}</p>
            <UnavailableButton label={item.button} />
            <p className="text-sm leading-5 text-stone-500">{item.note}</p>
          </div>
        ))}
      </div>

      <Callout lead="Existing customer?">
        Use your authoritative support and entitlement channels for the scope you are permitted to use. Research does
        not expand an existing agreement or provide speculative access.
      </Callout>
    </SectionShell>
  );
}
