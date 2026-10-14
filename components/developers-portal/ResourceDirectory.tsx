"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PATHS, RESOURCES, SOURCES, TASKS, type Task } from "./data";
import { SourceLink } from "./shared";

const OVERVIEW_TASK: Task = "Understand the integration model";

const CHIP = "rounded-[999px] px-3.5 py-2.5 text-xs outline -outline-offset-1 transition-colors";

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`${CHIP} ${
        active ? "bg-[#301153] text-white outline-[#301153]" : "bg-white text-zinc-900 outline-zinc-300 hover:bg-zinc-50"
      }`}
    >
      {label}
    </button>
  );
}

export default function ResourceDirectory() {
  const [query, setQuery] = useState("");
  const [task, setTask] = useState<Task | null>(null);
  const [path, setPath] = useState<string | null>(null);

  const q = query.trim().toLowerCase();

  const resources = useMemo(
    () =>
      RESOURCES.filter((r) => {
        if (task && r.task !== task) return false;
        if (path && !r.paths.includes(path)) return false;
        if (!q) return true;
        return [r.name, r.summary, r.detail, r.task].some((text) => text.toLowerCase().includes(q));
      }),
    [q, task, path],
  );

  // The Developer Overview card represents the "Understand the integration model" task.
  const showOverview =
    !path &&
    (!task || task === OVERVIEW_TASK) &&
    (!q || ["developer overview", "integration model", "authentication", "environments"].some((t) => t.includes(q) || q.includes(t)));

  const total = resources.length + (showOverview ? 1 : 0);
  const filtered = Boolean(q || task || path);

  function clear() {
    setQuery("");
    setTask(null);
    setPath(null);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-5 rounded-[32px] bg-white p-5 outline -outline-offset-1 outline-zinc-300 sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <label htmlFor="resource-search" className="text-sm font-semibold text-zinc-900">
            Search public resource metadata
          </label>
          <span className="text-xs text-stone-500">7 core resources · 6 integration paths</span>
        </div>
        <div className="flex h-12 items-center gap-3 rounded-xl bg-white px-4 outline -outline-offset-1 outline-zinc-300 focus-within:outline-2 focus-within:outline-orange-500">
          <Search aria-hidden="true" className="size-5 shrink-0 text-stone-500" strokeWidth={1.5} />
          <input
            id="resource-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles, purposes and categories"
            autoComplete="off"
            className="h-full w-full bg-transparent text-base text-zinc-900 outline-none placeholder:text-stone-500"
          />
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase text-stone-500">Filter by task</span>
          <div className="flex flex-wrap gap-2">
            <Chip label="All resources" active={!task} onClick={() => setTask(null)} />
            {TASKS.map((t) => (
              <Chip key={t} label={t} active={task === t} onClick={() => setTask(task === t ? null : t)} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase text-stone-500">Filter by integration path</span>
          <div className="flex flex-wrap gap-2">
            {PATHS.map((p) => (
              <Chip
                key={p.name}
                label={p.name}
                active={path === p.name}
                onClick={() => setPath(path === p.name ? null : p.name)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <p className="text-xs text-stone-500">
            Public metadata only. Do not enter credentials, payloads or private records.
          </p>
          <button
            type="button"
            onClick={clear}
            disabled={!filtered}
            className="self-start text-xs font-semibold text-orange-600 hover:underline disabled:cursor-default disabled:opacity-50 disabled:no-underline"
          >
            Clear filters
          </button>
        </div>
      </div>

      <p role="status" className="sr-only">
        {total} {total === 1 ? "resource" : "resources"} shown
      </p>

      {total === 0 ? (
        <div className="flex flex-col gap-2 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300">
          <p className="text-base font-semibold text-zinc-900">No search match?</p>
          <p className="text-sm leading-6 text-stone-500">
            Clear filters, browse the task list above, or try an adjacent resource. Task definitions remain visible if a
            result is absent.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {resources.map(({ name, icon: Icon, summary, detail, action, source }) => (
            <div
              key={name}
              className="flex flex-col gap-4 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-7"
            >
              <div className="flex items-center gap-3.5">
                <Icon aria-hidden="true" className="size-5 shrink-0 text-orange-600" strokeWidth={1.6} />
                <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">{name}</h3>
              </div>
              <p className="text-base font-medium leading-6 text-zinc-900">{summary}</p>
              <p className="flex-1 text-sm leading-5 text-stone-500">{detail}</p>
              <p className="text-xs leading-4 text-stone-500">Review metadata not provided · Verify at source</p>
              <SourceLink label={action} href={SOURCES[source].href} path={SOURCES[source].path} />
            </div>
          ))}
          {showOverview ? (
            <div className="flex flex-col gap-5 rounded-2xl bg-[#EEE5F4] p-6 sm:p-8 md:col-span-2 xl:col-span-2 [&:nth-child(even)]:md:col-span-1 xl:[&:nth-child(even)]:col-span-2">
              <h3 className="text-2xl font-bold text-violet-950 sm:text-3xl">
                One entry point. No second source of truth.
              </h3>
              <p className="flex-1 text-base leading-6 text-stone-500">
                Developer Overview covers integration concepts, authentication, environments and getting started. This
                portal routes you to those same authorities.
              </p>
              <SourceLink
                label="Understand the integration model"
                href={SOURCES.overview.href}
                path={SOURCES.overview.path}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
