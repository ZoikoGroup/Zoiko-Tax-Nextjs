"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { ChevronDown, Search } from "lucide-react";
import {
  ANCHORS,
  BG,
  CONTRACT_TABS,
  REFERENCE_RECORDS,
  SIDEBAR_DATA,
  VERSION_DATA,
  WORKSPACE_DATA,
  WORKSPACE_ID,
} from "./api-reference-data";
import { InfoNotice, Pill, Reveal, SectionContainer, SectionHeader, TextLink } from "./shared";

const anchorId = (id: string) => `ref-${id}`;

function VersionCard() {
  return (
    <div className="w-full rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-7 flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
        <div className="w-full lg:w-[500px] flex flex-col gap-2">
          <label htmlFor="api-ref-version" className="text-xs font-bold uppercase text-[#D65A2C]">
            {VERSION_DATA.selectLabel}
          </label>
          <div className="relative">
            <select
              id="api-ref-version"
              disabled
              className="w-full appearance-none rounded-lg border border-[#D8CEDD] bg-[#F1E8F8] p-4 pr-10 text-base font-semibold text-[#301153] disabled:cursor-not-allowed"
            >
              <option>{VERSION_DATA.emptyVersion}</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#665F69]"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-sm leading-6 text-[#665F69]">{VERSION_DATA.currentness}</p>
          <TextLink href={VERSION_DATA.changelogLink.href}>{VERSION_DATA.changelogLink.label}</TextLink>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <span className="text-xs text-[#665F69]">{VERSION_DATA.labelsIntro}</span>
        {VERSION_DATA.labels.map((label) => (
          <Pill key={label}>{label}</Pill>
        ))}
        <span className="text-xs text-[#665F69]">{VERSION_DATA.labelsNote}</span>
      </div>

      <p className="text-sm leading-6 text-[#665F69]">{VERSION_DATA.footnote}</p>
    </div>
  );
}

