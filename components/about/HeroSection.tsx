import { Reveal, Eyebrow } from "./shared";

const stats = [
  { value: "40+", label: "Regulatory jurisdictions covered" },
  { value: "99.98%", label: "Filing accuracy across live tenants" },
  { value: "24/7", label: "Governed monitoring & orchestration" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-br from-sky-500/30 via-brand-purple/40 to-transparent blur-3xl"
      />
      <div className="section-container relative py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>About ZoikoTax</Eyebrow>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
            Fiscal compliance, built for the telecom operating model.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            ZoikoTax is a governed tax determination and compliance platform
            purpose-built for MVNOs, MVNEs and telecom operators navigating
            fast-changing regulatory obligations across every market they serve.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-orange/40"
              >
                <p className="text-3xl font-bold text-brand-orange">{stat.value}</p>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
