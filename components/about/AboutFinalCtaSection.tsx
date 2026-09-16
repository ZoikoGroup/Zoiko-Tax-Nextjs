import Link from "next/link";
import { Reveal, Eyebrow } from "./shared";

export default function AboutFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-orange/30 via-brand-purple/40 to-transparent blur-3xl"
      />
      <div className="section-container relative py-20 text-center sm:py-24">
        <Reveal className="mx-auto max-w-2xl">
          <Eyebrow>Ready when you are</Eyebrow>
          <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-4xl">
            See how ZoikoTax fits your telecom architecture.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Book time with our team to walk through coverage, integrations and
            the governance model behind ZoikoTax.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
