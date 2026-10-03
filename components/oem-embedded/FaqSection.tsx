import { Container, SectionHeader } from "./shared";

const faqs = [
  {
    question: "What does OEM / Embedded mean?",
    answer:
      "It describes approved partner provisioning and embedded capability patterns within a wider platform or service. Organization boundaries, capability scope, attribution and evidence remain explicit; technical embedding does not grant commercial rights.",
  },
  {
    question: "How do I provision partner organizations / tenants?",
    answer:
      "Confirm the approved partner identity and the actual organization model first. Exact creation, association and configuration mechanics follow platform and API source contracts. Provisioning does not itself create entitlement or approve production activation.",
  },
  {
    question: "Does embedded include white-label rights?",
    answer:
      "No. White-label, branding, attribution, resale and distribution permissions require approved commercial, legal and brand sources. Neither an API integration nor a partner context implies those rights.",
  },
  {
    question: "How do I activate tenant capabilities?",
    answer:
      "Verify the partner-eligible capability source, commercial / product grant, exact Coverage, environment and security readiness, then obtain controlled production activation approval. Navigation and test permission do not establish production entitlement.",
  },
  {
    question: "How do I attribute usage across organizations?",
    answer:
      "Use the supported organization context and source-defined capability, period and evidence references. Exact reporting mechanics remain governed and authenticated reporting is separate. Attribution does not establish charges, pricing, allowances or revenue share.",
  },
  {
    question: "How do I suspend or offboard?",
    answer:
      "Follow the approved lifecycle, restriction and data-handling sources with the accountable operational owner. Do not infer triggers, notice, restoration, retention or a right to continued service from this public page.",
  },
];

export default function FaqSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="14 / FAQ"
          title="Direct answers. No implied rights."
          description="Public architecture guidance; exact technical, operational and commercial mechanics remain governed."
        />

        <div className="self-stretch flex flex-col justify-start items-start">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="self-stretch py-7 border-t border-zinc-300 flex flex-col justify-start items-start gap-3.5"
            >
              <div className="self-stretch flex justify-start items-start gap-6">
                <div className="flex-1 text-zinc-900 text-2xl font-normal font-['Inter',sans-serif]">
                  {faq.question}
                </div>
                <span className="relative size-5 shrink-0" aria-hidden="true">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block h-[1.6px] w-3 bg-orange-600" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block h-3 w-[1.6px] bg-orange-600" />
                </span>
              </div>
              <p className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
