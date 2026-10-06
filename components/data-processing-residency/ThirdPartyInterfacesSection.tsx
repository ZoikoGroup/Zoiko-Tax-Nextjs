import { SectionHeading, SectionShell } from "../trust-center/shared";
import { Workflow, Unplug, Network, Info } from "lucide-react";
import Image from "next/image";

const DISTINCTIONS = [
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
    <SectionShell className="bg-slate-50 relative overflow-hidden">
      <div className="absolute left-0 top-0 h-[70%] w-1/3 opacity-10 pointer-events-none">
        <Image src="/images/data-processing-residency/third_party_interfaces.png" alt="" fill className="object-cover object-right" />
      </div>

      <div className="flex flex-col gap-12 relative z-10 max-w-6xl mx-auto w-full">
        <SectionHeading
          eyebrow="THIRD-PARTY INTERFACES"
          title="Third-party roles need their own source."
          description="Use only current approved subprocessor identity, purpose, location, source version and review information. None is supplied here."
        />

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-2/3">
            {DISTINCTIONS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-600 flex-1">{item.description}</p>
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">{item.qualifier}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-6 lg:w-1/3">
            <div className="flex flex-col gap-4 rounded-3xl bg-slate-900 p-8 shadow-sm">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Governed source placeholder</span>
                <h4 className="text-xl font-bold text-white">Current approved subprocessor source</h4>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Named governed-source placeholder — exact source URL, version and review information not supplied. Controlled access is conditional on an approved disclosure process; no request route or change-notification commitment is established.
              </p>
            </div>

            <div className="flex items-start gap-3 mt-2 rounded-xl bg-orange-50 border border-orange-100 p-5">
              <Info className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-slate-900">Do not substitute an illustrative vendor list</span>
                <span className="text-sm text-slate-700">Unknown third-party location information remains unknown. A public architecture or customer integration list cannot fill this evidence gap.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
