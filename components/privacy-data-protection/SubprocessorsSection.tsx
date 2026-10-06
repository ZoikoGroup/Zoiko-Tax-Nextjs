import { Badge, InfoCard, SectionHeading, SectionShell } from "./shared";

const CARDS = [
  {
    title: "Subprocessor source",
    description:
      "Use a current approved disclosure for source-defined relationships. A missing or stale list must not appear current.",
    badge: "Approved source not supplied",
  },
  {
    title: "Customer-directed integrations",
    description:
      "Keep integrations directed by a customer distinct from subprocessors. The actual relationship must be established by source.",
    badge: "Separate relationship scope",
  },
  {
    title: "Change notices & access",
    description:
      "Any change-notice process or controlled-access policy must be supported by the actual approved source.",
    badge: "Source required",
  },
];

export default function SubprocessorsSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="07 / SUBPROCESSORS & THIRD PARTIES"
          title="Which third-party disclosure is authoritative?"
          description="A current approved source must establish identity, purpose and location. No vendor inventory, location list or subprocessor document destination is supplied."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CARDS.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-zinc-300 sm:p-6 md:flex-row md:items-center md:gap-10 lg:gap-20">
          <p className="text-base font-bold text-zinc-900 md:w-56 md:shrink-0">Owner review is required.</p>
          <p className="flex-1 text-sm leading-6 text-stone-500">
            Before a list is presented as current, its approval, version, scope and review owner must be
            established. Review owner and currentness: Not supplied.
          </p>
          <Badge>No current list shown</Badge>
        </div>
      </div>
    </SectionShell>
  );
}
