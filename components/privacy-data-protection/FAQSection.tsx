import { SectionHeading, SectionShell } from "./shared";

const FAQS = [
  {
    question: "What privacy info is published?",
    answer:
      "This public route organizes approved privacy, processing and data-protection disclosures. Approved legal documents are not supplied in this view; the document index shows source-required categories, not published artifacts.",
  },
  {
    question: "What personal data is processed?",
    answer:
      "The supplied sources do not establish the actual data inventory, scope, purposes or legal bases. Category headings are a review structure, not a claim that ZoikoTax collects every category.",
  },
  {
    question: "Controller or processor?",
    answer:
      "The supplied sources do not establish an approved role. The applicable operative source must define the role for each service or context. Do not infer a universal role from product architecture.",
  },
  {
    question: "How do I submit a privacy request?",
    answer:
      "Use the request route identified in the applicable approved notice. A public request route is not established in supplied sources. No request form or fallback mailbox is provided here.",
  },
  {
    question: "Where are the DPA and subprocessors?",
    answer:
      "The document index identifies these source categories. An approved DPA, current subprocessor list and their destinations are not supplied. Evidence & Auditability is a related Trust route, not a substitute legal source.",
  },
  {
    question: "How does privacy relate to residency?",
    answer:
      "Privacy and residency have independent source scopes. Use Data Processing & Residency at /trust/data-processing-residency/ for that scope; this privacy view does not establish hosting locations, transfer mechanisms or universal residency choices.",
  },
];

export default function FAQSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="13 / FREQUENTLY ASKED QUESTIONS"
          title="Direct answers. No inferred terms."
          description="Every answer stays within the supplied sources. All answers are shown in this expanded reading state; no hidden legal content or interaction is required."
        />

        <div className="flex flex-col pt-2">
          {FAQS.map((faq) => (
            <div key={faq.question} className="flex flex-col gap-4 border-b border-zinc-300 py-6">
              <div className="flex items-center gap-6">
                <h3 className="flex-1 text-lg text-zinc-900 sm:text-xl">{faq.question}</h3>
                <span aria-hidden="true" className="h-px w-3 shrink-0 bg-amber-700" />
              </div>
              <p className="text-sm leading-6 text-stone-500 sm:text-base sm:leading-7 lg:pr-24">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
