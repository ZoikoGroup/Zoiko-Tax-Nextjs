import { SectionHeading, SectionShell } from "./shared";

const FAQS = [
  {
    question: "What accessibility standard is targeted?",
    answer:
      "WCAG 2.2 AA is the target for this design. It describes intended requirements, not an attained product level. An approved statement must identify the exact standard, version, level and evaluated scope.",
  },
  {
    question: "Is ZoikoTax WCAG 2.2 AA conformant?",
    answer:
      "That is not established in this view. A formal approved conformance statement and evaluated scope are not supplied. Design targets, implementation requirements, test results and legal-compliance claims are different kinds of statements.",
  },
  {
    question: "Can I use a keyboard or screen reader?",
    answer:
      "Keyboard reachability, logical focus and semantic structure are design requirements. Actual tested product behavior and an approved browser/assistive-technology matrix have not been supplied, so no specific compatibility claim is made.",
  },
  {
    question: "Does the product work at 400% zoom and on mobile?",
    answer:
      "The design target is readable reflow and retained functions at 200% and 400% zoom, including a 320px single-column path. Verified zoom and mobile test results are not supplied. Practical targets and intended behavior are not proof of product support.",
  },
  {
    question: "How do I report an accessibility issue?",
    answer:
      "Read the reporting guidance above. Use the channel in the approved accessibility statement once published. No report endpoint or response timescale is supplied here. Share only the minimum reproduction information; a demo should not be required.",
  },
  {
    question: "Is a VPAT or ACR available?",
    answer:
      "Availability is not established. No approved ACR/VPAT file or access route has been supplied. Public, controlled and customer-specific access require separate approval. A procurement questionnaire is not formal conformance evidence.",
  },
];

export default function FAQSection() {
  return (
    <SectionShell className="bg-white" bgImage="faq-bg.webp">
      <SectionHeading
        eyebrow="14 / FREQUENTLY ASKED QUESTIONS"
        title="Direct answers. Clear boundaries."
        description="Start with what is established—and what still requires an approved source."
      />

      <dl className="flex flex-col border-t border-zinc-300">
        {FAQS.map((faq) => (
          <div key={faq.question} className="flex flex-col gap-3 border-b border-zinc-300 py-6 sm:py-7">
            <dt className="text-lg font-semibold text-zinc-900 sm:text-xl">{faq.question}</dt>
            <dd className="text-sm leading-6 text-stone-500 sm:text-base sm:leading-7 lg:pr-32">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
