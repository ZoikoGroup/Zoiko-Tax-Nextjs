"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What makes ZoikoTax different from a general tax engine?",
    answer:
      "ZoikoTax is built specifically around telecom billing models — usage-based charges, bundles and MVNO/MVNE structures — instead of adapting a generic retail tax engine.",
  },
  {
    question: "How does ZoikoTax stay current with regulatory change?",
    answer:
      "Our regulatory and filing team monitors jurisdictional change continuously, with every rule update reviewed and approved before it goes live.",
  },
  {
    question: "Can ZoikoTax integrate with our existing billing stack?",
    answer:
      "Yes. ZoikoTax exposes documented APIs and pre-built connectors for common billing, ERP and OSS platforms so you can integrate without a rebuild.",
  },
  {
    question: "Where is ZoikoTax available today?",
    answer:
      "Coverage spans the United States, European Union and United Kingdom today, with new regulatory packs added on a governed roadmap.",
  },
];

export default function AboutFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell id="about-faq" tone="light">
      <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />

      <div className="mt-10 divide-y divide-black/5 rounded-2xl border border-black/5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="p-5">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-brand-navy sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-none text-brand-orange transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-sm leading-relaxed text-brand-navy/70">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
