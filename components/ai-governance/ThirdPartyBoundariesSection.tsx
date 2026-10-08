import { SectionShell, SectionHeading } from "./shared";

const REQUIREMENTS = [
  {
    title: "Processing boundary",
    description:
      "Hosted or internal scope must be source-defined. Processing terms belong in Privacy and Data Processing disclosures.",
  },
  {
    title: "Training, reuse & retention",
    description:
      "Neither customer-training permission nor prohibition is inferred. Reuse and retention require an approved statement.",
  },
  {
    title: "Legal classification & continuity",
    description:
      "Subprocessor classification belongs to approved Legal wording. No portability, continuity or provider-substitution guarantee is implied.",
  },
];

export default function ThirdPartyBoundariesSection() {
  return (
    <SectionShell id="boundaries" className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="09 · THIRD-PARTY MODEL & PROVIDER BOUNDARIES"
          title="Disclose what is approved. Infer nothing else."
          description="Provider identity and hosted or internal processing boundaries require approved disclosure. A use-case description is not a statement about who supplies the model, where data is processed or how it is reused."
        />

        {/* Provider disclosure boundary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left card */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-5 rounded-2xl bg-[rgba(48,17,83,1)] p-8 text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-[rgba(244,162,97,1)]">
              NOT PUBLISHED
            </span>
            <h3 className="text-3xl font-normal leading-snug">
              Provider details not published in supplied sources.
            </h3>
            <p className="text-[15px] font-normal leading-relaxed text-[rgba(217,208,223,1)]">
              No vendor identity, AI partnership, model availability or provider program is asserted.
            </p>
          </div>

          {/* Right card */}
          <div className="lg:col-span-8 flex flex-col justify-center divide-y divide-[rgba(216,206,221,1)] rounded-2xl bg-white border border-[rgba(216,206,221,1)] px-7 py-2">
            {REQUIREMENTS.map((req, i) => (
              <div key={i} className="flex flex-col gap-2 py-6">
                <h4 className="text-lg font-normal text-[rgba(24,20,27,1)]">{req.title}</h4>
                <p className="text-[15px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                  {req.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
