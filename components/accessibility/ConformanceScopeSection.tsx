import { NoticeCard, SectionHeading, SectionShell } from "./shared";

const COLUMNS = ["Standard / version / level", "Source / evaluation", "Currentness / boundary"];
const VALUES = [
  ["Source required", "Not published"],
  ["Approved source and date", "Not supplied"],
  ["Unknown evaluated scope", "No product conformance claim"],
];
const SCOPES = ["Public website", "Authenticated service", "Individual modules", "Downloadable documents"];

const GRID = "lg:grid lg:grid-cols-[1.1fr_1fr_1fr_1.4fr] lg:gap-4";

export default function ConformanceScopeSection() {
  return (
    <SectionShell className="bg-white" bgImage="conformance-bg.webp">
      <SectionHeading
        eyebrow="02 / CONFORMANCE SCOPE"
        title="Scope must be specific—not implied."
        description="These are illustrative scope categories, not a list of evaluated ZoikoTax surfaces. No attained A, AA or AAA level is established here."
      />

      <div className="overflow-hidden rounded-2xl bg-white outline -outline-offset-1 outline-zinc-300">
        <div className={`hidden bg-violet-950 px-6 py-5 text-xs font-semibold leading-5 text-white ${GRID}`}>
          <span>SCOPE CATEGORY</span>
          {COLUMNS.map((column) => (
            <span key={column}>{column.toUpperCase()}</span>
          ))}
        </div>
        {SCOPES.map((scope, i) => (
          <div
            key={scope}
            className={`flex flex-col gap-4 px-5 py-5 sm:px-6 ${GRID} ${
              i < SCOPES.length - 1 ? "border-b border-zinc-300" : ""
            }`}
          >
            <h3 className="text-base font-semibold leading-6 text-zinc-900">{scope}</h3>
            {/* Below lg the values form their own 1→3 column grid; at lg they join the table row. */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:contents">
              {COLUMNS.map((column, c) => (
                <div key={column} className="flex flex-col">
                  {/* Column label only shows once the header row is hidden. */}
                  <span className="mb-1 text-xs font-semibold text-violet-950 lg:hidden">{column}</span>
                  <span className="text-sm leading-6 text-stone-500 lg:text-base">{VALUES[c][0]}</span>
                  <span className="text-sm leading-6 text-stone-500 lg:text-base">{VALUES[c][1]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <NoticeCard title="“Not evaluated” and “unknown” are not the same.">
        Not evaluated is an explicit, approved exclusion. Unknown means evaluation evidence has not been supplied.
        Neither is a passing result, and neither should be silently included in a formal claim.
      </NoticeCard>
    </SectionShell>
  );
}
