import { SectionShell } from "./shared";

export default function ProcurementJourneysSection() {
  return (
    <SectionShell className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-4">
          <div className="text-sm font-bold uppercase tracking-wider text-[rgba(214,90,44,1)]">
            PROCUREMENT JOURNEYS
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-[rgba(24,20,27,1)] lg:leading-[47.52px]">
            Keep diligence moving without inventing assurance.
          </h2>
          <p className="w-full max-w-[1060px] text-base sm:text-lg lg:text-xl font-normal leading-8 text-[rgba(102,95,105,1)]">
            Review security, privacy, AI governance, continuity and accessibility through the same source-bound journey.
          </p>
        </div>

        {/* 4 Dark Purple Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 bg-[rgba(48,17,83,1)] rounded-2xl flex flex-col justify-between gap-3 lg:h-32">
            <h3 className="text-white text-xl font-normal leading-7">Review domain</h3>
            <p className="text-zinc-300 text-sm font-normal leading-5">Start with the relevant Trust topic.</p>
          </div>

          <div className="p-6 bg-[rgba(48,17,83,1)] rounded-2xl flex flex-col justify-between gap-3 lg:h-32">
            <h3 className="text-white text-xl font-normal leading-7">Verify scope</h3>
            <p className="text-zinc-300 text-sm font-normal leading-5">Confirm service, environment and time context.</p>
          </div>

          <div className="p-6 bg-[rgba(48,17,83,1)] rounded-2xl flex flex-col justify-between gap-3 lg:h-32">
            <h3 className="text-white text-xl font-normal leading-7">Read access / source</h3>
            <p className="text-zinc-300 text-sm font-normal leading-5">Separate public evidence from conditional access.</p>
          </div>

          <div className="p-6 bg-[rgba(48,17,83,1)] rounded-2xl flex flex-col justify-between gap-3 lg:h-32">
            <h3 className="text-white text-xl font-normal leading-7">Follow approved owner</h3>
            <p className="text-zinc-300 text-sm font-normal leading-5">Use the owner or process named by the actual source.</p>
          </div>
        </div>

        {/* Alternative Text */}
        <p className="text-sm font-normal leading-5 text-[rgba(102,95,105,1)]">
          Journey text alternative: review the domain, verify its scope, inspect source and access labels, then follow the appropriate approved owner. Owner and process details are not supplied.
        </p>

        {/* Safe States Grid */}
        <div className="flex flex-col gap-5">
          <div className="text-sm font-bold uppercase tracking-wider text-[rgba(214,90,44,1)]">
            ILLUSTRATIVE SAFE STATES · Not live artifact availability
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="p-5 bg-white rounded-2xl border border-[rgba(216,206,221,1)] flex flex-col gap-2.5">
              <div className="text-base font-normal text-[rgba(24,20,27,1)]">Current</div>
              <div className="text-sm font-normal text-[rgba(102,95,105,1)] leading-5">
                Rely only within the approved source’s scope and date.
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-5 bg-white rounded-2xl border border-[rgba(216,206,221,1)] flex flex-col gap-2.5">
              <div className="text-base font-normal text-[rgba(24,20,27,1)]">Under review</div>
              <div className="text-sm font-normal text-[rgba(102,95,105,1)] leading-5">
                Review is pending; it does not establish current approval.
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-5 bg-white rounded-2xl border border-[rgba(216,206,221,1)] flex flex-col gap-2.5">
              <div className="text-base font-normal text-[rgba(24,20,27,1)]">Public evidence</div>
              <div className="text-sm font-normal text-[rgba(102,95,105,1)] leading-5">
                Inspect the specifically approved source, where supplied.
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-5 bg-white rounded-2xl border border-[rgba(216,206,221,1)] flex flex-col gap-2.5">
              <div className="text-base font-normal text-[rgba(24,20,27,1)]">Controlled · conditional</div>
              <div className="text-sm font-normal text-[rgba(102,95,105,1)] leading-5">
                Follow the actual access policy. No automatic entitlement.
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-5 bg-white rounded-2xl border border-[rgba(216,206,221,1)] flex flex-col gap-2.5">
              <div className="text-base font-normal text-[rgba(24,20,27,1)]">Unavailable</div>
              <div className="text-sm font-normal text-[rgba(102,95,105,1)] leading-5">
                No approved artifact or access path is established.
              </div>
            </div>

            {/* Card 6 */}
            <div className="p-5 bg-white rounded-2xl border border-[rgba(216,206,221,1)] flex flex-col gap-2.5">
              <div className="text-base font-normal text-[rgba(24,20,27,1)]">Superseded</div>
              <div className="text-sm font-normal text-[rgba(102,95,105,1)] leading-5">
                Use as historical context, never as current assurance.
              </div>
            </div>

            {/* Card 7 */}
            <div className="p-5 bg-white rounded-2xl border border-[rgba(216,206,221,1)] flex flex-col gap-2.5">
              <div className="text-base font-normal text-[rgba(24,20,27,1)]">Missing source</div>
              <div className="text-sm font-normal text-[rgba(102,95,105,1)] leading-5">
                Do not infer a claim; retain the domain destination.
              </div>
            </div>

            {/* Card 8 */}
            <div className="p-5 bg-white rounded-2xl border border-[rgba(216,206,221,1)] flex flex-col gap-2.5">
              <div className="text-base font-normal text-[rgba(24,20,27,1)]">Form error</div>
              <div className="text-sm font-normal text-[rgba(102,95,105,1)] leading-5">
                No request sent. Explain the missing process or source.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="rounded-2xl p-6 bg-[rgba(245,238,249,1)] border border-[rgba(216,206,221,1)] flex flex-col gap-2">
          <h4 className="text-sm font-bold text-[rgba(24,20,27,1)]">Static destinations stay useful</h4>
          <p className="text-sm font-normal leading-5 text-[rgba(102,95,105,1)]">
            The eight canonical domain paths are shown even when approved materials are missing. These specimens describe safe presentation; they do not claim runtime forms, no-JS behavior, live status or a working evidence portal.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
