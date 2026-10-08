import { SectionHeading, SectionShell } from "./shared";
import Link from "next/link";
import Image from "next/image";

const FAQS = [
  {
    question: "What is the Trust Center?",
    answer: "A central, evidence-bound navigation and assurance surface for ZoikoTax’s trust domains. It is not a certification or guarantee. Approved statements and documents remain authoritative only for their exact scope, date and source.",
    link: "/trust/"
  },
  {
    question: "Where can I review Security?",
    answer: "Start with the Security domain. Review only controls supported by its approved source, service and environment scope. No specific control, audit or certification is established by this page.",
    link: "/trust/security/"
  },
  {
    question: "How do privacy and residency differ?",
    answer: "Privacy & Data Protection covers approved personal-data disclosure. Data Processing & Residency covers exact data-domain location scope, approved options and limitations. Global architecture does not imply universal residency or choice.",
    link: "/trust/privacy/"
  },
  {
    question: "Can I request security or audit proof?",
    answer: "Review Evidence & Auditability and its source and access labels first. Controlled material may be requested only through an approved process, where available. The request policy and artifact inventory are not supplied; access is not guaranteed.",
    link: "/trust/evidence-auditability/"
  },
  {
    question: "Where can I review AI governance?",
    answer: "Use the dedicated AI Governance domain for source-approved assistive role, authority, transparency and model-governance details. AI assistance is not independent monetary, legal, filing or remittance authority.",
    link: "/trust/ai-governance/"
  },
  {
    question: "How do I report a vulnerability?",
    answer: "Use the approved Responsible Disclosure policy and its security reporting channel. Do not put vulnerability details, secrets or unnecessary personal data in a demo, support or procurement form. The exact submission channel is not supplied here.",
    link: "/trust/responsible-disclosure/"
  }
];

export default function FAQSection() {
  return (
    <SectionShell className="bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-1/2 opacity-5 pointer-events-none">
        <Image src="/images/trust-center/trust_center_faq.png" alt="" fill className="object-cover object-right" />
      </div>
      <div className="flex flex-col gap-10 relative z-10">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Direct answers. No inflated claims."
          description="Source-safe answers to the questions that start a diligence review."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FAQS.map((faq, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-3xl bg-slate-50 p-6 md:p-8 border border-slate-100 hover:border-orange-200 transition-colors">
              <h3 className="text-xl font-bold text-slate-900">{faq.question}</h3>
              <p className="text-base text-slate-600 flex-1">{faq.answer}</p>
              <div className="mt-4 border-t border-slate-200 pt-4">
                <Link href={faq.link.split(' · ')[0]} className="text-sm font-semibold text-orange-600 hover:text-orange-700">
                  {faq.link} <span>↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
