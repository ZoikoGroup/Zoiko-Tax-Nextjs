import Image from "next/image";
import { SectionShell } from "./shared";

export default function CurrentnessSection() {
  return (
    <SectionShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/existing-tax-engines/0.png" alt="Background" fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-10 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[rgba(214,90,44,1)]">
            CURRENTNESS & UPDATES
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-[rgba(24,20,27,1)] lg:leading-[47.52px]">
            Current means source-approved—not merely visible.
          </h2>
          <p className="w-full max-w-[1060px] text-base sm:text-lg lg:text-xl font-normal leading-8 text-[rgba(102,95,105,1)]">
            A statement needs its own approved scope, owner and time context. Missing current-source metadata must not<br className="hidden md:block" />
            silently become a current claim.
          </p>
        </div>

        {/* Source record · Required metadata Card */}
        <div className="w-full rounded-3xl bg-[rgba(245,238,249,1)] p-6 sm:p-8 border border-[rgba(216,206,221,1)] flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <h3 className="text-2xl font-normal text-[rgba(24,20,27,1)]">
              Source record · Required metadata
            </h3>
            <span className="text-sm font-normal text-[rgba(102,95,105,1)]">
              Currentness: Not established
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-normal text-[rgba(102,95,105,1)]">
                Approved source / exact scope
              </span>
              <span className="text-sm font-bold text-[rgba(24,20,27,1)]">
                Not supplied
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-normal text-[rgba(102,95,105,1)]">
                Domain owner
              </span>
              <span className="text-sm font-bold text-[rgba(24,20,27,1)]">
                Not supplied
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-normal text-[rgba(102,95,105,1)]">
                Reviewed / effective date
              </span>
              <span className="text-sm font-bold text-[rgba(24,20,27,1)]">
                Not supplied
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-normal text-[rgba(102,95,105,1)]">
                Version, if applicable
              </span>
              <span className="text-sm font-bold text-[rgba(24,20,27,1)]">
                Not supplied
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-normal text-[rgba(102,95,105,1)]">
                Approved currentness state
              </span>
              <span className="text-sm font-bold text-[rgba(24,20,27,1)]">
                Not supplied
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-normal text-[rgba(102,95,105,1)]">
                Change summary
              </span>
              <span className="text-sm font-bold text-[rgba(24,20,27,1)]">
                Not supplied
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
          <div className="flex flex-col gap-3 w-full lg:w-[628px]">
            <h3 className="text-2xl font-normal text-[rgba(24,20,27,1)]">
              Use only the state the source supports.
            </h3>
            <p className="text-base font-normal leading-7 text-[rgba(102,95,105,1)]">
              Current, under review, superseded and withdrawn are distinct editorial<br className="hidden lg:block" />
              states. A review in progress is not an approval. A replacement must identify<br className="hidden lg:block" />
              the new approved source and preserve historical context.
            </p>
          </div>

          <div className="w-full lg:w-[628px] p-6 sm:p-8 rounded-2xl bg-[rgba(245,238,249,1)] border border-[rgba(216,206,221,1)] flex flex-col gap-2">
            <h4 className="text-sm font-bold text-[rgba(24,20,27,1)]">
              Missing source → no current assurance
            </h4>
            <p className="text-sm font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              No reviewed date, effective date, owner, version or change history is supplied.<br className="hidden lg:block" />
              Historical or withdrawn material must not be presented as current. Technical and<br className="hidden lg:block" />
              domain owners approve factual claims; publishing alone cannot create trust.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
