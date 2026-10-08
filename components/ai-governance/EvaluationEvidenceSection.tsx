import { FileCheck2, Lock, FileQuestion, Info } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const STATE_CARDS = [
  {
    icon: FileCheck2,
    tag: "PUBLISHED PROOF",
    title: "Public",
    description:
      "Only approved material may be published. A public artifact should identify its scope, method, source, current review and limitations.",
  },
  {
    icon: Lock,
    tag: "RESTRICTED VISIBILITY",
    title: "Controlled",
    description:
      "Sensitive material belongs on an authorized controlled route where one is defined. This label does not promise access, a portal or an approval outcome.",
  },
  {
    icon: FileQuestion,
    tag: "NO SUPPORTING MATERIAL",
    title: "Unavailable",
    description:
      "Missing or unpublished evidence must remain visibly unavailable. It cannot be replaced by an invented report, a performance badge or an implied assurance claim.",
  },
];

const REQUIREMENTS = [
  {
    label: "SCOPE & DATA",
    description:
      "Use case and environment; safe approved dataset or benchmark; relevant limitations.",
  },
  {
    label: "METHOD & APPROVAL",
    description:
      "Methodology, source owner, review date and approval; human evaluation where source-defined.",
  },
  {
    label: "METRICS & TESTS",
    description:
      "Defined current metrics and thresholds only; adversarial and edge-case testing only where approved.",
  },
];

export default function EvaluationEvidenceSection() {
  return (
    <SectionShell id="evidence" className="bg-[rgba(48,17,83,1)]" imageSrc="/about-us/AI governance evidence.png">
      <div className="flex flex-col gap-9">
        <SectionHeading
          dark
          eyebrow="06 · EVALUATION, VALIDATION & QUALITY EVIDENCE"
          title="Evidence before performance claims."
          description="An evaluation claim needs a defined use case and environment, approved methodology and current source approval. A score without its scope, method and limitations is not assurance."
        />

        {/* Source notice */}
        <div className="w-full rounded-2xl bg-white/5 border border-[rgba(98,71,121,1)] p-6 flex items-start gap-4">
          <Info className="w-5.5 h-5.5 text-[rgba(244,162,97,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="text-base font-semibold text-white">
              Evaluation material is not supplied; publication requires scope, method and current approval.
            </h4>
            <p className="text-[15px] font-normal leading-relaxed text-[rgba(217,208,223,1)]">
              No evaluation reports, benchmarks, metrics, thresholds, review dates or results are supplied in this view. There are no public report downloads here.
            </p>
          </div>
        </div>

        {/* Evidence state definitions */}
        <div className="flex flex-col gap-5">
          <span className="text-sm font-semibold text-[rgba(217,208,223,1)]">
            Illustrative evidence states · These cards do not represent available artifacts
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STATE_CARDS.map((card, i) => (
              <div
                key={i}
                className="flex flex-col gap-4.5 rounded-2xl bg-white/5 border border-[rgba(98,71,121,1)] p-7"
              >
                <card.icon className="h-6.5 w-6.5 text-[rgba(244,162,97,1)]" strokeWidth={1.5} />
                <span className="text-xs font-bold uppercase tracking-wider text-[rgba(244,162,97,1)]">
                  {card.tag}
                </span>
                <h3 className="text-[22px] font-semibold text-white">{card.title}</h3>
                <p className="text-base font-normal leading-relaxed text-[rgba(217,208,223,1)]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Evaluation publication requirements banner */}
        <div className="flex flex-col gap-6 rounded-2xl bg-[rgba(29,3,59,1)] p-7">
          <h3 className="text-[22px] font-normal text-white">
            What an approved evaluation disclosure needs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {REQUIREMENTS.map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[rgba(244,162,97,1)]">
                  {item.label}
                </span>
                <p className="text-[15px] font-normal leading-relaxed text-[rgba(217,208,223,1)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
