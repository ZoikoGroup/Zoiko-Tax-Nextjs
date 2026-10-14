import { SectionHeading, SectionShell } from "./shared";

export default function GovernanceSection() {
  return (
    <SectionShell className="bg-[#1f0a3a]" bgImage="governance-bg.webp">
      <SectionHeading
        dark
        eyebrow="Evidence & governance"
        title="A decision needs evidence. A status needs authority."
        description="Research is exploratory. Governance requirements describe what must be evaluated—not approvals that have already been achieved."
      />

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-5 rounded-3xl bg-[#301153] p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Controlled, cross-functional review</h3>
          <p className="text-base leading-6 text-zinc-300">
            Product, legal, tax/regulatory, and security owners evaluate evidence within their responsibilities.
            Architecture, privacy, and commercial review inform the relevant decision; no single role may infer a
            public status unilaterally.
          </p>
          <p className="text-base leading-6 text-orange-300">Publication requires separate governed authorization.</p>
        </div>
        <div className="flex flex-col gap-5 rounded-3xl bg-[#301153] p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Governed sources and version lineage</h3>
          <p className="text-base leading-6 text-zinc-300">
            Published coverage must be tied to its authorized source, stated scope, source version, and verification
            context. Document version is not source-registry version. CMS publication must preserve approved meaning
            and public visibility.
          </p>
          <p className="text-base leading-6 text-zinc-300">
            Private records, logs, intellectual property, and customer or partner details are not public evidence.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
