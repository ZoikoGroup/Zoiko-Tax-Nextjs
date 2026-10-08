import { SectionHeading, SectionShell } from "../trust-center/shared";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const CARDS = [
  {
    title: "Selectable or default region",
    description: "Only describe a selectable or default region when independently confirmed for the exact scope. Location availability is not customer choice."
  },
  {
    title: "Migration & replication",
    description: "Do not assume self-service migration or multi-region replication. Each requires its own approved capability and conditions."
  },
  {
    title: "Tenant pinning & contracts",
    description: "Per-tenant pinning exists only where actually supported. A contract option must not be inferred from a public location statement."
  },
  {
    title: "Sandbox vs production",
    description: "Test, sandbox and production environments may differ. An approval for one does not establish availability for the others."
  }
];

export default function CustomerConfigurationSection() {
  return (
    <SectionShell className="bg-[#1f0b40] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
        <Image src="/images/data-processing-residency/customer_configuration.png" alt="" fill className="object-cover" />
      </div>
      
      <div className="flex flex-col gap-12 relative z-10">
        <SectionHeading
          dark
          eyebrow="CUSTOMER CONFIGURATION"
          title="An existing location is not an option to choose."
          description="Review eligibility separately from geography. This page does not provide a region picker, migration control or simulated entitlement."
        />

        <div className="flex flex-col gap-8">
          {/* Conceptual workflow boundary */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-sm">
            <div className="flex flex-col gap-2 flex-1 items-center text-center">
              <span className="text-sm font-bold text-white">Existing deployment location</span>
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">Source required</span>
            </div>
            
            <ArrowRight className="h-6 w-6 text-white/30 hidden lg:block shrink-0" />
            <ArrowRight className="h-6 w-6 text-white/30 block lg:hidden rotate-90 shrink-0" />

            <div className="flex flex-col gap-2 flex-1 items-center text-center">
              <span className="text-sm font-bold text-white">Eligibility / contract / environment checks</span>
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">Separate governed assessment</span>
            </div>

            <ArrowRight className="h-6 w-6 text-white/30 hidden lg:block shrink-0" />
            <ArrowRight className="h-6 w-6 text-white/30 block lg:hidden rotate-90 shrink-0" />

            <div className="flex flex-col gap-2 flex-1 items-center text-center">
              <span className="text-sm font-bold text-white">Customer choice only if independently supported</span>
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">Not automatic; no option established</span>
            </div>
          </div>
          
          <p className="text-sm text-slate-400 text-center max-w-3xl mx-auto">
            Text equivalent: an existing deployment location must be verified first. Eligibility, contract and environment checks are separate. Customer choice follows only if independently supported for the customer’s service and capability; a known location alone grants nothing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {CARDS.map((card, i) => (
              <div key={i} className="flex flex-col gap-3 rounded-2xl bg-[#2a0c4e] p-6 shadow-md border border-white/10">
                <h4 className="text-lg font-bold text-white">{card.title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
