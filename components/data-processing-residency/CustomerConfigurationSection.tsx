import { ArrowRight } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const TOPICS = [
  {
    title: "Selectable or default region",
    description: <span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Only describe a selectable or<br/>default region when<br/>independently confirmed for the<br/>exact scope. Location<br/>availability is not customer<br/>choice.</span>
  },
  {
    title: "Migration & replication",
    description: <span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Do not assume self-service<br/>migration or multi-region<br/>replication. Each requires its<br/>own approved capability and<br/>conditions.</span>
  },
  {
    title: "Tenant pinning & contracts",
    description: <span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Per-tenant pinning exists only<br/>where actually supported. A<br/>contract option must not be<br/>inferred from a public location<br/>statement.</span>
  },
  {
    title: "Sandbox vs production",
    description: <span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Test, sandbox and production<br/>environments may differ. An<br/>approval for one does not<br/>establish availability for the<br/>others.</span>
  }
];

export default function CustomerConfigurationSection() {
  return (
    <SectionShell id="customer-configuration" className="bg-white" imageSrc="/existing-tax-engines/0.png">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="CUSTOMER CONFIGURATION"
          title="An existing location is not an option to choose."
          description={<span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Review eligibility separately from geography. This page does not provide a region picker, migration control or simulated entitlement.</span>}
        />

        <div className="flex flex-col xl:flex-row gap-6 rounded-2xl bg-[rgba(242,234,248,1)] p-7 items-center w-full">
          <div className="flex flex-col gap-2.5 bg-white p-5 rounded-xl w-full xl:w-[356px] xl:h-[120px] border border-[rgba(216,206,221,1)]">
            <span className="text-lg font-normal text-[rgba(24,20,27,1)]">Existing deployment location</span>
            <span className="text-[13px] font-normal text-[rgba(102,95,105,1)]">Source required</span>
          </div>
          
          <ArrowRight className="w-6 h-6 text-[rgba(214,90,44,1)] shrink-0 hidden xl:block" />

          <div className="flex flex-col gap-2.5 bg-white p-5 rounded-xl w-full xl:w-[356px] xl:h-[120px] border border-[rgba(216,206,221,1)]">
            <span className="text-lg font-normal text-[rgba(24,20,27,1)] leading-tight">Eligibility / contract / environment checks</span>
            <span className="text-[13px] font-normal text-[rgba(102,95,105,1)]">Separate governed assessment</span>
          </div>
          
          <ArrowRight className="w-6 h-6 text-[rgba(214,90,44,1)] shrink-0 hidden xl:block" />

          <div className="flex flex-col gap-2.5 bg-[rgba(48,17,83,1)] p-5 rounded-xl w-full xl:w-[396px] xl:h-[120px] shrink-0">
            <span className="text-lg font-normal text-white leading-tight">Customer choice only if independently<br/>supported</span>
            <span className="text-[13px] font-normal text-[rgba(217,208,223,1)]">Not automatic; no option established</span>
          </div>
        </div>

        <p className="text-[17px] font-normal leading-relaxed text-[rgba(102,95,105,1)] whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
          Text equivalent: an existing deployment location must be verified first. Eligibility, contract and environment checks are separate. Customer choice follows only<br/>if independently supported for the customer&apos;s service and capability; a known location alone grants nothing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOPICS.map((topic, i) => (
            <div key={i} className="flex flex-col gap-3.5 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-6">
              <h4 className="text-[22px] font-normal leading-tight text-[rgba(24,20,27,1)]">{topic.title}</h4>
              <p className="text-[17px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
