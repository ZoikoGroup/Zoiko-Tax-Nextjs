import { SectionHeading, SectionShell } from "./shared";

const FAQS = [
  {
    question: "What is Validation?",
    answer:
      "Validation means a defined capability is under formal validation. The status applies only to the exact capability and jurisdiction recorded, if any; it is not a platform-wide availability statement.",
  },
  {
    question: "Is Validation production-ready?",
    answer:
      "No. Validation does not establish Production approval, deployment eligibility or a release date. Verify the current approved scope record before making an availability-dependent decision.",
  },
  {
    question: "Can I join a Pilot?",
    answer:
      "Validation does not confer Pilot eligibility or enrollment. Pilot is a separate, controlled and limited deployment that requires its own authorization. No Pilot application or test access is offered here.",
  },
  {
    question: "Does Validation cover every country?",
    answer:
      "No. Coverage is capability- and jurisdiction-specific. A global architecture does not mean global live coverage. Check the exact scope in the current approved record.",
  },
  {
    question: "How does a capability move to Production?",
    answer:
      "Production requires a separate approval decision for the stated scope. Validation does not automatically promote to Pilot or Production, and no timing or outcome is promised. Decisions may be reversed, suspended or require revalidation.",
  },
  {
    question: "What if coverage status is unavailable?",
    answer:
      "Do not infer a state. Missing, stale, unknown or conflicting records cannot establish current coverage. Keep the definition separate from availability and verify the scope through an approved channel before committing.",
  },
];

export default function FAQSection() {
  return (
    <SectionShell className="bg-white" bgImage="faq-bg.webp">
      <SectionHeading eyebrow="FAQ" title="Direct answers. No inferred availability." />

      <dl className="flex flex-col">
        {FAQS.map((faq) => (
          <div key={faq.question} className="flex flex-col gap-3 border-b border-zinc-300 py-7">
            <dt className="text-lg leading-7 text-zinc-900 sm:text-xl">{faq.question}</dt>
            <dd className="text-sm leading-6 text-stone-500 sm:text-base">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
