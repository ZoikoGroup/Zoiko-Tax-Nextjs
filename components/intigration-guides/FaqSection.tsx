import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const faqItems: FaqItem[] = [
    {
      question: "What are Integration Guides?",
      answer:
        "Public architecture-pattern documentation for common integration problems and system contexts: problem, boundary, conceptual sequence, verified prerequisites, safe failure behavior and evidence handoffs.",
    },
    {
      question: "Are guides production API contracts?",
      answer:
        "No. Guidance is not a production contract, entitlement, security certification or live Coverage claim. Current API/SDK/Event/Bulk documentation owns exact implementation contracts.",
    },
    {
      question: "How do I choose a pattern?",
      answer:
        "Start with your system family and problem intent, then compare authority boundaries and implementation surfaces. Treat the specimens on this page as illustrative—not an approved availability inventory.",
    },
    {
      question: "Who owns authority?",
      answer:
        "Source/customer, ZoikoTax integration, authoritative workflow, incumbent engine, external network/authority and evidence roles remain distinct. Integration convenience cannot collapse those responsibilities.",
    },
    {
      question: "Are prerequisites verified?",
      answer:
        "Only verified, source-supported prerequisites belong in published guides. This demonstration verifies none: contract version and authorization are contract-defined, configuration is customer-specific, and Coverage/Trust are independent.",
    },
    {
      question: "How are failures handled?",
      answer:
        "Keep the unresolved state explicit, identify its owner and use the authoritative route. Pause, defer or fall back only where source-supported and contract-defined. No retry, ordering or recovery guarantee is made here.",
    },
    {
      question: "Can I test in Sandbox?",
      answer:
        "Sandbox is a non-production testing route with separately governed access. Follow its documentation. Restricted or unavailable access is not a reason to bypass into production.",
    },
    {
      question: "Does guide existence prove market availability?",
      answer:
        "No. Coverage is independently authoritative for market and capability scope. A public pattern does not establish entitlement or live support.",
    },
    {
      question: "Where are exact syntax, version and security details?",
      answer:
        "Use API Reference, SDKs, Webhooks & Events and Bulk & Batch for exact contracts; API Changelog for governed changes; Trust for authoritative security/privacy evidence.",
    },
    {
      question: "What if required detail is not public?",
      answer:
        "Keep the guidance conceptual or customer-specific and move to controlled engagement. Do not invent missing syntax, versions, prerequisites, credentials, private topology or an activation promise.",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden font-sans px-6 py-20 lg:px-12 text-[#1C1917]">
      {/* Background Image */}
      <Image
        src="/integration/2.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-top opacity-100"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header Content */}
        <div className="flex flex-col gap-2 mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D06236]">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-[40px] leading-tight">
            Direct answers. Clear implementation limits.
          </h1>
          <p className="text-sm font-normal text-[#57534E] max-w-4xl">
            Architecture guidance is useful precisely because it keeps the
            contract and authority boundaries visible.
          </p>
        </div>

        {/* FAQ List Container */}
        <div className="rounded-2xl border border-[#E7E5E4] bg-white shadow-sm overflow-hidden">
          <div className="divide-y divide-[#F5F5F4]">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 px-6 py-6 items-start gap-6 hover:bg-[#FAF8FC] transition-colors"
              >
                <div className="lg:col-span-4 text-xs font-bold text-[#111111]">
                  {item.question}
                </div>
                <div className="lg:col-span-8 text-xs text-[#57534E] leading-relaxed">
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
