import { SectionHeading, SectionShell } from "./shared";

const FAQS = [
  {
    question: "What does ZoikoTax do for Revenue Assurance teams?",
    answer:
      "ZoikoTax connects governed comparison, discrepancy classification, investigation, reconciliation and replayable evidence across telecom fiscal workflows. It helps surface missing tax/fees, classification anomalies and reconciliation breaks while keeping findings distinct from proof of error or recoverability.",
  },
  {
    question: "How can Revenue Assurance teams identify missing tax/fees and reconciliation breaks?",
    answer:
      "Teams compare agreed source or incumbent observations with governed fiscal positions, then trace variances through calculated, billed, collected or recovered, reported, paid and accounting-control stages. Each result remains contextualized by source, entity, version and evidence state.",
  },
  {
    question: "Does a discrepancy or Shadow Assurance finding prove an error?",
    answer:
      "No. A discrepancy is an investigation signal. A match, disagreement or Shadow Assurance finding does not independently prove error, leakage, recoverability, blame or legal correctness; governed review is required.",
  },
  {
    question: "How are classification, taxation, recovery and reconciliation discrepancies kept distinct?",
    answer:
      "The control model records the observed source position, classification discrepancy, tax/fee discrepancy, recovery discrepancy, reconciliation break and evidence/review state as separate concepts with explicit handoffs.",
  },
  {
    question: "How does Evidence & Replay support investigation?",
    answer:
      "Evidence & Replay preserves source provenance, comparison inputs, rule/content versions, fiscal and downstream positions, uncertainty and review or approval context so teams can reconstruct why a discrepancy existed and what changed over time.",
  },
  {
    question: "How does ZoikoTax use AI in Revenue Assurance workflows?",
    answer:
      "AI may assist anomaly investigation, classification proposals, clustering, explanation, evidence extraction, forecasting, research and summarization. Approved rules and governed review decide outcomes; AI does not declare error, authorize correction or replace accountable review.",
  },
  {
    question: "How does Coverage affect Revenue Assurance availability?",
    answer:
      "Coverage indicates capability readiness by jurisdiction and state—Research, Validation, Pilot, Production, Managed, Suspended, Withdrawn or Status unavailable. Findings do not create Coverage facts, and availability varies by jurisdiction and capability.",
  },
];

export default function FAQSection() {
  return (
    <SectionShell className="bg-white" bgImage="faq-bg.webp">
      <SectionHeading
        eyebrow="FAQ"
        title="Direct answers. No inflated claims."
        description="Seven practical questions for Revenue Assurance, fiscal operations, tax, finance and technology buyers."
      />

      <dl className="overflow-hidden rounded-3xl bg-white outline -outline-offset-1 outline-zinc-300">
        {FAQS.map((faq, i) => (
          <div
            key={faq.question}
            className={`flex flex-col gap-3 px-5 py-6 sm:px-7 lg:flex-row lg:gap-10 ${
              i < FAQS.length - 1 ? "border-b border-zinc-300" : ""
            }`}
          >
            <dt className="flex items-start gap-3 text-base font-bold leading-6 text-zinc-900 lg:w-[400px] lg:shrink-0">
              <span aria-hidden="true" className="text-xs font-bold leading-5 text-orange-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              {faq.question}
            </dt>
            <dd className="flex-1 pl-7 text-sm leading-6 text-stone-500 lg:pl-0">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
