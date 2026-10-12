import { FileCheck, GitCompareArrows, Landmark, MessageSquareQuote, Network, ScanSearch, Split } from "lucide-react";
import { IconCard, IconTile, SectionShell } from "./shared";

const PROBLEMS = [
  {
    icon: Network,
    title: "Fragmented finance positions",
    description:
      "Liability, billing, recovery, filing and accounting-control outputs often live in different workflows and systems.",
  },
  {
    icon: Split,
    title: "Liability vs recovery",
    description:
      "A calculated obligation and the amount billed, collected or recovered are related positions — not interchangeable facts.",
  },
  {
    icon: Landmark,
    title: "Accrual and reporting ownership",
    description:
      "Finance needs governed fiscal inputs while retaining ownership of accounting policy, materiality and journal treatment.",
  },
  {
    icon: GitCompareArrows,
    title: "Reconciliation breaks",
    description:
      "Differences need a comparator, source trail, reason code and accountable next action — not a green status alone.",
  },
  {
    icon: FileCheck,
    title: "Audit and control pressure",
    description:
      "Teams need replayable evidence behind decisions without turning evidence into an audit opinion or approval claim.",
  },
  {
    icon: ScanSearch,
    title: "Operating-cost scrutiny",
    description:
      "Improve control visibility and investigation discipline without inventing ROI, savings or guaranteed recovery.",
  },
];

export default function DirectAnswerSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8 lg:flex-row lg:gap-11">
        <div className="flex flex-col items-start gap-3.5 lg:w-80 lg:shrink-0">
          <IconTile icon={MessageSquareQuote} size="lg" />
          <span className="text-sm font-bold uppercase text-orange-600">Direct answer</span>
          <h2 className="text-2xl font-bold leading-8 text-zinc-900 sm:text-3xl">
            Connected positions. Explicit boundaries.
          </h2>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <p className="text-xl font-semibold leading-8 text-zinc-900 sm:text-2xl">
            ZoikoTax helps CFO and finance teams connect governed telecom fiscal outcomes to liability, recovery,
            accrual, reconciliation, accounting-control outputs and evidence.
          </p>
          <p className="text-base leading-6 text-stone-500">
            It keeps finance positions and exceptions traceable while current production capability remains
            jurisdiction- and function-specific.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">Why finance-control work fragments</h2>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((problem) => (
          <IconCard key={problem.title} {...problem} />
        ))}
      </div>
    </SectionShell>
  );
}
