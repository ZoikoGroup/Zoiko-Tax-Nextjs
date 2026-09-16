import { SectionShell, SectionHeading, Reveal } from "./shared";

const regions = ["United States", "European Union", "United Kingdom", "Canada", "Australia"];
const segments = ["MVNOs", "MVNEs", "MVNEs & VNOs", "Voice, VoIP & UCaaS", "IoT & Satellite"];

export default function ScopeSection() {
  return (
    <SectionShell id="scope" tone="light">
      <SectionHeading
        eyebrow="Scope"
        title="One platform, scoped to how telecom actually runs."
        description="From regulatory packs to billing integrations, ZoikoTax scopes coverage around real operator segments and jurisdictions."
      />

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl border border-black/5 bg-slate-50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy/60">
              Regulatory coverage
            </h3>
            <ul className="mt-4 space-y-3">
              {regions.map((region) => (
                <li key={region} className="flex items-center gap-3 text-sm text-brand-navy">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  {region}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-black/5 bg-slate-50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy/60">
              Telecom segments
            </h3>
            <ul className="mt-4 space-y-3">
              {segments.map((segment) => (
                <li key={segment} className="flex items-center gap-3 text-sm text-brand-navy">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  {segment}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
