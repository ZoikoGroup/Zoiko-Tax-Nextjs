import { Minus } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";

const FAQS = [
  {
    question: "What does ZoikoTax do for CFO and finance teams?",
    answer:
      "ZoikoTax connects governed telecom fiscal outcomes to liability, recovery, accrual, filing and remittance positions, reconciliation, accounting-control outputs and replayable evidence. It keeps each position and authority boundary distinct.",
  },
  {
    question: "How does ZoikoTax connect tax liability, recovery and accrual positions?",
    answer:
      "It preserves a common lineage from source facts and approved rule versions through calculated liability, billed and recovered positions, and governed accrual inputs. Customer finance teams retain ownership of accounting policy and treatment.",
  },
  {
    question: "How does reconciliation connect billing, filing, remittance and accounting outputs?",
    answer:
      "Reconciliation compares defined positions, periods and sources, then records matched, variant, unknown, evidence-partial, review-required or blocked states. A match means comparator agreement only; it is not legal correctness or audit approval.",
  },
  {
    question: "Does ZoikoTax replace our ERP or general ledger?",
    answer:
      "No. ZoikoTax is the telecom fiscal-control layer that integrates with billing, ERP, general ledger, tax engines, e-invoicing networks and data workflows. It provides governed handoffs and evidence rather than replacing those systems.",
  },
  {
    question: "Can ZoikoTax preserve evidence behind historical fiscal positions?",
    answer:
      "Yes, where the applicable capability is supported. Evidence can retain source provenance, input facts, approved rule and content versions, position lineage, approvals and workflow context. Historical replay remains separate from current-policy comparison.",
  },
  {
    question: "How does ZoikoTax use AI for anomaly investigation and forecasting?",
    answer:
      "AI may assist anomaly investigation, forecasting and simulation, variance clustering, explanation, extraction, research and classification proposals. Approved deterministic rules and governed human decisions remain authoritative; AI never guarantees a fiscal or accounting outcome.",
  },
  {
    question: "How does Coverage affect finance-facing capabilities?",
    answer:
      "Coverage is assessed by jurisdiction, capability, pack and operating mode. Research, Validation, Pilot, Production, Managed, Suspended, Withdrawn and Status unavailable communicate readiness; one supported fiscal capability does not imply accounting-policy support or another capability’s readiness.",
  },
];

export default function FAQSection() {
  return (
    <SectionShell className="bg-white" bgImage="coverage-bg.webp">
      <SectionHeading
        eyebrow="Frequently asked questions"
        title="Direct answers. No inflated claims."
        description="The finance-control model is strongest when scope, ownership, authority, evidence and uncertainty remain explicit."
      />

      <dl className="overflow-hidden rounded-3xl bg-white outline -outline-offset-1 outline-zinc-300">
        {FAQS.map((faq, i) => (
          <div
            key={faq.question}
            className={`flex items-start gap-3.5 px-5 py-6 sm:gap-5 sm:px-6 ${i > 0 ? "bg-stone-50/60" : ""} ${
              i < FAQS.length - 1 ? "border-b border-zinc-300" : ""
            }`}
          >
            <span
              aria-hidden="true"
              className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-xs font-bold text-orange-600"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-1 flex-col gap-2.5">
              <dt className="text-base font-bold leading-6 text-zinc-900">{faq.question}</dt>
              <dd className="text-sm leading-5 text-stone-500">{faq.answer}</dd>
            </div>
            <Minus aria-hidden="true" className="mt-1 hidden size-4 shrink-0 text-orange-600 sm:block" strokeWidth={2} />
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
