import { SectionShell, SectionHeading, Reveal } from "./shared";

const facts = [
  { label: "Legal entity", value: "Zoiko Tech Inc." },
  { label: "Trading name", value: "ZoikoTax" },
  { label: "Parent group", value: "Zoiko Group" },
  { label: "Global headquarters", value: "Sacramento, California, United States" },
];

export default function CorporateInfoSection() {
  return (
    <SectionShell id="corporate-info" tone="dark">
      <SectionHeading
        eyebrow="Corporate Information"
        title="ZoikoTax is a trading name of Zoiko Tech Inc."
        tone="dark"
      />

      <Reveal className="mt-10">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <dt className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm text-white/80">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </SectionShell>
  );
}
