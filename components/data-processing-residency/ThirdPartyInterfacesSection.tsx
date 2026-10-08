import { Workflow, Unplug, Network, Info } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const TOPICS = [
  {
    icon: Workflow,
    title: "ZoikoTax subprocessors",
    description: "A current approved source must establish identity, processing purpose, location and role for the exact service and data domain.",
    qualifier: "No vendor or location list supplied."
  },
  {
    icon: Unplug,
    title: "Customer-directed integrations",
    description: "Customer-directed interfaces are distinct from ZoikoTax subprocessors. An integration’s geography does not prove customer data residency.",
    qualifier: "Role and scope require independent review."
  },
  {
    icon: Network,
    title: "Networks & authorities",
    description: "An external network or authority interface does not, on its own, establish subprocessor status or a legal transfer classification.",
    qualifier: "Privacy / Legal classification required."
  }
];

export default function ThirdPartyInterfacesSection() {
  return (
    <SectionShell id="third-party-interfaces" className="bg-transparent" imageSrc="/existing-tax-engines/0.png">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="THIRD-PARTY INTERFACES"
          title="Third-party roles need their own source."
          description={<span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Use only current approved subprocessor identity, purpose, location, source version and review information. None is supplied here.</span>}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TOPICS.map((topic, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-6">
              <topic.icon className="h-6 w-6 text-[rgba(214,90,44,1)]" strokeWidth={1.5} />
              <h4 className="text-[22px] font-normal text-[rgba(24,20,27,1)]">{topic.title}</h4>
              <p className="text-[17px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                {topic.description}
              </p>
              <span className="text-[14px] font-semibold text-[rgba(48,17,83,1)] mt-auto">
                {topic.qualifier}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8 rounded-2xl bg-[rgba(242,234,248,1)] p-6 items-center">
          <h4 className="text-xl font-normal text-[rgba(48,17,83,1)] shrink-0 md:w-[360px]">
            Current approved subprocessor<br/>source
          </h4>
          <p className="text-base font-normal leading-relaxed text-[rgba(102,95,105,1)] whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
            Named governed-source placeholder — exact source URL, version and review information not supplied.<br/>Controlled access is conditional on an approved disclosure process; no request route or change-notification<br/>commitment is established.
          </p>
        </div>

        <div className="flex flex-row gap-4.5 rounded-2xl bg-[rgba(252,240,232,1)] p-6 border border-[rgba(229,185,163,1)]">
          <Info className="w-5.5 h-5.5 text-[rgba(214,90,44,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="text-[17px] font-bold text-[rgba(24,20,27,1)]">
              Do not substitute an illustrative vendor list
            </h4>
            <p className="text-[17px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              Unknown third-party location information remains unknown. A public architecture or customer integration list cannot fill this evidence gap.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
