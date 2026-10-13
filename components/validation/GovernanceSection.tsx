import { ClipboardList, Search } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";

const RESPONSIBILITIES = [
  { title: "Product / Engineering", description: "Defined behavior, integration scope and technical review." },
  { title: "Tax / Regulatory", description: "Applicable requirements and governed content review." },
  { title: "Security", description: "Security and operational review requirements." },
  { title: "Release / Coverage", description: "Scope authorization, publication and withdrawal controls." },
  { title: "Content / Legal", description: "Public claims, limitations and approved wording." },
];

export default function GovernanceSection() {
  return (
    <SectionShell className="bg-white" bgImage="governance-bg.webp">
      <SectionHeading
        eyebrow="Governed decisions"
        title="Assessment is not release authorization."
        description="A conceptual decision model. These are governance requirements, not completed gates or supplied signoffs."
      />

      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-4 self-stretch rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300">
          <Search aria-hidden="true" className="size-7 text-orange-600" strokeWidth={1.5} />
          <h3 className="text-xl leading-7 text-zinc-900">Research / evaluation</h3>
          <p className="text-base leading-6 text-stone-500">
            An exact scope may be explored and evaluated. Research does not itself authorize formal validation or
            deployment.
          </p>
        </div>
        <div className="flex flex-col gap-4 self-stretch rounded-2xl bg-[#301153] p-6 outline -outline-offset-1 outline-white/10">
          <ClipboardList aria-hidden="true" className="size-7 text-orange-300" strokeWidth={1.5} />
          <h3 className="text-xl leading-7 text-white">Formal validation</h3>
          <p className="text-base leading-6 text-zinc-300">
            A defined scope is under formal assessment. This is not a commitment to a Pilot, Production or a release
            date.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300">
          <h3 className="text-xl text-zinc-900">Separate authorization</h3>
          <p className="text-base leading-6 text-stone-500">
            Controlled Pilot OR Production requires an independent approval decision for its stated scope. Neither
            follows automatically from Validation.
          </p>
        </div>
      </div>

      <p className="text-base leading-6 text-stone-500">
        Decisions may branch, reverse, be suspended or require revalidation. The current authorized record—not an
        assumed lifecycle—determines the meaning of a state.
      </p>

      <div className="flex flex-col gap-6">
        <h3 className="text-xl text-zinc-900 sm:text-2xl">Review responsibilities to establish</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {RESPONSIBILITIES.map((item) => (
            <div key={item.title} className="flex flex-col gap-3 border-t border-zinc-300 pt-5">
              <h4 className="text-base text-zinc-900">{item.title}</h4>
              <p className="text-sm leading-5 text-stone-500">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-5 text-stone-500">
          Named owners, a RACI and approval signatures are not available here. State changes and release decisions are
          not public controls.
        </p>
      </div>
    </SectionShell>
  );
}
