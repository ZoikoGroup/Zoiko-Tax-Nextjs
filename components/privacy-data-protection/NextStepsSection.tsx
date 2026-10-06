import { ArrowRightIcon, PrimaryButton, RouteLink, SectionHeading, SectionShell, TRUST_ROUTES } from "./shared";

const ROUTES = [TRUST_ROUTES.residency, TRUST_ROUTES.security, TRUST_ROUTES.evidence];

export default function NextStepsSection() {
  return (
    <SectionShell className="bg-violet-950" bgImage="next-steps-bg.webp">
      <div className="flex flex-col gap-10">
        <SectionHeading
          dark
          eyebrow="14 / TRUST-FIRST NEXT STEPS"
          title="Take the next step toward the right source."
          description="Start with authoritative documents and their source requirements. If an approved request route is later provided, use the route in the applicable notice. No sales gate is required to read this page."
        />

        <div className="flex flex-wrap items-center gap-4">
          <PrimaryButton label="View authoritative privacy documents" href="#documents" />
          <a
            href={TRUST_ROUTES.trustCenter.href}
            className="inline-flex items-center gap-3 rounded-[999px] px-5 py-3.5 sm:py-4 text-sm font-semibold text-white outline outline-1 outline-offset-[-1px] outline-white/40 transition-colors hover:bg-white/10"
          >
            {TRUST_ROUTES.trustCenter.label}
            <ArrowRightIcon />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-11">
          {ROUTES.map((route) => (
            <RouteLink key={route.label} dark {...route} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
