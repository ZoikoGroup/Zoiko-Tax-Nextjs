import { FileQuestion, RefreshCw, Scale, Split, Tags, Unlink } from "lucide-react";
import { IconCard, SectionHeading, SectionShell } from "./shared";

const PROBLEMS = [
  {
    icon: Split,
    title: "Fragmented fiscal positions",
    description: "Calculated, billed, recovered and reported positions live in different systems and timelines.",
  },
  {
    icon: Tags,
    title: "Classification discrepancy",
    description: "Source and governed service classifications differ and need contextual review.",
  },
  {
    icon: Scale,
    title: "Tax/fee discrepancy",
    description: "Observed tax or fee treatment differs across agreed comparison positions.",
  },
  {
    icon: RefreshCw,
    title: "Recovery discrepancy",
    description: "A determined position and billed, collected or recovered position do not align.",
  },
  {
    icon: Unlink,
    title: "Reconciliation break",
    description: "Cross-stage fiscal positions cannot yet be tied with available evidence.",
  },
  {
    icon: FileQuestion,
    title: "Proof gap",
    description: "Teams cannot reconstruct the source, version, decision or review behind an outcome.",
  },
];

export default function DirectAnswerSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Direct answer"
        title="What does ZoikoTax do for Revenue Assurance teams?"
        description="ZoikoTax helps Revenue Assurance teams identify missing tax/fees, classification anomalies and reconciliation breaks across governed telecom fiscal workflows. Shadow Assurance supports non-impact comparison of agreed source/incumbent outcomes, Reconciliation surfaces cross-stage variances, and Evidence & Replay preserves historical source, version and decision context for governed investigation."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((problem) => (
          <IconCard key={problem.title} {...problem} />
        ))}
      </div>
    </SectionShell>
  );
}
