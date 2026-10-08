import { Minus } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const FAQS = [
  {
    question: "How govern AI?",
    answer:
      "AI assistance belongs within approved purpose and scope, with explicit authority boundaries and source-backed disclosures. Actual system lifecycle, roles, controls and review details require governed records; they are not supplied in this view.",
  },
  {
    question: "Can AI make authoritative fiscal decisions?",
    answer:
      "AI assistance does not confer independent fiscal authority. Suggestions are not automatically accepted decisions. Law, rates, filing, remittance and Coverage authority remain subject to approved authority boundaries and governed action.",
  },
  {
    question: "How evaluated?",
    answer:
      "A valid evaluation disclosure needs the use case and environment, approved method and safe data, defined metrics where applicable, limitations and current source approval. Evaluation material and results are not supplied here; no performance score should be inferred.",
  },
  {
    question: "Human review required?",
    answer:
      "Human review applies where the approved use case or fiscal action requires it. The source must define review roles, decision rights, escalation and customer duties. This page does not assert universal review or an implemented review workflow.",
  },
  {
    question: "Model changes controlled?",
    answer:
      "Model, provider, configuration, instruction, data-source and capability changes need source-defined impact review, approval and public claim gates. Exact release controls and current versions require approved disclosure; no live release state is shown.",
  },
  {
    question: "How protect AI data?",
    answer:
      "Use approved Security, Privacy and Data Processing & Residency sources for exact controls, data domains, locations, retention and training or reuse terms. No provider, encryption, residency or customer-training yes-or-no claim is established by this page.",
  },
];

export default function FAQSection() {
  return (
    <SectionShell id="faq" imageSrc="/existing-tax-engines/0.png">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="13 · COMMON QUESTIONS"
          title="Direct answers. No inflated claims."
          description="Stable authority doctrine is separated from implementation detail. Where a concrete answer needs an approved source, that requirement is made explicit."
        />

        {/* Questions and visible answers */}
        <div className="divide-y divide-[rgba(216,206,221,1)]">
          {FAQS.map((faq, i) => (
            <div key={i} className="flex flex-col gap-3.5 py-6.5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-[21px] font-semibold text-[rgba(24,20,27,1)]">
                  {faq.question}
                </h3>
                <Minus className="h-5 w-5 text-[rgba(214,90,44,1)] shrink-0" strokeWidth={2} />
              </div>
              <p className="max-w-[1130px] text-base font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
