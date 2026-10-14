"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FAQ_DATA } from "./technical-support-data";
import { SectionContainer, Reveal } from "./shared";

export default function FAQSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-1": true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-[96px]">
      {/* Geometric background pattern */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-80"
        style={{
          backgroundImage: "url(/technical-support/faq-pattern-bg.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "1440px auto",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1328px] px-4 sm:px-8">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-bold leading-9 text-[#1E1B4B] mb-8 sm:mb-10">
            {FAQ_DATA.heading}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          {FAQ_DATA.items.map((item, idx) => {
            const isOpen = Boolean(openIds[item.id]);

            return (
              <Reveal key={item.id} delay={0.03 * idx}>
                <div className="bg-white border border-[#E5E7EB] rounded-xl transition-shadow duration-200 hover:shadow-sm">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8] rounded-xl"
                  >
                    <span className="text-base sm:text-lg font-bold leading-7 text-[#1E1B4B]">
                      {item.question}
                    </span>
                    <span
                      className={`shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <Image
                        src="/technical-support/chevron-accordion.svg"
                        alt=""
                        width={12}
                        height={6}
                        className="w-3 h-1.5"
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0 border-t border-transparent">
                      <p className="text-sm sm:text-base font-normal leading-[1.625] text-[#374151] max-w-[782px]">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
