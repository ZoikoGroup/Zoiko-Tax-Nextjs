import { SectionHeading, SectionShell } from "./shared";

const FAQS = [
  {
    question: "Is Research available to customers?",
    answer:
      "Research does not establish customer availability or entitlement. It identifies a capability or scope under exploration, not a production service that customers can use or rely on. Any permitted use must be separately authorized and confirmed in the governed capability-specific Coverage record and the applicable customer entitlement source.",
  },
  {
    question: "Does Research mean a pilot is open?",
    answer:
      "No. Research is not a pilot invitation, signup opportunity, or promise of controlled deployment. Pilot is an independent state with its own formal authorization, scope, and participation limits. Do not infer that a pilot exists or is open from an exploratory Research label; consult the governed capability-specific record.",
  },
  {
    question: "When will it be Production?",
    answer:
      "Research provides no release date, estimated timeline, or commitment to become Production. An exploration may remain exploratory, change scope, or be withdrawn. A Validation candidate requires separate approval, and Pilot and Production have independent formal gates. Delivery planning must rely on separately confirmed supported scope, not an assumed path from Research.",
  },
  {
    question: "Does Research show a country is supported?",
    answer:
      "No. Research does not establish geographic availability, jurisdiction coverage, supported tax rates, or regulatory approval. Global platform architecture is not live market coverage. Current coverage must be verified for the specific capability, geography, and state from the authoritative source; a missing record must not be relabeled Research or not supported.",
  },
  {
    question: "Where can I check current coverage?",
    answer:
      "Use the approved Coverage Overview and the current governed capability-specific Coverage record. Confirm the stated geography, state, scope, and verification context before relying on availability. Current availability cannot be confirmed here because an authorized current source and approved destination are unavailable; use an approved coverage or existing customer support channel.",
  },
];

export default function FAQSection() {
  return (
    <SectionShell className="bg-white" bgImage="faq-bg.webp">
      <SectionHeading eyebrow="FAQ" title="Direct answers. No implied access or promises." />

      <dl className="flex flex-col">
        {FAQS.map((faq) => (
          <div key={faq.question} className="flex flex-col gap-3.5 border-b border-zinc-300 py-7">
            <dt className="text-lg leading-7 text-zinc-900 sm:text-xl">{faq.question}</dt>
            <dd className="max-w-[1140px] text-sm leading-6 text-stone-500 sm:text-base sm:leading-7">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
