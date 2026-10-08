import Image from "next/image";
import { ArrowIcon, LinkColumn, PillButton, SectionHeading } from "./shared";

const ROUTES = [
  { label: "Privacy", route: "/trust/privacy/" },
  { label: "Data Processing & Residency", route: "Named governed destination · Exact route not supplied" },
  { label: "Business Continuity", route: "/trust/business-continuity/" },
  { label: "Evidence & Auditability", route: "/trust/evidence-auditability/" },
];

export default function NextStepsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[rgba(18,3,39,0.5)]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/trust-center-security/security-next-steps.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(18,3,39,0.5)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-9">
          <SectionHeading
            dark
            eyebrow="15 / NEXT STEPS"
            title="Follow the evidence. Use the right route."
            description="Review the control domains and source requirements, continue your assurance review, or use the dedicated disclosure destination. These are distinct journeys."
          />

          <div className="grid grid-cols-1 gap-6 self-stretch lg:grid-cols-2">
            <div className="inline-flex flex-col items-start gap-5 self-stretch rounded-3xl bg-[rgba(48,17,83,1)] p-6 sm:p-8">
              <span className="text-xs font-bold text-orange-300">ASSURANCE REVIEW</span>
              <h3 className="self-stretch text-3xl text-white">Controls, sources and scope</h3>
              <p className="self-stretch text-base leading-6 text-zinc-300">
                Return to the domain index and evidence requirements. No artifact access is automatically
                approved.
              </p>
              <PillButton label="Review Security Controls" variant="primary" href="#control-domains" />
              <div className="w-full">
                <LinkColumn 
                  dark
                  label={
                    <span className="inline-flex items-center gap-1.5">
                      Visit Trust Center
                      <ArrowIcon white={false} />
                    </span>
                  }
                  route="/trust/"
                />
              </div>
            </div>

            <div className="inline-flex min-h-[24rem] flex-col items-start gap-5 self-stretch rounded-3xl bg-[rgba(33,16,52,1)] p-6 outline outline-1 outline-offset-[-1px] outline-slate-600 sm:p-8">
              <span className="text-xs font-bold text-orange-300">VULNERABILITY REPORTING</span>
              <h3 className="self-stretch text-3xl text-white">Responsible Disclosure</h3>
              <p className="self-stretch text-base leading-6 text-zinc-300">
                Use the governed reporting guidance. Do not use sales channels to submit vulnerability
                details.
              </p>
              <PillButton label="Responsible Disclosure" variant="ghost" href="#vulnerability-disclosure" />
              <p className="self-stretch text-sm leading-5 text-zinc-300">/trust/responsible-disclosure/</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 self-stretch sm:grid-cols-2 xl:grid-cols-4">
            {ROUTES.map((route) => (
              <LinkColumn 
                key={route.label} 
                dark 
                label={
                  <span className="inline-flex items-center gap-1.5">
                    {route.label}
                    <ArrowIcon white={false} />
                  </span>
                } 
                route={route.route} 
              />
            ))}
          </div>

          <div className="inline-flex w-full flex-col gap-2 border-t border-slate-600 pt-6 sm:flex-row sm:items-start sm:justify-between">
            <p className="text-xs text-zinc-300">Security | ZoikoTax Trust</p>
            <p className="text-xs text-zinc-300">Canonical public destination: /trust/security/</p>
          </div>
        </div>
      </div>
    </section>
  );
}
