import { Badge, NoticeCard, RouteLink, SectionHeading, SectionShell, TRUST_ROUTES } from "./shared";

export default function ResidencySecuritySection() {
  return (
    <SectionShell className="bg-white" bgImage="residency-bg.webp">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="08 / DATA PROCESSING, RESIDENCY & TRANSFERS"
          title="Privacy is not a universal hosting promise."
          description="Data processing, residency and transfers have their own dedicated disclosure scope. A privacy summary cannot establish a location, customer choice or transfer mechanism."
        />

        <div className="flex flex-col gap-8 rounded-3xl bg-violet-950 p-6 sm:p-8 lg:flex-row lg:gap-14">
          <div className="flex flex-col gap-8 lg:w-[430px] lg:shrink-0">
            <h3 className="text-2xl leading-9 text-white sm:text-3xl">Separate scope. Separate source.</h3>
            <RouteLink dark {...TRUST_ROUTES.residency} />
          </div>
          <div className="flex flex-1 flex-col items-start gap-3">
            <p className="text-base leading-7 text-zinc-300">
              Location is not derived from product architecture. Any residency choice is context-specific, not
              universal.
            </p>
            <p className="text-base leading-7 text-zinc-300">
              Transfer mechanisms, support access and government lawful-request handling require governed,
              approved disclosures. No such terms are supplied in this view.
            </p>
            <Badge dark>Independent approved source required</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-3xl bg-purple-100 p-6 sm:p-8">
            <span className="text-xs font-bold text-amber-700">09 / SECURITY</span>
            <h3 className="text-2xl text-zinc-900 sm:text-3xl">Use the canonical controls disclosure.</h3>
            <p className="text-base leading-7 text-stone-500">
              Security owns the control summary. This page does not duplicate or invent cryptography, identity
              controls, certifications or security guarantees.
            </p>
            <RouteLink accent {...TRUST_ROUTES.security} />
          </div>

          <div className="flex flex-col items-start gap-6 rounded-3xl bg-white p-6 outline sm:p-8 outline-1 outline-offset-[-1px] outline-zinc-300">
            <span className="text-xs font-bold text-amber-700">WEBSITE / COOKIES &amp; ANALYTICS</span>
            <h3 className="text-2xl text-zinc-900 sm:text-3xl">Actual implementation only.</h3>
            <p className="text-base leading-7 text-stone-500">
              Cookie policy, preferences and public tracking disclosures need an actual governed source and
              destination. Neither is supplied. No banner, consent mechanism, session replay or recording is
              presumed.
            </p>
            <Badge>Information pending approved source</Badge>
          </div>
        </div>

        <NoticeCard
          title="Documents-driven disclosure, not fabricated privacy guarantees."
          description="Privacy topics cannot establish what tracking is deployed or what data is processed. This static view does not execute requests, consent, analytics or other website behavior."
        />
      </div>
    </SectionShell>
  );
}
