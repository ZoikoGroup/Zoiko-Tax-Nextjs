import { Blocks, FileSearch, Files, Scale, Settings, Shield, UserCheck, Users } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";

const DIMENSIONS = [
  {
    icon: Users,
    title: "User problem & business fit",
    question: "What problem is being explored, for whom, and within what boundaries?",
  },
  {
    icon: Blocks,
    title: "Technical feasibility",
    question: "What assumptions, constraints, and dependencies would need evaluation?",
  },
  {
    icon: FileSearch,
    title: "Rules & provenance",
    question: "Which sources could support a rule, and how would their lineage be reviewed?",
  },
  {
    icon: Scale,
    title: "Jurisdiction applicability",
    question: "What geographic scope would require separate assessment?",
  },
  {
    icon: Shield,
    title: "Privacy & security",
    question: "What data handling, privacy, and security questions need review?",
  },
  {
    icon: Settings,
    title: "Operational support",
    question: "What support and operating responsibilities would need to be defined?",
  },
  {
    icon: Files,
    title: "Evidence",
    question: "What evidence would be needed to support a governed decision?",
  },
  {
    icon: UserCheck,
    title: "Human approvals",
    question: "Which accountable owners must review and authorize a proposed change?",
  },
];

export default function DimensionsSection() {
  return (
    <SectionShell className="bg-white" bgImage="dimensions-bg.webp">
      <SectionHeading
        eyebrow="Evaluation dimensions"
        title="Questions to evaluate—not results to claim."
        description="These are potential review areas. Listing a dimension does not mean a review has succeeded, an approval exists, or a capability is ready."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-y-10">
        {DIMENSIONS.map(({ icon: Icon, title, question }) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 xl:min-h-52"
          >
            <Icon aria-hidden="true" className="size-7 text-orange-600" strokeWidth={1.6} />
            <h3 className="text-xl leading-7 text-zinc-900">{title}</h3>
            <p className="text-base leading-6 text-stone-500">{question}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
