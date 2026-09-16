import { SectionShell, SectionHeading, Reveal } from "./shared";

const offices = [
  {
    title: "Global Headquarters",
    location: "Sacramento, California, United States",
    detail: "Product, engineering and platform governance.",
  },
  {
    title: "European Headquarters",
    location: "London W1F 9RP, United Kingdom",
    detail: "EU/UK regulatory operations and coverage packs.",
  },
];

export default function GeographicSection() {
  return (
    <SectionShell id="geographic" tone="muted">
      <SectionHeading
        eyebrow="Global Presence"
        title="Local regulatory depth, backed by a global platform."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {offices.map((office, index) => (
          <Reveal key={office.title} delay={index * 0.1}>
            <div className="h-full rounded-2xl border border-black/5 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
                {office.title}
              </h3>
              <p className="mt-3 text-base font-medium text-brand-navy">
                {office.location}
              </p>
              <p className="mt-2 text-sm text-brand-navy/70">{office.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
