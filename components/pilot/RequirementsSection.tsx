import { Check, Minus } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";

const MUST_STATE = [
  { title: "Environment and limits", detail: "The authorized conditions, time window and restrictions." },
  {
    title: "Permitted reliance",
    detail: "Who may use the outputs, for which purpose, and under which limits.",
  },
  { title: "Source authority", detail: "The approved record, evidence permissions and currentness." },
  {
    title: "Escalation",
    detail: "The authorized way to resolve scope questions or conflicting information.",
  },
];

const NOT_ASSUMED = [
  { title: "Eligibility or enrollment", detail: "A Pilot label is not permission to join or onboard." },
  {
    title: "Production transactions or approvals",
    detail: "Production use and regulatory authorization are not implied.",
  },
  {
    title: "SLA or guarantees",
    detail: "No service level, accuracy or outcome guarantee follows from this page.",
  },
  {
    title: "Funding or commercial availability",
    detail: "No funding arrangement, purchase right or open offer is established.",
  },
];

export default function RequirementsSection() {
  return (
    <SectionShell className="bg-white" bgImage="requirements-bg.webp">
      <SectionHeading eyebrow="Requirements & exclusions" title="State the limits. Avoid the assumptions." />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-7 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-9">
          <h3 className="text-2xl font-bold leading-9 text-zinc-900 sm:text-3xl">
            What a confirmed Pilot record must state
          </h3>
          <ul className="flex flex-col gap-7">
            {MUST_STATE.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-orange-600" strokeWidth={2.5} />
                <div className="flex flex-col gap-1.5">
                  <p className="text-base font-semibold text-zinc-900">{item.title}</p>
                  <p className="text-base leading-6 text-stone-500">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-7 rounded-3xl bg-[#301153] p-6 sm:p-9">
          <h3 className="text-2xl font-bold leading-9 text-white sm:text-3xl">What must not be assumed</h3>
          <span className="text-xs font-bold uppercase text-orange-300">Not established by this page</span>
          <ul className="flex flex-col gap-7">
            {NOT_ASSUMED.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <Minus aria-hidden="true" className="mt-1 size-4 shrink-0 text-orange-300" strokeWidth={2.5} />
                <div className="flex flex-col gap-1.5">
                  <p className="text-base font-semibold text-white">{item.title}</p>
                  <p className="text-base leading-6 text-zinc-300">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
