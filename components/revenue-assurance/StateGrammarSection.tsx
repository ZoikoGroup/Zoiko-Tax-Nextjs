import { Database, FileCheck, GitCompareArrows, LoaderCircle, ShieldAlert, UserCheck } from "lucide-react";
import { IconCard, SectionHeading, SectionShell } from "./shared";

const STATES = [
  {
    icon: Database,
    title: "Source / baseline available",
    description: "Required observations and context are available for comparison.",
  },
  {
    icon: LoaderCircle,
    title: "Comparison in progress",
    description: "A governed comparison is underway; no conclusion is implied.",
  },
  {
    icon: GitCompareArrows,
    title: "Variance identified",
    description: "A difference has been found and classified as an investigation signal.",
  },
  {
    icon: UserCheck,
    title: "Review required",
    description: "Accountable review is needed before any governed action.",
  },
  {
    icon: FileCheck,
    title: "Reconciled / documented",
    description: "The position is tied or an accepted explanation is recorded.",
  },
  {
    icon: ShieldAlert,
    title: "Blocked / unsupported / evidence partial",
    description: "A limitation, unavailable capability or incomplete evidence is explicit.",
  },
];

export default function StateGrammarSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Assurance state, review and exception model"
        title="A visible grammar for findings, review and limits."
        description="Each state uses icon and text—not color alone. This is a conceptual public grammar for buying and workflow understanding, not the production schema."
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {STATES.map((state) => (
          <IconCard key={state.title} {...state} />
        ))}
      </div>
    </SectionShell>
  );
}
