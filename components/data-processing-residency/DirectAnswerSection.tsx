import { SectionHeading, SectionShell } from "../trust-center/shared";
import Image from "next/image";

const DEFINITIONS = [
  {
    title: "Data residency",
    description: "A claim that specified data remains within an approved scope. It is not a synonym for hosting, market coverage or a globally available platform."
  },
  {
    title: "Storage",
    description: "Where a specified data domain is held at rest. This does not establish where it is processed, copied or accessed."
  },
  {
    title: "Processing",
    description: "Where computation or other processing occurs for a stated service and environment. It may differ from storage location."
  },
  {
    title: "Backup / replication",
    description: "Where recovery copies or replicas are held or processed. These need separate evidence; colocation is not assumed."
  },
  {
    title: "Operational access",
    description: "Where support, operations or privileged access may originate, and any approved restrictions. Storage location does not answer this."
  },
  {
    title: "Subprocessor processing",
    description: "Processing by a third party acting in the relevant role, with approved identity, purpose and location evidence."
  }
];

export default function DirectAnswerSection() {
  return (
    <SectionShell className="bg-[#fcfaff] relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 pointer-events-none">
        <Image src="/images/data-processing-residency/direct_answer.png" alt="" fill className="object-cover object-left" />
      </div>
      <div className="flex flex-col gap-12 relative z-10">
        <SectionHeading
          eyebrow="DIRECT ANSWER"
          title="What does a residency claim actually establish?"
          description="Only what a current, approved source establishes for the exact deployment and data domain — never universal regional support."
        />

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
          {/* Direct Answer Panel */}
          <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-sm border border-orange-100 flex-1">
            <h3 className="text-2xl font-bold text-slate-900">Global architecture ≠ local residency everywhere.</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Supported deployment and residency controls must be evidence-bound to the service, capability, environment and data domain. The supplied sources do not establish concrete location options or controls. Availability does not, by itself, establish customer choice, switching or pinning.
            </p>
          </div>
          
          {/* Legal Definition Panel */}
          <div className="flex flex-col gap-4 rounded-3xl bg-orange-50/50 p-8 shadow-sm border border-orange-100 flex-1 lg:max-w-md">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">LEGAL DEFINITION</span>
              <h3 className="text-xl font-bold text-slate-900">Cross-border transfer</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              A jurisdiction-specific legal assessment, not a conclusion inferred from a technical location. Privacy / Legal controls the approved interpretation and relevant contractual authority. See Privacy & Data Protection.
            </p>
          </div>
        </div>

        {/* Terminology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEFINITIONS.map((def, i) => (
            <div key={i} className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:border-orange-200 transition-colors">
              <h4 className="text-lg font-bold text-slate-900">{def.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{def.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
