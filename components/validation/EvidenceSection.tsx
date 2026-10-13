import { SectionShell } from "./shared";

const TITLE = "text-[28px] font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-[47.52px]";

export default function EvidenceSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-9">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-orange-600">Evidence context</span>
            <h2 className={`${TITLE} text-zinc-900`}>The source determines scope and freshness.</h2>
          </div>
          <p className="text-base leading-6 text-stone-500">
            An authorized source record must establish the reference, review date, version and provenance. Only
            rights-approved information may be made public.
          </p>
          <div className="flex flex-col gap-3 border-t border-zinc-300 pt-5">
            <p className="text-sm font-semibold text-zinc-900">Public source / review context</p>
            <p className="text-xl text-stone-500">Not available</p>
            <p className="text-sm leading-5 text-stone-500">
              No source feed, review timestamp or approved evidence reference is available on this page.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl bg-[#301153] p-6 sm:p-9">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-orange-300">Appropriate access</span>
            <h2 className={`${TITLE} text-white`}>Public doctrine. Authorized evidence.</h2>
          </div>
          <p className="text-base leading-6 text-zinc-300">
            This page explains a coverage definition. It does not publish private test materials, customer outputs,
            audit documents or risk grades.
          </p>
          <p className="text-lg font-semibold leading-7 text-white sm:text-xl">
            Auditors and account users must use their existing authorized systems.
          </p>
          <p className="text-sm leading-5 text-zinc-300">
            A missing public source is not an invitation to access a test environment, sandbox or API. Authorization
            remains separate from coverage doctrine.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
