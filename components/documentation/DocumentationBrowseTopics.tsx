"use client";

import React from "react";
import Reveal from "@/components/shared/Reveal";

interface TopicCategory {
  title: string;
  items: string[];
}

const TOPIC_CATEGORIES: TopicCategory[] = [
  {
    title: "Product concepts",
    items: ["Workflow models", "Authority boundaries", "Evidence handling"],
  },
  {
    title: "Workflows & operations",
    items: [
      "End-to-end operator procedures",
      "Reconciliation basics",
      "Managing user roles",
    ],
  },
  {
    title: "Changes & releases",
    items: ["Release notes", "Platform deprecations", "Update schedules"],
  },
];

export default function DocumentationBrowseTopics() {
  return (
    <section className="w-full bg-[#FAF3FF] py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        <Reveal>
          <h2 className="text-[30px] font-bold leading-[36px] text-[#1E1B4B] font-['Inter',sans-serif]">
            Browse documentation by task and topic
          </h2>
        </Reveal>

        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOPIC_CATEGORIES.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.08}>
              <div className="flex flex-col">
                <h3 className="pb-2 border-b border-[#F3F4F6] text-[20px] font-bold leading-[28px] text-[#111827] font-['Inter',sans-serif]">
                  {category.title}
                </h3>
                <ul className="pt-4 flex flex-col gap-3">
                  {category.items.map((item) => (
                    <li key={item}>
                      <span className="text-[16px] font-medium leading-[24px] text-[#4B5563] hover:text-[#1E1B4B] transition-colors cursor-pointer inline-block font-['Inter',sans-serif]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
