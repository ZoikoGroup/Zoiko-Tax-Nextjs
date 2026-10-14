import { SectionHeading, SectionShell } from "./shared";

const FAQS = [
  {
    question: "When should I use Sales Inquiry?",
    answer:
      "Use Sales Inquiry for a commercial or buying question while evaluating ZoikoTax, when a demo or specialist route would not be better. A public intake must be approved before it can receive an inquiry.",
  },
  {
    question: "I want a demo. Should I use this form?",
    answer:
      "No. Use Book a Demo at /demo/, the single canonical product-evaluation and scheduling path. This page does not create a second demo request or scheduler.",
  },
  {
    question: "Can Sales tell me whether a country or capability is live?",
    answer:
      "Coverage owns current published availability by market and capability. A conversation, inquiry or field selection does not establish production support.",
  },
  {
    question: "Can I get pricing here?",
    answer:
      "Pricing must come from an approved source or sales process. No prices, discounts, packages or quote timing are established on this page.",
  },
  {
    question: "I am already a customer. Where should I go?",
    answer:
      "Start with Customer Support for product or account help. Use a commercial route only for a genuine expansion or evaluation question through an approved process.",
  },
  {
    question: "Can I report a technical problem here?",
    answer:
      "Use Documentation and approved Customer Support, not Sales. Technical Support is a separate, governed future family destination; this page does not establish its route or entitlement.",
  },
  {
    question: "Can I report a security vulnerability here?",
    answer:
      "No. Use the approved Responsible Disclosure destination, not a sales textarea. That destination must be source-confirmed before a link is shown here.",
  },
  {
    question: "Do I need to contact Sales to view security or compliance information?",
    answer:
      "No. Approved public Trust information remains directly accessible through its governed destinations. It is not gated behind a sales inquiry.",
  },
  {
    question: "What should I include in my inquiry?",
    answer:
      "Only necessary, non-sensitive business context and the commercial question you need to coordinate. Do not include passwords, API keys, taxpayer/customer records, payment data, support logs, or vulnerability details in a sales inquiry.",
  },
  {
    question: "How quickly will Sales respond?",
    answer:
      "Only an approved public commitment can establish a response expectation. No timeframe is supplied or promised here; any next step must come from the approved sales process.",
  },
];

export default function FAQSection() {
  return (
    <SectionShell className="bg-white" bgImage="faq-bg.webp">
      <SectionHeading
        eyebrow="FAQ"
        title="Direct answers. No implied commitments."
        description="Ten common questions, answered openly—before you share any information."
      />

      <dl className="flex flex-col">
        {FAQS.map((faq) => (
          <div key={faq.question} className="flex flex-col gap-3 border-b border-zinc-300 py-6">
            <dt className="text-lg font-bold leading-7 text-zinc-900 sm:text-xl">{faq.question}</dt>
            <dd className="text-sm leading-6 text-stone-500 sm:text-base sm:leading-7">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
