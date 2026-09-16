import { SectionShell, Reveal, Eyebrow } from "./shared";

export default function MissionSection() {
  return (
    <SectionShell id="mission" tone="muted">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow>Our Mission</Eyebrow>
        <p className="mt-5 text-2xl font-semibold leading-snug text-brand-navy sm:text-3xl">
          Make fiscal compliance a governed, provable part of the telecom
          operating model — not an afterthought bolted onto billing.
        </p>
        <p className="mt-6 text-base leading-relaxed text-brand-navy/70">
          We build the determination, filing and assurance layer telecom
          operators can trust, so tax, finance and product teams work from the
          same governed source of truth.
        </p>
      </Reveal>
    </SectionShell>
  );
}