function Sidebar({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const matches = q
    ? REFERENCE_RECORDS.filter((r) => `${r.identity} ${r.purpose}`.toLowerCase().includes(q))
    : [];

  return (
    <aside className="w-full lg:w-64 shrink-0 bg-[#F1E8F8] p-5 sm:p-6 flex flex-col gap-5 sm:gap-6 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl">
      <p className="text-lg text-[#301153]">{SIDEBAR_DATA.title}</p>

      <div className="flex flex-col gap-2">
        <label className="w-full rounded-lg border border-[#D8CEDD] bg-white p-3 flex items-center gap-2 focus-within:border-[#BF6735]">
          <Search className="h-4 w-4 text-[#665F69]" aria-hidden="true" />
          <span className="sr-only">{SIDEBAR_DATA.searchPlaceholder}</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={SIDEBAR_DATA.searchPlaceholder}
            className="w-full bg-transparent text-xs text-[#18141B] placeholder:text-[#665F69] outline-none"
          />
        </label>
        {q && matches.length === 0 && (
          <p role="status" className="text-xs leading-5 font-semibold text-[#301153]">
            {SIDEBAR_DATA.noMatches}
          </p>
        )}
      </div>

      <p className="text-sm leading-6 text-[#665F69]">{SIDEBAR_DATA.searchNote}</p>

      <span className="text-xs font-bold uppercase text-[#D65A2C]">{SIDEBAR_DATA.versionEyebrow}</span>
      <p className="-mt-3 text-sm leading-5 text-[#301153]">
        {SIDEBAR_DATA.versionLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold text-[#18141B]">{SIDEBAR_DATA.authorityTitle}</p>
        <p className="text-sm leading-6 text-[#665F69]">{SIDEBAR_DATA.authorityNote}</p>
      </div>

      <span className="text-xs font-bold uppercase text-[#D65A2C]">{SIDEBAR_DATA.anchorsEyebrow}</span>
      <p className="-mt-3 text-sm leading-6 text-[#665F69]">{SIDEBAR_DATA.anchorsNote}</p>

      <nav aria-label="Anatomy anchors" className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-col gap-1">
        {ANCHORS.map((a) => (
          <a
            key={a.id}
            href={`#${anchorId(a.id)}`}
            onClick={() => onSelect(a.id)}
            aria-current={active === a.id ? "true" : undefined}
            className={clsx(
              "rounded-lg p-3 text-sm transition-colors",
              active === a.id ? "bg-white text-[#D65A2C]" : "text-[#301153] hover:bg-white/60"
            )}
          >
            {a.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-wrap gap-x-6 gap-y-3 lg:flex-col lg:gap-6">
        {SIDEBAR_DATA.links.map((l) => (
          <TextLink key={l.label} href={l.href}>
            {l.label}
          </TextLink>
        ))}
      </div>
    </aside>
  );
}

function ContractPanel({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  const { registry, indexRow, anatomy, io, schema, extra, notice } = WORKSPACE_DATA;

  return (
    <div className="flex-1 min-w-0 p-5 sm:p-8 flex flex-col gap-8">
      <div className="w-full rounded-2xl border border-[#D8CEDD] bg-[#FDF9F7] p-5 sm:p-6 flex flex-col gap-3.5">
        <Pill className="self-start">{registry.badge}</Pill>
        <h3 className="text-xl sm:text-2xl leading-8 text-[#18141B]">{registry.title}</h3>
        <p className="text-base leading-6 text-[#665F69]">{registry.description}</p>
        <TextLink href={registry.link.href}>{registry.link.label}</TextLink>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-xs font-bold uppercase text-[#D65A2C]">{indexRow.eyebrow}</span>
        <div className="w-full rounded-lg bg-[#F1E8F8] p-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {indexRow.columns.map((c) => (
            <span key={c} className="text-xs font-semibold leading-4 text-[#301153]">
              {c}
            </span>
          ))}
        </div>
        <p className="text-sm leading-6 text-[#665F69]">{indexRow.note}</p>
      </div>

      <div id={anchorId("identity")} className="scroll-mt-28 flex flex-col gap-4">
        <h3 className="text-2xl sm:text-3xl leading-tight text-[#18141B]">{anatomy.title}</h3>
        <span id={anchorId("authority")} className="scroll-mt-28 self-start">
          <Pill>{anatomy.badge}</Pill>
        </span>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {anatomy.fields.map((f) => (
            <div key={f.label} className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase text-[#665F69]">{f.label}</span>
              <span className="text-base font-medium leading-5 text-[#18141B]">{f.value}</span>
            </div>
          ))}
        </div>
        <p className="text-base leading-6 text-[#665F69]">{anatomy.purpose}</p>
      </div>

      <nav aria-label="Contract sections" className="w-full border-b border-[#D8CEDD] pb-3.5 flex gap-x-6 overflow-x-auto whitespace-nowrap">
        {CONTRACT_TABS.map((id) => {
          const label = ANCHORS.find((a) => a.id === id)?.label ?? id;
          return (
            <a
              key={id}
              href={`#${anchorId(id)}`}
              onClick={() => onSelect(id)}
              aria-current={active === id ? "true" : undefined}
              className={clsx(
                "text-sm font-semibold transition-colors",
                active === id ? "text-[#D65A2C]" : "text-[#665F69] hover:text-[#18141B]"
              )}
            >
              {label}
            </a>
          );
        })}
      </nav>

      <div className="grid gap-4 md:grid-cols-2">
        {io.map((card) => (
          <div key={card.id} id={anchorId(card.id)} className="scroll-mt-28 rounded-lg bg-[#F1E8F8] p-5 flex flex-col gap-2.5">
            <p className="text-base font-semibold text-[#301153]">{card.title}</p>
            <p className="text-sm leading-6 text-[#665F69]">{card.description}</p>
          </div>
        ))}
      </div>

      <div id={anchorId("schema")} className="scroll-mt-28 flex flex-col gap-4">
        <span className="text-xs font-bold uppercase text-[#D65A2C]">{schema.eyebrow}</span>
        <h3 className="text-xl sm:text-2xl text-[#18141B]">{schema.title}</h3>
        <p className="text-sm leading-6 text-[#665F69]">{schema.description}</p>
        <div className="w-full overflow-x-auto rounded-lg border border-[#D8CEDD]">
          <table className="w-full min-w-[560px] text-left text-xs leading-5 text-[#301153]">
            <thead className="bg-[#F1E8F8]">
              <tr>
                {schema.headers.map((h) => (
                  <th key={h} scope="col" className="p-3.5 font-normal border-b border-[#D8CEDD]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {schema.rows.map((row, i) => (
                <tr key={i} className={clsx(i < schema.rows.length - 1 && "border-b border-[#D8CEDD]")}>
                  {row.map((cell) => (
                    <td key={cell} className="p-3.5">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-6 text-[#665F69]">{schema.note}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {extra.map((card) => (
          <div key={card.id} id={anchorId(card.id)} className="scroll-mt-28 rounded-lg border border-[#D8CEDD] bg-white p-5 flex flex-col gap-2.5">
            <p className="text-base font-semibold text-[#301153]">{card.title}</p>
            <p className="text-sm leading-6 text-[#665F69]">{card.description}</p>
          </div>
        ))}
      </div>

      <div id={anchorId("related")} className="scroll-mt-28">
        <InfoNotice title={notice.title} description={notice.description} />
      </div>
    </div>
  );
}

export default function WorkspaceSection() {
  const [active, setActive] = useState("identity");

  return (
    <SectionContainer
      id={WORKSPACE_ID}
      className="bg-[#FAF8FA] scroll-mt-20"
      style={{ backgroundImage: `url('${BG.workspace}')`, backgroundSize: "cover", backgroundPosition: "center top" }}
    >
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={VERSION_DATA.eyebrow} title={VERSION_DATA.title} description={VERSION_DATA.description} />
        </Reveal>

        <Reveal delay={0.04}>
          <VersionCard />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="w-full rounded-3xl border border-[#D8CEDD] bg-white shadow-[0px_12px_32px_0px_rgba(48,17,83,0.05)] flex flex-col lg:flex-row">
            <Sidebar active={active} onSelect={setActive} />
            <ContractPanel active={active} onSelect={setActive} />
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
