"use client";

import { useState } from "react";
import clsx from "clsx";
import { Reveal, Section, SectionIntro } from "./shared";
import { coverageRows, coverageStatusLabels } from "./home-data";

const pillClass =
  "inline-flex shrink-0 items-center rounded-full px-3 py-1.5 text-xs outline outline-1 -outline-offset-1";

export default function CoverageSection() {
  const [query, setQuery] = useState("");

  const needle = query.trim().toLowerCase();
  const rows = coverageRows.filter(
    (row) =>
      !needle ||
      row.market.toLowerCase().includes(needle) ||
      row.capability.toLowerCase().includes(needle),
  );

  return (
    <Section id="coverage">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionIntro
            eyebrow="Global Coverage"
            title="One global platform. Capability activated through governed packs."
            description="Explore capability-specific readiness without assuming universal coverage."
          />
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-6 rounded-3xl bg-white p-5 outline outline-1 -outline-offset-1 outline-line sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <label className="flex-1">
                <span className="sr-only">Search market or capability</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search market or capability…"
                  className="w-full rounded-lg bg-sand p-4 text-xs text-ink placeholder:text-ink-muted focus:outline-2 focus:outline-copper-bright"
                />
              </label>
              <div className="flex gap-3">
                <span className={clsx(pillClass, "text-plum-700 outline-plum-700")}>
                  All capabilities
                </span>
                <span className={clsx(pillClass, "text-status-amber outline-status-amber")}>
                  Illustrative preview
                </span>
              </div>
            </div>

            <ul>
              {rows.map((row) => {
                const status = coverageStatusLabels[row.status];
                return (
                  <li
                    key={row.market}
                    className="grid grid-cols-2 items-center gap-3 border-b border-line py-4 sm:grid-cols-3"
                  >
                    <span className="text-xs text-ink">{row.market}</span>
                    <span className="text-xs text-ink-muted sm:text-center">{row.capability}</span>
                    <span className="col-span-2 sm:col-span-1 sm:justify-self-end">
                      <span className={clsx(pillClass, status.className)}>{status.label}</span>
                    </span>
                  </li>
                );
              })}
              {rows.length === 0 && (
                <li className="py-4 text-xs text-ink-muted">No markets match “{query}”.</li>
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
