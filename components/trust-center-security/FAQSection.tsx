import { SectionHeading, SectionShell } from "./shared";

const FAQS = [
  {
    question: "How does ZoikoTax approach security?",
    answer:
      "This page defines an evidence-bound publication approach: only current, approved security architecture and control statements may be published within their verified scope. The supplied sources do not establish an implemented control inventory. Security reduces risk; it does not eliminate threats.",
  },
  {
    question: "What controls are published?",
    answer:
      "No verified security control inventory has been supplied. The domains on this page describe the sources, scope and approval required for publication—not a list of implemented or certified controls. Unsupported, expired or ambiguous statements must not be treated as current assurance.",
  },
  {
    question: "How is sensitive-data access controlled?",
    answer:
      "The supplied sources do not verify access mechanisms. Any public statement would need approved authentication, authorization, privileged-access and data-scope evidence. Sensitive assurance reports have a separate controlled-access boundary; that is not proof of a product access feature.",
  },
  {
    question: "How do I report vulnerabilities?",
    answer:
      "Use Responsible Disclosure at /trust/responsible-disclosure/ for governed reporting guidance. Vulnerability reporting is separate from sales. Do not publish exploit details or submit sensitive vulnerability contents through a commercial inquiry. No response timeline is supplied here.",
  },
  {
    question: "Can I request security evidence?",
    answer:
      "Only where a current source-defined request process permits it. Eligibility, any NDA, permitted scope and Trust / Legal / Security review may govern access. Approved artifact and process details are not supplied; a request does not guarantee access or fulfillment. See /trust/evidence-auditability/ for the related Trust destination.",
  },
  {
    question: "How current are security claims?",
    answer:
      "Currentness depends on the approved source, service scope, review, expiry and supersession state. Review dates are not supplied. Stale, withdrawn or ambiguous required evidence prevents current publication; public summaries do not override signed agreements or scoped controlled reports.",
  },
];

export default function FAQSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="14 / FAQ"
          title="Direct answers. No inflated claims."
          description="All answers are shown in full. No expanded interaction is needed to understand the evidence boundary."
        />

        <div className="flex flex-col items-start self-stretch">
          {FAQS.map((faq) => (
            <div key={faq.question} className="flex w-full flex-col items-start gap-4 border-t border-zinc-300 py-7">
              <div className="inline-flex w-full items-center gap-6">
                <h3 className="flex-1 text-xl text-zinc-900">{faq.question}</h3>
                <div className="size-5 relative overflow-hidden">
                  <div className="absolute left-[4.16px] top-[10px] h-0 w-3 outline outline-1 outline-offset-[-0.50px] outline-orange-600" />
                </div>
              </div>
              <p className="self-stretch text-base leading-7 text-stone-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
