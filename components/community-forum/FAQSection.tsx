import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { ROUTES, SectionShell, SectionTitle } from "./shared";

const LINK = "font-medium text-orange-600 hover:underline";

const FAQS: { question: string; answer: ReactNode }[] = [
  {
    question: "Is a Community Forum answer official ZoikoTax guidance?",
    answer:
      "No. Community contributions are peer-generated unless a specific item is explicitly designated as an official source. Use canonical ZoikoTax Documentation, Support, Status, Coverage, Developers or Trust sources for authoritative product information.",
  },
  {
    question: "Can I rely on a forum post for tax or legal advice?",
    answer:
      "Community discussions can be useful for shared experience, but they are not a substitute for professional tax/legal advice or authoritative government/regulatory sources.",
  },
  {
    question: "How do I report a security vulnerability?",
    answer: (
      <>
        Use ZoikoTax{" "}
        <a href={ROUTES.disclosure} className={LINK}>
          Responsible Disclosure
        </a>{" "}
        rather than a public community thread.
      </>
    ),
  },
  {
    question: "Where should I go if the service seems down?",
    answer: (
      <>
        Use{" "}
        <a href={ROUTES.status} className={LINK}>
          System Status
        </a>{" "}
        for current public operational information. Community discussion is not the live status authority.
      </>
    ),
  },
];

export default function FAQSection() {
  return (
    <SectionShell className="border-b border-gray-200 bg-white" bgImage="faq-bg.webp">
      <SectionTitle>Frequently Asked Questions</SectionTitle>

      <div className="flex flex-col gap-4 pt-10">
        {FAQS.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl bg-gray-50 outline -outline-offset-1 outline-gray-200"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
              <h3 className="text-base font-bold leading-7 text-indigo-950 sm:text-lg">{faq.question}</h3>
              <ChevronDown
                aria-hidden="true"
                className="size-6 shrink-0 text-purple-800 transition-transform group-open:rotate-180"
                strokeWidth={2}
              />
            </summary>
            <p className="max-w-[782px] px-5 pb-5 text-sm leading-6 text-gray-700 sm:px-6 sm:pb-6 sm:text-base">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
