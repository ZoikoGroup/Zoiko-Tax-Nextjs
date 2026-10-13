import { SectionHeading, SectionShell } from "./shared";

const ALLOWED = [
  "Questions about a user problem or possible business fit",
  "Evaluation methods and potential technical approaches",
  "Evidence needed to assess rules, provenance, and applicability",
  "Open questions and the boundaries of an exploratory scope",
];

const MUST_NOT_INFER = [
  "Supported tax rates, filing, remittance, or market activation",
  "Service quality, production reliability, or compliance conclusions",
  "Launch dates, release commitments, or regulatory approval",
  "Customer access, entitlement, trial availability, or live reliance",
];

export default function BoundariesSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading eyebrow="Interpretation boundaries" title="Describe the exploration. Never imply availability." />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-9">
          <h3 className="text-2xl font-bold text-zinc-900 sm:text-3xl">Allowed description</h3>
          <ul className="flex flex-col gap-6">
            {ALLOWED.map((item) => (
              <li key={item} className="flex items-start gap-3.5 text-base leading-7 text-stone-500 sm:text-lg">
                <span aria-hidden="true" className="text-xl text-orange-600">
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl bg-[#301153] p-6 outline -outline-offset-1 outline-white/10 sm:p-9">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Must not infer</h3>
          <ul className="flex flex-col gap-6">
            {MUST_NOT_INFER.map((item) => (
              <li key={item} className="flex items-start gap-3.5 text-base leading-7 text-zinc-300 sm:text-lg">
                <span aria-hidden="true" className="text-xl text-orange-600">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
