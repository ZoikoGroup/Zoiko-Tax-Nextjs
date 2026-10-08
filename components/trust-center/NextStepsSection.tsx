import { SectionHeading, SectionShell, PillButton } from "./shared";
import Link from "next/link";
import Image from "next/image";

export default function NextStepsSection() {
  return (
    <SectionShell className="bg-[#13032b] relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-luminosity">
        <Image src="/images/trust-center/assurance_next_steps.png" alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-12 relative z-10 items-center text-center max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <span className="text-sm font-bold uppercase tracking-wider text-orange-500">ASSURANCE FIRST</span>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Start with the domain. Continue with the source.</h2>
          <p className="text-lg text-slate-300 max-w-2xl">
            Explore the relevant scope and evidence pathway before a commercial conversation. Public trust information is never a demo prerequisite or a paywall.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <PillButton label="Explore Trust Domains" variant="primary" href="#domains" />
          <PillButton label="Evidence & Auditability" variant="secondary" href="/trust-center/evidence-auditability" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8 text-left">
          <div className="flex flex-col gap-4 rounded-3xl bg-[#2a0c4e] p-8 border border-white/10 hover:border-orange-500/50 transition-colors shadow-lg">
            <h3 className="text-xl font-bold text-white">Reporting a suspected vulnerability?</h3>
            <p className="text-sm text-slate-300 flex-1">Keep it separate from procurement.</p>
            <div className="mt-4">
              <Link href="/trust-center/responsible-disclosure" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300">
                Responsible Disclosure <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl bg-[#2a0c4e] p-8 border border-white/10 hover:border-orange-500/50 transition-colors shadow-lg">
            <h3 className="text-xl font-bold text-white">After diligence</h3>
            <p className="text-sm text-slate-300 flex-1">Explore whether ZoikoTax fits your architecture.</p>
            <div className="mt-4">
              <Link href="/demo" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300">
                Book a Demo · Optional <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
