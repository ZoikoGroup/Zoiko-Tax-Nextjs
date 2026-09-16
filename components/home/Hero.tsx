import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-sky-500/40 via-brand-purple/40 to-transparent blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]"
      />

      <div className="section-container relative py-24 sm:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Ready to modernize telecom fiscal compliance?
          </p>
          <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
            See how ZoikoTax fits your telecom architecture.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            Explore the operating model, governed capabilities and market-ready
            approach that fit your fiscal-compliance transformation.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#book-a-demo"
              className="w-full rounded-full bg-brand-orange px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-orange-light sm:w-auto"
            >
              Book a Demo
            </Link>
            <Link
              href="#coverage"
              className="w-full rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white sm:w-auto"
            >
              View Coverage
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
