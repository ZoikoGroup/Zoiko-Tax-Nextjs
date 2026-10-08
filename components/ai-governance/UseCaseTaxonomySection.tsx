import {
  ScanSearch,
  ListFilter,
  Search,
  LineChart,
  MessageSquareText,
  BookOpen,
  Info,
} from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const ROW1_CARDS = [
  {
    icon: ScanSearch,
    title: "Change monitoring & triage",
    description:
      "Assistance with identifying and organizing relevant changes. Approved sources must define what is monitored, the scope and any review responsibility.",
  },
  {
    icon: ListFilter,
    title: "Classification assistance",
    description:
      "Suggestions within an approved classification scope. A suggestion does not automatically become an accepted classification or fiscal outcome.",
  },
  {
    icon: Search,
    title: "Investigation patterns",
    description:
      "Assistive exploration of patterns or anomalies. Approval must establish the permitted context; a surfaced pattern is not a verified finding.",
  },
];

const ROW2_CARDS = [
  {
    icon: LineChart,
    title: "Advisory forecasting",
    description:
      "Forecasting only where supported by approved sources. Any advisory forecast needs scope and limitations; it does not authorize an obligation or monetary outcome.",
  },
  {
    icon: MessageSquareText,
    title: "Grounded explanation",
    description:
      "Explain approved outcomes using authorized sources. Explanation must not fabricate legal rationale or disclose internal model reasoning.",
  },
  {
    icon: BookOpen,
    title: "Document & knowledge assistance",
    description:
      "Assistance using approved documents and knowledge sources only. Retrieval, training or model capabilities are not inferred from this category.",
  },
];

export default function UseCaseTaxonomySection() {
  return (
    <SectionShell id="taxonomy" className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="02 · USE-CASE CATEGORIES"
          title="A taxonomy for disclosure. Not an active inventory."
          description="Use-case disclosure categories — actual approved scopes require governed records. Each published use case needs its purpose, capability and environment scope, authority level, source, owner role, review and visibility."
        />

        {/* Row 1 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ROW1_CARDS.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-4.5 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-7"
            >
              <card.icon className="h-6.5 w-6.5 text-[rgba(214,90,44,1)]" strokeWidth={1.5} />
              <h3 className="text-[22px] font-semibold text-[rgba(24,20,27,1)]">{card.title}</h3>
              <p className="text-base font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ROW2_CARDS.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-4.5 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-7"
            >
              <card.icon className="h-6.5 w-6.5 text-[rgba(214,90,44,1)]" strokeWidth={1.5} />
              <h3 className="text-[22px] font-semibold text-[rgba(24,20,27,1)]">{card.title}</h3>
              <p className="text-base font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional scope boundary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-6">
          <span className="text-lg font-normal text-[rgba(24,20,27,1)] shrink-0 sm:w-[270px]">
            Other use cases
          </span>
          <span className="text-base font-normal text-[rgba(102,95,105,1)]">
            Only through formal approval. A new category is not permission to expand capability, use new data or grant fiscal authority.
          </span>
        </div>

        {/* Source notice */}
        <div className="w-full rounded-2xl bg-[rgba(255,240,231,1)] border border-[rgba(234,204,185,1)] p-6 flex items-start gap-4">
          <Info className="w-5.5 h-5.5 text-[rgba(214,90,44,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="text-base font-semibold text-[rgba(24,20,27,1)]">
              Actual approved scopes are not supplied
            </h4>
            <p className="text-[15px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              No active use-case inventory, implementation details or approval records are supplied in this view. The categories above must not be read as a list of available features.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
