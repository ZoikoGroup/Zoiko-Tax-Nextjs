import { Container } from "./shared";

const faqs = [
  {
    question: "Can ZoikoTax run alongside an existing engine?",
    answer:
      "Federated coexistence and Shadow comparison can support evaluation alongside an incumbent where the approved pattern allows it. This engine-agnostic architecture does not certify named-engine compatibility or universal connector support.",
  },
  {
    question: "What is Shadow Assurance?",
    answer:
      "A non-impacting, non-authoritative comparison pattern using permitted source facts. Shadow does not change production billing or filing. Its results inform investigation and readiness review; comparison does not grant authority.",
  },
  {
    question: "Does matching prove the tax is legally correct?",
    answer:
      "No. Matching outcomes show agreement under observed conditions—not independent proof of correctness, completeness or future equivalence. Neither side is legally correct by default.",
  },
  {
    question: "How do we investigate discrepancies?",
    answer:
      "Detect and classify an approved category; trace source, mappings and versions; use source-grounded explanation; resolve through governed owners; re-run if supported; and retain the approved resolution with prior history. AI explanation remains advisory.",
  },
  {
    question: "When are we ready for cutover?",
    answer:
      "When the source-defined readiness gates have the required evidence and accountable review, and an explicit governed approval authorizes the change. Zero observed discrepancies do not automatically promote Shadow.",
  },
  {
    question: "Can migration be phased?",
    answer:
      "Staged migration or extended coexistence may be appropriate where supported by approved technical and operational sources. Keep authority explicit at each stage, preserve evidence and establish approved recovery intent. No universal timeframe or automatic transition is implied.",
  },
];

export default function FaqSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-[#FAF3FF] py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-3.5">
          <div className="text-[rgba(214,90,44,1)] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            14 · FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] text-[#18141B] leading-tight tracking-tight">
            Direct answers. Governed boundaries.
          </h2>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className={`self-stretch py-6 ${
                idx === faqs.length - 1 ? "" : "border-b border-[#D8CEDD]"
              } flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-14`}
            >
              <div className="w-full lg:w-[380px] shrink-0 text-[#18141B] text-lg sm:text-xl font-normal leading-7 font-['Inter',sans-serif]">
                {faq.question}
              </div>
              <div className="flex-1 text-[#665F69] text-sm sm:text-base font-normal leading-6 font-['Inter',sans-serif]">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
