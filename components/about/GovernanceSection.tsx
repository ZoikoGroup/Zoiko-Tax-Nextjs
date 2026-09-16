import { SectionShell, SectionHeading, Reveal } from "./shared";

const principles = [
  "Every regulatory rule change is reviewed and approved by a qualified analyst before it goes live.",
  "AI is used to research, annotate and surface regulatory change — never to make an unreviewed determination.",
  "Access to override or approve a determination is scoped, logged and auditable.",
];

export default function GovernanceSection() {
  return (
    <SectionShell id="governance" tone="light">
      <SectionHeading
        eyebrow="Governance"
        title="Humans stay accountable. AI stays assistive."
        description="ZoikoTax is designed so accountability never gets delegated to a model."
      />

      <Reveal className="mt-10">
        <ol className="space-y-4">
          {principles.map((principle, index) => (
            <li
              key={principle}
              className="flex gap-4 rounded-xl border border-black/5 bg-slate-50 p-5"
            >
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-orange text-xs font-bold text-white">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed text-brand-navy/80">{principle}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </SectionShell>
  );
}
