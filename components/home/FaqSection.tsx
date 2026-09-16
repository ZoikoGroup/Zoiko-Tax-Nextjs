"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Section, SectionIntro } from "./shared";
import { faqs } from "./home-data";

export default function FaqSection() {
  // The design shows every answer expanded, so all start open.
  const [openItems, setOpenItems] = useState(() => new Set(faqs.map((faq) => faq.question)));

  const toggle = (question: string) =>
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(question)) next.delete(question);
      else next.add(question);
      return next;
    });

  return (
    <Section background="/home/pattern-faq.webp" className="bg-white">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionIntro eyebrow="FAQ" title="Direct answers. No inflated claims." />
        </Reveal>

        <Reveal>
          <ul>
            {faqs.map(({ question, answer }, i) => {
              const isOpen = openItems.has(question);
              const panelId = `faq-panel-${i}`;
              return (
                <li key={question} className="border-b border-line">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(question)}
                    className="flex w-full items-center gap-2 pt-5 pb-2 text-left text-base text-ink sm:text-lg"
                  >
                    {question}
                    <span aria-hidden className="w-3 text-ink-muted">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-6 text-ink-muted">{answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
