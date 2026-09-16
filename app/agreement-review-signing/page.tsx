import type { Metadata } from "next";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Agreement Review & Signing | ZoikoTax",
};

export default function AgreementReviewSigningPage() {
  return (
    <section className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center bg-slate-50 py-16">
      <Reveal className="mx-auto max-w-xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Agreement Review & Signing
        </p>
        <h1 className="mt-4 text-2xl font-bold text-brand-navy sm:text-3xl">
          This workflow is coming soon.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-brand-navy/70">
          Governed review and e-signature for customer agreements will live
          here. Check back soon, or reach out to your ZoikoTax contact for
          early access.
        </p>
      </Reveal>
    </section>
  );
}
