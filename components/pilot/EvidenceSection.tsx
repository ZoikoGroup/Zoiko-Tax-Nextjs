import { FileSearch } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";

const DETAILS = [
  "Stage version",
  "Accountable owner",
  "Last verified",
  "Deployment limits",
  "Transition reason",
  "Permitted evidence / history",
];

export default function EvidenceSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex flex-col gap-6 lg:w-[440px] lg:shrink-0">
          <SectionHeading
            eyebrow="Evidence & currentness"
            title="A label needs an authoritative source."
            description="The approved coverage record should make its version, limits and basis clear. A document version is not a coverage registry version."
          />
          <p className="text-base leading-6 text-stone-500">
            Evidence and history are permission-bound. Private deployments, customer records and tenant evidence are
            not exposed here.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-6 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8">
          <div className="flex items-center gap-3.5">
            <FileSearch aria-hidden="true" className="size-7 shrink-0 text-orange-600" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-zinc-900">Approved registry source required</h3>
          </div>
          <p className="text-base leading-6 text-stone-500">
            No current coverage feed is supplied on this page. These are required record details, not published values.
          </p>
          <dl>
            {DETAILS.map((detail) => (
              <div
                key={detail}
                className="flex flex-col gap-1 border-t border-zinc-300 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              >
                <dt className="text-base font-medium text-zinc-900">{detail}</dt>
                <dd className="text-sm text-stone-500">Unavailable · source required</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionShell>
  );
}
