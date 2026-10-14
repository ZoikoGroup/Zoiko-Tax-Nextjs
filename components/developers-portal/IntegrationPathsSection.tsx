import { ArrowRight, Globe } from "lucide-react";
import { PATHS } from "./data";
import { SectionHeading, SectionShell, SourceLink } from "./shared";

const SYSTEMS = [
  "Billing & BSS / ERP & General Ledger",
  "Existing Tax Engines / E-Invoicing Networks",
  "Data & Enterprise Systems / OEM / Embedded",
];

export default function IntegrationPathsSection() {
  return (
    <SectionShell className="bg-white" bgImage="paths-bg.webp">
      <SectionHeading
        eyebrow="Integration paths"
        title="Fit the architecture you already operate."
        description="Six source-governed integration families. Choose the pattern; confirm the contracts and actual availability separately."
      />

      <div className="flex flex-col gap-6 rounded-3xl bg-[#14062a] p-6 sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-xl font-bold text-white sm:text-2xl">Systems → patterns → owning sources</h3>
          <span className="text-xs font-semibold uppercase text-orange-300">Conceptual source map</span>
        </div>

        <div className="flex flex-col items-stretch gap-4 xl:flex-row xl:items-center xl:gap-8">
          <ul className="flex flex-col gap-2.5 xl:w-[390px] xl:shrink-0">
            {SYSTEMS.map((system) => (
              <li key={system} className="rounded-lg bg-white/5 px-3.5 py-3 text-sm text-zinc-200">
                {system}
              </li>
            ))}
          </ul>
          <ArrowRight
            aria-hidden="true"
            className="size-6 shrink-0 rotate-90 self-center text-orange-300 xl:rotate-0"
            strokeWidth={1.6}
          />
          <div className="flex flex-col gap-2 rounded-2xl bg-[#301153] p-6 xl:w-[310px] xl:shrink-0">
            <p className="text-xl font-bold text-white">Integration Guides</p>
            <p className="text-sm leading-6 text-zinc-300">Architecture orientation and implementation patterns</p>
          </div>
          <ArrowRight
            aria-hidden="true"
            className="size-6 shrink-0 rotate-90 self-center text-orange-300 xl:rotate-0"
            strokeWidth={1.6}
          />
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold text-white">API · SDK · Events · Batch</p>
            <p className="text-sm text-zinc-300">Exact details belong to each owning source.</p>
          </div>
        </div>

        <p className="text-xs leading-5 text-zinc-300">
          Illustrative family routing only—not a deployed topology, connector inventory or operational guarantee.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {PATHS.map(({ name, icon: Icon, summary, detail, path, href }) => (
          <div
            key={name}
            className="flex flex-col items-start gap-4 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-7"
          >
            <Icon aria-hidden="true" className="size-5 text-orange-600" strokeWidth={1.6} />
            <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">{name}</h3>
            <p className="text-base font-medium leading-6 text-zinc-900">{summary}</p>
            <p className="flex-1 text-sm leading-5 text-stone-500">{detail}</p>
            <SourceLink label={`Explore ${name}`} href={href} path={path} />
          </div>
        ))}
      </div>

      <div className="flex items-start gap-4 rounded-2xl bg-[#EEE5F4] p-5 sm:items-center sm:px-6">
        <Globe aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-orange-600 sm:mt-0" strokeWidth={1.6} />
        <p className="flex-1 text-base font-medium leading-6 text-violet-950">
          Developer documentation explains integration patterns and contracts. Current product availability is governed
          separately through Coverage.
        </p>
      </div>
    </SectionShell>
  );
}
